import os
import subprocess
import tempfile

from PIL import Image

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
FONTS = os.path.join(ROOT, 'styles', 'fonts')
CHROME = os.environ.get('CHROME', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')

HEAD = f'''<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{{font-family:'Geist';src:url('file://{FONTS}/geist-variable.woff2') format('woff2');font-weight:100 900}}
@font-face{{font-family:'Geist Mono';src:url('file://{FONTS}/geist-mono-variable.woff2') format('woff2');font-weight:100 900}}
html,body{{margin:0;overflow:hidden;background:#0e0e0e}}svg{{display:block}}</style></head><body>'''


def render(svg, width, height, dest, size, fmt, quality):
    with tempfile.TemporaryDirectory() as tmp:
        html = os.path.join(tmp, 'page.html')
        png = os.path.join(tmp, 'page.png')
        with open(html, 'w') as f:
            f.write(HEAD + svg + '</body></html>')
        subprocess.run(
            [CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', f'--screenshot={png}',
             f'--window-size={width},{height}', '--force-device-scale-factor=2',
             '--virtual-time-budget=1500', f'file://{html}'],
            check=True, capture_output=True, timeout=60,
        )
        image = Image.open(png).convert('RGB').resize(size, Image.LANCZOS)
        os.makedirs(os.path.dirname(dest), exist_ok=True)
        image.save(dest, fmt, quality=quality, **({'method': 6} if fmt == 'WEBP' else {'optimize': True, 'progressive': True}))
