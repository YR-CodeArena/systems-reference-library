import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

for fname in ['javascript-mastery.html', 'python-runtime.html']:
    with open(fname, 'r', encoding='utf-8') as f:
        c = f.read()
    print(f"=== {fname} ===")
    matches = re.findall(r'<circle[^>]*>', c)
    for m in matches:
        print("  ", m)
