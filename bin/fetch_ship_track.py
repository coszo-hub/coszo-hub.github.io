#!/usr/bin/env python3
"""
Fetch the R/V Roger Revelle track for the COSZO deployment cruise (RR2608)
from the UNOLS/SIO Marine Facilities Planning site and write it to
data/ship_track.json for the live cruise hero on the homepage.

The MFP site serves the full timestamped AIS track, so each run replaces the
whole track — missed runs never leave gaps. Run hourly by
.github/workflows/update-ship-track.yml; outside the cruise window the script
exits without touching anything.

Usage: python3 bin/fetch_ship_track.py [--force]
  --force   ignore the cruise-window gate (for testing before the cruise)
"""

import json
import os
import re
import sys
import urllib.parse
import urllib.request
from datetime import datetime, timedelta, timezone

BASE = "https://sio.mfp.us"
FLEXLOCATION_ID = "4_2"       # MFP composite id for R/V Roger Revelle
MMSI = "367800100"
CRUISE = "RR2608"
SHIP = "R/V Roger Revelle"
CRUISE_START = "2026-08-20"   # mobilization in Newport
CRUISE_END = "2026-09-04"     # demobilization
WINDOW_SLACK_DAYS = 2         # keep fetching a little past the scheduled return
MIN_SPACING_MIN = 10          # thin the track to one point per N minutes

OUT_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)),
                        "..", "data", "ship_track.json")


def _http(url, data=None):
    req = urllib.request.Request(url, data=data, headers={
        "User-Agent": "coszo.org cruise tracker (github.com/coszo-hub)",
        "X-Requested-With": "XMLHttpRequest",
    })
    with urllib.request.urlopen(req, timeout=60) as resp:
        return resp.read().decode("utf-8", "replace")


def fetch_track(start_dt, end_dt):
    """Full timestamped track between two datetimes (UTC), oldest first."""
    form = urllib.parse.urlencode([
        ("flexlocation_ids[]", FLEXLOCATION_ID),
        ("Start", start_dt.strftime("%Y-%m-%d %H:%M")),
        ("End", end_dt.strftime("%Y-%m-%d %H:%M")),
        ("limited", "false"),
    ]).encode()
    raw = json.loads(_http(BASE + "/programme/read_shiptrack", form))
    pts = raw.get(MMSI, []) if isinstance(raw, dict) else []
    out = []
    for p in pts:
        t = p.get("RecordDate")
        if t is None or p.get("y") is None or p.get("x") is None:
            continue
        out.append({"t": t, "lat": round(p["y"], 5), "lon": round(p["x"], 5)})
    out.sort(key=lambda p: p["t"])
    return out


def thin(points, min_spacing=timedelta(minutes=MIN_SPACING_MIN)):
    """Keep at most one point per MIN_SPACING_MIN; always keep the last."""
    kept, last_t = [], None
    for p in points:
        t = datetime.fromisoformat(p["t"].replace("Z", "+00:00"))
        if last_t is None or t - last_t >= min_spacing:
            kept.append(p)
            last_t = t
    if points and (not kept or kept[-1] is not points[-1]):
        kept.append(points[-1])
    return kept


def fetch_current():
    """Best-effort course/speed/status from the ship object embedded in /programme."""
    try:
        html = _http(BASE + "/programme")
        m = re.search(r'\{[^{}]*"MMSI":"%s"[^{}]*\}' % MMSI, html)
        if not m:
            return None
        obj = json.loads(m.group(0))
        cur = {}
        for key, name in (("Course", "course"), ("Speed", "speed"), ("Status", "status")):
            if obj.get(key) is not None:
                cur[name] = obj[key]
        return cur or None
    except Exception as e:  # noqa: BLE001 — current position is optional garnish
        print(f"  (could not read current course/speed: {e})")
        return None


def main():
    force = "--force" in sys.argv
    now = datetime.now(timezone.utc)
    start = datetime.strptime(CRUISE_START, "%Y-%m-%d").replace(tzinfo=timezone.utc)
    window_end = (datetime.strptime(CRUISE_END, "%Y-%m-%d").replace(tzinfo=timezone.utc)
                  + timedelta(days=1 + WINDOW_SLACK_DAYS))

    if not force and (now < start or now > window_end):
        print(f"Outside cruise window ({CRUISE_START} .. {CRUISE_END}"
              f" +{WINDOW_SLACK_DAYS}d); nothing to do.")
        return

    fetch_from = start if not force else min(start, now - timedelta(days=3))
    points = thin(fetch_track(fetch_from, now + timedelta(hours=1)))
    print(f"Fetched {len(points)} track points for {SHIP} ({CRUISE}).")

    data = {
        "cruise": CRUISE,
        "ship": SHIP,
        "mmsi": MMSI,
        "start": CRUISE_START,
        "end": CRUISE_END,
        "updated": now.strftime("%Y-%m-%dT%H:%M:%SZ"),
        "current": fetch_current(),
        "points": points,
    }

    try:
        with open(OUT_PATH, encoding="utf-8") as f:
            old = json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        old = {}
    unchanged = all(old.get(k) == data[k] for k in data if k != "updated")
    if unchanged:
        print("Track unchanged; not rewriting.")
        return

    with open(OUT_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, separators=(",", ":"))
        f.write("\n")
    print(f"Wrote {os.path.relpath(OUT_PATH)}.")


if __name__ == "__main__":
    main()
