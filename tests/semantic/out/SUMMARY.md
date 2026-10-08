# Semantic prototype — arm × dataset (strict classification, no amendments)

## H3 (primary, unseen) — `frozen-holdout3.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 211 | 71 | 54 | 53 | 33 | 33.6% | 15.6% | 32.5% | 54.1% | 58.6% | 6 |
| B semantic-only | 211 | 94 | 59 | 31 | 27 | 44.5% | 12.8% | 51.0% | 69.4% | 76.4% | 6 |
| C hybrid | 211 | 71 | 79 | 27 | 34 | 33.6% | 16.1% | 52.2% | 70.7% | 77.7% | 6 |
| D hybrid + confidence/margin gate | 211 | 73 | 80 | 27 | 31 | 34.6% | 14.7% | 52.2% | 70.7% | 77.7% | 5 |

## H2 — `frozen-holdout2.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 146 | 139 | 1 | 0 | 6 | 95.2% | 4.1% | 100.0% | 100.0% | 100.0% | 6 |
| B semantic-only | 146 | 78 | 34 | 18 | 16 | 53.4% | 11.0% | 66.7% | 77.5% | 83.8% | 8 |
| C hybrid | 146 | 138 | 1 | 0 | 7 | 94.5% | 4.8% | 99.1% | 100.0% | 100.0% | 7 |
| D hybrid + confidence/margin gate | 146 | 140 | 0 | 0 | 6 | 95.9% | 4.1% | 99.1% | 100.0% | 100.0% | 6 |

## Main 426 — `frozen-queries.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 426 | 419 | 0 | 0 | 7 | 98.4% | 1.6% | 99.7% | 100.0% | 100.0% | 7 |
| B semantic-only | 426 | 239 | 93 | 43 | 51 | 56.1% | 12.0% | 64.1% | 79.6% | 83.6% | 22 |
| C hybrid | 426 | 417 | 0 | 0 | 9 | 97.9% | 2.1% | 99.3% | 100.0% | 100.0% | 8 |
| D hybrid + confidence/margin gate | 426 | 417 | 0 | 0 | 9 | 97.9% | 2.1% | 99.3% | 100.0% | 100.0% | 8 |

## Calibration (design set) — `calibration-semantic.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 188 | 73 | 44 | 49 | 22 | 38.8% | 11.7% | 27.9% | 42.6% | 59.6% | 1 |
| B semantic-only | 188 | 89 | 55 | 24 | 20 | 47.3% | 10.6% | 55.9% | 75.0% | 79.4% | 4 |
| C hybrid | 188 | 73 | 73 | 20 | 22 | 38.8% | 11.7% | 50.7% | 72.1% | 80.9% | 1 |
| D hybrid + confidence/margin gate | 188 | 79 | 68 | 20 | 21 | 42.0% | 11.2% | 50.7% | 72.1% | 80.9% | 1 |

## Ambiguity — `ambiguity-semantic.json`

| Arm | Total | Pass | Weak | Miss | FP | Pass rate | FP rate | top-1 | top-3 | top-5 | neg/gap FP |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| A lexical (existing) | 67 | 53 | 1 | 0 | 13 | 79.1% | 19.4% | 88.2% | 100.0% | 100.0% | 12 |
| B semantic-only | 67 | 54 | 4 | 0 | 9 | 80.6% | 13.4% | 76.5% | 100.0% | 100.0% | 6 |
| C hybrid | 67 | 53 | 1 | 0 | 13 | 79.1% | 19.4% | 94.1% | 100.0% | 100.0% | 12 |
| D hybrid + confidence/margin gate | 67 | 56 | 1 | 0 | 10 | 83.6% | 14.9% | 94.1% | 100.0% | 100.0% | 9 |

