import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/all_snippets.json", "r", encoding="utf-8") as f:
    snippets = json.load(f)

db_snippets = [s for s in snippets if s["file"] in ["postgresql.html", "databases.html"]]
print(f"Total database snippets: {len(db_snippets)}")

for idx, s in enumerate(db_snippets):
    lines = [l for l in s["code"].split("\n") if l.strip() and not l.strip().startswith("--")]
    summary = lines[0] if lines else "EMPTY"
    print(f"[{s['file']} #{s['index']}]: {summary[:75]}")
