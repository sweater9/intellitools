# Minimal semantic runtime transplant — analysis (temporary branch, do not merge)

Baseline: `audit/knowledge-v3-source-verification` @ ed602e3 · Validated product: `fix/knowledge-semantic-limited-release` @ 7a56642

## File classification
| File | Baseline | Class | Action |
|---|---|---|---|
| knowledge/semantic-core.mjs | absent | A runtime infra | ADD verbatim from 7a56642 |
| knowledge/hybrid-search.mjs | absent | A runtime infra + B (`limitedConfidence` block) | ADD verbatim from 7a56642 |
| knowledge/search.js | present | A (opt-in wiring) + B (limited options) | PATCH (22 lines; identical to 7a56642's diff) |
| knowledge/search-core.mjs | present | 1 line A (`rankedAll: ranked,`); 3 hunks C (spelling map, gap `withTerms/unlessPhrases`, `suppressSolid`) | PATCH 1 line only; do NOT import the C hunks |
| knowledge/semantic-index.json | absent | D generated | REBUILD from the audited tree (do not copy) |
| knowledge/src/build-semantic.py | absent | build tool | ADD (optional but recommended for reproducibility) |

## search-core.mjs
Cannot stay byte-identical: hybrid-search needs the full lexical ranking (`rankedAll`); with the audited file unchanged `searchHybrid` throws (`Cannot read properties of undefined (reading 'map')`). The single added return field does not alter behaviour: patched vs audited `searchKnowledge` output is JSON-identical except the extra field on 1,607 queries. The C hunks are inert on the audited lexicon (no `spelling`, `withTerms`, `unlessPhrases`, `suppressSolid` keys) and are not needed.

## semantic-index.json compatibility
The validated index is NOT compatible: 264 pages vs 260 (extra: kubernetes, object-detection, robot-operating-system, gdpr-and-ai — red-team pages), built from pre-audit page text (22 corrected pages differ, e.g. autogen has no maintenance-mode text), word vectors/vocabulary adapted to the red-team corpus (11,088 words). Rebuild required. Procedure verified reproducible: on the validated tree `build-semantic.py <glove.json> --dim 64 --vocab 5000` regenerates the shipped index byte-for-byte. Rebuilt on the audited tree: 260 pages, ids/order identical to search-index.json, 3,196 units, 10,962 words, 1,337,626 B raw / 855,415 B gzip.

## Evidence (audited lexicon + rebuilt index, 1,607 queries: blind 569, main 426, H2 146, H3 211, calibration 188, ambiguity 67)
- Limited mode vs lexical: differences in solid / answer page / tools / gap / need / learn-more: 0 / 0 / 0 / 0 / 0 / 0; errors 0.
- Top-1/3/5 on scorable page queries (audited lexical → limited): blind 159/225/250 → 211/281/310 of 373; H3 40/73/82 → 73/105/117 of 154; main 192/227/240 → 220/256/269 of 304.
- Stale index would change blind top-5 by 1 query (310 vs 310; top-1 212 vs 211) — correctness, not performance, is why it must be rebuilt.
- `npm test`, `npm run test:ai-v3` unchanged vs audited baseline (48/1/0; 293/25/10, 2 negative FP).
- Chromium: fetch+import 162 ms, decode 21 ms, +10 MB heap, per query 14.9→15.9 ms mean.
