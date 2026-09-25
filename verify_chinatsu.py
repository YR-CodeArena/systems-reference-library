import os
import re

with open("assets/js/chinatsu-companion.js", "r", encoding="utf-8") as f:
    js_content = f.read()

paths = re.findall(r'assets/chinatsu-senpai/[^"\'\s,)]+', js_content)
print(f"Found {len(paths)} asset references in chinatsu-companion.js:")

missing = 0
for p in set(paths):
    exists = os.path.exists(p)
    status = "OK" if exists else "MISSING"
    if not exists:
        missing += 1
        print(f"  [{status}] {p}")
    else:
        print(f"  [EXISTS] {p} ({os.path.getsize(p)} bytes)")

print(f"\nTotal unique assets: {len(set(paths))}, Missing: {missing}")
