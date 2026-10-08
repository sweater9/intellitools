# Semantic prototype — arm × dataset (strict classification, no amendments)

## H3 (primary, unseen) — `frozen-holdout3.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 211 | 71 | 54 | 53 | 33 | 33.6% | 15.6% | 32.5% | 54.1% | 58.6% | 6 |
| B semantic-only | 211 | 97 | 62 | 33 | 19 | 46.0% | 9.0% | 52.9% | 71.3% | 76.4% | 2 |
| C hybrid | 211 | 71 | 79 | 27 | 34 | 33.6% | 16.1% | 51.0% | 70.1% | 77.7% | 6 |
| D hybrid + confidence/margin gate | 211 | 73 | 80 | 28 | 30 | 34.6% | 14.2% | 51.0% | 70.1% | 77.7% | 5 |

## H2 — `frozen-holdout2.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 146 | 139 | 1 | 0 | 6 | 95.2% | 4.1% | 100.0% | 100.0% | 100.0% | 6 |
| B semantic-only | 146 | 75 | 42 | 15 | 14 | 51.4% | 9.6% | 66.7% | 77.5% | 86.5% | 6 |
| C hybrid | 146 | 138 | 1 | 0 | 7 | 94.5% | 4.8% | 99.1% | 100.0% | 100.0% | 7 |
| D hybrid + confidence/margin gate | 146 | 139 | 1 | 0 | 6 | 95.2% | 4.1% | 99.1% | 100.0% | 100.0% | 6 |

## Main 426 — `frozen-queries.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 426 | 419 | 0 | 0 | 7 | 98.4% | 1.6% | 99.7% | 100.0% | 100.0% | 7 |
| B semantic-only | 426 | 239 | 104 | 41 | 42 | 56.1% | 9.9% | 65.5% | 79.9% | 84.5% | 17 |
| C hybrid | 426 | 417 | 0 | 0 | 9 | 97.9% | 2.1% | 99.3% | 100.0% | 100.0% | 8 |
| D hybrid + confidence/margin gate | 426 | 416 | 1 | 0 | 9 | 97.7% | 2.1% | 99.3% | 100.0% | 100.0% | 8 |

## Calibration (design set) — `calibration-semantic.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 188 | 73 | 44 | 49 | 22 | 38.8% | 11.7% | 27.9% | 42.6% | 59.6% | 1 |
| B semantic-only | 188 | 88 | 59 | 28 | 13 | 46.8% | 6.9% | 55.1% | 75.0% | 77.2% | 0 |
| C hybrid | 188 | 73 | 73 | 20 | 22 | 38.8% | 11.7% | 50.7% | 72.8% | 80.9% | 1 |
| D hybrid + confidence/margin gate | 188 | 81 | 68 | 20 | 19 | 43.1% | 10.1% | 50.7% | 72.8% | 80.9% | 0 |

## Ambiguity — `ambiguity-semantic.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 67 | 53 | 1 | 0 | 13 | 79.1% | 19.4% | 88.2% | 100.0% | 100.0% | 12 |
| B semantic-only | 67 | 59 | 7 | 0 | 1 | 88.1% | 1.5% | 88.2% | 100.0% | 100.0% | 0 |
| C hybrid | 67 | 53 | 1 | 0 | 13 | 79.1% | 19.4% | 94.1% | 100.0% | 100.0% | 12 |
| D hybrid + confidence/margin gate | 67 | 57 | 1 | 0 | 9 | 85.1% | 13.4% | 94.1% | 100.0% | 100.0% | 8 |

