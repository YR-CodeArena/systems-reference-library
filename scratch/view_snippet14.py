import re

with open('javascript-mastery.html', 'r', encoding='utf-8') as f:
    text = f.read()

snippets = re.findall(r'<pre\b[^>]*><code\b[^>]*class="([^"]+)"[^>]*>(.*?)</code></pre>', text, re.DOTALL)
print("=== SNIPPET 14 ===")
print(snippets[13][1])
print("=== SNIPPET 18 ===")
print(snippets[17][1])
