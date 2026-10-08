# Before/after: main-A → main-D

Before: Total 426 · PASS 419 · WEAK 0 · MISS 0 · FALSE POSITIVE 7 · pass rate 98.4% · FP rate 1.6%
After (strict): Total 426 · PASS 418 · WEAK 0 · MISS 0 · FALSE POSITIVE 8 · pass rate 98.1% · FP rate 1.9%

Improved: 0 · Unchanged class: 425 · Regressions (PASS before, not PASS after, strict): 1

Regressions that remain regressions after amendments: 1

## Regressions (PASS → not PASS)
- RT409 "keep an ai agent from deleting my files": PASS → FALSE POSITIVE — top ai-agent-vs-chatbot; confident wrong page: ai-agent-vs-chatbot
