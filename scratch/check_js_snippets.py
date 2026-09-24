import re

with open('javascript-mastery.html', 'r', encoding='utf-8') as f:
    html = f.read()

snippets = re.findall(r'<pre\b[^>]*><code\b[^>]*class="([^"]+)"[^>]*>(.*?)</code></pre>', html, re.DOTALL)
print(f"Total snippets in javascript-mastery.html: {len(snippets)}")
for i, (cls, code) in enumerate(snippets):
    first_line = code.strip().split('\n')[0]
    print(f"#{i+1} [{cls}]: {first_line[:70]}")
