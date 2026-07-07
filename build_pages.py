#!/usr/bin/env python3
"""
COSZO site generator
====================
Reads the page definitions in this file and writes out all HTML pages
(index + every nav destination). Every page uses the same header,
footer, and shared stylesheet (styles.css).

Run: python3 build_pages.py
"""

import csv
import json
import os
import re

OUT_DIR = os.path.dirname(os.path.abspath(__file__))


def strip_html(html):
    """Plain searchable text from a body HTML string."""
    text = re.sub(r"(?is)<(script|style).*?</\1>", " ", html)
    text = re.sub(r"<[^>]+>", " ", text)
    text = re.sub(r"&[#a-z0-9]+;", " ", text)
    return re.sub(r"\s+", " ", text).strip()

# Coastline path for the Get Involved globe, pre-projected (orthographic,
# centered on Cascadia ~125W/45N) onto a 400x400 SVG with sphere center
# (200,200) and radius 170. Generated offline from Natural Earth 110m via
# d3-geo + topojson-client. See assets-cascadia-globe-coastlines.path.
_COASTLINE_FILE = os.path.join(OUT_DIR, "assets-cascadia-globe-coastlines.path")
_GRATICULE_FILE = os.path.join(OUT_DIR, "assets-cascadia-globe-graticule.path")

def _read_path(p):
    try:
        with open(p, "r", encoding="utf-8") as f:
            return f.read().strip()
    except FileNotFoundError:
        return ""

GLOBE_COASTLINES = _read_path(_COASTLINE_FILE)
GLOBE_GRATICULE = _read_path(_GRATICULE_FILE)

# ============================================================
# HEADER (utility bar + logo + nav with hover dropdowns)
# All hrefs point to local HTML files in the same directory.
# ============================================================
def build_header(active=""):
    """active is a short key for the current tab: about, infrastructure, data, outreach, ew"""
    def cls(key):
        return ' class="nav-link active"' if active == key else ' class="nav-link"'
    return f"""
<div class="utility-bar">
  <div class="container">
    <div class="funding-note">An <strong>NSF</strong> Mid-scale Research Infrastructure project</div>
    <div class="utility-bar-links">
      <a href="contact.html">Contact</a>
      <a href="search.html">Search</a>
    </div>
  </div>
</div>

<header class="site-header">
  <div class="container">
    <a href="index.html" class="logo" aria-label="COSZO home">
      <img src="coszo-logo.png" alt="COSZO logo" />
      <div class="logo-text">
        <span class="wordmark">COSZO</span>
        <span class="sublabel">Cascadia Offshore Subduction Zone Observatory</span>
      </div>
    </a>
    <nav class="main-nav" aria-label="Primary">
      <div class="nav-item has-dropdown">
        <a href="about.html"{cls("about")}>About</a>
        <div class="dropdown">
          <a href="motivation.html">Motivation</a>
          <a href="scientific-objectives.html">Objectives</a>
          <a href="publications.html">Publications</a>
          <a href="people.html">People</a>
          <a href="contact.html">Contact</a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="infrastructure.html"{cls("infrastructure")}>Infrastructure</a>
        <div class="dropdown">
          <a href="sites.html">Seafloor Sites</a>
          <a href="existing-instruments.html">Existing Instruments</a>
          <a href="coszo-instruments.html">COSZO Instruments</a>
          <a href="cruises.html">Cruises</a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="data.html"{cls("data")}>Data</a>
        <div class="dropdown wide">
          <a href="broadband-seismometer.html">Broadband Seismometer &amp; Strong Motion</a>
          <a href="differential-pressure-gauge.html">Differential Pressure Gauge</a>
          <a href="hydrophone.html">Hydrophone</a>
          <a href="absolute-seafloor-pressure.html">Absolute Pressure Gauge</a>
          <a href="gssm.html">GSSM &mdash; Calibrated Pressure &amp; Acceleration</a>
          <a href="cscpr.html">CSCPR &mdash; Calibrated Pressure</a>
          <a href="current-meter.html">Current Meter</a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="outreach.html"{cls("outreach")}>Outreach</a>
        <div class="dropdown">
          <a href="research-experiences-for-undergraduates.html">Research Experiences for Undergraduates</a>
          <a href="early-career-workshop.html">2027 Early Career Workshop</a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="early-warning.html"{cls("ew")}>Early Warning</a>
        <div class="dropdown">
          <a href="early-warning.html">Early Warning Overview</a>
          <a href="feasibility-study.html">2019 Feasibility Study</a>
          <a href="archives.html">Archives</a>
        </div>
      </div>
    </nav>
  </div>
</header>
"""

FOOTER = """
<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="footer-logo">
          <img src="coszo-logo.png" alt="COSZO logo" />
          <span class="wordmark">COSZO</span>
        </div>
        <p>
          The Cascadia Offshore Subduction Zone Observatory is an NSF Mid-scale Research Infrastructure project
          adding geophysical instrumentation to the OOI Regional Cabled Array off the coast of Oregon
          to understand the science of subduction-zone hazard.
        </p>
      </div>
      <div class="footer-col">
        <h4><a href="about.html">About</a></h4>
        <ul>
          <li><a href="motivation.html">Motivation</a></li>
          <li><a href="scientific-objectives.html">Objectives</a></li>
          <li><a href="publications.html">Publications</a></li>
          <li><a href="people.html">People</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><a href="infrastructure.html">Infrastructure</a></h4>
        <ul>
          <li><a href="sites.html">Seafloor Sites</a></li>
          <li><a href="existing-instruments.html">Existing Instruments</a></li>
          <li><a href="coszo-instruments.html">COSZO Instruments</a></li>
          <li><a href="cruises.html">Cruises</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><a href="data.html">Data</a></h4>
        <ul>
          <li><a href="broadband-seismometer.html">Broadband Seismometer &amp; Strong Motion</a></li>
          <li><a href="differential-pressure-gauge.html">Differential Pressure Gauge</a></li>
          <li><a href="hydrophone.html">Hydrophone</a></li>
          <li><a href="absolute-seafloor-pressure.html">Absolute Pressure</a></li>
          <li><a href="gssm.html">GSSM &mdash; Calibrated Pressure &amp; Acceleration</a></li>
          <li><a href="cscpr.html">CSCPR &mdash; Calibrated Pressure</a></li>
          <li><a href="current-meter.html">Current Meter</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><a href="outreach.html">Outreach</a></h4>
        <ul>
          <li><a href="research-experiences-for-undergraduates.html">Research Experiences for Undergraduates</a></li>
          <li><a href="early-career-workshop.html">2027 Early Career Workshop</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4><a href="early-warning.html">Early Warning</a></h4>
        <ul>
          <li><a href="early-warning.html">Early Warning Overview</a></li>
          <li><a href="feasibility-study.html">2019 Feasibility Study</a></li>
          <li><a href="archives.html">Archives</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div>&copy; 2026 COSZO &middot; Cascadia Offshore Subduction Zone Observatory. All Rights Reserved.</div>
      <div class="funding-badges">
        <span class="funding-badge">NSF Mid-scale RI-1</span>
        <span class="funding-badge">UW &middot; Scripps</span>
      </div>
    </div>
  </div>
</footer>
"""

# Full HTML document template
DOC = """<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{title}</title>
  <link rel="icon" type="image/png" href="coszo-logo.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
{header}
{body}
{footer}
</body>
</html>
"""

# ============================================================
# Reusable snippets
# ============================================================

def page_hero(eyebrow, title, lede, breadcrumb_items):
    """Standard hero block for sub-pages."""
    bc = ' <span class="sep">/</span> '.join(breadcrumb_items)
    return f"""
<section class="page-hero">
  <div class="container">
    <div class="breadcrumb">{bc}</div>
    <h1>{title}</h1>
    <p class="lede">{lede}</p>
  </div>
</section>
"""

# ============================================================
# INDEX PAGE (home)
# ============================================================
INDEX_BODY = """
<section class="hero">
  <div class="hero-bg"></div>
  <svg class="hero-wave" viewBox="0 0 1440 140" preserveAspectRatio="none" aria-hidden="true">
    <path d="M0,80 C240,130 480,30 720,70 C960,110 1200,20 1440,60 L1440,140 L0,140 Z" fill="#0a2f4e"/>
    <path d="M0,100 C240,70 480,120 720,90 C960,60 1200,120 1440,90 L1440,140 L0,140 Z" fill="#06223a" opacity="0.6"/>
  </svg>
  <div class="container">
    <div class="hero-content">
      <h1>Watching the <em>Cascadia fault</em> from the seafloor.</h1>
      <p class="hero-lede">COSZO adds geophysical instrumentation to the <a href="https://oceanobservatories.org/">Ocean Observatories Initiative (OOI)</a> Regional Cabled Array off the coast of Oregon, delivering continuous, high-fidelity seafloor data to investigate how the Cascadia subduction zone fault works and to support the development of offshore earthquake and tsunami early warning.</p>
    </div>
  </div>
</section>

<section class="quick-access">
  <div class="container">
    <div class="tiles">
      <a href="about.html" class="tile">
        <svg class="tile-icon" viewBox="0 0 80 80" fill="none"><path d="M40 24 C32 18, 16 18, 12 20 V62 C16 60, 32 60, 40 66 C48 60, 64 60, 68 62 V20 C64 18, 48 18, 40 24 Z" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><line x1="40" y1="24" x2="40" y2="66" stroke="#17a2ab" stroke-width="2.5"/><circle cx="40" cy="14" r="3.5" fill="#f5a623"/></svg>
        <h3 class="tile-title">About</h3>
        <p class="tile-subtitle">Motivation, objectives, people</p>
      </a>
      <a href="infrastructure.html" class="tile">
        <svg class="tile-icon" viewBox="0 0 80 80" fill="none"><path d="M8 58 L40 20 L72 58" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><circle cx="40" cy="20" r="4" fill="#f5a623"/><line x1="8" y1="66" x2="72" y2="66" stroke="currentColor" stroke-width="2.5"/><circle cx="22" cy="62" r="3" fill="#17a2ab"/><circle cx="40" cy="58" r="3" fill="#17a2ab"/><circle cx="58" cy="62" r="3" fill="#17a2ab"/></svg>
        <h3 class="tile-title">Infrastructure</h3>
        <p class="tile-subtitle">Cabled network &amp; instruments</p>
      </a>
      <a href="data.html" class="tile">
        <svg class="tile-icon" viewBox="0 0 80 80" fill="none"><rect x="10" y="16" width="60" height="48" rx="2" stroke="currentColor" stroke-width="2.5"/><path d="M10 28 H70" stroke="currentColor" stroke-width="2.5"/><circle cx="18" cy="22" r="1.5" fill="currentColor"/><circle cx="24" cy="22" r="1.5" fill="currentColor"/><path d="M18 40 L28 50 L38 36 L50 54 L62 42" stroke="#17a2ab" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <h3 class="tile-title">Data</h3>
        <p class="tile-subtitle">Pressure, motion, water velocity</p>
      </a>
      <a href="outreach.html" class="tile">
        <svg class="tile-icon" viewBox="0 0 80 80" fill="none"><circle cx="30" cy="28" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="54" cy="32" r="8" stroke="#17a2ab" stroke-width="2.5"/><path d="M12 66 Q 30 48, 48 66" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M40 64 Q 54 50, 68 64" stroke="#17a2ab" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>
        <h3 class="tile-title">Outreach</h3>
        <p class="tile-subtitle">REUs, workshops, community</p>
      </a>
      <a href="early-warning.html" class="tile">
        <svg class="tile-icon" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="5" fill="#f5a623"/><circle cx="40" cy="40" r="14" fill="none" stroke="#f5a623" stroke-width="2" opacity="0.7"/><circle cx="40" cy="40" r="24" fill="none" stroke="#f5a623" stroke-width="2" opacity="0.45"/><circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" stroke-width="2" opacity="0.7"/></svg>
        <h3 class="tile-title">Early Warning</h3>
        <p class="tile-subtitle">Seafloor detection for EEW</p>
      </a>
    </div>
  </div>
</section>

<section class="welcome">
  <div class="container">
    <div class="welcome-intro">
      <div class="section-eyebrow">Welcome</div>
      <h2 class="section-heading">A dedicated geophysical observatory for the Cascadia subduction zone.</h2>
    </div>
    <div class="welcome-body welcome-flow">
      <figure class="welcome-media">
        <div class="welcome-media-frame">
          <img src="cascadia_zoomed.jpg" alt="Zoomed map of the Cascadia subduction zone off the Oregon coast." loading="lazy" />
        </div>
        <figcaption>Detailed bathymetric map of the Cascadia subduction zone off the Oregon coast, showing the COSZO study area along the OOI Regional Cabled Array.</figcaption>
      </figure>
      <p>The Cascadia Offshore Subduction Zone Observatory (COSZO) is a National Science Foundation funded Mid-scale Research Infrastructure (RI-1) implementation project. Scientists and engineers from the University of Washington School of Oceanography, Department of Earth and Space Sciences, and Applied Physics Laboratory, together with the Scripps Institution of Oceanography, are adding geophysical instrumentation to the <a href="https://oceanobservatories.org/">Ocean Observatories Initiative</a> <a href="https://interactiveoceans.washington.edu/about/regional-cabled-array/">Regional Cabled Array</a> off the coast of Oregon.</p>
      <p>The RCA, established in 2015, was originally positioned on the continental margin to support coastal oceanography. It is also fortuitously located in a region of geophysical significance where the locked region of the Cascadia fault extends well offshore and clusters of earthquakes occur beneath the continental shelf.</p>
      <p>The geophysical sensor suite will collect continuous, high-fidelity data to enable the scientific community to address fundamental questions on how subduction zone faults work and provide a facility to support the development of offshore early warning.</p>
    </div>
    <figure class="welcome-figure welcome-figure-wide">
      <img src="coszo3d.jpg" alt="3D rendering of the COSZO offshore observatory layout along the Cascadia margin." />
      <figcaption>Conceptual rendering of the COSZO sensor suite along the OOI Regional Cabled Array on the Cascadia margin.</figcaption>
    </figure>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <div class="cta-grid">
      <div>
        <div class="section-eyebrow" style="color: var(--epicenter);">Explore</div>
        <h2>What you&rsquo;ll find on this site.</h2>
        <p>On this website you can find information related to the COSZO project, its instrumentation, the data it will collect, and our offshore earthquake early-warning efforts.</p>
        <p>If you have any questions, please reach out &mdash; we&rsquo;re happy to help.</p>
        <div class="cta-row">
          <a href="contact.html" class="btn-primary">Contact the Team
            <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
        </div>
      </div>
      <div class="cta-visual">
        <svg viewBox="0 0 400 400">
          <defs>
            <radialGradient id="gg"><stop offset="0" stop-color="#1e7cab"/><stop offset="1" stop-color="#04182a"/></radialGradient>
            <clipPath id="globeClip"><circle cx="200" cy="200" r="170"/></clipPath>
          </defs>
          <circle cx="200" cy="200" r="170" fill="url(#gg)"/>
          <g clip-path="url(#globeClip)">
            <!-- 15-degree graticule, pre-projected orthographic to match
                 the coastlines (rotation [125,-45,0]). -->
            <path d="__GLOBE_GRATICULE__"
                  fill="none"
                  stroke="#17a2ab" stroke-opacity="0.3" stroke-width="0.6"
                  vector-effect="non-scaling-stroke"/>
            <path d="__GLOBE_COASTLINES__"
                  fill="#cfe6ec" fill-opacity="0.08"
                  stroke="#cfe6ec" stroke-opacity="0.55" stroke-width="0.6"
                  stroke-linejoin="round" stroke-linecap="round"
                  vector-effect="non-scaling-stroke"/>
          </g>
          <!-- COSZO marker: slightly offshore Oregon (lon ~-126.5, lat ~44.6),
               which lands very near the projection center at ~(197, 202). -->
          <circle cx="197" cy="202" r="14" fill="none" stroke="#f5a623" stroke-width="2"/>
          <circle cx="197" cy="202" r="5" fill="#f5a623"/>
          <line x1="197" y1="202" x2="252" y2="92" stroke="#f5a623" stroke-dasharray="3,3"/>
          <text x="260" y="88" font-family="Manrope, sans-serif" font-size="12" fill="#f5a623" letter-spacing="1" font-weight="600">COSZO</text>
          <circle cx="200" cy="200" r="170" fill="none" stroke="#17a2ab" stroke-width="1.5" opacity="0.5"/>
        </svg>
      </div>
    </div>
  </div>
</section>
"""

# Inject the pre-projected coastline + graticule paths into the Get Involved globe.
INDEX_BODY = INDEX_BODY.replace("__GLOBE_COASTLINES__", GLOBE_COASTLINES)
INDEX_BODY = INDEX_BODY.replace("__GLOBE_GRATICULE__", GLOBE_GRATICULE)

# ============================================================
# MOTIVATION
# ============================================================
MOTIVATION_BODY = page_hero(
    "Home", "Motivation",
    "The Cascadia subduction zone presents one of the greatest natural hazards to the Pacific Northwest. The tools to observe it in real time have, until now, been largely onshore.",
    ['<a href="index.html">Home</a>', '<a href="about.html">About</a>', "Motivation"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#hazard" class="active">The Cascadia Hazard</a></li>
          <li><a href="#gap">An Observation Gap</a></li>
          <li><a href="#rca">Building on the RCA</a></li>
          <li><a href="#coszo">Why COSZO, Why Now</a></li>
        </ul>
      </aside>
      <article class="article-content">
        <p class="lede-para">The Cascadia subduction zone stretches roughly 1,000 kilometers from northern California to British Columbia, capable of generating magnitude 9+ megathrust earthquakes and far-field tsunamis. Our ability to understand and warn against these events has, until now, been constrained by the fact that the locked portion of the fault lies almost entirely offshore.</p>

        <h2 id="hazard">The Cascadia Hazard</h2>
        <p>The last great Cascadia earthquake occurred on January 26, 1700. Paleoseismic, geodetic, and historical records now place the recurrence interval in the 200 to 800 year range, and the plate is accumulating strain at a rate that implies a large event is a matter of when, not whether. Coastal communities from California to British Columbia would be directly affected, and a tsunami would reach shore in 15 to 30 minutes.</p>
        <p>Decades of onshore GPS and seismometer networks have transformed our picture of the onshore deformation field. But the locked region of the megathrust, the part that stores and will eventually release most of the strain, sits beneath the continental shelf and abyssal plain. Observing it requires instruments on the seafloor.</p>

        <div class="pull-stat">
          <div class="stat-num">1700</div>
          <div class="stat-desc">Year of the last known great Cascadia megathrust earthquake, inferred from tree ring records, coastal subsidence, and a tsunami deposit in Japan.</div>
        </div>

        <h2 id="gap">An Observation Gap</h2>
        <p>Offshore geophysical observations have historically been episodic. Ocean-bottom seismometer (OBS) deployments are valuable but typically operate for a year or two at a time, limiting their ability to capture long-term deformation transients or the full spectrum of pre-seismic behavior. Permanent, cabled, real-time seafloor instrumentation is what the community has needed, and what the Cascadia Offshore Subduction Zone Observatory provides.</p>

        <h3>What we still do not know</h3>
        <ul>
          <li>The precise updip and downdip limits of the locked zone.</li>
          <li>Whether slow slip events extend offshore and how often they occur.</li>
          <li>The timing and magnitude of potential precursory signals.</li>
          <li>How intraslab seismicity relates to megathrust loading.</li>
        </ul>

        <h2 id="rca">Building on the RCA</h2>
        <p>The OOI Regional Cabled Array, commissioned in 2015, provides something rare in ocean science: a permanent power and communications backbone on the seafloor, with real-time data telemetry. The RCA was not originally designed as a geophysical observatory. It was built for coastal oceanography. But the cable runs directly across the Cascadia margin, and the nodes it feeds are fortuitously positioned in the region of greatest geophysical interest.</p>
        <p>COSZO augments the RCA with a geophysical sensor suite: strong-motion accelerometers, broadband and short-period seismometers, absolute and differential pressure gauges, acoustic hydrophones, and current meters. Each contributes a different piece of the puzzle.</p>

        <h2 id="coszo">Why COSZO, Why Now</h2>
        <p>With the RCA infrastructure in place, the engineering risk of adding geophysical instruments is greatly reduced. What remains is a science opportunity of unusual magnitude: decades of continuous, open-access, real-time observation across the locked region of a major subduction zone. Few facilities anywhere in the world will match it.</p>
        <p>For a complete statement of the science drivers, see our <a href="scientific-objectives.html">Scientific Objectives</a>.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# SCIENTIFIC OBJECTIVES
# ============================================================
SCIOBJ_BODY = page_hero(
    "Home", "Scientific Objectives",
    "Four research thrusts that the COSZO sensor suite is designed to address, spanning subduction mechanics, seismicity, deformation, and hazard science.",
    ['<a href="index.html">Home</a>', '<a href="about.html">About</a>', "Scientific Objectives"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">The COSZO facility is designed around five interlocking scientific thrusts. Each leverages a different subset of the sensor suite and each addresses fundamental, unresolved questions about how subduction zone faults work.</p>

        <h2>1. Constrain the updip and downdip limits of the locked zone</h2>
        <p>Strong-motion and broadband seismometer coverage across the continental shelf will improve our ability to locate small earthquakes along the megathrust, refining where the fault is seismically active and where it is locked. Complementary seafloor pressure gauges track vertical deformation at the sensor sites with sub-centimeter sensitivity.</p>

        <h2>2. Detect and characterize offshore slow slip</h2>
        <p>Onshore geodesy has revealed a rich catalog of episodic tremor and slow slip in the Cascadia forearc. Whether analogous slow slip occurs offshore, and whether it migrates along strike, is a central open question. COSZO pressure sensors operating at tsunami-band frequencies, together with the seismic array, will provide the first sustained offshore geodetic look at this phenomenon.</p>

        <h2>3. Characterize the full seismicity catalog beneath the shelf</h2>
        <p>Intraslab and crustal seismicity beneath the Cascadia margin remain under-sampled. A dense seafloor seismic network closes the detection gap and enables magnitude-of-completeness improvements of roughly one unit compared to onshore-only networks.</p>

        <h2>4. Quantify near-source ground motion</h2>
        <p>Strong-motion accelerometers on the seafloor give the first direct measurements of ground shaking near the expected rupture surface of a future great earthquake. These records are essential for calibrating ground-motion prediction equations used by engineers and emergency planners.</p>

        <h2>Offshore earthquake early warning</h2>
        <p>In addition to the science objectives, COSZO will provide a test bed for offshore earthquake early warning.</p>
        <p>Because COSZO instruments sit offshore of population centers, they can detect rupture initiation seconds to tens of seconds before onshore networks. Integrating COSZO data streams into the USGS ShakeAlert system is an explicit project goal and is the focus of our <a href="early-warning.html">Early Warning</a> work.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# INFRASTRUCTURE (hub)
# ============================================================
INFRASTRUCTURE_BODY = page_hero(
    "Infrastructure", "Infrastructure",
    "The COSZO facility builds on the OOI Regional Cabled Array, extending its reach with new geophysical instrumentation purpose-built for seismological and geodetic observation.",
    ['<a href="index.html">Home</a>', "Infrastructure"]
) + """
<section class="hub-section">
  <div class="container">
    <div class="section-header">
      <div class="section-header-intro">
        <div class="section-eyebrow">Explore</div>
        <h2 class="section-heading">What's on the seafloor.</h2>
        <p>The existing RCA infrastructure, the new COSZO sensor suite, and opportunities for community expansion.</p>
      </div>
    </div>
    <div class="hub-cards">
      <a href="existing-instruments.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><rect x="8" y="14" width="32" height="22" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 22 H40" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="18" r="1.5" fill="currentColor"/></svg>
        <h3>Existing Instruments</h3>
        <p>The seismometers, pressure gauges, and oceanographic sensors already deployed on the OOI RCA, forming the baseline COSZO builds on.</p>
        <span class="card-link">View existing network</span>
      </a>
      <a href="coszo-instruments.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="14" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="24" r="4" fill="#f5a623"/><line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" stroke-width="2"/><line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" stroke-width="2"/></svg>
        <h3>COSZO Instruments</h3>
        <p>The new geophysical sensors being added by COSZO: strong-motion accelerometers, broadband seismometers, high-precision pressure gauges, and acoustic hydrophones.</p>
        <span class="card-link">View new instrumentation</span>
      </a>
    </div>
  </div>
</section>
"""

# ============================================================
# EXISTING INSTRUMENTS
# ============================================================
EXISTING_BODY = page_hero(
    "Infrastructure", "Existing Instruments",
    "The RCA instruments that COSZO builds upon. These are the seismometers, pressure gauges, and oceanographic sensors already deployed and returning real-time data.",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', "Existing Instruments"]
) + """
<section class="article">
  <div class="container">
    <p class="lede-para" style="max-width:820px; margin:0 0 44px;">Since 2015, the OOI Regional Cabled Array has delivered real-time data from a suite of seafloor instruments along the Cascadia margin. These existing instruments &mdash; listed below with their makes, models, and the sites where COSZO uses them &mdash; are the foundation COSZO extends. Each links to its OOI instrument page for full specifications.</p>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Broadband Ocean-Bottom Seismometer</h2>
        <p class="instr-meta"><strong>Make &amp; model:</strong> Güralp CMG-1T (360&nbsp;s&ndash;50&nbsp;Hz) with CMG-5T strong-motion and a DM24/7-EAM digitizer; Ethernet (10/100), synced to pulse-per-second timing.</p>
        <p>Broadband seismometers measure seismicity and earthquake activity along tectonic plate boundaries &mdash; from large-magnitude subduction-zone earthquakes to smaller events associated with faulting, melt migration, and hydrothermal upflow. Each instrument sits in a titanium housing; in sediment-covered areas it is set in a 60&nbsp;cm caisson filled with silica beads to improve seafloor coupling and data resolution. The cabled connection enables real-time earthquake detection along the Oregon margin.</p>
        <p class="instr-site"><strong>Sites:</strong> <a href="slope-base.html">Slope Base</a>, <a href="hydrate-ridge.html">Southern Hydrate Ridge</a>.</p>
      </div>
      <figure class="instr-figure"><img src="assets/instruments/broadband-seismometer-caisson.jpg" alt="Broadband ocean-bottom seismometer set in its caisson" loading="lazy"><figcaption>Image: OOI / UW Interactive Oceans</figcaption></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Short-Period Seismometer</h2>
        <p class="instr-meta"><strong>Make &amp; model:</strong> Güralp short-period ocean-bottom seismometer (CMG-6TF), frequency range ~0.1&ndash;100&nbsp;Hz; three units.</p>
        <p>Short-period ocean-bottom seismometers detect the seismic vibrations of small earthquakes as energy travels through the seafloor, across a frequency range from roughly 0.1&nbsp;Hz to 100&nbsp;Hz. Three units monitor the Southern Hydrate Ridge summit, a methane-seep site offshore Newport, Oregon, helping resolve local subsurface processes. All instruments transmit real-time data and are publicly available.</p>
        <p class="instr-site"><strong>Sites:</strong> <a href="hydrate-ridge.html">Southern Hydrate Ridge</a> (three units).</p>
      </div>
      <figure class="instr-figure"><img src="assets/instruments/short-period-seismometer.jpg" alt="Short-period seismometer" loading="lazy"><figcaption>Image: OOI / UW Interactive Oceans</figcaption></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Low-Frequency Hydrophone</h2>
        <p class="instr-meta"><strong>Make &amp; model:</strong> HTI-90-U; detection band ~2&nbsp;Hz to 20&nbsp;kHz.</p>
        <p>Low-frequency hydrophones detect the hydroacoustic tertiary (T) phase of oceanic earthquakes as well as solid-earth P waves from regional and teleseismic events. Working alongside the ocean-bottom seismometers, they enhance real-time offshore earthquake detection and improve magnitude and location accuracy. During the April 2015 Axial Seamount eruption, the hydrophones recorded over 30,000 water-borne acoustic events.</p>
        <p class="instr-site"><strong>Sites:</strong> <a href="slope-base.html">Slope Base</a>, <a href="hydrate-ridge.html">Southern Hydrate Ridge</a>.</p>
      </div>
      <figure class="instr-figure"><img src="assets/instruments/hydrophone.jpg" alt="Low-frequency hydrophone deployment" loading="lazy"><figcaption>Image: OOI / UW Interactive Oceans</figcaption></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Seafloor Pressure Gauge</h2>
        <p class="instr-meta"><strong>Make &amp; model:</strong> Sea-Bird SBE 54.</p>
        <p>Sea-Bird SBE 54 sensors record absolute seafloor pressure in real time. Pressure is sensitive to lunar tides, storms, and currents, which can drive fluid migration into and out of seafloor crust and sediments; the same instruments can also measure the passing of tsunamis in real time.</p>
        <p class="instr-site"><strong>Sites:</strong> <a href="slope-base.html">Slope Base</a>, <a href="hydrate-ridge.html">Southern Hydrate Ridge</a> (also Axial Base).</p>
      </div>
      <figure class="instr-figure"><img src="assets/instruments/pressure-gauge.jpg" alt="Seafloor pressure gauge" loading="lazy"><figcaption>Image: OOI / UW Interactive Oceans</figcaption></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Current Meter</h2>
        <p class="instr-meta"><strong>Make &amp; model:</strong> Nobska MAVS-4 (VEL3D) on the seafloor; Nortek Vector (VEL3D) on the Oregon Shelf and Oregon Offshore benthic experiment platforms.</p>
        <p>Single-point current meters measure the speed and direction of local currents along with water temperature. The measurements are key to understanding how heat, mass, and momentum are transported and how seawater mixes at small scales, and they also help filter current-driven acoustic noise from the seismic signals along the steep Cascadia bathymetry.</p>
        <p class="instr-site"><strong>Sites:</strong> <a href="slope-base.html">Slope Base</a>, <a href="hydrate-ridge.html">Southern Hydrate Ridge</a>, <a href="oregon-shelf.html">Oregon Shelf</a>, <a href="oregon-offshore.html">Oregon Offshore</a>.</p>
      </div>
      <figure class="instr-figure"><img src="assets/instruments/current-meter.jpg" alt="Single-point current meter" loading="lazy"><figcaption>Image: OOI / UW Interactive Oceans</figcaption></figure>
    </div>
  </div>
</section>
"""

# ============================================================
# COSZO INSTRUMENTS
# ============================================================
COSZO_INSTR_BODY = page_hero(
    "Infrastructure", "COSZO Instruments",
    "The new sensor suite that COSZO is adding to the Regional Cabled Array, designed specifically for subduction zone geophysics and earthquake early warning.",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', "COSZO Instruments"]
) + """
<section class="article">
  <div class="container">
    <p class="lede-para" style="max-width:820px; margin:0 0 44px;">COSZO is adding a geophysical sensor suite purpose-built for subduction zone science. The instruments below produce the COSZO <a href="data.html">data products</a>, spanning seismic, pressure, acoustic, and oceanographic observations.</p>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Broadband Seismometer &amp; Strong Motion</h2>
        <p>Three-component broadband seismometers paired with high-dynamic-range strong-motion accelerometers. The broadband channels capture regional and teleseismic ground velocity for ambient-noise interferometry and moment-tensor work, while the co-located strong-motion sensors record the unclipped, near-source acceleration of a great earthquake.</p>
        <p class="instr-site"><strong>Sites:</strong> to be confirmed.</p>
      </div>
      <figure class="instr-figure"><div class="image-placeholder">Photo &mdash; Broadband seismometer &amp; strong motion (placeholder)</div></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Short-Period Seismometer</h2>
        <p>Compact, high-frequency seismometers optimized for local microseismicity and P-wave detection at sites where broadband performance is not required.</p>
        <p class="instr-site"><strong>Sites:</strong> to be confirmed.</p>
      </div>
      <figure class="instr-figure"><div class="image-placeholder">Photo &mdash; Short-period seismometer (placeholder)</div></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Differential Pressure Gauge</h2>
        <p>Measures short-period pressure variations at the seafloor, capturing tsunami signals and hydroacoustic waves that complement the absolute pressure record.</p>
        <p class="instr-site"><strong>Sites:</strong> to be confirmed.</p>
      </div>
      <figure class="instr-figure"><div class="image-placeholder">Photo &mdash; Differential pressure gauge (placeholder)</div></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Hydrophone</h2>
        <p>Low-frequency hydrophones tuned to the infrasound band for T-phase detection, hydroacoustic event characterization, and long-range propagation studies.</p>
        <p class="instr-site"><strong>Sites:</strong> to be confirmed.</p>
      </div>
      <figure class="instr-figure"><div class="image-placeholder">Photo &mdash; Hydrophone (placeholder)</div></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Absolute Pressure Gauge</h2>
        <p>Absolute seafloor pressure sensors recording the tidal band, with a paired temperature channel on each instrument. These feed the <a href="absolute-seafloor-pressure.html">Absolute Seafloor Pressure</a> data product for tsunami detection and long-period seafloor deformation monitoring.</p>
        <p class="instr-site"><strong>Sites:</strong> <a href="slope-base.html">Slope Base</a>, <a href="hydrate-ridge.html">Southern Hydrate Ridge</a>, Axial Base.</p>
      </div>
      <figure class="instr-figure"><div class="image-placeholder">Photo &mdash; Absolute pressure gauge (placeholder)</div></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>GSSM &mdash; Calibrated Pressure &amp; Acceleration</h2>
        <p>Geodetic Seafloor Stations combine calibrated pressure and strong-motion platforms, providing both geodetic and seismological observations from the same seafloor site.</p>
        <p class="instr-site"><strong>Sites:</strong> to be confirmed.</p>
      </div>
      <figure class="instr-figure"><div class="image-placeholder">Photo &mdash; GSSM (placeholder)</div></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>CSCPR &mdash; Calibrated Pressure</h2>
        <p>A cabled self-calibrating pressure recorder with on-board calibration against a known reference, correcting the long-period instrumental drift that normally obscures tectonic deformation signals.</p>
        <p class="instr-site"><strong>Sites:</strong> to be confirmed.</p>
      </div>
      <figure class="instr-figure"><div class="image-placeholder">Photo &mdash; CSCPR (placeholder)</div></figure>
    </div>

    <div class="instr-row">
      <div class="instr-text">
        <h2>Current Meter</h2>
        <p>Measures near-bottom sea-water velocity, providing the oceanographic context needed to model and remove current- and tide-driven pressure fluctuations before a tectonic signal becomes visible.</p>
        <p class="instr-site"><strong>Sites:</strong> to be confirmed.</p>
      </div>
      <figure class="instr-figure"><div class="image-placeholder">Photo &mdash; Current meter (placeholder)</div></figure>
    </div>
  </div>
</section>
"""

# ============================================================
# FUTURE OPPORTUNITIES
# ============================================================
FUTURE_BODY = page_hero(
    "Infrastructure", "Future Opportunities",
    "COSZO is designed as a community facility. Several mechanisms exist for researchers to add instrumentation, propose new sampling, or integrate complementary sensors into the observatory.",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', "Future Opportunities"]
) + """
<section class="hub-section">
  <div class="container">
    <div class="hub-cards cols-2">
      <div class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2"/><path d="M24 14 V24 L32 28" stroke="#17a2ab" stroke-width="2" stroke-linecap="round"/></svg>
        <h3>Propose New Instrumentation</h3>
        <p>Researchers may propose additions to the COSZO sensor suite through the standard NSF proposal process. The COSZO team provides letters of collaboration and engineering consultation during proposal preparation.</p>
        <a href="contact.html" class="card-link">Discuss a proposal</a>
      </div>
      <div class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><rect x="6" y="18" width="36" height="22" rx="2" stroke="currentColor" stroke-width="2"/><path d="M14 18 L24 6 L34 18" stroke="currentColor" stroke-width="2" fill="none"/></svg>
        <h3>Ride-Along Cruises</h3>
        <p>COSZO turnaround cruises include berths and deck space for community instruments and short-term deployments. Requests should be submitted at least 12 months ahead of the target cruise.</p>
        <a href="meetings.html" class="card-link">Upcoming cruise schedule</a>
      </div>
      <div class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M8 24 Q 16 14, 24 24 T 40 24" stroke="currentColor" stroke-width="2" fill="none"/><path d="M8 32 Q 16 22, 24 32 T 40 32" stroke="#17a2ab" stroke-width="2" fill="none"/></svg>
        <h3>Distributed Acoustic Sensing</h3>
        <p>The RCA fiber-optic cable can be interrogated as a distributed sensor. COSZO welcomes proposals for DAS experiments that leverage the cable as a dense array of virtual seismometers.</p>
        <a href="contact.html" class="card-link">Inquire about DAS</a>
      </div>
      <div class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="18" cy="18" r="8" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="32" r="8" stroke="#17a2ab" stroke-width="2"/><line x1="24" y1="24" x2="26" y2="26" stroke="currentColor" stroke-width="2"/></svg>
        <h3>Data Integration</h3>
        <p>If your experiment or network produces data that would benefit COSZO science, we can work with you to cross-register, archive, and distribute it alongside our own streams through the OOI cyberinfrastructure.</p>
        <a href="contact.html" class="card-link">Start a conversation</a>
      </div>
    </div>
  </div>
</section>
"""

# ============================================================
# ABOUT (hub with square cards -> Motivation / Objectives / Publications / People / Contact)
# ============================================================
ABOUT_BODY = page_hero(
    "About", "About",
    "The motivation, science objectives, publications, people, and contacts behind the Cascadia Offshore Subduction Zone Observatory.",
    ['<a href="index.html">Home</a>', "About"]
) + """
<section class="hub-section">
  <div class="container">
    <div class="hub-cards">
      <a href="motivation.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="20" r="10" stroke="currentColor" stroke-width="2"/><path d="M20 31 H28 M21 35 H27" stroke="#f5a623" stroke-width="2" stroke-linecap="round"/><path d="M24 6 V9 M39 20 H42 M6 20 H9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
        <h3>Motivation</h3>
        <p>Why a dedicated geophysical observatory for the Cascadia subduction zone, and the hazard it addresses.</p>
        <span class="card-link">Read the motivation &rarr;</span>
      </a>
      <a href="scientific-objectives.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="16" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="24" r="9" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="24" r="3" fill="#f5a623"/></svg>
        <h3>Scientific Objectives</h3>
        <p>The five interlocking research thrusts the COSZO sensor suite is designed to address.</p>
        <span class="card-link">View objectives &rarr;</span>
      </a>
      <a href="publications.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M24 12 C18 8, 10 8, 8 10 V36 C10 34, 18 34, 24 38 C30 34, 38 34, 40 36 V10 C38 8, 30 8, 24 12 Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><line x1="24" y1="12" x2="24" y2="38" stroke="#17a2ab" stroke-width="2"/></svg>
        <h3>Publications</h3>
        <p>Foundational reports, workshop documents, and peer-reviewed work behind the project.</p>
        <span class="card-link">Browse publications &rarr;</span>
      </a>
      <a href="people.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="18" cy="20" r="6" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="22" r="5" stroke="#17a2ab" stroke-width="2"/><path d="M8 38 Q 18 28, 28 38" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round"/><path d="M26 38 Q 34 30, 42 38" stroke="#17a2ab" stroke-width="2" fill="none" stroke-linecap="round"/></svg>
        <h3>People</h3>
        <p>The scientists, engineers, students, and collaborators building COSZO.</p>
        <span class="card-link">Meet the team &rarr;</span>
      </a>
      <a href="contact.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><rect x="8" y="12" width="32" height="24" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 14 L24 26 L40 14" stroke="#f5a623" stroke-width="2" fill="none"/></svg>
        <h3>Contact</h3>
        <p>Reach the project office for collaboration, data questions, press, or REU inquiries.</p>
        <span class="card-link">Get in touch &rarr;</span>
      </a>
    </div>
  </div>
</section>
"""

# ============================================================
# SCIENCE (combined: Motivation + Objectives, anchored sections)
# ============================================================
SCIENCE_BODY = page_hero(
    "Science", "Science",
    "The scientific motivation and objectives for the Cascadia Offshore Subduction Zone Observatory.",
    ['<a href="index.html">Home</a>', "Science"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#motivation">Motivation</a></li>
          <li><a href="#objectives">Objectives</a></li>
          <li><a href="publications.html">Publications</a></li>
        </ul>
      </aside>
      <article class="article-content">

        <h2 id="motivation">Motivation</h2>
        <p class="lede-para">The Cascadia subduction zone stretches roughly 1,000 kilometers from northern California to British Columbia, capable of generating magnitude 9+ megathrust earthquakes and far-field tsunamis. Our ability to understand and warn against these events has, until now, been constrained by the fact that the locked portion of the fault lies almost entirely offshore.</p>

        <h3>The Cascadia Hazard</h3>
        <p>The last great Cascadia earthquake occurred on January 26, 1700. Paleoseismic, geodetic, and historical records now place the recurrence interval in the 200 to 800 year range, and the plate is accumulating strain at a rate that implies a large event is a matter of when, not whether. Coastal communities from California to British Columbia would be directly affected, and a tsunami would reach shore in 15 to 30 minutes.</p>
        <p>Decades of onshore GPS and seismometer networks have transformed our picture of the onshore deformation field. But the locked region of the megathrust, the part that stores and will eventually release most of the strain, sits beneath the continental shelf and abyssal plain. Observing it requires instruments on the seafloor.</p>

        <div class="pull-stat">
          <div class="stat-num">1700</div>
          <div class="stat-desc">Year of the last known great Cascadia megathrust earthquake, inferred from tree ring records, coastal subsidence, and a tsunami deposit in Japan.</div>
        </div>

        <h3>An Observation Gap</h3>
        <p>Offshore geophysical observations have historically been episodic. Ocean-bottom seismometer (OBS) deployments are valuable but typically operate for a year or two at a time, limiting their ability to capture long-term deformation transients or the full spectrum of pre-seismic behavior. Permanent, cabled, real-time seafloor instrumentation is what the community has needed, and what the Cascadia Offshore Subduction Zone Observatory provides.</p>

        <h4>What we still do not know</h4>
        <ul>
          <li>The precise updip and downdip limits of the locked zone.</li>
          <li>Whether slow slip events extend offshore and how often they occur.</li>
          <li>The timing and magnitude of potential precursory signals.</li>
          <li>How intraslab seismicity relates to megathrust loading.</li>
        </ul>

        <h3>Building on the RCA</h3>
        <p>The OOI Regional Cabled Array, commissioned in 2015, provides something rare in ocean science: a permanent power and communications backbone on the seafloor, with real-time data telemetry. The RCA was not originally designed as a geophysical observatory. It was built for coastal oceanography. But the cable runs directly across the Cascadia margin, and the nodes it feeds are fortuitously positioned in the region of greatest geophysical interest.</p>
        <p>COSZO augments the RCA with a geophysical sensor suite: strong-motion accelerometers, broadband and short-period seismometers, absolute and differential pressure gauges, acoustic hydrophones, and current meters. Each contributes a different piece of the puzzle.</p>

        <h3>Why COSZO, Why Now</h3>
        <p>With the RCA infrastructure in place, the engineering risk of adding geophysical instruments is greatly reduced. What remains is a science opportunity of unusual magnitude: decades of continuous, open-access, real-time observation across the locked region of a major subduction zone. Few facilities anywhere in the world will match it.</p>

        <hr style="margin: 3rem 0; border: 0; border-top: 1px solid #d8dde4;" />

        <h2 id="objectives">Objectives</h2>
        <p class="lede-para">The COSZO facility is designed around five interlocking scientific thrusts. Each leverages a different subset of the sensor suite and each addresses fundamental, unresolved questions about how subduction zone faults work.</p>

        <h3>1. Constrain the updip and downdip limits of the locked zone</h3>
        <p>Strong-motion and broadband seismometer coverage across the continental shelf will improve our ability to locate small earthquakes along the megathrust, refining where the fault is seismically active and where it is locked. Complementary seafloor pressure gauges track vertical deformation at the sensor sites with sub-centimeter sensitivity.</p>

        <h3>2. Detect and characterize offshore slow slip</h3>
        <p>Onshore geodesy has revealed a rich catalog of episodic tremor and slow slip in the Cascadia forearc. Whether analogous slow slip occurs offshore, and whether it migrates along strike, is a central open question. COSZO pressure sensors operating at tsunami-band frequencies, together with the seismic array, will provide the first sustained offshore geodetic look at this phenomenon.</p>

        <h3>3. Characterize the full seismicity catalog beneath the shelf</h3>
        <p>Intraslab and crustal seismicity beneath the Cascadia margin remain under-sampled. A dense seafloor seismic network closes the detection gap and enables magnitude-of-completeness improvements of roughly one unit compared to onshore-only networks.</p>

        <h3>4. Quantify near-source ground motion</h3>
        <p>Strong-motion accelerometers on the seafloor give the first direct measurements of ground shaking near the expected rupture surface of a future great earthquake. These records are essential for calibrating ground-motion prediction equations used by engineers and emergency planners.</p>

        <h3>5. Develop and test offshore earthquake early warning</h3>
        <p>Because COSZO instruments sit offshore of population centers, they can detect rupture initiation seconds to tens of seconds before onshore networks. Integrating COSZO data streams into the USGS ShakeAlert system is an explicit project goal and is the focus of our <a href="early-warning.html">Early Warning</a> work.</p>

        <h3>Cross-cutting themes</h3>
        <p>Across these five thrusts, several cross-cutting methodological themes recur: ambient-noise interferometry for continuous wavespeed monitoring, distributed acoustic sensing on the existing fiber, and machine-learning driven event detection and classification. Each is an active research direction within the COSZO team.</p>

      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# PUBLICATIONS (stub)
# ============================================================
PUBLICATIONS_BODY = page_hero(
    "Science", "Publications",
    "Foundational reports, workshop documents, and peer-reviewed publications underpinning the Cascadia Offshore Subduction Zone Observatory.",
    ['<a href="index.html">Home</a>', '<a href="science.html">Science</a>', "Publications"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#whitepaper">Foundational White Paper</a></li>
          <li><a href="#workshops">Workshop Reports</a></li>
          <li><a href="#nrc">National Research Council</a></li>
          <li><a href="#peer">Peer-Reviewed Articles</a></li>
        </ul>
        <p style="margin-top:1.25rem; font-size:0.9rem; color:#5b6573;">
          Many of these documents are mirrored from the legacy
          <a href="https://coszo.org/story/list?category=Archived" target="_blank" rel="noopener">COSZO archives &#8599;</a>.
        </p>
      </aside>
      <article class="article-content">

        <h2 id="whitepaper">Foundational White Paper</h2>
        <p>
          <strong>Schmidt, D., W. Wilcock, R. LeVeque, F. Gonzales, G. Cram, D. Manalang, M. Harrington, E. Roland, and P. Bodin</strong> (2019).
          <em>Earthquake and Tsunami Early Warning on the Cascadia Subduction Zone: A Feasibility Study for an Offshore Geophysical Monitoring Network.</em>
          University of Washington, 81 pp.
          [<a href="http://hdl.handle.net/1773/50968" target="_blank" rel="noopener">Online ref</a>]
          [<a href="assets/archives/whitepaper_lowres.pdf" target="_blank" rel="noopener">PDF, low-res 8 MB</a>]
          [<a href="assets/archives/whitepaper_highres.pdf" target="_blank" rel="noopener">PDF, high-res 45 MB</a>]
        </p>
        <p style="margin-top:0.5rem;">Supplements:
          [<a href="assets/archives/tradestudy.pdf" target="_blank" rel="noopener">Engineering Trade Study, PDF 1.5 MB</a>]
          &nbsp;
          [<a href="assets/archives/desktop_survey.pdf" target="_blank" rel="noopener">Desktop Survey, PDF 28 MB</a>]
        </p>

        <h2 id="workshops">Workshop Reports</h2>
        <ul>
          <li>
            <strong>Seafloor Instrumentation Workshop</strong> &mdash; Gleneden Beach, OR, July 12–13, 2018.
            [<a href="https://ir.library.oregonstate.edu/downloads/6m311v741?locale=en" target="_blank" rel="noopener">Report</a>]
            [<a href="https://ctemps.org/announcement/seafloor-instrumentation-workshop-july-12-13-2018" target="_blank" rel="noopener">Workshop site</a>]
          </li>
          <li>
            <strong>Offshore Geophysical Monitoring of Cascadia for Early Warning and Hazards Research</strong> &mdash; Seattle, WA, April 3–5, 2017.
            [<a href="assets/archives/workshop_report.pdf" target="_blank" rel="noopener">Final Report, PDF 13 MB</a>]
            [<a href="assets/archives/master_abstract.pdf" target="_blank" rel="noopener">Abstracts, PDF 33 MB</a>]
            [<a href="assets/archives/master_whitepaper.pdf" target="_blank" rel="noopener">Participant Whitepapers, PDF 13 MB</a>]
          </li>
          <li>
            <strong>Subduction Zone Observatory Workshop</strong> &mdash; Boise, ID, September 29 – October 1, 2016.
            [<a href="assets/archives/sz4d.pdf" target="_blank" rel="noopener">Report</a>]
          </li>
          <li>
            <strong>Investigating Cascadia Subduction Zone Geodynamics Through Scientific Ocean Drilling</strong> &mdash; Seattle, WA, April 2015.
            [<a href="assets/archives/cascadia_report.pdf" target="_blank" rel="noopener">Report</a>]
          </li>
          <li>
            <strong>Seafloor Geodesy in Cascadia</strong> &mdash; Seattle, WA, June 2012.
            [<a href="assets/archives/seafloor_geodesy_cascadia_report.pdf" target="_blank" rel="noopener">Report</a>]
          </li>
        </ul>

        <h2 id="nrc">National Research Council Reports</h2>
        <ul>
          <li>National Research Council (2011). <em>Tsunami Warning and Preparedness: An Assessment of the U.S. Tsunami Program and the Nation's Preparedness Efforts.</em> [<a href="https://www.nap.edu/catalog/12628/tsunami-warning-and-preparedness-an-assessment-of-the-us-tsunami" target="_blank" rel="noopener">Report</a>]</li>
          <li>National Research Council (2011). <em>National Earthquake Resilience: Research, Implementation, and Outreach.</em> [<a href="https://www.nap.edu/catalog/13092/national-earthquake-resilience-research-implementation-and-outreach" target="_blank" rel="noopener">Report</a>]</li>
          <li>National Research Council (2006). <em>Improved Seismic Monitoring – Improved Decision-Making: Assessing the Value of Reduced Uncertainty.</em> [<a href="https://www.nap.edu/catalog/11327/improved-seismic-monitoring-improved-decision-making-assessing-the-value-of" target="_blank" rel="noopener">Report</a>]</li>
        </ul>

        <h2 id="peer">Peer-Reviewed Articles</h2>
        <ul>
          <li>
            Crowell, B. W., D. A. Schmidt, P. Bodin, J. E. Vidale, B. Baker, S. Barrientos, and J. Geng (2018).
            G-FAST earthquake early warning potential for great earthquakes in Chile.
            <em>Seismological Research Letters</em>, 89(2A), 542–556.
            [<a href="https://doi.org/10.1785/0220170180" target="_blank" rel="noopener">doi:10.1785/0220170180</a>]
          </li>
          <li>
            Gomberg, J. S., et al. (2017).
            Reducing risk where tectonic plates collide—U.S. Geological Survey subduction zone science plan.
            <em>U.S. Geological Survey Circular</em> 1428, 45 pp.
            [<a href="https://doi.org/10.3133/cir1428" target="_blank" rel="noopener">doi:10.3133/cir1428</a>]
          </li>
          <li>
            Hotovec-Ellis, A. J., et al. (2017).
            Improving the Hawaiian Seismic Network for Earthquake Early Warning.
            <em>Seismological Research Letters</em>, 88(2A).
            [<a href="https://doi.org/10.1785/0220160187" target="_blank" rel="noopener">doi:10.1785/0220160187</a>]
          </li>
          <li>
            Wilcock, W., D. A. Schmidt, J. E. Vidale, M. J. Harrington, P. Bodin, G. S. Cram, J. R. Delaney, F. I. Gonzalez, D. S. Kelley, R. J. LeVeque, D. A. Manalang, C. McGuire, E. C. Roland, M. W. Stoermer, J. W. Tilley, and C. J. Vogl (2016).
            Designing an offshore geophysical network in the Pacific Northwest for earthquake and tsunami early warning and hazard research.
            <em>OCEANS 2016 MTS/IEEE Monterey</em>, 1–8.
            [<a href="https://doi.org/10.1109/OCEANS.2016.7761291" target="_blank" rel="noopener">doi:10.1109/OCEANS.2016.7761291</a>]
          </li>
          <li>
            Hartog, J. R., V. Kress, S. D. Malone, P. Bodin, J. E. Vidale, and B. W. Crowell (2016).
            Earthquake Early Warning: ShakeAlert in the Pacific Northwest.
            <em>Bulletin of the Seismological Society of America</em>, 106(4).
            [<a href="https://doi.org/10.1785/0120150261" target="_blank" rel="noopener">doi:10.1785/0120150261</a>]
          </li>
          <li>
            Crowell, B. W., et al. (2016).
            Demonstration of the Cascadia G-FAST Geodetic Earthquake Early Warning System for the Nisqually, Washington, Earthquake.
            <em>Seismological Research Letters</em>, 87(4), 930–943.
            [<a href="https://doi.org/10.1785/0220150255" target="_blank" rel="noopener">doi:10.1785/0220150255</a>]
          </li>
        </ul>

        <p style="margin-top:2rem; color:#5b6573; font-size:0.9rem;">
          Have a relevant publication that should be listed here? Please <a href="contact.html">get in touch</a>.
        </p>
      </article>
    </div>
  </div>
</section>
"""

# Publications is "Coming soon" for now. The full reference list above is
# preserved for later restoration; the stub below overrides it in the build.
PUBLICATIONS_BODY = page_hero(
    "About", "Publications",
    "Publications from the Cascadia Offshore Subduction Zone Observatory.",
    ['<a href="index.html">Home</a>', '<a href="about.html">About</a>', "Publications"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">Coming soon.</p>
        <p>COSZO publications will be listed here as they become available. In the meantime, please <a href="contact.html">get in touch</a> with any questions.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# SITES (overview with site cards)
# ============================================================
# Interactive overview map: each hotspot is placed as a percentage of the
# all-sites.jpg image (left%, top%). Adjust the numbers to nudge a marker.
SITE_MAP_HOTSPOTS = [
    # (href, label, left%, top%)
    ("slope-base.html",        "Slope Base",             5,  55),
    ("hydrate-ridge.html",     "Southern Hydrate Ridge", 25, 50),
    ("oregon-mid-slope.html",  "Oregon Mid Slope",       27, 57),
    ("oregon-offshore.html",   "Oregon Offshore",        42, 82),
    ("oregon-outer-shelf.html","Oregon Outer Shelf",     84, 26),
    ("oregon-shelf.html",      "Oregon Shelf",           95, 37),
]

def render_site_map():
    spots = ""
    for href, label, x, y in SITE_MAP_HOTSPOTS:
        spots += (f'\n        <a class="site-hotspot" href="{href}" style="left:{x}%;top:{y}%" aria-label="{label}">'
                  f'<span class="site-hotspot-label">{label}</span></a>')
    return (
        '<figure class="welcome-figure welcome-figure-wide sitemap-figure" style="width:75%; margin:52px auto 0;">\n'
        '      <div class="sitemap">\n'
        '        <img src="assets/sites/all-sites.jpg" alt="Bathymetric map of all COSZO seafloor sites along the Cascadia margin off Oregon" loading="lazy">'
        f'{spots}\n'
        '      </div>\n'
        '      <figcaption>Overview of the COSZO seafloor sites along the OOI Regional Cabled Array on the Cascadia margin off Oregon. Hover a marker to see the site name; click to open its page.</figcaption>\n'
        '    </figure>'
    )

SITES_BODY = page_hero(
    "Infrastructure", "Sites",
    "COSZO instruments are installed at sites along the OOI Regional Cabled Array spanning the Cascadia margin. Each site has its own geological setting, instrument complement, and science role.",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', "Sites"]
) + """
<section class="hub-section">
  <div class="container">
    <div class="hub-cards">
      <a href="oregon-shelf.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M6 30 H42 M6 36 H42" stroke="currentColor" stroke-width="2"/><path d="M10 30 L16 22 L24 26 L32 20 L40 30" stroke="#17a2ab" stroke-width="2" fill="none"/></svg>
        <h3>Oregon Shelf</h3>
        <p>Shallow continental-shelf benthic site offshore Oregon (~80 m), in a highly productive coastal upwelling zone.</p>
        <span class="card-link">View site &rarr;</span>
      </a>
      <a href="oregon-outer-shelf.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M6 30 H42 M6 36 H42" stroke="currentColor" stroke-width="2"/><path d="M10 30 L18 24 L26 27 L34 22 L42 26" stroke="#17a2ab" stroke-width="2" fill="none"/></svg>
        <h3>Oregon Outer Shelf</h3>
        <p>Cabled COSZO node on the outer continental shelf (~110 m), hosting a seafloor geophysical sensor suite (node PN1D).</p>
        <span class="card-link">View site &rarr;</span>
      </a>
      <a href="oregon-offshore.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M6 28 H42" stroke="currentColor" stroke-width="2"/><path d="M6 36 L18 30 L30 35 L42 27" stroke="#17a2ab" stroke-width="2" fill="none"/></svg>
        <h3>Oregon Offshore</h3>
        <p>Continental-slope benthic site off Oregon (~550 m), in the same dynamic coastal upwelling environment.</p>
        <span class="card-link">View site &rarr;</span>
      </a>
      <a href="oregon-mid-slope.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M6 34 L20 22 L30 28 L42 16" stroke="currentColor" stroke-width="2" fill="none"/><path d="M6 40 L20 30 L30 35 L42 26" stroke="#17a2ab" stroke-width="2" fill="none"/></svg>
        <h3>Oregon Mid Slope</h3>
        <p>Cabled COSZO node on the mid continental slope (~1,250 m), hosting a seafloor geophysical sensor suite (node PN1B).</p>
        <span class="card-link">View site &rarr;</span>
      </a>
      <a href="hydrate-ridge.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M6 36 L18 18 L26 28 L34 14 L42 36 Z" stroke="currentColor" stroke-width="2" fill="none"/></svg>
        <h3>Southern Hydrate Ridge</h3>
        <p>Accretionary wedge site near the deformation front. Methane hydrate system, shallow seismicity, and frontal thrust deformation.</p>
        <span class="card-link">View site &rarr;</span>
      </a>
      <a href="slope-base.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M6 36 L20 20 L28 30 L42 12" stroke="currentColor" stroke-width="2" fill="none"/></svg>
        <h3>Slope Base</h3>
        <p>Deep-water site at the base of the continental slope, providing reference seismic and pressure observations seaward of the locked zone.</p>
        <span class="card-link">View site &rarr;</span>
      </a>
    </div>
    __SITE_MAP__
  </div>
</section>

<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p>Additional sites along the cable spur lines will be documented here as the COSZO build-out progresses. The current Sites listing reflects the primary installation locations for the 2026 cruise.</p>
      </article>
    </div>
  </div>
</section>
"""
SITES_BODY = SITES_BODY.replace("__SITE_MAP__", render_site_map())

# ============================================================
# PER-SITE STUBS
# ============================================================
HYDRATE_RIDGE_BODY = page_hero(
    "Sites", "Southern Hydrate Ridge",
    "Methane-hydrate seafloor observatory on the Oregon continental slope, ~775 m deep (OOI Southern Hydrate Summit 1, RS01SUM1).",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', '<a href="sites.html">Sites</a>', "Southern Hydrate Ridge"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <h2>Overview</h2>
        <p class="lede-para">The Southern Hydrate Summit 1 Seafloor study site, situated on the continental slope off the coast of Oregon at a water depth of ~775 m, hosts abundant deposits of methane ice (methane hydrates) that are buried beneath, and sometimes exposed at the seafloor. The deposits vent methane-rich fluids and bubbles that escape through seeps on the ocean bottom. At Southern Hydrate Ridge plumes of bubbles rise several hundred meters above the seafloor. Dense and fascinating communities of microbes and animals with symbiotic microbes in their guts are fueled by these escaping gases. These seeps provide a unique opportunity to study ocean chemistry, quantifying chemical fluxes from the seafloor and the impacts of methane release on overlying seawater and biota.</p>
        <p>Methane is a powerful greenhouse gas and, therefore, quantifying the flux of methane from the seafloor into the hydrosphere is critical to understanding carbon-cycle dynamics and the impacts of global warming on methane release, particularly in the context of the hydrates response to seismic events.</p>
        <p>This Low-Power JBox (LJ01B) rests on the seafloor and contains geophysical and near seafloor water column instrumentation, and is attached to a fiber-optic cable. Instrumentation hosted on the JBox is largely geophysical in nature, hosting both short-period and broadband seismometers. The fiber-optic cable provides the JBox with significant power and 1 Gb communication bandwidth for two-way communication to instruments for their operation and transmission of data to shore. This JBox is also co-located with a Medium-Power JBox that collects a complementary suite of seafloor and water column measurements.</p>
        <figure class="welcome-figure"><img src="assets/sites/southern-hydrate-ridge.jpg" alt="Cabled infrastructure at the Southern Hydrate Ridge site" loading="lazy"><figcaption>Cabled infrastructure at the Southern Hydrate Ridge site on the Cascadia margin. Image: OOI Regional Cabled Array.</figcaption></figure>
        <figure class="welcome-figure"><img src="assets/sites/southern-hydrate-ridge1.png" alt="Bathymetric map of the Southern Hydrate Ridge site" loading="lazy"><figcaption>Location and bathymetry of the Southern Hydrate Ridge site on the Cascadia margin. Image: OOI Regional Cabled Array.</figcaption></figure>
        <p><strong>Location:</strong> 44.5691&deg;N, 125.1481&deg;W &middot; ~775 m water depth.</p>
      </article>
    </div>
  </div>
</section>
"""

SLOPE_BASE_BODY = page_hero(
    "Sites", "Slope Base",
    "Cabled seafloor site at the base of the Oregon continental slope, ~2,900 m deep (OOI Oregon Slope Base, RS01SLBS).",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', '<a href="sites.html">Sites</a>', "Slope Base"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <h2>Overview</h2>
        <p class="lede-para">The Oregon Slope Base Seafloor site is located adjacent to the continental slope off the coast of Oregon at a water depth of ~2,900 meters. The site contains a Medium-Power JBox (MJ01A) and a Low-Power JBox (LJ01A). Here, ocean water properties are profoundly impacted by the California Current, and perhaps internal waves. The coastal region of the Pacific Northwest is a classic wind-driven upwelling system where nutrient-rich deep waters rise to replace warmer surface waters. The result is a large increase in marine productivity that ranges from phytoplankton to fish to marine mammals. Near bottom fauna are periodically negatively impacted by the flow of deep waters with very low oxygen concentrations (hypoxia events), and upwelling of corrosive, acidified waters onto the continental shelf. This area is also just outboard of the Cascadia Subduction Zone, which experienced a &gt;9M earthquake January 26, 1700 and which is now characterized by episodic tremors (slow earthquakes).</p>
        <p>As with other JBoxes, these rest on the seafloor, contain geophysical and near seafloor water column instrumentation, and are attached to a fiber-optic cable. The fiber-optic cable provides the JBoxes with a significant power and 1 Gb communication bandwidth that provides two-way communication to instruments for their operation and transmission of data to shore. This seafloor site is also co-located with a Deep and Shallow Profiler Mooring, that collect complementary water column data.</p>
        <p>When coupled with other Cabled Array and Endurance Array installations off the central Oregon coast, the Slope Base infrastructure provides a wide variety of opportunities for observing seismic and coastal phenomena, including cross-shelf and along-shelf variability.</p>
        <figure class="welcome-figure"><img src="assets/sites/slope-base.jpg" alt="Cabled infrastructure at the Oregon Slope Base site" loading="lazy"><figcaption>Cabled infrastructure at the Oregon Slope Base site on the Cascadia margin. Image: OOI Regional Cabled Array.</figcaption></figure>
        <figure class="welcome-figure"><img src="assets/sites/slope-base1.jpg" alt="Cabled instrumentation at the Oregon Slope Base site (2,900 m)" loading="lazy"><figcaption>Cabled instrumentation at the Oregon Slope Base site (~2,900 m) on the Cascadia margin. Image: OOI Regional Cabled Array.</figcaption></figure>
        <p><strong>Location:</strong> 44.5153&deg;N, 125.3898&deg;W &middot; ~2,900 m water depth.</p>
      </article>
    </div>
  </div>
</section>
"""

AXIAL_SEAMOUNT_BODY = page_hero(
    "Sites", "Axial Seamount",
    "Active submarine volcano on the Juan de Fuca Ridge, host to the longest-running RCA geophysical observations.",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', '<a href="sites.html">Sites</a>', "Axial Seamount"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">Axial Seamount is an active submarine volcano with a well-documented inflation/deflation cycle and a dense RCA instrument suite. COSZO leverages and extends this existing infrastructure.</p>
        <p>Detailed instrument list, depth, location, and science role will be added here.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# ARCHIVES (mirror of coszo.org/story/list?category=Archived)
# ============================================================
ARCHIVES_BODY = page_hero(
    "Archives", "Archives",
    "Materials carried over from the legacy <a href=\"https://coszo.org/story/list?category=Archived\" target=\"_blank\" rel=\"noopener\">COSZO/Cascadia Offshore</a> project pages, including foundational reports, workshop documents, and the 2017 design workshop.",
    ['<a href="index.html">Home</a>', "Archives"]
) + """
<section class="hub-section">
  <div class="container">
    <div class="hub-cards cols-2">
      <a href="resources.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><rect x="8" y="6" width="32" height="36" rx="2" stroke="currentColor" stroke-width="2"/><path d="M14 16 H34 M14 22 H34 M14 28 H28" stroke="#17a2ab" stroke-width="2" stroke-linecap="round"/></svg>
        <h3>Resources</h3>
        <p>Workshop reports, National Research Council reports, and peer-reviewed papers underpinning the COSZO design.</p>
        <span class="card-link">Browse resources &rarr;</span>
      </a>
      <a href="white-paper.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M12 6 H30 L38 14 V42 H12 Z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M30 6 V14 H38" stroke="#17a2ab" stroke-width="2" fill="none"/><path d="M18 22 H32 M18 28 H32 M18 34 H26" stroke="currentColor" stroke-width="1.5"/></svg>
        <h3>White Paper</h3>
        <p>The 2019 University of Washington feasibility study for an offshore geophysical monitoring network on the Cascadia subduction zone.</p>
        <span class="card-link">View white paper &rarr;</span>
      </a>
      <a href="workshop-documents.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><rect x="6" y="10" width="28" height="32" rx="2" stroke="currentColor" stroke-width="2"/><rect x="14" y="6" width="28" height="32" rx="2" stroke="#17a2ab" stroke-width="2" fill="none"/></svg>
        <h3>Workshop Documents</h3>
        <p>Final report, abstracts, white papers, agenda, and reference materials from the 2017 Cascadia offshore monitoring workshop.</p>
        <span class="card-link">Browse documents &rarr;</span>
      </a>
      <a href="workshop.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="16" cy="18" r="5" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="18" r="5" stroke="currentColor" stroke-width="2"/><path d="M8 38 Q 16 28, 24 32 Q 32 28, 40 38" stroke="#17a2ab" stroke-width="2" fill="none"/></svg>
        <h3>Workshop</h3>
        <p>Offshore Geophysical Monitoring of Cascadia for Early Warning and Hazards Research &mdash; April 3–5, 2017, Seattle, WA.</p>
        <span class="card-link">Workshop overview &rarr;</span>
      </a>
    </div>
  </div>
</section>
"""

# ============================================================
# RESOURCES (archive mirror)
# ============================================================
RESOURCES_BODY = page_hero(
    "Archives", "Resources",
    "Workshop reports, National Research Council reports, and peer-reviewed papers underpinning the COSZO design.",
    ['<a href="index.html">Home</a>', '<a href="archives.html">Archives</a>', "Resources"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#workshops">Workshop Reports</a></li>
          <li><a href="#nrc">Other Reports</a></li>
          <li><a href="#papers">Relevant Papers</a></li>
          <li><a href="#posters">Posters</a></li>
        </ul>
      </aside>
      <article class="article-content">

        <h2 id="workshops">Workshop Reports</h2>
        <ul>
          <li>
            <strong>Seafloor Instrumentation Workshop</strong> &mdash; Gleneden Beach, OR, July 12–13, 2018.
            [<a href="https://ir.library.oregonstate.edu/downloads/6m311v741?locale=en" target="_blank" rel="noopener">Workshop Report</a>]
            [<a href="https://ctemps.org/announcement/seafloor-instrumentation-workshop-july-12-13-2018" target="_blank" rel="noopener">Workshop Website</a>]
          </li>
          <li>
            <strong>Offshore Geophysical Monitoring of Cascadia for Early Warning and Hazards Research</strong> &mdash; Seattle, WA, April 3–5, 2017.
            [<a href="assets/archives/workshop_report.pdf" target="_blank" rel="noopener">Workshop Report</a>]
            [<a href="workshop.html">Workshop Homepage</a>]
          </li>
          <li>
            <strong>Subduction Zone Observatory Workshop</strong> &mdash; Boise, ID, September 29 – October 1, 2016.
            [<a href="assets/archives/sz4d.pdf" target="_blank" rel="noopener">Workshop Report</a>]
          </li>
          <li>
            <strong>Investigating Cascadia Subduction Zone Geodynamics Through Scientific Ocean Drilling</strong> &mdash; Seattle, WA, April 2015.
            [<a href="assets/archives/cascadia_report.pdf" target="_blank" rel="noopener">Workshop Report</a>]
          </li>
          <li>
            <strong>Seafloor Geodesy in Cascadia</strong> &mdash; Seattle, WA, June 2012.
            [<a href="assets/archives/seafloor_geodesy_cascadia_report.pdf" target="_blank" rel="noopener">Workshop Report</a>]
          </li>
        </ul>

        <h2 id="nrc">Other Reports</h2>
        <ul>
          <li>
            National Research Council (2011). <em>Tsunami Warning and Preparedness: An Assessment of the U.S. Tsunami Program and the Nation's Preparedness Efforts.</em> Washington, DC: The National Academies Press. <a href="https://doi.org/10.17226/12628" target="_blank" rel="noopener">doi:10.17226/12628</a>
            [<a href="https://www.nap.edu/catalog/12628/tsunami-warning-and-preparedness-an-assessment-of-the-us-tsunami" target="_blank" rel="noopener">Report</a>]
          </li>
          <li>
            National Research Council (2011). <em>National Earthquake Resilience: Research, Implementation, and Outreach.</em> Washington, DC: The National Academies Press. <a href="https://doi.org/10.17226/13092" target="_blank" rel="noopener">doi:10.17226/13092</a>
            [<a href="https://www.nap.edu/catalog/13092/national-earthquake-resilience-research-implementation-and-outreach" target="_blank" rel="noopener">Report</a>]
          </li>
          <li>
            National Research Council (2006). <em>Improved Seismic Monitoring – Improved Decision-Making: Assessing the Value of Reduced Uncertainty.</em> Washington, DC: The National Academies Press. <a href="https://doi.org/10.17226/11327" target="_blank" rel="noopener">doi:10.17226/11327</a>
            [<a href="https://www.nap.edu/catalog/11327/improved-seismic-monitoring-improved-decision-making-assessing-the-value-of" target="_blank" rel="noopener">Report</a>]
          </li>
        </ul>

        <h2 id="papers">Relevant Papers</h2>
        <ul>
          <li>
            Crowell, B. W., D. A. Schmidt, P. Bodin, J. E. Vidale, B. Baker, S. Barrientos, and J. Geng (2018).
            G-FAST earthquake early warning potential for great earthquakes in Chile.
            <em>Seismological Research Letters</em>, 89(2A), 542–556.
            <a href="https://doi.org/10.1785/0220170180" target="_blank" rel="noopener">doi:10.1785/0220170180</a>
            [<a href="https://pubs.geoscienceworld.org/ssa/srl/article/89/2A/542/527310/g-fast-earthquake-early-warning-potential-for" target="_blank" rel="noopener">Abstract</a>]
          </li>
          <li>
            Gomberg, J. S., et al. (2017).
            Reducing risk where tectonic plates collide—U.S. Geological Survey subduction zone science plan.
            <em>U.S. Geological Survey Circular</em> 1428, 45 pp.
            <a href="https://doi.org/10.3133/cir1428" target="_blank" rel="noopener">doi:10.3133/cir1428</a>
            [<a href="https://pubs.er.usgs.gov/publication/cir1428" target="_blank" rel="noopener">Link</a>]
          </li>
          <li>
            Hotovec-Ellis, A. J., et al. (2017).
            Improving the Hawaiian Seismic Network for Earthquake Early Warning.
            <em>Seismological Research Letters</em>, 88(2A).
            <a href="https://doi.org/10.1785/0220160187" target="_blank" rel="noopener">doi:10.1785/0220160187</a>
          </li>
          <li>
            Wilcock, W., D. A. Schmidt, J. E. Vidale, M. J. Harrington, P. Bodin, G. S. Cram, J. R. Delaney, F. I. Gonzalez, D. S. Kelley, R. J. LeVeque, D. A. Manalang, C. McGuire, E. C. Roland, M. W. Stoermer, J. W. Tilley, and C. J. Vogl (2016).
            Designing an offshore geophysical network in the Pacific Northwest for earthquake and tsunami early warning.
            <em>OCEANS 2016 MTS/IEEE Monterey</em>, 1–8.
            <a href="https://doi.org/10.1109/OCEANS.2016.7761291" target="_blank" rel="noopener">doi:10.1109/OCEANS.2016.7761291</a>
            [<a href="https://ieeexplore.ieee.org/document/7761291/" target="_blank" rel="noopener">Abstract</a>]
          </li>
          <li>
            Hartog, J. R., et al. (2016).
            Earthquake Early Warning: ShakeAlert in the Pacific Northwest.
            <em>Bulletin of the Seismological Society of America</em>, 106(4).
            <a href="https://doi.org/10.1785/0120150261" target="_blank" rel="noopener">doi:10.1785/0120150261</a>
            [<a href="https://pubs.geoscienceworld.org/ssa/bssa/article/106/4/1875/350883/earthquake-early-warning-shakealert-in-the-pacific" target="_blank" rel="noopener">Abstract</a>]
          </li>
          <li>
            Crowell, B. W., et al. (2016).
            Demonstration of the Cascadia G-FAST Geodetic Earthquake Early Warning System for the Nisqually, Washington, Earthquake.
            <em>Seismological Research Letters</em>, 87(4).
            <a href="https://doi.org/10.1785/0220150255" target="_blank" rel="noopener">doi:10.1785/0220150255</a>
            [<a href="https://pubs.geoscienceworld.org/ssa/srl/article/87/4/930/314131/" target="_blank" rel="noopener">Abstract</a>]
          </li>
        </ul>

        <h2 id="posters">Posters</h2>
        <p style="color:#5b6573;">No posters were attached to this resource list in the legacy archive.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# WHITE PAPER (archive mirror)
# ============================================================
WHITE_PAPER_BODY = page_hero(
    "Archives", "White Paper",
    "Earthquake and Tsunami Early Warning on the Cascadia Subduction Zone: A Feasibility Study for an Offshore Geophysical Monitoring Network (2019).",
    ['<a href="index.html">Home</a>', '<a href="archives.html">Archives</a>', "White Paper"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">In 2019 a University of Washington team produced an 81-page white paper laying out the science case, engineering options, and implementation plan for a permanent offshore geophysical monitoring network on the Cascadia subduction zone. The COSZO project that followed is a direct outgrowth of that study.</p>

        <h2>Citation</h2>
        <p>
          Schmidt, D., W. Wilcock, R. LeVeque, F. Gonzales, G. Cram, D. Manalang, M. Harrington, E. Roland, and P. Bodin (2019).
          <em>Earthquake and Tsunami Early Warning on the Cascadia Subduction Zone: A Feasibility Study for an Offshore Geophysical Monitoring Network.</em>
          University of Washington, Seattle, 81 pp.
          [<a href="http://hdl.handle.net/1773/50968" target="_blank" rel="noopener">UW handle</a>]
        </p>

        <h2>Download</h2>
        <ul>
          <li><a href="assets/archives/whitepaper_lowres.pdf" target="_blank" rel="noopener">White Paper, low-resolution PDF (8 MB)</a></li>
          <li><a href="assets/archives/whitepaper_highres.pdf" target="_blank" rel="noopener">White Paper, high-resolution PDF (45 MB)</a></li>
        </ul>

        <h2>Supplementary Documents</h2>
        <ul>
          <li><a href="assets/archives/tradestudy.pdf" target="_blank" rel="noopener">Engineering Trade Study, PDF (1.5 MB)</a></li>
          <li><a href="assets/archives/desktop_survey.pdf" target="_blank" rel="noopener">Desktop Survey, PDF (28 MB)</a></li>
        </ul>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# WORKSHOP DOCUMENTS (archive mirror)
# ============================================================
WORKSHOP_DOCUMENTS_BODY = page_hero(
    "Archives", "Workshop Documents",
    "Final report, abstracts, white papers, and reference materials from the 2017 Cascadia offshore monitoring workshop.",
    ['<a href="index.html">Home</a>', '<a href="archives.html">Archives</a>', "Workshop Documents"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#main">Main Documents</a></li>
          <li><a href="#reference">Reference Materials</a></li>
          <li><a href="#templates">Network Design Templates</a></li>
        </ul>
      </aside>
      <article class="article-content">

        <h2 id="main">Main Documents</h2>
        <ul>
          <li><strong>Final Workshop Report</strong> &mdash; July 10, 2018. [<a href="assets/archives/workshop_report.pdf" target="_blank" rel="noopener">PDF, 13 MB</a>]</li>
          <li><strong>Abstracts</strong> &mdash; April 3, 2017. [<a href="assets/archives/master_abstract.pdf" target="_blank" rel="noopener">PDF, 33 MB</a>]</li>
          <li><strong>Whitepapers</strong> &mdash; Participant submissions, April 3, 2017. [<a href="assets/archives/master_whitepaper.pdf" target="_blank" rel="noopener">PDF, 13 MB</a>]</li>
          <li><strong>Workshop Agenda</strong> &mdash; [<a href="https://web.archive.org/web/2018id_/http://cascadia.washington.edu/story/Agenda" target="_blank" rel="noopener">Online</a>]</li>
          <li><strong>Attendee List</strong> &mdash; [<a href="https://web.archive.org/web/2018id_/http://cascadia.washington.edu/story/Registrants" target="_blank" rel="noopener">Online</a>]</li>
        </ul>

        <h2 id="reference">Reference Materials</h2>
        <ul>
          <li><strong>Comparison Table of Technologies</strong> &mdash; April 3, 2017. [<a href="assets/archives/technology_alternatives_comparison.pdf" target="_blank" rel="noopener">PDF</a>]</li>
          <li><strong>BW Basemap of Cascadia Margin</strong> &mdash; April 1, 2017. [<a href="assets/archives/bw_basemap_11x17.pdf" target="_blank" rel="noopener">PDF, 13 MB</a>]</li>
          <li><strong>UW Campus Map</strong> &mdash; [<a href="assets/archives/uw_campus_map.pdf" target="_blank" rel="noopener">PDF</a>]</li>
        </ul>

        <h2 id="templates">Network Design Templates</h2>
        <ul>
          <li><a href="assets/archives/ewoc_configuration_template.pptx" target="_blank" rel="noopener">PowerPoint Template (11 MB)</a></li>
          <li><a href="assets/archives/ewoc_network_configuration_tool.key" target="_blank" rel="noopener">Keynote Template (8 MB)</a></li>
          <li><a href="assets/archives/ewoc_configuration_template.doc" target="_blank" rel="noopener">Word Template (21 MB)</a></li>
        </ul>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# WORKSHOP (archive mirror)
# ============================================================
WORKSHOP_BODY = page_hero(
    "Archives", "Workshop",
    "Offshore Geophysical Monitoring of Cascadia for Early Warning and Hazards Research &mdash; April 3–5, 2017, Seattle, WA.",
    ['<a href="index.html">Home</a>', '<a href="archives.html">Archives</a>', "Workshop"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#details">Workshop Details</a></li>
          <li><a href="#goals">Goals &amp; Agenda</a></li>
          <li><a href="#participation">Participation &amp; Support</a></li>
          <li><a href="#docs">Documentation</a></li>
        </ul>
      </aside>
      <article class="article-content">
        <p class="lede-para">A 3-day community workshop in April 2017 that scoped the scientific motivation, geophysical requirements, and engineering options for an offshore geophysical monitoring network on the Cascadia subduction zone. The workshop laid the groundwork for the 2019 white paper and the COSZO project that followed.</p>

        <h2 id="details">Workshop Details</h2>
        <ul>
          <li><strong>Title:</strong> Offshore Geophysical Monitoring of Cascadia for Early Warning and Hazards Research</li>
          <li><strong>Dates:</strong> Monday, April 3 – Wednesday, April 5, 2017</li>
          <li><strong>Location:</strong> NorthWest Horticultural Society Hall, Center for Urban Horticulture, University of Washington, Seattle</li>
          <li><strong>Organizers:</strong> David Schmidt and William Wilcock <a href="mailto:ewoc@uw.edu">(ewoc@uw.edu)</a></li>
          <li><strong>Funding:</strong> Gordon and Betty Moore Foundation</li>
        </ul>

        <h2 id="goals">Goals &amp; Agenda</h2>
        <p>The meeting addressed scientific and societal motivation for an offshore geophysical network, evaluated geophysical requirements, examined alternative engineering approaches, and explored stakeholder engagement strategies. Plenary talks covered:</p>
        <ul>
          <li>Scientific motivation for offshore observations</li>
          <li>Lessons from existing seafloor systems</li>
          <li>Early warning logistical requirements</li>
          <li>Engineering considerations for power and telemetry</li>
          <li>Existing and emerging seafloor technologies</li>
          <li>Design option tradeoffs</li>
        </ul>
        <p>Small-group breakouts and synthesis sessions ran into the afternoon of each day.</p>

        <h2 id="participation">Participation &amp; Support</h2>
        <ul>
          <li>Capacity: up to 120 participants</li>
          <li>No registration fee; select meals provided</li>
          <li>Limited travel and lodging support, with preference to early-career scientists and invited speakers</li>
          <li>Abstracts and white papers (one page, single-spaced) were due March 26, 2017</li>
        </ul>

        <h2 id="docs">Documentation</h2>
        <p>The full set of meeting outputs is mirrored on the <a href="workshop-documents.html">Workshop Documents</a> page, including the final report, abstracts volume, participant whitepapers, agenda, attendee list, technology comparison table, basemaps, and network-design templates.</p>

        <p style="margin-top:1.5rem; color:#5b6573; font-size:0.9rem;">Contact: <a href="mailto:ewoc@uw.edu">ewoc@uw.edu</a></p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# DATA PRODUCTS (hub)
# ============================================================

DATA_PRODUCT_CARDS = [
    ("broadband-seismometer.html", "Broadband Seismometer &amp; Strong Motion", "Three-component broadband ground velocity together with high-dynamic-range strong-motion acceleration.", "Motion &middot; Seismometer"),
    ("differential-pressure-gauge.html", "Differential Pressure Gauge", "Short-period seafloor pressure variations capturing tsunami signals and hydroacoustic waves.", "Pressure &middot; Differential"),
    ("hydrophone.html", "Hydrophone", "Hydrophone data in the infrasound band for T-phase and hydroacoustic monitoring.", "Acoustic &middot; Hydrophone"),
    ("absolute-seafloor-pressure.html", "Absolute Pressure Gauge", "Total pressure at the seafloor for tsunami detection and seafloor deformation monitoring.", "Pressure &middot; Absolute"),
    ("gssm.html", "GSSM &mdash; Calibrated Pressure &amp; Acceleration", "Combined calibrated pressure and strong-motion records from geodetic seafloor stations.", "Composite &middot; Calibrated"),
    ("cscpr.html", "CSCPR &mdash; Calibrated Pressure", "Cabled self-calibrating pressure recorder data corrected for instrument drift.", "Pressure &middot; Drift-corrected"),
    ("current-meter.html", "Current Meter", "Current meter and ADCP measurements of sea-water velocity through the water column.", "Water &middot; Current meter"),
]

def render_product_cards():
    html = ""
    for href, title, desc, meta in DATA_PRODUCT_CARDS:
        html += f"""
      <a href="{href}" class="product-card">
        <svg class="product-icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="2"/><circle cx="20" cy="20" r="5" fill="#17a2ab"/></svg>
        <h3 class="product-title">{title}</h3>
        <p class="product-desc">{desc}</p>
        <div class="product-meta">{meta}</div>
      </a>"""
    return html

DATAPRODUCTS_BODY = page_hero(
    "Data", "Data",
    "Seven continuous data streams from the COSZO and RCA sensor suite, covering ground motion, pressure, acoustic, and water-velocity measurements. All data are openly available.",
    ['<a href="index.html">Home</a>', "Data"]
) + f"""
<section class="data-products">
  <div class="container">
    <div class="section-header">
      <div class="section-header-intro">
        <div class="section-eyebrow">All Products</div>
        <h2 class="section-heading">The full data catalog.</h2>
        <p>Each data product is served as a continuous real-time stream and as archived records, accessible through the OOI data portal.</p>
      </div>
    </div>
    <div class="products-grid">{render_product_cards()}</div>
  </div>
</section>
"""

# ------------------------------------------------------------
# Data-product detail pages, generated from data/data_channels.csv.
# Edit that spreadsheet (columns: page,title,site,station,location,data_type,
# channels) and rebuild to change these pages. One page per unique `page` slug;
# each row becomes a Stations-table entry. Prose lives in DATA_PAGE_META below.
# ------------------------------------------------------------
DATA_PAGE_META = {
    "broadband-seismometer": {
        "lede": "Three-component broadband ground velocity together with high-dynamic-range strong-motion acceleration.",
        "overview": "The cabled ocean-bottom seismometer (COBSO) records three-component broadband ground velocity together with co-located strong-motion acceleration at each COSZO seafloor site. Each measurement is streamed at several sample rates, supporting both high-frequency earthquake detection and long-period analysis.",
    },
    "differential-pressure-gauge": {
        "lede": "Short-period seafloor pressure variations capturing tsunami signals and hydroacoustic waves.",
        "overview": "A differential pressure gauge on the cabled ocean-bottom seismometer measures short-period seafloor pressure variations, capturing tsunami signals and hydroacoustic waves. Data are streamed at several sample rates.",
    },
    "hydrophone": {
        "lede": "Low-frequency hydrophone data for T-phase and hydroacoustic monitoring.",
        "overview": "A low-frequency hydrophone on the cabled ocean-bottom seismometer records acoustic pressure for T-phase and hydroacoustic monitoring, from a broadband stream down to decimated long-period channels.",
    },
    "gssm": {
        "lede": "Calibrated seafloor pressure and strong-motion acceleration from the geodetic seafloor sensor module.",
        "overview": "The Geodetic Seafloor Sensor Module (GSSM) provides calibrated seafloor pressure from dual gauges together with strong-motion acceleration, each with a co-located sensor temperature, at each COSZO site.",
    },
    "cscpr": {
        "lede": "Drift-corrected absolute seafloor pressure from a cabled self-calibrating pressure recorder.",
        "overview": "The Cabled Self-Calibrating Pressure Recorder (CSCPR) provides drift-corrected absolute seafloor pressure from dual calibrated gauges, supporting long-term seafloor geodesy.",
    },
    "current-meter": {
        "lede": "Three-component sea-water velocity with acoustic amplitude and correlation, pressure, and temperature.",
        "overview": "The cabled current meter (Nortek Vector) measures three-component sea-water velocity along with per-beam acoustic amplitude and correlation, seafloor pressure, and water temperature at each COSZO site.",
    },
}

def load_data_channels(csv_path):
    """Read data/data_channels.csv into {slug: {title, rows:[(site,station,loc,data_type,channels)]}}."""
    pages = {}
    try:
        with open(csv_path, newline="", encoding="utf-8") as f:
            for row in csv.DictReader(f):
                slug = (row.get("page") or "").strip()
                if not slug:
                    continue
                p = pages.setdefault(slug, {"title": "", "rows": []})
                if not p["title"]:
                    p["title"] = (row.get("title") or "").strip()
                p["rows"].append((
                    (row.get("site") or "").strip(),
                    (row.get("station") or "").strip(),
                    (row.get("location") or "").strip(),
                    (row.get("data_type") or "").strip(),
                    (row.get("channels") or "").strip(),
                ))
    except FileNotFoundError:
        pass
    return pages

def data_page_body(slug, info):
    """Render one data-product detail page in the Absolute Seafloor Pressure format."""
    title = info["title"].replace("&", "&amp;")
    meta = DATA_PAGE_META.get(slug, {})
    rows_html = ""
    for site, stn, loc, dt, ch in info["rows"]:
        locdisp = "&mdash;" if loc in ("--", "") else loc
        station = f"OO.{stn}" if stn else ""
        rows_html += (f'\n            <tr><td>{site}</td><td><code>{station}</code></td>'
                      f'<td><code>{locdisp}</code></td><td>{dt}</td><td>{ch}</td></tr>')
    return page_hero(
        "Data", title, meta.get("lede", ""),
        ['<a href="index.html">Home</a>', '<a href="data.html">Data</a>', title]
    ) + f"""
<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#overview" class="active">Overview</a></li>
          <li><a href="#stations">Stations</a></li>
          <li><a href="#access">Data Access</a></li>
        </ul>
      </aside>
      <article class="article-content">
        <h2 id="overview">Overview</h2>
        <p class="lede-para">{meta.get("overview", "")}</p>

        <h2 id="stations">Stations</h2>
        <p>The table below lists the station, location code, and channels for the data.</p>
        <table class="specs-table">
          <thead>
            <tr><th>Site</th><th>Station</th><th>Location</th><th>Data type</th><th>Channel</th></tr>
          </thead>
          <tbody>{rows_html}
          </tbody>
        </table>
        <p class="instr-site">These data streams will be available once COSZO comes online.</p>

        <h2 id="access">Data Access</h2>
        <p>COSZO data is available through EarthScope.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# ABSOLUTE SEAFLOOR PRESSURE (example product detail page)
# ============================================================
ASP_BODY = page_hero(
    "Data", "Absolute Seafloor Pressure",
    "High-precision total pressure measured at the seafloor. Used for tsunami detection, long-period seafloor deformation monitoring, and as a reference for relative pressure products.",
    ['<a href="index.html">Home</a>', '<a href="data.html">Data</a>', "Absolute Seafloor Pressure"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#overview" class="active">Overview</a></li>
          <li><a href="#stations">Stations</a></li>
          <li><a href="#additional">Additional Data</a></li>
          <li><a href="#access">Data Access</a></li>
        </ul>
      </aside>
      <article class="article-content">
        <h2 id="overview">Overview</h2>
        <p>Pressure incorporates tidal pressure gauges sampling at rates varying from 0.0667 Hz to 1.0 Hz. Each instrument also carries a housing temperature channel.</p>

        <h2 id="stations">Stations</h2>
        <p>The table below lists the station, location code, and channels for the data.</p>
        <table class="specs-table">
          <thead>
            <tr><th>Site</th><th>Station</th><th>Location</th><th>Data type</th><th>Channel</th></tr>
          </thead>
          <tbody>
            <tr><td>Slope Base</td><td><code>OO.HYSB1</code></td><td><code>10</code></td><td>Absolute pressure</td><td><a href="https://ds.iris.edu/mda/OO/HYSB1/10/UDO/" target="_blank" rel="noopener">UDO</a> (0.0667 Hz), <a href="https://ds.iris.edu/mda/OO/HYSB1/10/LDO/" target="_blank" rel="noopener">LDO</a> (1.0 Hz)</td></tr>
            <tr><td>Slope Base</td><td><code>OO.HYSB1</code></td><td><code>10</code></td><td>Housing temperature</td><td><a href="https://ds.iris.edu/mda/OO/HYSB1/10/UK1/" target="_blank" rel="noopener">UK1</a> (0.0667 Hz), <a href="https://ds.iris.edu/mda/OO/HYSB1/10/LK1/" target="_blank" rel="noopener">LK1</a> (1.0 Hz)</td></tr>
            <tr><td>Southern Hydrate Ridge</td><td><code>OO.HYS14</code></td><td><code>10</code></td><td>Absolute pressure</td><td><a href="https://ds.iris.edu/mda/OO/HYS14/10/UDO/" target="_blank" rel="noopener">UDO</a> (0.0667 Hz), <a href="https://ds.iris.edu/mda/OO/HYS14/10/LDO/" target="_blank" rel="noopener">LDO</a> (1.0 Hz)</td></tr>
            <tr><td>Southern Hydrate Ridge</td><td><code>OO.HYS14</code></td><td><code>10</code></td><td>Housing temperature</td><td><a href="https://ds.iris.edu/mda/OO/HYS14/10/UK1/" target="_blank" rel="noopener">UK1</a> (0.0667 Hz), <a href="https://ds.iris.edu/mda/OO/HYS14/10/LK1/" target="_blank" rel="noopener">LK1</a> (1.0 Hz)</td></tr>
          </tbody>
        </table>
        <p class="instr-site">Entries without a link under Channel are data that will be available once COSZO comes online.</p>

        <h2 id="additional">Additional Data</h2>
        <p>Absolute pressure data from Axial Base, served through the same OOI infrastructure.</p>
        <table class="specs-table">
          <thead>
            <tr><th>Site</th><th>Station</th><th>Location</th><th>Data type</th><th>Channel</th></tr>
          </thead>
          <tbody>
            <tr><td>Axial Base</td><td><code>OO.AXBA1</code></td><td><code>10</code></td><td>Absolute pressure</td><td><a href="https://ds.iris.edu/mda/OO/AXBA1/10/UDO/" target="_blank" rel="noopener">UDO</a> (0.0667 Hz)</td></tr>
            <tr><td>Axial Base</td><td><code>OO.AXBA1</code></td><td><code>10</code></td><td>Housing temperature</td><td><a href="https://ds.iris.edu/mda/OO/AXBA1/10/UK1/" target="_blank" rel="noopener">UK1</a> (0.0667 Hz)</td></tr>
          </tbody>
        </table>

        <h2 id="access">Data Access</h2>
        <p>More station information, data quality status, and deployments are available through the GitHub webpage: <a href="https://github.com/coszo-hub/absolute-seafloor-pressure" target="_blank" rel="noopener">github.com/coszo-hub/absolute-seafloor-pressure</a>.</p>
        <p>Scripts for detiding and drift-correcting the data are available through the COSZO GitHub.</p>

        <blockquote>Raw pressure data are released within 24 hours of acquisition.</blockquote>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# PEOPLE (hub)
# ============================================================
# People are data-driven from data/people.csv, which a GitHub Action keeps in
# sync with a published Google Sheet (see .github/workflows/sync-people.yml).
# CSV columns: name, role, group, affiliation, photo, link, order
#   group  -> selects the section (see PEOPLE_GROUPS; matched case-insensitively)
#   photo  -> a filename in assets/people/ OR a full http(s) URL; blank = avatar
#   link   -> optional profile URL; blank = non-clickable card
#   order  -> retained for reference only; each section is sorted alphabetically by name
PEOPLE_GROUPS = [
    ("uw",         "University of Washington Team"),
    ("scripps",    "Scripps Institution of Oceanography Team"),
    ("committee",  "Science Advisory Committee"),
]
# Legacy/leadership group names all fold into the UW team so the build stays
# robust if the synced sheet still uses the old vocabulary.
_GROUP_ALIASES = {
    "leadership": "uw", "lead": "uw", "pi": "uw",
    "principal investigator": "uw", "principal investigators": "uw",
    "co-pi": "uw", "co-investigator": "uw", "faculty": "uw",
    "investigators": "uw", "uw investigators": "uw",
    "uw": "uw", "university of washington team": "uw", "uw team": "uw",
    "research": "uw", "research team": "uw", "team": "uw",
    "scientist": "uw", "engineer": "uw", "staff": "uw", "apl": "uw",
    "postdocs": "uw", "postdoc": "uw", "postdoctoral": "uw",
    "postdoctoral scholar": "uw", "postdoctoral scholars": "uw", "scholars": "uw",
    "graduate": "uw", "grad": "uw", "graduate student": "uw",
    "graduate students": "uw", "students": "uw", "student": "uw",
    "scripps": "scripps", "scripps institution of oceanography team": "scripps",
    "scripps team": "scripps", "sio": "scripps",
    "committee": "committee", "science advisory committee": "committee",
    "sac": "committee", "advisory": "committee", "advisory committee": "committee",
}
_AVATAR_COLORS = ["#1e7cab", "#06223a", "#f5a623", "#17a2ab", "#155e8a", "#3cbfc5"]


def _people_order(row):
    try:
        return int(str(row.get("order", "")).strip())
    except (TypeError, ValueError):
        return 1_000_000


def load_people(csv_path):
    """Read people.csv into {group_key: [rows]}, each section sorted alphabetically by name (first name)."""
    groups = {key: [] for key, _ in PEOPLE_GROUPS}
    try:
        with open(csv_path, newline="", encoding="utf-8") as f:
            for row in csv.DictReader(f):
                if not (row.get("name") or "").strip():
                    continue
                g = (row.get("group") or "").strip().lower()
                groups[_GROUP_ALIASES.get(g, "uw")].append(row)
    except FileNotFoundError:
        pass
    for key in groups:
        groups[key].sort(key=lambda r: (r.get("name") or "").strip().lower())
    return groups


def _person_portrait(photo, name, idx):
    if photo:
        src = photo if photo.startswith("http") else f"assets/people/{photo}"
        return f'<div class="person-portrait"><img src="{src}" alt="{name}" loading="lazy"></div>'
    color = _AVATAR_COLORS[idx % len(_AVATAR_COLORS)]
    return (f'<div class="person-portrait"><svg viewBox="0 0 300 300">'
            f'<rect width="300" height="300" fill="#0a2f4e"/>'
            f'<circle cx="150" cy="110" r="50" fill="{color}"/>'
            f'<path d="M60 300 Q 80 200, 150 200 Q 220 200, 240 300 Z" fill="{color}"/></svg></div>')


def render_people():
    groups = load_people(os.path.join(OUT_DIR, "data", "people.csv"))
    if sum(len(v) for v in groups.values()) == 0:
        return ('<section class="people-feature">\n  <div class="container">\n'
                '    <p class="lede-para">Our team listing is coming soon.</p>\n'
                '  </div>\n</section>\n')
    idx = 0
    html = '<section class="people-feature">\n  <div class="container">'
    for key, title in PEOPLE_GROUPS:
        rows = groups.get(key, [])
        if not rows:
            continue
        html += (f'\n    <div class="people-section">'
                 f'\n      <h3 class="people-section-title">{title}</h3>'
                 f'\n      <div class="people-grid">')
        for row in rows:
            name = (row.get("name") or "").strip()
            role = (row.get("role") or "").strip()
            aff = (row.get("affiliation") or "").strip()
            link = (row.get("link") or "").strip()
            photo = (row.get("photo") or "").strip()
            open_tag = (f'<a href="{link}" class="person-card" target="_blank" rel="noopener">'
                        if link else '<div class="person-card">')
            close_tag = "</a>" if link else "</div>"
            html += (f'\n        {open_tag}'
                     f'\n          {_person_portrait(photo, name, idx)}'
                     f'\n          <div class="person-name">{name}</div>'
                     f'\n          <div class="person-role">{role}</div>'
                     f'\n          <div class="person-affiliation">{aff}</div>'
                     f'\n        {close_tag}')
            idx += 1
        html += '\n      </div>\n    </div>'
    html += '\n  </div>\n</section>\n'
    return html


PEOPLE_BODY = page_hero(
    "About", "People",
    "The scientists, engineers, students, and collaborators working together to build the Cascadia Offshore Subduction Zone Observatory.",
    ['<a href="index.html">Home</a>', '<a href="about.html">About</a>', "People"]
) + render_people()

# ============================================================
# OUTREACH (hub)
# ============================================================
OUTREACH_BODY = page_hero(
    "Outreach", "Outreach",
    "COSZO's community engagement programs: undergraduate research experiences, graduate training, workshops, and partnerships with other observatories and networks.",
    ['<a href="index.html">Home</a>', "Outreach"]
) + """
<section class="hub-section">
  <div class="container">
    <div class="hub-cards">
      <a href="research-experiences-for-undergraduates.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M8 18 L24 10 L40 18 L24 26 Z" stroke="currentColor" stroke-width="2" fill="none"/><path d="M16 22 V32 Q 24 38, 32 32 V22" stroke="#17a2ab" stroke-width="2" fill="none"/></svg>
        <h3>Research Experiences for Undergraduates</h3>
        <p>Paid summer research placements for undergraduates interested in marine geophysics, seismology, and instrumentation engineering.</p>
        <span class="card-link">REU details</span>
      </a>
      <a href="early-career-workshop.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="24" r="4" fill="#f5a623"/><circle cx="24" cy="24" r="10" fill="none" stroke="#f5a623" opacity="0.6"/></svg>
        <h3>2027 Early Career Workshop</h3>
        <p>A multi-day workshop bringing together early-career scientists working on subduction zone science and seafloor observation.</p>
        <span class="card-link">Workshop info</span>
      </a>
    </div>
  </div>
</section>
"""

# ============================================================
# REU PAGE
# ============================================================
REU_BODY = page_hero(
    "Outreach", "Research Experiences for Undergraduates",
    "Paid summer research placements for U.S. undergraduates in marine geophysics, seismology, instrumentation, and ocean observation science.",
    ['<a href="index.html">Home</a>', '<a href="outreach.html">Outreach</a>', "Research Experiences for Undergraduates"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">Each year of the project, COSZO hosts interns through its Research Experience for Undergraduates (REU) Program. Students participate through the UW Applied Physics Laboratory Summer Undergraduate Research Program and join the annual UW School of Oceanography VISIONS Expedition.</p>

        <h2>2025 Program</h2>
        <figure class="welcome-figure"><img src="assets/reu/2025-cohort.jpg" alt="COSZO 2025 REU undergraduates aboard a boat" loading="lazy"><figcaption>COSZO 2025 REU interns in the field.</figcaption></figure>
        <table class="specs-table">
          <thead><tr><th>Student</th><th>Project</th><th>Mentor(s)</th></tr></thead>
          <tbody>
            <tr><td>Liv Dentoni</td><td>Laboratory Evaluations of an A-0-A Calibrated Pressure Instrument for the Cascadia Offshore Subduction Zone Observatory</td><td>William Wilcock, Dana Manalang</td></tr>
            <tr><td>Lydia Kelley</td><td>Investigating Occurrences of Tectonic Tremor using Ocean Bottom Seismometers</td><td>Marine Denolle</td></tr>
            <tr><td>Nik Patel</td><td>The Soundscape at the Washington Coast</td><td>Barry Ma</td></tr>
          </tbody>
        </table>

        <h2>2024 Program</h2>
        <figure class="welcome-figure"><img src="assets/reu/2024-cohort.jpg" alt="COSZO 2024 REU participants aboard a ship" loading="lazy"><figcaption>COSZO 2024 REU interns aboard ship.</figcaption></figure>
        <table class="specs-table">
          <thead><tr><th>Student</th><th>Project</th><th>Mentor(s)</th></tr></thead>
          <tbody>
            <tr><td>Elena S. Calderón-Aceituno</td><td>Investigation of Tectonic Shifts Using Seafloor Pressure Data</td><td>David A. Schmidt</td></tr>
            <tr><td>Chloe Buford</td><td>Hidden Hiccups: Understanding Bad Calibrations in a Self-Calibrating A-0-A Pressure Gauge</td><td>William Wilcock, Dana Manalang</td></tr>
            <tr><td>Usman Choudhary</td><td>Under Pressure: Tracking Volcanic Movements at Axial Seamount</td><td>William Wilcock, Maleen Wijeratna</td></tr>
            <tr><td>Jose Cornejo</td><td>Analyzing the Influence of Chemosynthetic and Photosynthetic Productivity on Benthic Megafauna Abundance at Southern Hydrate Ridge</td><td>Deborah Kelley, Katie Bigham</td></tr>
          </tbody>
        </table>

        <h2>Questions</h2>
        <p>For questions about the REU program, please <a href="contact.html">contact the COSZO team</a>.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# EARLY CAREER WORKSHOP
# ============================================================
WORKSHOP_BODY = page_hero(
    "Outreach", "2027 Early Career Workshop",
    "A three-day workshop convening early-career scientists working on subduction zones, seafloor observation, and earthquake early warning.",
    ['<a href="index.html">Home</a>', '<a href="outreach.html">Outreach</a>', "2027 Early Career Workshop"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">The 2027 COSZO Early Career Workshop will bring together graduate students, postdocs, and early-career faculty for three days of talks, poster sessions, and working groups at the University of Washington.</p>

        <h2>When &amp; where</h2>
        <p><strong>Dates:</strong> TBD<br>
        <strong>Location:</strong> University of Washington, Seattle<br>
        <strong>Format:</strong> In-person with limited remote participation</p>

        <h2>Who should attend</h2>
        <p>We welcome applicants working on any of the following:</p>
        <ul>
          <li>Subduction zone mechanics and seismicity</li>
          <li>Seafloor geodesy and ambient-noise monitoring</li>
          <li>Tsunami generation and propagation</li>
          <li>Earthquake early warning and rapid response</li>
          <li>Instrumentation and cyberinfrastructure for marine geophysics</li>
        </ul>

        <h2>Registration</h2>
        <p>Coming soon.</p>

        <h2>Questions</h2>
        <p>For questions about the workshop, please <a href="contact.html">reach out to the organizing committee</a>.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# MEETINGS
# ============================================================
MEETINGS_BODY = page_hero(
    "Outreach", "Meetings",
    "Science team meetings, community town halls, and conference sessions organized or co-sponsored by COSZO.",
    ['<a href="index.html">Home</a>', '<a href="outreach.html">Outreach</a>', "Meetings"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <h2>Upcoming</h2>
        <div class="event-list">
          <div class="event-list-item">
            <div class="event-list-date"><span class="big">May 14</span><span class="small">2026</span></div>
            <div class="event-list-info"><div class="loc">Virtual &middot; Monthly</div><h3>COSZO Science Team Call</h3><p>Monthly open science team call. Agenda distributed 48 hours in advance.</p></div>
            <span class="tag">Open</span>
          </div>
          <div class="event-list-item">
            <div class="event-list-date"><span class="big">Jun 22</span><span class="small">2026</span></div>
            <div class="event-list-info"><div class="loc">Seattle, WA &middot; Hybrid</div><h3>Annual COSZO All-Hands Meeting</h3><p>Full project team, advisory board, and stakeholders. By invitation, with open townhall session.</p></div>
            <span class="tag">By invite</span>
          </div>
          <div class="event-list-item">
            <div class="event-list-date"><span class="big">Dec 08</span><span class="small">2026</span></div>
            <div class="event-list-info"><div class="loc">San Francisco, CA</div><h3>COSZO Town Hall at AGU Fall Meeting</h3><p>Evening town hall session for community Q&amp;A at the AGU annual meeting.</p></div>
            <span class="tag">Open</span>
          </div>
        </div>

        <h2>Past meetings</h2>
        <div class="event-list">
          <div class="event-list-item">
            <div class="event-list-date"><span class="big">Feb 18</span><span class="small">2026</span></div>
            <div class="event-list-info"><div class="loc">New Orleans, LA</div><h3>COSZO Session at Ocean Sciences 2026</h3><p>Town hall and session on Cascadia seafloor observations.</p></div>
            <span class="tag">Completed</span>
          </div>
          <div class="event-list-item">
            <div class="event-list-date"><span class="big">Oct 22</span><span class="small">2025</span></div>
            <div class="event-list-info"><div class="loc">Seattle, WA</div><h3>COSZO Science &amp; Operations Planning Workshop</h3><p>Two-day working meeting to finalize instrument siting and operations plan.</p></div>
            <span class="tag">Completed</span>
          </div>
        </div>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# PARTNERS
# ============================================================
PARTNERS_BODY = page_hero(
    "Outreach", "Partners",
    "The institutional, scientific, and operational partners that make COSZO possible.",
    ['<a href="index.html">Home</a>', '<a href="outreach.html">Outreach</a>', "Partners"]
) + """
<section class="partners">
  <div class="container">
    <div class="partners-header">
      <div class="section-eyebrow">Institutional</div>
      <h2>Partner Institutions</h2>
    </div>
    <div class="partner-logos">
      <div class="partner-tile"><svg class="partner-icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="16" stroke="currentColor" stroke-width="2"/><path d="M20 8 Q 26 20, 20 32 Q 14 20, 20 8" stroke="currentColor" stroke-width="1.5" fill="none"/></svg><div class="partner-name">National Science Foundation</div><div class="partner-sub">Funder</div></div>
      <div class="partner-tile"><svg class="partner-icon" viewBox="0 0 40 40" fill="none"><path d="M20 6 L34 14 V28 L20 34 L6 28 V14 Z" stroke="currentColor" stroke-width="2" fill="none"/></svg><div class="partner-name">University of Washington</div><div class="partner-sub">School of Oceanography</div></div>
      <div class="partner-tile"><svg class="partner-icon" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="14" stroke="currentColor" stroke-width="2"/><path d="M10 26 Q 20 16, 30 26" stroke="currentColor" stroke-width="1.5" fill="none"/></svg><div class="partner-name">UW Earth &amp; Space Sciences</div><div class="partner-sub">Seismology</div></div>
      <div class="partner-tile"><svg class="partner-icon" viewBox="0 0 40 40" fill="none"><path d="M8 30 L20 10 L32 30 Z" stroke="currentColor" stroke-width="2" fill="none"/><line x1="14" y1="24" x2="26" y2="24" stroke="currentColor" stroke-width="2"/></svg><div class="partner-name">Applied Physics Laboratory</div><div class="partner-sub">Engineering</div></div>
      <div class="partner-tile"><svg class="partner-icon" viewBox="0 0 40 40" fill="none"><path d="M6 24 Q 14 16, 20 22 T 34 20" stroke="currentColor" stroke-width="2" fill="none"/></svg><div class="partner-name">Scripps Institution</div><div class="partner-sub">of Oceanography</div></div>
    </div>
  </div>
</section>

<section class="hub-section alt">
  <div class="container">
    <div class="partners-header">
      <div class="section-eyebrow">Scientific &amp; Operational</div>
      <h2>Affiliated Networks</h2>
    </div>
    <div class="hub-cards">
      <div class="hub-card">
        <h3>Ocean Observatories Initiative</h3>
        <p>COSZO builds directly on the OOI Regional Cabled Array. OOI provides cabled infrastructure, power, telemetry, and the cyberinfrastructure that serves COSZO data.</p>
        <a href="https://oceanobservatories.org/" class="card-link" target="_blank" rel="noopener">oceanobservatories.org</a>
      </div>
      <div class="hub-card">
        <h3>Pacific Northwest Seismic Network</h3>
        <p>Onshore seismic monitoring of the Cascadia region. COSZO data will be integrated into PNSN event detection and ShakeAlert feeds.</p>
        <a href="#" class="card-link">pnsn.org</a>
      </div>
      <div class="hub-card">
        <h3>USGS ShakeAlert</h3>
        <p>The U.S. West Coast earthquake early warning system. Integrating COSZO detections into ShakeAlert is a named project goal.</p>
        <a href="#" class="card-link">shakealert.org</a>
      </div>
    </div>
  </div>
</section>
"""

# ============================================================
# EARLY WARNING
# ============================================================
EW_BODY = page_hero(
    "Early Warning", "Early Warning",
    "Using seafloor observations to extend earthquake early warning offshore. How COSZO contributes, and what remains to be built.",
    ['<a href="index.html">Home</a>', "Early Warning"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">Earthquake early warning (EEW) works by detecting the first arrivals from a rupture, estimating its size and location in seconds, and broadcasting an alert before the stronger shaking arrives. For a Cascadia megathrust rupture, the instruments best positioned to give the earliest warning are on the seafloor, above the locked fault itself.</p>

        <h2>Why offshore matters</h2>
        <p>The USGS ShakeAlert system already operates along the U.S. West Coast using onshore seismic networks. For onshore or near-shore events, this works well. For a great Cascadia rupture initiating offshore, however, the first P-wave arrivals at onshore stations are delayed by the travel time from the hypocenter to the coast, typically 15 to 30 seconds. Seafloor sensors shorten that delay dramatically.</p>

        <div class="pull-stat">
          <div class="stat-num">10 to 20s</div>
          <div class="stat-desc">Additional warning time that seafloor observations can provide for offshore Cascadia events relative to onshore-only networks.</div>
        </div>

        <h2>How COSZO contributes</h2>
        <p>Three COSZO subsystems contribute directly to EEW:</p>
        <ul>
          <li><strong>Strong-motion accelerometers</strong> near the expected rupture surface detect initial ground motion without clipping.</li>
          <li><strong>Short-period seismometers</strong> catch low-magnitude precursors and enable rapid magnitude estimation.</li>
          <li><strong>Seafloor pressure sensors</strong> operating in the tsunami band provide independent tsunami-source information within minutes.</li>
        </ul>

        <h2>Integration with ShakeAlert</h2>
        <p>Integration of COSZO data into ShakeAlert is an explicit project goal, coordinated between the COSZO team, the Pacific Northwest Seismic Network, and the USGS. Technical integration is scheduled for the third project year, following full instrument commissioning.</p>

        <h2>Earlier work</h2>
        <p>COSZO builds on extensive community study, including the <a href="feasibility-study.html">2019 Feasibility Study</a> that first laid out the quantitative case for seafloor EEW off Cascadia.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# FEASIBILITY STUDY
# ============================================================
FEAS_BODY = page_hero(
    "Early Warning", "2019 Feasibility Study",
    "Exploring the design options for offshore monitoring of the subduction zone.",
    ['<a href="index.html">Home</a>', '<a href="early-warning.html">Early Warning</a>', "2019 Feasibility Study"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">The 2019 Feasibility Study explored the design options for offshore monitoring of the Cascadia subduction zone. It aimed to enhance early warning systems for offshore earthquakes and tsunamis while improving Cascadia subduction zone monitoring capabilities. Funding came from the Gordon and Betty Moore Foundation.</p>

        <h2>Study components</h2>
        <p>The research involved four main components:</p>
        <ol>
          <li>Analysis of existing offshore data and modeling studies to establish monitoring requirements.</li>
          <li>Examination of current observatories and emerging technologies to evaluate different approaches.</li>
          <li>Development of engineering requirements through an iterative process.</li>
          <li>A spring 2017 <a href="workshop.html">workshop</a> convening scientists, engineers, and stakeholders, resulting in a white paper.</li>
        </ol>

        <h2>White paper</h2>
        <p>The <a href="white-paper.html">white paper</a> outlined the rationale for an offshore network, presented implementation tasks, established a timeline, and provided budget projections.</p>

        <h2>Beyond Cascadia</h2>
        <p>While focused on Cascadia, the study notes that its findings are &ldquo;a useful resource for groups who are planning offshore monitoring infrastructure in other subduction zones.&rdquo;</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# CONTACT
# ============================================================
CONTACT_BODY = page_hero(
    "Contact", "Contact",
    "For any inquiry about the project or the data, please contact us through the form below or send us an email at coszo@uw.edu.",
    ['<a href="index.html">Home</a>', "Contact"]
) + """
<section class="article">
  <div class="container">
    <div class="form-grid">
      <form onsubmit="event.preventDefault(); coszoSendEmail();">
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" name="Name" type="text" placeholder="Your name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" name="Email" type="email" placeholder="you@institution.edu">
          </div>
        </div>
        <div class="form-group">
          <label for="affiliation">Affiliation</label>
          <input id="affiliation" name="Affiliation" type="text" placeholder="Your institution or organization">
        </div>
        <div class="form-group">
          <label for="topic">Topic</label>
          <select id="topic" name="Topic">
            <option>Science collaboration</option>
            <option>Data access question</option>
            <option>REU program</option>
            <option>Press inquiry</option>
            <option>Cruise or logistics</option>
            <option>Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" name="Message" placeholder="Tell us what we can help with..."></textarea>
        </div>
        <button type="submit" class="btn-primary">Send message
          <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </form>
      <script>
      function coszoSendEmail(){
        var v=function(id){var e=document.getElementById(id);return e?e.value.trim():'';};
        var body="Name: "+v('name')+"\\nEmail: "+v('email')+"\\nAffiliation: "+v('affiliation')+"\\nTopic: "+v('topic')+"\\n\\n"+v('message');
        window.location.href="mailto:coszo@uw.edu?subject="+encodeURIComponent("COSZO website contact")+"&body="+encodeURIComponent(body);
      }
      </script>
      <div>
        <div class="form-sidebar-block">
          <h3>Project office</h3>
          <address>
            COSZO Project<br>
            School of Oceanography<br>
            University of Washington<br>
            <a href="mailto:coszo@uw.edu">coszo@uw.edu</a>
          </address>
        </div>
        <div class="form-sidebar-block">
          <h3>Data questions</h3>
          <p>If you have questions about data streams accessed through EarthScope, please email us at <a href="mailto:coszo@uw.edu">coszo@uw.edu</a> or complete the form on the left.</p>
          <p>If you have questions about data streams accessed through OOI/PINAS, please email the <a href="https://oceanobservatories.org/helpdesk/">OOI Helpdesk</a>.</p>
        </div>
      </div>
    </div>
  </div>
</section>
"""

# ============================================================
# BLOG FROM SEA (data-driven; GitHub Issues + Action populate data/blog.csv)
# ============================================================
# CSV columns: date, title, author, image, excerpt, slug, body
#   date    -> YYYY-MM-DD (posts sorted newest first)
#   image   -> filename in assets/blog/ or a full URL; blank = gradient block
#   slug    -> post page filename is blog-<slug>.html
#   excerpt -> short text shown on the square block
#   body    -> post HTML/text shown on the individual post page
BLOG_CSV = os.path.join(OUT_DIR, "data", "blog.csv")

def load_blog():
    posts = []
    try:
        with open(BLOG_CSV, newline="", encoding="utf-8") as f:
            for row in csv.DictReader(f):
                if (row.get("title") or "").strip() and (row.get("slug") or "").strip():
                    posts.append(row)
    except FileNotFoundError:
        pass
    posts.sort(key=lambda r: (r.get("date") or ""), reverse=True)
    return posts

def _blog_thumb(image, title):
    if image:
        src = image if image.startswith("http") else f"assets/blog/{image}"
        return f'<div class="blog-card-thumb"><img src="{src}" alt="{title}" loading="lazy"></div>'
    return '<div class="blog-card-thumb blog-card-thumb--blank"></div>'

def render_blog_cards(posts, limit=None):
    items = posts[:limit] if limit else posts
    if not items:
        return '<p class="blog-empty"><em>No posts yet. Check back during the next cruise.</em></p>'
    html = '<div class="blog-grid">'
    for p in items:
        slug = (p.get("slug") or "").strip()
        title = (p.get("title") or "").strip()
        meta = " &middot; ".join(x for x in [(p.get("date") or "").strip(),
                                             (p.get("author") or "").strip()] if x)
        excerpt = (p.get("excerpt") or "").strip()
        html += (f'\n  <a class="blog-card" href="blog-{slug}.html">'
                 f'{_blog_thumb((p.get("image") or "").strip(), title)}'
                 f'<div class="blog-card-body">'
                 f'<div class="blog-card-meta">{meta}</div>'
                 f'<h3 class="blog-card-title">{title}</h3>'
                 f'<p class="blog-card-excerpt">{excerpt}</p>'
                 f'</div></a>')
    return html + '\n</div>'

def blog_post_body(p):
    title = (p.get("title") or "").strip()
    meta = " &middot; ".join(x for x in [(p.get("date") or "").strip(),
                                         (p.get("author") or "").strip()] if x)
    body = (p.get("body") or "").strip() or "<p>(No content yet.)</p>"
    image = (p.get("image") or "").strip()
    fig = ""
    if image:
        src = image if image.startswith("http") else f"assets/blog/{image}"
        fig = f'<figure class="welcome-figure"><img src="{src}" alt="{title}"></figure>'
    return page_hero(
        "Cruises", title, meta,
        ['<a href="index.html">Home</a>', '<a href="cruises.html">Cruises</a>',
         '<a href="blog-from-sea.html">Blog from Sea</a>', title]
    ) + f"""
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        {fig}
        {body}
        <p style="margin-top:2.5rem;"><a href="blog-from-sea.html">&larr; All posts</a></p>
      </article>
    </div>
  </div>
</section>
"""

_BLOG_SUBMIT = ('https://github.com/coszo-hub/coszo-hub.github.io/issues/new'
                '?labels=blog-submission&amp;title=%5BBlog%5D+')

BLOG_BODY = page_hero(
    "Cruises", "Blog from Sea",
    "Daily dispatches from the COSZO team at sea, reviewed before they appear here.",
    ['<a href="index.html">Home</a>', '<a href="cruises.html">Cruises</a>', "Blog from Sea"]
) + f"""
<section class="article">
  <div class="container">
    <p style="margin-bottom:2rem;"><a class="btn-primary" href="{_BLOG_SUBMIT}" target="_blank" rel="noopener">Submit a post &#8599;</a></p>
    {render_blog_cards(load_blog())}
  </div>
</section>
"""

# ============================================================
# OREGON SHELF (site)
# ============================================================
OREGON_SHELF_BODY = page_hero(
    "Sites", "Oregon Shelf",
    "Shallow continental-shelf benthic site offshore Oregon, ~80 m deep (OOI Oregon Shelf Cabled BEP, CE02SHBP).",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', '<a href="sites.html">Seafloor Sites</a>', "Oregon Shelf"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <h2>Overview</h2>
        <p class="lede-para">The Oregon Shelf Cabled Benthic Experiment Package (BEP) is located on the Continental Shelf, approximately 80 meters deep. The Continental Shelf-Slope area off the Oregon coast is a highly productive, dynamic upwelling environment. Upwelling brings nutrients to the surface sparking primary production and fueling the food web. In recent years, upwelling has also brought onto the shelf hypoxic, low oxygen, waters that can be harmful to organisms in the area. By sampling in this area, the OOI seeks to gain better insight into upwelling dynamics of this system.</p>
        <p>Like other BEPs the Oregon Shelf Cabled BEP is connected to and draws energy from Fiber Optic Cables to power its instruments and to transmit data from the instruments back to shore. Within the yellow protective armor of the BEP are two cages containing instruments that measure various properties of the bottom water.</p>
        <p>The Cabled Endurance Oregon Shelf Cabled BEP is located near the base of a surface mooring and surface-piercing profiler mooring, providing complementary seafloor data to the air-sea and water column data collected by the moorings, allowing for the sampling of a full picture of shelf dynamics.</p>
        <figure class="welcome-figure"><img src="assets/sites/oregon-shelf.jpg" alt="Bathymetric map of the Oregon Shelf cabled site (node MJ01C)" loading="lazy"><figcaption>Cabled infrastructure at the Oregon Shelf site (node MJ01C) on the Cascadia margin. Image: OOI Regional Cabled Array.</figcaption></figure>
        <p><strong>Location:</strong> 44.6371&deg;N, 124.306&deg;W &middot; ~80 m water depth.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# OREGON OFFSHORE (site)
# ============================================================
OREGON_OFFSHORE_BODY = page_hero(
    "Sites", "Oregon Offshore",
    "Continental-slope benthic site off Oregon, ~550 m deep (OOI Oregon Offshore Cabled BEP, CE04OSBP).",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', '<a href="sites.html">Seafloor Sites</a>', "Oregon Offshore"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <h2>Overview</h2>
        <p class="lede-para">Oregon Offshore Cabled Benthic Experiment Package (BEP) is located on the Continental Slope, approximately 550 meters deep. The Continental Shelf-Slope area off the Oregon coast is a highly productive, dynamic upwelling environment. Upwelling brings nutrients to the surface sparking primary production and fueling the food web. In recent years, upwelling has also brought onto the shelf hypoxic, low oxygen, waters that can be harmful to organisms in the area. By sampling in this area, the OOI seeks to gain better insight into upwelling dynamics of this system.</p>
        <p>Like other BEPs the Oregon Offshore Cabled BEP is connected to and draws energy from Fiber Optic Cables to power its instruments and to transmit data from the instruments back to shore. Within the yellow protective armor of the BEP are two cages containing instruments that measure various properties of the bottom water.</p>
        <p>The Oregon Offshore Cabled BEP is located near the base of a shallow and deep profiler mooring providing complementary seafloor data to the water column data collected by the profilers, allowing for the sampling of a full picture of shelf dynamics.</p>
        <figure class="welcome-figure"><img src="assets/sites/oregon-offshore-map.jpg" alt="Bathymetric map of the Oregon Offshore cabled site (node PN1C)" loading="lazy"><figcaption>Cabled infrastructure at the Oregon Offshore site (node PN1C) on the Cascadia margin. Image: OOI Regional Cabled Array.</figcaption></figure>
        <p><strong>Location:</strong> 44.3695&deg;N, 124.954&deg;W &middot; ~550 m water depth.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# OREGON OUTER SHELF (COSZO cabled site, node PN1D)
# ============================================================
OREGON_OUTER_SHELF_BODY = page_hero(
    "Sites", "Oregon Outer Shelf",
    "COSZO cabled node on the outer continental shelf off Oregon, ~110 m deep (node PN1D).",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', '<a href="sites.html">Seafloor Sites</a>', "Oregon Outer Shelf"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <h2>Overview</h2>
        <p class="lede-para">Oregon Outer Shelf is a new COSZO cabled node (PN1D) on the outer continental shelf off Oregon, at roughly 110 meters water depth. It extends the OOI Regional Cabled Array with a purpose-built seafloor geophysical station in the shallowest part of the COSZO footprint.</p>
        <p>The node hosts a co-located geophysical sensor suite &mdash; a broadband ocean-bottom seismometer, a calibrated seafloor pressure gauge (GSSM), a differential pressure and point-current sensor (VEL3D), a self-calibrating pressure sensor (PREST), and a low-frequency hydrophone &mdash; all cabled for continuous, real-time data return.</p>
        <figure class="welcome-figure"><img src="assets/sites/oregon-outershelf1.jpg" alt="Bathymetric map of the Oregon Outer Shelf cabled node (PN1D)" loading="lazy"><figcaption>Cabled instrument layout at the Oregon Outer Shelf node (PN1D, ~110 m). Image: OOI Regional Cabled Array.</figcaption></figure>
        <p><strong>Node:</strong> PN1D &middot; ~110 m water depth.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# OREGON MID SLOPE (COSZO cabled site, node PN1B)
# ============================================================
OREGON_MID_SLOPE_BODY = page_hero(
    "Sites", "Oregon Mid Slope",
    "COSZO cabled node on the mid continental slope off Oregon, ~1,250 m deep (node PN1B).",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', '<a href="sites.html">Seafloor Sites</a>', "Oregon Mid Slope"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <h2>Overview</h2>
        <p class="lede-para">Oregon Mid Slope is a new COSZO cabled node (PN1B) on the mid continental slope off Oregon, at roughly 1,250 meters water depth. It sits between the shelf sites and the deep Slope Base station, sampling deformation and seismicity across the seaward extent of the locked megathrust.</p>
        <p>The node hosts a co-located geophysical sensor suite &mdash; a broadband ocean-bottom seismometer, a calibrated seafloor pressure gauge (GSSM), a differential pressure and point-current sensor (VEL3D), a self-calibrating pressure sensor (PREST), and a low-frequency hydrophone &mdash; all cabled for continuous, real-time data return.</p>
        <figure class="welcome-figure"><img src="assets/sites/oregon-midslope.jpg" alt="Bathymetric map of the Oregon Mid Slope cabled node (PN1B)" loading="lazy"><figcaption>Cabled instrument layout at the Oregon Mid Slope node (PN1B, ~1,250 m). Image: OOI Regional Cabled Array.</figcaption></figure>
        <p><strong>Node:</strong> PN1B &middot; ~1,250 m water depth.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# CRUISES
# ============================================================
CRUISES_BODY = page_hero(
    "Infrastructure", "Cruises",
    "Field operations for COSZO: the daily plan, dispatches from sea, the cruise diary, and live video from the ship.",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', "Cruises"]
) + f"""
<section class="cruise-log" id="operations">
  <div class="container">
    <div class="section-header">
      <div class="section-header-intro">
        <div class="section-eyebrow">Recent Operations</div>
        <h2 class="section-heading">Cruises and deployments.</h2>
      </div>
    </div>
    <div class="cruise-timeline">
      <div class="cruise-item">
        <div class="cruise-date"><span class="year">2026</span>Summer &middot; RR2614</div>
        <div class="cruise-info"><div class="cruise-label">Upcoming &middot; Installation</div><h3>COSZO Installation Cruise</h3><p>R/V Roger Revelle &middot; Newport, OR to Cascadia Margin</p></div>
        <div class="cruise-status upcoming">Upcoming</div>
      </div>
    </div>
  </div>
</section>

<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#stream" class="active">Live Video</a></li>
          <li><a href="#operations">Recent Operations</a></li>
          <li><a href="#plan">Plan for the Day</a></li>
          <li><a href="#blog">Blog from Sea</a></li>
          <li><a href="#diary">Cruise Diary</a></li>
        </ul>
      </aside>
      <article class="article-content">
        <h2 id="stream">Live Video</h2>
        <p>When a live feed is available, it streams here.</p>
        <div class="video-embed">
          <!-- Replace with the live stream embed (YouTube Live / Vimeo) when available. -->
          <div class="image-placeholder">Live video stream offline</div>
        </div>

        <h2 id="plan">Plan for the Day</h2>
        <p>The current day's operational plan will appear here during active cruises.</p>
        <figure class="welcome-figure"><div class="image-placeholder">Daily plan / station map &mdash; placeholder</div><figcaption>Planned operations for the day.</figcaption></figure>

        <h2 id="blog">Blog from Sea</h2>
        <p>Daily dispatches written by the team at sea. <a href="blog-from-sea.html">See all posts &rarr;</a></p>
        {render_blog_cards(load_blog(), limit=6)}

        <h2 id="diary">Cruise Diary</h2>
        <p>A chronological record of the cruise, compiled from daily logs.</p>
        <div class="cruise-diary">
          <p><em>The cruise diary will be populated during operations.</em></p>
        </div>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# SEARCH (client-side; reads search-index.json built in main())
# ============================================================
SEARCH_BODY = page_hero(
    "Search", "Search",
    "Search across the COSZO site.",
    ['<a href="index.html">Home</a>', "Search"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <input id="searchq" type="search" class="search-input" placeholder="Search the site…" autocomplete="off" autofocus>
        <div id="searchresults" class="search-results"></div>
      </article>
    </div>
  </div>
</section>
<script>
(function(){
  var input=document.getElementById('searchq'),out=document.getElementById('searchresults'),idx=[];
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function snippet(text,terms){
    var low=text.toLowerCase(),i=-1;
    for(var k=0;k<terms.length&&i<0;k++) i=low.indexOf(terms[k]);
    if(i<0) i=0; var start=Math.max(0,i-70);
    return (start>0?'…':'')+esc(text.slice(start,start+200)).trim()+'…';
  }
  function run(){
    var q=input.value.trim().toLowerCase();
    if(!q){out.innerHTML='';return;}
    var terms=q.split(/\\s+/);
    var hits=idx.map(function(e){
      var title=e.title.toLowerCase(),hay=title+' '+e.text.toLowerCase(),score=0;
      terms.forEach(function(t){ if(title.indexOf(t)>=0) score+=8; score+=(hay.split(t).length-1); });
      return {e:e,score:score};
    }).filter(function(x){return x.score>0;}).sort(function(a,b){return b.score-a.score;}).slice(0,25);
    if(!hits.length){out.innerHTML='<p>No results for “'+esc(q)+'”.</p>';return;}
    out.innerHTML=hits.map(function(h){
      return '<a class="search-result" href="'+h.e.url+'"><h3>'+esc(h.e.title)+'</h3><p>'+snippet(h.e.text,terms)+'</p></a>';
    }).join('');
  }
  fetch('search-index.json').then(function(r){return r.json();}).then(function(d){
    idx=d; var p=new URLSearchParams(location.search).get('q');
    if(p){input.value=p;} run();
  }).catch(function(){out.innerHTML='<p>Search is unavailable.</p>';});
  input.addEventListener('input',run);
})();
</script>
"""

# ============================================================
# REGISTER ALL PAGES AND WRITE THEM
# ============================================================
PAGES = [
    ("index.html",                              "COSZO — Cascadia Offshore Subduction Zone Observatory",  "home",          INDEX_BODY),
    ("about.html",                              "About · COSZO",                                           "about",         ABOUT_BODY),
    ("publications.html",                       "Publications · COSZO",                                    "about",         PUBLICATIONS_BODY),
    ("motivation.html",                         "Motivation · COSZO",                                      "about",         MOTIVATION_BODY),
    ("scientific-objectives.html",              "Scientific Objectives · COSZO",                           "about",         SCIOBJ_BODY),
    ("infrastructure.html",                     "Infrastructure · COSZO",                                  "infrastructure",INFRASTRUCTURE_BODY),
    ("sites.html",                              "Seafloor Sites · COSZO",                                  "infrastructure",SITES_BODY),
    ("hydrate-ridge.html",                      "Southern Hydrate Ridge · COSZO",                          "infrastructure",HYDRATE_RIDGE_BODY),
    ("slope-base.html",                         "Slope Base · COSZO",                                      "infrastructure",SLOPE_BASE_BODY),
    ("oregon-shelf.html",                       "Oregon Shelf · COSZO",                                    "infrastructure",OREGON_SHELF_BODY),
    ("oregon-offshore.html",                    "Oregon Offshore · COSZO",                                 "infrastructure",OREGON_OFFSHORE_BODY),
    ("oregon-outer-shelf.html",                 "Oregon Outer Shelf · COSZO",                              "infrastructure",OREGON_OUTER_SHELF_BODY),
    ("oregon-mid-slope.html",                   "Oregon Mid Slope · COSZO",                                "infrastructure",OREGON_MID_SLOPE_BODY),
    ("existing-instruments.html",               "Existing Instruments · COSZO",                            "infrastructure",EXISTING_BODY),
    ("coszo-instruments.html",                  "COSZO Instruments · COSZO",                               "infrastructure",COSZO_INSTR_BODY),
    ("cruises.html",                            "Cruises · COSZO",                                         "infrastructure",CRUISES_BODY),
    ("blog-from-sea.html",                      "Blog from Sea · COSZO",                                   "infrastructure",BLOG_BODY),
    ("data.html",                               "Data · COSZO",                                            "data",          DATAPRODUCTS_BODY),
    ("absolute-seafloor-pressure.html",         "Absolute Seafloor Pressure · COSZO",                      "data",          ASP_BODY),
    ("people.html",                             "People · COSZO",                                          "about",         PEOPLE_BODY),
    ("outreach.html",                           "Outreach · COSZO",                                        "outreach",      OUTREACH_BODY),
    ("research-experiences-for-undergraduates.html", "Research Experiences for Undergraduates · COSZO",    "outreach",      REU_BODY),
    ("early-career-workshop.html",              "2027 Early Career Workshop · COSZO",                      "outreach",      WORKSHOP_BODY),
    ("partners.html",                           "Partners · COSZO",                                        "outreach",      PARTNERS_BODY),
    ("early-warning.html",                      "Early Warning · COSZO",                                   "ew",            EW_BODY),
    ("feasibility-study.html",                  "2019 Feasibility Study · COSZO",                          "ew",            FEAS_BODY),
    ("contact.html",                            "Contact · COSZO",                                         "about",         CONTACT_BODY),
    ("search.html",                             "Search · COSZO",                                          "",              SEARCH_BODY),
    ("archives.html",                           "Archives · COSZO",                                        "ew",            ARCHIVES_BODY),
    ("resources.html",                          "Resources · COSZO",                                       "",              RESOURCES_BODY),
    ("white-paper.html",                        "White Paper · COSZO",                                     "",              WHITE_PAPER_BODY),
    ("workshop-documents.html",                 "Workshop Documents · COSZO",                              "",              WORKSHOP_DOCUMENTS_BODY),
    ("workshop.html",                           "Workshop · COSZO",                                        "",              WORKSHOP_BODY),
]

# Data-product detail pages, generated from data/data_channels.csv (see the
# loader/DATA_PAGE_META above). Appended so editing the spreadsheet adds/edits pages.
for _slug, _info in load_data_channels(os.path.join(OUT_DIR, "data", "data_channels.csv")).items():
    PAGES.append((f"{_slug}.html", f'{_info["title"].replace("&", "&amp;")} · COSZO', "data", data_page_body(_slug, _info)))

def main():
    written = []
    search_index = []

    def add_index(filename, title, body):
        if filename == "search.html":
            return
        search_index.append({
            "url": filename,
            "title": title.split(" · ")[0].split(" — ")[0],
            "text": strip_html(body)[:2000],
        })

    for filename, title, active, body in PAGES:
        html = DOC.format(
            title=title,
            header=build_header(active),
            body=body,
            footer=FOOTER,
        )
        out_path = os.path.join(OUT_DIR, filename)
        with open(out_path, "w", encoding="utf-8") as f:
            f.write(html)
        written.append(filename)
        add_index(filename, title, body)
        print(f"  wrote {filename}")

    # One page per blog post (blog-<slug>.html), linked from the square blocks.
    for p in load_blog():
        slug = (p.get("slug") or "").strip()
        filename = f"blog-{slug}.html"
        body = blog_post_body(p)
        html = DOC.format(
            title=f"{(p.get('title') or '').strip()} · COSZO",
            header=build_header("infrastructure"),
            body=body,
            footer=FOOTER,
        )
        with open(os.path.join(OUT_DIR, filename), "w", encoding="utf-8") as f:
            f.write(html)
        written.append(filename)
        add_index(filename, (p.get("title") or "").strip(), body)
        print(f"  wrote {filename}")

    with open(os.path.join(OUT_DIR, "search-index.json"), "w", encoding="utf-8") as f:
        json.dump(search_index, f, ensure_ascii=False)
    print(f"  wrote search-index.json ({len(search_index)} entries)")

    print(f"\nGenerated {len(written)} pages in {OUT_DIR}")

if __name__ == "__main__":
    main()
