# Knowledge red-team report — h2-baseline

Dataset: `tests/redteam/frozen-holdout2.json` sha256 `283ac7b8ba5877f24e5a690db71f1751de8c30a98c5f6215a4c6e7b47d620119`

Total 146 · PASS 63 · WEAK 31 · MISS 30 · FALSE POSITIVE 22
Pass rate 43.2% · False-positive rate 15.1%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 9 | 8 | 0 | 0 | 1 | 88.9% |
| neg | 26 | 23 | 0 | 0 | 3 | 88.5% |
| page | 111 | 32 | 31 | 30 | 18 | 28.8% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 25 | 22 | 0 | 0 | 3 | 88.0% |
| architecture | 4 | 1 | 3 | 0 | 0 | 25.0% |
| beginner | 14 | 7 | 5 | 1 | 1 | 50.0% |
| comparison | 1 | 1 | 0 | 0 | 0 | 100.0% |
| concept | 45 | 12 | 14 | 12 | 7 | 26.7% |
| conversational | 2 | 0 | 0 | 2 | 0 | 0.0% |
| coverage-probe | 9 | 8 | 0 | 0 | 1 | 88.9% |
| expert | 4 | 2 | 0 | 0 | 2 | 50.0% |
| implementation | 18 | 6 | 4 | 2 | 6 | 33.3% |
| integration | 3 | 0 | 0 | 3 | 0 | 0.0% |
| security | 10 | 1 | 3 | 5 | 1 | 10.0% |
| troubleshooting | 4 | 0 | 2 | 2 | 0 | 0.0% |
| what-to-use | 7 | 3 | 0 | 3 | 1 | 42.9% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 1 | 0 | 0 | 1 | 0 | 0.0% |
| agent | 12 | 0 | 3 | 7 | 2 | 0.0% |
| ai | 1 | 1 | 0 | 0 | 0 | 100.0% |
| amb | 20 | 17 | 0 | 0 | 3 | 85.0% |
| api | 4 | 1 | 2 | 0 | 1 | 25.0% |
| cloud | 3 | 1 | 2 | 0 | 0 | 33.3% |
| cv | 2 | 2 | 0 | 0 | 0 | 100.0% |
| db | 4 | 2 | 0 | 1 | 1 | 50.0% |
| dev | 3 | 3 | 0 | 0 | 0 | 100.0% |
| devops | 6 | 5 | 1 | 0 | 0 | 83.3% |
| dl | 8 | 1 | 4 | 1 | 2 | 12.5% |
| eval | 4 | 2 | 2 | 0 | 0 | 50.0% |
| gov | 4 | 2 | 1 | 0 | 1 | 50.0% |
| js | 1 | 0 | 1 | 0 | 0 | 0.0% |
| llm | 15 | 3 | 4 | 6 | 2 | 20.0% |
| local | 1 | 0 | 1 | 0 | 0 | 0.0% |
| mcp | 4 | 1 | 1 | 0 | 2 | 25.0% |
| ml | 1 | 0 | 1 | 0 | 0 | 0.0% |
| mlops | 4 | 3 | 0 | 0 | 1 | 75.0% |
| mm | 2 | 0 | 0 | 1 | 1 | 0.0% |
| ms | 5 | 5 | 0 | 0 | 0 | 100.0% |
| node | 1 | 1 | 0 | 0 | 0 | 100.0% |
| off | 5 | 5 | 0 | 0 | 0 | 100.0% |
| prompt | 3 | 0 | 2 | 1 | 0 | 0.0% |
| python | 3 | 1 | 0 | 0 | 2 | 33.3% |
| rag | 7 | 3 | 1 | 2 | 1 | 42.9% |
| react | 1 | 0 | 0 | 0 | 1 | 0.0% |
| rl | 1 | 0 | 0 | 1 | 0 | 0.0% |
| robot | 4 | 1 | 3 | 0 | 0 | 25.0% |
| runtime | 4 | 2 | 0 | 2 | 0 | 50.0% |
| safety | 3 | 0 | 0 | 2 | 1 | 0.0% |
| science | 2 | 0 | 0 | 1 | 1 | 0.0% |
| sec | 5 | 1 | 1 | 3 | 0 | 20.0% |
| speech | 1 | 0 | 0 | 1 | 0 | 0.0% |
| ts | 1 | 0 | 1 | 0 | 0 | 0.0% |

## FALSE POSITIVE
- H2-013 [page/expert] "sparse routing to a few feed forward experts" → agentic-workflows (score 22, solid yes) — expected mixture-of-experts; confident wrong page: agentic-workflows
- H2-014 [page/expert] "constant memory sequence model that avoids quadratic attention" → transformers (score 36, solid yes) — expected state-space-models; confident wrong page: transformers
- H2-025 [page/implementation] "llama.cpp grammar file for json" → llama-cpp (score 116, solid yes) — expected gbnf-grammars|constrained-decoding; confident wrong page: llama-cpp
- H2-026 [page/implementation] "python library for guided generation with pydantic models" → constrained-decoding (score 75, solid yes) — expected outlines|structured-outputs; confident wrong page: constrained-decoding
- H2-031 [page/implementation] "combine keyword and vector search" → vector-databases (score 45, solid yes) — expected hybrid-search-and-reranking; confident wrong page: vector-databases
- H2-045 [page/concept] "an llm that calls a calculator or search engine" → large-language-models (score 27, solid yes) — expected function-calling|agent-tools; confident wrong page: large-language-models
- H2-048 [page/what-to-use] "role based crew of agents in python" → python (score 46, solid yes) — expected crewai; confident wrong page: python
- H2-049 [page/concept] "standard way to expose tools to any ai client" → agent-tools (score 47, solid yes) — expected mcp|mcp-servers-and-clients; confident wrong page: agent-tools
- H2-050 [page/concept] "how does a client talk to an mcp server" → mcp (score 59, solid yes) — expected mcp-servers-and-clients; confident wrong page: mcp
- H2-054 [page/beginner] "python tutorial for calling models" → python (score 46, solid yes) — expected calling-ai-apis-with-python|python-for-ai; confident wrong page: python
- H2-055 [page/implementation] "pandas dataframe to feed an llm" → large-language-models (score 27, solid yes) — expected python-data-for-ai; confident wrong page: large-language-models
- H2-059 [page/implementation] "show tokens as they stream into a chat component" → tokens (score 34, solid yes) — expected react-chatbot-state|react-ai-interfaces|streaming-ai-responses; confident wrong page: tokens
- H2-063 [page/security] "refresh tokens and access tokens" → tokens (score 34, solid yes) — expected oauth|json-web-tokens; confident wrong page: tokens
- H2-068 [page/implementation] "embeddings and relational data in one database" → embeddings (score 46, solid yes) — expected pgvector|postgresql-for-ai-apps; confident wrong page: embeddings
- H2-087 [page/concept] "image and text embeddings in one space" → embeddings (score 58, solid yes) — expected contrastive-learning-clip; confident wrong page: embeddings
- H2-102 [page/concept] "how to reduce tokens and cost in production" → tokens (score 42, solid yes) — expected llm-cost-optimization|prompt-caching; confident wrong page: tokens
- H2-109 [page/concept] "loss function over chosen and rejected completions" → backpropagation-and-gradient-descent (score 57, solid yes) — expected dpo; confident wrong page: backpropagation-and-gradient-descent
- H2-111 [page/concept] "protein folding with deep learning" → deep-learning (score 100, solid yes) — expected alphafold; confident wrong page: deep-learning
- H2-118 [gap/coverage-probe] "gdpr right to erasure and machine learning" → what-is-ai (score 28, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: what-is-ai
- H2-124 [neg/ambiguous-or-off-topic] "rag and bone man tour dates" → rag (score 50, solid yes) — expected none; confident answer for out-of-scope query: rag
- H2-125 [neg/ambiguous-or-off-topic] "git hub of the community garden" → git (score 54, solid yes) — expected none; confident answer for out-of-scope query: git
- H2-134 [neg/ambiguous-or-off-topic] "redis cluster of hotels" → redis (score 59, solid yes) — expected none; confident answer for out-of-scope query: redis

## MISS
- H2-003 [page/conversational] "why does the ai sometimes just invent a source that does not exist" → (weak) ai-governance (score 50, solid no) — expected ai-hallucinations|how-to-reduce-hallucinations; no accepted page in top 5
- H2-004 [page/conversational] "whats the limit on how long my conversation with an ai can be" → (weak) ai-governance (score 50, solid no) — expected context-windows|tokens; no accepted page in top 5
- H2-005 [page/concept] "how do text predictors turn a prompt into a paragraph" → (weak) system-prompts (score 25, solid no) — expected large-language-models|sampling-and-decoding; no accepted page in top 5
- H2-008 [page/troubleshooting] "gradients vanish in my recurrent model" → (weak) model-cards (score 28, solid no) — expected recurrent-neural-networks|backpropagation-and-gradient-descent; no accepted page in top 5
- H2-011 [page/concept] "agent receives reward only at the end of an episode" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected reinforcement-learning|markov-decision-processes; no accepted page in top 5
- H2-018 [page/what-to-use] "adapter training or updating every weight" → (weak) distributed-training (score 13, solid no) — expected lora-vs-full-fine-tuning|lora-and-peft; no accepted page in top 5
- H2-019 [page/concept] "how do labs pick model size and dataset size for a training budget" → (weak) model-cards (score 37, solid no) — expected scaling-laws; no accepted page in top 5
- H2-020 [page/concept] "what is the point of letting a model think longer before it replies" → (weak) model-cards (score 28, solid no) — expected test-time-compute|reasoning-models; no accepted page in top 5
- H2-027 [page/implementation] "how should i structure instructions so the model follows them" → (weak) model-cards (score 28, solid no) — expected prompt-engineering|system-prompts; no accepted page in top 5
- H2-030 [page/implementation] "my pdf is too long for the model what do i do" → (weak) model-cards (score 28, solid no) — expected chunking|rag|context-windows; no accepted page in top 5
- H2-036 [page/troubleshooting] "retriever misses exact product codes" → (weak) flash-attention (score 5, solid no) — expected hybrid-search-and-reranking|embeddings; no accepted page in top 5
- H2-037 [page/integration] "can my bot book meetings in outlook" → (weak) teams-development (score 6, solid no) — expected connecting-agents-to-apps|microsoft-graph|oauth-for-ai-agents; no accepted page in top 5
- H2-038 [page/integration] "agent reads my inbox and drafts replies" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected gmail-for-ai-agents|connecting-agents-to-apps|agent-tools; no accepted page in top 5
- H2-039 [page/integration] "give an agent access to our crm" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected connecting-agents-to-apps|agent-tools|integration-permissions; no accepted page in top 5
- H2-040 [page/security] "how do i prevent the assistant from sending emails without asking" → (weak) ai-agent-vs-chatbot (score 18, solid no) — expected integration-permissions|ai-guardrails|agent-tools; no accepted page in top 5
- H2-041 [page/security] "hidden instructions inside a pdf the agent reads" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected prompt-injection; no accepted page in top 5
- H2-046 [page/what-to-use] "microsoft stack agent sdk" → (weak) openai-agents-sdk (score 36, solid no) — expected semantic-kernel|agent-frameworks-compared; no accepted page in top 5
- H2-047 [page/what-to-use] "state machine style framework with checkpoints" → (weak) choosing-an-agent-framework (score 30, solid no) — expected langgraph; no accepted page in top 5
- H2-053 [page/concept] "how do independent agents discover each other" → (weak) openai-agents-sdk (score 39, solid no) — expected a2a-protocol; no accepted page in top 5
- H2-065 [page/beginner] "what is a primary key and a foreign key" → (weak) api-keys (score 21, solid no) — expected sql; no accepted page in top 5
- H2-083 [page/concept] "export a model for cross platform inference" → (weak) model-serving-and-inference (score 45, solid no) — expected onnx-runtime; no accepted page in top 5
- H2-084 [page/concept] "why is my local model so slow" → (weak) model-cards (score 28, solid no) — expected quantization|llama-cpp|gpus-and-ai-accelerators|local-ai; no accepted page in top 5
- H2-086 [page/concept] "reading text inside photos" → (weak) contrastive-learning-clip (score 11, solid no) — expected document-understanding-ai|vision-language-models; no accepted page in top 5
- H2-088 [page/concept] "automatic captions for video" → (weak) video-generation-models (score 38, solid no) — expected speech-ai; no accepted page in top 5
- H2-093 [page/security] "what do i need to redact before using a third party model" → (weak) model-cards (score 28, solid no) — expected ai-privacy-and-security; no accepted page in top 5
- H2-094 [page/security] "testing a model for jailbreaks before release" → (weak) model-cards (score 28, solid no) — expected red-teaming; no accepted page in top 5
- H2-095 [page/security] "filtering unsafe model outputs" → (weak) model-cards (score 28, solid no) — expected ai-guardrails; no accepted page in top 5
- H2-108 [page/concept] "training a chatbot on thumbs up and thumbs down data" → (weak) ai-agent-vs-chatbot (score 27, solid no) — expected rlhf|preference-optimization; no accepted page in top 5
- H2-110 [page/concept] "model optimises the metric instead of the goal" → (weak) model-cards (score 28, solid no) — expected reward-hacking; no accepted page in top 5
- H2-112 [page/concept] "learning the solution operator of a pde" → (weak) deep-learning (score 34, solid no) — expected physics-informed-neural-networks; no accepted page in top 5

## WEAK
- H2-002 [page/beginner] "how do machines learn from examples" → (weak) prompt-engineering (score 5, solid no) — expected supervised-learning|what-is-ai|neural-networks; not solid; accepted page in top 5
- H2-006 [page/concept] "why are deep networks called deep" → (weak) deep-learning (score 33, solid no) — expected deep-learning|neural-networks; not solid; accepted page in top 5
- H2-007 [page/concept] "why do we need activation functions" → (weak) neural-networks (score 8, solid no) — expected neural-networks; not solid; accepted page in top 5
- H2-009 [page/troubleshooting] "training loss goes down but validation loss goes up" → (weak) backpropagation-and-gradient-descent (score 15, solid no) — expected overfitting-and-regularization; not solid; accepted page in top 5
- H2-012 [page/concept] "why are images split into patches for transformers" → (weak) vision-transformers (score 28, solid no) — expected vision-transformers; not solid; accepted page in top 5
- H2-021 [page/concept] "a verifier that rates each line of a proof" → (weak) process-reward-model (score 9, solid no) — expected process-reward-model; not solid; accepted page in top 5
- H2-022 [page/concept] "generate many candidates and keep the highest scoring one" → (weak) rag-frameworks (score 5, solid no) — expected best-of-n-sampling; not solid; accepted page in top 5
- H2-023 [page/concept] "search tree of partial solutions for puzzles" → (weak) search-over-reasoning (score 49, solid no) — expected search-over-reasoning; not solid; accepted page in top 5
- H2-024 [page/implementation] "force the output to follow a regular expression" → (weak) structured-outputs (score 22, solid no) — expected constrained-decoding|grammar-guided-generation; not solid; accepted page in top 5
- H2-028 [page/implementation] "examples in the prompt to show the format i want" → (weak) prompt-engineering (score 34, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- H2-029 [page/troubleshooting] "answers are generic and vague" → (weak) common-prompting-mistakes (score 11, solid no) — expected common-prompting-mistakes|prompt-engineering; not solid; accepted page in top 5
- H2-035 [page/concept] "relationships between entities across many documents" → (weak) document-understanding-ai (score 26, solid no) — expected graph-rag; not solid; accepted page in top 5
- H2-042 [page/architecture] "how does an assistant remember my preferences between sessions" → (weak) agent-memory (score 43, solid no) — expected agent-memory; not solid; accepted page in top 5
- H2-043 [page/architecture] "planner and worker agents" → (weak) multi-agent-systems (score 36, solid no) — expected multi-agent-systems|agent-planning|agentic-workflows; not solid; accepted page in top 5
- H2-044 [page/architecture] "break a big goal into subtasks automatically" → (weak) agent-planning (score 6, solid no) — expected agent-planning; not solid; accepted page in top 5
- H2-052 [page/security] "what can go wrong with third party tool servers" → (weak) function-calling (score 20, solid no) — expected mcp-security; not solid; accepted page in top 5
- H2-057 [page/implementation] "generic types for api responses" → (weak) typescript-api-client-types (score 48, solid no) — expected typescript-api-client-types|typescript; not solid; accepted page in top 5
- H2-058 [page/implementation] "fetch with streaming response body" → (weak) streaming-ai-responses (score 24, solid no) — expected streaming-ai-responses|javascript-for-ai; not solid; accepted page in top 5
- H2-061 [page/beginner] "http methods get post put delete" → (weak) rest-apis (score 22, solid no) — expected rest-apis|what-is-an-api; not solid; accepted page in top 5
- H2-062 [page/security] "should the browser hold my secret key" → (weak) api-keys (score 29, solid no) — expected api-keys|environment-variables; not solid; accepted page in top 5
- H2-069 [page/beginner] "what does aws lambda do" → (weak) aws-fundamentals (score 31, solid no) — expected aws-fundamentals; not solid; accepted page in top 5
- H2-070 [page/beginner] "what are azure resource groups" → (weak) azure-fundamentals (score 40, solid no) — expected azure-fundamentals; not solid; accepted page in top 5
- H2-072 [page/beginner] "difference between an image and a container" → (weak) containers (score 25, solid no) — expected docker|containers; not solid; accepted page in top 5
- H2-085 [page/concept] "is a local model as good as a cloud one" → (weak) local-ai-vs-cloud-ai (score 38, solid no) — expected local-ai-vs-cloud-ai|local-ai; not solid; accepted page in top 5
- H2-089 [page/concept] "why is robotics harder than chatbots" → (weak) embodied-ai (score 6, solid no) — expected embodied-ai; not solid; accepted page in top 5
- H2-090 [page/concept] "policies conditioned on camera images and instructions" → (weak) system-prompts (score 9, solid no) — expected vision-language-action-models; not solid; accepted page in top 5
- H2-091 [page/concept] "planning inside a learned model of the environment" → (weak) model-cards (score 28, solid no) — expected world-models; not solid; accepted page in top 5
- H2-096 [page/security] "signed provenance on generated images" → (weak) c2pa-content-provenance (score 33, solid no) — expected c2pa-content-provenance; not solid; accepted page in top 5
- H2-098 [page/concept] "grading answers with a rubric and a strong model" → (weak) model-cards (score 28, solid no) — expected llm-as-a-judge; not solid; accepted page in top 5
- H2-099 [page/concept] "precision recall and f1 explained" → (weak) evaluation-metrics-for-ai (score 10, solid no) — expected evaluation-metrics-for-ai; not solid; accepted page in top 5
- H2-107 [page/concept] "can a model be audited for fairness" → (weak) model-cards (score 28, solid no) — expected ai-bias-and-fairness; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H2-001 | PASS | neg | can computers really think | (weak) chain-of-thought | 6 | no | — | no confident answer |
| H2-002 | WEAK | page | how do machines learn from examples | (weak) prompt-engineering | 5 | no | — | not solid; accepted page in top 5 |
| H2-003 | MISS | page | why does the ai sometimes just invent a source that does not exist | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| H2-004 | MISS | page | whats the limit on how long my conversation with an ai can be | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| H2-005 | MISS | page | how do text predictors turn a prompt into a paragraph | (weak) system-prompts | 25 | no | — | no accepted page in top 5 |
| H2-006 | WEAK | page | why are deep networks called deep | (weak) deep-learning | 33 | no | — | not solid; accepted page in top 5 |
| H2-007 | WEAK | page | why do we need activation functions | (weak) neural-networks | 8 | no | — | not solid; accepted page in top 5 |
| H2-008 | MISS | page | gradients vanish in my recurrent model | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H2-009 | WEAK | page | training loss goes down but validation loss goes up | (weak) backpropagation-and-gradient-descent | 15 | no | — | not solid; accepted page in top 5 |
| H2-010 | PASS | page | fine tune a pretrained resnet on 500 images | convolutional-neural-networks | 56 | yes | — |  |
| H2-011 | MISS | page | agent receives reward only at the end of an episode | (weak) ai-agent-vs-chatbot | 35 | no | — | no accepted page in top 5 |
| H2-012 | WEAK | page | why are images split into patches for transformers | (weak) vision-transformers | 28 | no | — | not solid; accepted page in top 5 |
| H2-013 | FALSE POSITIVE | page | sparse routing to a few feed forward experts | agentic-workflows | 22 | yes | — | confident wrong page: agentic-workflows |
| H2-014 | FALSE POSITIVE | page | constant memory sequence model that avoids quadratic attention | transformers | 36 | yes | — | confident wrong page: transformers |
| H2-015 | PASS | page | rotary position embeddings and context extension | positional-encoding | 70 | yes | — |  |
| H2-016 | PASS | page | grouped query attention shrinks the kv cache | kv-cache | 102 | yes | — |  |
| H2-017 | PASS | page | how do i shrink a model so it fits in 8gb of vram | gpus-and-ai-accelerators | 55 | yes | — |  |
| H2-018 | MISS | page | adapter training or updating every weight | (weak) distributed-training | 13 | no | — | no accepted page in top 5 |
| H2-019 | MISS | page | how do labs pick model size and dataset size for a training budget | (weak) model-cards | 37 | no | — | no accepted page in top 5 |
| H2-020 | MISS | page | what is the point of letting a model think longer before it replies | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H2-021 | WEAK | page | a verifier that rates each line of a proof | (weak) process-reward-model | 9 | no | — | not solid; accepted page in top 5 |
| H2-022 | WEAK | page | generate many candidates and keep the highest scoring one | (weak) rag-frameworks | 5 | no | — | not solid; accepted page in top 5 |
| H2-023 | WEAK | page | search tree of partial solutions for puzzles | (weak) search-over-reasoning | 49 | no | — | not solid; accepted page in top 5 |
| H2-024 | WEAK | page | force the output to follow a regular expression | (weak) structured-outputs | 22 | no | — | not solid; accepted page in top 5 |
| H2-025 | FALSE POSITIVE | page | llama.cpp grammar file for json | llama-cpp | 116 | yes | — | confident wrong page: llama-cpp |
| H2-026 | FALSE POSITIVE | page | python library for guided generation with pydantic models | constrained-decoding | 75 | yes | — | confident wrong page: constrained-decoding |
| H2-027 | MISS | page | how should i structure instructions so the model follows them | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H2-028 | WEAK | page | examples in the prompt to show the format i want | (weak) prompt-engineering | 34 | no | — | not solid; accepted page in top 5 |
| H2-029 | WEAK | page | answers are generic and vague | (weak) common-prompting-mistakes | 11 | no | — | not solid; accepted page in top 5 |
| H2-030 | MISS | page | my pdf is too long for the model what do i do | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H2-031 | FALSE POSITIVE | page | combine keyword and vector search | vector-databases | 45 | yes | — | confident wrong page: vector-databases |
| H2-032 | PASS | page | build a knowledge base chatbot over help center articles | rag | 27 | yes | — |  |
| H2-033 | PASS | page | where do embeddings get stored and searched | embeddings | 46 | yes | — |  |
| H2-034 | PASS | page | pinecone or pgvector or something else | pgvector | 93 | yes | — |  |
| H2-035 | WEAK | page | relationships between entities across many documents | (weak) document-understanding-ai | 26 | no | — | not solid; accepted page in top 5 |
| H2-036 | MISS | page | retriever misses exact product codes | (weak) flash-attention | 5 | no | — | no accepted page in top 5 |
| H2-037 | MISS | page | can my bot book meetings in outlook | (weak) teams-development | 6 | no | — | no accepted page in top 5 |
| H2-038 | MISS | page | agent reads my inbox and drafts replies | (weak) ai-agent-vs-chatbot | 35 | no | — | no accepted page in top 5 |
| H2-039 | MISS | page | give an agent access to our crm | (weak) ai-agent-vs-chatbot | 35 | no | — | no accepted page in top 5 |
| H2-040 | MISS | page | how do i prevent the assistant from sending emails without asking | (weak) ai-agent-vs-chatbot | 18 | no | — | no accepted page in top 5 |
| H2-041 | MISS | page | hidden instructions inside a pdf the agent reads | (weak) ai-agent-vs-chatbot | 35 | no | — | no accepted page in top 5 |
| H2-042 | WEAK | page | how does an assistant remember my preferences between sessions | (weak) agent-memory | 43 | no | — | not solid; accepted page in top 5 |
| H2-043 | WEAK | page | planner and worker agents | (weak) multi-agent-systems | 36 | no | — | not solid; accepted page in top 5 |
| H2-044 | WEAK | page | break a big goal into subtasks automatically | (weak) agent-planning | 6 | no | — | not solid; accepted page in top 5 |
| H2-045 | FALSE POSITIVE | page | an llm that calls a calculator or search engine | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H2-046 | MISS | page | microsoft stack agent sdk | (weak) openai-agents-sdk | 36 | no | — | no accepted page in top 5 |
| H2-047 | MISS | page | state machine style framework with checkpoints | (weak) choosing-an-agent-framework | 30 | no | — | no accepted page in top 5 |
| H2-048 | FALSE POSITIVE | page | role based crew of agents in python | python | 46 | yes | — | confident wrong page: python |
| H2-049 | FALSE POSITIVE | page | standard way to expose tools to any ai client | agent-tools | 47 | yes | — | confident wrong page: agent-tools |
| H2-050 | FALSE POSITIVE | page | how does a client talk to an mcp server | mcp | 59 | yes | — | confident wrong page: mcp |
| H2-051 | PASS | page | do i need mcp if i already have function calling | function-calling-vs-mcp | 107 | yes | — |  |
| H2-052 | WEAK | page | what can go wrong with third party tool servers | (weak) function-calling | 20 | no | — | not solid; accepted page in top 5 |
| H2-053 | MISS | page | how do independent agents discover each other | (weak) openai-agents-sdk | 39 | no | — | no accepted page in top 5 |
| H2-054 | FALSE POSITIVE | page | python tutorial for calling models | python | 46 | yes | — | confident wrong page: python |
| H2-055 | FALSE POSITIVE | page | pandas dataframe to feed an llm | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H2-056 | PASS | page | typical jobs where python is the right choice | python | 47 | yes | — |  |
| H2-057 | WEAK | page | generic types for api responses | (weak) typescript-api-client-types | 48 | no | — | not solid; accepted page in top 5 |
| H2-058 | WEAK | page | fetch with streaming response body | (weak) streaming-ai-responses | 24 | no | — | not solid; accepted page in top 5 |
| H2-059 | FALSE POSITIVE | page | show tokens as they stream into a chat component | tokens | 34 | yes | — | confident wrong page: tokens |
| H2-060 | PASS | page | backend for a chat app with express | express | 52 | yes | — |  |
| H2-061 | WEAK | page | http methods get post put delete | (weak) rest-apis | 22 | no | — | not solid; accepted page in top 5 |
| H2-062 | WEAK | page | should the browser hold my secret key | (weak) api-keys | 29 | no | — | not solid; accepted page in top 5 |
| H2-063 | FALSE POSITIVE | page | refresh tokens and access tokens | tokens | 34 | yes | — | confident wrong page: tokens |
| H2-064 | PASS | page | difference between id token and access token | openid-connect | 64 | yes | — |  |
| H2-065 | MISS | page | what is a primary key and a foreign key | (weak) api-keys | 21 | no | — | no accepted page in top 5 |
| H2-066 | PASS | page | what is mongodb good for | mongodb | 53 | yes | — |  |
| H2-067 | PASS | page | cache with redis or just use the database | redis | 64 | yes | — |  |
| H2-068 | FALSE POSITIVE | page | embeddings and relational data in one database | embeddings | 46 | yes | — | confident wrong page: embeddings |
| H2-069 | WEAK | page | what does aws lambda do | (weak) aws-fundamentals | 31 | no | — | not solid; accepted page in top 5 |
| H2-070 | WEAK | page | what are azure resource groups | (weak) azure-fundamentals | 40 | no | — | not solid; accepted page in top 5 |
| H2-071 | PASS | page | google cloud iam basics | gcp-fundamentals | 53 | yes | — |  |
| H2-072 | WEAK | page | difference between an image and a container | (weak) containers | 25 | no | — | not solid; accepted page in top 5 |
| H2-073 | PASS | page | dockerfile for a node app | docker | 47 | yes | — |  |
| H2-074 | PASS | page | what does git rebase do | git | 58 | yes | — |  |
| H2-075 | PASS | page | github actions workflow for tests | github | 58 | yes | — |  |
| H2-076 | PASS | page | how do lists and libraries differ in sharepoint | sharepoint | 68 | yes | — |  |
| H2-077 | PASS | page | call microsoft graph from an spfx web part | build-spfx-web-part | 155 | yes | — |  |
| H2-078 | PASS | page | teams app manifest and tabs | teams-development | 78 | yes | — |  |
| H2-079 | PASS | page | what are conditional access and app registrations | microsoft-entra-id | 42 | yes | — |  |
| H2-080 | PASS | page | power automate flows vs spfx | sharepoint-framework | 140 | yes | — |  |
| H2-081 | PASS | page | run llama models on apple silicon | llama-cpp | 78 | yes | — |  |
| H2-082 | PASS | page | paged kv cache serving engine | kv-cache | 78 | yes | — |  |
| H2-083 | MISS | page | export a model for cross platform inference | (weak) model-serving-and-inference | 45 | no | — | no accepted page in top 5 |
| H2-084 | MISS | page | why is my local model so slow | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H2-085 | WEAK | page | is a local model as good as a cloud one | (weak) local-ai-vs-cloud-ai | 38 | no | — | not solid; accepted page in top 5 |
| H2-086 | MISS | page | reading text inside photos | (weak) contrastive-learning-clip | 11 | no | — | no accepted page in top 5 |
| H2-087 | FALSE POSITIVE | page | image and text embeddings in one space | embeddings | 58 | yes | — | confident wrong page: embeddings |
| H2-088 | MISS | page | automatic captions for video | (weak) video-generation-models | 38 | no | — | no accepted page in top 5 |
| H2-089 | WEAK | page | why is robotics harder than chatbots | (weak) embodied-ai | 6 | no | — | not solid; accepted page in top 5 |
| H2-090 | WEAK | page | policies conditioned on camera images and instructions | (weak) system-prompts | 9 | no | — | not solid; accepted page in top 5 |
| H2-091 | WEAK | page | planning inside a learned model of the environment | (weak) model-cards | 28 | no | — | not solid; accepted page in top 5 |
| H2-092 | PASS | page | an attacker puts instructions in a document retrieved by rag | rag | 50 | yes | — |  |
| H2-093 | MISS | page | what do i need to redact before using a third party model | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H2-094 | MISS | page | testing a model for jailbreaks before release | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H2-095 | MISS | page | filtering unsafe model outputs | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H2-096 | WEAK | page | signed provenance on generated images | (weak) c2pa-content-provenance | 33 | no | — | not solid; accepted page in top 5 |
| H2-097 | PASS | page | are public leaderboards gamed | benchmarks-and-leaderboards | 40 | yes | — |  |
| H2-098 | WEAK | page | grading answers with a rubric and a strong model | (weak) model-cards | 28 | no | — | not solid; accepted page in top 5 |
| H2-099 | WEAK | page | precision recall and f1 explained | (weak) evaluation-metrics-for-ai | 10 | no | — | not solid; accepted page in top 5 |
| H2-100 | PASS | page | how do i test an agent that uses tools | agent-evaluation | 80 | yes | — |  |
| H2-101 | PASS | page | monitoring a deployed model for data drift | model-drift-and-monitoring | 105 | yes | — |  |
| H2-102 | FALSE POSITIVE | page | how to reduce tokens and cost in production | tokens | 42 | yes | — | confident wrong page: tokens |
| H2-103 | PASS | page | distributed training across nodes | distributed-training | 61 | yes | — |  |
| H2-104 | PASS | page | which gpu for inference | gpus-and-ai-accelerators | 46 | yes | — |  |
| H2-105 | PASS | page | what counts as a high risk ai system in europe | eu-ai-act | 98 | yes | — |  |
| H2-106 | PASS | page | checklist for responsible ai in a company | ai-governance | 70 | yes | — |  |
| H2-107 | WEAK | page | can a model be audited for fairness | (weak) model-cards | 28 | no | — | not solid; accepted page in top 5 |
| H2-108 | MISS | page | training a chatbot on thumbs up and thumbs down data | (weak) ai-agent-vs-chatbot | 27 | no | — | no accepted page in top 5 |
| H2-109 | FALSE POSITIVE | page | loss function over chosen and rejected completions | backpropagation-and-gradient-descent | 57 | yes | — | confident wrong page: backpropagation-and-gradient-descent |
| H2-110 | MISS | page | model optimises the metric instead of the goal | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H2-111 | FALSE POSITIVE | page | protein folding with deep learning | deep-learning | 100 | yes | — | confident wrong page: deep-learning |
| H2-112 | MISS | page | learning the solution operator of a pde | (weak) deep-learning | 34 | no | — | no accepted page in top 5 |
| H2-113 | PASS | gap | kubernetes deployment vs statefulset | (weak) mlops | 7 | no | — | transparent non-answer |
| H2-114 | PASS | gap | how do i autoscale pods | (weak) none | 0 | no | — | transparent non-answer |
| H2-115 | PASS | gap | object detection bounding boxes and iou | (weak) benchmark-contamination | 4 | no | — | transparent non-answer |
| H2-116 | PASS | gap | image segmentation models | (weak) reasoning-models | 40 | no | — | transparent non-answer |
| H2-117 | PASS | gap | robot operating system nodes and topics | (weak) system-prompts | 26 | no | — | transparent non-answer |
| H2-118 | FALSE POSITIVE | gap | gdpr right to erasure and machine learning | what-is-ai | 28 | yes | — | confident unrelated page: what-is-ai |
| H2-119 | PASS | gap | how do i debug memory leaks in node | (weak) agent-memory | 34 | no | — | transparent non-answer |
| H2-120 | PASS | gap | css grid vs flexbox | html-and-css | 56 | yes | — | nearby page: html-and-css |
| H2-121 | PASS | gap | jwt vs session cookies | json-web-tokens | 86 | yes | — | nearby page: json-web-tokens |
| H2-122 | PASS | neg | transformers movie release order | (weak) vision-transformers | 20 | no | — | no confident answer |
| H2-123 | PASS | neg | python snake care guide | (weak) python | 46 | no | — | no confident answer |
| H2-124 | FALSE POSITIVE | neg | rag and bone man tour dates | rag | 50 | yes | — | confident answer for out-of-scope query: rag |
| H2-125 | FALSE POSITIVE | neg | git hub of the community garden | git | 54 | yes | — | confident answer for out-of-scope query: git |
| H2-126 | PASS | neg | spring onion substitute | (weak) java | 4 | no | — | no confident answer |
| H2-127 | PASS | neg | django unchained cast | (weak) none | 0 | no | — | no confident answer |
| H2-128 | PASS | neg | angular momentum conservation | (weak) none | 0 | no | — | no confident answer |
| H2-129 | PASS | neg | kubernetes in greek means helmsman | (weak) unsupervised-learning | 4 | no | — | no confident answer |
| H2-130 | PASS | neg | bearer of the ring lord of the rings | (weak) api-authentication | 6 | no | — | no confident answer |
| H2-131 | PASS | neg | scrum master salary | (weak) none | 0 | no | — | no confident answer |
| H2-132 | PASS | neg | agent orange history | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| H2-133 | PASS | neg | mongo from flash gordon | (weak) mongodb | 17 | no | — | no confident answer |
| H2-134 | FALSE POSITIVE | neg | redis cluster of hotels | redis | 59 | yes | — | confident answer for out-of-scope query: redis |
| H2-135 | PASS | neg | gradient colour background css for a wedding invitation | (weak) html-and-css | 30 | no | — | no confident answer |
| H2-136 | PASS | neg | train a puppy to sit | (weak) distributed-training | 6 | no | — | no confident answer |
| H2-137 | PASS | neg | loss of appetite in cats | (weak) backpropagation-and-gradient-descent | 9 | no | — | no confident answer |
| H2-138 | PASS | neg | batch of cookies recipe | (weak) llm-cost-optimization | 6 | no | — | no confident answer |
| H2-139 | PASS | neg | kernel panic on my macbook | (weak) semantic-kernel | 36 | no | — | no confident answer |
| H2-140 | PASS | neg | reinforcement bars for concrete | (weak) reinforcement-learning | 22 | no | — | no confident answer |
| H2-141 | PASS | neg | prompt payment discount invoice terms | (weak) system-prompts | 25 | no | — | no confident answer |
| H2-142 | PASS | neg | what should i cook tonight | (weak) none | 0 | no | — | no confident answer |
| H2-143 | PASS | neg | cheap hotels in madrid | (weak) none | 0 | no | — | no confident answer |
| H2-144 | PASS | neg | how do i meditate | (weak) none | 0 | no | — | no confident answer |
| H2-145 | PASS | neg | best podcasts about history | (weak) best-of-n-sampling | 28 | no | — | no confident answer |
| H2-146 | PASS | neg | renew passport appointment | (weak) none | 0 | no | — | no confident answer |
