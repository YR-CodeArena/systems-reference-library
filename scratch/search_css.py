import re

with open("assets/css/style.css", "r", encoding="utf-8") as f:
    css = f.read()

print("File size:", len(css))

for term in ["backdrop", "drawer", "mobile-nav", "breadcrumb", "badge-tech", "works-cited"]:
    matches = [m.start() for m in re.finditer(re.escape(term), css, re.IGNORECASE)]
    print(f"Term '{term}': {len(matches)} occurrences")
    for pos in matches[:3]:
        snippet = css[max(0, pos-40):min(len(css), pos+60)]
        print(f"   ... {snippet.replace(chr(10), ' ')} ...")
