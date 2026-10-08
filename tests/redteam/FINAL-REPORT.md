# Knowledge V3 independent search red-team — final report

Branch `qa/knowledge-v3-search-redteam` (from V3 tip da370dd). Nothing merged, deployed, or pushed to main/staging. `minSolidScore` (20) and `maxIntentBoost` (56) are unchanged; gap/safety detection was only narrowed with explicit scoping (`withTerms`/`unlessPhrases`), never removed.

## Datasets
| Set | Queries | Freeze commit | Role |
| --- | --- | --- | --- |
| `frozen-queries.json` | 426 | c438104 | main independent set (frozen before any search change; **tuned against**, so post-remediation numbers are optimistic) |
| `frozen-holdout2.json` | 146 | c101f39 | second set written before remediation; partly contaminated by later tuning |
| `frozen-holdout3.json` | 211 | this branch, written after remediation | genuinely unseen, paraphrase-heavy; the honest generalisation estimate |

0 overlaps with the existing QA suites or earlier red-team sets (`overlap-check.mjs`).

## Before / after
| Set | Before (P/W/M/FP) | Pass | FP | After strict (P/W/M/FP) | Pass | FP | After with gap amendments |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Main 426 | 253/68/46/59 | 59.4% | 13.8% | 419/0/0/7 | 98.4% | 1.6% | 426/0/0/0 (100%) |
| Holdout2 146 | 63/31/30/22 | 43.2% | 15.1% | 139/1/0/6 | 95.2% | 4.1% | 145/1/0/0 (99.3%) |
| Holdout3 211 | 60/57/62/32 | 28.4% | 15.2% | 71/…  see report-h3-final.md | 33.6% | 15.6% | n/a |

**Honest reading:** main/H2 gains are largely tuning; H3 (unseen paraphrase) barely moved (28.4% → 33.6%). Phrase-anchored lexical routing does not generalise to pure paraphrase. Recommendation: a semantic layer (static embeddings / LSA) for the main workstream rather than more phrase families.

## Regressions (PASS before → not PASS after, strict)
- Main: RT190, RT191, RT202, RT238, RT290, RT296 and H2: H2-113…H2-117. All are *coverage-gap* queries (expected: transparent "no guide") that are now answered by newly added dedicated pages (kubernetes, object-detection, robot-operating-system, gdpr-and-ai); the answer is correct for the topic, counted as FP only under the frozen strict rule. Listed in `amendments-gap-pages.json`; strict numbers are always reported.
- H3: 0 regressions (H3-077 "structured query language…" was caused by an over-broad "relational data" GNN phrase; fixed by removing that phrase and adding a SQL one).
- **No query that passed before fails after other than those 11 gap→page cases.** Existing suites: `npm test` exit 0; knowledge-search 48 pass/1 weak/0 miss (identical outcomes, scores higher); ontology-v3 passes (143→147 entities); ai-v3 queries 328 positives: pass 293→304, weak 25→18, miss 10→6, negatives FP 2→1. No per-query regression in any existing suite.

## Core changes (small, search-core.mjs)
1. gap scoping `withTerms`/`unlessPhrases`; 2. `lexicon.spelling` token map; 3. `suppressSolid` gap flag. A stemmer, IDF weighting and alias-token cap were tried and **rejected** by ablation (stem: 27 FP on main; IDF: regressed existing suite; both: 24 FP).

## Other changes
lexicon-part-e (192 reusable intent→concept→page families, 143 spellings, negative-context gap), extra tool `when` phrases, four new pages (kubernetes, object-detection, robot-operating-system, gdpr-and-ai; sources unverified), regenerated outputs.

## Multi-hop (Gmail agent)
"i want an ai agent that can read gmail" → top gmail-for-ai-agents, learn-more agent-tools, oauth-for-ai-agents, connecting-agents-to-apps, ai-privacy-and-security, function-calling. Path completeness 0/4 → 3/4.

## Remaining
- Main: 7 strict FP = the gap→page cases above; 0 weak, 0 miss.
- H2: 1 weak (H2-012 patches/vision transformers), 6 strict FP = gap→page cases.
- H3: 54 weak, 53 miss, 34 FP (see `report-h3-final.md`, `failure-analysis-h3-after.md`); dominated by pure paraphrase, generic hub intrusion (model-cards, ai-governance), ambiguous acronyms.
- Genuine coverage gaps still open: terraform/ansible/nginx/linux CLI/service mesh/kafka/data warehouse/federated learning/differential privacy/recommenders/time series/AutoML/data labeling/causal inference/TF-IDF/NLP acronyms/AI coding assistants/Azure DevOps/Power BI/jest/vue-angular-svelte/grpc/TLS/SSH/JAX/TF-Lite, plus volatile "current leaderboard" questions (correctly refused). Filled this round: kubernetes/helm, object detection, ROS, GDPR.
