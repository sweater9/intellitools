# Knowledge red-team report — tune-semantic-h2

Dataset: `tests/redteam/frozen-holdout2.json` sha256 `283ac7b8ba5877f24e5a690db71f1751de8c30a98c5f6215a4c6e7b47d620119`

Total 146 · PASS 76 · WEAK 5 · MISS 8 · FALSE POSITIVE 57
Pass rate 52.1% · False-positive rate 39.0%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 81 · WEAK 5 · MISS 8 · FALSE POSITIVE 52 · pass rate 55.5% · FP rate 35.6%
Retrieval on page-kind queries (111): top-1 55.0% · top-3 71.2% · top-5 76.6%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 9 | 1 | 0 | 0 | 8 | 11.1% |
| neg | 26 | 16 | 0 | 0 | 10 | 61.5% |
| page | 111 | 59 | 5 | 8 | 39 | 53.2% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 25 | 16 | 0 | 0 | 9 | 64.0% |
| architecture | 4 | 1 | 0 | 0 | 3 | 25.0% |
| beginner | 14 | 10 | 1 | 1 | 2 | 71.4% |
| comparison | 1 | 0 | 0 | 0 | 1 | 0.0% |
| concept | 45 | 24 | 2 | 3 | 16 | 53.3% |
| conversational | 2 | 0 | 0 | 0 | 2 | 0.0% |
| coverage-probe | 9 | 1 | 0 | 0 | 8 | 11.1% |
| expert | 4 | 3 | 0 | 0 | 1 | 75.0% |
| implementation | 18 | 10 | 1 | 2 | 5 | 55.6% |
| integration | 3 | 0 | 0 | 1 | 2 | 0.0% |
| security | 10 | 3 | 1 | 0 | 6 | 30.0% |
| troubleshooting | 4 | 3 | 0 | 0 | 1 | 75.0% |
| what-to-use | 7 | 5 | 0 | 1 | 1 | 71.4% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 1 | 0 | 0 | 0 | 1 | 0.0% |
| agent | 12 | 3 | 0 | 2 | 7 | 25.0% |
| ai | 1 | 0 | 0 | 0 | 1 | 0.0% |
| amb | 20 | 15 | 0 | 0 | 5 | 75.0% |
| api | 4 | 2 | 0 | 0 | 2 | 50.0% |
| cloud | 3 | 3 | 0 | 0 | 0 | 100.0% |
| cv | 2 | 0 | 0 | 0 | 2 | 0.0% |
| db | 4 | 3 | 0 | 1 | 0 | 75.0% |
| dev | 3 | 1 | 0 | 0 | 2 | 33.3% |
| devops | 6 | 3 | 0 | 0 | 3 | 50.0% |
| dl | 8 | 6 | 1 | 0 | 1 | 75.0% |
| eval | 4 | 3 | 0 | 1 | 0 | 75.0% |
| gov | 4 | 3 | 0 | 0 | 1 | 75.0% |
| js | 1 | 1 | 0 | 0 | 0 | 100.0% |
| llm | 15 | 7 | 1 | 1 | 6 | 46.7% |
| local | 1 | 0 | 0 | 0 | 1 | 0.0% |
| mcp | 4 | 0 | 0 | 0 | 4 | 0.0% |
| ml | 1 | 0 | 1 | 0 | 0 | 0.0% |
| mlops | 4 | 3 | 0 | 0 | 1 | 75.0% |
| mm | 2 | 1 | 0 | 0 | 1 | 50.0% |
| ms | 5 | 5 | 0 | 0 | 0 | 100.0% |
| node | 1 | 0 | 0 | 0 | 1 | 0.0% |
| off | 5 | 1 | 0 | 0 | 4 | 20.0% |
| prompt | 3 | 2 | 1 | 0 | 0 | 66.7% |
| python | 3 | 1 | 0 | 1 | 1 | 33.3% |
| rag | 7 | 2 | 0 | 0 | 5 | 28.6% |
| react | 1 | 1 | 0 | 0 | 0 | 100.0% |
| rl | 1 | 0 | 0 | 0 | 1 | 0.0% |
| robot | 4 | 3 | 0 | 0 | 1 | 75.0% |
| runtime | 4 | 3 | 0 | 0 | 1 | 75.0% |
| safety | 3 | 0 | 0 | 2 | 1 | 0.0% |
| science | 2 | 1 | 0 | 0 | 1 | 50.0% |
| sec | 5 | 2 | 1 | 0 | 2 | 40.0% |
| speech | 1 | 0 | 0 | 0 | 1 | 0.0% |
| ts | 1 | 1 | 0 | 0 | 0 | 100.0% |

## FALSE POSITIVE
- H2-001 [neg/beginner] "can computers really think" → what-is-ai (score 76, solid yes) — expected none; confident answer for out-of-scope query: what-is-ai
- H2-003 [page/conversational] "why does the ai sometimes just invent a source that does not exist" → large-language-models (score 71, solid yes) — expected ai-hallucinations|how-to-reduce-hallucinations; confident wrong page: large-language-models
- H2-004 [page/conversational] "whats the limit on how long my conversation with an ai can be" → how-to-reduce-hallucinations (score 73, solid yes) — expected context-windows|tokens; confident wrong page: how-to-reduce-hallucinations
- H2-005 [page/concept] "how do text predictors turn a prompt into a paragraph" → common-prompting-mistakes (score 62, solid yes) — expected large-language-models|sampling-and-decoding; confident wrong page: common-prompting-mistakes
- H2-011 [page/concept] "agent receives reward only at the end of an episode" → agent-memory (score 58, solid yes) — expected reinforcement-learning|markov-decision-processes; confident wrong page: agent-memory
- H2-014 [page/expert] "constant memory sequence model that avoids quadratic attention" → flash-attention (score 69, solid yes) — expected state-space-models; confident wrong page: flash-attention
- H2-018 [page/what-to-use] "adapter training or updating every weight" → model-serving-and-inference (score 56, solid yes) — expected lora-vs-full-fine-tuning|lora-and-peft; confident wrong page: model-serving-and-inference
- H2-020 [page/concept] "what is the point of letting a model think longer before it replies" → how-to-reduce-hallucinations (score 78, solid yes) — expected test-time-compute|reasoning-models; confident wrong page: how-to-reduce-hallucinations
- H2-021 [page/concept] "a verifier that rates each line of a proof" → best-of-n-sampling (score 62, solid yes) — expected process-reward-model; confident wrong page: best-of-n-sampling
- H2-030 [page/implementation] "my pdf is too long for the model what do i do" → sycophancy (score 62, solid yes) — expected chunking|rag|context-windows; confident wrong page: sycophancy
- H2-031 [page/implementation] "combine keyword and vector search" → vector-databases (score 76, solid yes) — expected hybrid-search-and-reranking; confident wrong page: vector-databases
- H2-032 [page/implementation] "build a knowledge base chatbot over help center articles" → overfitting-and-regularization (score 56, solid yes) — expected rag|chunking|embeddings; confident wrong page: overfitting-and-regularization
- H2-033 [page/architecture] "where do embeddings get stored and searched" → postgresql (score 57, solid yes) — expected vector-databases|embeddings|pgvector; confident wrong page: postgresql
- H2-036 [page/troubleshooting] "retriever misses exact product codes" → vector-database-vs-traditional-database (score 56, solid yes) — expected hybrid-search-and-reranking|embeddings; confident wrong page: vector-database-vs-traditional-database
- H2-038 [page/integration] "agent reads my inbox and drafts replies" → authentication-vs-authorization (score 67, solid yes) — expected gmail-for-ai-agents|connecting-agents-to-apps|agent-tools; confident wrong page: authentication-vs-authorization
- H2-039 [page/integration] "give an agent access to our crm" → agent-memory (score 67, solid yes) — expected connecting-agents-to-apps|agent-tools|integration-permissions; confident wrong page: agent-memory
- H2-040 [page/security] "how do i prevent the assistant from sending emails without asking" → ai-privacy-and-security (score 72, solid yes) — expected integration-permissions|ai-guardrails|agent-tools; confident wrong page: ai-privacy-and-security
- H2-041 [page/security] "hidden instructions inside a pdf the agent reads" → databases-for-ai-apps (score 67, solid yes) — expected prompt-injection; confident wrong page: databases-for-ai-apps
- H2-042 [page/architecture] "how does an assistant remember my preferences between sessions" → ai-agent-vs-chatbot (score 63, solid yes) — expected agent-memory; confident wrong page: ai-agent-vs-chatbot
- H2-044 [page/architecture] "break a big goal into subtasks automatically" → cicd (score 59, solid yes) — expected agent-planning; confident wrong page: cicd
- H2-045 [page/concept] "an llm that calls a calculator or search engine" → llm-observability (score 65, solid yes) — expected function-calling|agent-tools; confident wrong page: llm-observability
- H2-049 [page/concept] "standard way to expose tools to any ai client" → prompt-injection (score 65, solid yes) — expected mcp|mcp-servers-and-clients; confident wrong page: prompt-injection
- H2-050 [page/concept] "how does a client talk to an mcp server" → connecting-agents-to-apps (score 77, solid yes) — expected mcp-servers-and-clients; confident wrong page: connecting-agents-to-apps
- H2-051 [page/comparison] "do i need mcp if i already have function calling" → mcp (score 72, solid yes) — expected function-calling-vs-mcp; confident wrong page: mcp
- H2-052 [page/security] "what can go wrong with third party tool servers" → mcp-servers-and-clients (score 68, solid yes) — expected mcp-security; confident wrong page: mcp-servers-and-clients
- H2-053 [page/concept] "how do independent agents discover each other" → agent-protocol-landscape (score 63, solid yes) — expected a2a-protocol; confident wrong page: agent-protocol-landscape
- H2-056 [page/beginner] "typical jobs where python is the right choice" → rust (score 65, solid yes) — expected python; confident wrong page: rust
- H2-060 [page/implementation] "backend for a chat app with express" → javascript-for-ai (score 80, solid yes) — expected nodejs-for-ai|express; confident wrong page: javascript-for-ai
- H2-062 [page/security] "should the browser hold my secret key" → authentication-vs-authorization (score 69, solid yes) — expected api-keys|environment-variables; confident wrong page: authentication-vs-authorization
- H2-064 [page/concept] "difference between id token and access token" → tokens (score 78, solid yes) — expected openid-connect|oauth; confident wrong page: tokens
- H2-073 [page/implementation] "dockerfile for a node app" → nodejs-for-ai (score 75, solid yes) — expected docker|nodejs; confident wrong page: nodejs-for-ai
- H2-084 [page/concept] "why is my local model so slow" → ai-evaluation (score 68, solid yes) — expected quantization|llama-cpp|gpus-and-ai-accelerators|local-ai; confident wrong page: ai-evaluation
- H2-085 [page/concept] "is a local model as good as a cloud one" → llama-cpp (score 58, solid yes) — expected local-ai-vs-cloud-ai|local-ai; confident wrong page: llama-cpp
- H2-086 [page/concept] "reading text inside photos" → databases-for-ai-apps (score 62, solid yes) — expected document-understanding-ai|vision-language-models; confident wrong page: databases-for-ai-apps
- H2-088 [page/concept] "automatic captions for video" → video-generation-models (score 62, solid yes) — expected speech-ai; confident wrong page: video-generation-models
- H2-093 [page/security] "what do i need to redact before using a third party model" → rag-frameworks (score 71, solid yes) — expected ai-privacy-and-security; confident wrong page: rag-frameworks
- H2-095 [page/security] "filtering unsafe model outputs" → gpus-and-ai-accelerators (score 56, solid yes) — expected ai-guardrails; confident wrong page: gpus-and-ai-accelerators
- H2-103 [page/concept] "distributed training across nodes" → graph-neural-networks (score 63, solid yes) — expected distributed-training; confident wrong page: graph-neural-networks
- H2-110 [page/concept] "model optimises the metric instead of the goal" → speculative-decoding (score 56, solid yes) — expected reward-hacking; confident wrong page: speculative-decoding
- H2-111 [page/concept] "protein folding with deep learning" → neural-networks (score 70, solid yes) — expected alphafold; confident wrong page: neural-networks
- H2-113 [gap/coverage-probe] "kubernetes deployment vs statefulset" → kubernetes (score 79, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- H2-114 [gap/coverage-probe] "how do i autoscale pods" → kubernetes (score 79, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- H2-115 [gap/coverage-probe] "object detection bounding boxes and iou" → object-detection (score 76, solid yes) — expected convolutional-neural-networks; confident unrelated page: object-detection
- H2-116 [gap/coverage-probe] "image segmentation models" → diffusion-models (score 73, solid yes) — expected convolutional-neural-networks|vision-transformers; confident unrelated page: diffusion-models
- H2-117 [gap/coverage-probe] "robot operating system nodes and topics" → robot-operating-system (score 82, solid yes) — expected embodied-ai; confident unrelated page: robot-operating-system
- H2-118 [gap/coverage-probe] "gdpr right to erasure and machine learning" → gdpr-and-ai (score 67, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: gdpr-and-ai
- H2-119 [gap/coverage-probe] "how do i debug memory leaks in node" → calling-ai-apis-with-javascript (score 59, solid yes) — expected nodejs; confident unrelated page: calling-ai-apis-with-javascript
- H2-121 [gap/coverage-probe] "jwt vs session cookies" → api-authentication (score 62, solid yes) — expected json-web-tokens|authentication-vs-authorization; confident unrelated page: api-authentication
- H2-123 [neg/ambiguous-or-off-topic] "python snake care guide" → python (score 65, solid yes) — expected none; confident answer for out-of-scope query: python
- H2-124 [neg/ambiguous-or-off-topic] "rag and bone man tour dates" → agentic-rag (score 55, solid yes) — expected none; confident answer for out-of-scope query: agentic-rag
- H2-125 [neg/ambiguous-or-off-topic] "git hub of the community garden" → cicd (score 68, solid yes) — expected none; confident answer for out-of-scope query: cicd
- H2-136 [neg/ambiguous-or-off-topic] "train a puppy to sit" → reinforcement-learning-for-reasoning (score 62, solid yes) — expected none; confident answer for out-of-scope query: reinforcement-learning-for-reasoning
- H2-141 [neg/ambiguous-or-off-topic] "prompt payment discount invoice terms" → prompt-caching (score 60, solid yes) — expected none; confident answer for out-of-scope query: prompt-caching
- H2-142 [neg/ambiguous-or-off-topic] "what should i cook tonight" → rest-vs-graphql (score 63, solid yes) — expected none; confident answer for out-of-scope query: rest-vs-graphql
- H2-144 [neg/ambiguous-or-off-topic] "how do i meditate" → ai-evaluation (score 75, solid yes) — expected none; confident answer for out-of-scope query: ai-evaluation
- H2-145 [neg/ambiguous-or-off-topic] "best podcasts about history" → mmlu (score 70, solid yes) — expected none; confident answer for out-of-scope query: mmlu
- H2-146 [neg/ambiguous-or-off-topic] "renew passport appointment" → authentication-vs-authorization (score 56, solid yes) — expected none; confident answer for out-of-scope query: authentication-vs-authorization

## MISS
- H2-024 [page/implementation] "force the output to follow a regular expression" → (weak) prompt-engineering (score 53, solid no) — expected constrained-decoding|grammar-guided-generation; no accepted page in top 5
- H2-037 [page/integration] "can my bot book meetings in outlook" → (weak) agent-memory (score 47, solid no) — expected connecting-agents-to-apps|microsoft-graph|oauth-for-ai-agents; no accepted page in top 5
- H2-047 [page/what-to-use] "state machine style framework with checkpoints" → (weak) agentic-workflows (score 46, solid no) — expected langgraph; no accepted page in top 5
- H2-055 [page/implementation] "pandas dataframe to feed an llm" → (weak) llm-observability (score 49, solid no) — expected python-data-for-ai; no accepted page in top 5
- H2-065 [page/beginner] "what is a primary key and a foreign key" → (weak) react-chatbot-state (score 51, solid no) — expected sql; no accepted page in top 5
- H2-097 [page/concept] "are public leaderboards gamed" → (weak) llm-benchmarks-vs-task-evals (score 40, solid no) — expected benchmarks-and-leaderboards|benchmark-contamination; no accepted page in top 5
- H2-108 [page/concept] "training a chatbot on thumbs up and thumbs down data" → (weak) streaming-ai-responses (score 45, solid no) — expected rlhf|preference-optimization; no accepted page in top 5
- H2-109 [page/concept] "loss function over chosen and rejected completions" → (weak) human-preference-evaluation (score 45, solid no) — expected dpo; no accepted page in top 5

## WEAK
- H2-002 [page/beginner] "how do machines learn from examples" → (weak) large-language-models (score 53, solid no) — expected supervised-learning|what-is-ai|neural-networks; not solid; accepted page in top 5
- H2-007 [page/concept] "why do we need activation functions" → (weak) neural-networks (score 54, solid no) — expected neural-networks; not solid; accepted page in top 5
- H2-019 [page/concept] "how do labs pick model size and dataset size for a training budget" → (weak) transfer-learning (score 45, solid no) — expected scaling-laws; not solid; accepted page in top 5
- H2-028 [page/implementation] "examples in the prompt to show the format i want" → (weak) prompt-engineering (score 51, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- H2-094 [page/security] "testing a model for jailbreaks before release" → (weak) overfitting-and-regularization (score 51, solid no) — expected red-teaming; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H2-001 | FALSE POSITIVE | neg | can computers really think | what-is-ai | 76 | yes | — | confident answer for out-of-scope query: what-is-ai |
| H2-002 | WEAK | page | how do machines learn from examples | (weak) large-language-models | 53 | no | — | not solid; accepted page in top 5 |
| H2-003 | FALSE POSITIVE | page | why does the ai sometimes just invent a source that does not exist | large-language-models | 71 | yes | — | confident wrong page: large-language-models |
| H2-004 | FALSE POSITIVE | page | whats the limit on how long my conversation with an ai can be | how-to-reduce-hallucinations | 73 | yes | — | confident wrong page: how-to-reduce-hallucinations |
| H2-005 | FALSE POSITIVE | page | how do text predictors turn a prompt into a paragraph | common-prompting-mistakes | 62 | yes | — | confident wrong page: common-prompting-mistakes |
| H2-006 | PASS | page | why are deep networks called deep | deep-learning | 73 | yes | — |  |
| H2-007 | WEAK | page | why do we need activation functions | (weak) neural-networks | 54 | no | — | not solid; accepted page in top 5 |
| H2-008 | PASS | page | gradients vanish in my recurrent model | backpropagation-and-gradient-descent | 68 | yes | — |  |
| H2-009 | PASS | page | training loss goes down but validation loss goes up | overfitting-and-regularization | 60 | yes | — |  |
| H2-010 | PASS | page | fine tune a pretrained resnet on 500 images | transfer-learning | 74 | yes | — |  |
| H2-011 | FALSE POSITIVE | page | agent receives reward only at the end of an episode | agent-memory | 58 | yes | — | confident wrong page: agent-memory |
| H2-012 | PASS | page | why are images split into patches for transformers | vision-transformers | 74 | yes | — |  |
| H2-013 | PASS | page | sparse routing to a few feed forward experts | mixture-of-experts | 57 | yes | — |  |
| H2-014 | FALSE POSITIVE | page | constant memory sequence model that avoids quadratic attention | flash-attention | 69 | yes | — | confident wrong page: flash-attention |
| H2-015 | PASS | page | rotary position embeddings and context extension | positional-encoding | 61 | yes | — |  |
| H2-016 | PASS | page | grouped query attention shrinks the kv cache | kv-cache | 82 | yes | — |  |
| H2-017 | PASS | page | how do i shrink a model so it fits in 8gb of vram | quantization | 56 | yes | — |  |
| H2-018 | FALSE POSITIVE | page | adapter training or updating every weight | model-serving-and-inference | 56 | yes | — | confident wrong page: model-serving-and-inference |
| H2-019 | WEAK | page | how do labs pick model size and dataset size for a training budget | (weak) transfer-learning | 45 | no | — | not solid; accepted page in top 5 |
| H2-020 | FALSE POSITIVE | page | what is the point of letting a model think longer before it replies | how-to-reduce-hallucinations | 78 | yes | — | confident wrong page: how-to-reduce-hallucinations |
| H2-021 | FALSE POSITIVE | page | a verifier that rates each line of a proof | best-of-n-sampling | 62 | yes | — | confident wrong page: best-of-n-sampling |
| H2-022 | PASS | page | generate many candidates and keep the highest scoring one | best-of-n-sampling | 81 | yes | — |  |
| H2-023 | PASS | page | search tree of partial solutions for puzzles | search-over-reasoning | 63 | yes | — |  |
| H2-024 | MISS | page | force the output to follow a regular expression | (weak) prompt-engineering | 53 | no | — | no accepted page in top 5 |
| H2-025 | PASS | page | llama.cpp grammar file for json | gbnf-grammars | 94 | yes | — |  |
| H2-026 | PASS | page | python library for guided generation with pydantic models | outlines | 68 | yes | — |  |
| H2-027 | PASS | page | how should i structure instructions so the model follows them | prompt-engineering | 60 | yes | — |  |
| H2-028 | WEAK | page | examples in the prompt to show the format i want | (weak) prompt-engineering | 51 | no | — | not solid; accepted page in top 5 |
| H2-029 | PASS | page | answers are generic and vague | common-prompting-mistakes | 68 | yes | — |  |
| H2-030 | FALSE POSITIVE | page | my pdf is too long for the model what do i do | sycophancy | 62 | yes | — | confident wrong page: sycophancy |
| H2-031 | FALSE POSITIVE | page | combine keyword and vector search | vector-databases | 76 | yes | — | confident wrong page: vector-databases |
| H2-032 | FALSE POSITIVE | page | build a knowledge base chatbot over help center articles | overfitting-and-regularization | 56 | yes | — | confident wrong page: overfitting-and-regularization |
| H2-033 | FALSE POSITIVE | page | where do embeddings get stored and searched | postgresql | 57 | yes | — | confident wrong page: postgresql |
| H2-034 | PASS | page | pinecone or pgvector or something else | choosing-a-vector-store | 68 | yes | — |  |
| H2-035 | PASS | page | relationships between entities across many documents | graph-rag | 79 | yes | — |  |
| H2-036 | FALSE POSITIVE | page | retriever misses exact product codes | vector-database-vs-traditional-database | 56 | yes | — | confident wrong page: vector-database-vs-traditional-database |
| H2-037 | MISS | page | can my bot book meetings in outlook | (weak) agent-memory | 47 | no | — | no accepted page in top 5 |
| H2-038 | FALSE POSITIVE | page | agent reads my inbox and drafts replies | authentication-vs-authorization | 67 | yes | — | confident wrong page: authentication-vs-authorization |
| H2-039 | FALSE POSITIVE | page | give an agent access to our crm | agent-memory | 67 | yes | — | confident wrong page: agent-memory |
| H2-040 | FALSE POSITIVE | page | how do i prevent the assistant from sending emails without asking | ai-privacy-and-security | 72 | yes | — | confident wrong page: ai-privacy-and-security |
| H2-041 | FALSE POSITIVE | page | hidden instructions inside a pdf the agent reads | databases-for-ai-apps | 67 | yes | — | confident wrong page: databases-for-ai-apps |
| H2-042 | FALSE POSITIVE | page | how does an assistant remember my preferences between sessions | ai-agent-vs-chatbot | 63 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| H2-043 | PASS | page | planner and worker agents | multi-agent-systems | 76 | yes | — |  |
| H2-044 | FALSE POSITIVE | page | break a big goal into subtasks automatically | cicd | 59 | yes | — | confident wrong page: cicd |
| H2-045 | FALSE POSITIVE | page | an llm that calls a calculator or search engine | llm-observability | 65 | yes | — | confident wrong page: llm-observability |
| H2-046 | PASS | page | microsoft stack agent sdk | semantic-kernel | 74 | yes | — |  |
| H2-047 | MISS | page | state machine style framework with checkpoints | (weak) agentic-workflows | 46 | no | — | no accepted page in top 5 |
| H2-048 | PASS | page | role based crew of agents in python | crewai | 75 | yes | — |  |
| H2-049 | FALSE POSITIVE | page | standard way to expose tools to any ai client | prompt-injection | 65 | yes | — | confident wrong page: prompt-injection |
| H2-050 | FALSE POSITIVE | page | how does a client talk to an mcp server | connecting-agents-to-apps | 77 | yes | — | confident wrong page: connecting-agents-to-apps |
| H2-051 | FALSE POSITIVE | page | do i need mcp if i already have function calling | mcp | 72 | yes | — | confident wrong page: mcp |
| H2-052 | FALSE POSITIVE | page | what can go wrong with third party tool servers | mcp-servers-and-clients | 68 | yes | — | confident wrong page: mcp-servers-and-clients |
| H2-053 | FALSE POSITIVE | page | how do independent agents discover each other | agent-protocol-landscape | 63 | yes | — | confident wrong page: agent-protocol-landscape |
| H2-054 | PASS | page | python tutorial for calling models | calling-ai-apis-with-python | 79 | yes | — |  |
| H2-055 | MISS | page | pandas dataframe to feed an llm | (weak) llm-observability | 49 | no | — | no accepted page in top 5 |
| H2-056 | FALSE POSITIVE | page | typical jobs where python is the right choice | rust | 65 | yes | — | confident wrong page: rust |
| H2-057 | PASS | page | generic types for api responses | typescript-api-client-types | 68 | yes | — |  |
| H2-058 | PASS | page | fetch with streaming response body | streaming-ai-responses | 66 | yes | — |  |
| H2-059 | PASS | page | show tokens as they stream into a chat component | streaming-ai-responses | 71 | yes | — |  |
| H2-060 | FALSE POSITIVE | page | backend for a chat app with express | javascript-for-ai | 80 | yes | — | confident wrong page: javascript-for-ai |
| H2-061 | PASS | page | http methods get post put delete | rest-apis | 70 | yes | — |  |
| H2-062 | FALSE POSITIVE | page | should the browser hold my secret key | authentication-vs-authorization | 69 | yes | — | confident wrong page: authentication-vs-authorization |
| H2-063 | PASS | page | refresh tokens and access tokens | oauth | 69 | yes | — |  |
| H2-064 | FALSE POSITIVE | page | difference between id token and access token | tokens | 78 | yes | — | confident wrong page: tokens |
| H2-065 | MISS | page | what is a primary key and a foreign key | (weak) react-chatbot-state | 51 | no | — | no accepted page in top 5 |
| H2-066 | PASS | page | what is mongodb good for | mongodb | 72 | yes | — |  |
| H2-067 | PASS | page | cache with redis or just use the database | redis | 71 | yes | — |  |
| H2-068 | PASS | page | embeddings and relational data in one database | pgvector | 85 | yes | — |  |
| H2-069 | PASS | page | what does aws lambda do | aws-fundamentals | 80 | yes | — |  |
| H2-070 | PASS | page | what are azure resource groups | azure-fundamentals | 75 | yes | — |  |
| H2-071 | PASS | page | google cloud iam basics | gcp-fundamentals | 84 | yes | — |  |
| H2-072 | PASS | page | difference between an image and a container | containers | 55 | yes | — |  |
| H2-073 | FALSE POSITIVE | page | dockerfile for a node app | nodejs-for-ai | 75 | yes | — | confident wrong page: nodejs-for-ai |
| H2-074 | PASS | page | what does git rebase do | git | 92 | yes | — |  |
| H2-075 | PASS | page | github actions workflow for tests | github | 58 | yes | — |  |
| H2-076 | PASS | page | how do lists and libraries differ in sharepoint | sharepoint | 68 | yes | — |  |
| H2-077 | PASS | page | call microsoft graph from an spfx web part | microsoft-graph | 90 | yes | — |  |
| H2-078 | PASS | page | teams app manifest and tabs | teams-development | 78 | yes | — |  |
| H2-079 | PASS | page | what are conditional access and app registrations | microsoft-entra-id | 78 | yes | — |  |
| H2-080 | PASS | page | power automate flows vs spfx | power-platform | 60 | yes | — |  |
| H2-081 | PASS | page | run llama models on apple silicon | llama-cpp | 78 | yes | — |  |
| H2-082 | PASS | page | paged kv cache serving engine | vllm | 83 | yes | — |  |
| H2-083 | PASS | page | export a model for cross platform inference | onnx-runtime | 62 | yes | — |  |
| H2-084 | FALSE POSITIVE | page | why is my local model so slow | ai-evaluation | 68 | yes | — | confident wrong page: ai-evaluation |
| H2-085 | FALSE POSITIVE | page | is a local model as good as a cloud one | llama-cpp | 58 | yes | — | confident wrong page: llama-cpp |
| H2-086 | FALSE POSITIVE | page | reading text inside photos | databases-for-ai-apps | 62 | yes | — | confident wrong page: databases-for-ai-apps |
| H2-087 | PASS | page | image and text embeddings in one space | contrastive-learning-clip | 70 | yes | — |  |
| H2-088 | FALSE POSITIVE | page | automatic captions for video | video-generation-models | 62 | yes | — | confident wrong page: video-generation-models |
| H2-089 | PASS | page | why is robotics harder than chatbots | embodied-ai | 71 | yes | — |  |
| H2-090 | PASS | page | policies conditioned on camera images and instructions | vision-language-action-models | 64 | yes | — |  |
| H2-091 | PASS | page | planning inside a learned model of the environment | world-models | 63 | yes | — |  |
| H2-092 | PASS | page | an attacker puts instructions in a document retrieved by rag | rag | 62 | yes | — |  |
| H2-093 | FALSE POSITIVE | page | what do i need to redact before using a third party model | rag-frameworks | 71 | yes | — | confident wrong page: rag-frameworks |
| H2-094 | WEAK | page | testing a model for jailbreaks before release | (weak) overfitting-and-regularization | 51 | no | — | not solid; accepted page in top 5 |
| H2-095 | FALSE POSITIVE | page | filtering unsafe model outputs | gpus-and-ai-accelerators | 56 | yes | — | confident wrong page: gpus-and-ai-accelerators |
| H2-096 | PASS | page | signed provenance on generated images | c2pa-content-provenance | 70 | yes | — |  |
| H2-097 | MISS | page | are public leaderboards gamed | (weak) llm-benchmarks-vs-task-evals | 40 | no | — | no accepted page in top 5 |
| H2-098 | PASS | page | grading answers with a rubric and a strong model | llm-as-a-judge | 71 | yes | — |  |
| H2-099 | PASS | page | precision recall and f1 explained | evaluation-metrics-for-ai | 71 | yes | — |  |
| H2-100 | PASS | page | how do i test an agent that uses tools | agent-evaluation | 64 | yes | — |  |
| H2-101 | PASS | page | monitoring a deployed model for data drift | model-drift-and-monitoring | 78 | yes | — |  |
| H2-102 | PASS | page | how to reduce tokens and cost in production | llm-cost-optimization | 68 | yes | — |  |
| H2-103 | FALSE POSITIVE | page | distributed training across nodes | graph-neural-networks | 63 | yes | — | confident wrong page: graph-neural-networks |
| H2-104 | PASS | page | which gpu for inference | model-serving-and-inference | 75 | yes | — |  |
| H2-105 | PASS | page | what counts as a high risk ai system in europe | eu-ai-act | 62 | yes | — |  |
| H2-106 | PASS | page | checklist for responsible ai in a company | ai-governance | 84 | yes | — |  |
| H2-107 | PASS | page | can a model be audited for fairness | ai-bias-and-fairness | 61 | yes | — |  |
| H2-108 | MISS | page | training a chatbot on thumbs up and thumbs down data | (weak) streaming-ai-responses | 45 | no | — | no accepted page in top 5 |
| H2-109 | MISS | page | loss function over chosen and rejected completions | (weak) human-preference-evaluation | 45 | no | — | no accepted page in top 5 |
| H2-110 | FALSE POSITIVE | page | model optimises the metric instead of the goal | speculative-decoding | 56 | yes | — | confident wrong page: speculative-decoding |
| H2-111 | FALSE POSITIVE | page | protein folding with deep learning | neural-networks | 70 | yes | — | confident wrong page: neural-networks |
| H2-112 | PASS | page | learning the solution operator of a pde | physics-informed-neural-networks | 59 | yes | — |  |
| H2-113 | FALSE POSITIVE | gap | kubernetes deployment vs statefulset | kubernetes | 79 | yes | — | confident unrelated page: kubernetes |
| H2-114 | FALSE POSITIVE | gap | how do i autoscale pods | kubernetes | 79 | yes | — | confident unrelated page: kubernetes |
| H2-115 | FALSE POSITIVE | gap | object detection bounding boxes and iou | object-detection | 76 | yes | — | confident unrelated page: object-detection |
| H2-116 | FALSE POSITIVE | gap | image segmentation models | diffusion-models | 73 | yes | — | confident unrelated page: diffusion-models |
| H2-117 | FALSE POSITIVE | gap | robot operating system nodes and topics | robot-operating-system | 82 | yes | — | confident unrelated page: robot-operating-system |
| H2-118 | FALSE POSITIVE | gap | gdpr right to erasure and machine learning | gdpr-and-ai | 67 | yes | — | confident unrelated page: gdpr-and-ai |
| H2-119 | FALSE POSITIVE | gap | how do i debug memory leaks in node | calling-ai-apis-with-javascript | 59 | yes | — | confident unrelated page: calling-ai-apis-with-javascript |
| H2-120 | PASS | gap | css grid vs flexbox | html-and-css | 85 | yes | — | nearby page: html-and-css |
| H2-121 | FALSE POSITIVE | gap | jwt vs session cookies | api-authentication | 62 | yes | — | confident unrelated page: api-authentication |
| H2-122 | PASS | neg | transformers movie release order | (weak) recurrent-neural-networks | 48 | no | — | no confident answer |
| H2-123 | FALSE POSITIVE | neg | python snake care guide | python | 65 | yes | — | confident answer for out-of-scope query: python |
| H2-124 | FALSE POSITIVE | neg | rag and bone man tour dates | agentic-rag | 55 | yes | — | confident answer for out-of-scope query: agentic-rag |
| H2-125 | FALSE POSITIVE | neg | git hub of the community garden | cicd | 68 | yes | — | confident answer for out-of-scope query: cicd |
| H2-126 | PASS | neg | spring onion substitute | (weak) java | 50 | no | — | no confident answer |
| H2-127 | PASS | neg | django unchained cast | (weak) python | 49 | no | — | no confident answer |
| H2-128 | PASS | neg | angular momentum conservation | (weak) generative-adversarial-networks | 54 | no | — | no confident answer |
| H2-129 | PASS | neg | kubernetes in greek means helmsman | (weak) ray | 35 | no | — | no confident answer |
| H2-130 | PASS | neg | bearer of the ring lord of the rings | (weak) json-web-tokens | 45 | no | — | no confident answer |
| H2-131 | PASS | neg | scrum master salary | (weak) best-of-n-sampling | 48 | no | — | no confident answer |
| H2-132 | PASS | neg | agent orange history | (weak) multi-agent-systems | 51 | no | — | no confident answer |
| H2-133 | PASS | neg | mongo from flash gordon | (weak) gcp-fundamentals | 45 | no | — | no confident answer |
| H2-134 | PASS | neg | redis cluster of hotels | (weak) kubernetes | 51 | no | — | no confident answer |
| H2-135 | PASS | neg | gradient colour background css for a wedding invitation | (weak) contrastive-learning-clip | 46 | no | — | no confident answer |
| H2-136 | FALSE POSITIVE | neg | train a puppy to sit | reinforcement-learning-for-reasoning | 62 | yes | — | confident answer for out-of-scope query: reinforcement-learning-for-reasoning |
| H2-137 | PASS | neg | loss of appetite in cats | (weak) local-ai | 44 | no | — | no confident answer |
| H2-138 | PASS | neg | batch of cookies recipe | (weak) rag-with-python | 51 | no | — | no confident answer |
| H2-139 | PASS | neg | kernel panic on my macbook | (weak) containers | 41 | no | — | no confident answer |
| H2-140 | PASS | neg | reinforcement bars for concrete | (weak) red-teaming | 34 | no | — | no confident answer |
| H2-141 | FALSE POSITIVE | neg | prompt payment discount invoice terms | prompt-caching | 60 | yes | — | confident answer for out-of-scope query: prompt-caching |
| H2-142 | FALSE POSITIVE | neg | what should i cook tonight | rest-vs-graphql | 63 | yes | — | confident answer for out-of-scope query: rest-vs-graphql |
| H2-143 | PASS | neg | cheap hotels in madrid | (weak) lora-and-peft | 44 | no | — | no confident answer |
| H2-144 | FALSE POSITIVE | neg | how do i meditate | ai-evaluation | 75 | yes | — | confident answer for out-of-scope query: ai-evaluation |
| H2-145 | FALSE POSITIVE | neg | best podcasts about history | mmlu | 70 | yes | — | confident answer for out-of-scope query: mmlu |
| H2-146 | FALSE POSITIVE | neg | renew passport appointment | authentication-vs-authorization | 56 | yes | — | confident answer for out-of-scope query: authentication-vs-authorization |
