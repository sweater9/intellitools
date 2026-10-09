# Knowledge V3 — Final Content Expansion & Source Verification Report

- **Branch:** `agent/knowledge-v3-final-expansion` → PR into `feature/knowledge-base-preview` (base commit `0b713df`)
- **Check date:** 2026-10-09 (every "verified" statement below means *compared with the cited primary page on this date*)
- **Scope:** content and factual verification only. Search ranking, lexicon parts, ambiguity rules and `search-core.mjs` / `search.js` were **not** changed (another engineer owns them). No merge, no `main` change, no deployment.
- **Machine-readable records:** `knowledge/source-verification.json` (records, change log, sources) and `knowledge/ontology-v3.json` (`verification.source_check` per page).

## 1. Recommendation

**The content portion is ready for the V3 release to staging, and ready for production once two conditions are met:**

1. A reviewer signs off the three pages that make legal, security or privacy statements — `eu-ai-act`, `mcp-authorization`, `gmail-api-scopes-and-verification` (all are orientation, not legal advice, and say which parts could not be verified).
2. The time-sensitive items in section 6 are re-checked on the release day (notably the OpenAI shutdown date of **23 October 2026** and the Sora API outcome).

This is not a claim that the whole corpus is verified. **188 of 270 pages remain unverified at claim level** (unchanged from the audit); V3 entity pages carry a visible status banner and the 120 legacy pages have no source section. The 62 pages with checked key claims are listed in `source-verification.json`.

## 2. Coverage added (10 new pages, 6 re-checked pages)

All new pages follow the existing entity schema, appear in search/ontology/sitemap, state the check date, list the primary sources consulted, and list what could **not** be verified.

| Page | Covers | Main primary sources | Not verified (see page) |
|---|---|---|---|
| `microsoft-agent-framework` | What MAF is, features, install names, relation to AutoGen/Semantic Kernel, patterns, failure modes | MAF, AutoGen and Semantic Kernel READMEs; migration guide | Current release number, licence, Python/.NET parity |
| `migrate-to-microsoft-agent-framework` | AutoGen → MAF mapping (AssistantAgent→Agent, FunctionTool→@tool, Team/GraphFlow→Workflow, sessions, MCP, checkpointing) and a staged migration approach | Microsoft Learn AutoGen guide | **Semantic Kernel guide could not be read — no SK API mappings given**; the guide's "future patterns" note conflicts with the MAF README (reported, not resolved) |
| `mcp-authorization` | OAuth 2.1 for MCP: roles, RFC 9728/8414/8707/9207, Client ID Metadata Documents, DCR deprecation, token-passthrough ban, stdio exception | MCP specification revision 2026-07-28 (overview, client registration, changelog) | Discovery and scope sub-pages not retrieved; whether 2026-07-28 is still newest; SDK uptake |
| `gmail-api-scopes-and-verification` | Gmail scope classes, restricted-scope verification, security assessment, Limited Use rules incl. the AI/ML training prohibition | Google Gmail scopes page; Workspace user-data policy (updated 2026-09-03); API Services policy | Fees/timelines/thresholds, unverified-app limits, consumer vs Workspace rules; whether the older policy page omits the AI sentence |
| `inspect-ai-evaluation-framework` | Inspect (UK AI Security Institute): task = dataset + solver + scorer, agents, tools/MCP, sandboxing, logs; Inspect Evals ownership | Inspect docs index, `inspect_ai` and `inspect_evals` READMEs, MIT licence | Import paths/CLI flags (no code sketch given on purpose), PyPI name, current eval count |
| `openai-reasoning-models` | Reasoning tokens, billing, effort values, summaries, incomplete responses, o-series history, deprecation dates | OpenAI reasoning guide; API deprecations page; announcements | **Current model names** (OpenAI docs disagreed on the same day, so none are named), exact launch days, pricing |
| `sora-ai-video` | Sora research report, Sora 2, discontinuation (app 26 Apr 2026, API scheduled 24 Sep 2026), lessons for vendor dependency | OpenAI report, announcement, Help Center article, deprecations page | **Whether the API actually stopped on 24 Sep 2026**; Sora 1 retirement; Azure end date; reasons |
| `nvidia-cosmos` | Cosmos 3 (Reasoner/Generator, Super 64B/Nano 16B/Edge 4B), tooling, licence, limitations, earlier families | NVIDIA/cosmos and Cosmos-Predict2.5 READMEs | Technical report not read; independent quality evaluations; OSI status of OpenMDW-1.1 |
| `attention-sinks` | Attention sinks, StreamingLLM (4 sink tokens, 4M+ tokens, 22.2× vs recomputation), what it does *not* do | arXiv:2309.17453 | Inference that evicted tokens are unavailable is labelled as inference; repo FAQ not read |
| `flashattention-3` | FA-3 techniques and reported numbers, Hopper/CUDA requirements, FlashAttention-4 as README-level information | arXiv:2407.08608; flash-attention README | Independent reproductions; FA-4 has no paper cited; README beta status may change |

Re-checked existing pages (each now has a dated source-check block): `a2a-protocol`, `autogen`, `semantic-kernel`, `eu-ai-act`, `nist-ai-rmf`, `owasp-llm-top-10`.

Cross-links added so the new pages are reachable: `world-models`, `video-generation-models`, `reasoning-models`, `flash-attention`, `kv-cache`, `agent-evaluation`, `mcp`, `mcp-security`, `autogen`, `semantic-kernel`, `agent-frameworks-compared` (which also gained a Microsoft Agent Framework row), `gmail-for-ai-agents`, `oauth-for-ai-agents`.

## 3. Factual corrections to existing pages (11 change-log entries)

| Page | Correction | Source |
|---|---|---|
| `mcp`, `mcp-servers-and-clients` | Described only the `initialize` handshake. Revision 2026-07-28 removed the handshake and protocol-level sessions (`Mcp-Session-Id`), added `server/discover`, and replaced server-initiated requests with a multi-round-trip pattern. Pages now describe both models. | MCP spec 2026-07-28 "Key Changes" |
| `gmail-for-ai-agents` (3 edits), `oauth-for-ai-agents` | "Prefer readonly while prototyping" understated the burden: **`gmail.readonly` is a Restricted scope** (verification; security assessment if stored on servers). Added the Limited Use / AI-training prohibition. | Google Gmail scopes page; Workspace policy page |
| `video-generation-models` | Added Sora discontinuation (time-sensitive product status). | OpenAI Help Center; deprecations page |
| `agent-frameworks-compared` | Added Microsoft Agent Framework row. | MAF README |
| `nist-ai-rmf` | Resolved the "insufficient evidence" item: AI RMF 1.0 = NIST AI 100-1, released 26 Jan 2023; NIST says it is being **revised** (White House AI Action Plan), Playbook to follow; 7 Apr 2026 critical-infrastructure concept note. | nist.gov pages |
| `eu-ai-act` | Read the EUR-Lex text of Regulation (EU) 2026/1744 (OJ 24.7.2026): new Article 5 prohibitions apply from **2 Dec 2026**; Annex III high-risk **2 Dec 2027**; Annex I **2 Aug 2028**. The audit text said "a new prohibited practice" and "kept their earlier dates" — neither was supported by the text read, so both were reworded. | EUR-Lex |
| `owasp-llm-top-10` | The audit said "4 August 2026"; OWASP's resource page says 3 August. Page now says "early August 2026". | genai.owasp.org |

## 4. Verification method and honesty rules

- Each new/re-checked page has a `checked` block: claims compared, primary sources (title + https URL), check date, and an explicit **not independently verified** list. It renders as "Checked against primary sources", "Primary sources consulted" and "Not independently verified" sections, and the header chip reads "key claims checked 2026-10-09".
- **Schema change (backward compatible):** optional `checked` field in `entity-model.mjs` (validated: date, https sources, claims, unverified array). Ontology records for these pages get `verification.status: "key-claims-checked"` plus `source_check`. **`verified` stays `false` and `verification_date` stays `null` for every entry, `canonical_sources[].verified` stays `false`, and the ontology test was not weakened.** The ontology provenance sentence was updated because "no source has been verified" was no longer accurate.
- Vendor statements are recorded as "the source says", not as independent confirmation of product behaviour (for example Sora 2 realism claims, Cosmos capability claims, FlashAttention-3 speedups).
- Secondary sources were used only to flag items (for example the content of the new EU Article 5 prohibitions) and are labelled as secondary on the page.
- Volatile model names were deliberately avoided on the OpenAI page.

## 5. QA and test results

All run on the final branch state.

| Check | Result |
|---|---|
| `npm test` (syntax checks, smoke, knowledge-search, ontology, **new final-expansion test**, AI-V3 queries) | **exit 0** |
| `tests/knowledge-search.mjs` | 49 queries: 48 pass, 1 weak (documented Prompt Diff gap), 0 miss. One existing expectation was edited (see §7) |
| `tests/knowledge-ontology-v3.mjs` | passed; 153 entities (150 new pages, 3 overlays) |
| `tests/knowledge-final-expansion.mjs` (new) | passed — see below |
| `tests/knowledge-ai-v3-queries.mjs` | positive 328: pass 293 / weak 25 / miss 10 (identical to the committed report); negatives 29 pass / 1 false positive |
| `tests/knowledge-ambiguity-gate.mjs` | 18/18 passed |
| Internal links | 273 HTML pages, 6,736 relative links, **0 broken** |
| Page IDs / index / sitemap | 270 indexed pages, unique IDs; sitemap lists all 270 pages plus the index and glossary; semantic index `pageIds` equals the search-index order (270) |
| Same-answer safety on 1,607 frozen queries | Lexical search, old index vs new index: **0 changes** to solid flag, answer page, tools or gap. No confident answer moved to a new page |
| Limited-mode semantic runtime, rebuilt `semantic-index.json` (3,346 units, dim 64) | 1,607 queries: **0 violations** for solid/answer/tools/gap/need/learn; page-query top-1/3/5: lexical 484/653/726 → hybrid 652/830/902 |

The new test checks: pages exist and are indexed with `key-claims-checked`; each source-check record is complete and https-sourced; `verified` stays false; 40+ specific facts are present (dates, RFC numbers, scope classes, licences, arXiv IDs); the corrections to existing pages; links from related pages; internal link resolution; no instruction to extract hidden reasoning; no "best/leading" product ranking; no named current OpenAI models; and a tolerant search smoke (expected page within the top 3, no tool suggested) for 10 queries.

Not run: any browser/UI test (no UI code changed), any deployment.

## 6. Outstanding risks and unverified items

1. **Most of the corpus is unverified** (188 pages). Priority legal/security/privacy/governance pages checked or corrected here: EU AI Act, NIST AI RMF, OWASP LLM Top 10, MCP authorization, Gmail scopes/policy. **Not** re-checked: `ai-governance`, `ai-privacy-and-security`, `prompt-injection`, `ai-guardrails`, `computer-use-agents`, `prompt-caching`, `llm-cost-optimization`, `model-apis` — these use durable wording and list no specific volatile figures, but remain "staging only" in the audit.
2. **OpenAI shutdown on 23 October 2026** (o1, o1-pro, o3-mini, o4-mini) is 14 days after the check date; the page must be re-read on release day.
3. **Sora:** the API shutdown date (24 Sep 2026) has passed; no source confirming it actually happened was found. The page says so.
4. **Semantic Kernel migration guide could not be read**, so no Semantic Kernel mappings were written.
5. **MCP revision 2026-07-28** may not be implemented by the SDKs readers use; both models are described. I could not confirm it is still the newest revision.
6. **Legal pages are orientation only.** The EU AI Act page rests on the EUR-Lex amendment text for dates; the content of the new prohibitions rests on secondary commentary; consolidated text and Commission guidance were not read.
7. **Pre-existing, not changed:** `knowledge/hugging-face-transformers.html` exists but has no search-index or sitemap entry; the committed `AI-V3-QUERY-REPORT.md` was already stale relative to the committed lexicon (the tests regenerate it; I did not commit the regenerated copy to avoid conflicts); the build regenerates `search-lexicon.json` with part D appended and re-escapes `json-validation.html`, so I left both at their committed bytes.
8. Minor wording risk: the Cosmos and FlashAttention-3 pages report vendor/author numbers as claims; they are not reproduced.

## 7. Notes for the search/ranking engineer (not acted on)

- New pages enter lexical results but never became a confident answer on any of 1,607 frozen queries. They do take **top-1 on 34 non-confident queries**, mostly low-score tie noise. Two meaningful shifts: `planner and worker agents` (was `multi-agent-systems`, now `microsoft-agent-framework`, 37 vs 36) and `which framework for a production agent` (was `choosing-an-agent-framework`).
- `How can an AI agent access Gmail?` now lists `gmail-api-scopes-and-verification` in its five "learn more" slots, displacing `connecting-agents-to-apps`. I changed the **existing** `within` expectation in `tests/knowledge-search.mjs` from `connecting-agents-to-apps` to the new page (still two related pages must appear). Revert that edit if you prefer to change ranking instead.
- `how do I connect an AI agent to Gmail` answers `ai-agent-vs-chatbot` (pre-existing; the gate only checks it is solid).
- Generic words in titles, tech lists and first questions drive lexical overlap; I removed generic aliases/keywords from the new pages (for example "Agent Framework", "Data-Use Rules") to limit noise.

## 8. Modified files

Generated artefacts were rebuilt with `node knowledge/src/build.mjs` (and `python3 knowledge/src/build-semantic.py … --dim 64 --vocab 5000` for the semantic index; GloVe vectors are build-time only and not committed).

**New:** ten `knowledge/<id>.html` pages (the ids in §2), `knowledge/src/entities-final-expansion.mjs`, `knowledge/src/entities-final-expansion-models.mjs`, `tests/knowledge-final-expansion.mjs`, this report.

**Source:** `knowledge/src/entity-model.mjs` (optional `checked` block, validation, rendering, ontology), `knowledge/src/entities.mjs` (module list, ontology provenance wording), `knowledge/src/build.mjs` (page chip text), `knowledge/src/pages-agents.mjs`, `knowledge/src/pages-building-platforms.mjs`, `knowledge/src/entities-agents.mjs`, `entities-eval-infra.mjs`, `entities-llm.mjs`, `entities-ml.mjs`, `entities-reasoning.mjs`, `entities-safety-science.mjs`.

**Rebuilt pages with changes:** `a2a-protocol`, `agent-evaluation`, `agent-frameworks-compared`, `autogen`, `eu-ai-act`, `flash-attention`, `gmail-for-ai-agents`, `kv-cache`, `mcp`, `mcp-security`, `mcp-servers-and-clients`, `nist-ai-rmf`, `oauth-for-ai-agents`, `owasp-llm-top-10`, `reasoning-models`, `semantic-kernel`, `video-generation-models`, `world-models`, `index`.

**Generated data:** `knowledge/search-index.json`, `knowledge/semantic-index.json`, `knowledge/ontology-v3.json`, `knowledge/sitemap-fragment.xml`.

**Records and tests:** `knowledge/source-verification.json`, `knowledge/SOURCE-VERIFICATION-REPORT.md`, `package.json` (new test wired into `test` and `test:ai-v3`), `tests/knowledge-search.mjs` (one expectation, see §7).

**Not touched:** `search-core.mjs`, `search.js`, `hybrid-search.mjs`, `semantic-core.mjs`, lexicon parts, `search-lexicon.json`, `sw.js`, tools, `main`.

## 9. Ideas for V3.1 (not done)

Read the Semantic Kernel migration guide and add mappings; add a Gemini/Claude reasoning-terminology comparison page; verify the remaining "staging only" pages (`ai-governance`, `computer-use-agents`, `prompt-caching`); add GDPR/AI and DSAR pages with primary-source checks; add Inspect code samples after reading the tutorial; give legacy pages source sections; re-check Sora, OpenAI deprecations and MCP revisions on a monthly schedule.
