import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/all_snippets.json", "r", encoding="utf-8") as f:
    snippets = json.load(f)

java_snippets = [s for s in snippets if s["file"] in ["java-masterclass.html", "high-concurrency-java.html"]]

for s in java_snippets:
    print(f"--- [{s['file']} #{s['index']}] ---")
    lines = s["code"].strip().split("\n")
    # print first 5 lines
    for l in lines[:5]:
        print("  ", l)
    if len(lines) > 5:
        print("   ... and", len(lines) - 5, "more lines")
