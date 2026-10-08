# Knowledge V3 — local semantic retrieval prototype (experimental)

Branch `experiment/knowledge-semantic-retrieval`. Not merged, not deployed. Lexical search, lexicon, thresholds and gap/negative-context rules are unchanged; the semantic layer is additive and opt-in (`?semantic=1`).

## Architecture

```
query → normalise + spelling map (existing)
      → lexical retrieval (existing searchKnowledge: intents, concepts, aliases, glossary, gaps, tools)
      → semantic retrieval (new, local): query vector vs per-page unit vectors, cosine
      → fusion: lexical score + semantic points (z-score of the page inside this query's similarity distribution)
      → gate (arm D): 
          • coverage / negative-context rules from the lexical engine stay authoritative; a matched gap rule means semantics can never create confidence
          • solid requires the LEXICAL score to clear minSolidScore (semantic points only reorder)
          • lexical answers with only alias/title/glossary evidence are withheld if the query is mostly outside the corpus vocabulary (coverage < 0.7)
          • semantic override/lead only if: z ≥ 3, cosine ≥ 0.80, margin to runner-up ≥ 0.04–0.06, corpus coverage ≥ 0.75, page lexical score ≥ 12
      → answer | "closest pages" (transparent failure) → learn-more → optional tool (lexical tool rules only)
```

Files: `semantic-core.mjs` (pure; decode + embed + cosine), `hybrid-search.mjs` (fusion + gates; modes `semantic`/`hybrid`/`gated`), `semantic-index.json` (generated), `src/build-semantic.py` (build-time only), opt-in wiring in `search.js` (lazy `import()` + fetch after lexical search is ready). `search-core.mjs` gained one additive return field (`rankedAll`); its behaviour is unchanged.

## Semantic method

Static word vectors → SIF-weighted average (Arora et al.) → common-component removal, computed per *page unit* (identity text, summary/lede/short answer/glossary definitions, and each body section). Page score = best unit (body sections ×0.85).

1. Source vectors: GloVe 6B 100-d, as shipped in the npm package `wink-embeddings-sg-100d` 1.1.0 (341,479 words). Build-time input only.
2. Pruned to the 5,000 most frequent alphanumeric words plus every word used by the Knowledge pages (~6.2k words), PCA-reduced to 64 dimensions, int8-quantised.
3. Domain adaptation, content-derived only: words used in ≥2 pages are blended (0.9) with the centroid of the pages that use them; corpus-only terms with no GloVe vector (`llm`, `mcp`, `pgvector`, …) get a vector from the pages containing them. No query text, no H3 text, no hand-written synonym is involved anywhere.
4. Ships: pruned word table + page unit vectors + a corpus-usage bit per word (for the coverage signal). The embedding model is **not** needed in the browser, and nothing is downloaded at runtime.

Licence: GloVe vectors are PDDL 1.0 (public-domain dedication; ACKNOWLEDGEMENT shipped in the npm package); the npm package is MIT. Regenerating requires downloading that npm package once (~113 MB tarball, 307 MB unpacked); it is not committed. `python3 knowledge/src/build-semantic.py <path>/wink-embeddings-sg-100d.json --dim 64 --vocab 5000` is deterministic (byte-identical rebuild verified).

## Size and performance (headless Chromium, this sandbox; absolute ms are slow-VM numbers, the deltas matter)

| | compact (shipped: 64-d, 5k vocab) | large (100-d, 20k vocab) |
| --- | --- | --- |
| `semantic-index.json` raw / gzip | 1.36 MB / 0.87 MB | 3.83 MB / 2.67 MB |
| fetch + import + decode | ~85 ms + 13 ms | ~165 ms + 50 ms |
| JS heap added | ~11 MB | ~27 MB |
| per-query latency, lexical → hybrid | 19.7 → 20.8 ms mean (p95 26.5 → 26.8) | 20.5 → 22.4 ms |
| build (Python/numpy, once) | ~25 s wall, ~2 GB peak RSS | similar |

Semantic search adds ≈1–2 ms per query. The index is only fetched with `?semantic=1`, after lexical search is already usable.

## Results — frozen H3 (211 queries, primary generalisation test; strict, no amendments)

| Arm | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 (157 page queries) |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 71 | 54 | 53 | 33 | 33.6% | 15.6% | 32.5% | 54.1% | 58.6% |
| B semantic-only (cos ≥ 0.80, no guards) | 94 | 59 | 31 | 27 | 44.5% | 12.8% | 51.0% | 69.4% | 76.4% |
| C hybrid (existing gate on fused score) | 71 | 79 | 27 | 34 | 33.6% | 16.1% | 52.2% | 70.7% | 77.7% |
| D hybrid + confidence/margin gate | 73 | 80 | 27 | 31 | 34.6% | 14.7% | 52.2% | 70.7% | 77.7% |

Large config (100-d/20k): A same; B 97/62/33/19 (46.0%/9.0%); C 71/79/27/34; D 73/80/28/30 (34.6%/14.2%), top-1/3/5 51.0/70.1/77.7.

**Honest reading.** Retrieval improves materially: correct page in the top 5 rises 58.6% → 77.7%, top-1 32.5% → 52.2%, misses fall 53 → 27. The confident-pass rate barely moves (+1 pt) because the safety gate deliberately keeps refusing unless lexical evidence clears the unchanged threshold: most of the recovered queries become *weak* (right page shown under "closest pages"), not confident answers. False positives do not increase (33 → 31). The semantic-only arm gets the highest H3 pass rate and a lower FP rate than lexical, but it has no guards and is unusable alone (below).

### Protocol disclosures (read before trusting any number)
- Design was committed (`ce8907f`) before H3 was run, using only: main, H2, a new 188-query calibration set (`calibration-semantic.json`, written independently of H3) and a new 67-query ambiguity set. First H3 run (large config, earlier gate): A 71/54/53/33; B 97/62/33/19; C 71/79/27/34; D 79/71/27/34 (37.4% / 16.1%).
- After that I saw H3 aggregates several more times while making changes motivated by *other* sets (an existing-suite regression, the ambiguity set, the main-set negative regressions): lexical-score-must-clear-threshold, coverage veto, `dMinSim`, `dMinLex`, then the compact index. H3 individual failures were never read and no H3-derived mapping exists, but H3 is no longer a pristine blind set for the final D numbers. The first-run D result was the *higher* pass (37.4%) at *higher* FP (16.1%); the shipped gate trades that pass for lower FP.
- A new fully unseen set would be needed to confirm the final numbers.

## Other datasets (strict)

| Set | A lexical (P/W/M/FP, pass%, FP%) | B semantic-only | D shipped gate (compact) |
| --- | --- | --- | --- |
| H2 (146) | 139/1/0/6, 95.2%, 4.1% | 78/34/18/16, 53.4%, 11.0% | 140/0/0/6, 95.9%, 4.1% |
| Main 426 | 419/0/0/7, 98.4%, 1.6% | 239/93/43/51, 56.1%, 12.0% | 417/0/0/9, 97.9%, 2.1% |
| Calibration 188 (design set) | 73/44/49/22, 38.8%, 11.7% | 89/55/24/20, 47.3%, 10.6% | 79/68/20/21, 42.0%, 11.2% |
| Ambiguity 67 | 53/1/0/13, 79.1%, 19.4% | 54/4/0/9, 80.6%, 13.4% | 56/1/0/10, 83.6%, 14.9% |

Per-arm reports and per-query results: `tests/semantic/out/` (`SUMMARY.md`, `config-64d-5k/`, `config-100d-20k/`, `results-bat-*`, `compare-*`).

## Regressions (passed under A, not under D, strict)
- H3: none. H2: none. Calibration: none. Ambiguity: none.
- Main 426: RT239 "ai regulation in the united states" (gap query → now answered with eu-ai-act, a nearby page) and RT409 "keep an ai agent from deleting my files" (→ ai-agent-vs-chatbot). Both come from the semantic-led/override path.
- Existing suites with the engine swapped in (same test files, search function replaced): `knowledge-search` 48 pass/1 weak/0 miss under lexical, hybrid and gated alike; `knowledge-ai-v3-queries` positives 304/18/6 (lexical) → 306/20/2 (gated), negatives FP 1 → 1; one query degraded within the non-pass classes ("BoN": weak → miss), none went pass → non-pass. `npm test` and `npm run test:ai-v3` pass on the unchanged lexical default.

## False-positive analysis
- Pure semantic similarity is not a safe confidence signal: with general-English GloVe it ranks e.g. a sports "bridge card game" or "fashion model agency" query near technical pages. Arm B was only usable at cosine ≥ 0.80 and still produced 51 FPs on main.
- Semantic points can lift weak anchored pages over the solid threshold. Arm C (fusion + original gate) therefore *adds* FPs (main 7 → 9, H3 33 → 34). Arm D fixes the main mechanism by requiring the lexical score alone to clear `minSolidScore`.
- Everyday-meaning collisions that the existing negative-context rules do not list (e.g. "monty python sketch", "rust game survival tips", "java island travel guide", "kernel panic") are *not* solved by semantics: both engines answer them. D's corpus-coverage veto removes some (13 → 10 on the ambiguity set) but the rest need negative-context lexicon entries (the existing mechanism), or a larger semantic model with sense disambiguation.
- Remaining H3 negatives/gaps answered confidently: 5 (A: 6).

## Remaining limitations
- General-English word vectors (2014 GloVe) know nothing of modern AI terms; domain adaptation from only ~270 pages is thin. Top-1 plateau ≈ 52%; the largest remaining lever is a real sentence encoder (e.g. a ~20–30 MB quantised MiniLM-class model shipped as a static asset, or precomputed page vectors with a tiny query encoder) — not tried: model weights are on a host unreachable from this sandbox, and shipping tens of MB conflicts with "compact".
- Semantic confidence is weakly calibrated; gating needs lexical evidence, so paraphrase queries mostly end as *weak* (right page in "closest pages").
- Sibling-page confusion remains (hub pages: python, javascript, sql, tokens) because lexical alias hits are confident.
- Soft keyword matching, larger vocab and 100-d vectors were evaluated; soft matching hurt, larger vectors gave small gains for 2–3× size.

## Recommendation: **revise, then adopt in a limited role**
Adopt the semantic layer for *ranking and "closest pages"* (top-5 +19 pts, misses halved, no FP increase, +2 ms, 0.87 MB lazy asset), keep confident answers lexically gated. Do not adopt semantic-led confident answers broadly yet (they gave +2 passes at the cost of two main-set regressions). Before any merge: validate on a fresh unseen paraphrase set, decide between the compact GloVe index and a stronger encoder, and add negative-context rules for the ambiguity collisions above.
