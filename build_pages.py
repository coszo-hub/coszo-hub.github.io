#!/usr/bin/env python3
"""
COSZO site generator
====================
Reads the page definitions in this file and writes out all HTML pages
(index + every nav destination). Every page uses the same header,
footer, and shared stylesheet (styles.css).

Run: python3 build_pages.py
"""

import os

OUT_DIR = os.path.dirname(os.path.abspath(__file__))

# ============================================================
# HEADER (utility bar + logo + nav with hover dropdowns)
# All hrefs point to local HTML files in the same directory.
# ============================================================
def build_header(active=""):
    """active is a short key for the current tab: home, science, infrastructure, data, people, outreach, ew"""
    def cls(key):
        return ' class="nav-link active"' if active == key else ' class="nav-link"'
    return f"""
<div class="utility-bar">
  <div class="container">
    <div class="funding-note">An <strong>NSF</strong> Mid-scale Research Infrastructure project</div>
    <div class="utility-bar-links">
      <a href="archives.html">Archives</a>
      <a href="contact.html">Contact</a>
      <a href="#">Search</a>
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
      <div class="nav-item">
        <a href="index.html"{cls("home")}>Home</a>
      </div>
      <div class="nav-item has-dropdown">
        <span{cls("science")} role="button" tabindex="0" aria-haspopup="true">Science</span>
        <div class="dropdown">
          <a href="science.html#motivation">Motivation</a>
          <a href="science.html#objectives">Objectives</a>
          <a href="publications.html">Publications</a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="infrastructure.html"{cls("infrastructure")}>Infrastructure</a>
        <div class="dropdown">
          <a href="infrastructure.html">Infrastructure Overview</a>
          <a href="sites.html">Sites</a>
          <a href="existing-instruments.html">Existing Instruments</a>
          <a href="coszo-instruments.html">COSZO Instruments</a>
          <a href="future-opportunities.html">Future Opportunities</a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="data.html"{cls("data")}>Data</a>
        <div class="dropdown wide">
          <a href="data.html">All Data Products</a>
          <hr />
          <div class="dropdown-section-heading">Pressure</div>
          <a href="absolute-seafloor-pressure.html">Absolute Seafloor Pressure</a>
          <a href="data.html">Differential Seafloor Pressure</a>
          <a href="data.html">GSSM Calibrated Pressure &amp; Ground Acceleration</a>
          <a href="data.html">SCPR Calibrated Pressure</a>
          <a href="data.html">Low-Frequency Acoustic Pressure</a>
          <hr />
          <div class="dropdown-section-heading">Motion</div>
          <a href="data.html">Strong-Motion Ground Acceleration</a>
          <a href="data.html">Broadband Ground Velocity</a>
          <a href="data.html">Short-Period Ground Velocity</a>
          <hr />
          <div class="dropdown-section-heading">Water</div>
          <a href="data.html">Sea Water Velocity</a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="people.html"{cls("people")}>People</a>
        <div class="dropdown">
          <a href="people.html">All People</a>
          <hr />
          <div class="dropdown-section-heading">Team</div>
          <a href="people.html">Leadership</a>
          <a href="people.html">Principal Investigators</a>
          <a href="people.html">Research Team</a>
          <hr />
          <div class="dropdown-section-heading">Students &amp; Scholars</div>
          <a href="people.html">Postdoctoral Scholars</a>
          <a href="people.html">Graduate Students</a>
          <a href="people.html">Undergraduate Researchers</a>
          <hr />
          <a href="people.html">Collaborators</a>
          <a href="people.html">Advisory Board</a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="outreach.html"{cls("outreach")}>Outreach</a>
        <div class="dropdown">
          <a href="outreach.html">Outreach Overview</a>
          <a href="research-experiences-for-undergraduates.html">Research Experiences for Undergraduates</a>
          <a href="outreach.html">Graduate Students</a>
          <a href="early-career-workshop.html">2027 Early Career Workshop</a>
          <a href="meetings.html">Meetings</a>
          <a href="partners.html">Partners</a>
        </div>
      </div>
      <div class="nav-item has-dropdown">
        <a href="early-warning.html"{cls("ew")}>Early Warning</a>
        <div class="dropdown">
          <a href="early-warning.html">Early Warning Overview</a>
          <a href="feasibility-study.html">2019 Feasibility Study</a>
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
          adding geophysical instrumentation to the OOI Regional Cabled Array off the coast of Oregon.
        </p>
      </div>
      <div class="footer-col">
        <h4>Science</h4>
        <ul>
          <li><a href="motivation.html">Motivation</a></li>
          <li><a href="scientific-objectives.html">Scientific Objectives</a></li>
          <li><a href="early-warning.html">Early Warning</a></li>
          <li><a href="feasibility-study.html">Feasibility Study</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Infrastructure</h4>
        <ul>
          <li><a href="infrastructure.html">Overview</a></li>
          <li><a href="existing-instruments.html">Existing Instruments</a></li>
          <li><a href="coszo-instruments.html">COSZO Instruments</a></li>
          <li><a href="future-opportunities.html">Future Opportunities</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Community</h4>
        <ul>
          <li><a href="people.html">People</a></li>
          <li><a href="outreach.html">Outreach</a></li>
          <li><a href="partners.html">Partners</a></li>
          <li><a href="meetings.html">Meetings</a></li>
        </ul>
      </div>
      <div class="footer-col">
        <h4>Stay Connected</h4>
        <ul>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="archives.html">Archives</a></li>
          <li><a href="#">Search</a></li>
          <li><a href="https://oceanobservatories.org/" target="_blank" rel="noopener">OOI Website &#8599;</a></li>
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
      <div class="hero-eyebrow">Geophysical Observations &middot; Early Warning</div>
      <h1>Watching the <em>Cascadia fault</em> from the seafloor.</h1>
      <p class="hero-lede">COSZO adds geophysical instrumentation to the OOI Regional Cabled Array off the coast of Oregon, delivering continuous, high-fidelity seafloor data to investigate how subduction zone faults work and to support the development of offshore earthquake early warning.</p>
      <div class="hero-ctas">
        <a href="scientific-objectives.html" class="hero-cta">Science objectives
          <svg class="arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <a href="data.html" class="hero-cta secondary">Explore data products</a>
      </div>
    </div>
  </div>
</section>

<section class="quick-access">
  <div class="container">
    <div class="tiles">
      <a href="infrastructure.html" class="tile">
        <svg class="tile-icon" viewBox="0 0 80 80" fill="none"><path d="M8 58 L40 20 L72 58" stroke="currentColor" stroke-width="2.5" stroke-linejoin="round"/><circle cx="40" cy="20" r="4" fill="#f5a623"/><line x1="8" y1="66" x2="72" y2="66" stroke="currentColor" stroke-width="2.5"/><circle cx="22" cy="62" r="3" fill="#17a2ab"/><circle cx="40" cy="58" r="3" fill="#17a2ab"/><circle cx="58" cy="62" r="3" fill="#17a2ab"/></svg>
        <h3 class="tile-title">Infrastructure</h3>
        <p class="tile-subtitle">Cabled network &amp; instruments</p>
      </a>
      <a href="data.html" class="tile">
        <svg class="tile-icon" viewBox="0 0 80 80" fill="none"><rect x="10" y="16" width="60" height="48" rx="2" stroke="currentColor" stroke-width="2.5"/><path d="M10 28 H70" stroke="currentColor" stroke-width="2.5"/><circle cx="18" cy="22" r="1.5" fill="currentColor"/><circle cx="24" cy="22" r="1.5" fill="currentColor"/><path d="M18 40 L28 50 L38 36 L50 54 L62 42" stroke="#17a2ab" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
        <h3 class="tile-title">Data Products</h3>
        <p class="tile-subtitle">Pressure, motion, water velocity</p>
      </a>
      <a href="early-warning.html" class="tile">
        <svg class="tile-icon" viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="5" fill="#f5a623"/><circle cx="40" cy="40" r="14" fill="none" stroke="#f5a623" stroke-width="2" opacity="0.7"/><circle cx="40" cy="40" r="24" fill="none" stroke="#f5a623" stroke-width="2" opacity="0.45"/><circle cx="40" cy="40" r="34" fill="none" stroke="currentColor" stroke-width="2" opacity="0.7"/></svg>
        <h3 class="tile-title">Early Warning</h3>
        <p class="tile-subtitle">Seafloor detection for EEW</p>
      </a>
      <a href="outreach.html" class="tile">
        <svg class="tile-icon" viewBox="0 0 80 80" fill="none"><circle cx="30" cy="28" r="10" stroke="currentColor" stroke-width="2.5"/><circle cx="54" cy="32" r="8" stroke="#17a2ab" stroke-width="2.5"/><path d="M12 66 Q 30 48, 48 66" stroke="currentColor" stroke-width="2.5" fill="none" stroke-linecap="round"/><path d="M40 64 Q 54 50, 68 64" stroke="#17a2ab" stroke-width="2.5" fill="none" stroke-linecap="round"/></svg>
        <h3 class="tile-title">Outreach</h3>
        <p class="tile-subtitle">REUs, workshops, community</p>
      </a>
    </div>
  </div>
</section>

<section class="welcome">
  <div class="container">
    <div class="welcome-grid">
      <div>
        <div class="section-eyebrow">Welcome</div>
        <h2 class="section-heading">A dedicated geophysical observatory for the Cascadia subduction zone.</h2>
        <div class="welcome-body">
          <p>The Cascadia Offshore Subduction Zone Observatory (COSZO) is a National Science Foundation funded Mid-scale Research Infrastructure (RI-1) implementation project. Scientists and engineers from the University of Washington School of Oceanography, Department of Earth and Space Sciences, and Applied Physics Laboratory, together with the Scripps Institution of Oceanography, are adding geophysical instrumentation to the <a href="https://oceanobservatories.org/">Ocean Observatories Initiative</a> <a href="https://interactiveoceans.washington.edu/about/regional-cabled-array/">Regional Cabled Array</a> off the coast of Oregon.</p>
          <p>The RCA, established in 2015, was originally positioned on the continental margin to support coastal oceanography. It is also fortuitously located in a region of geophysical significance where the locked region of the Cascadia fault extends well offshore and clusters of earthquakes occur beneath the continental shelf.</p>
          <p>The geophysical sensor suite will collect continuous, high-fidelity data to enable the scientific community to address fundamental questions on how subduction zone faults work and provide a facility to support the development of offshore early warning.</p>
        </div>
      </div>
      <div class="welcome-media">
        <img src="coszo3d.jpg" alt="3D rendering of the COSZO offshore observatory layout along the Cascadia margin." style="width:100%; height:100%; object-fit:cover; display:block; border-radius:inherit;" />
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="container">
    <div class="cta-grid">
      <div>
        <div class="section-eyebrow" style="color: var(--epicenter);">Get Involved</div>
        <h2>Bringing the seafloor into the earthquake early-warning conversation.</h2>
        <p>COSZO data will be openly available through the OOI cyberinfrastructure. Researchers, educators, and emergency-response practitioners are invited to explore the science, contribute ideas for future instrumentation, or participate in our workshops and training programs.</p>
        <div class="cta-row">
          <a href="outreach.html" class="btn-primary">Explore Outreach
            <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </a>
          <a href="contact.html" class="btn-ghost">Contact the Team</a>
        </div>
      </div>
      <div class="cta-visual">
        <svg viewBox="0 0 400 400">
          <defs><radialGradient id="gg"><stop offset="0" stop-color="#1e7cab"/><stop offset="1" stop-color="#04182a"/></radialGradient></defs>
          <circle cx="200" cy="200" r="170" fill="url(#gg)"/>
          <ellipse cx="200" cy="200" rx="170" ry="42" fill="none" stroke="#17a2ab" opacity="0.3"/>
          <ellipse cx="200" cy="200" rx="170" ry="85" fill="none" stroke="#17a2ab" opacity="0.3"/>
          <ellipse cx="200" cy="200" rx="170" ry="128" fill="none" stroke="#17a2ab" opacity="0.3"/>
          <ellipse cx="200" cy="200" rx="42" ry="170" fill="none" stroke="#17a2ab" opacity="0.3"/>
          <ellipse cx="200" cy="200" rx="85" ry="170" fill="none" stroke="#17a2ab" opacity="0.3"/>
          <ellipse cx="200" cy="200" rx="128" ry="170" fill="none" stroke="#17a2ab" opacity="0.3"/>
          <circle cx="120" cy="150" r="22" fill="none" stroke="#f5a623" stroke-width="2"/>
          <circle cx="120" cy="150" r="6" fill="#f5a623"/>
          <line x1="120" y1="150" x2="260" y2="90" stroke="#f5a623" stroke-dasharray="3,3"/>
          <text x="260" y="80" font-family="Manrope, sans-serif" font-size="12" fill="#f5a623" letter-spacing="1" font-weight="600">CASCADIA</text>
          <circle cx="200" cy="200" r="170" fill="none" stroke="#17a2ab" stroke-width="1.5" opacity="0.5"/>
        </svg>
      </div>
    </div>
  </div>
</section>
"""

# ============================================================
# MOTIVATION
# ============================================================
MOTIVATION_BODY = page_hero(
    "Home", "Motivation",
    "The Cascadia subduction zone presents one of the greatest natural hazards to the Pacific Northwest. The tools to observe it in real time have, until now, been largely onshore.",
    ['<a href="index.html">Home</a>', "Motivation"]
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
    "Five research thrusts that the COSZO sensor suite is designed to address, spanning subduction mechanics, seismicity, deformation, and hazard science.",
    ['<a href="index.html">Home</a>', "Scientific Objectives"]
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

        <h2>5. Develop and test offshore earthquake early warning</h2>
        <p>Because COSZO instruments sit offshore of population centers, they can detect rupture initiation seconds to tens of seconds before onshore networks. Integrating COSZO data streams into the USGS ShakeAlert system is an explicit project goal and is the focus of our <a href="early-warning.html">Early Warning</a> work.</p>

        <h2>Cross-cutting themes</h2>
        <p>Across these five thrusts, several cross-cutting methodological themes recur: ambient-noise interferometry for continuous wavespeed monitoring, distributed acoustic sensing on the existing fiber, and machine-learning driven event detection and classification. Each is an active research direction within the COSZO team.</p>
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
      <a href="future-opportunities.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M8 34 L24 10 L40 34" stroke="currentColor" stroke-width="2" stroke-linejoin="round" fill="none"/><circle cx="24" cy="10" r="3" fill="#17a2ab"/><path d="M8 40 H40" stroke="currentColor" stroke-width="2"/></svg>
        <h3>Future Opportunities</h3>
        <p>How the community can propose additional instrumentation, piggyback on COSZO cruises, or integrate complementary sensors into the facility over time.</p>
        <span class="card-link">Explore opportunities</span>
      </a>
    </div>
  </div>
</section>

<section class="cruise-log">
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
        <div class="cruise-info"><div class="cruise-label">Upcoming &middot; Installation</div><h3>First COSZO Instrument Installation Cruise</h3><p>R/V Roger Revelle &middot; Newport, OR to Cascadia Margin</p></div>
        <div class="cruise-status upcoming">Upcoming</div>
      </div>
      <div class="cruise-item">
        <div class="cruise-date"><span class="year">2026</span>Spring &middot; RR2603</div>
        <div class="cruise-info"><div class="cruise-label">Ongoing &middot; Pre-deployment Survey</div><h3>Cascadia Site Characterization Cruise</h3><p>Multibeam and CTD survey of proposed installation sites</p></div>
        <div class="cruise-status ongoing">Ongoing</div>
      </div>
      <div class="cruise-item">
        <div class="cruise-date"><span class="year">2025</span>Fall &middot; TN430</div>
        <div class="cruise-info"><div class="cruise-label">Completed &middot; RCA Turnaround</div><h3>OOI RCA Annual Operations &amp; Maintenance</h3><p>Instrument servicing across the RCA</p></div>
        <div class="cruise-status completed">Completed</div>
      </div>
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
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">Since 2015, the OOI Regional Cabled Array has delivered real-time data from a suite of seafloor instruments along the Cascadia margin. These existing instruments are the foundation COSZO extends.</p>

        <h2>Seismic and geodetic</h2>
        <table class="specs-table">
          <thead><tr><th>Instrument</th><th>Location</th><th>Measurement</th></tr></thead>
          <tbody>
            <tr><td>Broadband Ocean-Bottom Seismometer</td><td>Primary nodes at Slope Base, Axial Base</td><td>Three-component ground velocity, 0.01 to 40 Hz</td></tr>
            <tr><td>Bottom Pressure Tilt</td><td>Multiple RCA sites</td><td>Seafloor pressure and two-axis tilt</td></tr>
            <tr><td>Hydrophone</td><td>Axial Seamount, Slope Base</td><td>Low-frequency acoustic pressure</td></tr>
            <tr><td>Short-period 4C OBS</td><td>Axial Seamount caldera</td><td>Short-period three-component + hydrophone</td></tr>
          </tbody>
        </table>

        <h2>Oceanographic</h2>
        <table class="specs-table">
          <thead><tr><th>Instrument</th><th>Location</th><th>Measurement</th></tr></thead>
          <tbody>
            <tr><td>Acoustic Doppler Current Profiler</td><td>Shelf and slope moorings</td><td>Water column velocity</td></tr>
            <tr><td>CTD</td><td>Profilers and moorings</td><td>Conductivity, temperature, depth</td></tr>
            <tr><td>Single-point current meter</td><td>Benthic platforms</td><td>Near-bottom water velocity</td></tr>
          </tbody>
        </table>

        <h2>Why these matter for COSZO</h2>
        <p>The existing instruments provide two things. First, a decade of baseline data that COSZO's new sensors can be cross-calibrated against. Second, the oceanographic measurements, especially current velocity and temperature, are essential for interpreting the geophysical signals. Tidal and current-driven pressure fluctuations must be modeled and removed before a tectonic signal becomes visible.</p>
      </article>
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
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">COSZO is adding a geophysical sensor suite purpose-built for subduction zone science. The instrumentation is grouped into three categories: seismic, geodetic, and acoustic.</p>

        <h2>Seismic instrumentation</h2>
        <h3>Strong-Motion Accelerometers</h3>
        <p>High-dynamic-range accelerometers sited close to the expected rupture surface. Their purpose is to record the unclipped ground motion of a great earthquake, providing the near-source data that ground-motion models require.</p>
        <h3>Broadband Seismometers</h3>
        <p>Three-component broadband instruments for regional and teleseismic seismology, ambient-noise interferometry, and moment tensor inversion.</p>
        <h3>Short-Period Seismometers</h3>
        <p>Compact, high-frequency seismometers optimized for local microseismicity and P-wave detection at the sites where broadband performance is not required.</p>

        <h2>Geodetic instrumentation</h2>
        <h3>Self-Calibrating Pressure Recorders (SCPR)</h3>
        <p>Seafloor pressure gauges with on-board calibration against a known mass standard, enabling correction for the long-period instrumental drift that normally obscures tectonic deformation signals.</p>
        <h3>Geodetic Seafloor Stations (GSSM)</h3>
        <p>Combined calibrated pressure and strong-motion platforms that provide both geodetic and seismological observations from the same seafloor site.</p>

        <h2>Acoustic instrumentation</h2>
        <h3>Low-Frequency Hydrophones</h3>
        <p>Hydrophones tuned to the infrasound band for T-phase detection, hydroacoustic event characterization, and long-range propagation studies.</p>

        <h2>Deployment timeline</h2>
        <p>The first tranche of COSZO instruments is scheduled for deployment on the <a href="infrastructure.html">summer 2026 installation cruise</a>. Full network buildout is planned across three annual maintenance cycles, with all instruments expected to be reporting by early 2029.</p>
      </article>
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
          [<a href="http://cascadiaoffshore.org/files/whitepaper_lowres-20200505101921.pdf" target="_blank" rel="noopener">PDF, low-res 8 MB</a>]
          [<a href="http://cascadiaoffshore.org/files/whitepaper_highres-20200505101421.pdf" target="_blank" rel="noopener">PDF, high-res 45 MB</a>]
        </p>
        <p style="margin-top:0.5rem;">Supplements:
          [<a href="http://cascadiaoffshore.org/files/tradestudy-20200508044416.pdf" target="_blank" rel="noopener">Engineering Trade Study, PDF 1.5 MB</a>]
          &nbsp;
          [<a href="http://cascadiaoffshore.org/files/desktop_survey-20200518121105.pdf" target="_blank" rel="noopener">Desktop Survey, PDF 28 MB</a>]
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
            [<a href="http://cascadiaoffshore.org/files/workshop_report-20180710061005.pdf" target="_blank" rel="noopener">Final Report, PDF 13 MB</a>]
            [<a href="http://cascadia.washington.edu/files/master_abstract-20170403075402.pdf" target="_blank" rel="noopener">Abstracts, PDF 33 MB</a>]
            [<a href="http://cascadia.washington.edu/files/master_whitepaper-20170403075446.pdf" target="_blank" rel="noopener">Participant Whitepapers, PDF 13 MB</a>]
          </li>
          <li>
            <strong>Subduction Zone Observatory Workshop</strong> &mdash; Boise, ID, September 29 – October 1, 2016.
            [<a href="https://www.iris.edu/hq/files/workshops/2016/09/szo_16/sz4d.pdf" target="_blank" rel="noopener">Report</a>]
          </li>
          <li>
            <strong>Investigating Cascadia Subduction Zone Geodynamics Through Scientific Ocean Drilling</strong> &mdash; Seattle, WA, April 2015.
            [<a href="http://usoceandiscovery.org/wp-content/uploads/2016/06/Cascadia-Report.pdf" target="_blank" rel="noopener">Report</a>]
          </li>
          <li>
            <strong>Seafloor Geodesy in Cascadia</strong> &mdash; Seattle, WA, June 2012.
            [<a href="http://faculty.washington.edu/wilcock/wordpress/wp-content/uploads/2014/10/SeafloorGeodesyCascadiaReport_ver130203_HighRes.pdf" target="_blank" rel="noopener">Report</a>]
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

# ============================================================
# SITES (overview with site cards)
# ============================================================
SITES_BODY = page_hero(
    "Infrastructure", "Sites",
    "COSZO instruments are installed at sites along the OOI Regional Cabled Array spanning the Cascadia margin. Each site has its own geological setting, instrument complement, and science role.",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', "Sites"]
) + """
<section class="hub-section">
  <div class="container">
    <div class="hub-cards cols-3">
      <a href="hydrate-ridge.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M6 36 L18 18 L26 28 L34 14 L42 36 Z" stroke="currentColor" stroke-width="2" fill="none"/></svg>
        <h3>Hydrate Ridge</h3>
        <p>Accretionary wedge site near the deformation front. Methane hydrate system, shallow seismicity, and frontal thrust deformation.</p>
        <span class="card-link">View site &rarr;</span>
      </a>
      <a href="slope-base.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><path d="M6 36 L20 20 L28 30 L42 12" stroke="currentColor" stroke-width="2" fill="none"/></svg>
        <h3>Slope Base</h3>
        <p>Deep-water site at the base of the continental slope, providing reference seismic and pressure observations seaward of the locked zone.</p>
        <span class="card-link">View site &rarr;</span>
      </a>
      <a href="axial-seamount.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="28" r="14" stroke="currentColor" stroke-width="2" fill="none"/><circle cx="24" cy="28" r="5" fill="#17a2ab"/></svg>
        <h3>Axial Seamount</h3>
        <p>Active submarine volcano on the Juan de Fuca Ridge. Long-running RCA instrumentation and a natural laboratory for inflation/deflation cycles.</p>
        <span class="card-link">View site &rarr;</span>
      </a>
    </div>
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

# ============================================================
# PER-SITE STUBS
# ============================================================
HYDRATE_RIDGE_BODY = page_hero(
    "Sites", "Hydrate Ridge",
    "Accretionary wedge site near the Cascadia deformation front, roughly 80 km offshore Newport, Oregon.",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', '<a href="sites.html">Sites</a>', "Hydrate Ridge"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">Hydrate Ridge sits at the leading edge of the Cascadia accretionary prism. The site combines a shallow methane hydrate system, frontal thrust deformation, and seismicity near the updip limit of the locked zone.</p>
        <p>Detailed instrument list, depth, location, and science role will be added here.</p>
      </article>
    </div>
  </div>
</section>
"""

SLOPE_BASE_BODY = page_hero(
    "Sites", "Slope Base",
    "Deep-water reference site seaward of the locked zone at the base of the continental slope.",
    ['<a href="index.html">Home</a>', '<a href="infrastructure.html">Infrastructure</a>', '<a href="sites.html">Sites</a>', "Slope Base"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">Slope Base provides a deep-water reference for seismic and pressure observations beyond the toe of the deformation front.</p>
        <p>Detailed instrument list, depth, location, and science role will be added here.</p>
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
            [<a href="http://cascadiaoffshore.org/files/workshop_report-20180710061005.pdf" target="_blank" rel="noopener">Workshop Report</a>]
            [<a href="workshop.html">Workshop Homepage</a>]
          </li>
          <li>
            <strong>Subduction Zone Observatory Workshop</strong> &mdash; Boise, ID, September 29 – October 1, 2016.
            [<a href="https://www.iris.edu/hq/files/workshops/2016/09/szo_16/sz4d.pdf" target="_blank" rel="noopener">Workshop Report</a>]
          </li>
          <li>
            <strong>Investigating Cascadia Subduction Zone Geodynamics Through Scientific Ocean Drilling</strong> &mdash; Seattle, WA, April 2015.
            [<a href="http://usoceandiscovery.org/wp-content/uploads/2016/06/Cascadia-Report.pdf" target="_blank" rel="noopener">Workshop Report</a>]
          </li>
          <li>
            <strong>Seafloor Geodesy in Cascadia</strong> &mdash; Seattle, WA, June 2012.
            [<a href="http://faculty.washington.edu/wilcock/wordpress/wp-content/uploads/2014/10/SeafloorGeodesyCascadiaReport_ver130203_HighRes.pdf" target="_blank" rel="noopener">Workshop Report</a>]
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
          <li><a href="http://cascadiaoffshore.org/files/whitepaper_lowres-20200505101921.pdf" target="_blank" rel="noopener">White Paper, low-resolution PDF (8 MB)</a></li>
          <li><a href="http://cascadiaoffshore.org/files/whitepaper_highres-20200505101421.pdf" target="_blank" rel="noopener">White Paper, high-resolution PDF (45 MB)</a></li>
        </ul>

        <h2>Supplementary Documents</h2>
        <ul>
          <li><a href="http://cascadiaoffshore.org/files/tradestudy-20200508044416.pdf" target="_blank" rel="noopener">Engineering Trade Study, PDF (1.5 MB)</a></li>
          <li><a href="http://cascadiaoffshore.org/files/desktop_survey-20200518121105.pdf" target="_blank" rel="noopener">Desktop Survey, PDF (28 MB)</a></li>
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
          <li><strong>Final Workshop Report</strong> &mdash; July 10, 2018. [<a href="http://cascadiaoffshore.org/files/workshop_report-20180710061005.pdf" target="_blank" rel="noopener">PDF, 13 MB</a>]</li>
          <li><strong>Abstracts</strong> &mdash; April 3, 2017. [<a href="http://cascadia.washington.edu/files/master_abstract-20170403075402.pdf" target="_blank" rel="noopener">PDF, 33 MB</a>]</li>
          <li><strong>Whitepapers</strong> &mdash; Participant submissions, April 3, 2017. [<a href="http://cascadia.washington.edu/files/master_whitepaper-20170403075446.pdf" target="_blank" rel="noopener">PDF, 13 MB</a>]</li>
          <li><strong>Workshop Agenda</strong> &mdash; [<a href="http://cascadia.washington.edu/story/Agenda" target="_blank" rel="noopener">Online</a>]</li>
          <li><strong>Attendee List</strong> &mdash; [<a href="http://cascadia.washington.edu/story/Registrants" target="_blank" rel="noopener">Online</a>]</li>
        </ul>

        <h2 id="reference">Reference Materials</h2>
        <ul>
          <li><strong>Comparison Table of Technologies</strong> &mdash; April 3, 2017. [<a href="http://cascadia.washington.edu/files/technologyalternativescomparisonsheet-20170403081232.pdf" target="_blank" rel="noopener">PDF</a>]</li>
          <li><strong>BW Basemap of Cascadia Margin</strong> &mdash; April 1, 2017. [<a href="http://cascadia.washington.edu/files/bwbasemap-11x17-20170401013432.pdf" target="_blank" rel="noopener">PDF, 13 MB</a>]</li>
          <li><strong>UW Campus Map</strong> &mdash; [<a href="http://cascadia.washington.edu/files/uw-campus-map-5-16-20170401021713.pdf" target="_blank" rel="noopener">PDF</a>]</li>
        </ul>

        <h2 id="templates">Network Design Templates</h2>
        <ul>
          <li><a href="http://cascadia.washington.edu/files/ewocconfigurationtemplate-3-31-17-20170401010352.pptx" target="_blank" rel="noopener">PowerPoint Template (11 MB)</a></li>
          <li><a href="http://cascadia.washington.edu/files/ewocnetworkconfigurationtoolhdformat-20170401010544.key" target="_blank" rel="noopener">Keynote Template (8 MB)</a></li>
          <li><a href="http://cascadia.washington.edu/files/ewocconfigurationtemplate-20170401010220.doc" target="_blank" rel="noopener">Word Template (21 MB)</a></li>
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
    ("absolute-seafloor-pressure.html", "Absolute Seafloor Pressure", "Total pressure at the seafloor for tsunami detection and seafloor deformation monitoring.", "Pressure &middot; High-precision"),
    ("data.html", "Differential Seafloor Pressure", "Short-period pressure variations capturing tsunami signals and hydroacoustic waves.", "Pressure &middot; Broadband"),
    ("data.html", "GSSM Calibrated Pressure &amp; Ground Acceleration", "Combined pressure and strong-motion records from geodetic seafloor stations.", "Composite &middot; Calibrated"),
    ("data.html", "SCPR Calibrated Pressure", "Self-calibrating pressure recorder data corrected for instrument drift.", "Pressure &middot; Drift-corrected"),
    ("data.html", "Low-Frequency Acoustic Pressure", "Hydrophone data in the infrasound band for T-phase and cetacean monitoring.", "Acoustic &middot; Infrasound"),
    ("data.html", "Strong-Motion Ground Acceleration", "High-dynamic-range accelerometer data for near-source ground motion during large events.", "Motion &middot; Strong-motion"),
    ("data.html", "Broadband Ground Velocity", "Wideband seismometer velocity records for global to regional earthquake characterization.", "Motion &middot; Broadband"),
    ("data.html", "Short-Period Ground Velocity", "High-frequency seismometer data for local microseismicity and P-wave detection.", "Motion &middot; Short-period"),
    ("data.html", "Sea Water Velocity", "Current meter and ADCP measurements of water velocity through the water column.", "Water &middot; ADCP"),
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
    "Data Products", "Data Products",
    "Nine continuous data streams from the COSZO and RCA sensor suite, covering pressure, ground motion, acoustic, and water velocity measurements. All data are openly available.",
    ['<a href="index.html">Home</a>', "Data Products"]
) + f"""
<section class="data-products">
  <div class="container">
    <div class="section-header">
      <div class="section-header-intro">
        <div class="section-eyebrow">All Products</div>
        <h2 class="section-heading">The full data catalog.</h2>
        <p>Each data product is served as a continuous real-time stream and as archived records, accessible through the OOI data portal.</p>
      </div>
      <a href="https://oceanobservatories.org/data-access/" class="btn-outline" target="_blank" rel="noopener">OOI Data Portal &#8599;</a>
    </div>
    <div class="products-grid">{render_product_cards()}</div>
  </div>
</section>
"""

# ============================================================
# ABSOLUTE SEAFLOOR PRESSURE (example product detail page)
# ============================================================
ASP_BODY = page_hero(
    "Data Products", "Absolute Seafloor Pressure",
    "High-precision total pressure measured at the seafloor. Used for tsunami detection, long-period seafloor deformation monitoring, and as a reference for relative pressure products.",
    ['<a href="index.html">Home</a>', '<a href="data.html">Data Products</a>', "Absolute Seafloor Pressure"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid">
      <aside class="article-sidebar">
        <h4>On This Page</h4>
        <ul>
          <li><a href="#overview" class="active">Overview</a></li>
          <li><a href="#specs">Specifications</a></li>
          <li><a href="#access">Data Access</a></li>
          <li><a href="#citation">Citation</a></li>
        </ul>
      </aside>
      <article class="article-content">
        <p class="lede-para">Absolute Seafloor Pressure (ASP) captures the total hydrostatic pressure at the sensor, combining the static pressure of the overlying water column with tidal, oceanographic, and tectonic signals. With appropriate detiding and ocean-loading correction, it reveals vertical deformation of the seafloor.</p>

        <h2 id="overview">Overview</h2>
        <p>Each ASP sensor records absolute pressure at a sampling rate of 1 Hz with nominal resolution better than 1 mm of water equivalent. Raw records are distributed alongside detided and drift-corrected products. See <a href="data.html">SCPR Calibrated Pressure</a> for the self-calibrating variant of this stream.</p>

        <h2 id="specs">Specifications</h2>
        <table class="specs-table">
          <tbody>
            <tr><td>Sampling Rate</td><td>1 Hz (primary), 10 Hz (tsunami-band)</td></tr>
            <tr><td>Pressure Range</td><td>0 to 10000 dbar</td></tr>
            <tr><td>Resolution</td><td>&lt; 1 mm water equivalent</td></tr>
            <tr><td>Accuracy (absolute)</td><td>0.01 % full scale</td></tr>
            <tr><td>Long-term Drift</td><td>&lt; 2 cm / year (uncalibrated)</td></tr>
            <tr><td>Deployment Depth</td><td>500 to 3000 m</td></tr>
            <tr><td>Telemetry</td><td>Real-time via RCA fiber</td></tr>
          </tbody>
        </table>

        <h2 id="access">Data Access</h2>
        <p>All ASP data are freely available through the OOI data portal. Time-series are accessible via M2M requests, direct download, or the THREDDS data server. For specific sample notebooks and loader code, see the COSZO <a href="https://github.com/">GitHub organization</a>.</p>

        <blockquote>Raw pressure data are released within 24 hours of acquisition. Detided and drift-corrected products are typically available within 7 days.</blockquote>

        <h2 id="citation">Citation</h2>
        <p>When citing COSZO ASP data, please acknowledge both the COSZO project and the originating NSF awards. A recommended citation string is available through the OOI data portal at the time of download.</p>
      </article>
    </div>
  </div>
</section>
"""

# ============================================================
# PEOPLE (hub)
# ============================================================
PEOPLE_BODY = page_hero(
    "People", "People",
    "The scientists, engineers, students, and collaborators working together to build the Cascadia Offshore Subduction Zone Observatory.",
    ['<a href="index.html">Home</a>', "People"]
) + """
<section class="people-feature">
  <div class="container">
    <div class="people-section">
      <h3 class="people-section-title">Leadership &amp; Principal Investigators</h3>
      <div class="people-grid">"""

# Generate person cards programmatically to keep the script readable
_PEOPLE = [
    ("Lead PI", "Principal Investigator", "UW &middot; School of Oceanography", "#1e7cab"),
    ("Co-PI &middot; Seismology", "Co-Principal Investigator", "UW &middot; Earth &amp; Space Sciences", "#06223a"),
    ("Co-PI &middot; Engineering", "Co-Principal Investigator", "UW &middot; Applied Physics Lab", "#f5a623"),
    ("Co-PI &middot; Geodesy", "Co-Principal Investigator", "Scripps &middot; SIO", "#17a2ab"),
]
for role, name, aff, color in _PEOPLE:
    PEOPLE_BODY += f"""
        <a href="#" class="person-card">
          <div class="person-portrait"><svg viewBox="0 0 300 300"><rect width="300" height="300" fill="#0a2f4e"/><circle cx="150" cy="110" r="50" fill="{color}"/><path d="M60 300 Q 80 200, 150 200 Q 220 200, 240 300 Z" fill="{color}"/></svg></div>
          <div class="person-name">{name}</div>
          <div class="person-role">{role}</div>
          <div class="person-affiliation">{aff}</div>
        </a>"""

PEOPLE_BODY += """
      </div>
    </div>
    <div class="people-section">
      <h3 class="people-section-title">Research Team</h3>
      <div class="people-grid">"""
for i in range(4):
    PEOPLE_BODY += f"""
        <a href="#" class="person-card">
          <div class="person-portrait"><svg viewBox="0 0 300 300"><rect width="300" height="300" fill="#155e8a"/><circle cx="150" cy="110" r="50" fill="#06223a"/><path d="M60 300 Q 80 200, 150 200 Q 220 200, 240 300 Z" fill="#06223a"/></svg></div>
          <div class="person-name">Research Scientist {i+1}</div>
          <div class="person-role">Scientist</div>
          <div class="person-affiliation">UW &middot; School of Oceanography</div>
        </a>"""

PEOPLE_BODY += """
      </div>
    </div>
    <div class="people-section">
      <h3 class="people-section-title">Postdoctoral Scholars &amp; Graduate Students</h3>
      <div class="people-grid">"""
for i in range(4):
    PEOPLE_BODY += f"""
        <a href="#" class="person-card">
          <div class="person-portrait"><svg viewBox="0 0 300 300"><rect width="300" height="300" fill="#0f3e66"/><circle cx="150" cy="110" r="50" fill="#17a2ab"/><path d="M60 300 Q 80 200, 150 200 Q 220 200, 240 300 Z" fill="#17a2ab"/></svg></div>
          <div class="person-name">Researcher Name</div>
          <div class="person-role">{"Postdoctoral Scholar" if i < 2 else "Graduate Student"}</div>
          <div class="person-affiliation">UW &middot; School of Oceanography</div>
        </a>"""

PEOPLE_BODY += """
      </div>
    </div>
    <div class="people-section">
      <h3 class="people-section-title">Collaborators &amp; Advisory Board</h3>
      <div class="people-grid">"""
for i in range(4):
    PEOPLE_BODY += f"""
        <a href="#" class="person-card">
          <div class="person-portrait"><svg viewBox="0 0 300 300"><rect width="300" height="300" fill="#06223a"/><circle cx="150" cy="110" r="50" fill="#3cbfc5"/><path d="M60 300 Q 80 200, 150 200 Q 220 200, 240 300 Z" fill="#3cbfc5"/></svg></div>
          <div class="person-name">Collaborator Name</div>
          <div class="person-role">{"Advisory Board" if i < 2 else "External Collaborator"}</div>
          <div class="person-affiliation">Partner Institution</div>
        </a>"""

PEOPLE_BODY += """
      </div>
    </div>
  </div>
</section>
"""

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
      <a href="outreach.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><rect x="10" y="8" width="28" height="32" rx="2" stroke="currentColor" stroke-width="2"/><path d="M16 16 H32 M16 22 H32 M16 28 H26" stroke="#17a2ab" stroke-width="2"/></svg>
        <h3>Graduate Students</h3>
        <p>Opportunities for graduate students to engage with COSZO data, participate in cruises, and pursue MS and PhD research at partner institutions.</p>
        <span class="card-link">Graduate opportunities</span>
      </a>
      <a href="early-career-workshop.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="24" cy="24" r="18" stroke="currentColor" stroke-width="2"/><circle cx="24" cy="24" r="4" fill="#f5a623"/><circle cx="24" cy="24" r="10" fill="none" stroke="#f5a623" opacity="0.6"/></svg>
        <h3>2027 Early Career Workshop</h3>
        <p>A multi-day workshop bringing together early-career scientists working on subduction zone science and seafloor observation.</p>
        <span class="card-link">Workshop info</span>
      </a>
      <a href="meetings.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><rect x="8" y="10" width="32" height="28" rx="2" stroke="currentColor" stroke-width="2"/><line x1="8" y1="18" x2="40" y2="18" stroke="currentColor" stroke-width="2"/><circle cx="14" cy="14" r="1.5" fill="currentColor"/><circle cx="20" cy="14" r="1.5" fill="currentColor"/></svg>
        <h3>Meetings</h3>
        <p>Science team meetings, town halls, community updates, and conference sessions organized or co-sponsored by COSZO.</p>
        <span class="card-link">Meeting calendar</span>
      </a>
      <a href="partners.html" class="hub-card">
        <svg class="hub-card-icon" viewBox="0 0 48 48" fill="none"><circle cx="16" cy="24" r="10" stroke="currentColor" stroke-width="2"/><circle cx="32" cy="24" r="10" stroke="#17a2ab" stroke-width="2"/></svg>
        <h3>Partners</h3>
        <p>Institutional partners, affiliated networks, and scientific collaborations that make COSZO possible.</p>
        <span class="card-link">Our partners</span>
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
        <p class="lede-para">The COSZO REU program is a paid 10-week summer research experience, hosted at the University of Washington, that pairs undergraduate students with COSZO scientists to work on a focused research project tied to the observatory's mission.</p>

        <h2>Program structure</h2>
        <p>Students arrive at the University of Washington in mid-June and spend the summer working on a research project mentored by a COSZO scientist. Each student is also paired with a peer mentor from the graduate student or postdoctoral cohort. The program culminates in a symposium where students present their work to the full COSZO community.</p>
        <ul>
          <li>10 weeks, mid-June through late August</li>
          <li>Stipend, housing, and travel provided</li>
          <li>Field trip to sea (when cruise schedules align)</li>
          <li>Weekly professional development seminars</li>
          <li>End-of-summer research symposium</li>
        </ul>

        <h2>Eligibility</h2>
        <p>Applicants must be current U.S. undergraduates and must not yet have earned a bachelor's degree at the start of the program. Students from backgrounds historically underrepresented in the ocean and earth sciences are strongly encouraged to apply.</p>

        <h2>How to apply</h2>
        <p>Applications for the 2027 REU cohort will open October 15, 2026 and close January 15, 2027. The application includes a personal statement, unofficial transcript, and two letters of recommendation. Decisions are made by mid-March.</p>
        <blockquote>The COSZO REU does not require prior research experience. We are looking for students curious about the ocean, the solid Earth, and the instruments we use to study both.</blockquote>

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
        <p><strong>Dates:</strong> June 14 to 16, 2027<br>
        <strong>Location:</strong> University of Washington, Seattle<br>
        <strong>Format:</strong> In-person with limited remote participation</p>

        <h2>Who should attend</h2>
        <p>Graduate students, postdoctoral researchers, and faculty within five years of their first appointment are eligible. We welcome applicants working on any of the following:</p>
        <ul>
          <li>Subduction zone mechanics and seismicity</li>
          <li>Seafloor geodesy and ambient-noise monitoring</li>
          <li>Tsunami generation and propagation</li>
          <li>Earthquake early warning and rapid response</li>
          <li>Instrumentation and cyberinfrastructure for marine geophysics</li>
        </ul>

        <h2>Registration</h2>
        <p>Registration opens November 2026. Travel support will be available for participants without other funding, with priority given to applicants from U.S. minority-serving institutions.</p>

        <h2>Agenda</h2>
        <table class="specs-table">
          <thead><tr><th>Day</th><th>Program</th></tr></thead>
          <tbody>
            <tr><td>Day 1</td><td>Keynote, science talks, welcome reception</td></tr>
            <tr><td>Day 2</td><td>Working groups, poster session, RCA tour at APL</td></tr>
            <tr><td>Day 3</td><td>Hands-on data analysis, career panel, closing</td></tr>
          </tbody>
        </table>

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
    "The 2019 community study that quantified the benefit of seafloor observations for Cascadia earthquake early warning and tsunami detection.",
    ['<a href="index.html">Home</a>', '<a href="early-warning.html">Early Warning</a>', "2019 Feasibility Study"]
) + """
<section class="article">
  <div class="container">
    <div class="article-grid narrow">
      <article class="article-content">
        <p class="lede-para">In 2019, a community study quantified the earthquake early warning (EEW) and tsunami detection benefits of adding geophysical instrumentation to the OOI Regional Cabled Array. The results motivated the proposal that became COSZO.</p>

        <h2>Scope of the study</h2>
        <p>The study simulated a suite of plausible Cascadia rupture scenarios and evaluated the timing, location accuracy, and magnitude-estimation improvements that would result from adding seafloor seismic and pressure sensors to the existing onshore ShakeAlert network.</p>

        <h2>Key findings</h2>
        <ul>
          <li>Offshore P-wave detection reduces EEW alert latency by 10 to 20 seconds for offshore epicenters.</li>
          <li>Seafloor pressure observations confirm tsunami source characteristics within two to three minutes of rupture.</li>
          <li>Adding modest seafloor instrumentation produced the majority of the benefit; additional instruments provide diminishing returns past the first dozen stations.</li>
        </ul>

        <h2>From study to facility</h2>
        <p>The feasibility study's instrument count, spatial distribution, and sampling requirements informed the COSZO instrument design. Where the study recommended a minimum configuration, COSZO implements a scientifically-motivated superset that also supports the broader science objectives outlined in <a href="scientific-objectives.html">our objectives page</a>.</p>

        <h2>Download</h2>
        <p>The full 2019 Feasibility Study report is available as a PDF. For a pre-print or supplementary materials, <a href="contact.html">contact the project office</a>.</p>
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
    "For project inquiries, science collaboration, press, data access questions, or REU information.",
    ['<a href="index.html">Home</a>', "Contact"]
) + """
<section class="article">
  <div class="container">
    <div class="form-grid">
      <form>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name</label>
            <input id="name" type="text" placeholder="Your name">
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" type="email" placeholder="you@institution.edu">
          </div>
        </div>
        <div class="form-group">
          <label for="affiliation">Affiliation</label>
          <input id="affiliation" type="text" placeholder="Your institution or organization">
        </div>
        <div class="form-group">
          <label for="topic">Topic</label>
          <select id="topic">
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
          <textarea id="message" placeholder="Tell us what we can help with..."></textarea>
        </div>
        <button type="button" class="btn-primary">Send message
          <svg class="arrow" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8 H13 M9 4 L13 8 L9 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
      </form>
      <div>
        <div class="form-sidebar-block">
          <h3>Project office</h3>
          <address>
            COSZO Project Office<br>
            School of Oceanography<br>
            University of Washington<br>
            Seattle, WA 98195
          </address>
        </div>
        <div class="form-sidebar-block">
          <h3>Data questions</h3>
          <p>Data are distributed through the OOI cyberinfrastructure. For data questions, start with the <a href="https://oceanobservatories.org/helpdesk/">OOI Helpdesk</a>, then contact us if you need COSZO-specific help.</p>
        </div>
        <div class="form-sidebar-block">
          <h3>Press</h3>
          <p>For press inquiries, please email the UW College of the Environment communications team.</p>
        </div>
      </div>
    </div>
  </div>
</section>
"""

# ============================================================
# REGISTER ALL PAGES AND WRITE THEM
# ============================================================
PAGES = [
    ("index.html",                              "COSZO — Cascadia Offshore Subduction Zone Observatory",  "home",          INDEX_BODY),
    ("science.html",                            "Science · COSZO",                                         "science",       SCIENCE_BODY),
    ("publications.html",                       "Publications · COSZO",                                    "science",       PUBLICATIONS_BODY),
    ("motivation.html",                         "Motivation · COSZO",                                      "science",       MOTIVATION_BODY),
    ("scientific-objectives.html",              "Scientific Objectives · COSZO",                           "science",       SCIOBJ_BODY),
    ("infrastructure.html",                     "Infrastructure · COSZO",                                  "infrastructure",INFRASTRUCTURE_BODY),
    ("sites.html",                              "Sites · COSZO",                                           "infrastructure",SITES_BODY),
    ("hydrate-ridge.html",                      "Hydrate Ridge · COSZO",                                   "infrastructure",HYDRATE_RIDGE_BODY),
    ("slope-base.html",                         "Slope Base · COSZO",                                      "infrastructure",SLOPE_BASE_BODY),
    ("axial-seamount.html",                     "Axial Seamount · COSZO",                                  "infrastructure",AXIAL_SEAMOUNT_BODY),
    ("existing-instruments.html",               "Existing Instruments · COSZO",                            "infrastructure",EXISTING_BODY),
    ("coszo-instruments.html",                  "COSZO Instruments · COSZO",                               "infrastructure",COSZO_INSTR_BODY),
    ("future-opportunities.html",               "Future Opportunities · COSZO",                            "infrastructure",FUTURE_BODY),
    ("data.html",                               "Data · COSZO",                                            "data",          DATAPRODUCTS_BODY),
    ("absolute-seafloor-pressure.html",         "Absolute Seafloor Pressure · COSZO",                      "data",          ASP_BODY),
    ("people.html",                             "People · COSZO",                                          "people",        PEOPLE_BODY),
    ("outreach.html",                           "Outreach · COSZO",                                        "outreach",      OUTREACH_BODY),
    ("research-experiences-for-undergraduates.html", "Research Experiences for Undergraduates · COSZO",    "outreach",      REU_BODY),
    ("early-career-workshop.html",              "2027 Early Career Workshop · COSZO",                      "outreach",      WORKSHOP_BODY),
    ("meetings.html",                           "Meetings · COSZO",                                        "outreach",      MEETINGS_BODY),
    ("partners.html",                           "Partners · COSZO",                                        "outreach",      PARTNERS_BODY),
    ("early-warning.html",                      "Early Warning · COSZO",                                   "ew",            EW_BODY),
    ("feasibility-study.html",                  "2019 Feasibility Study · COSZO",                          "ew",            FEAS_BODY),
    ("contact.html",                            "Contact · COSZO",                                         "",              CONTACT_BODY),
    ("archives.html",                           "Archives · COSZO",                                        "",              ARCHIVES_BODY),
    ("resources.html",                          "Resources · COSZO",                                       "",              RESOURCES_BODY),
    ("white-paper.html",                        "White Paper · COSZO",                                     "",              WHITE_PAPER_BODY),
    ("workshop-documents.html",                 "Workshop Documents · COSZO",                              "",              WORKSHOP_DOCUMENTS_BODY),
    ("workshop.html",                           "Workshop · COSZO",                                        "",              WORKSHOP_BODY),
]

def main():
    written = []
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
        print(f"  wrote {filename}")
    print(f"\nGenerated {len(written)} pages in {OUT_DIR}")

if __name__ == "__main__":
    main()
