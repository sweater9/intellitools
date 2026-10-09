# Knowledge V3: final production-readiness QA

- PR: https://github.com/sweater9/intellitools/pull/30
- Staging: https://intellitools-knowledge-v3-release.onrender.com/knowledge/
- Deployed commit (verified by data-file equality): `1fd211dd3568dcca6e66663d8151d5f233f61c4c`
- PR head after this QA: `d859afd6ff10674e4fda1ca0de2ad3e21d2e63c1` (needs redeploy to staging)
- Date: 2026-10-09
- Evidence branch (no PR; do not merge): `qa/knowledge-v3-evidence`

## Result: staging functional QA PASS with documented limits; production = NO-GO today

Legend: PASS, FAIL, PARTIAL, NOT TESTED. "Staging" = the deployed Render site, reached through a hosted Chromium-based rendering service because the sandbox egress policy blocks `onrender.com` for direct requests. "Local" = headless Chromium 1194 (Playwright) against a static server serving the PR branch.

## Test matrix

| # | Test | Environment | Result | Evidence |
|---|---|---|---|---|
| 1 | Staging reachable; index renders; title, 271 links | Staging | PASS | HTTP 200, "Knowledge: understand AI, practically" |
| 2 | Staging serves this commit's data: `search-lexicon.json`, `search-index.json`, `semantic-index.json` parsed and compared with the repo at `1fd211d` | Staging | PASS (3/3 identical JSON) | `results/` scripts; compared programmatically |
| 3 | Desktop layout: search results, Gmail scopes article | Staging | PASS (visual) | `screenshots/staging-desktop-*.png` |
| 4 | Mobile layout: index, MCP authorization article, Sora article | Staging | PASS (visual) | `screenshots/staging-mobile-*.png` |
| 5 | Mobile horizontal overflow at 375px, all 273 HTML files | Local | PASS after fix (5 new pages and `a2a-protocol` overflowed before the earlier CSS fix) | `screenshots/local-BEFORE-fix-*`, `results/q3.mjs` |
| 6 | Knowledge search answers (7 queries, JS-rendered) | Staging | PASS 7/7 | `results/staging-search-answers.txt` |
| 7 | Search answers + learn-more (8 queries) incl. offline-after-load | Local | PASS 8/8 | `results/qa.mjs` |
| 8 | Hugging Face legacy URL | Staging + Local | PASS: `/knowledge/hugging-face-transformers.html` ends at `hugging-face.html`, 200, title "Hugging Face for Builders"; locally query string and hash preserved | `screenshots/staging-redirect-hugging-face.png` |
| 9 | Internal navigation/article links | Local (build output) | PASS: 273 files, 6,713 relative links, 0 broken | scripted crawl |
| 10 | Internal links on staging | Staging | PARTIAL: index fetched with 271 links and every page tested returned 200; a full staging crawl was not run | n/a |
| 11 | External source links (41 URLs in source-check blocks) | Staging data + live fetch | PARTIAL: 22 fetched live today with HTTP 200; 10 seen in search results with page content; 9 GitHub repo URLs not fetched at github.com (their READMEs were read through raw URLs) | `results/source-urls.txt` |
| 12 | External source links clickable | Local | FAIL before, PASS after commit `d859afd` (URLs were plain text; now links with `rel="noopener noreferrer"`) | `screenshots/local-after-fix-mobile-sources-links.png` |
| 13 | Gmail and MCP answers | Staging | PASS: `how do I connect an AI agent to Gmail` and `How can an AI agent access Gmail?` answer the Gmail integration page; `is gmail.readonly a restricted scope` answers the scopes page; `mcp authorization` and `how does oauth work for mcp servers` answer `mcp-authorization`; `how to secure an mcp server` still answers `mcp-security` | `results/staging-search-answers.txt` |
| 14 | Knowledge separate from existing tools | Repo + staging | PASS: the PR changes no file outside `knowledge/`, `tests/` and `package.json` versus its base; staging home and `/tools/ai-prompt-builder.html` return 200; the home page has no link to `/knowledge/` | `git diff --stat`, staging fetches |
| 15 | Offline | Local (server stopped to get a real offline state) | PARTIAL: see below | `results/off3.mjs` |
| 16 | Chrome/Chromium | Local + hosted | PASS | above |
| 17 | Safari (WebKit) | n/a | NOT TESTED (no WebKit in sandbox; staging unreachable from it) | |
| 18 | Firefox | n/a | NOT TESTED (same) | |
| 19 | Browser console errors | Local | PASS: 0 errors on 10 new pages and search at both sizes | `results/qa.mjs` |
| 20 | Browser console errors on staging | Staging | NOT MEASURED (hosted renderer does not return console logs) | |
| 21 | `npm test` | Local, `d859afd` | PASS (exit 0) | `results/npm-test-output.txt` |
| 22 | 18 ambiguity gate tests | Local | PASS 18/18 | |
| 23 | New search regression tests (10 ranking, Gmail, MCP, neighbours, redirect) | Local | PASS | `tests/knowledge-search-regressions.mjs` |
| 24 | 1,607 frozen queries, base commit vs now | Local | PASS: 10 answer changes, all fixes, 0 breaks, 0 top-1 and 0 top-3 regressions | `results/fullcmp.mjs` |
| 25 | Rebuilt semantic index, limited mode, 1,607 queries | Local | PASS: 0 violations for solid/answer/tools/gap/need/learn; page ids match the search index (270) | `results/semantic-limited-mode-check.json` |
| 26 | CI on PR head | GitHub | PASS on `1fd211d` and on `d859afd` | PR checks |

## Offline detail (test 15)
- The service worker (`sw.js`) is registered only by the tools home (`v2-tools.js`). Knowledge pages never register it and `sw.js` does not precache Knowledge files.
- After visiting the tools home and then Knowledge online: the Knowledge index, search (including `?q=`) and previously visited articles work with the server stopped. An article that was not visited falls back to the tools home page (`sw.js` catch-all).
- A user who lands directly on Knowledge has no service worker; offline reload relies on the browser's HTTP cache.
- Playwright's `setOffline` does not block service-worker network requests in Chromium, so those results were discarded and the test was redone by stopping the server.
- This is existing behaviour, not caused by this PR. Classified as a limitation, not a release blocker.

## Other findings (not fixed, no code defect)
1. The root `sitemap.xml` has no Knowledge URLs. `knowledge/sitemap-fragment.xml` is generated but "not wired in automatically" (the build says so). Merging it is a release step.
2. The tools home has no link to `/knowledge/`. Consistent with "separate", but Knowledge is not discoverable from the home page.
3. `is gmail.readonly a restricted scope` shows learn-more items `large-language-models`, `tokens`, `context-windows` after the two Gmail pages. Existing learn-more mechanics; quality note only.
4. Staging serves `1fd211d`. Commit `d859afd` (clickable source links, confirmed o-series announcement dates) is not deployed.

## Blockers for production
1. Independent specialist sign-off: EU AI Act, MCP authorization, Gmail scopes (checklists in `REVIEWER-CHECKLISTS.md`). None recorded.
2. Safari and Firefox not tested.
3. Redeploy staging at the final SHA and rerun the staging smoke (matrix rows 1-8, 13).
4. Release-day recheck: OpenAI shutdowns on 2026-10-23 (o1, o1-pro, o3-mini, o4-mini) and the Sora API status (still unconfirmed).
5. Owner decisions: lexicon change (committed lexicon was stale; generator is not canonical), sitemap merge, whether to link Knowledge from the home page.

## Recommendation
- Staging: GO (functional checks pass on Chromium; defects found were fixed).
- Production: NO-GO until blockers 1-4 are cleared. Blocker 5 needs an owner decision, not more testing.
