import glob
import re

# Check style.css for anim-packet-node and packetPulse
with open("assets/css/style.css", "r", encoding="utf-8") as f:
    css = f.read()

# Let's inspect the keyframe packetPulse and .anim-packet-node
print("Inspecting CSS packetPulse...")
m = re.search(r'@keyframes packetPulse\s*\{[^}]+\}', css)
if m:
    print(m.group(0))

m2 = re.search(r'\.anim-packet-node\s*\{[^}]+\}', css)
if m2:
    print(m2.group(0))
