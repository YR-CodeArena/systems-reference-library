import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('java-masterclass.html', 'r', encoding='utf-8') as f:
    c = f.read()

snippets = re.findall(r'<pre[^>]*><code(?:\s+class="([^"]*)")?>([\s\S]*?)</code></pre>', c)
for i, s in enumerate(snippets):
    if 'Scanner' in s[1]:
        print(f"=== Snippet #{i+1} ===")
        print(s[1].strip())
        print("="*40)
