# Before/after: baseline → final

Before: Total 426 · PASS 253 · WEAK 68 · MISS 46 · FALSE POSITIVE 59 · pass rate 59.4% · FP rate 13.8%
After (strict): Total 426 · PASS 419 · WEAK 0 · MISS 0 · FALSE POSITIVE 7 · pass rate 98.4% · FP rate 1.6%
After (with documented coverage-gap amendments): PASS 426 · WEAK 0 · MISS 0 · FALSE POSITIVE 0 · pass rate 100.0% · FP rate 0.0%

Improved: 172 · Unchanged class: 248 · Regressions (PASS before, not PASS after, strict): 6

Regressions that remain regressions after amendments: 0

## Regressions (PASS → not PASS)
- RT190 "how does object detection like yolo work": PASS → FALSE POSITIVE (amended: PASS) — top object-detection; confident unrelated page: object-detection
- RT191 "opencv tutorial for face detection": PASS → FALSE POSITIVE (amended: PASS) — top object-detection; confident unrelated page: object-detection
- RT202 "how do i program a robot with ros": PASS → FALSE POSITIVE (amended: PASS) — top robot-operating-system; confident unrelated page: robot-operating-system
- RT238 "what is gdpr and does it cover ai training data": PASS → FALSE POSITIVE (amended: PASS) — top gdpr-and-ai; confident unrelated page: gdpr-and-ai
- RT290 "kubenetes basics": PASS → FALSE POSITIVE (amended: PASS) — top kubernetes; confident unrelated page: kubernetes
- RT296 "how do i run a kubernetes cluster": PASS → FALSE POSITIVE (amended: PASS) — top kubernetes; confident unrelated page: kubernetes
