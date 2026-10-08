# Before/after: h2-baseline → h2-final

Before: Total 146 · PASS 63 · WEAK 31 · MISS 30 · FALSE POSITIVE 22 · pass rate 43.2% · FP rate 15.1%
After (strict): Total 146 · PASS 139 · WEAK 1 · MISS 0 · FALSE POSITIVE 6 · pass rate 95.2% · FP rate 4.1%
After (with documented coverage-gap amendments): PASS 145 · WEAK 1 · MISS 0 · FALSE POSITIVE 0 · pass rate 99.3% · FP rate 0.0%

Improved: 81 · Unchanged class: 60 · Regressions (PASS before, not PASS after, strict): 5

Regressions that remain regressions after amendments: 0

## Regressions (PASS → not PASS)
- H2-113 "kubernetes deployment vs statefulset": PASS → FALSE POSITIVE (amended: PASS) — top kubernetes; confident unrelated page: kubernetes
- H2-114 "how do i autoscale pods": PASS → FALSE POSITIVE (amended: PASS) — top kubernetes; confident unrelated page: kubernetes
- H2-115 "object detection bounding boxes and iou": PASS → FALSE POSITIVE (amended: PASS) — top object-detection; confident unrelated page: object-detection
- H2-116 "image segmentation models": PASS → FALSE POSITIVE (amended: PASS) — top object-detection; confident unrelated page: object-detection
- H2-117 "robot operating system nodes and topics": PASS → FALSE POSITIVE (amended: PASS) — top robot-operating-system; confident unrelated page: robot-operating-system
