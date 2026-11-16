"""The Watcher's daily check: how each watched sensor (watchlist.json) recorded over the 24 hours before it runs
(or over one UTC day, --day, to grade a past day).

States, one a sensor:
  ok         samples throughout, no gap longer than its list's normal gap ("gap", minutes)
  gaps       samples, but with a gap longer than that and so not all of them (yellow)
  diverted   a seismometer or low-frequency hydrophone whose 8 Hz data reached EarthScope while its 200 Hz data did
             not: the Navy's diversion of the high-rate data (blue); and a broadband hydrophone without its files
             while the seismometers' 200 Hz data are diverted
  no_data    no sample at all in the 24 hours (red): it has not recorded for 24 hours or more
  unchecked  nothing public says (QA/QC plots only, a station EarthScope does not list, Nereus not monitoring)
  failed     the check could not be made (a service down); not a statement about the sensor
How: Nereus's hourly data check (GOOD, BAD) over the window; EarthScope: the window's 8 Hz vertical (MHZ) records read
from their MiniSEED headers, and the 200 Hz channel (HHZ, EHZ, or the hydrophone's HDH) probed a minute an hour;
ERDDAP's 10-minute bins in which a measured variable has a value (orderByCount; a row of NaNs or of a predicted tide
is not data), up to its newest row: alone where Nereus does not monitor the instrument, else as a second check. The Axial Seamount catalog page's line "Status of 200 Hz
waveform data" is kept with the report. A state carries "since", the first day of the run of days it has held, from
the previous report.
Usage: python check.py [--day YYYY-MM-DD (a UTC day; default the 24 hours to now)] [--watchlist PATH] [--previous latest.json]
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


def day_window(day: date) -> tuple[float, float]:
    """A UTC day as a window, [start, end) in epoch seconds."""
    start = datetime(day.year, day.month, day.day, tzinfo=timezone.utc).timestamp()
    return start, start + 86400


def dates_in(start: float, end: float) -> list[date]:
    """The UTC days a window touches (a source filed by day is read for each)."""
    first, last = datetime.fromtimestamp(start, timezone.utc).date(), datetime.fromtimestamp(end - 1, timezone.utc).date()
    return [first + timedelta(days=i) for i in range((last - first).days + 1)]


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


def check_erddap(sensor: dict, start: float, end: float) -> dict:
    """The window's 10-minute bins in which a measured variable has a value (a row of NaNs is not data), up to the
    dataset's newest row: ERDDAP can be a day or more behind the instruments (15 Nov 2026: every RS dataset ended at
    11:30 UTC while Nereus had them reporting), so the part it has not reached is not a gap. A window without a
    measured value is dated from the last one."""
    dataset = sensor["check"]["dataset"]
    newest, measured = erddap_info(dataset)
    out = {"source": "OOI ERDDAP", "erddapNewest": iso(newest)}
    if not measured:
        return {**out, "state": "unchecked", "detail": "ERDDAP lists no measured variable for it"}
    bins = []
    if newest is not None and newest > start:
        status, body = get(f"{ERDDAP}/tabledap/{dataset}.csv?time,{','.join(measured)}&time%3E={iso(start)}&time%3C{iso(end)}"
                           f"&orderByCount(%22time/{BIN}minutes%22)")
        for line in body.decode().splitlines()[2:] if status == 200 else []:
            cells = line.split(",")
            if len(cells) > 1 and any(c.strip() not in ("", "0", "NaN") for c in cells[1:]):
                bins.append(datetime.strptime(cells[0].strip(), "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc).timestamp())
    if not bins:
        before = min(end, newest or end)
        last = max((t for t in (erddap_last_measured(dataset, v, before) for v in measured) if t), default=None)
        return {**out, "state": "no_data", "coverage": 0.0, "lastData": iso(last),
                **({"detail": "ERDDAP's rows in the 24 hours hold no measured value"} if newest and newest > start else {})}
    to = min(end, newest)
    coverage, longest, last = spans_gaps([(t, t + BIN * 60) for t in bins], start, to)
    return {**out, "state": grade(coverage, longest, max(sensor["gap"], BIN)), "coverage": round(coverage, 3),
            "longestGapMin": round(longest), "lastData": iso(last), "checkedTo": iso(to)}


def combined(primary: dict, second: dict, end: float) -> dict:
    """Nereus's state checked against ERDDAP's, two independent witnesses; either can be wrong. ERDDAP's data in
    the window show the instrument recorded whatever Nereus's check said; ERDDAP with a gap, or with nothing for a
    window it has already passed, makes a good Nereus window yellow; ERDDAP not having reached it yet says nothing."""
    if primary["state"] in ("unchecked", "failed"):
        return {**second, "nereusCheck": {k: v for k, v in primary.items() if k != "source"}}
    passed = bool(second.get("erddapNewest")) and second["erddapNewest"] >= iso(end)
    out = {**primary, "erddap": {k: v for k, v in second.items() if k != "source"}, "agree": primary["state"] == second["state"]}
    if primary["state"] == "no_data" and second.get("coverage", 0) > 0:
        return {**out, "state": second["state"], "lastData": second.get("lastData"),
                "detail": "Nereus's check was bad throughout, but ERDDAP has data in the 24 hours"}
    if primary["state"] == "ok" and second["state"] == "gaps":
        return {**out, "state": "gaps", "detail": f"Nereus's hours were good, but ERDDAP has a {second['longestGapMin']}-minute gap"}
    if primary["state"] == "ok" and second["state"] == "no_data" and passed:
        return {**out, "state": "gaps", "detail": "Nereus's hours were good, but ERDDAP, past the 24 hours, has nothing in them"}
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


def station_channels(start: float, end: float) -> dict[str, set[str]]:
    url = f"{FDSN}/station/1/query?net=OO&level=channel&format=text&starttime={iso(start)[:19]}&endtime={iso(end)[:19]}"
    status, body = get(url)
    chans: dict[str, set[str]] = {}
    for line in body.decode().splitlines()[1:] if status == 200 else []:
        p = line.split("|")
        if len(p) > 3:
            chans.setdefault(p[1], set()).add(p[3])
    return chans


def check_earthscope(sensor: dict, start: float, end: float, channels: dict[str, set[str]]) -> dict:
    c = sensor["check"]
    have = channels.get(c["station"], set())
    high = c.get("channel") or next((x for x in ("HHZ", "EHZ") if x in have), None)
    if "MHZ" not in have or high not in have:
        return {"state": "unchecked", "detail": f"EarthScope lists no 8 Hz and 200 Hz channels for OO.{c['station']}"}
    t0 = datetime.fromtimestamp(start, timezone.utc)
    raw = dataselect(c["network"], c["station"], "MHZ", t0, datetime.fromtimestamp(end, timezone.utc))
    spans = mseed_spans(raw or b"")
    coverage, longest, last = spans_gaps(spans, start, end)
    # The 200 Hz channel, a minute at the half hour of each hour; an hour counts only where the 8 Hz data are there.
    probes = []
    for h in range(int((end - start) // 3600)):
        t = t0 + timedelta(hours=h, minutes=30)
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


def check_rawdata(sensor: dict, start: float, end: float) -> dict:
    days = dates_in(start, end)
    files = [t for d in days for t in (raw_files(sensor["check"]["path"], d) or []) if start - RAW_MINUTES * 60 < t < end]
    out = {"source": "OOI raw data server"}
    if not files:
        last = None
        for back in range(0, 31):   # the last file before the window, in the month before
            earlier = [t for t in (raw_files(sensor["check"]["path"], days[0] - timedelta(days=back)) or []) if t < start]
            if earlier:
                last = earlier[-1] + RAW_MINUTES * 60
                break
        return {**out, "state": "no_data", "coverage": 0.0, "lastData": iso(last)}
    coverage, longest, last = spans_gaps([(t, t + RAW_MINUTES * 60) for t in files], start, end)
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


def check_piweb(sensor: dict, start: float, end: float) -> dict:
    """Each gauge's window, graded; the instrument takes the worse gauge. A window without a sample is dated from the
    last."""
    rank = {"ok": 0, "gaps": 1, "no_data": 2}
    days = dates_in(start, end)
    worst, gauges = None, []
    for folder in sensor["check"]["folders"]:
        spans = [sp for d in days for sp in piweb_day(folder, d)[0] if sp[1] > start and sp[0] < end]
        name = folder.rstrip("/").rsplit("_", 1)[-1]
        if spans:
            coverage, longest, last = spans_gaps(spans, start, end)
            g = {"gauge": name, "state": grade(coverage, longest, sensor["gap"]), "coverage": round(coverage, 3),
                 "longestGapMin": round(longest), "lastData": iso(last)}
        else:
            last = None
            for back in range(0, 15):
                earlier = [sp for sp in piweb_day(folder, days[0] - timedelta(days=back))[0] if sp[1] <= start]
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
REPORTS_QUERY = Path(__file__).with_name("nereus_reports.graphql")
NOTE_CHARS = 600


def nereus_notes(now: float, days: int = 365) -> dict[str, dict]:
    """Each instrument's newest open operator note in Nereus (a fault or data issue not yet closed): what the
    operators know, as the Central Caldera BOTPT's "Data output stopped - again ... Instrument set to failed" says why
    Nereus lists it as failed. Plain text, cut to NOTE_CHARS; it reaches the map and Ask Atlas as a quotation."""
    payload = {"operationName": "ReportsPageQuery", "variables": {"cutoff": iso(now - days * 86400)}, "query": REPORTS_QUERY.read_text()}
    _, body = get(NEREUS, data=json.dumps(payload).encode(), headers={"Content-Type": "application/json"})
    result = json.loads(body)
    if result.get("errors"):
        raise RuntimeError(str(result["errors"])[:200])
    clean = lambda t: re.sub(r"\s+", " ", str(t or "")).strip()
    out: dict[str, dict] = {}
    for note in result["data"].get("notes", []):
        if note.get("endedAt"):
            continue
        message = clean(note.get("message"))
        row = {"title": clean(note.get("title"))[:160], "message": message[:NOTE_CHARS] + ("…" if len(message) > NOTE_CHARS else ""),
               "category": note.get("categoryCode"), "startedAt": note.get("startedAt")}
        for c in note.get("instrumentConnections", []):
            refdes = (c.get("instrument") or {}).get("designator")
            if refdes and (refdes not in out or str(row["startedAt"]) > str(out[refdes]["startedAt"])):
                out[refdes] = row
    return out


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


def check_nereus(sensor: dict, start: float, end: float, nereus: dict[str, dict]) -> dict:
    """The window's hours by Nereus's data check: no GOOD hour is no data; a run of BAD hours longer than the sensor's
    normal gap is gaps. A window without data looks back a month for its last GOOD hour. An hour counts when it begins
    in the window."""
    row = nereus.get(sensor["check"]["refdes"])
    if not row:
        return {"state": "unchecked", "detail": "not in Nereus's inventory"}
    kind = sensor["check"].get("nereus", "data")
    t0 = datetime.fromtimestamp(start - start % 3600, timezone.utc)
    hours = [h for h in nereus_history(row["id"], t0, 2, kind) if t0.timestamp() <= datetime.fromisoformat(h["date"]).timestamp() < end]
    good = [h for h in hours if h["code"] in ("GOOD", "WARN")]
    out = {"source": f"Nereus ({kind} check)", "hoursGood": len(good), "hoursBad": sum(h["code"] == "BAD" for h in hours)}
    if not good and not out["hoursBad"]:
        return {**out, "state": "unchecked", "detail": "Nereus did not monitor its data in the 24 hours"}
    if not good:
        back = nereus_history(row["id"], t0 - timedelta(days=30), 30, kind)
        last = max((h["date"] for h in back if h["code"] in ("GOOD", "WARN")), default=None)
        return {**out, "state": "no_data", "lastData": last and iso(datetime.fromisoformat(last).timestamp() + 3600),
                **({} if last else {"detail": "no good hour in the 30 days before"})}
    run = longest = 0
    for h in hours:
        run = run + 1 if h["code"] == "BAD" else 0
        longest = max(longest, run)
    # A good hour is dated by its end, but not past the window's (an hour still under way when the check runs).
    out = {**out, "longestGapMin": longest * 60, "lastData": iso(min(end, datetime.fromisoformat(good[-1]["date"]).timestamp() + 3600))}
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


def check_one(sensor: dict, start: float, end: float, channels: dict, nereus: dict | None, notes: dict | None = None) -> dict:
    method = sensor["check"]["method"]
    try:
        if method == "erddap":
            result = check_erddap(sensor, start, end)
        elif method == "piweb":
            result = check_piweb(sensor, start, end)
        elif method == "rawdata":
            result = check_rawdata(sensor, start, end)
        elif method == "earthscope":
            result = check_earthscope(sensor, start, end, channels) if channels else {"state": "failed", "detail": "EarthScope station service unreachable"}
        elif method == "nereus":
            result = check_nereus(sensor, start, end, nereus) if nereus is not None else {"state": "failed", "detail": "Nereus unreachable"}
            if sensor["check"].get("dataset"):
                try:
                    result = combined(result, check_erddap(sensor, start, end), end)
                except Exception as e:   # noqa: BLE001  the second check failing leaves the first
                    result = {**result, "erddap": {"state": "failed", "detail": f"{type(e).__name__}"}}
        else:
            result = {"state": "unchecked", "detail": "no public data check (QA/QC plots only)"}
    except Exception as e:   # noqa: BLE001
        result = {"state": "failed", "detail": f"{type(e).__name__}: {str(e)[:160]}"}
    operational = ((nereus or {}).get(sensor.get("refdes") or "") or {}).get("operationalStatusCode")
    note = (notes or {}).get(sensor.get("refdes") or "")
    return {"id": sensor["id"], "name": sensor["name"], "refdes": sensor.get("refdes"), "site": sensor["site"], "method": method,
            "gap": sensor["gap"], **({"nereusStatus": operational} if operational else {}), **({"note": note} if note else {}), **result}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--day", help="grade one UTC day (YYYY-MM-DD) instead of the 24 hours to now")
    ap.add_argument("--watchlist", default=str(Path(__file__).with_name("watchlist.json")))
    ap.add_argument("--previous", help="the last report, for how long each state has held")
    ap.add_argument("--out", default="report.json")
    ap.add_argument("--jobs", type=int, default=8)
    args = ap.parse_args()
    if args.day:
        start, end = day_window(date.fromisoformat(args.day))
    else:   # the 24 hours to now, on the minute
        end = float(int(datetime.now(timezone.utc).timestamp()) // 60 * 60)
        start = end - 86400
    sensors = json.loads(Path(args.watchlist).read_text())["sensors"]
    try:
        channels = station_channels(start, end)
    except Exception:
        channels = {}
    try:
        nereus = nereus_status()
    except Exception:
        nereus = None
    try:
        notes = nereus_notes(end)
    except Exception:
        notes = {}
    with ThreadPoolExecutor(args.jobs) as pool:
        rows = list(pool.map(lambda s: check_one(s, start, end, channels, nereus, notes), sensors))
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
            r["since"] = before["since"] if before and before.get("state") == r["state"] and before.get("since") else iso(start)[:10]
    counts: dict[str, int] = {}
    for r in rows:
        counts[r["state"]] = counts.get(r["state"], 0) + 1
    # "day" names the report (its dated copy): the last UTC day the window reaches.
    report = {"from": iso(start), "to": iso(end), "day": iso(end - 1)[:10],
              "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
              "axial200Hz": axial_200hz(), "counts": counts, "sensors": rows}
    Path(args.out).write_text(json.dumps(report, indent=1) + "\n")
    print(json.dumps({k: report[k] for k in ("from", "to", "axial200Hz", "counts")}))


if __name__ == "__main__":
    sys.exit(main())
