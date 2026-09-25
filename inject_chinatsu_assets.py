import re
import os

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

VERSION = "20260925_ai_live6"

css_replacement = (
    f'<link rel="stylesheet" href="assets/css/style.css?v={VERSION}">\n'
    f'  <link rel="stylesheet" href="assets/css/chinatsu-companion.css?v={VERSION}">'
)

js_replacement = (
    f'<script src="assets/js/main.js?v={VERSION}"></script>\n'
    f'  <script src="assets/js/chinatsu-companion.js?v={VERSION}" defer></script>'
)

for fname in html_files:
    if not os.path.exists(fname):
        print(f"Skipping {fname} (not found)")
        continue
    
    with open(fname, "r", encoding="utf-8") as f:
        content = f.read()

    # 1. Replace style.css tag (and any previous chinatsu-companion.css tag)
    content = re.sub(r'  <link rel="stylesheet" href="assets/css/chinatsu-companion\.css[^"]*">\n?', '', content)
    content = re.sub(
        r'<link rel="stylesheet" href="assets/css/style\.css[^"]*">',
        css_replacement,
        content
    )

    # 2. Replace main.js tag (and any previous chinatsu-companion.js tag)
    content = re.sub(r'  <script src="assets/js/chinatsu-companion\.js[^"]*"[^>]*></script>\n?', '', content)
    content = re.sub(
        r'<script src="assets/js/main\.js[^"]*"></script>',
        js_replacement,
        content
    )

    with open(fname, "w", encoding="utf-8") as f:
        f.write(content)

    print(f"Updated {fname} with direct Chinatsu companion tags and v={VERSION}")

print("\nAll 16 HTML files successfully updated!")
