import os
import glob
import re

html_files = sorted(glob.glob("*.html"))
print(f"Total HTML files: {len(html_files)}")

for f in html_files:
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()
    
    scripts = re.findall(r'<script\b[^>]*src="([^"]+)"', content)
    links = re.findall(r'<link\b[^>]*href="([^"]+)"', content)
    has_pyodide = "pyodide" in content
    has_skulpt = "skulpt" in content
    has_main = "main.js" in content
    
    # Check for absolute paths starting with /
    abs_scripts = [s for s in scripts if s.startswith("/")]
    abs_links = [l for l in links if l.startswith("/")]
    
    print(f"{f}:")
    print(f"  Scripts: {scripts}")
    print(f"  Pyodide: {has_pyodide}, Skulpt: {has_skulpt}, Main: {has_main}")
    if abs_scripts or abs_links:
        print(f"  WARNING Absolute paths found! Scripts: {abs_scripts}, Links: {abs_links}")
