import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open("scratch/all_snippets.json", "r", encoding="utf-8") as f:
    snippets = json.load(f)

pg_snippets = [s for s in snippets if s["file"] == "postgresql.html"]

for s in pg_snippets:
    print(f"--- Snippet #{s['index']} ---")
    lines = s["code"].strip().split("\n")
    print(f"Total lines: {len(lines)}")
    # Print non-comment lines
    sql_lines = [l for l in lines if l.strip() and not l.strip().startswith("--")]
    print("Queries:")
    for q in sql_lines[:5]:
        print("  ", q)
    if len(sql_lines) > 5:
        print("   ... and", len(sql_lines) - 5, "more lines")
