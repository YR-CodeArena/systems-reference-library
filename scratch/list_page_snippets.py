import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

page = sys.argv[1] if len(sys.argv) > 1 else 'programming-languages.html'
with open(page, 'r', encoding='utf-8') as f:
    c = f.read()

snippets = re.findall(r'<pre[^>]*><code(?:\s+class="([^"]*)")?>([\s\S]*?)</code></pre>', c)
if not snippets:
    snippets = re.findall(r'<pre class="code-content">([\s\S]*?)</pre>', c)
    snippets = [("", s) for s in snippets]
print(f"=== {page} ({len(snippets)} snippets) ===")
for i, s in enumerate(snippets):
    lines = [l.strip() for l in s[1].splitlines() if l.strip()]
    first_line = lines[0] if lines else '(empty)'
    second_line = lines[1] if len(lines) > 1 else ''
    print(f"Snippet #{i+1} [{s[0]}]:\n  1: {first_line}\n  2: {second_line}")
