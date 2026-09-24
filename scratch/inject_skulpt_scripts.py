import glob

html_files = glob.glob("*.html")
target = '<script src="assets/js/main.js"></script>'
replacement = '<script src="assets/js/skulpt.min.js"></script>\n  <script src="assets/js/skulpt-stdlib.js"></script>\n  <script src="assets/js/main.js"></script>'

count = 0
for f in html_files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()
    if target in content and 'skulpt.min.js' not in content:
        content = content.replace(target, replacement)
        with open(f, 'w', encoding='utf-8') as file:
            file.write(content)
        count += 1
        print(f"[OK] Injected Skulpt scripts in {f}")

print(f"Total files updated: {count}/{len(html_files)}")
