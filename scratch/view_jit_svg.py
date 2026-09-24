import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('programming-languages.html', 'r', encoding='utf-8') as f:
    c = f.read()

m = re.search(r'<div class="diagram-card" id="diagram-jit-tiering"[\s\S]*?</svg>', c)
if m:
    print(m.group(0))
