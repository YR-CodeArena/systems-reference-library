import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('python-runtime.html', 'r', encoding='utf-8') as f:
    c = f.read()

snippets = re.findall(r'<pre[^>]*><code(?:\s+class="([^"]*)")?>([\s\S]*?)</code></pre>', c)
for i in [0, 1, 3, 4, 8, 9, 10, 11, 14, 16, 17, 18, 19, 21, 23, 25, 31, 32, 34, 35, 36, 37, 38, 39, 40]:
    if i < len(snippets):
        print(f"=== Snippet #{i+1} ===")
        lines = [l.strip() for l in snippets[i][1].splitlines() if l.strip()][:3]
        print("  ", lines)
