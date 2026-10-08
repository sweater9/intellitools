# Knowledge V3 — blind acceptance test of the semantic retrieval prototype

- Test branch: `test/knowledge-semantic-blind-acceptance` (branched from the implementation commit; no implementation file differs from it)
- Implementation under test: `d367efa7df7edca740dedab6de50f79863c0c570` (unchanged)
- Blind dataset: `tests/blind/blind-acceptance.json` — 569 queries, sha256 `53e4965308bc87694bd892876d9e75045e95fb04c78d5a738d48d661cc414f93`
- Dataset + pre-registered runner frozen in commit `c104b451cf48fae0f3a4dade51559afdcbb01ea4` before any execution
- Raw outputs: `tests/blind/out/` (`summary.json`, `results-{A..E}.json`, `FAILED-QUERIES.md`, `DISTRIBUTION.md`, `redteam-suites/`, `limited-*.md`)

## How the dataset was built
Written from scratch after the implementation was frozen, from sources `source-part1..4.txt` compiled by `compile.py`. Earlier datasets and reports were not consulted while writing. An automated leakage check (`overlap-check.py`, exact match or token-Jaccard ≥ 0.6 against 1,430 earlier test queries) flagged 31 near-duplicates *before freezing*; those were reworded, then the check reported 0. Expectations (accepted page set or transparent failure, tool expectation, category, style, difficulty, ambiguity flag) were frozen with each query. Caveat: the same author (this assistant) wrote earlier sets, so "independent" means no copying/paraphrasing, not a different author.

Distribution: 381 page-expected · 73 gap (expected transparent failure; 7 list an acceptable nearby page) · 115 out-of-scope/ambiguous negatives. Ambiguity-flagged 140 (24.6%: 92 everyday-meaning collisions, 23 plain out-of-scope, 25 technical uses of ambiguous words). Styles: concept 147, vague/no-name 59, plus beginner, expert, conversational, incomplete, troubleshooting, implementation, comparison, which-to-use, security, acronym, typo, integration, architecture. Full breakdown: `out/DISTRIBUTION.md`.

## Arms
- **A** lexical only (`searchKnowledge`).
- **B** semantic only (cosine ≥ 0.80, no guards).
- **C** hybrid: fused ranking, original anchor/threshold gate applied to the fused score.
- **D limited role (release candidate)**: `searchHybrid(..., "gated", LIMITED)` with `LIMITED = {vetoZ:-1e9, lexVetoCoverage:0, ovZ:1e9, contradictVeto:false, dTauZ:1e9}` — existing options of the frozen code that switch off every path by which semantics creates or removes confidence. Fused ranking feeds top results / closest pages; the lexical score alone must clear the unchanged threshold; gap/negative rules and tool rules are the lexical ones.
- **E** (informational, not a candidate): the prototype's default `gated` settings, which *do* let semantics create/withhold confident answers.

Classification was fixed in `run-blind.mjs` before execution (see header of that file).

## Results (569 queries, strict)

| Arm | PASS | WEAK | MISS | FP | Pass rate | FP rate | Top-1 | Top-3 | Top-5 (381 page q.) | Confident page answers / precision | Closest-pages hit (non-confident page q.) | Transparent-failure accuracy (188) | Ambiguity FP (140) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical | 314 | 71 | 85 | 99 | 55.2% | 17.4% | 49.6% | 64.3% | 70.9% | 225 / 70.7% | 64 / 156 | 82.4% | 23 |
| B semantic-only | 307 | 129 | 63 | 70 | 54.0% | 12.3% | 58.8% | 73.2% | 81.1% | 189 / 75.1% | 125 / 192 | 87.8% | 15 |
| C hybrid | 313 | 116 | 40 | 100 | 55.0% | 17.6% | 61.2% | 77.4% | 84.5% | 225 / 70.7% | 108 / 156 | 81.9% | 23 |
| **D limited role** | **314** | **116** | **40** | **99** | **55.2%** | **17.4%** | **61.2%** | **77.4%** | **84.5%** | **225 / 70.7%** | **108 / 156** | **82.4%** | **23** |
| E prototype defaults (info) | 332 | 114 | 41 | 82 | 58.3% | 14.4% | 61.2% | 77.4% | 84.5% | 226 / 73.0% | 105 / 155 | 88.8% | 15 |

### A vs D
- PASS 314 → 314, WEAK 71 → 116, MISS 85 → 40 (−47%), FP 99 → 99.
- Top-1 49.6% → 61.2% (+11.6), Top-3 64.3% → 77.4% (+13.1), Top-5 70.9% → 84.5% (+13.6).
- Closest pages containing an accepted page, among page queries without a confident answer: 64/156 (41%) → 108/156 (69%).
- Confident answers: identical on all 569 blind queries (0 solidity changes, 0 answer changes). Class transitions: MISS→WEAK 48, WEAK→MISS 3 (B012, B158, B342 — the accepted page fell out of the top 5), everything else unchanged.
- Gains are concentrated where lexical search is weakest: vague / no-name descriptions (59 queries): A 5 pass / 11 weak / 39 miss / 4 FP → D 5 / 29 / 21 / 4.

## False-positive analysis
- D's 99 FPs are exactly A's (by construction and confirmed): 64 confident wrong pages on page queries (one of them a wrong tool), 12 confident answers to uncovered topics, 21 confident answers to ambiguous/out-of-scope negatives, 2 ambiguous-technical queries answered on the wrong page.
- Most frequent wrong confident pages: tokens 6, python 6, agent-tools 3, large-language-models 3, connecting-agents-to-apps 3, javascript 3, typescript 3. These are generic hub pages winning on alias/keyword hits; the limited role cannot fix them because it never alters confidence.
- Ambiguity collisions answered confidently under A and D (21 negatives): rust 3, python 2, java 2, mamba 2, token 2, alignment 2, and one each for react, transformer, vector, prompt, container, hallucination, embedding, express.
- B and E show what semantics *could* do for FPs (B 70, E 82), but both let semantics change confidence, which is outside the limited role.
- The absolute FP rate (17.4%) is a property of the existing lexical engine on fresh queries; it is much higher than on the phrase-tuned suites (1.6–4.1%).

## Transparent failure and tools
- Gap queries handled transparently (or on a listed nearby page): A 83.6%, D 83.6%; negatives with no confident answer and no tool: A 81.7%, D 81.7%.
- Tool recall for the 10 tool-relevant queries: A 2/10, D 2/10 (lexical tool rules only; not changed by D). One unexpected tool was shown (same in A and D).

## Regression results
| Suite | A | D (limited) | Notes |
| --- | --- | --- | --- |
| `npm test` (lexical default) | pass | — | exit 0 |
| `npm run test:ai-v3` (ontology + AI V3, lexical default) | pass | — | ontology checks passed; 304/18/6, neg FP 1 |
| `npm run test:semantic` | — | pass | semantic guards OK |
| knowledge-search (49) with D swapped in | 48/1/0 | 48/1/0 | identical routing checks |
| AI V3 queries (358) with D swapped in | pos 304/18/6, neg FP 1 | pos 304/22/2, neg FP 1 | no pass→non-pass |
| Red-team main 426 | 419/0/0/7 | 418/0/0/8 | **1 regression: RT409 "keep an ai agent from deleting my files" — integration-permissions → ai-agent-vs-chatbot** |
| Red-team H2 146 | 139/1/0/6 | 139/1/0/6 | none |
| Red-team H3 211 | 71/54/53/33 | 71/80/27/33 | no pass→non-pass; 1 confident answer changed between two wrong pages (H3-125) |
| Calibration 188 | 73/44/49/22 | 73/73/20/22 | none |
| Ambiguity 67 | 53/1/0/13 | 53/1/0/13 | none |

Root cause of RT409 (documented, not fixed): in `gated` mode the confident answer is the *first lexically qualified* page in fused order. When two pages both clear the lexical threshold, semantics can reorder them, so the confident answer can change even though semantics never creates confidence. This happened on 0/569 blind queries, 1/426 main, 1/211 H3.

## Performance (this sandbox; absolute numbers are a slow VM)
- Node, per query over the 569 blind queries: A mean 26.2 ms (p95 36.3); D mean 26.9 ms (p95 38.7). Semantic adds well under 1 ms of the measured time.
- Headless Chromium, measured on the same frozen implementation earlier: index 1.36 MB raw / 0.87 MB gzip, fetch+import ≈ 85 ms, decode ≈ 13 ms, ≈ 11 MB extra JS heap, per-query 19.7 → 20.8 ms mean. Lazy-loaded after lexical search is usable.

## Individual failed queries
All non-PASS queries for A and D with expected pages, answers and closest pages: `tests/blind/out/FAILED-QUERIES.md` (306 rows across FP/MISS/WEAK). Per-query raw results for every arm: `tests/blind/out/results-{A,B,C,D,E}.json`.

## Recommendation: ADOPT LIMITED ROLE — with two integration conditions
The blind evidence supports it:
1. Top-3 +13.1 pts, Top-5 +13.6 pts, Top-1 +11.6 pts — material.
2. Misses −47%; correct page present in "closest pages" 41% → 69%.
3. False positives unchanged (99 → 99); no new ambiguity FPs.
4. Confident lexical answers unchanged on all 569 blind queries.
5. Existing suites healthy, with one documented main-suite regression (RT409).

Conditions — reported, not fixed in this assignment:
- **The current opt-in wiring in `knowledge/search.js` calls `searchHybrid(..., "gated")` with prototype defaults, i.e. arm E, not D.** Integration must pass the LIMITED options (or an equivalent hard-coded limited mode).
- To make "lexical confidence is authoritative" exact, the limited mode should take the confident answer from the lexical engine (not from fused order). That would remove the RT409/H3-125 class of change. Expected effect on the blind set: none (0 changes observed).

What the limited role does **not** do: it does not reduce the high false-positive rate of the lexical engine on fresh queries (17.4%), nor improve tool recall (2/10). Those need separate work (negative-context rules, hub-page specificity, or a deliberately validated semantic confidence path such as E, which reduced FPs to 82 here but is outside the limited role).

## Confirmations
- No implementation, lexicon, page, threshold, mapping or semantic-index change was made on this branch (`git diff d367efa -- knowledge package.json` is empty).
- No query or expectation was added, removed, reworded or reclassified after the freeze commit `c104b451`; the runner's sha256 check of the dataset matches the frozen file.
- Nothing merged or deployed; no PR opened; main, staging and production untouched.
