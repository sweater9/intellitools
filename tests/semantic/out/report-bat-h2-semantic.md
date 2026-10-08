# Knowledge red-team report — bat-h2-semantic

Dataset: `tests/redteam/frozen-holdout2.json` sha256 `283ac7b8ba5877f24e5a690db71f1751de8c30a98c5f6215a4c6e7b47d620119`

Total 146 · PASS 78 · WEAK 34 · MISS 18 · FALSE POSITIVE 16
Pass rate 53.4% · False-positive rate 11.0%
Retrieval on page-kind queries (111): top-1 66.7% · top-3 77.5% · top-5 83.8%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 9 | 2 | 0 | 0 | 7 | 22.2% |
| neg | 26 | 25 | 0 | 0 | 1 | 96.2% |
| page | 111 | 51 | 34 | 18 | 8 | 45.9% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 25 | 24 | 0 | 0 | 1 | 96.0% |
| architecture | 4 | 2 | 1 | 1 | 0 | 50.0% |
| beginner | 14 | 9 | 1 | 3 | 1 | 64.3% |
| comparison | 1 | 1 | 0 | 0 | 0 | 100.0% |
| concept | 45 | 21 | 15 | 6 | 3 | 46.7% |
| conversational | 2 | 0 | 2 | 0 | 0 | 0.0% |
| coverage-probe | 9 | 2 | 0 | 0 | 7 | 22.2% |
| expert | 4 | 2 | 1 | 0 | 1 | 50.0% |
| implementation | 18 | 11 | 4 | 2 | 1 | 61.1% |
| integration | 3 | 0 | 1 | 2 | 0 | 0.0% |
| security | 10 | 2 | 4 | 3 | 1 | 20.0% |
| troubleshooting | 4 | 2 | 1 | 1 | 0 | 50.0% |
| what-to-use | 7 | 2 | 4 | 0 | 1 | 28.6% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 1 | 0 | 1 | 0 | 0 | 0.0% |
| agent | 12 | 1 | 4 | 6 | 1 | 8.3% |
| ai | 1 | 1 | 0 | 0 | 0 | 100.0% |
| amb | 20 | 19 | 0 | 0 | 1 | 95.0% |
| api | 4 | 3 | 0 | 0 | 1 | 75.0% |
| cloud | 3 | 3 | 0 | 0 | 0 | 100.0% |
| cv | 2 | 0 | 0 | 0 | 2 | 0.0% |
| db | 4 | 3 | 0 | 1 | 0 | 75.0% |
| dev | 3 | 2 | 0 | 0 | 1 | 66.7% |
| devops | 6 | 1 | 2 | 0 | 3 | 16.7% |
| dl | 8 | 5 | 1 | 1 | 1 | 62.5% |
| eval | 4 | 2 | 1 | 0 | 1 | 50.0% |
| gov | 4 | 1 | 1 | 0 | 2 | 25.0% |
| js | 1 | 1 | 0 | 0 | 0 | 100.0% |
| llm | 15 | 5 | 7 | 2 | 1 | 33.3% |
| local | 1 | 0 | 1 | 0 | 0 | 0.0% |
| mcp | 4 | 3 | 0 | 1 | 0 | 75.0% |
| ml | 1 | 0 | 0 | 1 | 0 | 0.0% |
| mlops | 4 | 3 | 1 | 0 | 0 | 75.0% |
| mm | 2 | 1 | 0 | 1 | 0 | 50.0% |
| ms | 5 | 5 | 0 | 0 | 0 | 100.0% |
| node | 1 | 1 | 0 | 0 | 0 | 100.0% |
| off | 5 | 5 | 0 | 0 | 0 | 100.0% |
| prompt | 3 | 1 | 2 | 0 | 0 | 33.3% |
| python | 3 | 0 | 1 | 1 | 1 | 0.0% |
| rag | 7 | 4 | 1 | 2 | 0 | 57.1% |
| react | 1 | 1 | 0 | 0 | 0 | 100.0% |
| rl | 1 | 0 | 0 | 1 | 0 | 0.0% |
| robot | 4 | 1 | 2 | 0 | 1 | 25.0% |
| runtime | 4 | 3 | 1 | 0 | 0 | 75.0% |
| safety | 3 | 0 | 2 | 1 | 0 | 0.0% |
| science | 2 | 1 | 1 | 0 | 0 | 50.0% |
| sec | 5 | 1 | 4 | 0 | 0 | 20.0% |
| speech | 1 | 0 | 1 | 0 | 0 | 0.0% |
| ts | 1 | 1 | 0 | 0 | 0 | 100.0% |

## FALSE POSITIVE
- H2-014 [page/expert] "constant memory sequence model that avoids quadratic attention" → transformers-vs-state-space-models (score 91, solid yes) — expected state-space-models; confident wrong page: transformers-vs-state-space-models
- H2-021 [page/concept] "a verifier that rates each line of a proof" → best-of-n-sampling (score 87, solid yes) — expected process-reward-model; confident wrong page: best-of-n-sampling
- H2-046 [page/what-to-use] "microsoft stack agent sdk" → openai-agents-sdk (score 84, solid yes) — expected semantic-kernel|agent-frameworks-compared; confident wrong page: openai-agents-sdk
- H2-054 [page/beginner] "python tutorial for calling models" → python (score 90, solid yes) — expected calling-ai-apis-with-python|python-for-ai; confident wrong page: python
- H2-063 [page/security] "refresh tokens and access tokens" → openid-connect (score 86, solid yes) — expected oauth|json-web-tokens; confident wrong page: openid-connect
- H2-073 [page/implementation] "dockerfile for a node app" → nodejs-for-ai (score 84, solid yes) — expected docker|nodejs; confident wrong page: nodejs-for-ai
- H2-100 [page/concept] "how do i test an agent that uses tools" → ai-agents (score 81, solid yes) — expected agent-evaluation; confident wrong page: ai-agents
- H2-107 [page/concept] "can a model be audited for fairness" → ai-governance (score 81, solid yes) — expected ai-bias-and-fairness; confident wrong page: ai-governance
- H2-113 [gap/coverage-probe] "kubernetes deployment vs statefulset" → kubernetes (score 94, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- H2-114 [gap/coverage-probe] "how do i autoscale pods" → kubernetes (score 88, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- H2-115 [gap/coverage-probe] "object detection bounding boxes and iou" → object-detection (score 91, solid yes) — expected convolutional-neural-networks; confident unrelated page: object-detection
- H2-116 [gap/coverage-probe] "image segmentation models" → object-detection (score 87, solid yes) — expected convolutional-neural-networks|vision-transformers; confident unrelated page: object-detection
- H2-117 [gap/coverage-probe] "robot operating system nodes and topics" → robot-operating-system (score 97, solid yes) — expected embodied-ai; confident unrelated page: robot-operating-system
- H2-118 [gap/coverage-probe] "gdpr right to erasure and machine learning" → gdpr-and-ai (score 88, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: gdpr-and-ai
- H2-121 [gap/coverage-probe] "jwt vs session cookies" → api-authentication (score 87, solid yes) — expected json-web-tokens|authentication-vs-authorization; confident unrelated page: api-authentication
- H2-139 [neg/ambiguous-or-off-topic] "kernel panic on my macbook" → semantic-kernel (score 92, solid yes) — expected none; confident answer for out-of-scope query: semantic-kernel

## MISS
- H2-002 [page/beginner] "how do machines learn from examples" → (weak) rag-with-python (score 46, solid no) — expected supervised-learning|what-is-ai|neural-networks; no accepted page in top 5
- H2-005 [page/concept] "how do text predictors turn a prompt into a paragraph" → (weak) common-prompting-mistakes (score 64, solid no) — expected large-language-models|sampling-and-decoding; no accepted page in top 5
- H2-009 [page/troubleshooting] "training loss goes down but validation loss goes up" → (weak) test-time-compute (score 76, solid no) — expected overfitting-and-regularization; no accepted page in top 5
- H2-011 [page/concept] "agent receives reward only at the end of an episode" → (weak) langgraph (score 50, solid no) — expected reinforcement-learning|markov-decision-processes; no accepted page in top 5
- H2-020 [page/concept] "what is the point of letting a model think longer before it replies" → (weak) chain-of-thought (score 76, solid no) — expected test-time-compute|reasoning-models; no accepted page in top 5
- H2-030 [page/implementation] "my pdf is too long for the model what do i do" → (weak) python-data-for-ai (score 52, solid no) — expected chunking|rag|context-windows; no accepted page in top 5
- H2-032 [page/implementation] "build a knowledge base chatbot over help center articles" → (weak) agent-protocol-landscape (score 54, solid no) — expected rag|chunking|embeddings; no accepted page in top 5
- H2-037 [page/integration] "can my bot book meetings in outlook" → (weak) teams-development (score 61, solid no) — expected connecting-agents-to-apps|microsoft-graph|oauth-for-ai-agents; no accepted page in top 5
- H2-039 [page/integration] "give an agent access to our crm" → (weak) authentication-vs-authorization (score 69, solid no) — expected connecting-agents-to-apps|agent-tools|integration-permissions; no accepted page in top 5
- H2-040 [page/security] "how do i prevent the assistant from sending emails without asking" → (weak) rag (score 67, solid no) — expected integration-permissions|ai-guardrails|agent-tools; no accepted page in top 5
- H2-041 [page/security] "hidden instructions inside a pdf the agent reads" → (weak) rag-with-python (score 62, solid no) — expected prompt-injection; no accepted page in top 5
- H2-042 [page/architecture] "how does an assistant remember my preferences between sessions" → (weak) ai-agent-vs-chatbot (score 61, solid no) — expected agent-memory; no accepted page in top 5
- H2-045 [page/concept] "an llm that calls a calculator or search engine" → (weak) llm-cost-optimization (score 53, solid no) — expected function-calling|agent-tools; no accepted page in top 5
- H2-052 [page/security] "what can go wrong with third party tool servers" → (weak) mcp-servers-and-clients (score 75, solid no) — expected mcp-security; no accepted page in top 5
- H2-056 [page/beginner] "typical jobs where python is the right choice" → (weak) go-language (score 69, solid no) — expected python; no accepted page in top 5
- H2-065 [page/beginner] "what is a primary key and a foreign key" → (weak) api-keys (score 69, solid no) — expected sql; no accepted page in top 5
- H2-086 [page/concept] "reading text inside photos" → (weak) databases-for-ai-apps (score 61, solid no) — expected document-understanding-ai|vision-language-models; no accepted page in top 5
- H2-108 [page/concept] "training a chatbot on thumbs up and thumbs down data" → (weak) tokens (score 63, solid no) — expected rlhf|preference-optimization; no accepted page in top 5

## WEAK
- H2-003 [page/conversational] "why does the ai sometimes just invent a source that does not exist" → (weak) rag (score 67, solid no) — expected ai-hallucinations|how-to-reduce-hallucinations; not solid; accepted page in top 5
- H2-004 [page/conversational] "whats the limit on how long my conversation with an ai can be" → (weak) context-windows (score 63, solid no) — expected context-windows|tokens; not solid; accepted page in top 5
- H2-007 [page/concept] "why do we need activation functions" → (weak) neural-networks (score 74, solid no) — expected neural-networks; not solid; accepted page in top 5
- H2-015 [page/expert] "rotary position embeddings and context extension" → (weak) positional-encoding (score 77, solid no) — expected positional-encoding; not solid; accepted page in top 5
- H2-017 [page/what-to-use] "how do i shrink a model so it fits in 8gb of vram" → (weak) gpus-and-ai-accelerators (score 71, solid no) — expected quantization|small-language-models|gpus-and-ai-accelerators; not solid; accepted page in top 5
- H2-018 [page/what-to-use] "adapter training or updating every weight" → (weak) lora-vs-full-fine-tuning (score 71, solid no) — expected lora-vs-full-fine-tuning|lora-and-peft; not solid; accepted page in top 5
- H2-019 [page/concept] "how do labs pick model size and dataset size for a training budget" → (weak) scaling-laws (score 64, solid no) — expected scaling-laws; not solid; accepted page in top 5
- H2-023 [page/concept] "search tree of partial solutions for puzzles" → (weak) search-over-reasoning (score 76, solid no) — expected search-over-reasoning; not solid; accepted page in top 5
- H2-027 [page/implementation] "how should i structure instructions so the model follows them" → (weak) prompt-engineering (score 79, solid no) — expected prompt-engineering|system-prompts; not solid; accepted page in top 5
- H2-028 [page/implementation] "examples in the prompt to show the format i want" → (weak) prompt-engineering (score 67, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- H2-036 [page/troubleshooting] "retriever misses exact product codes" → (weak) rag-with-python (score 67, solid no) — expected hybrid-search-and-reranking|embeddings; not solid; accepted page in top 5
- H2-038 [page/integration] "agent reads my inbox and drafts replies" → (weak) authentication-vs-authorization (score 78, solid no) — expected gmail-for-ai-agents|connecting-agents-to-apps|agent-tools; not solid; accepted page in top 5
- H2-044 [page/architecture] "break a big goal into subtasks automatically" → (weak) agent-planning (score 67, solid no) — expected agent-planning; not solid; accepted page in top 5
- H2-047 [page/what-to-use] "state machine style framework with checkpoints" → (weak) langgraph (score 60, solid no) — expected langgraph; not solid; accepted page in top 5
- H2-048 [page/what-to-use] "role based crew of agents in python" → (weak) crewai (score 76, solid no) — expected crewai; not solid; accepted page in top 5
- H2-053 [page/concept] "how do independent agents discover each other" → (weak) a2a-vs-mcp (score 79, solid no) — expected a2a-protocol; not solid; accepted page in top 5
- H2-055 [page/implementation] "pandas dataframe to feed an llm" → (weak) python-data-for-ai (score 68, solid no) — expected python-data-for-ai; not solid; accepted page in top 5
- H2-072 [page/beginner] "difference between an image and a container" → (weak) containers (score 74, solid no) — expected docker|containers; not solid; accepted page in top 5
- H2-075 [page/implementation] "github actions workflow for tests" → (weak) github (score 70, solid no) — expected cicd|github; not solid; accepted page in top 5
- H2-084 [page/concept] "why is my local model so slow" → (weak) local-ai (score 59, solid no) — expected quantization|llama-cpp|gpus-and-ai-accelerators|local-ai; not solid; accepted page in top 5
- H2-085 [page/concept] "is a local model as good as a cloud one" → (weak) local-ai-vs-cloud-ai (score 71, solid no) — expected local-ai-vs-cloud-ai|local-ai; not solid; accepted page in top 5
- H2-088 [page/concept] "automatic captions for video" → (weak) video-generation-models (score 75, solid no) — expected speech-ai; not solid; accepted page in top 5
- H2-089 [page/concept] "why is robotics harder than chatbots" → (weak) ai-alignment (score 75, solid no) — expected embodied-ai; not solid; accepted page in top 5
- H2-091 [page/concept] "planning inside a learned model of the environment" → (weak) world-models (score 73, solid no) — expected world-models; not solid; accepted page in top 5
- H2-092 [page/security] "an attacker puts instructions in a document retrieved by rag" → (weak) rag-with-python (score 72, solid no) — expected prompt-injection|rag; not solid; accepted page in top 5
- H2-093 [page/security] "what do i need to redact before using a third party model" → (weak) oauth-for-ai-agents (score 67, solid no) — expected ai-privacy-and-security; not solid; accepted page in top 5
- H2-094 [page/security] "testing a model for jailbreaks before release" → (weak) mlflow (score 44, solid no) — expected red-teaming; not solid; accepted page in top 5
- H2-095 [page/security] "filtering unsafe model outputs" → (weak) ai-guardrails (score 63, solid no) — expected ai-guardrails; not solid; accepted page in top 5
- H2-097 [page/concept] "are public leaderboards gamed" → (weak) ai-bias-and-fairness (score 53, solid no) — expected benchmarks-and-leaderboards|benchmark-contamination; not solid; accepted page in top 5
- H2-103 [page/concept] "distributed training across nodes" → (weak) distributed-training (score 74, solid no) — expected distributed-training; not solid; accepted page in top 5
- H2-105 [page/concept] "what counts as a high risk ai system in europe" → (weak) eu-ai-act (score 73, solid no) — expected eu-ai-act; not solid; accepted page in top 5
- H2-109 [page/concept] "loss function over chosen and rejected completions" → (weak) dpo (score 72, solid no) — expected dpo; not solid; accepted page in top 5
- H2-110 [page/concept] "model optimises the metric instead of the goal" → (weak) process-reward-model (score 76, solid no) — expected reward-hacking; not solid; accepted page in top 5
- H2-112 [page/concept] "learning the solution operator of a pde" → (weak) physics-informed-neural-networks (score 74, solid no) — expected physics-informed-neural-networks; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H2-001 | PASS | neg | can computers really think | (weak) what-is-ai | 72 | no | — | no confident answer |
| H2-002 | MISS | page | how do machines learn from examples | (weak) rag-with-python | 46 | no | — | no accepted page in top 5 |
| H2-003 | WEAK | page | why does the ai sometimes just invent a source that does not exist | (weak) rag | 67 | no | — | not solid; accepted page in top 5 |
| H2-004 | WEAK | page | whats the limit on how long my conversation with an ai can be | (weak) context-windows | 63 | no | — | not solid; accepted page in top 5 |
| H2-005 | MISS | page | how do text predictors turn a prompt into a paragraph | (weak) common-prompting-mistakes | 64 | no | — | no accepted page in top 5 |
| H2-006 | PASS | page | why are deep networks called deep | deep-learning | 88 | yes | — |  |
| H2-007 | WEAK | page | why do we need activation functions | (weak) neural-networks | 74 | no | — | not solid; accepted page in top 5 |
| H2-008 | PASS | page | gradients vanish in my recurrent model | backpropagation-and-gradient-descent | 82 | yes | — |  |
| H2-009 | MISS | page | training loss goes down but validation loss goes up | (weak) test-time-compute | 76 | no | — | no accepted page in top 5 |
| H2-010 | PASS | page | fine tune a pretrained resnet on 500 images | transfer-learning | 85 | yes | — |  |
| H2-011 | MISS | page | agent receives reward only at the end of an episode | (weak) langgraph | 50 | no | — | no accepted page in top 5 |
| H2-012 | PASS | page | why are images split into patches for transformers | vision-transformers | 90 | yes | — |  |
| H2-013 | PASS | page | sparse routing to a few feed forward experts | mixture-of-experts | 86 | yes | — |  |
| H2-014 | FALSE POSITIVE | page | constant memory sequence model that avoids quadratic attention | transformers-vs-state-space-models | 91 | yes | — | confident wrong page: transformers-vs-state-space-models |
| H2-015 | WEAK | page | rotary position embeddings and context extension | (weak) positional-encoding | 77 | no | — | not solid; accepted page in top 5 |
| H2-016 | PASS | page | grouped query attention shrinks the kv cache | kv-cache | 88 | yes | — |  |
| H2-017 | WEAK | page | how do i shrink a model so it fits in 8gb of vram | (weak) gpus-and-ai-accelerators | 71 | no | — | not solid; accepted page in top 5 |
| H2-018 | WEAK | page | adapter training or updating every weight | (weak) lora-vs-full-fine-tuning | 71 | no | — | not solid; accepted page in top 5 |
| H2-019 | WEAK | page | how do labs pick model size and dataset size for a training budget | (weak) scaling-laws | 64 | no | — | not solid; accepted page in top 5 |
| H2-020 | MISS | page | what is the point of letting a model think longer before it replies | (weak) chain-of-thought | 76 | no | — | no accepted page in top 5 |
| H2-021 | FALSE POSITIVE | page | a verifier that rates each line of a proof | best-of-n-sampling | 87 | yes | — | confident wrong page: best-of-n-sampling |
| H2-022 | PASS | page | generate many candidates and keep the highest scoring one | best-of-n-sampling | 91 | yes | — |  |
| H2-023 | WEAK | page | search tree of partial solutions for puzzles | (weak) search-over-reasoning | 76 | no | — | not solid; accepted page in top 5 |
| H2-024 | PASS | page | force the output to follow a regular expression | grammar-guided-generation | 83 | yes | — |  |
| H2-025 | PASS | page | llama.cpp grammar file for json | gbnf-grammars | 97 | yes | — |  |
| H2-026 | PASS | page | python library for guided generation with pydantic models | outlines | 88 | yes | — |  |
| H2-027 | WEAK | page | how should i structure instructions so the model follows them | (weak) prompt-engineering | 79 | no | — | not solid; accepted page in top 5 |
| H2-028 | WEAK | page | examples in the prompt to show the format i want | (weak) prompt-engineering | 67 | no | — | not solid; accepted page in top 5 |
| H2-029 | PASS | page | answers are generic and vague | common-prompting-mistakes | 81 | yes | — |  |
| H2-030 | MISS | page | my pdf is too long for the model what do i do | (weak) python-data-for-ai | 52 | no | — | no accepted page in top 5 |
| H2-031 | PASS | page | combine keyword and vector search | hybrid-search-and-reranking | 88 | yes | — |  |
| H2-032 | MISS | page | build a knowledge base chatbot over help center articles | (weak) agent-protocol-landscape | 54 | no | — | no accepted page in top 5 |
| H2-033 | PASS | page | where do embeddings get stored and searched | vector-databases | 84 | yes | — |  |
| H2-034 | PASS | page | pinecone or pgvector or something else | choosing-a-vector-store | 83 | yes | — |  |
| H2-035 | PASS | page | relationships between entities across many documents | graph-rag | 92 | yes | — |  |
| H2-036 | WEAK | page | retriever misses exact product codes | (weak) rag-with-python | 67 | no | — | not solid; accepted page in top 5 |
| H2-037 | MISS | page | can my bot book meetings in outlook | (weak) teams-development | 61 | no | — | no accepted page in top 5 |
| H2-038 | WEAK | page | agent reads my inbox and drafts replies | (weak) authentication-vs-authorization | 78 | no | — | not solid; accepted page in top 5 |
| H2-039 | MISS | page | give an agent access to our crm | (weak) authentication-vs-authorization | 69 | no | — | no accepted page in top 5 |
| H2-040 | MISS | page | how do i prevent the assistant from sending emails without asking | (weak) rag | 67 | no | — | no accepted page in top 5 |
| H2-041 | MISS | page | hidden instructions inside a pdf the agent reads | (weak) rag-with-python | 62 | no | — | no accepted page in top 5 |
| H2-042 | MISS | page | how does an assistant remember my preferences between sessions | (weak) ai-agent-vs-chatbot | 61 | no | — | no accepted page in top 5 |
| H2-043 | PASS | page | planner and worker agents | multi-agent-systems | 92 | yes | — |  |
| H2-044 | WEAK | page | break a big goal into subtasks automatically | (weak) agent-planning | 67 | no | — | not solid; accepted page in top 5 |
| H2-045 | MISS | page | an llm that calls a calculator or search engine | (weak) llm-cost-optimization | 53 | no | — | no accepted page in top 5 |
| H2-046 | FALSE POSITIVE | page | microsoft stack agent sdk | openai-agents-sdk | 84 | yes | — | confident wrong page: openai-agents-sdk |
| H2-047 | WEAK | page | state machine style framework with checkpoints | (weak) langgraph | 60 | no | — | not solid; accepted page in top 5 |
| H2-048 | WEAK | page | role based crew of agents in python | (weak) crewai | 76 | no | — | not solid; accepted page in top 5 |
| H2-049 | PASS | page | standard way to expose tools to any ai client | mcp | 84 | yes | — |  |
| H2-050 | PASS | page | how does a client talk to an mcp server | mcp-servers-and-clients | 91 | yes | — |  |
| H2-051 | PASS | page | do i need mcp if i already have function calling | function-calling-vs-mcp | 82 | yes | — |  |
| H2-052 | MISS | page | what can go wrong with third party tool servers | (weak) mcp-servers-and-clients | 75 | no | — | no accepted page in top 5 |
| H2-053 | WEAK | page | how do independent agents discover each other | (weak) a2a-vs-mcp | 79 | no | — | not solid; accepted page in top 5 |
| H2-054 | FALSE POSITIVE | page | python tutorial for calling models | python | 90 | yes | — | confident wrong page: python |
| H2-055 | WEAK | page | pandas dataframe to feed an llm | (weak) python-data-for-ai | 68 | no | — | not solid; accepted page in top 5 |
| H2-056 | MISS | page | typical jobs where python is the right choice | (weak) go-language | 69 | no | — | no accepted page in top 5 |
| H2-057 | PASS | page | generic types for api responses | typescript-api-client-types | 91 | yes | — |  |
| H2-058 | PASS | page | fetch with streaming response body | streaming-ai-responses | 89 | yes | — |  |
| H2-059 | PASS | page | show tokens as they stream into a chat component | streaming-ai-responses | 92 | yes | — |  |
| H2-060 | PASS | page | backend for a chat app with express | express | 93 | yes | — |  |
| H2-061 | PASS | page | http methods get post put delete | rest-apis | 92 | yes | — |  |
| H2-062 | PASS | page | should the browser hold my secret key | api-keys | 91 | yes | — |  |
| H2-063 | FALSE POSITIVE | page | refresh tokens and access tokens | openid-connect | 86 | yes | — | confident wrong page: openid-connect |
| H2-064 | PASS | page | difference between id token and access token | openid-connect | 85 | yes | — |  |
| H2-065 | MISS | page | what is a primary key and a foreign key | (weak) api-keys | 69 | no | — | no accepted page in top 5 |
| H2-066 | PASS | page | what is mongodb good for | mongodb | 90 | yes | — |  |
| H2-067 | PASS | page | cache with redis or just use the database | redis | 86 | yes | — |  |
| H2-068 | PASS | page | embeddings and relational data in one database | pgvector | 94 | yes | — |  |
| H2-069 | PASS | page | what does aws lambda do | aws-fundamentals | 93 | yes | — |  |
| H2-070 | PASS | page | what are azure resource groups | azure-fundamentals | 93 | yes | — |  |
| H2-071 | PASS | page | google cloud iam basics | gcp-fundamentals | 97 | yes | — |  |
| H2-072 | WEAK | page | difference between an image and a container | (weak) containers | 74 | no | — | not solid; accepted page in top 5 |
| H2-073 | FALSE POSITIVE | page | dockerfile for a node app | nodejs-for-ai | 84 | yes | — | confident wrong page: nodejs-for-ai |
| H2-074 | PASS | page | what does git rebase do | git | 95 | yes | — |  |
| H2-075 | WEAK | page | github actions workflow for tests | (weak) github | 70 | no | — | not solid; accepted page in top 5 |
| H2-076 | PASS | page | how do lists and libraries differ in sharepoint | sharepoint | 89 | yes | — |  |
| H2-077 | PASS | page | call microsoft graph from an spfx web part | microsoft-graph | 95 | yes | — |  |
| H2-078 | PASS | page | teams app manifest and tabs | teams-development | 95 | yes | — |  |
| H2-079 | PASS | page | what are conditional access and app registrations | microsoft-entra-id | 96 | yes | — |  |
| H2-080 | PASS | page | power automate flows vs spfx | power-platform | 89 | yes | — |  |
| H2-081 | PASS | page | run llama models on apple silicon | llama-cpp | 91 | yes | — |  |
| H2-082 | PASS | page | paged kv cache serving engine | vllm | 91 | yes | — |  |
| H2-083 | PASS | page | export a model for cross platform inference | onnx-runtime | 82 | yes | — |  |
| H2-084 | WEAK | page | why is my local model so slow | (weak) local-ai | 59 | no | — | not solid; accepted page in top 5 |
| H2-085 | WEAK | page | is a local model as good as a cloud one | (weak) local-ai-vs-cloud-ai | 71 | no | — | not solid; accepted page in top 5 |
| H2-086 | MISS | page | reading text inside photos | (weak) databases-for-ai-apps | 61 | no | — | no accepted page in top 5 |
| H2-087 | PASS | page | image and text embeddings in one space | contrastive-learning-clip | 84 | yes | — |  |
| H2-088 | WEAK | page | automatic captions for video | (weak) video-generation-models | 75 | no | — | not solid; accepted page in top 5 |
| H2-089 | WEAK | page | why is robotics harder than chatbots | (weak) ai-alignment | 75 | no | — | not solid; accepted page in top 5 |
| H2-090 | PASS | page | policies conditioned on camera images and instructions | vision-language-action-models | 85 | yes | — |  |
| H2-091 | WEAK | page | planning inside a learned model of the environment | (weak) world-models | 73 | no | — | not solid; accepted page in top 5 |
| H2-092 | WEAK | page | an attacker puts instructions in a document retrieved by rag | (weak) rag-with-python | 72 | no | — | not solid; accepted page in top 5 |
| H2-093 | WEAK | page | what do i need to redact before using a third party model | (weak) oauth-for-ai-agents | 67 | no | — | not solid; accepted page in top 5 |
| H2-094 | WEAK | page | testing a model for jailbreaks before release | (weak) mlflow | 44 | no | — | not solid; accepted page in top 5 |
| H2-095 | WEAK | page | filtering unsafe model outputs | (weak) ai-guardrails | 63 | no | — | not solid; accepted page in top 5 |
| H2-096 | PASS | page | signed provenance on generated images | c2pa-content-provenance | 87 | yes | — |  |
| H2-097 | WEAK | page | are public leaderboards gamed | (weak) ai-bias-and-fairness | 53 | no | — | not solid; accepted page in top 5 |
| H2-098 | PASS | page | grading answers with a rubric and a strong model | llm-as-a-judge | 91 | yes | — |  |
| H2-099 | PASS | page | precision recall and f1 explained | evaluation-metrics-for-ai | 93 | yes | — |  |
| H2-100 | FALSE POSITIVE | page | how do i test an agent that uses tools | ai-agents | 81 | yes | — | confident wrong page: ai-agents |
| H2-101 | PASS | page | monitoring a deployed model for data drift | model-drift-and-monitoring | 88 | yes | — |  |
| H2-102 | PASS | page | how to reduce tokens and cost in production | llm-cost-optimization | 80 | yes | — |  |
| H2-103 | WEAK | page | distributed training across nodes | (weak) distributed-training | 74 | no | — | not solid; accepted page in top 5 |
| H2-104 | PASS | page | which gpu for inference | model-serving-and-inference | 92 | yes | — |  |
| H2-105 | WEAK | page | what counts as a high risk ai system in europe | (weak) eu-ai-act | 73 | no | — | not solid; accepted page in top 5 |
| H2-106 | PASS | page | checklist for responsible ai in a company | ai-governance | 89 | yes | — |  |
| H2-107 | FALSE POSITIVE | page | can a model be audited for fairness | ai-governance | 81 | yes | — | confident wrong page: ai-governance |
| H2-108 | MISS | page | training a chatbot on thumbs up and thumbs down data | (weak) tokens | 63 | no | — | no accepted page in top 5 |
| H2-109 | WEAK | page | loss function over chosen and rejected completions | (weak) dpo | 72 | no | — | not solid; accepted page in top 5 |
| H2-110 | WEAK | page | model optimises the metric instead of the goal | (weak) process-reward-model | 76 | no | — | not solid; accepted page in top 5 |
| H2-111 | PASS | page | protein folding with deep learning | alphafold | 84 | yes | — |  |
| H2-112 | WEAK | page | learning the solution operator of a pde | (weak) physics-informed-neural-networks | 74 | no | — | not solid; accepted page in top 5 |
| H2-113 | FALSE POSITIVE | gap | kubernetes deployment vs statefulset | kubernetes | 94 | yes | — | confident unrelated page: kubernetes |
| H2-114 | FALSE POSITIVE | gap | how do i autoscale pods | kubernetes | 88 | yes | — | confident unrelated page: kubernetes |
| H2-115 | FALSE POSITIVE | gap | object detection bounding boxes and iou | object-detection | 91 | yes | — | confident unrelated page: object-detection |
| H2-116 | FALSE POSITIVE | gap | image segmentation models | object-detection | 87 | yes | — | confident unrelated page: object-detection |
| H2-117 | FALSE POSITIVE | gap | robot operating system nodes and topics | robot-operating-system | 97 | yes | — | confident unrelated page: robot-operating-system |
| H2-118 | FALSE POSITIVE | gap | gdpr right to erasure and machine learning | gdpr-and-ai | 88 | yes | — | confident unrelated page: gdpr-and-ai |
| H2-119 | PASS | gap | how do i debug memory leaks in node | (weak) streaming-ai-with-nodejs | 77 | no | — | transparent non-answer |
| H2-120 | PASS | gap | css grid vs flexbox | html-and-css | 94 | yes | — | nearby page: html-and-css |
| H2-121 | FALSE POSITIVE | gap | jwt vs session cookies | api-authentication | 87 | yes | — | confident unrelated page: api-authentication |
| H2-122 | PASS | neg | transformers movie release order | (weak) recurrent-neural-networks | 55 | no | — | no confident answer |
| H2-123 | PASS | neg | python snake care guide | (weak) python | 64 | no | — | no confident answer |
| H2-124 | PASS | neg | rag and bone man tour dates | (weak) agentic-rag | 48 | no | — | no confident answer |
| H2-125 | PASS | neg | git hub of the community garden | (weak) git | 69 | no | — | no confident answer |
| H2-126 | PASS | neg | spring onion substitute | (weak) java | 51 | no | — | no confident answer |
| H2-127 | PASS | neg | django unchained cast | (weak) python-data-for-ai | 69 | no | — | no confident answer |
| H2-128 | PASS | neg | angular momentum conservation | (weak) markov-decision-processes | 41 | no | — | no confident answer |
| H2-129 | PASS | neg | kubernetes in greek means helmsman | (weak) kubernetes | 49 | no | — | no confident answer |
| H2-130 | PASS | neg | bearer of the ring lord of the rings | (weak) json-web-tokens | 43 | no | — | no confident answer |
| H2-131 | PASS | neg | scrum master salary | (weak) fine-tuning | 32 | no | — | no confident answer |
| H2-132 | PASS | neg | agent orange history | (weak) multi-agent-systems | 49 | no | — | no confident answer |
| H2-133 | PASS | neg | mongo from flash gordon | (weak) gcp-fundamentals | 55 | no | — | no confident answer |
| H2-134 | PASS | neg | redis cluster of hotels | (weak) kubernetes | 64 | no | — | no confident answer |
| H2-135 | PASS | neg | gradient colour background css for a wedding invitation | (weak) html-and-css | 47 | no | — | no confident answer |
| H2-136 | PASS | neg | train a puppy to sit | (weak) local-ai | 61 | no | — | no confident answer |
| H2-137 | PASS | neg | loss of appetite in cats | (weak) object-detection | 67 | no | — | no confident answer |
| H2-138 | PASS | neg | batch of cookies recipe | (weak) model-apis | 60 | no | — | no confident answer |
| H2-139 | FALSE POSITIVE | neg | kernel panic on my macbook | semantic-kernel | 92 | yes | — | confident answer for out-of-scope query: semantic-kernel |
| H2-140 | PASS | neg | reinforcement bars for concrete | (weak) reinforcement-learning-for-reasoning | 31 | no | — | no confident answer |
| H2-141 | PASS | neg | prompt payment discount invoice terms | (weak) gdpr-and-ai | 50 | no | — | no confident answer |
| H2-142 | PASS | neg | what should i cook tonight | (weak) ai-agents | 50 | no | — | no confident answer |
| H2-143 | PASS | neg | cheap hotels in madrid | (weak) open-weights-models | 44 | no | — | no confident answer |
| H2-144 | PASS | neg | how do i meditate | (weak) sycophancy | 60 | no | — | no confident answer |
| H2-145 | PASS | neg | best podcasts about history | (weak) best-of-n-sampling | 64 | no | — | no confident answer |
| H2-146 | PASS | neg | renew passport appointment | (weak) eu-ai-act | 42 | no | — | no confident answer |
