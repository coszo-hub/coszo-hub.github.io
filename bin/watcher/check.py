"""The Watcher's daily check: how each watched sensor (watchlist.json) recorded over one UTC day.

States, one a sensor:
  ok         recording, no gap longer than its list's normal gap ("gap", minutes)
  gaps       recording, with a gap longer than that (yellow)
  diverted   a seismometer or low-frequency hydrophone whose 8 Hz data reached EarthScope while its 200 Hz data did
             not: the Navy's diversion of the high-rate data (blue); and a broadband hydrophone without its files on a
             day the seismometers' 200 Hz data are diverted
  no_data    nothing for the whole day (red)
  unchecked  nothing public says (QA/QC plots only, a station EarthScope does not list, Nereus not monitoring)
  failed     the check could not be made (a service down); not a statement about the sensor
How: Nereus's hourly data check (GOOD, BAD) over the day; EarthScope: the day's 8 Hz vertical (MHZ) records read
from their MiniSEED headers, and the 200 Hz channel (HHZ, EHZ, or the hydrophone's HDH) probed a minute an hour;
ERDDAP's 10-minute bins in which a measured variable has a value (orderByCount; a row of NaNs or of a predicted tide
is not data), up to its newest row: alone where Nereus does not monitor the instrument, else as a second check. The Axial Seamount catalog page's line "Status of 200 Hz
waveform data" is kept with the report. A state carries "since", the first day of the run of days it has held, from
the previous report.
Usage: python check.py [--day YYYY-MM-DD (default yesterday UTC)] [--watchlist PATH] [--previous latest.json]
                       [--out report.json] [--jobs 8]"""
import argparse
import json
import re
import ssl
import struct
import sys
import time
import urllib.error
import urllib.request
from concurrent.futures import ThreadPoolExecutor
from datetime import date, datetime, timedelta, timezone
from pathlib import Path

ERDDAP = "https://erddap.dataexplorer.oceanobservatories.org/erddap"
FDSN = "https://service.earthscope.org/fdsnws"
NEREUS = "https://nereus.ooirsn.uw.edu/hasura/v1/graphql"
AXIAL = "http://axial.ocean.washington.edu/"
BIN = 10   # minutes, ERDDAP's bins
UA = {"User-Agent": "RCA-Atlas-Watcher/1.0 (daily data check)"}


def tls() -> ssl.SSLContext:
    try:
        import certifi
        return ssl.create_default_context(cafile=certifi.where())
    except ImportError:
        return ssl.create_default_context()


TLS = tls()


def get(url: str, timeout: int = 120, data: bytes | None = None, headers: dict | None = None) -> tuple[int, bytes]:
    """Status and body; 204 and 404 (no data) come back as such, other failures raise after two tries."""
    for attempt in range(2):
        try:
            req = urllib.request.Request(url, data=data, headers={**UA, **(headers or {})})
            with urllib.request.urlopen(req, timeout=timeout, context=TLS) as r:
                return r.status, r.read()
        except urllib.error.HTTPError as e:
            if e.code in (204, 404):
                return e.code, e.read()
            if attempt:
                raise
        except Exception:
            if attempt:
                raise
        time.sleep(5)
    raise RuntimeError("unreachable")


def spans_gaps(spans: list[tuple[float, float]], start: float, end: float) -> tuple[float, float, float | None]:
    """Coverage (0-1), longest gap (minutes) and the last data time, of [start, end) by spans (epoch seconds)."""
    covered, longest, cursor, last = 0.0, 0.0, start, None
    for a, b in sorted(spans):
        a, b = max(a, start), min(b, end)
        if b <= a:
            continue
        if a > cursor:
            longest = max(longest, a - cursor)
        covered += max(0.0, b - max(a, cursor))
        cursor = max(cursor, b)
        last = cursor
    longest = max(longest, end - cursor)
    return covered / (end - start), longest / 60, last


def grade(coverage: float, longest: float, allowed: int) -> str:
    return "no_data" if coverage <= 0 else "gaps" if longest > allowed else "ok"


def iso(t: float | None) -> str | None:
    return datetime.fromtimestamp(t, timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ") if t else None


# ERDDAP --------------------------------------------------------------------------------------------------------------

# Not measurements: QC results, coordinates, and what is computed from the clock alone. A BOTPT's predicted tide
# (predtide, botsflu_predtide) fills a row every minute whether or not the instrument sends anything: the Central
# Caldera BOTPT's rows on 15 Nov 2026 held only that, every pressure and tilt NaN since 28 Oct, and counting rows called
# it recording.
NOT_MEASURED = re.compile(r"_qc_|^(?:time|latitude|longitude|z|depth|station|deployment|id|predtide|botsflu_predtide)$", re.I)


# A sensor's dataset carries its profiler's or package's CTD readings beside its own (an oxygen optode's has the
# pressure, temperature and salinity; the depth reading stopped on the Oregon Offshore pod in October 2025, its oxygen in
# August 2026): those say nothing of the sensor, so they count only in a CTD's own dataset, which has nothing else.
CO_LOCATED = re.compile(r"^(?:depth_reading|sea_water_(?:pressure|temperature|practical_salinity|density|electrical_conductivity))(?:_|$)", re.I)


def erddap_info(dataset: str) -> tuple[float | None, list[str]]:
    """The time of a dataset's newest row (time_coverage_end) and the sensor's own measured variables."""
    _, body = get(f"{ERDDAP}/info/{dataset}/index.json")
    rows = json.loads(body)["table"]["rows"]
    end = next((r[4] for r in rows if r[0] == "attribute" and r[2] == "time_coverage_end"), None)
    measured = [r[1] for r in rows if r[0] == "variable" and not NOT_MEASURED.search(r[1])]
    measured = [v for v in measured if not CO_LOCATED.search(v)] or measured
    newest = datetime.strptime(end, "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc).timestamp() if end else None
    return newest, measured


def erddap_last_measured(dataset: str, variable: str, before: float, days: int = 400) -> float | None:
    """The time of the newest value of a measured variable in the days before `before`."""
    status, body = get(f"{ERDDAP}/tabledap/{dataset}.csv?time&{variable}!=NaN&time%3E={iso(before - days * 86400)}"
                       f"&time%3C{iso(before)}&orderByMax(%22time%22)")
    lines = [x.strip() for x in body.decode().splitlines()[2:] if x.strip()] if status == 200 else []
    return datetime.strptime(lines[-1], "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc).timestamp() if lines else None


def check_erddap(sensor: dict, day: date) -> dict:
    """The day's 10-minute bins in which a measured variable has a value (a row of NaNs is not data), up to the
    dataset's newest row: ERDDAP can be a day or more behind the instruments (15 Nov 2026: every RS dataset ended at
    11:30 UTC while Nereus had them reporting), so the part it has not reached is not a gap. A day without a measured
    value is dated from the last one."""
    dataset = sensor["check"]["dataset"]
    start = datetime(day.year, day.month, day.day, tzinfo=timezone.utc).timestamp()
    newest, measured = erddap_info(dataset)
    out = {"source": "OOI ERDDAP", "erddapNewest": iso(newest)}
    if not measured:
        return {**out, "state": "unchecked", "detail": "ERDDAP lists no measured variable for it"}
    bins = []
    if newest is not None and newest > start:
        status, body = get(f"{ERDDAP}/tabledap/{dataset}.csv?time,{','.join(measured)}&time%3E={iso(start)}&time%3C{iso(start + 86400)}"
                           f"&orderByCount(%22time/{BIN}minutes%22)")
        for line in body.decode().splitlines()[2:] if status == 200 else []:
            cells = line.split(",")
            if len(cells) > 1 and any(c.strip() not in ("", "0", "NaN") for c in cells[1:]):
                bins.append(datetime.strptime(cells[0].strip(), "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc).timestamp())
    if not bins:
        before = min(start + 86400, newest or start + 86400)
        last = max((t for t in (erddap_last_measured(dataset, v, before) for v in measured) if t), default=None)
        return {**out, "state": "no_data", "coverage": 0.0, "lastData": iso(last),
                **({"detail": "ERDDAP's rows that day hold no measured value"} if newest and newest > start else {})}
    end = min(start + 86400, newest)
    coverage, longest, last = spans_gaps([(t, t + BIN * 60) for t in bins], start, end)
    return {**out, "state": grade(coverage, longest, max(sensor["gap"], BIN)), "coverage": round(coverage, 3),
            "longestGapMin": round(longest), "lastData": iso(last), "checkedTo": iso(end)}


def combined(primary: dict, second: dict, day: date) -> dict:
    """Nereus's state checked against ERDDAP's, two independent witnesses; either can be wrong. ERDDAP's data for
    the day show the instrument recorded whatever Nereus's check said; ERDDAP with a gap, or with nothing for a day
    it has already passed, makes a good Nereus day yellow; ERDDAP not having reached the day yet says nothing."""
    if primary["state"] in ("unchecked", "failed"):
        return {**second, "nereusCheck": {k: v for k, v in primary.items() if k != "source"}}
    end = iso(datetime(day.year, day.month, day.day, tzinfo=timezone.utc).timestamp() + 86400)
    passed = bool(second.get("erddapNewest")) and second["erddapNewest"] >= end
    out = {**primary, "erddap": {k: v for k, v in second.items() if k != "source"}, "agree": primary["state"] == second["state"]}
    if primary["state"] == "no_data" and second.get("coverage", 0) > 0:
        return {**out, "state": second["state"], "lastData": second.get("lastData"),
                "detail": "Nereus's check was bad all day, but ERDDAP has the day's data"}
    if primary["state"] == "ok" and second["state"] == "gaps":
        return {**out, "state": "gaps", "detail": f"Nereus's hours were good, but ERDDAP has a {second['longestGapMin']}-minute gap"}
    if primary["state"] == "ok" and second["state"] == "no_data" and passed:
        return {**out, "state": "gaps", "detail": "Nereus's hours were good, but ERDDAP, past the day, has nothing for it"}
    return {**out, **({"agree": True} if second["state"] == "no_data" and not passed else {})}


# EarthScope ----------------------------------------------------------------------------------------------------------

def mseed_spans(raw: bytes) -> list[tuple[float, float]]:
    """(start, end) of each MiniSEED 2 record, from its fixed header and blockette 1000 (record length)."""
    spans, pos = [], 0
    while pos + 48 <= len(raw):
        head = raw[pos:pos + 48]
        endian = ">" if 1900 < struct.unpack(">H", head[20:22])[0] < 2100 else "<"
        year, doy, hh, mm, ss, _, frac = struct.unpack(endian + "HHBBBBH", head[20:30])
        nsamp, factor, mult = struct.unpack(endian + "Hhh", head[30:36])
        first = struct.unpack(endian + "H", head[46:48])[0]
        length, b = 512, first
        while b and pos + b + 8 <= len(raw):
            kind, nxt = struct.unpack(endian + "HH", raw[pos + b:pos + b + 4])
            if kind == 1000:
                length = 2 ** raw[pos + b + 6]
                break
            b = nxt
        rate = (factor * mult if mult > 0 else -factor / mult) if factor > 0 else \
            (-mult / factor if mult > 0 else 1 / (factor * mult)) if factor < 0 else 0
        if rate and nsamp:
            t = datetime(year, 1, 1, hh, mm, ss, tzinfo=timezone.utc).timestamp() + (doy - 1) * 86400 + frac / 1e4
            spans.append((t, t + nsamp / rate))
        pos += length
    return spans


def dataselect(net: str, sta: str, cha: str, a: datetime, b: datetime) -> bytes | None:
    url = (f"{FDSN}/dataselect/1/query?net={net}&sta={sta}&loc=*&cha={cha}"
           f"&start={a:%Y-%m-%dT%H:%M:%S}&end={b:%Y-%m-%dT%H:%M:%S}&nodata=404")
    status, body = get(url, timeout=300)
    return body if status == 200 and body else None


def station_channels(day: date) -> dict[str, set[str]]:
    url = f"{FDSN}/station/1/query?net=OO&level=channel&format=text&starttime={day}&endtime={day + timedelta(days=1)}"
    status, body = get(url)
    chans: dict[str, set[str]] = {}
    for line in body.decode().splitlines()[1:] if status == 200 else []:
        p = line.split("|")
        if len(p) > 3:
            chans.setdefault(p[1], set()).add(p[3])
    return chans


def check_earthscope(sensor: dict, day: date, channels: dict[str, set[str]]) -> dict:
    c = sensor["check"]
    have = channels.get(c["station"], set())
    high = c.get("channel") or next((x for x in ("HHZ", "EHZ") if x in have), None)
    if "MHZ" not in have or high not in have:
        return {"state": "unchecked", "detail": f"EarthScope lists no 8 Hz and 200 Hz channels for OO.{c['station']} on {day}"}
    start = datetime(day.year, day.month, day.day, tzinfo=timezone.utc)
    raw = dataselect(c["network"], c["station"], "MHZ", start, start + timedelta(days=1))
    spans = mseed_spans(raw or b"")
    coverage, longest, last = spans_gaps(spans, start.timestamp(), start.timestamp() + 86400)
    # The 200 Hz channel, a minute at the half hour of each hour; an hour counts only where the 8 Hz data are there.
    probes = []
    for h in range(24):
        t = start + timedelta(hours=h, minutes=30)
        low_there = any(a <= t.timestamp() <= b for a, b in spans)
        if low_there:
            probes.append((h, dataselect(c["network"], c["station"], high, t, t + timedelta(minutes=1)) is not None))
    missing = [h for h, ok in probes if not ok]
    out = {"coverage": round(coverage, 3), "longestGapMin": round(longest), "lastData": iso(last),
           "highRate": {"channel": high, "hoursProbed": len(probes), "hoursMissing": missing}, "source": "EarthScope"}
    if coverage <= 0:
        return {**out, "state": "no_data"}
    # Three probed hours or more without the 200 Hz data while the 8 Hz data arrived: diverted.
    if len(missing) >= 3:
        return {**out, "state": "diverted"}
    return {**out, "state": grade(coverage, longest, sensor["gap"])}


# OOI raw data server ------------------------------------------------------------------------------------------------

RAWDATA = "https://rawdata.oceanobservatories.org/files"
RAW_FILE = re.compile(r"(\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d)(?:\.\d+)?Z\.mseed")
RAW_MINUTES = 5   # a broadband hydrophone's file length


def raw_files(path: str, day: date) -> list[float] | None:
    """The start times of a day's files (None: the server has no folder for the day)."""
    status, body = get(f"{RAWDATA}/{path}/{day:%Y/%m/%d}/")
    if status != 200:
        return None
    return sorted({datetime.strptime(t, "%Y-%m-%dT%H:%M:%S").replace(tzinfo=timezone.utc).timestamp()
                   for t in RAW_FILE.findall(body.decode("utf-8", "replace"))})


def check_rawdata(sensor: dict, day: date) -> dict:
    start = datetime(day.year, day.month, day.day, tzinfo=timezone.utc).timestamp()
    files = raw_files(sensor["check"]["path"], day) or []
    out = {"source": "OOI raw data server"}
    if not files:
        last = None
        for back in range(1, 31):   # the last file in the month before
            earlier = raw_files(sensor["check"]["path"], day - timedelta(days=back))
            if earlier:
                last = earlier[-1] + RAW_MINUTES * 60
                break
        return {**out, "state": "no_data", "coverage": 0.0, "lastData": iso(last)}
    coverage, longest, last = spans_gaps([(t, t + RAW_MINUTES * 60) for t in files], start, start + 86400)
    return {**out, "state": grade(coverage, longest, sensor["gap"]), "coverage": round(coverage, 3),
            "longestGapMin": round(longest), "lastData": iso(last)}


# PI data portal ------------------------------------------------------------------------------------------------------

LOG_TS = re.compile(rb"<log-ts:(\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d)")


def piweb_day(folder: str, day: date) -> tuple[list[float], str | None]:
    """A gauge's daily file (one line a second, each stamped <log-ts:...>) as one-minute spans, and its URL."""
    folder = folder.rstrip("/") + "/"
    status, body = get(f"{folder}{day:%Y/%m}/")
    name = next((n for n in re.findall(r'href="([^"?/]+)"', body.decode("utf-8", "replace")) if f"_{day:%Y%m%d}T" in n), None) if status == 200 else None
    if not name:
        return [], None
    url = f"{folder}{day:%Y/%m}/{name}"
    status, raw = get(url, timeout=300)
    if status != 200:
        return [], url
    minutes = sorted({m.decode()[:16] for m in LOG_TS.findall(raw)})
    spans = [(t, t + 60) for t in (datetime.strptime(m, "%Y-%m-%dT%H:%M").replace(tzinfo=timezone.utc).timestamp() for m in minutes)]
    # Lines from before the logger stamped them (it began during 13 Nov 2026) are samples too, a second each: they are
    # placed before the first stamped line, or, in a file with none, from the end of the day back.
    lines = raw.splitlines()
    unstamped = sum(1 for line in lines if line.startswith(b"*") and b"<log-ts:" not in line)
    if unstamped:
        end = spans[0][0] if spans else datetime(day.year, day.month, day.day, tzinfo=timezone.utc).timestamp() + 86400
        spans.insert(0, (end - unstamped, end))
    return spans, url


def check_piweb(sensor: dict, day: date) -> dict:
    """Each gauge's day, graded; the instrument takes the worse gauge. A day without a file is dated from the last."""
    start = datetime(day.year, day.month, day.day, tzinfo=timezone.utc).timestamp()
    rank = {"ok": 0, "gaps": 1, "no_data": 2}
    worst, gauges = None, []
    for folder in sensor["check"]["folders"]:
        spans, url = piweb_day(folder, day)
        name = folder.rstrip("/").rsplit("_", 1)[-1]
        if spans:
            coverage, longest, last = spans_gaps(spans, start, start + 86400)
            g = {"gauge": name, "state": grade(coverage, longest, sensor["gap"]), "coverage": round(coverage, 3),
                 "longestGapMin": round(longest), "lastData": iso(last)}
        else:
            last = None
            for back in range(1, 15):
                earlier, _ = piweb_day(folder, day - timedelta(days=back))
                if earlier:
                    last = earlier[-1][1]
                    break
            g = {"gauge": name, "state": "no_data", "coverage": 0.0, "lastData": iso(last)}
        gauges.append(g)
        if worst is None or rank[g["state"]] > rank[worst["state"]]:
            worst = g
    out = {k: v for k, v in worst.items() if k != "gauge"}
    detail = None if all(g["state"] == worst["state"] for g in gauges) else f"{worst['gauge']}: {worst['state'].replace('_', ' ')}"
    return {**out, "source": "PI data portal", "gauges": gauges, **({"detail": detail} if detail else {})}


def shared_diversion(rows: list[dict]) -> None:
    """A broadband hydrophone without its files on a day the seismometers' 200 Hz data are diverted is diverted too:
    the Navy holds the cabled array's high-rate acoustic and seismic data together (14 Nov 2026: every broadband
    hydrophone's files and every station's 200 Hz data stopped between 07:20 and 07:40 UTC)."""
    if not any(r["method"] == "earthscope" and r["state"] == "diverted" for r in rows):
        return
    for r in rows:
        if r["method"] == "rawdata" and r["state"] in ("no_data", "gaps"):
            last = f"no files since {r['lastData'][:16].replace('T', ' ')} UTC" if r.get("lastData") else "no files"
            r.update(state="diverted", detail=f"{last}, as the seismometers' 200 Hz data stopped: the Navy's diversion")


# Nereus --------------------------------------------------------------------------------------------------------------

# Nereus answers only the queries its own pages make (another is "query is not allowed"): its Helm page's, kept here.
NEREUS_QUERY = Path(__file__).with_name("nereus_helm.graphql")


def nereus_status() -> dict[str, dict]:
    payload = {"operationName": "HelmQuery", "variables": {}, "query": NEREUS_QUERY.read_text()}
    _, body = get(NEREUS, data=json.dumps(payload).encode(), headers={"Content-Type": "application/json"})
    result = json.loads(body)
    if result.get("errors"):
        raise RuntimeError(str(result["errors"])[:200])
    return {r["designator"]: r for r in result["data"]["instruments"]}


HISTORY_QUERY = Path(__file__).with_name("nereus_history.graphql")


def nereus_history(instrument_id: int, start: datetime, days: int, kind: str = "data") -> list[dict]:
    """Nereus's hourly check codes (GOOD, BAD, WARN, UNMONITORED) for days from start: its data check, or its file
    check ("file")."""
    variables = {"id": instrument_id, "days": days, "interval": "HOUR", "startedAt": start.strftime("%Y-%m-%dT%H:%M:%SZ")}
    payload = {"operationName": "StatusHistoryChartInstrumentQuery", "variables": variables, "query": HISTORY_QUERY.read_text()}
    _, body = get(NEREUS, data=json.dumps(payload).encode(), headers={"Content-Type": "application/json"})
    result = json.loads(body)
    if result.get("errors"):
        raise RuntimeError(str(result["errors"])[:200])
    return result["data"]["statistics"][kind] or []


def check_nereus(sensor: dict, day: date, nereus: dict[str, dict]) -> dict:
    """The day's hours by Nereus's data check: no GOOD hour is no data; a run of BAD hours longer than the sensor's
    normal gap is gaps. A day without data looks back a month for its last GOOD hour."""
    row = nereus.get(sensor["check"]["refdes"])
    if not row:
        return {"state": "unchecked", "detail": "not in Nereus's inventory"}
    start, kind = datetime(day.year, day.month, day.day, tzinfo=timezone.utc), sensor["check"].get("nereus", "data")
    hours = [h for h in nereus_history(row["id"], start, 1, kind) if h["date"][:10] == str(day)]
    good = [h for h in hours if h["code"] in ("GOOD", "WARN")]
    out = {"source": f"Nereus ({kind} check)", "hoursGood": len(good), "hoursBad": sum(h["code"] == "BAD" for h in hours)}
    if not good and not out["hoursBad"]:
        return {**out, "state": "unchecked", "detail": "Nereus did not monitor its data that day"}
    if not good:
        back = nereus_history(row["id"], start - timedelta(days=30), 30, kind)
        last = max((h["date"] for h in back if h["code"] in ("GOOD", "WARN")), default=None)
        return {**out, "state": "no_data", "lastData": last and iso(datetime.fromisoformat(last).timestamp() + 3600),
                **({} if last else {"detail": "no good hour in the 30 days before"})}
    run = longest = 0
    for h in hours:
        run = run + 1 if h["code"] == "BAD" else 0
        longest = max(longest, run)
    out = {**out, "longestGapMin": longest * 60, "lastData": iso(datetime.fromisoformat(good[-1]["date"]).timestamp() + 3600)}
    return {**out, "state": "gaps" if longest * 60 > sensor["gap"] else "ok"}


# The report ----------------------------------------------------------------------------------------------------------

# The Axial catalog page's "Status of 200 Hz waveform data" line, as one of two fixed values: the page answers only over
# plain HTTP, so its text is not passed on (it reaches the map and Ask Atlas's prompt), only whether it names the Navy's
# diversion. None when the page or the line is missing.
AXIAL_200HZ = ("Navy Diversion", "No diversion stated")


def axial_200hz() -> str | None:
    try:
        _, body = get(AXIAL, timeout=60)
        m = re.search(r"Status of 200 Hz waveform data\s*-\s*([^<\n]{0,200})", body.decode("utf-8", "replace"))
        if not m:
            return None
        return AXIAL_200HZ[0] if re.search(r"\bnavy\s+diversion\b", m.group(1), re.I) else AXIAL_200HZ[1]
    except Exception:
        return None


def check_one(sensor: dict, day: date, channels: dict, nereus: dict | None) -> dict:
    method = sensor["check"]["method"]
    try:
        if method == "erddap":
            result = check_erddap(sensor, day)
        elif method == "piweb":
            result = check_piweb(sensor, day)
        elif method == "rawdata":
            result = check_rawdata(sensor, day)
        elif method == "earthscope":
            result = check_earthscope(sensor, day, channels) if channels else {"state": "failed", "detail": "EarthScope station service unreachable"}
        elif method == "nereus":
            result = check_nereus(sensor, day, nereus) if nereus is not None else {"state": "failed", "detail": "Nereus unreachable"}
            if sensor["check"].get("dataset"):
                try:
                    result = combined(result, check_erddap(sensor, day), day)
                except Exception as e:   # noqa: BLE001  the second check failing leaves the first
                    result = {**result, "erddap": {"state": "failed", "detail": f"{type(e).__name__}"}}
        else:
            result = {"state": "unchecked", "detail": "no public data check (QA/QC plots only)"}
    except Exception as e:   # noqa: BLE001
        result = {"state": "failed", "detail": f"{type(e).__name__}: {str(e)[:160]}"}
    operational = ((nereus or {}).get(sensor.get("refdes") or "") or {}).get("operationalStatusCode")
    return {"id": sensor["id"], "name": sensor["name"], "refdes": sensor.get("refdes"), "site": sensor["site"], "method": method,
            "gap": sensor["gap"], **({"nereusStatus": operational} if operational else {}), **result}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--day", default=str((datetime.now(timezone.utc) - timedelta(days=1)).date()))
    ap.add_argument("--watchlist", default=str(Path(__file__).with_name("watchlist.json")))
    ap.add_argument("--previous", help="the last report, for how long each state has held")
    ap.add_argument("--out", default="report.json")
    ap.add_argument("--jobs", type=int, default=8)
    args = ap.parse_args()
    day = date.fromisoformat(args.day)
    sensors = json.loads(Path(args.watchlist).read_text())["sensors"]
    try:
        channels = station_channels(day)
    except Exception:
        channels = {}
    try:
        nereus = nereus_status()
    except Exception:
        nereus = None
    with ThreadPoolExecutor(args.jobs) as pool:
        rows = list(pool.map(lambda s: check_one(s, day, channels, nereus), sensors))
    shared_diversion(rows)
    previous = {}
    if args.previous and Path(args.previous).exists():
        previous = {r["id"]: r for r in json.loads(Path(args.previous).read_text()).get("sensors", [])}
    for r in rows:
        before = previous.get(r["id"])
        # No data since a known time is red from that day, not from the first day the Watcher saw it.
        if r["state"] == "no_data" and r.get("lastData"):
            r["since"] = r["lastData"][:10]
        else:
            r["since"] = before["since"] if before and before.get("state") == r["state"] and before.get("since") else str(day)
    counts: dict[str, int] = {}
    for r in rows:
        counts[r["state"]] = counts.get(r["state"], 0) + 1
    report = {"day": str(day), "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
              "axial200Hz": axial_200hz(), "counts": counts, "sensors": rows}
    Path(args.out).write_text(json.dumps(report, indent=1) + "\n")
    print(json.dumps({k: report[k] for k in ("day", "axial200Hz", "counts")}))


if __name__ == "__main__":
    sys.exit(main())
