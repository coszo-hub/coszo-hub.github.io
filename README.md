# coszo-rcn.github.io
Webpages of Cascadia Offshore Subduction Zone Observatory

## Live cruise hero

During a cruise, set `CRUISE_TRACKER_ENABLED = True` in `build_pages.py` and rerun
`python3 build_pages.py`: the homepage hero fades into a live panel with the ship's
track map and the live video stream. The track (`data/ship_track.json`) is refreshed
hourly from the SIO/UNOLS MFP site by `.github/workflows/update-ship-track.yml`
(`bin/fetch_ship_track.py`), which self-gates to the cruise window configured in the
script. Map day-dots link to Blog from Sea posts whose `date` matches that day.
