#!/usr/bin/env python3
import sys
import re

def edit_file(filename, old_text, new_text):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if old_text in content:
        # \n karakterlerini gerçek satır sonlarına çevir
        new_text = new_text.replace('\\n', '\n')
        content = content.replace(old_text, new_text)
        
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✅ {filename} dosyası başarıyla güncellendi")
        return True
    else:
        print(f"❌ '{old_text}' metni bulunamadı")
        return False

if __name__ == "__main__":
    if len(sys.argv) != 4:
        print("Kullanım: python3 edit_file.py <dosya> <eski_metin> <yeni_metin>")
        sys.exit(1)
    
    filename = sys.argv[1]
    old_text = sys.argv[2]
    new_text = sys.argv[3]
    
    edit_file(filename, old_text, new_text)
