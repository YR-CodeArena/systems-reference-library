import glob
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

files = sorted(glob.glob("*.html"))
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        content = fp.read()
    spans = re.findall(r'<span>(.*?)</span>', content, re.DOTALL)
    if spans:
        print(f"\n[{f}] has {len(spans)} <span> without class:")
        for s in spans[:5]:
            print(f"  - {repr(s.strip()[:80])}")
