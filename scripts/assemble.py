#!/usr/bin/env python3
"""Combine per-topic generated question JSON files into site/data/questions.js."""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUESTIONS_DIR = os.path.join(ROOT, "build", "questions")
TOPICS_PATH = os.path.join(ROOT, "scripts", "topics.json")
OUT_PATH = os.path.join(ROOT, "site", "data", "questions.js")

with open(TOPICS_PATH, encoding="utf-8") as f:
    topics_meta = {t["num"]: t for t in json.load(f)["topics"]}

topics_out = []
missing = []
bad_count = {}

for num in sorted(topics_meta.keys()):
    path = os.path.join(QUESTIONS_DIR, f"{num:02d}.json")
    if not os.path.exists(path):
        missing.append(num)
        continue
    with open(path, encoding="utf-8") as f:
        data = json.load(f)

    questions = data.get("questions", [])
    clean_questions = []
    for i, q in enumerate(questions):
        opts = q.get("options", [])
        correct = q.get("correct")
        if not isinstance(opts, list) or len(opts) != 5:
            continue
        if not isinstance(correct, int) or not (0 <= correct <= 4):
            continue
        if not q.get("stem") or not q.get("explanation"):
            continue
        clean_questions.append({
            "id": f"{num}-{i + 1}",
            "stem": q["stem"],
            "options": opts,
            "correct": correct,
            "explanation": q["explanation"],
            "source": q.get("source", "")
        })

    if len(clean_questions) != len(questions):
        bad_count[num] = len(questions) - len(clean_questions)

    if clean_questions:
        topics_out.append({
            "num": num,
            "title": topics_meta[num]["title"],
            "questions": clean_questions
        })

print(f"Assembled {len(topics_out)} topics, "
      f"{sum(len(t['questions']) for t in topics_out)} questions total.")
if missing:
    print(f"MISSING (no generated file): {missing}")
if bad_count:
    print(f"DROPPED malformed questions per topic: {bad_count}")

os.makedirs(os.path.dirname(OUT_PATH), exist_ok=True)
with open(OUT_PATH, "w", encoding="utf-8") as f:
    f.write("const QUESTIONS = ")
    json.dump({"topics": topics_out}, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Wrote {OUT_PATH}")
