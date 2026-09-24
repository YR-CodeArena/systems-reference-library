import glob
import re

html_files = sorted(glob.glob("*.html"))
pyodide_script_tag = '  <script src="https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js"></script>\n'

updated_count = 0
for file in html_files:
    with open(file, "r", encoding="utf-8") as f:
        content = f.read()
    
    if "cdn.jsdelivr.net/pyodide" not in content:
        # Insert after <link rel="stylesheet" href="assets/css/style.css">
        target = '<link rel="stylesheet" href="assets/css/style.css">'
        if target in content:
            new_content = content.replace(target, target + "\n" + pyodide_script_tag.strip())
            with open(file, "w", encoding="utf-8") as f:
                f.write(new_content)
            updated_count += 1
            print(f"Added Pyodide script tag to {file}")
        else:
            print(f"Warning: target style link not found in {file}")
    else:
        print(f"Pyodide already present in {file}")

print(f"\nDone! Updated {updated_count} HTML files.")
