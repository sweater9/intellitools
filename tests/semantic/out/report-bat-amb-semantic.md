# Knowledge red-team report — bat-amb-semantic

Dataset: `tests/redteam/ambiguity-semantic.json` sha256 `1d410380832011183b21041c4c4f26bd400262ecb124ca725a81d87e772f6a42`

Total 67 · PASS 54 · WEAK 4 · MISS 0 · FALSE POSITIVE 9
Pass rate 80.6% · False-positive rate 13.4%
Retrieval on page-kind queries (17): top-1 76.5% · top-3 100.0% · top-5 100.0%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| neg | 50 | 44 | 0 | 0 | 6 | 88.0% |
| page | 17 | 10 | 4 | 0 | 3 | 58.8% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 50 | 44 | 0 | 0 | 6 | 88.0% |
| ambiguous-tech-context | 17 | 10 | 4 | 0 | 3 | 58.8% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguity | 67 | 54 | 4 | 0 | 9 | 80.6% |

## FALSE POSITIVE
- AMB-N06 [neg/ambiguous-or-off-topic] "python pet snake care" → python (score 88, solid yes) — expected none; confident answer for out-of-scope query: python
- AMB-N07 [neg/ambiguous-or-off-topic] "monty python sketch" → python (score 83, solid yes) — expected none; confident answer for out-of-scope query: python
- AMB-N14 [neg/ambiguous-or-off-topic] "react to a rude comment calmly" → react-chatbot-state (score 90, solid yes) — expected none; confident answer for out-of-scope query: react-chatbot-state
- AMB-N25 [neg/ambiguous-or-off-topic] "ruby red lipstick shade" → red-teaming (score 88, solid yes) — expected none; confident answer for out-of-scope query: red-teaming
- AMB-N29 [neg/ambiguous-or-off-topic] "panda express menu" → express (score 95, solid yes) — expected none; confident answer for out-of-scope query: express
- AMB-N34 [neg/ambiguous-or-off-topic] "llama wool sweater" → llama-cpp (score 95, solid yes) — expected none; confident answer for out-of-scope query: llama-cpp
- AMB-P04 [page/ambiguous-tech-context] "agent that calls tools in a loop" → choosing-an-agent-framework (score 81, solid yes) — expected ai-agents|agent-tools|react-agent-pattern; confident wrong page: choosing-an-agent-framework
- AMB-P07 [page/ambiguous-tech-context] "go language for backend services" → javascript (score 88, solid yes) — expected go-language; confident wrong page: javascript
- AMB-P17 [page/ambiguous-tech-context] "kernel for neural network convolution filters" → neural-networks (score 84, solid yes) — expected convolutional-neural-networks; confident wrong page: neural-networks

## MISS

## WEAK
- AMB-P02 [page/ambiguous-tech-context] "python library for loading pretrained language models" → (weak) python (score 73, solid no) — expected python-ai-libraries|hugging-face|python; not solid; accepted page in top 5
- AMB-P10 [page/ambiguous-tech-context] "model card documentation for responsible release" → (weak) model-cards (score 78, solid no) — expected model-cards; not solid; accepted page in top 5
- AMB-P16 [page/ambiguous-tech-context] "token limits of a language model context" → (weak) tokens (score 61, solid no) — expected tokens|context-windows; not solid; accepted page in top 5
- AMB-P18 [page/ambiguous-tech-context] "spark style distributed training across gpus" → (weak) pytorch (score 77, solid no) — expected distributed-training; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMB-N01 | PASS | neg | transformer toy for my nephew | (weak) transformers | 67 | no | — | no confident answer |
| AMB-N02 | PASS | neg | electrical transformer humming noise | (weak) transformers | 69 | no | — | no confident answer |
| AMB-N03 | PASS | neg | transformers movie cast | (weak) multimodal-ai | 61 | no | — | no confident answer |
| AMB-N04 | PASS | neg | mamba mentality basketball quote | (weak) transformers-vs-state-space-models | 58 | no | — | no confident answer |
| AMB-N05 | PASS | neg | black mamba snake bite first aid | (weak) state-space-models | 58 | no | — | no confident answer |
| AMB-N06 | FALSE POSITIVE | neg | python pet snake care | python | 88 | yes | — | confident answer for out-of-scope query: python |
| AMB-N07 | FALSE POSITIVE | neg | monty python sketch | python | 83 | yes | — | confident answer for out-of-scope query: python |
| AMB-N08 | PASS | neg | agent real estate commission | (weak) autogen | 66 | no | — | no confident answer |
| AMB-N09 | PASS | neg | secret agent spy film | (weak) multi-agent-systems | 66 | no | — | no confident answer |
| AMB-N10 | PASS | neg | travel agent booking tips | (weak) agent-memory | 62 | no | — | no confident answer |
| AMB-N11 | PASS | neg | fashion model agency | (weak) owasp-llm-top-10 | 49 | no | — | no confident answer |
| AMB-N12 | PASS | neg | model train layout hobby | (weak) knowledge-distillation | 57 | no | — | no confident answer |
| AMB-N13 | PASS | neg | scale model aircraft kit | (weak) onnx-runtime | 61 | no | — | no confident answer |
| AMB-N14 | FALSE POSITIVE | neg | react to a rude comment calmly | react-chatbot-state | 90 | yes | — | confident answer for out-of-scope query: react-chatbot-state |
| AMB-N15 | PASS | neg | chemical reaction rate experiment | (weak) alphafold | 62 | no | — | no confident answer |
| AMB-N16 | PASS | neg | docker clothing sale | (weak) docker | 57 | no | — | no confident answer |
| AMB-N17 | PASS | neg | dock worker union strike | (weak) multi-agent-systems | 57 | no | — | no confident answer |
| AMB-N18 | PASS | neg | go for a run tonight | (weak) go-language | 61 | no | — | no confident answer |
| AMB-N19 | PASS | neg | go board game opening | (weak) ai-agents | 59 | no | — | no confident answer |
| AMB-N20 | PASS | neg | rust remover for cast iron pan | (weak) rust | 76 | no | — | no confident answer |
| AMB-N21 | PASS | neg | rust game survival tips | (weak) rust | 72 | no | — | no confident answer |
| AMB-N22 | PASS | neg | swift taylor tour dates | (weak) swe-bench | 50 | no | — | no confident answer |
| AMB-N23 | PASS | neg | swift bird migration | (weak) prisma-and-orms | 34 | no | — | no confident answer |
| AMB-N24 | PASS | neg | java island travel guide | (weak) java | 63 | no | — | no confident answer |
| AMB-N25 | FALSE POSITIVE | neg | ruby red lipstick shade | red-teaming | 88 | yes | — | confident answer for out-of-scope query: red-teaming |
| AMB-N26 | PASS | neg | spring boot footwear | (weak) java | 60 | no | — | no confident answer |
| AMB-N27 | PASS | neg | spark plug gap setting | (weak) generative-adversarial-networks | 46 | no | — | no confident answer |
| AMB-N28 | PASS | neg | pandas habitat bamboo | (weak) python-data-for-ai | 76 | no | — | no confident answer |
| AMB-N29 | FALSE POSITIVE | neg | panda express menu | express | 95 | yes | — | confident answer for out-of-scope query: express |
| AMB-N30 | PASS | neg | bear market investing | (weak) eu-ai-act | 44 | no | — | no confident answer |
| AMB-N31 | PASS | neg | apple harvest season | (weak) gpus-and-ai-accelerators | 69 | no | — | no confident answer |
| AMB-N32 | PASS | neg | oracle bones ancient china | (weak) csharp | 55 | no | — | no confident answer |
| AMB-N33 | PASS | neg | cobra snake venom | (weak) none | 0 | no | — | no confident answer |
| AMB-N34 | FALSE POSITIVE | neg | llama wool sweater | llama-cpp | 95 | yes | — | confident answer for out-of-scope query: llama-cpp |
| AMB-N35 | PASS | neg | llama farm visit | (weak) ollama | 64 | no | — | no confident answer |
| AMB-N36 | PASS | neg | claude monet paintings | (weak) multimodal-ai | 51 | no | — | no confident answer |
| AMB-N37 | PASS | neg | gemini zodiac traits | (weak) kubernetes | 41 | no | — | no confident answer |
| AMB-N38 | PASS | neg | bard of avon shakespeare | (weak) mmlu | 65 | no | — | no confident answer |
| AMB-N39 | PASS | neg | whisper quietly in class | (weak) speech-ai | 41 | no | — | no confident answer |
| AMB-N40 | PASS | neg | kernel panic on my laptop | (weak) semantic-kernel | 77 | no | — | no confident answer |
| AMB-N41 | PASS | neg | docker whale logo history | (weak) docker | 75 | no | — | no confident answer |
| AMB-N42 | PASS | neg | embedding a screw in a wall | (weak) embeddings | 53 | no | — | no confident answer |
| AMB-N43 | PASS | neg | vector art drawing tutorial | (weak) contrastive-learning-clip | 47 | no | — | no confident answer |
| AMB-N44 | PASS | neg | tensor of a physics stress | (weak) physics-informed-neural-networks | 80 | no | — | no confident answer |
| AMB-N45 | PASS | neg | cloud storage for family photos | (weak) aws-fundamentals | 74 | no | — | no confident answer |
| AMB-N46 | PASS | neg | nginx hair salon | (weak) vision-transformers | 51 | no | — | no confident answer |
| AMB-N47 | PASS | neg | mongo the movie character | (weak) mongodb | 53 | no | — | no confident answer |
| AMB-N48 | PASS | neg | orchestrate a dinner party | (weak) what-is-an-ai-framework | 55 | no | — | no confident answer |
| AMB-N49 | PASS | neg | prompt delivery service | (weak) cicd | 75 | no | — | no confident answer |
| AMB-N50 | PASS | neg | token of friendship | (weak) tokens | 48 | no | — | no confident answer |
| AMB-P01 | PASS | page | transformer attention mechanism for language models | transformers | 86 | yes | — |  |
| AMB-P02 | WEAK | page | python library for loading pretrained language models | (weak) python | 73 | no | — | not solid; accepted page in top 5 |
| AMB-P03 | PASS | page | mamba architecture versus attention models | transformers-vs-state-space-models | 91 | yes | — |  |
| AMB-P04 | FALSE POSITIVE | page | agent that calls tools in a loop | choosing-an-agent-framework | 81 | yes | — | confident wrong page: choosing-an-agent-framework |
| AMB-P05 | PASS | page | react component for streaming chat | react-ai-interfaces | 89 | yes | — |  |
| AMB-P06 | PASS | page | docker container for deploying a model server | docker | 86 | yes | — |  |
| AMB-P07 | FALSE POSITIVE | page | go language for backend services | javascript | 88 | yes | — | confident wrong page: javascript |
| AMB-P08 | PASS | page | rust language ownership and memory safety | rust | 92 | yes | — |  |
| AMB-P10 | WEAK | page | model card documentation for responsible release | (weak) model-cards | 78 | no | — | not solid; accepted page in top 5 |
| AMB-P11 | PASS | page | fine tune a llama model with lora | lora-and-peft | 91 | yes | — |  |
| AMB-P12 | PASS | page | claude style constitutional training | constitutional-ai-and-rlaif | 84 | yes | — |  |
| AMB-P13 | PASS | page | whisper speech recognition model | speech-ai | 95 | yes | — |  |
| AMB-P14 | PASS | page | embedding vectors for semantic search | embeddings | 94 | yes | — |  |
| AMB-P15 | PASS | page | prompt injection attack on an agent | prompt-injection | 93 | yes | — |  |
| AMB-P16 | WEAK | page | token limits of a language model context | (weak) tokens | 61 | no | — | not solid; accepted page in top 5 |
| AMB-P17 | FALSE POSITIVE | page | kernel for neural network convolution filters | neural-networks | 84 | yes | — | confident wrong page: neural-networks |
| AMB-P18 | WEAK | page | spark style distributed training across gpus | (weak) pytorch | 77 | no | — | not solid; accepted page in top 5 |
