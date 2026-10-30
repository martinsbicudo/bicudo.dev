import html
import os
import re
import sys

from chrome import ROOT, render
from figures import FIGS, fig_home
from svg import DEFS, INK, MUTED, PAPER, logo, t

COVER_W, COVER_H = 1200, 634
SHARE_W, SHARE_H = 1200, 630
HOME_HEADLINE = [('Frontend engineer', False), ('&amp; co-founder,', False), ('building Klap', True)]


def frame(w, h, body, caption, footer=True):
    url = t(w - 84, h - 57, 'bicudo.dev', size=14, fill=MUTED, anchor='end') if footer else ''
    return f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" width="{w}" height="{h}">
{DEFS}
<rect width="{w}" height="{h}" fill="{INK}"/>
<rect width="{w}" height="{h}" fill="url(#dots)"/>
<rect width="{w}" height="{h}" fill="url(#lift)"/>
<rect x="0" y="0" width="{w}" height="1.5" fill="url(#hairline)"/>
{body}
{logo(84, 46, 34)}
<line x1="84" y1="{h - 62}" x2="120" y2="{h - 62}" stroke="{PAPER}" stroke-width="2"/>
{t(132, h - 57, caption, size=14, weight=600)}
{url}
<rect width="{w}" height="{h}" fill="url(#vig)"/>
<rect width="{w}" height="{h}" filter="url(#grain)" opacity="0.06"/>
</svg>'''


def wrap(title, limit):
    lines, line = [], ''
    for word in title.split():
        if line and len(line) + 1 + len(word) > limit:
            lines.append(line)
            line = word
        else:
            line = f'{line} {word}'.strip()
    return lines + [line]


def headline(lines, y=None):
    size = 46 if len(lines) <= 3 else 38
    if y is None:
        y = SHARE_H / 2 + size * 0.35 - (len(lines) - 1) * size * 1.12 / 2
    out = ''
    for i, (txt, em) in enumerate(lines):
        style = 'font-style="italic"' if em else ''
        out += t(84, y + i * size * 1.12, txt.upper(), size=size, weight=800 if em else 400, mono=False, extra=f'letter-spacing="-0.5" {style}')
    return out


def share_body(fig, lines):
    body, _ = fig()
    s = 0.52
    return f'<g transform="translate({1130 - 1060 * s} {SHARE_H / 2 - 310 * s}) scale({s})">{body}</g>' + headline(lines)


def post_title(slug):
    with open(os.path.join(ROOT, 'posts', f'{slug}.mdx')) as f:
        match = re.search(r'^title:\s*["\'](.*)["\']\s*$', f.read(), re.M)
    return match.group(1).replace("''", "'")


def build(slug):
    fig = FIGS[slug]
    body, caption = fig()
    render(frame(COVER_W, COVER_H, body, caption, footer=False), COVER_W, COVER_H,
           os.path.join(ROOT, 'public', 'images', 'blog', f'{slug}.webp'), (1725, 912), 'WEBP', 82)
    lines = wrap(html.escape(post_title(slug)), 22)
    emphasis = [(line, i == len(lines) - 1) for i, line in enumerate(lines)]
    render(frame(SHARE_W, SHARE_H, share_body(fig, emphasis), caption), SHARE_W, SHARE_H,
           os.path.join(ROOT, 'public', 'images', 'share', f'{slug}.jpg'), (SHARE_W, SHARE_H), 'JPEG', 88)


def build_home():
    body, caption = fig_home()
    render(frame(SHARE_W, SHARE_H, body + headline(HOME_HEADLINE), 'Victor Bicudo · ' + caption), SHARE_W, SHARE_H,
           os.path.join(ROOT, 'public', 'images', 'share', 'home.jpg'), (SHARE_W, SHARE_H), 'JPEG', 88)


if __name__ == '__main__':
    only = sys.argv[1:]
    if not only or 'home' in only:
        build_home()
        print('home')
    for slug in FIGS:
        if only and slug not in only:
            continue
        build(slug)
        print(slug)
