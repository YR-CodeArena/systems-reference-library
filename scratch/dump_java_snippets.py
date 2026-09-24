import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/all_snippets.json", "r", encoding="utf-8") as f:
    snippets = json.load(f)

java_snippets = [s for s in snippets if s["file"] in ["java-masterclass.html", "high-concurrency-java.html"]]
print(f"Total Java snippets: {len(java_snippets)}")

for s in java_snippets:
    print(f"\n=================== [{s['file']} #{s['index']}] ===================")
    print(s["code"])
