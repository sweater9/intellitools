# Knowledge red-team report — amb-semantic

Dataset: `tests/redteam/ambiguity-semantic.json` sha256 `1d410380832011183b21041c4c4f26bd400262ecb124ca725a81d87e772f6a42`

Total 67 · PASS 59 · WEAK 7 · MISS 0 · FALSE POSITIVE 1
Pass rate 88.1% · False-positive rate 1.5%
Retrieval on page-kind queries (17): top-1 88.2% · top-3 100.0% · top-5 100.0%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| neg | 50 | 50 | 0 | 0 | 0 | 100.0% |
| page | 17 | 9 | 7 | 0 | 1 | 52.9% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 50 | 50 | 0 | 0 | 0 | 100.0% |
| ambiguous-tech-context | 17 | 9 | 7 | 0 | 1 | 52.9% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguity | 67 | 59 | 7 | 0 | 1 | 88.1% |

## FALSE POSITIVE
- AMB-P07 [page/ambiguous-tech-context] "go language for backend services" → javascript (score 84, solid yes) — expected go-language; confident wrong page: javascript

## MISS

## WEAK
- AMB-P02 [page/ambiguous-tech-context] "python library for loading pretrained language models" → (weak) python (score 75, solid no) — expected python-ai-libraries|hugging-face|python; not solid; accepted page in top 5
- AMB-P04 [page/ambiguous-tech-context] "agent that calls tools in a loop" → (weak) agent-tools (score 78, solid no) — expected ai-agents|agent-tools|react-agent-pattern; not solid; accepted page in top 5
- AMB-P10 [page/ambiguous-tech-context] "model card documentation for responsible release" → (weak) model-cards (score 78, solid no) — expected model-cards; not solid; accepted page in top 5
- AMB-P12 [page/ambiguous-tech-context] "claude style constitutional training" → (weak) constitutional-ai-and-rlaif (score 58, solid no) — expected constitutional-ai-and-rlaif; not solid; accepted page in top 5
- AMB-P16 [page/ambiguous-tech-context] "token limits of a language model context" → (weak) tokens (score 60, solid no) — expected tokens|context-windows; not solid; accepted page in top 5
- AMB-P17 [page/ambiguous-tech-context] "kernel for neural network convolution filters" → (weak) convolutional-neural-networks (score 80, solid no) — expected convolutional-neural-networks; not solid; accepted page in top 5
- AMB-P18 [page/ambiguous-tech-context] "spark style distributed training across gpus" → (weak) pytorch (score 69, solid no) — expected distributed-training; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AMB-N01 | PASS | neg | transformer toy for my nephew | (weak) transformers | 47 | no | — | no confident answer |
| AMB-N02 | PASS | neg | electrical transformer humming noise | (weak) transformers | 61 | no | — | no confident answer |
| AMB-N03 | PASS | neg | transformers movie cast | (weak) multimodal-ai | 57 | no | — | no confident answer |
| AMB-N04 | PASS | neg | mamba mentality basketball quote | (weak) context-windows | 46 | no | — | no confident answer |
| AMB-N05 | PASS | neg | black mamba snake bite first aid | (weak) rust | 41 | no | — | no confident answer |
| AMB-N06 | PASS | neg | python pet snake care | (weak) rag-with-python | 56 | no | — | no confident answer |
| AMB-N07 | PASS | neg | monty python sketch | (weak) python | 79 | no | — | no confident answer |
| AMB-N08 | PASS | neg | agent real estate commission | (weak) autogen | 58 | no | — | no confident answer |
| AMB-N09 | PASS | neg | secret agent spy film | (weak) multi-agent-systems | 62 | no | — | no confident answer |
| AMB-N10 | PASS | neg | travel agent booking tips | (weak) a2a-protocol | 54 | no | — | no confident answer |
| AMB-N11 | PASS | neg | fashion model agency | (weak) owasp-llm-top-10 | 53 | no | — | no confident answer |
| AMB-N12 | PASS | neg | model train layout hobby | (weak) knowledge-distillation | 46 | no | — | no confident answer |
| AMB-N13 | PASS | neg | scale model aircraft kit | (weak) onnx-runtime | 53 | no | — | no confident answer |
| AMB-N14 | PASS | neg | react to a rude comment calmly | (weak) react-chatbot-state | 69 | no | — | no confident answer |
| AMB-N15 | PASS | neg | chemical reaction rate experiment | (weak) alphafold | 54 | no | — | no confident answer |
| AMB-N16 | PASS | neg | docker clothing sale | (weak) docker | 48 | no | — | no confident answer |
| AMB-N17 | PASS | neg | dock worker union strike | (weak) cicd | 41 | no | — | no confident answer |
| AMB-N18 | PASS | neg | go for a run tonight | (weak) go-language | 54 | no | — | no confident answer |
| AMB-N19 | PASS | neg | go board game opening | (weak) ai-agents | 53 | no | — | no confident answer |
| AMB-N20 | PASS | neg | rust remover for cast iron pan | (weak) rust | 64 | no | — | no confident answer |
| AMB-N21 | PASS | neg | rust game survival tips | (weak) rust | 65 | no | — | no confident answer |
| AMB-N22 | PASS | neg | swift taylor tour dates | (weak) best-of-n-sampling | 43 | no | — | no confident answer |
| AMB-N23 | PASS | neg | swift bird migration | (weak) system-prompts | 29 | no | — | no confident answer |
| AMB-N24 | PASS | neg | java island travel guide | (weak) java | 63 | no | — | no confident answer |
| AMB-N25 | PASS | neg | ruby red lipstick shade | (weak) python-for-ai | 37 | no | — | no confident answer |
| AMB-N26 | PASS | neg | spring boot footwear | (weak) hugging-face | 47 | no | — | no confident answer |
| AMB-N27 | PASS | neg | spark plug gap setting | (weak) generative-adversarial-networks | 40 | no | — | no confident answer |
| AMB-N28 | PASS | neg | pandas habitat bamboo | (weak) mysql | 44 | no | — | no confident answer |
| AMB-N29 | PASS | neg | panda express menu | (weak) nodejs | 49 | no | — | no confident answer |
| AMB-N30 | PASS | neg | bear market investing | (weak) eu-ai-act | 36 | no | — | no confident answer |
| AMB-N31 | PASS | neg | apple harvest season | (weak) gpus-and-ai-accelerators | 43 | no | — | no confident answer |
| AMB-N32 | PASS | neg | oracle bones ancient china | (weak) sqlite | 44 | no | — | no confident answer |
| AMB-N33 | PASS | neg | cobra snake venom | (weak) rag-with-python | 38 | no | — | no confident answer |
| AMB-N34 | PASS | neg | llama wool sweater | (weak) rag-vs-fine-tuning | 49 | no | — | no confident answer |
| AMB-N35 | PASS | neg | llama farm visit | (weak) ollama | 54 | no | — | no confident answer |
| AMB-N36 | PASS | neg | claude monet paintings | (weak) multimodal-ai | 40 | no | — | no confident answer |
| AMB-N37 | PASS | neg | gemini zodiac traits | (weak) preference-optimization | 44 | no | — | no confident answer |
| AMB-N38 | PASS | neg | bard of avon shakespeare | (weak) docker | 24 | no | — | no confident answer |
| AMB-N39 | PASS | neg | whisper quietly in class | (weak) speech-ai | 42 | no | — | no confident answer |
| AMB-N40 | PASS | neg | kernel panic on my laptop | (weak) semantic-kernel | 46 | no | — | no confident answer |
| AMB-N41 | PASS | neg | docker whale logo history | (weak) docker | 66 | no | — | no confident answer |
| AMB-N42 | PASS | neg | embedding a screw in a wall | (weak) positional-encoding | 43 | no | — | no confident answer |
| AMB-N43 | PASS | neg | vector art drawing tutorial | (weak) contrastive-learning-clip | 43 | no | — | no confident answer |
| AMB-N44 | PASS | neg | tensor of a physics stress | (weak) physics-informed-neural-networks | 75 | no | — | no confident answer |
| AMB-N45 | PASS | neg | cloud storage for family photos | (weak) aws-fundamentals | 62 | no | — | no confident answer |
| AMB-N46 | PASS | neg | nginx hair salon | (weak) open-weights-models | 34 | no | — | no confident answer |
| AMB-N47 | PASS | neg | mongo the movie character | (weak) mongodb | 55 | no | — | no confident answer |
| AMB-N48 | PASS | neg | orchestrate a dinner party | (weak) function-calling | 54 | no | — | no confident answer |
| AMB-N49 | PASS | neg | prompt delivery service | (weak) cicd | 72 | no | — | no confident answer |
| AMB-N50 | PASS | neg | token of friendship | (weak) tokens | 31 | no | — | no confident answer |
| AMB-P01 | PASS | page | transformer attention mechanism for language models | transformers | 85 | yes | — |  |
| AMB-P02 | WEAK | page | python library for loading pretrained language models | (weak) python | 75 | no | — | not solid; accepted page in top 5 |
| AMB-P03 | PASS | page | mamba architecture versus attention models | transformers-vs-state-space-models | 90 | yes | — |  |
| AMB-P04 | WEAK | page | agent that calls tools in a loop | (weak) agent-tools | 78 | no | — | not solid; accepted page in top 5 |
| AMB-P05 | PASS | page | react component for streaming chat | react-ai-interfaces | 89 | yes | — |  |
| AMB-P06 | PASS | page | docker container for deploying a model server | docker | 86 | yes | — |  |
| AMB-P07 | FALSE POSITIVE | page | go language for backend services | javascript | 84 | yes | — | confident wrong page: javascript |
| AMB-P08 | PASS | page | rust language ownership and memory safety | rust | 94 | yes | — |  |
| AMB-P10 | WEAK | page | model card documentation for responsible release | (weak) model-cards | 78 | no | — | not solid; accepted page in top 5 |
| AMB-P11 | PASS | page | fine tune a llama model with lora | lora-and-peft | 89 | yes | — |  |
| AMB-P12 | WEAK | page | claude style constitutional training | (weak) constitutional-ai-and-rlaif | 58 | no | — | not solid; accepted page in top 5 |
| AMB-P13 | PASS | page | whisper speech recognition model | speech-ai | 93 | yes | — |  |
| AMB-P14 | PASS | page | embedding vectors for semantic search | embeddings | 94 | yes | — |  |
| AMB-P15 | PASS | page | prompt injection attack on an agent | prompt-injection | 93 | yes | — |  |
| AMB-P16 | WEAK | page | token limits of a language model context | (weak) tokens | 60 | no | — | not solid; accepted page in top 5 |
| AMB-P17 | WEAK | page | kernel for neural network convolution filters | (weak) convolutional-neural-networks | 80 | no | — | not solid; accepted page in top 5 |
| AMB-P18 | WEAK | page | spark style distributed training across gpus | (weak) pytorch | 69 | no | — | not solid; accepted page in top 5 |
