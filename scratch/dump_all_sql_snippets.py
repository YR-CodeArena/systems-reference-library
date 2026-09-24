import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/all_snippets.json", "r", encoding="utf-8") as f:
    snippets = json.load(f)

sql_snippets = [s for s in snippets if s["file"] == "postgresql.html"]

for s in sql_snippets:
    print(f"\n=================== POSTGRESQL SNIPPET #{s['index']} ===================")
    print(s["code"])
