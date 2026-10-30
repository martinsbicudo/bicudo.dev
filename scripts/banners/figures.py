from svg import INK, KLAP, MUTED, PANEL, PAPER, bar, check, circ, klap, ln, logo, p, panel, pill, t


def fig_hello_world():
    x, y, w, h = 340, 172, 520, 290
    out = panel(x, y, w, h, r=16)
    out += ln(x, y + 44, x + w, y + 44, sw=1.5, op=0.16)
    for i in range(3):
        out += circ(x + 26 + i * 20, y + 22, 5.5, fill=PAPER if i == 0 else 'none', sw=1.5, sop=0.5)
    out += t(x + w / 2, y + 27, '~/bicudo.dev', size=12, anchor='middle', fill=MUTED)
    rows = [
        ('$', 'whoami', MUTED),
        ('', 'victor bicudo · builder', PAPER),
        ('$', 'echo "hello, world"', MUTED),
        ('', 'hello, world', PAPER),
    ]
    for i, (prompt, cmd, color) in enumerate(rows):
        ry = y + 96 + i * 42
        if prompt:
            out += t(x + 32, ry, prompt, size=18, fill=MUTED)
        out += t(x + 56, ry, cmd, size=18, fill=color, weight=600 if color == PAPER else 500)
    out += f'<rect x="{x + 204}" y="{y + 207}" width="12" height="24" fill="{PAPER}" filter="url(#glow)"/>'
    return out, 'From lost to building products'


def keycap(x, y, label, filled=False):
    fill = PAPER if filled else PANEL
    color = INK if filled else PAPER
    out = panel(x, y, 64, 64, r=12, fill=fill, sop=0 if filled else 0.18)
    out += f'<rect x="{x + 7}" y="{y + 5}" width="50" height="46" rx="9" fill="none" stroke="{INK if filled else "#fff"}" stroke-opacity="{0.25 if filled else 0.1}" stroke-width="1.5"/>'
    out += t(x + 32, y + 35, label, size=20, anchor='middle', fill=color, weight=600)
    return out


def fig_developer_of_the_future():
    out = ''
    rows = [
        (196, ['Q', 'W', 'E', 'R', 'T', 'Y'], 'typing · 1995'),
        (290, ['{', '}', '(', ')', ';', '=&gt;'], 'coding · 2031'),
    ]
    for y, keys, label in rows:
        for i, key in enumerate(keys):
            out += keycap(300 + i * 78, y, key)
        out += ln(790, y + 32, 830, y + 32, sw=1.5, op=0.5)
        out += t(844, y + 37, label, size=15, fill=MUTED)
    out += f'<rect x="456" y="384" width="220" height="64" rx="12" fill="{PAPER}" filter="url(#sh)"/>'
    out += t(566, 423, 'judgment', size=20, anchor='middle', fill=INK, weight=700)
    out += ln(790, 416, 830, 416, sw=1.5, op=0.5)
    out += t(844, 421, 'the key that matters', size=15, fill=PAPER, weight=600)
    return out, 'Code is becoming a commodity'


def fig_entrepreneurs():
    x, y, w = 250, 168, 500
    rows = [('support tickets', '6h', '1h'), ('landing page', '3d', '4h'), ('first draft', '2d', '2h'), ('market research', '1w', '1d')]
    out = panel(x, y, w, 70 + len(rows) * 48, r=14)
    cols = [x + 28, x + 300, x + 410]
    for c, label in zip(cols, ['task', 'before', 'with AI']):
        out += t(c, y + 40, label.upper(), size=11, fill=MUTED, weight=600, extra='letter-spacing="1.5"')
    out += ln(x, y + 58, x + w, y + 58, sw=1.5, op=0.14)
    for i, (task, before, after) in enumerate(rows):
        ry = y + 92 + i * 48
        out += t(cols[0], ry, task, size=16, mono=False)
        out += t(cols[1], ry, before, size=16, fill=MUTED)
        out += t(cols[2], ry, after, size=16, weight=700)
        if i < len(rows) - 1:
            out += ln(x + 20, ry + 20, x + w - 20, ry + 20, sw=1, op=0.08)
    bx, by = 820, 212
    out += p(f'M{bx} {by} h170 a16 16 0 0 1 16 16 v40 a16 16 0 0 1 -16 16 h-130 l-22 20 v-20 h-18 a16 16 0 0 1 -16 -16 v-40 a16 16 0 0 1 16 -16 Z', sw=1.5, dash='4 6', op=0.5)
    out += t(bx + 77, by + 41, 'is AI good?', size=16, anchor='middle', fill=MUTED)
    out += ln(bx - 6, by + 36, bx + 160, by + 36, sw=2, op=0.6)
    out += t(bx + 77, by + 150, 'not a column', size=14, anchor='middle', fill=MUTED)
    out += t(bx + 77, by + 172, 'in the spreadsheet', size=14, anchor='middle', fill=MUTED)
    return out, 'They just have a spreadsheet'


def fig_ai_job_apocalypse():
    x0, y0, x1, y1 = 300, 168, 880, 452
    out = ln(x0, y1, x1, y1, sw=1.5, op=0.4) + ln(x0, y0, x0, y1, sw=1.5, op=0.4)
    out += t(x1, y1 + 30, 'time →', size=13, anchor='end', fill=MUTED)
    out += p(f'M{x0 + 10} {y0 + 30} C{x0 + 200} {y0 + 50} {x0 + 300} {y1 - 70} {x1 - 20} {y1 - 30}', sw=2.5, dash='6 8', op=0.6)
    out += p(f'M{x0 + 10} {y1 - 30} C{x0 + 220} {y1 - 40} {x0 + 340} {y0 + 90} {x1 - 20} {y0 + 20}', sw=3.5)
    cx, cy = 590, 312
    out += circ(cx, cy, 7, fill=PAPER, sw=0) + circ(cx, cy, 16, sw=1.5, op=0.4)
    out += ln(x1 + 10, y0 + 20, x1 + 40, y0 + 20, sw=1.5, op=0.5) + t(x1 + 52, y0 + 25, 'demand', size=15, weight=600)
    out += ln(x1 + 10, y1 - 30, x1 + 40, y1 - 30, sw=1.5, op=0.5) + t(x1 + 52, y1 - 25, 'cost per task', size=15, fill=MUTED)
    out += t(cx + 26, cy + 44, "Jevons' paradox", size=13, fill=MUTED)
    return out, 'Cheaper work creates more of it'


def fig_fail_fast():
    steps = ['Discovery', 'Spec', '/docs', 'Tests', 'Code', 'E2E']
    gap, w, y = 158, 132, 300
    x0 = 600 - gap * (len(steps) - 1) / 2
    out = ''
    for i, s in enumerate(steps):
        cx = x0 + i * gap
        if i:
            out += ln(cx - gap + w / 2 + 4, y, cx - w / 2 - 6, y, sw=2, arrow=True, op=0.7)
            rx = cx - gap / 2
            out += circ(rx, y - 54, 13, fill=PANEL, sw=1.5, sop=0.5) + check(rx - 7, y - 54, 0.62, sw=2.2)
        out += pill(cx, y, w, 50, s, filled=s == 'Spec', size=15)
    out += t(600, y - 92, 'review at every step', size=13, anchor='middle', fill=MUTED)
    code, spec = x0 + 4 * gap, x0 + gap
    out += p(f'M{code} {y + 28} C{code} {y + 130} {spec} {y + 130} {spec} {y + 34}', sw=2, dash='5 7', arrow=True, op=0.8)
    out += t((code + spec) / 2, y + 128, 'fail fast · back to the spec', size=14, anchor='middle', fill=PAPER, weight=600)
    return out, "Don't start with the code"


def fig_klap():
    out = ''
    out += f'<circle cx="840" cy="330" r="112" fill="{PANEL}" stroke="#fff" stroke-opacity="0.16" stroke-width="1.5" filter="url(#sh)"/>'
    out += t(840, 272, 'merchant wallet', size=15, weight=600, anchor='middle')
    out += f'<circle cx="808" cy="336" r="28" fill="{KLAP}"/><circle cx="808" cy="336" r="19" fill="none" stroke="{INK}" stroke-opacity="0.35" stroke-width="1.5"/>'
    for cx, cy in [(868, 310), (864, 368)]:
        out += f'<circle cx="{cx}" cy="{cy}" r="23" fill="none" stroke="{PAPER}" stroke-opacity="0.45" stroke-width="1.5"/><circle cx="{cx}" cy="{cy}" r="15" fill="none" stroke="{PAPER}" stroke-opacity="0.25" stroke-width="1.5"/>'
    out += f'<circle cx="400" cy="330" r="46" fill="{PANEL}" stroke="#fff" stroke-opacity="0.16" stroke-width="1.5"/>'
    out += t(400, 335, 'payer', size=15, weight=600, anchor='middle')
    out += ln(446, 330, 720, 330, sw=2.5, arrow=True)
    out += f'<circle cx="583" cy="330" r="5" fill="{PAPER}" filter="url(#glow)"/>'
    out += t(583, 362, 'USDC · direct', size=13, fill=MUTED, anchor='middle')
    out += ln(583, 236, 583, 316, sw=1.5, dash='3 6', op=0.45)
    out += panel(493, 160, 180, 76, r=14)
    out += klap(515, 177, 42)
    out += t(560, 194, 'Klap', size=18, weight=700, mono=False)
    out += t(560, 217, 'observes', size=13, fill=MUTED)
    out += t(583, 430, 'never holds the funds', size=14, fill=PAPER, weight=600, anchor='middle')
    return out, 'Payments go straight to the merchant'


def fig_klap_lessons():
    states = [('created', 250), ('pending', 455), ('confirming', 660), ('paid', 865)]
    y = 270
    out = t(150, y - 70, 'charge.status', size=14, fill=MUTED)
    out += klap(150, y - 120, 30)
    for i, (s, cx) in enumerate(states):
        if i:
            out += ln(states[i - 1][1] + 72, y, cx - 78, y, sw=2, arrow=True, op=0.7)
        out += pill(cx, y, 140, 50, s, filled=s == 'paid', size=15)
    out += p(f'M455 {y + 26} V{y + 92}', sw=1.5, dash='4 6', arrow=True, op=0.6)
    out += pill(455, y + 120, 140, 46, 'expired', size=14, dash='4 5')
    out += p(f'M660 {y - 26} C660 {y - 80} 600 {y - 80} 600 {y - 34}', sw=1.5, arrow=True, op=0.5)
    out += t(632, y - 74, 'reorg', size=12, fill=MUTED, anchor='middle')
    wx, wy = 690, y + 82
    out += panel(wx, wy, 300, 92, r=14)
    out += t(wx + 22, wy + 32, 'webhook evt_8f2c', size=14, weight=600)
    out += t(wx + 22, wy + 56, 'delivered ×2', size=13, fill=MUTED)
    out += t(wx + 22, wy + 76, 'applied ×1', size=13, weight=600)
    out += circ(wx + 262, wy + 46, 16, fill=PAPER, sw=0) + check(wx + 254, wy + 46, 0.7, sw=2.6, color=INK)
    return out, 'The state machine is where bugs hide'


def fig_home():
    out = ''
    cards = [(720, 130, -6, 0.45), (760, 155, -2, 0.7), (800, 180, 3, 1)]
    for i, (x, y, rot, op) in enumerate(cards):
        g = panel(0, 0, 280, 330, r=16, shadow=False)
        g += f'<rect x="16" y="16" width="248" height="130" rx="10" fill="{INK}" stroke="#fff" stroke-opacity="0.08"/>'
        g += f'<rect x="16" y="16" width="248" height="130" rx="10" fill="url(#dots)"/>'
        if i == 2:
            g += logo(121, 50, 62)
            g += f'<rect x="16" y="166" width="54" height="22" rx="11" fill="{PAPER}"/>'
            g += t(43, 181, 'blog', size=11, weight=600, fill=INK, anchor='middle')
        g += bar(16, 206, 220, h=12, op=0.75 if i == 2 else 0.3)
        g += bar(16, 228, 170, h=12, op=0.75 if i == 2 else 0.3)
        g += bar(16, 262, 240, op=0.18)
        g += bar(16, 278, 200, op=0.18)
        g += bar(16, 304, 90, op=0.28)
        out += f'<g transform="translate({x} {y}) rotate({rot} 140 165)" opacity="{op}" filter="url(#sh)">{g}</g>'
    return out, 'Notes on building products'


FIGS = {
    'hello-world': fig_hello_world,
    'developer-of-the-future': fig_developer_of_the_future,
    'entrepreneurs-dont-care-about-your-ai-opinion': fig_entrepreneurs,
    'ai-job-apocalypse': fig_ai_job_apocalypse,
    'fail-fast-ai-workflow': fig_fail_fast,
    'klappay': fig_klap,
    'klappay-non-custodial-lessons': fig_klap_lessons,
}
