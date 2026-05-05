# -*- coding: utf-8 -*-
import sys
sys.stdout.reconfigure(encoding='utf-8')

from docx import Document
doc = Document(r'C:\Users\Edgard\Downloads\SITE\SITE\Site da Conatus.docx')

for p in doc.paragraphs:
    if p.text.strip():
        print(p.text)