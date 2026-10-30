INK = '#0e0e0e'
PANEL = '#161616'
PAPER = '#f4f4f5'
MUTED = '#8f8f96'
KLAP = '#d9d4cb'

LOGO = 'M64 36 L200 96 L104 128 L200 160 L64 220 Z'
KLAP_SIDE = 'M91.34 65.82 L97.16 62.47 L111.9 70.98 L101.55 76.95 Z M70.01 78.14 L91.34 65.82 L101.55 76.95 L70.01 95.16 Z M70.44 220.85 L70.01 220.6 L70.01 109.99 L84.75 127.01 L84.75 188.42 Z M70.01 109.99 L70.01 95.16 L84.75 86.65 L84.75 127.01 Z M84.75 229.11 L70.44 220.85 L73.2 214.58 L84.75 201.25 Z M73.2 214.58 L84.75 188.42 L84.75 201.25 Z M119.15 66.79 L129.23 43.95 L155.15 28.98 L145.06 51.83 Z M155.15 28.98 L163.78 24 L178.52 32.51 L145.06 51.83 Z M121.9 65.2 L145.06 51.83 L123.43 100.82 L121.9 99.14 Z'
KLAP_FACE = 'M89.75 89.53 L116.9 73.86 L116.9 216.33 L89.75 232 Z M116.9 128 L148.97 55.34 L183.52 35.4 L141.57 128 L116.9 156.49 Z M141.57 128 L185.99 176.44 L151.44 196.38 L116.9 156.49 Z'

DEFS = f'''<defs>
<pattern id="dots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="11" cy="11" r="1.2" fill="{PAPER}" opacity="0.12"/></pattern>
<pattern id="hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="8" stroke="{PAPER}" stroke-width="2" opacity="0.35"/></pattern>
<filter id="grain" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="3" seed="7" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0"/></filter>
<filter id="sh" x="-30%" y="-30%" width="160%" height="170%"><feDropShadow dx="0" dy="14" stdDeviation="16" flood-color="#000" flood-opacity="0.6"/></filter>
<filter id="glow" x="-300%" y="-300%" width="700%" height="700%"><feGaussianBlur stdDeviation="4" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<radialGradient id="lift" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="{PAPER}" stop-opacity="0.07"/><stop offset="100%" stop-color="{PAPER}" stop-opacity="0"/></radialGradient>
<radialGradient id="vig" cx="50%" cy="50%" r="75%"><stop offset="65%" stop-color="#000" stop-opacity="0"/><stop offset="100%" stop-color="#000" stop-opacity="0.35"/></radialGradient>
<linearGradient id="hairline" x1="0" x2="1"><stop offset="0%" stop-color="#fff" stop-opacity="0"/><stop offset="50%" stop-color="#fff" stop-opacity="0.3"/><stop offset="100%" stop-color="#fff" stop-opacity="0"/></linearGradient>
<marker id="arr" viewBox="0 0 12 12" refX="10" refY="6" markerWidth="12" markerHeight="12" markerUnits="userSpaceOnUse" orient="auto-start-reverse"><path d="M2 1.5 L10 6 L2 10.5" fill="none" stroke="{PAPER}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></marker>
</defs>'''


def logo(x, y, h, fill=PAPER):
    s = h / 184
    return f'<g transform="translate({x} {y}) scale({s}) translate(-64 -36)"><path fill="{fill}" d="{LOGO}"/></g>'


def klap(x, y, h, fill=KLAP):
    s = h / 208
    return f'<g transform="translate({x} {y}) scale({s}) translate(-70 -24)" fill="{fill}"><path d="{KLAP_SIDE}"/><path d="{KLAP_FACE}"/></g>'


def t(x, y, s, size=14, anchor='start', weight=500, fill=PAPER, mono=True, op=1, extra=''):
    fam = "'Geist Mono'" if mono else "'Geist'"
    return f'<text x="{x}" y="{y}" font-family="{fam}" font-size="{size}" font-weight="{weight}" text-anchor="{anchor}" fill="{fill}" opacity="{op}" {extra}>{s}</text>'


def ln(x1, y1, x2, y2, sw=2, dash=None, arrow=False, op=1, color=PAPER):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    a = ' marker-end="url(#arr)"' if arrow else ''
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{sw}" stroke-linecap="round"{d}{a} opacity="{op}"/>'


def p(d, sw=2, fill='none', dash=None, arrow=False, op=1, color=PAPER):
    ds = f' stroke-dasharray="{dash}"' if dash else ''
    a = ' marker-end="url(#arr)"' if arrow else ''
    return f'<path d="{d}" fill="{fill}" stroke="{color}" stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round"{ds}{a} opacity="{op}"/>'


def panel(x, y, w, h, r=14, fill=PANEL, sop=0.16, dash=None, shadow=True):
    ds = f' stroke-dasharray="{dash}"' if dash else ''
    f = ' filter="url(#sh)"' if shadow else ''
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="#fff" stroke-opacity="{sop}" stroke-width="1.5"{ds}{f}/>'


def circ(cx, cy, r, fill='none', sw=2, dash=None, color=PAPER, op=1, sop=1):
    ds = f' stroke-dasharray="{dash}"' if dash else ''
    return f'<circle cx="{cx}" cy="{cy}" r="{r}" fill="{fill}" stroke="{color}" stroke-opacity="{sop}" stroke-width="{sw}"{ds} opacity="{op}"/>'


def check(x, y, s=1, sw=3, color=PAPER):
    return p(f'M{x} {y} l{7*s} {7*s} l{14*s} {-15*s}', sw=sw, color=color)


def bar(x, y, w, h=8, op=0.2, fill=PAPER):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{h/2}" fill="{fill}" opacity="{op}"/>'


def pill(cx, cy, w, h, label, filled=False, size=15, mono=True, dash=None):
    fill = PAPER if filled else PANEL
    color = INK if filled else PAPER
    return panel(cx - w / 2, cy - h / 2, w, h, r=h / 2, fill=fill, sop=0 if filled else 0.16, dash=dash) + t(cx, cy + size * 0.36, label, size=size, anchor='middle', fill=color, weight=600, mono=mono)
