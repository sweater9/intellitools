#!/usr/bin/env python3
"""Compile tests/blind/source-part*.txt into the frozen blind dataset. Run once before freezing."""
import json, glob, re, sys, pathlib
root = pathlib.Path(__file__).resolve().parents[2]
pages = {p["id"] for p in json.load(open(root / "knowledge/search-index.json"))["pages"]}
tools = {t["id"] for t in json.load(open(root / "knowledge/search-lexicon.json"))["tools"]}
KIND = {"P": "page", "G": "gap", "N": "neg"}
STYLE = {"trouble": "troubleshooting"}
qs, errs = [], []
for f in sorted(glob.glob(str(root / "tests/blind/source-part*.txt"))):
    for line in open(f):
        line = line.rstrip("\n")
        if not line.strip() or line.startswith("#"): continue
        k, style, diff, amb, topic, acc, tl, q = line.split("|", 7)
        acc = [a for a in acc.split(",") if a and a != "-"]
        bad = [a for a in acc if a not in pages and a not in tools]
        if bad: errs.append((q, bad))
        tl = [t for t in tl.split(",") if t and t != "-"]
        for t in tl:
            if t not in tools: errs.append((q, ["tool " + t]))
        qs.append({"id": f"B{len(qs)+1:03d}", "q": q, "kind": KIND[k], "accept": [a for a in acc if a in pages],
                   "tools": tl, "toolExpected": bool(tl), "category": topic, "style": STYLE.get(style, style),
                   "difficulty": diff, "ambiguity": amb == "y",
                   "expected": ("page in accept" if k == "P" else "transparent failure (or a listed nearby page)" if k == "G" else "no confident answer, no tool")})
seen = {}
for x in qs:
    n = re.sub(r"[^a-z0-9]+", " ", x["q"].lower()).strip()
    if n in seen: errs.append((x["q"], ["duplicate of " + seen[n]]))
    seen[n] = x["id"]
if errs:
    for e in errs: print("ERR", e)
    sys.exit(1)
out = {"name": "Blind acceptance set — semantic retrieval prototype", "version": 1, "frozen": True,
       "implementation": "d367efa7df7edca740dedab6de50f79863c0c570",
       "note": "Written after the implementation was frozen, without consulting earlier datasets or reports. Expectations frozen with the queries.",
       "queries": [{**x, "path": [], "tool": (x["tools"][0] if x["tools"] else None)} for x in qs]}
json.dump(out, open(root / "tests/blind/blind-acceptance.json", "w"), indent=1)
print(len(qs))
