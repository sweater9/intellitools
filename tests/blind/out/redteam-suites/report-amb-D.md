# Knowledge red-team report — amb-D

Dataset: `tests/redteam/ambiguity-semantic.json` sha256 `1d410380832011183b21041c4c4f26bd400262ecb124ca725a81d87e772f6a42`

Total 67 · PASS 53 · WEAK 1 · MISS 0 · FALSE POSITIVE 13
Pass rate 79.1% · False-positive rate 19.4%
Retrieval on page-kind queries (17): top-1 94.1% · top-3 100.0% · top-5 100.0%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| neg | 50 | 38 | 0 | 0 | 12 | 76.0% |
| page | 17 | 15 | 1 | 0 | 1 | 88.2% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 50 | 38 | 0 | 0 | 12 | 76.0% |
| ambiguous-tech-context | 17 | 15 | 1 | 0 | 1 | 88.2% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguity | 67 | 53 | 1 | 0 | 13 | 79.1% |

## FALSE POSITIVE
- AMB-N02 [neg/ambiguous-or-off-topic] "electrical transformer humming noise" → transformers (score 50, solid yes) — expected none; confident answer for out-of-scope query: transformers
- AMB-N04 [neg/ambiguous-or-off-topic] "mamba mentality basketball quote" → state-space-models (score 66.91118996479393, solid yes) — expected none; confident answer for out-of-scope query: state-space-models
- AMB-N07 [neg/ambiguous-or-off-topic] "monty python sketch" → python (score 46, solid yes) — expected none; confident answer for out-of-scope query: python
- AMB-N14 [neg/ambiguous-or-off-topic] "react to a rude comment calmly" → react (score 54, solid yes) — expected none; confident answer for out-of-scope query: react
- AMB-N20 [neg/ambiguous-or-off-topic] "rust remover for cast iron pan" → rust (score 46, solid yes) — expected none; confident answer for out-of-scope query: rust
- AMB-N21 [neg/ambiguous-or-off-topic] "rust game survival tips" → rust (score 46, solid yes) — expected none; confident answer for out-of-scope query: rust
- AMB-N24 [neg/ambiguous-or-off-topic] "java island travel guide" → java (score 46, solid yes) — expected none; confident answer for out-of-scope query: java
- AMB-N29 [neg/ambiguous-or-off-topic] "panda express menu" → express (score 52, solid yes) — expected none; confident answer for out-of-scope query: express
- AMB-N39 [neg/ambiguous-or-off-topic] "whisper quietly in class" → speech-ai (score 55, solid yes) — expected none; confident answer for out-of-scope query: speech-ai
- AMB-N40 [neg/ambiguous-or-off-topic] "kernel panic on my laptop" → local-ai (score 47, solid yes) — expected none; confident answer for out-of-scope query: local-ai
- AMB-N42 [neg/ambiguous-or-off-topic] "embedding a screw in a wall" → embeddings (score 44, solid yes) — expected none; confident answer for out-of-scope query: embeddings
- AMB-N50 [neg/ambiguous-or-off-topic] "token of friendship" → tokens (score 41, solid yes) — expected none; confident answer for out-of-scope query: tokens
- AMB-P05 [page/ambiguous-tech-context] "react component for streaming chat" → react (score 59, solid yes) — expected react-ai-interfaces|react-chatbot-state|streaming-ai-responses; confident wrong page: react

## MISS

## WEAK
- AMB-P12 [page/ambiguous-tech-context] "claude style constitutional training" → (weak) constitutional-ai-and-rlaif (score 40.18142721999091, solid no) — expected constitutional-ai-and-rlaif; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMB-N01 | PASS | neg | transformer toy for my nephew | (weak) transformers | 50 | no | — | no confident answer |
| AMB-N02 | FALSE POSITIVE | neg | electrical transformer humming noise | transformers | 50 | yes | — | confident answer for out-of-scope query: transformers |
| AMB-N03 | PASS | neg | transformers movie cast | (weak) vision-transformers | 71.69175251108281 | no | — | no confident answer |
| AMB-N04 | FALSE POSITIVE | neg | mamba mentality basketball quote | state-space-models | 66.91118996479393 | yes | — | confident answer for out-of-scope query: state-space-models |
| AMB-N05 | PASS | neg | black mamba snake bite first aid | (weak) state-space-models | 86.88251888238202 | no | — | no confident answer |
| AMB-N06 | PASS | neg | python pet snake care | (weak) python | 46 | no | — | no confident answer |
| AMB-N07 | FALSE POSITIVE | neg | monty python sketch | python | 46 | yes | — | confident answer for out-of-scope query: python |
| AMB-N08 | PASS | neg | agent real estate commission | (weak) agent-protocol-landscape | 82.77848162121192 | no | — | no confident answer |
| AMB-N09 | PASS | neg | secret agent spy film | (weak) multi-agent-systems | 88.90867196632463 | no | — | no confident answer |
| AMB-N10 | PASS | neg | travel agent booking tips | (weak) agent-memory | 53.225018120247356 | no | — | no confident answer |
| AMB-N11 | PASS | neg | fashion model agency | (weak) owasp-llm-top-10 | 78.83640615440132 | no | — | no confident answer |
| AMB-N12 | PASS | neg | model train layout hobby | (weak) world-models | 55.1293077068713 | no | — | no confident answer |
| AMB-N13 | PASS | neg | scale model aircraft kit | (weak) onnx-runtime | 66.13327505590007 | no | — | no confident answer |
| AMB-N14 | FALSE POSITIVE | neg | react to a rude comment calmly | react | 54 | yes | — | confident answer for out-of-scope query: react |
| AMB-N15 | PASS | neg | chemical reaction rate experiment | (weak) alphafold | 40.716641163738906 | no | — | no confident answer |
| AMB-N16 | PASS | neg | docker clothing sale | (weak) docker | 75 | no | — | no confident answer |
| AMB-N17 | PASS | neg | dock worker union strike | (weak) multi-agent-systems | 91.8347137606072 | no | — | no confident answer |
| AMB-N18 | PASS | neg | go for a run tonight | (weak) go-language | 32.81547657817535 | no | — | no confident answer |
| AMB-N19 | PASS | neg | go board game opening | (weak) ai-agents | 59.27714904476691 | no | — | no confident answer |
| AMB-N20 | FALSE POSITIVE | neg | rust remover for cast iron pan | rust | 46 | yes | — | confident answer for out-of-scope query: rust |
| AMB-N21 | FALSE POSITIVE | neg | rust game survival tips | rust | 46 | yes | — | confident answer for out-of-scope query: rust |
| AMB-N22 | PASS | neg | swift taylor tour dates | (weak) swe-bench | 5.042149959503012 | no | — | no confident answer |
| AMB-N23 | PASS | neg | swift bird migration | (weak) prisma-and-orms | 56.354119714345025 | no | — | no confident answer |
| AMB-N24 | FALSE POSITIVE | neg | java island travel guide | java | 46 | yes | — | confident answer for out-of-scope query: java |
| AMB-N25 | PASS | neg | ruby red lipstick shade | (weak) red-teaming | 140.97985916293345 | no | — | no confident answer |
| AMB-N26 | PASS | neg | spring boot footwear | (weak) java | 38.5947962212105 | no | — | no confident answer |
| AMB-N27 | PASS | neg | spark plug gap setting | (weak) generative-adversarial-networks | 50.043385885182005 | no | — | no confident answer |
| AMB-N28 | PASS | neg | pandas habitat bamboo | (weak) python-data-for-ai | 84.09404320365446 | no | — | no confident answer |
| AMB-N29 | FALSE POSITIVE | neg | panda express menu | express | 52 | yes | — | confident answer for out-of-scope query: express |
| AMB-N30 | PASS | neg | bear market investing | (weak) eu-ai-act | 50.240681818748236 | no | — | no confident answer |
| AMB-N31 | PASS | neg | apple harvest season | (weak) gpus-and-ai-accelerators | 78.699355390112 | no | — | no confident answer |
| AMB-N32 | PASS | neg | oracle bones ancient china | (weak) csharp | 27.451515198454914 | no | — | no confident answer |
| AMB-N33 | PASS | neg | cobra snake venom | (weak) none | 0 | no | — | no confident answer |
| AMB-N34 | PASS | neg | llama wool sweater | (weak) llama-cpp | 124.92071968064721 | no | — | no confident answer |
| AMB-N35 | PASS | neg | llama farm visit | (weak) llama-cpp | 57.80899987828232 | no | — | no confident answer |
| AMB-N36 | PASS | neg | claude monet paintings | (weak) multimodal-ai | 54.08846433038017 | no | — | no confident answer |
| AMB-N37 | PASS | neg | gemini zodiac traits | (weak) kubernetes | 45.07470333225769 | no | — | no confident answer |
| AMB-N38 | PASS | neg | bard of avon shakespeare | (weak) mmlu | 28.173930004469735 | no | — | no confident answer |
| AMB-N39 | FALSE POSITIVE | neg | whisper quietly in class | speech-ai | 55 | yes | — | confident answer for out-of-scope query: speech-ai |
| AMB-N40 | FALSE POSITIVE | neg | kernel panic on my laptop | local-ai | 47 | yes | — | confident answer for out-of-scope query: local-ai |
| AMB-N41 | PASS | neg | docker whale logo history | (weak) docker | 75 | no | — | no confident answer |
| AMB-N42 | FALSE POSITIVE | neg | embedding a screw in a wall | embeddings | 44 | yes | — | confident answer for out-of-scope query: embeddings |
| AMB-N43 | PASS | neg | vector art drawing tutorial | (weak) choosing-a-vector-store | 67.15660806426094 | no | — | no confident answer |
| AMB-N44 | PASS | neg | tensor of a physics stress | (weak) physics-informed-neural-networks | 54.18014421552659 | no | — | no confident answer |
| AMB-N45 | PASS | neg | cloud storage for family photos | (weak) gcp-fundamentals | 64.77825289991179 | no | — | no confident answer |
| AMB-N46 | PASS | neg | nginx hair salon | (weak) vision-transformers | 56.910651022008125 | no | — | no confident answer |
| AMB-N47 | PASS | neg | mongo the movie character | (weak) mongodb | 52.098953349688074 | no | — | no confident answer |
| AMB-N48 | PASS | neg | orchestrate a dinner party | (weak) what-is-an-ai-framework | 31.88435526696295 | no | — | no confident answer |
| AMB-N49 | PASS | neg | prompt delivery service | (weak) cicd | 57.212345109881774 | no | — | no confident answer |
| AMB-N50 | FALSE POSITIVE | neg | token of friendship | tokens | 41 | yes | — | confident answer for out-of-scope query: tokens |
| AMB-P01 | PASS | page | transformer attention mechanism for language models | transformers | 97 | yes | — |  |
| AMB-P02 | PASS | page | python library for loading pretrained language models | python | 99.5655917604826 | yes | — |  |
| AMB-P03 | PASS | page | mamba architecture versus attention models | state-space-models | 88 | yes | — |  |
| AMB-P04 | PASS | page | agent that calls tools in a loop | agent-tools | 48 | yes | — |  |
| AMB-P05 | FALSE POSITIVE | page | react component for streaming chat | react | 59 | yes | — | confident wrong page: react |
| AMB-P06 | PASS | page | docker container for deploying a model server | docker | 85 | yes | — |  |
| AMB-P07 | PASS | page | go language for backend services | go-language | 55.8878318661333 | yes | — |  |
| AMB-P08 | PASS | page | rust language ownership and memory safety | rust | 69 | yes | — |  |
| AMB-P10 | PASS | page | model card documentation for responsible release | model-cards | 96 | yes | — |  |
| AMB-P11 | PASS | page | fine tune a llama model with lora | lora-and-peft | 76 | yes | — |  |
| AMB-P12 | WEAK | page | claude style constitutional training | (weak) constitutional-ai-and-rlaif | 40.18142721999091 | no | — | not solid; accepted page in top 5 |
| AMB-P13 | PASS | page | whisper speech recognition model | speech-ai | 86 | yes | — |  |
| AMB-P14 | PASS | page | embedding vectors for semantic search | embeddings | 90 | yes | — |  |
| AMB-P15 | PASS | page | prompt injection attack on an agent | prompt-injection | 75 | yes | — |  |
| AMB-P16 | PASS | page | token limits of a language model context | tokens | 51 | yes | — |  |
| AMB-P17 | PASS | page | kernel for neural network convolution filters | convolutional-neural-networks | 87 | yes | — |  |
| AMB-P18 | PASS | page | spark style distributed training across gpus | distributed-training | 69 | yes | — |  |
