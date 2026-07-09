# Grile Pediatrie

Site static cu grile de pregătire pentru examenul de specialitate Pediatrie
(tematica cu 72 de subiecte, promoția 2017+). Întrebările sunt generate pe baza
bibliografiei oficiale a fiecărui capitol (Pleșca, Iordăchescu, Ciofu, Protocoale
de diagnostic și tratament în Pediatrie, Nelson Textbook of Pediatrics) și au
format complement simplu (1 răspuns corect din 5 variante), cu explicație și
citare a sursei după fiecare răspuns.

Toate cele 72 de capitole din tematică sunt acoperite, cu 501 întrebări în
total — numărul de întrebări per capitol variază (5-11) în funcție de
amploarea capitolului (câte boli/subteme distincte conține) și de relevanța
sa pentru examen.

## Structură

- `site/` — site-ul static (HTML/CSS/JS, fără build step), publicat pe GitHub Pages.
- `scripts/` — unelte de generare: parsarea bibliografiei, extragere/OCR text
  din cărți, asamblarea întrebărilor generate în `site/data/questions.js`.
- `build/` — fișiere locale intermediare (text extras/OCR, grile generate per
  capitol); nu este urcat pe git (vezi `.gitignore`).
- `cartii/` — cărțile sursă (PDF); nu este urcat pe git — conțin material
  protejat prin drepturi de autor și fișiere foarte mari.

## Publicare pe GitHub Pages

Repo-ul include un workflow (`.github/workflows/pages.yml`) care publică automat
folderul `site/` la fiecare push pe `main`. Activează Pages din Settings →
Pages → Source: "GitHub Actions" (o singură dată), apoi orice push va redeploy-a
site-ul automat.

## Regenerare grile

1. `python3 scripts/extract.py` — extrage/OCR text din `cartii/` pentru fiecare
   capitol din `scripts/topics.json`, în `build/raw/topics/`.
2. Generează grilele per capitol (agent LLM, vezi `build/questions/<nn>.json`).
3. `python3 scripts/assemble.py` — combină totul în `site/data/questions.js`.
