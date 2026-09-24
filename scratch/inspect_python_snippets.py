import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/all_snippets.json", "r", encoding="utf-8") as f:
    snippets = json.load(f)

py_snippets = [s for s in snippets if s["file"] in ["python-runtime.html", "low-latency-python.html"]]
print(f"Total snippets in runtime/low-latency: {len(py_snippets)}")

for s in py_snippets:
    first_line = s["code"].strip().split("\n")[0]
    print(f"[{s['file']} #{s['index']}]: {first_line[:75]}")
