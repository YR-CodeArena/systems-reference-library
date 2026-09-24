import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/all_snippets.json", "r", encoding="utf-8") as f:
    snippets = json.load(f)

for s in snippets:
    if s["file"] == "programming-languages.html":
        print(f"=== PL #{s['index']} ===")
        print(s["code"][:200])
