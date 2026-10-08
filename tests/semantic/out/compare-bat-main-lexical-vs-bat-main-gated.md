# Before/after: bat-main-lexical → bat-main-gated

Before: Total 426 · PASS 419 · WEAK 0 · MISS 0 · FALSE POSITIVE 7 · pass rate 98.4% · FP rate 1.6%
After (strict): Total 426 · PASS 417 · WEAK 0 · MISS 0 · FALSE POSITIVE 9 · pass rate 97.9% · FP rate 2.1%

Improved: 0 · Unchanged class: 424 · Regressions (PASS before, not PASS after, strict): 2

Regressions that remain regressions after amendments: 2

## Regressions (PASS → not PASS)
- RT239 "ai regulation in the united states": PASS → FALSE POSITIVE — top eu-ai-act; confident unrelated page: eu-ai-act
- RT409 "keep an ai agent from deleting my files": PASS → FALSE POSITIVE — top ai-agent-vs-chatbot; confident wrong page: ai-agent-vs-chatbot
