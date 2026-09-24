import glob
import re

files = sorted(glob.glob("*.html"))
for f in files:
    with open(f, "r", encoding="utf-8") as fp:
        c = fp.read()
    diagram_cards = re.findall(r'<div class="diagram-card"[^>]*id="([^"]+)"[^>]*>(.*?)</svg>', c, re.DOTALL)
    if diagram_cards:
        print(f"=== {f} ({len(diagram_cards)} diagrams) ===")
        for d_id, body in diagram_cards:
            nodes = len(re.findall(r'class="[^"]*anim-packet-node[^"]*"', body))
            flow_lines = len(re.findall(r'class="[^"]*anim-flow-line[^"]*"', body))
            circles = len(re.findall(r'<circle\b', body))
            paths = len(re.findall(r'<path\b', body))
            print(f"  [{d_id}]: {circles} circles ({nodes} anim-packet-nodes), {paths} paths ({flow_lines} anim-flow-lines)")
