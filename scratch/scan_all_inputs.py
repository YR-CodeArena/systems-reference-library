import re
import glob
import sys
sys.stdout.reconfigure(encoding='utf-8')

print("=== ALL INPUT-DEMANDING SNIPPETS ACROSS LIBRARY ===")
for f in glob.glob("*.html"):
    with open(f, 'r', encoding='utf-8') as file:
        c = file.read()
    snippets = re.findall(r'<pre[^>]*><code(?:\s+class="([^"]*)")?>([\s\S]*?)</code></pre>', c)
    for i, s in enumerate(snippets):
        code = s[1]
        demands_input = []
        if 'input(' in code:
            demands_input.append('python:input()')
        if 'Scanner' in code and ('nextInt' in code or 'nextLine' in code or 'next(' in code):
            demands_input.append('java:Scanner')
        if 'scanf(' in code or 'cin >>' in code:
            demands_input.append('c/cpp:scanf')
        if 'read -p' in code:
            demands_input.append('bash:read')
        if demands_input:
            first_line = [l.strip() for l in code.splitlines() if l.strip()][:2]
            print(f"[{f}] Snippet #{i+1} ({demands_input}):")
            print(f"  > {first_line}")
