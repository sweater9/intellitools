# Addendum: final integration commit `04d2f1bb068083c1f0dbd80b47dbb520345184bd`

- Homepage Knowledge links (header nav above 900px; footer at every width), root `sitemap.xml` generated block (272 Knowledge URLs, idempotent, no redirect stubs), offline limitation documented. Details: section 13 of `knowledge/FINAL-CONTENT-EXPANSION-REPORT.md` on the PR branch.
- Local results on this commit: `npm test` exit 0 (`results/npm-test-output-04d2f1b.txt`); ambiguity 18/18; 1,607 frozen queries vs base: 10 fixes, 0 breaks, 0 top-1/top-3 regressions; semantic limited mode 0 violations (`results/semantic-limited-mode-check-04d2f1b.json`); 273 Knowledge files, 6,713 internal links, 0 broken; 0 overflow at 375px; homepage screenshots `screenshots/home-*.png` show the link and no layout change.
- CI: green on `04d2f1b`.
- **Staging is not on this commit.** Checked after the push: the staging home page still has no Knowledge link, while `mcp-authorization.html` has the clickable source links from `d859afd`. So staging serves `d859afd`. The owner must redeploy (autoDeploy is off); then rerun the staging smoke below.
- Staging smoke to rerun after redeploy: home page links to `/knowledge/` (header + footer); `/sitemap.xml` is valid XML, contains the 272 Knowledge URLs and no `hugging-face-transformers`; search answers (Gmail x2, Gmail scopes, MCP authorization x2, `how to secure an mcp server`); legacy redirect; mobile 375px layout.
- Safari / Firefox: not supported in the sandbox. Needs an external browser run.
