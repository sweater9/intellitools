# Knowledge red-team report — tune-gated-h2

Dataset: `tests/redteam/frozen-holdout2.json` sha256 `283ac7b8ba5877f24e5a690db71f1751de8c30a98c5f6215a4c6e7b47d620119`

Total 146 · PASS 139 · WEAK 0 · MISS 0 · FALSE POSITIVE 7
Pass rate 95.2% · False-positive rate 4.8%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 145 · WEAK 0 · MISS 0 · FALSE POSITIVE 1 · pass rate 99.3% · FP rate 0.7%
Retrieval on page-kind queries (111): top-1 98.2% · top-3 100.0% · top-5 100.0%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 9 | 3 | 0 | 0 | 6 | 33.3% |
| neg | 26 | 25 | 0 | 0 | 1 | 96.2% |
| page | 111 | 111 | 0 | 0 | 0 | 100.0% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 25 | 24 | 0 | 0 | 1 | 96.0% |
| architecture | 4 | 4 | 0 | 0 | 0 | 100.0% |
| beginner | 14 | 14 | 0 | 0 | 0 | 100.0% |
| comparison | 1 | 1 | 0 | 0 | 0 | 100.0% |
| concept | 45 | 45 | 0 | 0 | 0 | 100.0% |
| conversational | 2 | 2 | 0 | 0 | 0 | 100.0% |
| coverage-probe | 9 | 3 | 0 | 0 | 6 | 33.3% |
| expert | 4 | 4 | 0 | 0 | 0 | 100.0% |
| implementation | 18 | 18 | 0 | 0 | 0 | 100.0% |
| integration | 3 | 3 | 0 | 0 | 0 | 100.0% |
| security | 10 | 10 | 0 | 0 | 0 | 100.0% |
| troubleshooting | 4 | 4 | 0 | 0 | 0 | 100.0% |
| what-to-use | 7 | 7 | 0 | 0 | 0 | 100.0% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 1 | 1 | 0 | 0 | 0 | 100.0% |
| agent | 12 | 12 | 0 | 0 | 0 | 100.0% |
| ai | 1 | 1 | 0 | 0 | 0 | 100.0% |
| amb | 20 | 19 | 0 | 0 | 1 | 95.0% |
| api | 4 | 4 | 0 | 0 | 0 | 100.0% |
| cloud | 3 | 3 | 0 | 0 | 0 | 100.0% |
| cv | 2 | 0 | 0 | 0 | 2 | 0.0% |
| db | 4 | 4 | 0 | 0 | 0 | 100.0% |
| dev | 3 | 3 | 0 | 0 | 0 | 100.0% |
| devops | 6 | 4 | 0 | 0 | 2 | 66.7% |
| dl | 8 | 8 | 0 | 0 | 0 | 100.0% |
| eval | 4 | 4 | 0 | 0 | 0 | 100.0% |
| gov | 4 | 3 | 0 | 0 | 1 | 75.0% |
| js | 1 | 1 | 0 | 0 | 0 | 100.0% |
| llm | 15 | 15 | 0 | 0 | 0 | 100.0% |
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
| rag | 7 | 7 | 0 | 0 | 0 | 100.0% |
| react | 1 | 1 | 0 | 0 | 0 | 100.0% |
| rl | 1 | 1 | 0 | 0 | 0 | 100.0% |
| robot | 4 | 3 | 0 | 0 | 1 | 75.0% |
| runtime | 4 | 4 | 0 | 0 | 0 | 100.0% |
| safety | 3 | 3 | 0 | 0 | 0 | 100.0% |
| science | 2 | 2 | 0 | 0 | 0 | 100.0% |
| sec | 5 | 5 | 0 | 0 | 0 | 100.0% |
| speech | 1 | 1 | 0 | 0 | 0 | 100.0% |
| ts | 1 | 1 | 0 | 0 | 0 | 100.0% |

## FALSE POSITIVE
- H2-113 [gap/coverage-probe] "kubernetes deployment vs statefulset" → kubernetes (score 119.49943774671823, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- H2-114 [gap/coverage-probe] "how do i autoscale pods" → kubernetes (score 125.52404107006316, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- H2-115 [gap/coverage-probe] "object detection bounding boxes and iou" → object-detection (score 132.43653455543128, solid yes) — expected convolutional-neural-networks; confident unrelated page: object-detection
- H2-116 [gap/coverage-probe] "image segmentation models" → object-detection (score 104.97271405221852, solid yes) — expected convolutional-neural-networks|vision-transformers; confident unrelated page: object-detection
- H2-117 [gap/coverage-probe] "robot operating system nodes and topics" → robot-operating-system (score 147.38716533230476, solid yes) — expected embodied-ai; confident unrelated page: robot-operating-system
- H2-118 [gap/coverage-probe] "gdpr right to erasure and machine learning" → gdpr-and-ai (score 113.70848007565678, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: gdpr-and-ai
- H2-141 [neg/ambiguous-or-off-topic] "prompt payment discount invoice terms" → prompt-caching (score 39.09530318748883, solid yes) — expected none; confident answer for out-of-scope query: prompt-caching

## MISS

## WEAK

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H2-001 | PASS | neg | can computers really think | (weak) what-is-ai | 9.959038012643045 | no | — | no confident answer |
| H2-002 | PASS | page | how do machines learn from examples | supervised-learning | 51 | yes | — |  |
| H2-003 | PASS | page | why does the ai sometimes just invent a source that does not exist | ai-hallucinations | 78.45982067339855 | yes | — |  |
| H2-004 | PASS | page | whats the limit on how long my conversation with an ai can be | context-windows | 68 | yes | — |  |
| H2-005 | PASS | page | how do text predictors turn a prompt into a paragraph | large-language-models | 51 | yes | — |  |
| H2-006 | PASS | page | why are deep networks called deep | deep-learning | 103.42219088219551 | yes | — |  |
| H2-007 | PASS | page | why do we need activation functions | neural-networks | 72.38684311900707 | yes | — |  |
| H2-008 | PASS | page | gradients vanish in my recurrent model | backpropagation-and-gradient-descent | 55.81111918986508 | yes | — |  |
| H2-009 | PASS | page | training loss goes down but validation loss goes up | overfitting-and-regularization | 64.1420822259931 | yes | — |  |
| H2-010 | PASS | page | fine tune a pretrained resnet on 500 images | convolutional-neural-networks | 78.0712790635944 | yes | — |  |
| H2-011 | PASS | page | agent receives reward only at the end of an episode | reinforcement-learning | 60 | yes | — |  |
| H2-012 | PASS | page | why are images split into patches for transformers | vision-transformers | 49.63254334366374 | yes | — |  |
| H2-013 | PASS | page | sparse routing to a few feed forward experts | mixture-of-experts | 99.26544565620314 | yes | — |  |
| H2-014 | PASS | page | constant memory sequence model that avoids quadratic attention | state-space-models | 63.865164801788325 | yes | — |  |
| H2-015 | PASS | page | rotary position embeddings and context extension | positional-encoding | 102.94885584193649 | yes | — |  |
| H2-016 | PASS | page | grouped query attention shrinks the kv cache | kv-cache | 141.5976141974458 | yes | — |  |
| H2-017 | PASS | page | how do i shrink a model so it fits in 8gb of vram | gpus-and-ai-accelerators | 88.49344381595583 | yes | — |  |
| H2-018 | PASS | page | adapter training or updating every weight | lora-and-peft | 52.35793397854198 | yes | — |  |
| H2-019 | PASS | page | how do labs pick model size and dataset size for a training budget | scaling-laws | 65.49333068526477 | yes | — |  |
| H2-020 | PASS | page | what is the point of letting a model think longer before it replies | reasoning-models | 45 | yes | — |  |
| H2-021 | PASS | page | a verifier that rates each line of a proof | process-reward-model | 64.58036680031029 | yes | — |  |
| H2-022 | PASS | page | generate many candidates and keep the highest scoring one | best-of-n-sampling | 69.8600539354934 | yes | — |  |
| H2-023 | PASS | page | search tree of partial solutions for puzzles | search-over-reasoning | 127.04463245440928 | yes | — |  |
| H2-024 | PASS | page | force the output to follow a regular expression | constrained-decoding | 58.49225869950561 | yes | — |  |
| H2-025 | PASS | page | llama.cpp grammar file for json | gbnf-grammars | 120.64867082392308 | yes | — |  |
| H2-026 | PASS | page | python library for guided generation with pydantic models | outlines | 97.62230448258337 | yes | — |  |
| H2-027 | PASS | page | how should i structure instructions so the model follows them | prompt-engineering | 60.141559330522774 | yes | — |  |
| H2-028 | PASS | page | examples in the prompt to show the format i want | prompt-engineering | 89.58283355031398 | yes | — |  |
| H2-029 | PASS | page | answers are generic and vague | common-prompting-mistakes | 77.01502149327646 | yes | — |  |
| H2-030 | PASS | page | my pdf is too long for the model what do i do | context-windows | 53 | yes | — |  |
| H2-031 | PASS | page | combine keyword and vector search | hybrid-search-and-reranking | 109.15981777106316 | yes | — |  |
| H2-032 | PASS | page | build a knowledge base chatbot over help center articles | rag | 71 | yes | — |  |
| H2-033 | PASS | page | where do embeddings get stored and searched | vector-databases | 57.9065333052333 | yes | — |  |
| H2-034 | PASS | page | pinecone or pgvector or something else | pgvector | 93.66149898018844 | yes | — |  |
| H2-035 | PASS | page | relationships between entities across many documents | graph-rag | 85.08224691629201 | yes | — |  |
| H2-036 | PASS | page | retriever misses exact product codes | hybrid-search-and-reranking | 62.18150114771721 | yes | — |  |
| H2-037 | PASS | page | can my bot book meetings in outlook | connecting-agents-to-apps | 48 | yes | — |  |
| H2-038 | PASS | page | agent reads my inbox and drafts replies | gmail-for-ai-agents | 71.76282407628771 | yes | — |  |
| H2-039 | PASS | page | give an agent access to our crm | connecting-agents-to-apps | 55 | yes | — |  |
| H2-040 | PASS | page | how do i prevent the assistant from sending emails without asking | integration-permissions | 46.0939112793155 | yes | — |  |
| H2-041 | PASS | page | hidden instructions inside a pdf the agent reads | prompt-injection | 58 | yes | — |  |
| H2-042 | PASS | page | how does an assistant remember my preferences between sessions | agent-memory | 94.31548822713444 | yes | — |  |
| H2-043 | PASS | page | planner and worker agents | multi-agent-systems | 102.78072389457537 | yes | — |  |
| H2-044 | PASS | page | break a big goal into subtasks automatically | agent-planning | 52 | yes | — |  |
| H2-045 | PASS | page | an llm that calls a calculator or search engine | agent-tools | 48.404151508440115 | yes | — |  |
| H2-046 | PASS | page | microsoft stack agent sdk | semantic-kernel | 58.73463824476976 | yes | — |  |
| H2-047 | PASS | page | state machine style framework with checkpoints | langgraph | 63.288724001649996 | yes | — |  |
| H2-048 | PASS | page | role based crew of agents in python | crewai | 106.01958037509647 | yes | — |  |
| H2-049 | PASS | page | standard way to expose tools to any ai client | mcp | 59.25435627287656 | yes | — |  |
| H2-050 | PASS | page | how does a client talk to an mcp server | mcp-servers-and-clients | 102.07842328522936 | yes | — |  |
| H2-051 | PASS | page | do i need mcp if i already have function calling | function-calling-vs-mcp | 154.81502682297568 | yes | — |  |
| H2-052 | PASS | page | what can go wrong with third party tool servers | mcp-security | 58 | yes | — |  |
| H2-053 | PASS | page | how do independent agents discover each other | a2a-protocol | 69.1435935396707 | yes | — |  |
| H2-054 | PASS | page | python tutorial for calling models | calling-ai-apis-with-python | 127.70679531922093 | yes | — |  |
| H2-055 | PASS | page | pandas dataframe to feed an llm | python-data-for-ai | 56.7132342899767 | yes | — |  |
| H2-056 | PASS | page | typical jobs where python is the right choice | python | 47.9714272034456 | yes | — |  |
| H2-057 | PASS | page | generic types for api responses | typescript-api-client-types | 107.8728055334823 | yes | — |  |
| H2-058 | PASS | page | fetch with streaming response body | streaming-ai-responses | 79.53251912189783 | yes | — |  |
| H2-059 | PASS | page | show tokens as they stream into a chat component | react-chatbot-state | 51.68852243049351 | yes | — |  |
| H2-060 | PASS | page | backend for a chat app with express | express | 78.50319754249945 | yes | — |  |
| H2-061 | PASS | page | http methods get post put delete | rest-apis | 70.5101691186026 | yes | — |  |
| H2-062 | PASS | page | should the browser hold my secret key | api-keys | 71 | yes | — |  |
| H2-063 | PASS | page | refresh tokens and access tokens | oauth | 63.533410754287345 | yes | — |  |
| H2-064 | PASS | page | difference between id token and access token | openid-connect | 101.33654103782824 | yes | — |  |
| H2-065 | PASS | page | what is a primary key and a foreign key | sql | 46 | yes | — |  |
| H2-066 | PASS | page | what is mongodb good for | mongodb | 89.22959264533756 | yes | — |  |
| H2-067 | PASS | page | cache with redis or just use the database | redis | 118.96128118574075 | yes | — |  |
| H2-068 | PASS | page | embeddings and relational data in one database | pgvector | 74.18544322629482 | yes | — |  |
| H2-069 | PASS | page | what does aws lambda do | aws-fundamentals | 101.65388753698 | yes | — |  |
| H2-070 | PASS | page | what are azure resource groups | azure-fundamentals | 109.72081831855249 | yes | — |  |
| H2-071 | PASS | page | google cloud iam basics | gcp-fundamentals | 113.10468703898052 | yes | — |  |
| H2-072 | PASS | page | difference between an image and a container | containers | 67.06274160326728 | yes | — |  |
| H2-073 | PASS | page | dockerfile for a node app | docker | 81 | yes | — |  |
| H2-074 | PASS | page | what does git rebase do | git | 134.10087514479065 | yes | — |  |
| H2-075 | PASS | page | github actions workflow for tests | github | 95.78570718210823 | yes | — |  |
| H2-076 | PASS | page | how do lists and libraries differ in sharepoint | sharepoint | 111.09180182260585 | yes | — |  |
| H2-077 | PASS | page | call microsoft graph from an spfx web part | build-spfx-web-part | 157.10092601420942 | yes | — |  |
| H2-078 | PASS | page | teams app manifest and tabs | teams-development | 116.79516611731916 | yes | — |  |
| H2-079 | PASS | page | what are conditional access and app registrations | microsoft-entra-id | 81.15298508567534 | yes | — |  |
| H2-080 | PASS | page | power automate flows vs spfx | sharepoint-framework | 142 | yes | — |  |
| H2-081 | PASS | page | run llama models on apple silicon | llama-cpp | 98.07411488563427 | yes | — |  |
| H2-082 | PASS | page | paged kv cache serving engine | kv-cache | 105.43804301616619 | yes | — |  |
| H2-083 | PASS | page | export a model for cross platform inference | onnx-runtime | 67.69423802572764 | yes | — |  |
| H2-084 | PASS | page | why is my local model so slow | local-ai | 72 | yes | — |  |
| H2-085 | PASS | page | is a local model as good as a cloud one | local-ai-vs-cloud-ai | 91.83832140978889 | yes | — |  |
| H2-086 | PASS | page | reading text inside photos | document-understanding-ai | 46 | yes | — |  |
| H2-087 | PASS | page | image and text embeddings in one space | contrastive-learning-clip | 96.0798737109292 | yes | — |  |
| H2-088 | PASS | page | automatic captions for video | speech-ai | 62.7891181088945 | yes | — |  |
| H2-089 | PASS | page | why is robotics harder than chatbots | embodied-ai | 62.57115285377849 | yes | — |  |
| H2-090 | PASS | page | policies conditioned on camera images and instructions | vision-language-action-models | 71.64229945812585 | yes | — |  |
| H2-091 | PASS | page | planning inside a learned model of the environment | world-models | 86.73341962624943 | yes | — |  |
| H2-092 | PASS | page | an attacker puts instructions in a document retrieved by rag | prompt-injection | 60.97817325316583 | yes | — |  |
| H2-093 | PASS | page | what do i need to redact before using a third party model | ai-privacy-and-security | 56 | yes | pii-secret-redactor |  |
| H2-094 | PASS | page | testing a model for jailbreaks before release | red-teaming | 66.66208393481718 | yes | — |  |
| H2-095 | PASS | page | filtering unsafe model outputs | ai-guardrails | 49.86793302992285 | yes | — |  |
| H2-096 | PASS | page | signed provenance on generated images | c2pa-content-provenance | 109.26096753431105 | yes | — |  |
| H2-097 | PASS | page | are public leaderboards gamed | benchmarks-and-leaderboards | 74.92310620593472 | yes | — |  |
| H2-098 | PASS | page | grading answers with a rubric and a strong model | llm-as-a-judge | 81.41618225960325 | yes | — |  |
| H2-099 | PASS | page | precision recall and f1 explained | evaluation-metrics-for-ai | 68.41197222168502 | yes | — |  |
| H2-100 | PASS | page | how do i test an agent that uses tools | agent-evaluation | 105.73263396945198 | yes | — |  |
| H2-101 | PASS | page | monitoring a deployed model for data drift | model-drift-and-monitoring | 145.85694197964835 | yes | — |  |
| H2-102 | PASS | page | how to reduce tokens and cost in production | llm-cost-optimization | 99.48427965671553 | yes | — |  |
| H2-103 | PASS | page | distributed training across nodes | distributed-training | 71.0745603658577 | yes | — |  |
| H2-104 | PASS | page | which gpu for inference | gpus-and-ai-accelerators | 77.73519471006304 | yes | — |  |
| H2-105 | PASS | page | what counts as a high risk ai system in europe | eu-ai-act | 127.15483175026881 | yes | — |  |
| H2-106 | PASS | page | checklist for responsible ai in a company | ai-governance | 89.8939477289166 | yes | — |  |
| H2-107 | PASS | page | can a model be audited for fairness | ai-bias-and-fairness | 83.33269587595511 | yes | — |  |
| H2-108 | PASS | page | training a chatbot on thumbs up and thumbs down data | rlhf | 42 | yes | — |  |
| H2-109 | PASS | page | loss function over chosen and rejected completions | dpo | 64.22185116857663 | yes | — |  |
| H2-110 | PASS | page | model optimises the metric instead of the goal | reward-hacking | 61 | yes | — |  |
| H2-111 | PASS | page | protein folding with deep learning | alphafold | 81.85112771902797 | yes | — |  |
| H2-112 | PASS | page | learning the solution operator of a pde | physics-informed-neural-networks | 75.9692431041158 | yes | — |  |
| H2-113 | FALSE POSITIVE | gap | kubernetes deployment vs statefulset | kubernetes | 119.49943774671823 | yes | — | confident unrelated page: kubernetes |
| H2-114 | FALSE POSITIVE | gap | how do i autoscale pods | kubernetes | 125.52404107006316 | yes | — | confident unrelated page: kubernetes |
| H2-115 | FALSE POSITIVE | gap | object detection bounding boxes and iou | object-detection | 132.43653455543128 | yes | — | confident unrelated page: object-detection |
| H2-116 | FALSE POSITIVE | gap | image segmentation models | object-detection | 104.97271405221852 | yes | — | confident unrelated page: object-detection |
| H2-117 | FALSE POSITIVE | gap | robot operating system nodes and topics | robot-operating-system | 147.38716533230476 | yes | — | confident unrelated page: robot-operating-system |
| H2-118 | FALSE POSITIVE | gap | gdpr right to erasure and machine learning | gdpr-and-ai | 113.70848007565678 | yes | — | confident unrelated page: gdpr-and-ai |
| H2-119 | PASS | gap | how do i debug memory leaks in node | (weak) agent-memory | 34 | no | — | transparent non-answer |
| H2-120 | PASS | gap | css grid vs flexbox | html-and-css | 73.46483324145564 | yes | — | nearby page: html-and-css |
| H2-121 | PASS | gap | jwt vs session cookies | json-web-tokens | 108 | yes | — | nearby page: json-web-tokens |
| H2-122 | PASS | neg | transformers movie release order | (weak) transformers-vs-state-space-models | 26.37972229386404 | no | — | no confident answer |
| H2-123 | PASS | neg | python snake care guide | (weak) python | 72.54044836120423 | no | — | no confident answer |
| H2-124 | PASS | neg | rag and bone man tour dates | (weak) agentic-rag | 51.57295486258704 | no | — | no confident answer |
| H2-125 | PASS | neg | git hub of the community garden | (weak) git | 65.68048982313489 | no | — | no confident answer |
| H2-126 | PASS | neg | spring onion substitute | (weak) java | 15.505015521762395 | no | — | no confident answer |
| H2-127 | PASS | neg | django unchained cast | (weak) python | 11.903044890497396 | no | — | no confident answer |
| H2-128 | PASS | neg | angular momentum conservation | (weak) generative-adversarial-networks | 3.963135569374685 | no | — | no confident answer |
| H2-129 | PASS | neg | kubernetes in greek means helmsman | (weak) kubernetes | 88.60555285889444 | no | — | no confident answer |
| H2-130 | PASS | neg | bearer of the ring lord of the rings | (weak) json-web-tokens | 16.289225353511767 | no | — | no confident answer |
| H2-131 | PASS | neg | scrum master salary | (weak) best-of-n-sampling | 16.080770764318615 | no | — | no confident answer |
| H2-132 | PASS | neg | agent orange history | (weak) ai-agent-vs-chatbot | 45.054784946057936 | no | — | no confident answer |
| H2-133 | PASS | neg | mongo from flash gordon | (weak) mongodb | 18.048580418638757 | no | — | no confident answer |
| H2-134 | PASS | neg | redis cluster of hotels | (weak) redis | 65.59588297730234 | no | — | no confident answer |
| H2-135 | PASS | neg | gradient colour background css for a wedding invitation | (weak) html-and-css | 35.10630401276357 | no | — | no confident answer |
| H2-136 | PASS | neg | train a puppy to sit | (weak) distributed-training | 6 | no | — | no confident answer |
| H2-137 | PASS | neg | loss of appetite in cats | (weak) backpropagation-and-gradient-descent | 10.595118758539261 | no | — | no confident answer |
| H2-138 | PASS | neg | batch of cookies recipe | (weak) rag-with-python | 6.6358538611845 | no | — | no confident answer |
| H2-139 | PASS | neg | kernel panic on my macbook | (weak) semantic-kernel | 40.795768472955736 | no | — | no confident answer |
| H2-140 | PASS | neg | reinforcement bars for concrete | (weak) reinforcement-learning | 22 | no | — | no confident answer |
| H2-141 | FALSE POSITIVE | neg | prompt payment discount invoice terms | prompt-caching | 39.09530318748883 | yes | — | confident answer for out-of-scope query: prompt-caching |
| H2-142 | PASS | neg | what should i cook tonight | (weak) rest-vs-graphql | 2.2781695396723145 | no | — | no confident answer |
| H2-143 | PASS | neg | cheap hotels in madrid | (weak) lora-and-peft | 8.235521270726561 | no | — | no confident answer |
| H2-144 | PASS | neg | how do i meditate | (weak) ai-evaluation | 8.138109088179455 | no | — | no confident answer |
| H2-145 | PASS | neg | best podcasts about history | (weak) best-of-n-sampling | 33.519044232127406 | no | — | no confident answer |
| H2-146 | PASS | neg | renew passport appointment | (weak) authentication-vs-authorization | 13.7400822084002 | no | — | no confident answer |
