import re
import sys
sys.stdout.reconfigure(encoding='utf-8')

html_files = [
    "index.html",
    "networking.html",
    "databases.html",
    "programming-languages.html",
    "data-structures.html",
    "operating-systems.html",
    "cs-hardware-foundations.html",
    "git-github.html",
    "python-masterclass.html",
    "python-runtime.html",
    "low-latency-python.html",
    "postgresql.html",
    "java-masterclass.html",
    "high-concurrency-java.html",
    "enterprise-scss.html",
    "javascript-mastery.html"
]

print("=== SCANNING FOR INTENTIONAL ERRORS & ANTI-PATTERNS ===")
keywords = ["error", "anti-pattern", "hazard", "wrong", "fail", "invalid", "illegal", "raise ", "exception", "conflict", "pinning", "tight coupling"]

for f in html_files:
    with open(f, 'r', encoding='utf-8') as file_obj:
        c = file_obj.read()
    snippets = re.findall(r'<pre[^>]*><code(?:\s+class="([^"]*)")?>([\s\S]*?)</code></pre>', c)
    if not snippets:
        snippets = [( "", s ) for s in re.findall(r'<pre class="code-content">([\s\S]*?)</pre>', c)]
    for i, s in enumerate(snippets):
        code = s[1].lower()
        matched_kw = [k for k in keywords if k in code]
        if matched_kw:
            first_line = [l.strip() for l in s[1].splitlines() if l.strip()][:2]
            print(f"[{f}] Snippet #{i+1} matches {matched_kw}:")
            print(f"  > {first_line}")
