#!/usr/bin/env python3
"""Extract per-topic source text from the reference books listed in topics.json.

Text-layer books (Iordachescu, Ciofu) go through pdftotext directly.
Scanned books (Plesca, Protocoale) are rendered to PNG and OCR'd with tesseract (ron).
Per-PDF-page results are cached on disk so overlapping citation ranges across
topics don't get re-rendered/re-OCR'd.
"""
import json
import math
import os
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOOKS_DIR = os.path.join(ROOT, "cartii")
RAW_DIR = os.path.join(ROOT, "build", "raw")
PAGES_DIR = os.path.join(RAW_DIR, "pages")
TOPICS_DIR = os.path.join(RAW_DIR, "topics")

with open(os.path.join(ROOT, "scripts", "topics.json"), encoding="utf-8") as f:
    DATA = json.load(f)

BOOKS = DATA["books"]
TOPICS = DATA["topics"]

TEXT_BUFFER = 5   # pages of slack for text-layer books (cheap)
OCR_BUFFER = 1    # pages of slack for OCR'd books (expensive)

# Iordachescu's printed-page numbering drifts relative to the PDF page index
# (inserted figures/tables etc). Calibrated by sampling footer page numbers
# across the book: list of (printed_page, pdf_page) anchor points.
IORDACHESCU_CALIBRATION = sorted([
    (13, 50), (113, 150), (262, 300), (416, 453), (463, 500), (588, 624),
    (664, 700), (1065, 1100), (1240, 1274), (1266, 1300), (1469, 1500),
    (1581, 1611), (1670, 1700), (1821, 1850),
])

# Nelson's PDF interleaves ".e" electronic-supplement pages (bibliography,
# keywords) between real content pages, so the offset grows in large,
# uneven jumps per chapter. Calibrated per citation range actually used.
NELSON_CALIBRATION = sorted([
    (390, 656), (659, 1035), (671, 1049), (848, 1312), (978, 1545),
    (1107, 1785), (1174, 1914), (1184, 1928), (1228, 1988), (1234, 1997),
    (1242, 2011), (1246, 2016), (1592, 2588), (1701, 2819), (2510, 4365),
    (2573, 4496), (2580, 4508), (2603, 4576), (2607, 4587), (2614, 4605),
])


def printed_to_pdf_calibrated(printed_page, pts):
    if printed_page <= pts[0][0]:
        p0, p1 = pts[0], pts[1]
    elif printed_page >= pts[-1][0]:
        p0, p1 = pts[-2], pts[-1]
    else:
        p0, p1 = None, None
        for i in range(len(pts) - 1):
            if pts[i][0] <= printed_page <= pts[i + 1][0]:
                p0, p1 = pts[i], pts[i + 1]
                break
    frac = (printed_page - p0[0]) / (p1[0] - p0[0])
    pdf_page = p0[1] + frac * (p1[1] - p0[1])
    return round(pdf_page)


def book_to_pdf_pages(book_key, start, end):
    book = BOOKS[book_key]
    if book_key == "iordachescu":
        lo = printed_to_pdf_calibrated(start, IORDACHESCU_CALIBRATION) - TEXT_BUFFER
        hi = printed_to_pdf_calibrated(end, IORDACHESCU_CALIBRATION) + TEXT_BUFFER
        return list(range(max(1, lo), hi + 1))
    if book_key == "nelson":
        # Wider buffer than other text books: interpolated (non-anchor) targets
        # can be off by more since Nelson's offset drift isn't smooth.
        nelson_buffer = 12
        lo = printed_to_pdf_calibrated(start, NELSON_CALIBRATION) - nelson_buffer
        hi = printed_to_pdf_calibrated(end, NELSON_CALIBRATION) + nelson_buffer
        return list(range(max(1, lo), hi + 1))
    if book["type"] == "text":
        lo = max(1, start - TEXT_BUFFER)
        hi = end + TEXT_BUFFER
    elif book["type"] == "ocr":
        lo = max(1, start + book["offset"] - OCR_BUFFER)
        hi = end + book["offset"] + OCR_BUFFER
    elif book["type"] == "ocr_spread":
        lo = max(1, start // 2 + 1 - OCR_BUFFER)
        hi = end // 2 + 1 + OCR_BUFFER
    else:
        raise ValueError(book["type"])
    return list(range(lo, hi + 1))


def get_page_text(book_key, pdf_page):
    book = BOOKS[book_key]
    cache_dir = os.path.join(PAGES_DIR, book_key)
    os.makedirs(cache_dir, exist_ok=True)
    cache_file = os.path.join(cache_dir, f"{pdf_page:05d}.txt")
    if os.path.exists(cache_file):
        with open(cache_file, encoding="utf-8") as f:
            return f.read()

    book_path = os.path.join(BOOKS_DIR, book["file"])

    if book["type"] == "text":
        result = subprocess.run(
            ["pdftotext", "-f", str(pdf_page), "-l", str(pdf_page), book_path, "-"],
            capture_output=True, text=True,
        )
        text = result.stdout
    else:
        png_prefix = os.path.join(cache_dir, f"render_{pdf_page:05d}")
        subprocess.run(
            ["pdftoppm", "-f", str(pdf_page), "-l", str(pdf_page), "-r", "250", "-png",
             book_path, png_prefix],
            capture_output=True, text=True,
        )
        png_files = [p for p in os.listdir(cache_dir) if p.startswith(f"render_{pdf_page:05d}")]
        if not png_files:
            text = ""
        else:
            png_path = os.path.join(cache_dir, png_files[0])
            ocr_result = subprocess.run(
                ["tesseract", png_path, "-", "-l", "ron"],
                capture_output=True, text=True,
            )
            text = ocr_result.stdout
            os.remove(png_path)

    with open(cache_file, "w", encoding="utf-8") as f:
        f.write(text)
    return text


def main():
    os.makedirs(TOPICS_DIR, exist_ok=True)
    only = sys.argv[1:] and set(int(x) for x in sys.argv[1:]) or None

    for topic in TOPICS:
        num = topic["num"]
        if only and num not in only:
            continue
        out_path = os.path.join(TOPICS_DIR, f"{num:02d}.txt")
        if os.path.exists(out_path):
            print(f"[skip cached] topic {num}")
            continue

        print(f"[extract] topic {num}: {topic['title'][:60]}")
        chunks = [f"### TEMA {num}: {topic['title']}\n"]
        for cit in topic["citations"]:
            book_key = cit["book"]
            book = BOOKS[book_key]
            pdf_pages = book_to_pdf_pages(book_key, cit["start"], cit["end"])
            chunks.append(f"\n--- Sursa: {book['title']}, pag. {cit['start']}-{cit['end']} ---\n")
            for p in pdf_pages:
                chunks.append(get_page_text(book_key, p))

        with open(out_path, "w", encoding="utf-8") as f:
            f.write("\n".join(chunks))

    print("Done.")


if __name__ == "__main__":
    main()
