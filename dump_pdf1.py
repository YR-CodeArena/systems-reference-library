import fitz
import os
import re

upload_dir = r'C:\Users\yashr\.gemini\antigravity\brain\d3722afd-4c60-4703-800f-7fb2719a9885\.user_uploaded'
pdf_path = os.path.join(upload_dir, 'media_1790251994715.pdf')

doc = fitz.open(pdf_path)
full_text = ""
for page in doc:
    full_text += page.get_text() + "\n---PAGE_BREAK---\n"

with open("cs_hardware_raw.txt", "w", encoding="utf-8") as f:
    f.write(full_text)

print(f"Extracted {len(full_text)} characters from {len(doc)} pages of PDF 1.")
