import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

def inspect_file(filename, indices):
    with open(filename, 'r', encoding='utf-8') as f:
        c = f.read()
    snippets = re.findall(r'<pre><code(?:\s+class="([^"]*)")?>([\s\S]*?)</code></pre>', c)
    for idx in indices:
        if 0 <= idx < len(snippets):
            print(f"=== {filename} Snippet #{idx+1} (Class: {snippets[idx][0]}) ===")
            print(snippets[idx][1].strip())
            print("\n" + "="*50 + "\n")

inspect_file("python-masterclass.html", [6, 12])
inspect_file("data-structures.html", [2, 5])
inspect_file("git-github.html", [16])
