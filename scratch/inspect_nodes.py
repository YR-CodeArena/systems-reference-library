import glob
import re

files = sorted(glob.glob("*.html"))
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        c = fp.read()

    # Find circles with anim-packet-node
    matches = re.findall(r'<circle\b[^>]*class="[^"]*anim-packet-node[^"]*"[^>]*>', c)
    if matches:
        print(f"=== {f} ({len(matches)} anim-packet-node circles) ===")
        for m in matches:
            print("  ", m)
