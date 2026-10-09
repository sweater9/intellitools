# Evidence checklists for specialist reviewers

These are the author-agent's factual records, prepared 2026-10-09. **They are not reviews or approvals.** Each "checked by author" statement means the page claim was compared with the quoted primary text on that date. An independent reviewer should repeat the comparison from the primary source, not from this file. Sign-off blocks are intentionally blank.

Consolidated EUR-Lex versions are informational; use the Official Journal text for legal conclusions.

## A. EU AI Act: `knowledge/eu-ai-act.html`

Primary sources: Regulation (EU) 2026/1744 (https://eur-lex.europa.eu/eli/reg/2026/1744/oj/eng); consolidated Regulation (EU) 2024/1689 as of 2026-07-27, EUR-Lex document `02024R1689-20260727` (https://eur-lex.europa.eu/eli/reg/2024/1689/2026-07-27/eng).

| # | Page statement | Primary text read | Author check | Reviewer: confirm / correct |
|---|---|---|---|---|
| 1 | Reg. (EU) 2026/1744 (Digital Omnibus on AI) was published in the OJ on 24 July 2026 and is in force from 27 July 2026 | Title "of 8 July 2026"; "OJ L, 2026/1744, 24.7.2026"; "shall enter into force on the third day following that of its publication"; EUR-Lex metadata first entry into force 2026-07-27 | consistent | |
| 2 | Annex III high-risk applies from 2 Dec 2027; Annex I from 2 Aug 2028 | Art. 113(c): "(i) 2 December 2027 as regards AI systems classified as high-risk pursuant to Article 6(2) and Annex III; and (ii) 2 August 2028 ... Article 6(1) and Annex I" | consistent | |
| 3 | New Art. 5 prohibitions apply from 2 Dec 2026 | Art. 113(a): "Chapters I and II shall apply from 2 February 2025, with the exception of Article 5(1), first subparagraph, points (ba) and (bb), and Article 5(1a) and (1b) which shall apply from 2 December 2026" | consistent | |
| 4 | (ba): AI systems generating or manipulating realistic intimate or sexually explicit images, video or audio of an identifiable person without explicit consent | Art. 5(1) point (ba) as inserted (full wording in Reg. 2026/1744, Art. 1(7)) | paraphrase; reviewer to judge fidelity | |
| 5 | (bb): AI systems generating or manipulating child sexual abuse material within Directive 2011/93/EU | point (bb): "...within the meaning of Article 2, points (c) and (e), of Directive 2011/93/EU, except where a 'without right' defence applies under national law" | page omits the "without right" exception | |
| 6 | Paragraphs 1a/1b limit the prohibition to intended-purpose or foreseeable, unsafeguarded outcomes, and to deployers who use a system for that purpose | Art. 5(1a)(a)(i)-(ii), (1a)(b); 5(1b) (manipulation that does not increase exposure or alter the nature of depicted activities is not manipulation) | page summary is shorter than the text; 1b not mentioned | |
| 7 | Prohibitions applied from 2 Feb 2025; Chapter V (GPAI) from 2 Aug 2025 | Art. 113(a) and (b): "Chapter III Section 4, Chapter V, Chapter VII and Chapter XII and Article 78 shall apply from 2 August 2025, with the exception of Article 101" | consistent | |
| 8 | General application 2 Aug 2026 | "It shall apply from 2 August 2026." | consistent | |

Not checked by the author: Article 50 text and the reported 2 Dec 2026 transitional period for existing systems (secondary commentary only: White & Case, Gibson Dunn, CSA note); Commission guidance; national implementation; delegated acts; penalties; scope and role definitions (provider, deployer) as summarised in the page's general description.

Reviewer questions: Is the page's two-sentence summary of (ba)/(bb)/1a/1b acceptable as orientation, or must it quote the text? Are the 1b and "without right" omissions material? Should the page say it is not legal advice more prominently?

Sign-off: Reviewer ______  Role ______  Date ______  Outcome (approve / changes required) ______

## B. MCP Authorization: `knowledge/mcp-authorization.html` (and lifecycle text in `mcp.html`, `mcp-servers-and-clients.html`)

Primary sources: MCP specification revision 2026-07-28: Authorization (https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization), Client registration (.../authorization/client-registration), Key changes (https://modelcontextprotocol.io/specification/2026-07-28/changelog).

| # | Page statement | Primary text read | Author check | Reviewer |
|---|---|---|---|---|
| 1 | Authorization is optional; HTTP transports SHOULD conform; stdio SHOULD NOT and uses environment credentials | "Authorization is OPTIONAL..."; HTTP SHOULD; STDIO "SHOULD NOT follow this specification, and instead retrieve credentials from the environment" | consistent | |
| 2 | MCP server = OAuth 2.1 resource server; client = OAuth 2.1 client; spec cites an IETF draft | "draft-ietf-oauth-v2-1-13" listed under Standards Compliance | consistent | |
| 3 | Servers MUST implement RFC 9728; clients MUST use it for AS discovery | "MCP servers MUST implement OAuth 2.0 Protected Resource Metadata (RFC9728). MCP clients MUST use..." | consistent | |
| 4 | AS must provide RFC 8414 or OIDC discovery; clients must support both | "MCP authorization servers MUST provide at least one of ... MCP clients MUST support both" | consistent | |
| 5 | Clients/AS SHOULD support Client ID Metadata Documents; DCR deprecated, kept for compatibility | quoted on the overview page | consistent | |
| 6 | Clients MUST send RFC 8707 `resource` in authorization and token requests, whether or not the AS supports it | "MUST be included in both authorization requests and token requests"; "MUST send this parameter regardless of whether authorization servers support it" | consistent | |
| 7 | Bearer token on every HTTP request; never in the query string | Token Requirements section | consistent | |
| 8 | Servers MUST validate audience; 401 for invalid or expired; MUST NOT accept or transit other tokens | Token Handling section | consistent | |
| 9 | AS SHOULD return RFC 9207 `iss`; clients MUST validate it when present | Key changes minor change 7; overview table (compare present `iss`; reject if AS advertises support and `iss` absent) | page omits the reject-if-advertised-and-absent rule and the note that a future revision may raise SHOULD to MUST | |
| 10 | Refresh tokens: keep confidential; do not assume issued | Refresh Tokens section | consistent | |
| 11 | Step-up authorization exists | Headings "Scope Challenge Handling" / "Step-Up Authorization Flow" | existence only | |
| 12 | `mcp` / `mcp-servers-and-clients`: revision 2026-07-28 removed `initialize` and sessions, added `server/discover`, replaced server-initiated requests with a multi round-trip pattern | Key changes major items 1, 2, 3, 7 | consistent | |

Not checked: authorization-server-discovery and scope-selection sub-pages (not retrieved); whether 2026-07-28 is the newest revision when read; SDK/client uptake; the 2025-11-25 comparison beyond the changelog.

Reviewer questions: Should row 9's omissions be added? Is "token passthrough" framing accurate for the intended audience? Are the failure-mode bullets safe advice?

Sign-off: Reviewer ______  Role ______  Date ______  Outcome ______

## C. Gmail API Scopes and verification: `knowledge/gmail-api-scopes-and-verification.html` (and `gmail-for-ai-agents.html`, `oauth-for-ai-agents.html` edits)

Primary sources: https://developers.google.com/workspace/gmail/api/auth/scopes ; https://developers.google.com/workspace/workspace-api-user-data-developer-policy (page text: "Last updated 2026-09-03 UTC") ; https://developers.google.com/terms/api-services-user-data-policy (page text: "Last updated February 15, 2024").

| # | Page statement | Primary text read | Author check | Reviewer |
|---|---|---|---|---|
| 1 | `gmail.labels` non-sensitive; `gmail.send` sensitive | scope table classes | consistent | |
| 2 | Restricted: `mail.google.com`, `gmail.readonly`, `gmail.compose`, `gmail.insert`, `gmail.modify`, `gmail.metadata`, `gmail.settings.basic`, `gmail.settings.sharing` | restricted table; `gmail.settings.sharing` described as administrative use only (service account with domain-wide delegation) | consistent after correction in `1fd211d` | |
| 3 | Restricted scopes require restricted-scope OAuth app verification | "These scopes provide wide access to Google user data and require restricted scope OAuth App Verification" | consistent | |
| 4 | Storing restricted-scope data on servers (or transmitting it) requires a security assessment | "If you store restricted scope data on servers (or transmit), then you must go through a security assessment." | consistent | |
| 5 | Workspace policy bars transferring, selling or using user data "to create, train, or improve a machine learning or artificial intelligence model beyond that specific user's personalized model for the appropriate use case or user-facing feature" | quoted from the Workspace policy page | consistent | |
| 6 | Other Limited Use limits (transfers, human reading) | Workspace policy bullets 1-3 | summarised | |
| 7 | The older API Services policy page did not contain the AI/ML sentence in the extracted text | extracted text from that page | extraction method limitation; reviewer should check the page itself | |
| 8 | `gmail-for-ai-agents`: "readonly is a restricted scope, not a lightweight one" | scope table | consistent | |

Not checked: verification fees, timelines and thresholds; rules for unverified/internal apps; consumer vs Workspace differences; add-on scope classes (`gmail.addons.current.*` appear on the page and are not classified by our page); GDPR or other legal obligations.

Reviewer questions: Does "personalised model" carve-out wording on our page overstate what is allowed? Is "keep restricted-scope data off your servers" safe guidance, or should it be removed? Is the advice on debugging with real mail consistent with policy?

Sign-off: Reviewer ______  Role ______  Date ______  Outcome ______
