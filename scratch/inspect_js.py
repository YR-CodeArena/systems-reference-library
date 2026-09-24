import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

with open('javascript-mastery.html', 'r', encoding='utf-8') as f:
    c = f.read()

snippets = re.findall(r'<pre[^>]*><code(?:\s+class="([^"]*)")?>([\s\S]*?)</code></pre>', c)
print(f"=== Snippet #16 (Class: {snippets[15][0]}) ===")
print(snippets[15][1].strip())
print("\n" + "="*40 + "\n")
print(f"=== Snippet #18 (Class: {snippets[17][0]}) ===")
print(snippets[17][1].strip())
