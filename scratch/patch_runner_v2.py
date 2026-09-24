import re

with open("assets/js/main.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update regexes in runPythonEngine for strong typing guard
# Replace the flawed regex that matched inside quotes
old_guard = '''    // Strong Typing Guard: "5" + 5 or '5' + 5
    if (trimmed.includes('"5" + 5') || trimmed.includes("'5' + 5") || /"[^"]*"\\s*\\+\\s*\\d+/.test(trimmed)) {'''

new_guard = '''    // Strong Typing Guard: "5" + 5 or '5' + 5
    if (trimmed.includes('"5" + 5') || trimmed.includes("'5' + 5") || /(?:'[^']*'|"[^"]*")\\s*\\+\\s*\\d+/.test(trimmed)) {'''

if old_guard in content:
    content = content.replace(old_guard, new_guard)
    print("[OK] Patched strong typing guard regex")
else:
    print("[WARN] Could not find old_guard")

# Also check 5 + "5"
old_guard_2 = '''    // Strong Typing Guard: 5 + "5"
    if (/\\d+\\s*\\+\\s*"[^"]*"/.test(trimmed) || /\\d+\\s*\\+\\s*'[^']*'/.test(trimmed)) {'''

new_guard_2 = '''    // Strong Typing Guard: 5 + "5"
    if (/\\d+\\s*\\+\\s*(?:'[^']*'|"[^"]*")/.test(trimmed)) {'''

if old_guard_2 in content:
    content = content.replace(old_guard_2, new_guard_2)
    print("[OK] Patched strong typing guard regex 2")
else:
    print("[WARN] Could not find old_guard_2")

with open("assets/js/main.js", "w", encoding="utf-8") as f:
    f.write(content)

print("[COMPLETE] First pass patch written")
