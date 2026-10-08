# Knowledge red-team report — h2-after-lexE

Dataset: `tests/redteam/frozen-holdout2.json` sha256 `283ac7b8ba5877f24e5a690db71f1751de8c30a98c5f6215a4c6e7b47d620119`

Total 146 · PASS 138 · WEAK 2 · MISS 0 · FALSE POSITIVE 6
Pass rate 94.5% · False-positive rate 4.1%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 9 | 8 | 0 | 0 | 1 | 88.9% |
| neg | 26 | 26 | 0 | 0 | 0 | 100.0% |
| page | 111 | 104 | 2 | 0 | 5 | 93.7% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 25 | 25 | 0 | 0 | 0 | 100.0% |
| architecture | 4 | 4 | 0 | 0 | 0 | 100.0% |
| beginner | 14 | 14 | 0 | 0 | 0 | 100.0% |
| comparison | 1 | 1 | 0 | 0 | 0 | 100.0% |
| concept | 45 | 42 | 1 | 0 | 2 | 93.3% |
| conversational | 2 | 2 | 0 | 0 | 0 | 100.0% |
| coverage-probe | 9 | 8 | 0 | 0 | 1 | 88.9% |
| expert | 4 | 4 | 0 | 0 | 0 | 100.0% |
| implementation | 18 | 16 | 0 | 0 | 2 | 88.9% |
| integration | 3 | 3 | 0 | 0 | 0 | 100.0% |
| security | 10 | 8 | 1 | 0 | 1 | 80.0% |
| troubleshooting | 4 | 4 | 0 | 0 | 0 | 100.0% |
| what-to-use | 7 | 7 | 0 | 0 | 0 | 100.0% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 1 | 1 | 0 | 0 | 0 | 100.0% |
| agent | 12 | 12 | 0 | 0 | 0 | 100.0% |
| ai | 1 | 1 | 0 | 0 | 0 | 100.0% |
| amb | 20 | 20 | 0 | 0 | 0 | 100.0% |
| api | 4 | 3 | 0 | 0 | 1 | 75.0% |
| cloud | 3 | 3 | 0 | 0 | 0 | 100.0% |
| cv | 2 | 2 | 0 | 0 | 0 | 100.0% |
| db | 4 | 4 | 0 | 0 | 0 | 100.0% |
| dev | 3 | 3 | 0 | 0 | 0 | 100.0% |
| devops | 6 | 6 | 0 | 0 | 0 | 100.0% |
| dl | 8 | 7 | 1 | 0 | 0 | 87.5% |
| eval | 4 | 4 | 0 | 0 | 0 | 100.0% |
| gov | 4 | 3 | 0 | 0 | 1 | 75.0% |
| js | 1 | 1 | 0 | 0 | 0 | 100.0% |
| llm | 15 | 14 | 0 | 0 | 1 | 93.3% |
| local | 1 | 1 | 0 | 0 | 0 | 100.0% |
| mcp | 4 | 4 | 0 | 0 | 0 | 100.0% |
| ml | 1 | 1 | 0 | 0 | 0 | 100.0% |
| mlops | 4 | 4 | 0 | 0 | 0 | 100.0% |
| mm | 2 | 2 | 0 | 0 | 0 | 100.0% |
| ms | 5 | 5 | 0 | 0 | 0 | 100.0% |
| node | 1 | 1 | 0 | 0 | 0 | 100.0% |
| off | 5 | 5 | 0 | 0 | 0 | 100.0% |
| prompt | 3 | 3 | 0 | 0 | 0 | 100.0% |
| python | 3 | 3 | 0 | 0 | 0 | 100.0% |
| rag | 7 | 6 | 0 | 0 | 1 | 85.7% |
| react | 1 | 1 | 0 | 0 | 0 | 100.0% |
| rl | 1 | 1 | 0 | 0 | 0 | 100.0% |
| robot | 4 | 4 | 0 | 0 | 0 | 100.0% |
| runtime | 4 | 4 | 0 | 0 | 0 | 100.0% |
| safety | 3 | 2 | 0 | 0 | 1 | 66.7% |
| science | 2 | 1 | 0 | 0 | 1 | 50.0% |
| sec | 5 | 4 | 1 | 0 | 0 | 80.0% |
| speech | 1 | 1 | 0 | 0 | 0 | 100.0% |
| ts | 1 | 1 | 0 | 0 | 0 | 100.0% |

## FALSE POSITIVE
- H2-025 [page/implementation] "llama.cpp grammar file for json" → llama-cpp (score 116, solid yes) — expected gbnf-grammars|constrained-decoding; confident wrong page: llama-cpp
- H2-031 [page/implementation] "combine keyword and vector search" → vector-databases (score 87, solid yes) — expected hybrid-search-and-reranking; confident wrong page: vector-databases
- H2-063 [page/security] "refresh tokens and access tokens" → tokens (score 34, solid yes) — expected oauth|json-web-tokens; confident wrong page: tokens
- H2-109 [page/concept] "loss function over chosen and rejected completions" → preference-optimization (score 58, solid yes) — expected dpo; confident wrong page: preference-optimization
- H2-111 [page/concept] "protein folding with deep learning" → deep-learning (score 100, solid yes) — expected alphafold; confident wrong page: deep-learning
- H2-118 [gap/coverage-probe] "gdpr right to erasure and machine learning" → what-is-ai (score 28, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: what-is-ai

## MISS

## WEAK
- H2-012 [page/concept] "why are images split into patches for transformers" → (weak) vision-transformers (score 28, solid no) — expected vision-transformers; not solid; accepted page in top 5
- H2-093 [page/security] "what do i need to redact before using a third party model" → ai-privacy-and-security (score 56, solid yes) — expected ai-privacy-and-security; expected tool not offered: pii-secret-redactor

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H2-001 | PASS | neg | can computers really think | (weak) chain-of-thought | 6 | no | — | no confident answer |
| H2-002 | PASS | page | how do machines learn from examples | supervised-learning | 51 | yes | — |  |
| H2-003 | PASS | page | why does the ai sometimes just invent a source that does not exist | ai-hallucinations | 73 | yes | — |  |
| H2-004 | PASS | page | whats the limit on how long my conversation with an ai can be | context-windows | 68 | yes | — |  |
| H2-005 | PASS | page | how do text predictors turn a prompt into a paragraph | large-language-models | 51 | yes | — |  |
| H2-006 | PASS | page | why are deep networks called deep | deep-learning | 79 | yes | — |  |
| H2-007 | PASS | page | why do we need activation functions | neural-networks | 54 | yes | — |  |
| H2-008 | PASS | page | gradients vanish in my recurrent model | backpropagation-and-gradient-descent | 47 | yes | — |  |
| H2-009 | PASS | page | training loss goes down but validation loss goes up | overfitting-and-regularization | 59 | yes | — |  |
| H2-010 | PASS | page | fine tune a pretrained resnet on 500 images | convolutional-neural-networks | 78 | yes | — |  |
| H2-011 | PASS | page | agent receives reward only at the end of an episode | reinforcement-learning | 60 | yes | — |  |
| H2-012 | WEAK | page | why are images split into patches for transformers | (weak) vision-transformers | 28 | no | — | not solid; accepted page in top 5 |
| H2-013 | PASS | page | sparse routing to a few feed forward experts | mixture-of-experts | 81 | yes | — |  |
| H2-014 | PASS | page | constant memory sequence model that avoids quadratic attention | state-space-models | 57 | yes | — |  |
| H2-015 | PASS | page | rotary position embeddings and context extension | positional-encoding | 92 | yes | — |  |
| H2-016 | PASS | page | grouped query attention shrinks the kv cache | kv-cache | 116 | yes | — |  |
| H2-017 | PASS | page | how do i shrink a model so it fits in 8gb of vram | gpus-and-ai-accelerators | 77 | yes | — |  |
| H2-018 | PASS | page | adapter training or updating every weight | lora-and-peft | 47 | yes | — |  |
| H2-019 | PASS | page | how do labs pick model size and dataset size for a training budget | scaling-laws | 61 | yes | — |  |
| H2-020 | PASS | page | what is the point of letting a model think longer before it replies | reasoning-models | 45 | yes | — |  |
| H2-021 | PASS | page | a verifier that rates each line of a proof | process-reward-model | 57 | yes | — |  |
| H2-022 | PASS | page | generate many candidates and keep the highest scoring one | best-of-n-sampling | 50 | yes | — |  |
| H2-023 | PASS | page | search tree of partial solutions for puzzles | search-over-reasoning | 95 | yes | — |  |
| H2-024 | PASS | page | force the output to follow a regular expression | constrained-decoding | 58 | yes | — |  |
| H2-025 | FALSE POSITIVE | page | llama.cpp grammar file for json | llama-cpp | 116 | yes | — | confident wrong page: llama-cpp |
| H2-026 | PASS | page | python library for guided generation with pydantic models | outlines | 88 | yes | — |  |
| H2-027 | PASS | page | how should i structure instructions so the model follows them | prompt-engineering | 52 | yes | — |  |
| H2-028 | PASS | page | examples in the prompt to show the format i want | prompt-engineering | 80 | yes | — |  |
| H2-029 | PASS | page | answers are generic and vague | common-prompting-mistakes | 59 | yes | — |  |
| H2-030 | PASS | page | my pdf is too long for the model what do i do | context-windows | 53 | yes | — |  |
| H2-031 | FALSE POSITIVE | page | combine keyword and vector search | vector-databases | 87 | yes | — | confident wrong page: vector-databases |
| H2-032 | PASS | page | build a knowledge base chatbot over help center articles | rag | 71 | yes | — |  |
| H2-033 | PASS | page | where do embeddings get stored and searched | vector-databases | 53 | yes | — |  |
| H2-034 | PASS | page | pinecone or pgvector or something else | pgvector | 93 | yes | — |  |
| H2-035 | PASS | page | relationships between entities across many documents | graph-rag | 52 | yes | — |  |
| H2-036 | PASS | page | retriever misses exact product codes | hybrid-search-and-reranking | 46 | yes | — |  |
| H2-037 | PASS | page | can my bot book meetings in outlook | connecting-agents-to-apps | 48 | yes | — |  |
| H2-038 | PASS | page | agent reads my inbox and drafts replies | gmail-for-ai-agents | 70 | yes | — |  |
| H2-039 | PASS | page | give an agent access to our crm | connecting-agents-to-apps | 55 | yes | — |  |
| H2-040 | PASS | page | how do i prevent the assistant from sending emails without asking | integration-permissions | 42 | yes | — |  |
| H2-041 | PASS | page | hidden instructions inside a pdf the agent reads | prompt-injection | 58 | yes | — |  |
| H2-042 | PASS | page | how does an assistant remember my preferences between sessions | agent-memory | 89 | yes | — |  |
| H2-043 | PASS | page | planner and worker agents | multi-agent-systems | 78 | yes | — |  |
| H2-044 | PASS | page | break a big goal into subtasks automatically | agent-planning | 52 | yes | — |  |
| H2-045 | PASS | page | an llm that calls a calculator or search engine | agent-tools | 45 | yes | — |  |
| H2-046 | PASS | page | microsoft stack agent sdk | semantic-kernel | 58 | yes | — |  |
| H2-047 | PASS | page | state machine style framework with checkpoints | langgraph | 63 | yes | — |  |
| H2-048 | PASS | page | role based crew of agents in python | crewai | 71 | yes | — |  |
| H2-049 | PASS | page | standard way to expose tools to any ai client | mcp | 58 | yes | — |  |
| H2-050 | PASS | page | how does a client talk to an mcp server | mcp-servers-and-clients | 99 | yes | — |  |
| H2-051 | PASS | page | do i need mcp if i already have function calling | function-calling-vs-mcp | 146 | yes | — |  |
| H2-052 | PASS | page | what can go wrong with third party tool servers | mcp-security | 58 | yes | — |  |
| H2-053 | PASS | page | how do independent agents discover each other | a2a-protocol | 69 | yes | — |  |
| H2-054 | PASS | page | python tutorial for calling models | calling-ai-apis-with-python | 110 | yes | — |  |
| H2-055 | PASS | page | pandas dataframe to feed an llm | python-data-for-ai | 52 | yes | — |  |
| H2-056 | PASS | page | typical jobs where python is the right choice | python | 47 | yes | — |  |
| H2-057 | PASS | page | generic types for api responses | typescript-api-client-types | 96 | yes | — |  |
| H2-058 | PASS | page | fetch with streaming response body | streaming-ai-responses | 72 | yes | — |  |
| H2-059 | PASS | page | show tokens as they stream into a chat component | react-ai-interfaces | 51 | yes | — |  |
| H2-060 | PASS | page | backend for a chat app with express | express | 78 | yes | — |  |
| H2-061 | PASS | page | http methods get post put delete | rest-apis | 68 | yes | — |  |
| H2-062 | PASS | page | should the browser hold my secret key | api-keys | 71 | yes | — |  |
| H2-063 | FALSE POSITIVE | page | refresh tokens and access tokens | tokens | 34 | yes | — | confident wrong page: tokens |
| H2-064 | PASS | page | difference between id token and access token | openid-connect | 64 | yes | — |  |
| H2-065 | PASS | page | what is a primary key and a foreign key | sql | 46 | yes | — |  |
| H2-066 | PASS | page | what is mongodb good for | mongodb | 53 | yes | — |  |
| H2-067 | PASS | page | cache with redis or just use the database | redis | 110 | yes | — |  |
| H2-068 | PASS | page | embeddings and relational data in one database | pgvector | 61 | yes | — |  |
| H2-069 | PASS | page | what does aws lambda do | aws-fundamentals | 77 | yes | — |  |
| H2-070 | PASS | page | what are azure resource groups | azure-fundamentals | 86 | yes | — |  |
| H2-071 | PASS | page | google cloud iam basics | gcp-fundamentals | 99 | yes | — |  |
| H2-072 | PASS | page | difference between an image and a container | docker | 62 | yes | — |  |
| H2-073 | PASS | page | dockerfile for a node app | docker | 81 | yes | — |  |
| H2-074 | PASS | page | what does git rebase do | git | 104 | yes | — |  |
| H2-075 | PASS | page | github actions workflow for tests | github | 84 | yes | — |  |
| H2-076 | PASS | page | how do lists and libraries differ in sharepoint | sharepoint | 96 | yes | — |  |
| H2-077 | PASS | page | call microsoft graph from an spfx web part | build-spfx-web-part | 155 | yes | — |  |
| H2-078 | PASS | page | teams app manifest and tabs | teams-development | 108 | yes | — |  |
| H2-079 | PASS | page | what are conditional access and app registrations | microsoft-entra-id | 74 | yes | — |  |
| H2-080 | PASS | page | power automate flows vs spfx | sharepoint-framework | 142 | yes | — |  |
| H2-081 | PASS | page | run llama models on apple silicon | llama-cpp | 78 | yes | — |  |
| H2-082 | PASS | page | paged kv cache serving engine | kv-cache | 92 | yes | — |  |
| H2-083 | PASS | page | export a model for cross platform inference | onnx-runtime | 54 | yes | — |  |
| H2-084 | PASS | page | why is my local model so slow | local-ai | 72 | yes | — |  |
| H2-085 | PASS | page | is a local model as good as a cloud one | local-ai-vs-cloud-ai | 86 | yes | — |  |
| H2-086 | PASS | page | reading text inside photos | document-understanding-ai | 46 | yes | — |  |
| H2-087 | PASS | page | image and text embeddings in one space | contrastive-learning-clip | 84 | yes | — |  |
| H2-088 | PASS | page | automatic captions for video | speech-ai | 47 | yes | — |  |
| H2-089 | PASS | page | why is robotics harder than chatbots | embodied-ai | 52 | yes | — |  |
| H2-090 | PASS | page | policies conditioned on camera images and instructions | vision-language-action-models | 56 | yes | — |  |
| H2-091 | PASS | page | planning inside a learned model of the environment | world-models | 76 | yes | — |  |
| H2-092 | PASS | page | an attacker puts instructions in a document retrieved by rag | prompt-injection | 59 | yes | — |  |
| H2-093 | WEAK | page | what do i need to redact before using a third party model | ai-privacy-and-security | 56 | yes | — | expected tool not offered: pii-secret-redactor |
| H2-094 | PASS | page | testing a model for jailbreaks before release | red-teaming | 62 | yes | — |  |
| H2-095 | PASS | page | filtering unsafe model outputs | ai-guardrails | 46 | yes | — |  |
| H2-096 | PASS | page | signed provenance on generated images | c2pa-content-provenance | 79 | yes | — |  |
| H2-097 | PASS | page | are public leaderboards gamed | benchmarks-and-leaderboards | 70 | yes | — |  |
| H2-098 | PASS | page | grading answers with a rubric and a strong model | llm-as-a-judge | 68 | yes | — |  |
| H2-099 | PASS | page | precision recall and f1 explained | evaluation-metrics-for-ai | 56 | yes | — |  |
| H2-100 | PASS | page | how do i test an agent that uses tools | agent-evaluation | 90 | yes | — |  |
| H2-101 | PASS | page | monitoring a deployed model for data drift | model-drift-and-monitoring | 127 | yes | — |  |
| H2-102 | PASS | page | how to reduce tokens and cost in production | llm-cost-optimization | 81 | yes | — |  |
| H2-103 | PASS | page | distributed training across nodes | distributed-training | 61 | yes | — |  |
| H2-104 | PASS | page | which gpu for inference | gpus-and-ai-accelerators | 68 | yes | — |  |
| H2-105 | PASS | page | what counts as a high risk ai system in europe | eu-ai-act | 118 | yes | — |  |
| H2-106 | PASS | page | checklist for responsible ai in a company | ai-governance | 70 | yes | — |  |
| H2-107 | PASS | page | can a model be audited for fairness | ai-bias-and-fairness | 70 | yes | — |  |
| H2-108 | PASS | page | training a chatbot on thumbs up and thumbs down data | rlhf | 42 | yes | — |  |
| H2-109 | FALSE POSITIVE | page | loss function over chosen and rejected completions | preference-optimization | 58 | yes | — | confident wrong page: preference-optimization |
| H2-110 | PASS | page | model optimises the metric instead of the goal | reward-hacking | 61 | yes | — |  |
| H2-111 | FALSE POSITIVE | page | protein folding with deep learning | deep-learning | 100 | yes | — | confident wrong page: deep-learning |
| H2-112 | PASS | page | learning the solution operator of a pde | physics-informed-neural-networks | 60 | yes | — |  |
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
| H2-124 | PASS | neg | rag and bone man tour dates | (weak) rag | 50 | no | — | no confident answer |
| H2-125 | PASS | neg | git hub of the community garden | (weak) git | 54 | no | — | no confident answer |
| H2-126 | PASS | neg | spring onion substitute | (weak) java | 4 | no | — | no confident answer |
| H2-127 | PASS | neg | django unchained cast | (weak) none | 0 | no | — | no confident answer |
| H2-128 | PASS | neg | angular momentum conservation | (weak) none | 0 | no | — | no confident answer |
| H2-129 | PASS | neg | kubernetes in greek means helmsman | (weak) unsupervised-learning | 4 | no | — | no confident answer |
| H2-130 | PASS | neg | bearer of the ring lord of the rings | (weak) api-authentication | 6 | no | — | no confident answer |
| H2-131 | PASS | neg | scrum master salary | (weak) none | 0 | no | — | no confident answer |
| H2-132 | PASS | neg | agent orange history | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| H2-133 | PASS | neg | mongo from flash gordon | (weak) mongodb | 17 | no | — | no confident answer |
| H2-134 | PASS | neg | redis cluster of hotels | (weak) redis | 59 | no | — | no confident answer |
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
