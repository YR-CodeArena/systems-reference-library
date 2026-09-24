import glob
import re

files = sorted(glob.glob("*.html"))
total_removed = 0

for fname in files:
    with open(fname, "r", encoding="utf-8") as fp:
        content = fp.read()

    # Find and remove loose anim-packet-node circles inside SVG viewports
    # Note: Preserve any circle that represents an actual architectural component (e.g. radius > 20 like Ring buffers)
    # Only remove small moving dots (r="4", r="7" etc.) that were placed midway on connector lines
    def clean_svg(match):
        global total_removed
        svg_content = match.group(0)
        # Find small circles with anim-packet-node
        def remove_circle(c_match):
            global total_removed
            c_tag = c_match.group(0)
            r_match = re.search(r'r="([0-9.]+)"', c_tag)
            if r_match and float(r_match.group(1)) <= 10:
                total_removed += 1
                return "<!-- Fixed Flow Stream -->"
            return c_tag

        cleaned = re.sub(r'<circle\b[^>]*class="[^"]*anim-packet-node[^"]*"[^>]*>', remove_circle, svg_content)
        return cleaned

    new_content = re.sub(r'<svg\b[^>]*class="diagram-svg"[^>]*>.*?</svg>', clean_svg, content, flags=re.DOTALL)

    if new_content != content:
        with open(fname, "w", encoding="utf-8") as fp:
            fp.write(new_content)
        print(f"Cleaned diagrams in {fname}")

print(f"\n[SUCCESS] Removed {total_removed} stray drifting dot(s) across diagrams!")
