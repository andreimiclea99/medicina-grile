#!/usr/bin/env python3
"""Shuffle each question's options in place so the correct-answer index isn't
skewed toward A (a systematic bias left over from generation)."""
import json
import os
import random

random.seed(42)

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
QUESTIONS_DIR = os.path.join(ROOT, "build", "questions")

for fname in sorted(os.listdir(QUESTIONS_DIR)):
    path = os.path.join(QUESTIONS_DIR, fname)
    with open(path, encoding="utf-8") as f:
        data = json.load(f)

    for q in data["questions"]:
        opts = q["options"]
        order = list(range(len(opts)))
        random.shuffle(order)
        q["options"] = [opts[i] for i in order]
        q["correct"] = order.index(q["correct"])

    with open(path, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

print("Shuffled options in", len(os.listdir(QUESTIONS_DIR)), "files.")
