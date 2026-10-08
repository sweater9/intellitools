#!/usr/bin/env python3
"""Automated leakage check: flags blind queries that are near-duplicates of any earlier test query. Prints only blind ids."""
import json, re, glob, pathlib
root = pathlib.Path(__file__).resolve().parents[2]
STOP = set("a an the of to in for on and or is are what how do i my with can should does it be vs".split())
def toks(s): return {t for t in re.sub(r"[^a-z0-9]+", " ", s.lower()).split() if t not in STOP}
old = []
for f in ["frozen-queries.json", "frozen-holdout2.json", "frozen-holdout3.json", "calibration-semantic.json", "ambiguity-semantic.json"]:
    old += [q["q"] for q in json.load(open(root / "tests/redteam" / f))["queries"]]
for f in glob.glob(str(root / "tests/*.mjs")):
    old += re.findall(r'(?:q:\s*|Q\("[^"]+",\s*)"([^"]{6,})"', open(f).read())
oldt = [toks(o) for o in old]
oldn = {re.sub(r"[^a-z0-9]+", " ", o.lower()).strip() for o in old}
blind = json.load(open(root / "tests/blind/blind-acceptance.json"))["queries"]
flag = 0
for b in blind:
    n = re.sub(r"[^a-z0-9]+", " ", b["q"].lower()).strip()
    bt = toks(b["q"])
    best = max((len(bt & o) / len(bt | o) for o in oldt if bt | o), default=0)
    if n in oldn or best >= 0.6:
        flag += 1; print(b["id"], "exact" if n in oldn else f"jaccard {best:.2f}")
print("compared against", len(old), "earlier queries; flagged", flag)
