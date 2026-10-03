# IntelliTools Knowledge — content workstream

Static, browser-friendly Knowledge content: 35 articles (29 explainers, 6 comparisons), an AI Glossary (64 terms), a local search index and learning paths. No APIs, databases, accounts or server code. Nothing outside `knowledge/` was modified.

## Layout
- `src/pages-*.mjs`, `src/glossary.mjs`, `src/meta.mjs` — the content (source of truth). Body text is light Markdown; `[[slug]]` / `[[slug|label]]` link to other pages and the build fails on any broken link.
- `src/build.mjs` — `node knowledge/src/build.mjs` regenerates every `.html`, `search-index.json` and `sitemap-fragment.xml`. Generated files are committed so the folder can be served as-is.
- `knowledge.css` — small stylesheet that reuses `v2.css` tokens.
- `search-index.json` — for the primary workstream's local Knowledge Search: per page `title`, `question`, `summary`, `aliases`, `keywords`, `related`, `headings`, `relatedTools`; plus `glossary` and `paths`.
- `sitemap-fragment.xml` — URLs to merge into `sitemap.xml` at integration (not wired in).

## Tool recommendations (deliberately sparse)
`relatedTools` is non-empty on only a few pages; the rest are Knowledge-only. Search should treat an empty `relatedTools` as "show Knowledge results only".
- AI Prompt Builder → prompt-engineering, system-prompts, common-prompting-mistakes
- Fact Anchor Checker → ai-hallucinations, how-to-reduce-hallucinations, ai-evaluation
- PII & Secret Redactor → ai-privacy-and-security

## Integration notes
- Pages ship a minimal header/footer using existing markup; swap for the final Tools | Knowledge | Labs | Play navigation when it exists.
- No analytics, ads or service-worker changes. Add `knowledge/` to the SW precache only if desired.
- Canonical/og URLs assume `https://intellitools.online/knowledge/…`; adjust for staging if needed.
- Fast-moving facts (MCP spec details, provider retention/pricing, model sizes) are written version-agnostically and point to current docs. Re-review before launch.
