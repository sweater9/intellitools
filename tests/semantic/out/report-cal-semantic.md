# Knowledge red-team report — cal-semantic

Dataset: `tests/redteam/calibration-semantic.json` sha256 `981c61d4ae5eeaccf380da163bd08de840761f2999a5489bdf9e868b186b03b7`

Total 188 · PASS 89 · WEAK 6 · MISS 13 · FALSE POSITIVE 80
Pass rate 47.3% · False-positive rate 42.6%
Retrieval on page-kind queries (136): top-1 43.4% · top-3 62.5% · top-5 67.6%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 12 | 8 | 0 | 0 | 4 | 66.7% |
| neg | 40 | 26 | 0 | 0 | 14 | 65.0% |
| page | 136 | 55 | 6 | 13 | 62 | 40.4% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 40 | 26 | 0 | 0 | 14 | 65.0% |
| gap | 12 | 8 | 0 | 0 | 4 | 66.7% |
| paraphrase | 136 | 55 | 6 | 13 | 62 | 40.4% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| cal | 188 | 89 | 6 | 13 | 80 | 47.3% |

## FALSE POSITIVE
- CAL-002 [page/paraphrase] "software that writes new text and images on its own" → multimodal-ai (score 66, solid yes) — expected generative-ai; confident wrong page: multimodal-ai
- CAL-003 [page/paraphrase] "chatbots like the ones everyone talks about, how are they built" → ai-agent-vs-chatbot (score 75, solid yes) — expected large-language-models; confident wrong page: ai-agent-vs-chatbot
- CAL-004 [page/paraphrase] "why do language models chop words into pieces" → rag-with-python (score 64, solid yes) — expected tokens; confident wrong page: rag-with-python
- CAL-005 [page/paraphrase] "how much text can a model remember in one conversation" → agent-memory (score 74, solid yes) — expected context-windows; confident wrong page: agent-memory
- CAL-006 [page/paraphrase] "the architecture behind modern chat models that looks at all words at once" → vision-language-models (score 57, solid yes) — expected transformers; confident wrong page: vision-language-models
- CAL-007 [page/paraphrase] "models that understand pictures as well as words" → vision-language-models (score 71, solid yes) — expected multimodal-ai; confident wrong page: vision-language-models
- CAL-010 [page/paraphrase] "my assistant keeps making up facts, why" → common-prompting-mistakes (score 77, solid yes) — expected ai-hallucinations; confident wrong page: common-prompting-mistakes
- CAL-011 [page/paraphrase] "ways to stop a chatbot inventing sources" → large-language-models (score 59, solid yes) — expected how-to-reduce-hallucinations; confident wrong page: large-language-models
- CAL-012 [page/paraphrase] "turning sentences into lists of numbers so similar ones cluster" → chunking (score 68, solid yes) — expected embeddings; confident wrong page: chunking
- CAL-014 [page/paraphrase] "how should i split long documents before indexing them" → agent-memory (score 66, solid yes) — expected chunking; confident wrong page: agent-memory
- CAL-015 [page/paraphrase] "letting a model look things up in my own documents before answering" → common-prompting-mistakes (score 77, solid yes) — expected rag; confident wrong page: common-prompting-mistakes
- CAL-016 [page/paraphrase] "teaching an existing model my company's style with more training" → rag-vs-fine-tuning (score 65, solid yes) — expected fine-tuning; confident wrong page: rag-vs-fine-tuning
- CAL-018 [page/paraphrase] "is it safe to give a chatbot confidential company information" → gdpr-and-ai (score 63, solid yes) — expected ai-privacy-and-security; confident wrong page: gdpr-and-ai
- CAL-019 [page/paraphrase] "a malicious web page tells my assistant to ignore its rules" → rag (score 70, solid yes) — expected prompt-injection; confident wrong page: rag
- CAL-023 [page/paraphrase] "how does an assistant remember things between sessions" → ai-agent-vs-chatbot (score 74, solid yes) — expected agent-memory; confident wrong page: ai-agent-vs-chatbot
- CAL-024 [page/paraphrase] "several specialised bots cooperating on a job" → a2a-protocol (score 61, solid yes) — expected multi-agent-systems; confident wrong page: a2a-protocol
- CAL-025 [page/paraphrase] "a standard way for assistants to plug into external data sources" → openai-agents-sdk (score 62, solid yes) — expected mcp; confident wrong page: openai-agents-sdk
- CAL-028 [page/paraphrase] "using python to call a hosted language model" → python (score 73, solid yes) — expected calling-ai-apis-with-python; confident wrong page: python
- CAL-029 [page/paraphrase] "which python packages should i learn for machine learning work" → python (score 70, solid yes) — expected python-ai-libraries; confident wrong page: python
- CAL-030 [page/paraphrase] "showing the answer word by word as it is generated" → rag-vs-fine-tuning (score 63, solid yes) — expected streaming-ai-responses; confident wrong page: rag-vs-fine-tuning
- CAL-031 [page/paraphrase] "building a chat window in a javascript ui library" → react (score 78, solid yes) — expected react-ai-interfaces; confident wrong page: react
- CAL-032 [page/paraphrase] "which toolkit to pick for building an assistant with tools" → teams-development (score 57, solid yes) — expected choosing-an-agent-framework; confident wrong page: teams-development
- CAL-033 [page/paraphrase] "where should i keep records for an ai powered app" → local-ai (score 70, solid yes) — expected databases-for-ai-apps; confident wrong page: local-ai
- CAL-034 [page/paraphrase] "how does a bot get permission to read my email" → authentication-vs-authorization (score 77, solid yes) — expected oauth-for-ai-agents; confident wrong page: authentication-vs-authorization
- CAL-036 [page/paraphrase] "how do two programs talk to each other over the web" → ai-agent-vs-chatbot (score 68, solid yes) — expected what-is-an-api; confident wrong page: ai-agent-vs-chatbot
- CAL-037 [page/paraphrase] "proving who you are when calling a web service" → oauth-for-ai-agents (score 61, solid yes) — expected api-authentication; confident wrong page: oauth-for-ai-agents
- CAL-045 [page/paraphrase] "programs that load and serve open models on a personal computer" → local-ai (score 75, solid yes) — expected local-llm-runtimes; confident wrong page: local-ai
- CAL-046 [page/paraphrase] "a language that adds types on top of the web scripting language" → javascript (score 68, solid yes) — expected typescript; confident wrong page: javascript
- CAL-048 [page/paraphrase] "the markup and styling languages every web page uses" → javascript (score 64, solid yes) — expected html-and-css; confident wrong page: javascript
- CAL-052 [page/paraphrase] "storing documents as flexible json instead of tables" → what-is-json (score 64, solid yes) — expected mongodb; confident wrong page: what-is-json
- CAL-053 [page/paraphrase] "fast in memory store used for caching" → local-llm-runtimes (score 63, solid yes) — expected redis; confident wrong page: local-llm-runtimes
- CAL-055 [page/paraphrase] "packaging apps with all dependencies to run anywhere" → teams-development (score 72, solid yes) — expected docker; confident wrong page: teams-development
- CAL-056 [page/paraphrase] "automatically testing and deploying every commit" → ai-alignment (score 63, solid yes) — expected cicd; confident wrong page: ai-alignment
- CAL-057 [page/paraphrase] "secrets kept outside source code as configuration" → gcp-fundamentals (score 59, solid yes) — expected environment-variables; confident wrong page: gcp-fundamentals
- CAL-058 [page/paraphrase] "signed tokens a server hands out after login" → model-apis (score 73, solid yes) — expected json-web-tokens; confident wrong page: model-apis
- CAL-059 [page/paraphrase] "browser rule that blocks requests to other websites" → microsoft-365 (score 61, solid yes) — expected cors; confident wrong page: microsoft-365
- CAL-061 [page/paraphrase] "letting the model think longer before replying improves answers" → ai-evaluation (score 71, solid yes) — expected test-time-compute; confident wrong page: ai-evaluation
- CAL-062 [page/paraphrase] "models that show step by step thinking before the final answer" → chain-of-thought (score 84, solid yes) — expected reasoning-models; confident wrong page: chain-of-thought
- CAL-066 [page/paraphrase] "forcing output to follow a defined shape" → prompt-engineering (score 56, solid yes) — expected structured-outputs; confident wrong page: prompt-engineering
- CAL-069 [page/paraphrase] "finding patterns in data without answers provided" → common-prompting-mistakes (score 63, solid yes) — expected unsupervised-learning; confident wrong page: common-prompting-mistakes
- CAL-071 [page/paraphrase] "how weights are adjusted by following the slope of the error" → test-time-compute (score 60, solid yes) — expected backpropagation-and-gradient-descent; confident wrong page: test-time-compute
- CAL-074 [page/paraphrase] "agents that learn by trial reward and penalty" → reward-hacking (score 64, solid yes) — expected reinforcement-learning; confident wrong page: reward-hacking
- CAL-079 [page/paraphrase] "sequence models that avoid quadratic attention cost" → transformers-vs-state-space-models (score 74, solid yes) — expected state-space-models; confident wrong page: transformers-vs-state-space-models
- CAL-084 [page/paraphrase] "encoding the order of words in a sequence" → embeddings (score 61, solid yes) — expected positional-encoding; confident wrong page: embeddings
- CAL-085 [page/paraphrase] "how performance improves as models and data grow" → ai-weather-forecasting (score 63, solid yes) — expected scaling-laws; confident wrong page: ai-weather-forecasting
- CAL-097 [page/paraphrase] "security risks when assistants connect to tool servers" → mcp-servers-and-clients (score 67, solid yes) — expected mcp-security; confident wrong page: mcp-servers-and-clients
- CAL-098 [page/paraphrase] "graph based framework for stateful agent workflows" → agentic-workflows (score 66, solid yes) — expected langgraph; confident wrong page: agentic-workflows
- CAL-099 [page/paraphrase] "serving models fast with paged attention" → local-ai (score 57, solid yes) — expected vllm; confident wrong page: local-ai
- CAL-100 [page/paraphrase] "loading quantised models in plain c plus plus" → lora-and-peft (score 59, solid yes) — expected llama-cpp; confident wrong page: lora-and-peft
- CAL-102 [page/paraphrase] "a library for training deep networks popular in research" → deep-q-networks (score 60, solid yes) — expected pytorch; confident wrong page: deep-q-networks
- CAL-108 [page/paraphrase] "deciding what information goes into the model's window" → agentic-rag (score 64, solid yes) — expected context-engineering; confident wrong page: agentic-rag
- CAL-111 [page/paraphrase] "using a strong model to grade other model answers" → reasoning-vs-standard-models (score 65, solid yes) — expected llm-as-a-judge; confident wrong page: reasoning-vs-standard-models
- CAL-113 [page/paraphrase] "deploying models to production and keeping them healthy" → instruction-tuning (score 64, solid yes) — expected mlops; confident wrong page: instruction-tuning
- CAL-114 [page/paraphrase] "chips that make training fast" → deep-learning (score 57, solid yes) — expected gpus-and-ai-accelerators; confident wrong page: deep-learning
- CAL-115 [page/paraphrase] "splitting training across many machines" → kubernetes (score 67, solid yes) — expected distributed-training; confident wrong page: kubernetes
- CAL-116 [page/paraphrase] "seeing what happens inside every model call in production" → ai-agent-vs-chatbot (score 70, solid yes) — expected llm-observability; confident wrong page: ai-agent-vs-chatbot
- CAL-124 [page/paraphrase] "studying circuits inside networks to understand them" → deep-learning (score 57, solid yes) — expected mechanistic-interpretability; confident wrong page: deep-learning
- CAL-125 [page/paraphrase] "unfair outcomes for certain groups from automated decisions" → reasoning-transparency (score 64, solid yes) — expected ai-bias-and-fairness; confident wrong page: reasoning-transparency
- CAL-131 [page/paraphrase] "systems that physically interact with the world using perception and action" → imitation-learning (score 59, solid yes) — expected embodied-ai; confident wrong page: imitation-learning
- CAL-133 [page/paraphrase] "moving a policy from simulation to a physical robot" → embodied-ai (score 73, solid yes) — expected sim-to-real-transfer; confident wrong page: embodied-ai
- CAL-134 [page/paraphrase] "orchestrating containers across many machines" → docker (score 61, solid yes) — expected kubernetes; confident wrong page: docker
- CAL-135 [page/paraphrase] "finding and locating items in pictures with boxes" → rag (score 64, solid yes) — expected object-detection; confident wrong page: rag
- CAL-N04 [neg/ambiguous-or-off-topic] "react to this message politely" → react-chatbot-state (score 75, solid yes) — expected none; confident answer for out-of-scope query: react-chatbot-state
- CAL-N05 [neg/ambiguous-or-off-topic] "docker is a clothing brand right" → docker (score 59, solid yes) — expected none; confident answer for out-of-scope query: docker
- CAL-N06 [neg/ambiguous-or-off-topic] "find a real estate agent near me" → agent-protocol-landscape (score 68, solid yes) — expected none; confident answer for out-of-scope query: agent-protocol-landscape
- CAL-N07 [neg/ambiguous-or-off-topic] "buy a model train set" → gpus-and-ai-accelerators (score 57, solid yes) — expected none; confident answer for out-of-scope query: gpus-and-ai-accelerators
- CAL-N11 [neg/ambiguous-or-off-topic] "how do i fix a leaking tap" → gmail-for-ai-agents (score 57, solid yes) — expected none; confident answer for out-of-scope query: gmail-for-ai-agents
- CAL-N13 [neg/ambiguous-or-off-topic] "who won the world cup in 2010" → best-of-n-sampling (score 58, solid yes) — expected none; confident answer for out-of-scope query: best-of-n-sampling
- CAL-N15 [neg/ambiguous-or-off-topic] "go for a walk after dinner" → go-language (score 71, solid yes) — expected none; confident answer for out-of-scope query: go-language
- CAL-N17 [neg/ambiguous-or-off-topic] "rust on my bicycle chain how to remove" → rust (score 73, solid yes) — expected none; confident answer for out-of-scope query: rust
- CAL-N20 [neg/ambiguous-or-off-topic] "agent 007 movie order" → autogen (score 55, solid yes) — expected none; confident answer for out-of-scope query: autogen
- CAL-N23 [neg/ambiguous-or-off-topic] "token of appreciation gift ideas" → tokens (score 60, solid yes) — expected none; confident answer for out-of-scope query: tokens
- CAL-N24 [neg/ambiguous-or-off-topic] "embedding a screw in drywall" → positional-encoding (score 56, solid yes) — expected none; confident answer for out-of-scope query: positional-encoding
- CAL-N27 [neg/ambiguous-or-off-topic] "what is the weather tomorrow" → ai-weather-forecasting (score 65, solid yes) — expected none; confident answer for out-of-scope query: ai-weather-forecasting
- CAL-N31 [neg/ambiguous-or-off-topic] "tips for a job interview" → agent-memory (score 62, solid yes) — expected none; confident answer for out-of-scope query: agent-memory
- CAL-N37 [neg/ambiguous-or-off-topic] "oracle of delphi history" → microsoft-365 (score 60, solid yes) — expected none; confident answer for out-of-scope query: microsoft-365
- CAL-G02 [gap/gap] "what is a service mesh like istio" → hugging-face (score 61, solid yes) — expected none; confident unrelated page: hugging-face
- CAL-G05 [gap/gap] "best linux distro for servers" → mcp-vs-api (score 72, solid yes) — expected none; confident unrelated page: mcp-vs-api
- CAL-G07 [gap/gap] "differential privacy for datasets" → constrained-decoding (score 55, solid yes) — expected none; confident unrelated page: constrained-decoding
- CAL-G11 [gap/gap] "angular vs vue for a new project" → transformers-vs-state-space-models (score 60, solid yes) — expected none; confident unrelated page: transformers-vs-state-space-models

## MISS
- CAL-001 [page/paraphrase] "a program that learns from examples instead of explicit rules" → (weak) supervised-learning (score 54, solid no) — expected what-is-ai; no accepted page in top 5
- CAL-009 [page/paraphrase] "the hidden instructions that set the assistant's personality" → (weak) self-supervised-learning (score 46, solid no) — expected system-prompts; no accepted page in top 5
- CAL-021 [page/paraphrase] "how can a model press buttons in other programs" → (weak) ollama (score 49, solid no) — expected agent-tools; no accepted page in top 5
- CAL-026 [page/paraphrase] "which is better for adding knowledge, retrieval or extra training" → (weak) gpus-and-ai-accelerators (score 51, solid no) — expected rag-vs-fine-tuning; no accepted page in top 5
- CAL-035 [page/paraphrase] "a format for data made of curly braces and key value pairs" → (weak) lora-and-peft (score 49, solid no) — expected what-is-json; no accepted page in top 5
- CAL-054 [page/paraphrase] "versioning code and collaborating with branches" → (weak) autogen (score 48, solid no) — expected git; no accepted page in top 5
- CAL-067 [page/paraphrase] "a description of allowed fields and types for data" → (weak) reasoning-transparency (score 50, solid no) — expected json-schema; no accepted page in top 5
- CAL-068 [page/paraphrase] "learning from labelled input output pairs" → (weak) encoder-decoder-vs-decoder-only (score 54, solid no) — expected supervised-learning; no accepted page in top 5
- CAL-081 [page/paraphrase] "two networks competing, one forging and one detecting" → (weak) reinforcement-learning (score 46, solid no) — expected generative-adversarial-networks; no accepted page in top 5
- CAL-092 [page/paraphrase] "models whose parameters you can download" → (weak) local-ai (score 50, solid no) — expected open-weights-models; no accepted page in top 5
- CAL-103 [page/paraphrase] "alternate between thinking and acting with observations" → (weak) agent-planning (score 53, solid no) — expected react-agent-pattern; no accepted page in top 5
- CAL-119 [page/paraphrase] "making a model behave in line with human values" → (weak) rlhf (score 53, solid no) — expected ai-alignment; no accepted page in top 5
- CAL-121 [page/paraphrase] "model flatters the user instead of being accurate" → (weak) structured-outputs (score 44, solid no) — expected sycophancy; no accepted page in top 5

## WEAK
- CAL-027 [page/paraphrase] "difference between a simple chat bot and an autonomous one" → (weak) ai-agent-vs-chatbot (score 43, solid no) — expected ai-agent-vs-chatbot; not solid; accepted page in top 5
- CAL-047 [page/paraphrase] "systems language focused on memory safety without garbage collection" → (weak) rust (score 54, solid no) — expected rust; not solid; accepted page in top 5
- CAL-065 [page/paraphrase] "controlling randomness when a model picks the next word" → (weak) sampling-and-decoding (score 52, solid no) — expected sampling-and-decoding; not solid; accepted page in top 5
- CAL-073 [page/paraphrase] "reusing a pretrained network for a new task" → (weak) kubernetes (score 53, solid no) — expected transfer-learning; not solid; accepted page in top 5
- CAL-109 [page/paraphrase] "public scoreboards comparing models" → (weak) benchmarks-and-leaderboards (score 46, solid no) — expected benchmarks-and-leaderboards; not solid; accepted page in top 5
- CAL-122 [page/paraphrase] "attacking a system on purpose to find its weaknesses" → (weak) reward-hacking (score 52, solid no) — expected red-teaming; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAL-001 | MISS | page | a program that learns from examples instead of explicit rules | (weak) supervised-learning | 54 | no | — | no accepted page in top 5 |
| CAL-002 | FALSE POSITIVE | page | software that writes new text and images on its own | multimodal-ai | 66 | yes | — | confident wrong page: multimodal-ai |
| CAL-003 | FALSE POSITIVE | page | chatbots like the ones everyone talks about, how are they built | ai-agent-vs-chatbot | 75 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| CAL-004 | FALSE POSITIVE | page | why do language models chop words into pieces | rag-with-python | 64 | yes | — | confident wrong page: rag-with-python |
| CAL-005 | FALSE POSITIVE | page | how much text can a model remember in one conversation | agent-memory | 74 | yes | — | confident wrong page: agent-memory |
| CAL-006 | FALSE POSITIVE | page | the architecture behind modern chat models that looks at all words at once | vision-language-models | 57 | yes | — | confident wrong page: vision-language-models |
| CAL-007 | FALSE POSITIVE | page | models that understand pictures as well as words | vision-language-models | 71 | yes | — | confident wrong page: vision-language-models |
| CAL-008 | PASS | page | how to phrase instructions so the model does what i want | prompt-engineering | 72 | yes | — |  |
| CAL-009 | MISS | page | the hidden instructions that set the assistant's personality | (weak) self-supervised-learning | 46 | no | — | no accepted page in top 5 |
| CAL-010 | FALSE POSITIVE | page | my assistant keeps making up facts, why | common-prompting-mistakes | 77 | yes | — | confident wrong page: common-prompting-mistakes |
| CAL-011 | FALSE POSITIVE | page | ways to stop a chatbot inventing sources | large-language-models | 59 | yes | — | confident wrong page: large-language-models |
| CAL-012 | FALSE POSITIVE | page | turning sentences into lists of numbers so similar ones cluster | chunking | 68 | yes | — | confident wrong page: chunking |
| CAL-013 | PASS | page | database designed to find nearest neighbours of numeric representations | vector-databases | 70 | yes | — |  |
| CAL-014 | FALSE POSITIVE | page | how should i split long documents before indexing them | agent-memory | 66 | yes | — | confident wrong page: agent-memory |
| CAL-015 | FALSE POSITIVE | page | letting a model look things up in my own documents before answering | common-prompting-mistakes | 77 | yes | — | confident wrong page: common-prompting-mistakes |
| CAL-016 | FALSE POSITIVE | page | teaching an existing model my company's style with more training | rag-vs-fine-tuning | 65 | yes | — | confident wrong page: rag-vs-fine-tuning |
| CAL-017 | PASS | page | run a language model on my own laptop without internet | local-ai | 69 | yes | — |  |
| CAL-018 | FALSE POSITIVE | page | is it safe to give a chatbot confidential company information | gdpr-and-ai | 63 | yes | — | confident wrong page: gdpr-and-ai |
| CAL-019 | FALSE POSITIVE | page | a malicious web page tells my assistant to ignore its rules | rag | 70 | yes | — | confident wrong page: rag |
| CAL-020 | PASS | page | a model that plans steps and uses software on its own to finish a goal | ai-agents | 67 | yes | — |  |
| CAL-021 | MISS | page | how can a model press buttons in other programs | (weak) ollama | 49 | no | — | no accepted page in top 5 |
| CAL-022 | PASS | page | getting the model to return a call to my function with arguments | function-calling | 69 | yes | — |  |
| CAL-023 | FALSE POSITIVE | page | how does an assistant remember things between sessions | ai-agent-vs-chatbot | 74 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| CAL-024 | FALSE POSITIVE | page | several specialised bots cooperating on a job | a2a-protocol | 61 | yes | — | confident wrong page: a2a-protocol |
| CAL-025 | FALSE POSITIVE | page | a standard way for assistants to plug into external data sources | openai-agents-sdk | 62 | yes | — | confident wrong page: openai-agents-sdk |
| CAL-026 | MISS | page | which is better for adding knowledge, retrieval or extra training | (weak) gpus-and-ai-accelerators | 51 | no | — | no accepted page in top 5 |
| CAL-027 | WEAK | page | difference between a simple chat bot and an autonomous one | (weak) ai-agent-vs-chatbot | 43 | no | — | not solid; accepted page in top 5 |
| CAL-028 | FALSE POSITIVE | page | using python to call a hosted language model | python | 73 | yes | — | confident wrong page: python |
| CAL-029 | FALSE POSITIVE | page | which python packages should i learn for machine learning work | python | 70 | yes | — | confident wrong page: python |
| CAL-030 | FALSE POSITIVE | page | showing the answer word by word as it is generated | rag-vs-fine-tuning | 63 | yes | — | confident wrong page: rag-vs-fine-tuning |
| CAL-031 | FALSE POSITIVE | page | building a chat window in a javascript ui library | react | 78 | yes | — | confident wrong page: react |
| CAL-032 | FALSE POSITIVE | page | which toolkit to pick for building an assistant with tools | teams-development | 57 | yes | — | confident wrong page: teams-development |
| CAL-033 | FALSE POSITIVE | page | where should i keep records for an ai powered app | local-ai | 70 | yes | — | confident wrong page: local-ai |
| CAL-034 | FALSE POSITIVE | page | how does a bot get permission to read my email | authentication-vs-authorization | 77 | yes | — | confident wrong page: authentication-vs-authorization |
| CAL-035 | MISS | page | a format for data made of curly braces and key value pairs | (weak) lora-and-peft | 49 | no | — | no accepted page in top 5 |
| CAL-036 | FALSE POSITIVE | page | how do two programs talk to each other over the web | ai-agent-vs-chatbot | 68 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| CAL-037 | FALSE POSITIVE | page | proving who you are when calling a web service | oauth-for-ai-agents | 61 | yes | — | confident wrong page: oauth-for-ai-agents |
| CAL-038 | PASS | page | microsoft's workplace intranet and document libraries | sharepoint | 80 | yes | — |  |
| CAL-039 | PASS | page | custom components for microsoft's intranet written in typescript | sharepoint-framework | 85 | yes | — |  |
| CAL-040 | PASS | page | microsoft's api for accessing mail, files and calendars of users | microsoft-graph | 89 | yes | — |  |
| CAL-041 | PASS | page | low code apps and automations from microsoft | power-platform | 72 | yes | — |  |
| CAL-042 | PASS | page | microsoft's cloud identity and sign in service | microsoft-entra-id | 83 | yes | — |  |
| CAL-043 | PASS | page | hosted open model hub and libraries for transformers | hugging-face | 73 | yes | — |  |
| CAL-044 | PASS | page | popular toolkit for chaining llm calls together | langchain | 62 | yes | — |  |
| CAL-045 | FALSE POSITIVE | page | programs that load and serve open models on a personal computer | local-ai | 75 | yes | — | confident wrong page: local-ai |
| CAL-046 | FALSE POSITIVE | page | a language that adds types on top of the web scripting language | javascript | 68 | yes | — | confident wrong page: javascript |
| CAL-047 | WEAK | page | systems language focused on memory safety without garbage collection | (weak) rust | 54 | no | — | not solid; accepted page in top 5 |
| CAL-048 | FALSE POSITIVE | page | the markup and styling languages every web page uses | javascript | 64 | yes | — | confident wrong page: javascript |
| CAL-049 | PASS | page | server side runtime that runs scripts outside the browser | nodejs | 82 | yes | — |  |
| CAL-050 | PASS | page | query language for asking relational tables questions | sql | 75 | yes | — |  |
| CAL-051 | PASS | page | relational database with a strong extension ecosystem | postgresql | 78 | yes | — |  |
| CAL-052 | FALSE POSITIVE | page | storing documents as flexible json instead of tables | what-is-json | 64 | yes | — | confident wrong page: what-is-json |
| CAL-053 | FALSE POSITIVE | page | fast in memory store used for caching | local-llm-runtimes | 63 | yes | — | confident wrong page: local-llm-runtimes |
| CAL-054 | MISS | page | versioning code and collaborating with branches | (weak) autogen | 48 | no | — | no accepted page in top 5 |
| CAL-055 | FALSE POSITIVE | page | packaging apps with all dependencies to run anywhere | teams-development | 72 | yes | — | confident wrong page: teams-development |
| CAL-056 | FALSE POSITIVE | page | automatically testing and deploying every commit | ai-alignment | 63 | yes | — | confident wrong page: ai-alignment |
| CAL-057 | FALSE POSITIVE | page | secrets kept outside source code as configuration | gcp-fundamentals | 59 | yes | — | confident wrong page: gcp-fundamentals |
| CAL-058 | FALSE POSITIVE | page | signed tokens a server hands out after login | model-apis | 73 | yes | — | confident wrong page: model-apis |
| CAL-059 | FALSE POSITIVE | page | browser rule that blocks requests to other websites | microsoft-365 | 61 | yes | — | confident wrong page: microsoft-365 |
| CAL-060 | PASS | page | a server calls my url when something happens | webhooks | 79 | yes | — |  |
| CAL-061 | FALSE POSITIVE | page | letting the model think longer before replying improves answers | ai-evaluation | 71 | yes | — | confident wrong page: ai-evaluation |
| CAL-062 | FALSE POSITIVE | page | models that show step by step thinking before the final answer | chain-of-thought | 84 | yes | — | confident wrong page: chain-of-thought |
| CAL-063 | PASS | page | asking the model to explain its steps in sequence | chain-of-thought | 72 | yes | — |  |
| CAL-064 | PASS | page | sampling many answers and picking the most common | self-consistency | 62 | yes | — |  |
| CAL-065 | WEAK | page | controlling randomness when a model picks the next word | (weak) sampling-and-decoding | 52 | no | — | not solid; accepted page in top 5 |
| CAL-066 | FALSE POSITIVE | page | forcing output to follow a defined shape | prompt-engineering | 56 | yes | — | confident wrong page: prompt-engineering |
| CAL-067 | MISS | page | a description of allowed fields and types for data | (weak) reasoning-transparency | 50 | no | — | no accepted page in top 5 |
| CAL-068 | MISS | page | learning from labelled input output pairs | (weak) encoder-decoder-vs-decoder-only | 54 | no | — | no accepted page in top 5 |
| CAL-069 | FALSE POSITIVE | page | finding patterns in data without answers provided | common-prompting-mistakes | 63 | yes | — | confident wrong page: common-prompting-mistakes |
| CAL-070 | PASS | page | layers of connected units that learn weights | neural-networks | 70 | yes | — |  |
| CAL-071 | FALSE POSITIVE | page | how weights are adjusted by following the slope of the error | test-time-compute | 60 | yes | — | confident wrong page: test-time-compute |
| CAL-072 | PASS | page | when a model memorises training data and fails on new data | overfitting-and-regularization | 57 | yes | — |  |
| CAL-073 | WEAK | page | reusing a pretrained network for a new task | (weak) kubernetes | 53 | no | — | not solid; accepted page in top 5 |
| CAL-074 | FALSE POSITIVE | page | agents that learn by trial reward and penalty | reward-hacking | 64 | yes | — | confident wrong page: reward-hacking |
| CAL-075 | PASS | page | networks designed for grids of pixels | convolutional-neural-networks | 68 | yes | — |  |
| CAL-076 | PASS | page | networks that process sequences one step at a time with a hidden state | recurrent-neural-networks | 73 | yes | — |  |
| CAL-077 | PASS | page | splitting images into patches and applying attention | vision-transformers | 66 | yes | — |  |
| CAL-078 | PASS | page | only some specialist subnetworks are activated per input | mixture-of-experts | 58 | yes | — |  |
| CAL-079 | FALSE POSITIVE | page | sequence models that avoid quadratic attention cost | transformers-vs-state-space-models | 74 | yes | — | confident wrong page: transformers-vs-state-space-models |
| CAL-080 | PASS | page | systems that generate images by gradually removing noise | diffusion-models | 61 | yes | — |  |
| CAL-081 | MISS | page | two networks competing, one forging and one detecting | (weak) reinforcement-learning | 46 | no | — | no accepted page in top 5 |
| CAL-082 | PASS | page | networks that operate on nodes and edges | graph-neural-networks | 76 | yes | — |  |
| CAL-083 | PASS | page | caching attention keys and values to speed generation | kv-cache | 65 | yes | — |  |
| CAL-084 | FALSE POSITIVE | page | encoding the order of words in a sequence | embeddings | 61 | yes | — | confident wrong page: embeddings |
| CAL-085 | FALSE POSITIVE | page | how performance improves as models and data grow | ai-weather-forecasting | 63 | yes | — | confident wrong page: ai-weather-forecasting |
| CAL-086 | PASS | page | training a base model to follow user instructions | instruction-tuning | 57 | yes | — |  |
| CAL-087 | PASS | page | cheap adaptation by training small low rank matrices | lora-and-peft | 74 | yes | — |  |
| CAL-088 | PASS | page | shrinking model weights to fewer bits to save memory | quantization | 73 | yes | — |  |
| CAL-089 | PASS | page | a small student model learns to imitate a big teacher | knowledge-distillation | 82 | yes | — |  |
| CAL-090 | PASS | page | small draft model proposes tokens a bigger model verifies | speculative-decoding | 76 | yes | — |  |
| CAL-091 | PASS | page | compact models that run on phones | small-language-models | 73 | yes | — |  |
| CAL-092 | MISS | page | models whose parameters you can download | (weak) local-ai | 50 | no | — | no accepted page in top 5 |
| CAL-093 | PASS | page | models that answer questions about pictures | vision-language-models | 65 | yes | — |  |
| CAL-094 | PASS | page | converting spoken audio to text and back | speech-ai | 59 | yes | — |  |
| CAL-095 | PASS | page | extracting information from scanned forms and pdfs | document-understanding-ai | 75 | yes | — |  |
| CAL-096 | PASS | page | agents talking to each other using a shared protocol from google | a2a-protocol | 69 | yes | — |  |
| CAL-097 | FALSE POSITIVE | page | security risks when assistants connect to tool servers | mcp-servers-and-clients | 67 | yes | — | confident wrong page: mcp-servers-and-clients |
| CAL-098 | FALSE POSITIVE | page | graph based framework for stateful agent workflows | agentic-workflows | 66 | yes | — | confident wrong page: agentic-workflows |
| CAL-099 | FALSE POSITIVE | page | serving models fast with paged attention | local-ai | 57 | yes | — | confident wrong page: local-ai |
| CAL-100 | FALSE POSITIVE | page | loading quantised models in plain c plus plus | lora-and-peft | 59 | yes | — | confident wrong page: lora-and-peft |
| CAL-101 | PASS | page | simple command line tool to download and chat with local models | ollama | 76 | yes | — |  |
| CAL-102 | FALSE POSITIVE | page | a library for training deep networks popular in research | deep-q-networks | 60 | yes | — | confident wrong page: deep-q-networks |
| CAL-103 | MISS | page | alternate between thinking and acting with observations | (weak) agent-planning | 53 | no | — | no accepted page in top 5 |
| CAL-104 | PASS | page | agents that click and type on a computer screen | computer-use-agents | 75 | yes | — |  |
| CAL-105 | PASS | page | running generated code safely in isolation | code-execution-sandboxing | 66 | yes | — |  |
| CAL-106 | PASS | page | combine keyword and meaning search then reorder results | hybrid-search-and-reranking | 64 | yes | — |  |
| CAL-107 | PASS | page | retrieval over a network of connected entities | graph-rag | 71 | yes | — |  |
| CAL-108 | FALSE POSITIVE | page | deciding what information goes into the model's window | agentic-rag | 64 | yes | — | confident wrong page: agentic-rag |
| CAL-109 | WEAK | page | public scoreboards comparing models | (weak) benchmarks-and-leaderboards | 46 | no | — | not solid; accepted page in top 5 |
| CAL-110 | PASS | page | test questions leaking into training data | benchmark-contamination | 64 | yes | — |  |
| CAL-111 | FALSE POSITIVE | page | using a strong model to grade other model answers | reasoning-vs-standard-models | 65 | yes | — | confident wrong page: reasoning-vs-standard-models |
| CAL-112 | PASS | page | measuring how good retrieval and answers are in a rag system | rag-evaluation | 67 | yes | — |  |
| CAL-113 | FALSE POSITIVE | page | deploying models to production and keeping them healthy | instruction-tuning | 64 | yes | — | confident wrong page: instruction-tuning |
| CAL-114 | FALSE POSITIVE | page | chips that make training fast | deep-learning | 57 | yes | — | confident wrong page: deep-learning |
| CAL-115 | FALSE POSITIVE | page | splitting training across many machines | kubernetes | 67 | yes | — | confident wrong page: kubernetes |
| CAL-116 | FALSE POSITIVE | page | seeing what happens inside every model call in production | ai-agent-vs-chatbot | 70 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| CAL-117 | PASS | page | input data changing so a deployed model gets worse | model-drift-and-monitoring | 61 | yes | — |  |
| CAL-118 | PASS | page | reusing repeated prompt prefixes to save money | prompt-caching | 70 | yes | — |  |
| CAL-119 | MISS | page | making a model behave in line with human values | (weak) rlhf | 53 | no | — | no accepted page in top 5 |
| CAL-120 | PASS | page | training from human comparisons of two answers | rlhf | 60 | yes | — |  |
| CAL-121 | MISS | page | model flatters the user instead of being accurate | (weak) structured-outputs | 44 | no | — | no accepted page in top 5 |
| CAL-122 | WEAK | page | attacking a system on purpose to find its weaknesses | (weak) reward-hacking | 52 | no | — | not solid; accepted page in top 5 |
| CAL-123 | PASS | page | filters that block unsafe inputs and outputs | ai-guardrails | 56 | yes | — |  |
| CAL-124 | FALSE POSITIVE | page | studying circuits inside networks to understand them | deep-learning | 57 | yes | — | confident wrong page: deep-learning |
| CAL-125 | FALSE POSITIVE | page | unfair outcomes for certain groups from automated decisions | reasoning-transparency | 64 | yes | — | confident wrong page: reasoning-transparency |
| CAL-126 | PASS | page | rules and oversight for responsible ai in organisations | ai-governance | 86 | yes | — |  |
| CAL-127 | PASS | page | european law classifying systems by risk | eu-ai-act | 74 | yes | — |  |
| CAL-128 | PASS | page | documentation describing a model's intended use and limits | model-cards | 71 | yes | — |  |
| CAL-129 | PASS | page | list of the top vulnerabilities for llm applications | owasp-llm-top-10 | 64 | yes | — |  |
| CAL-130 | PASS | page | predicting three dimensional protein shapes | alphafold | 70 | yes | — |  |
| CAL-131 | FALSE POSITIVE | page | systems that physically interact with the world using perception and action | imitation-learning | 59 | yes | — | confident wrong page: imitation-learning |
| CAL-132 | PASS | page | learning from demonstrations by an expert | imitation-learning | 81 | yes | — |  |
| CAL-133 | FALSE POSITIVE | page | moving a policy from simulation to a physical robot | embodied-ai | 73 | yes | — | confident wrong page: embodied-ai |
| CAL-134 | FALSE POSITIVE | page | orchestrating containers across many machines | docker | 61 | yes | — | confident wrong page: docker |
| CAL-135 | FALSE POSITIVE | page | finding and locating items in pictures with boxes | rag | 64 | yes | — | confident wrong page: rag |
| CAL-136 | PASS | page | european privacy regulation and automated processing | gdpr-and-ai | 77 | yes | — |  |
| CAL-N01 | PASS | neg | toy transformer robot for kids birthday | (weak) local-ai | 51 | no | — | no confident answer |
| CAL-N02 | PASS | neg | are mamba snakes dangerous | (weak) state-space-models | 50 | no | — | no confident answer |
| CAL-N03 | PASS | neg | can my python pet eat mice | (weak) python-for-ai | 54 | no | — | no confident answer |
| CAL-N04 | FALSE POSITIVE | neg | react to this message politely | react-chatbot-state | 75 | yes | — | confident answer for out-of-scope query: react-chatbot-state |
| CAL-N05 | FALSE POSITIVE | neg | docker is a clothing brand right | docker | 59 | yes | — | confident answer for out-of-scope query: docker |
| CAL-N06 | FALSE POSITIVE | neg | find a real estate agent near me | agent-protocol-landscape | 68 | yes | — | confident answer for out-of-scope query: agent-protocol-landscape |
| CAL-N07 | FALSE POSITIVE | neg | buy a model train set | gpus-and-ai-accelerators | 57 | yes | — | confident answer for out-of-scope query: gpus-and-ai-accelerators |
| CAL-N08 | PASS | neg | how to bake sourdough bread | (weak) tokens | 53 | no | — | no confident answer |
| CAL-N09 | PASS | neg | best pizza in rome | (weak) function-calling | 47 | no | — | no confident answer |
| CAL-N10 | PASS | neg | cheapest flights to lisbon | (weak) ollama | 41 | no | — | no confident answer |
| CAL-N11 | FALSE POSITIVE | neg | how do i fix a leaking tap | gmail-for-ai-agents | 57 | yes | — | confident answer for out-of-scope query: gmail-for-ai-agents |
| CAL-N12 | PASS | neg | symptoms of the flu | (weak) how-to-reduce-hallucinations | 40 | no | — | no confident answer |
| CAL-N13 | FALSE POSITIVE | neg | who won the world cup in 2010 | best-of-n-sampling | 58 | yes | — | confident answer for out-of-scope query: best-of-n-sampling |
| CAL-N14 | PASS | neg | knit a scarf for beginners | (weak) rag-with-python | 49 | no | — | no confident answer |
| CAL-N15 | FALSE POSITIVE | neg | go for a walk after dinner | go-language | 71 | yes | — | confident answer for out-of-scope query: go-language |
| CAL-N16 | PASS | neg | swift flight of a bird | (weak) red-teaming | 41 | no | — | no confident answer |
| CAL-N17 | FALSE POSITIVE | neg | rust on my bicycle chain how to remove | rust | 73 | yes | — | confident answer for out-of-scope query: rust |
| CAL-N18 | PASS | neg | java coffee beans origin | (weak) java | 52 | no | — | no confident answer |
| CAL-N19 | PASS | neg | ruby gemstone value | (weak) vector-database-vs-traditional-database | 38 | no | — | no confident answer |
| CAL-N20 | FALSE POSITIVE | neg | agent 007 movie order | autogen | 55 | yes | — | confident answer for out-of-scope query: autogen |
| CAL-N21 | PASS | neg | fashion model portfolio tips | (weak) small-language-models | 45 | no | — | no confident answer |
| CAL-N22 | PASS | neg | how to train for a marathon | (weak) distributed-training | 54 | no | — | no confident answer |
| CAL-N23 | FALSE POSITIVE | neg | token of appreciation gift ideas | tokens | 60 | yes | — | confident answer for out-of-scope query: tokens |
| CAL-N24 | FALSE POSITIVE | neg | embedding a screw in drywall | positional-encoding | 56 | yes | — | confident answer for out-of-scope query: positional-encoding |
| CAL-N25 | PASS | neg | cloud formations explained for kids | (weak) deep-learning | 51 | no | — | no confident answer |
| CAL-N26 | PASS | neg | apple pie recipe | (weak) rag-with-python | 43 | no | — | no confident answer |
| CAL-N27 | FALSE POSITIVE | neg | what is the weather tomorrow | ai-weather-forecasting | 65 | yes | — | confident answer for out-of-scope query: ai-weather-forecasting |
| CAL-N28 | PASS | neg | stock market tips for beginners | (weak) python-ai-libraries | 37 | no | — | no confident answer |
| CAL-N29 | PASS | neg | learn guitar chords fast | (weak) transfer-learning | 48 | no | — | no confident answer |
| CAL-N30 | PASS | neg | mortgage rates today | (weak) redis | 54 | no | — | no confident answer |
| CAL-N31 | FALSE POSITIVE | neg | tips for a job interview | agent-memory | 62 | yes | — | confident answer for out-of-scope query: agent-memory |
| CAL-N32 | PASS | neg | how to grow tomatoes | (weak) rust | 45 | no | — | no confident answer |
| CAL-N33 | PASS | neg | ambassador reception dress code | (weak) function-calling | 47 | no | — | no confident answer |
| CAL-N34 | PASS | neg | spark plug replacement steps | (weak) cicd | 44 | no | — | no confident answer |
| CAL-N35 | PASS | neg | bridge card game rules | (weak) encoder-decoder-vs-decoder-only | 53 | no | — | no confident answer |
| CAL-N36 | PASS | neg | sage herb cooking uses | (weak) python | 39 | no | — | no confident answer |
| CAL-N37 | FALSE POSITIVE | neg | oracle of delphi history | microsoft-365 | 60 | yes | — | confident answer for out-of-scope query: microsoft-365 |
| CAL-N38 | PASS | neg | chrome plated bumper cleaning | (weak) local-runtimes-compared | 53 | no | — | no confident answer |
| CAL-N39 | PASS | neg | spring cleaning checklist | (weak) llm-cost-optimization | 48 | no | — | no confident answer |
| CAL-N40 | PASS | neg | kernel of corn popcorn tips | (weak) semantic-kernel | 43 | no | — | no confident answer |
| CAL-G01 | PASS | gap | how do i set up terraform modules | (weak) javascript | 51 | no | — | transparent non-answer |
| CAL-G02 | FALSE POSITIVE | gap | what is a service mesh like istio | hugging-face | 61 | yes | — | confident unrelated page: hugging-face |
| CAL-G03 | PASS | gap | explain apache kafka partitions | (weak) reasoning-vs-standard-models | 32 | no | — | transparent non-answer |
| CAL-G04 | PASS | gap | write an ansible playbook | (weak) sql | 48 | no | — | transparent non-answer |
| CAL-G05 | FALSE POSITIVE | gap | best linux distro for servers | mcp-vs-api | 72 | yes | — | confident unrelated page: mcp-vs-api |
| CAL-G06 | PASS | gap | federated learning on phones | (weak) go-language | 40 | no | — | transparent non-answer |
| CAL-G07 | FALSE POSITIVE | gap | differential privacy for datasets | constrained-decoding | 55 | yes | — | confident unrelated page: constrained-decoding |
| CAL-G08 | PASS | gap | time series forecasting with prophet | (weak) ai-weather-forecasting | 46 | no | — | transparent non-answer |
| CAL-G09 | PASS | gap | how do recommender systems rank movies | (weak) cnn-vs-vision-transformer | 36 | no | — | transparent non-answer |
| CAL-G10 | PASS | gap | configuring nginx reverse proxy | (weak) ai-guardrails | 50 | no | — | transparent non-answer |
| CAL-G11 | FALSE POSITIVE | gap | angular vs vue for a new project | transformers-vs-state-space-models | 60 | yes | — | confident unrelated page: transformers-vs-state-space-models |
| CAL-G12 | PASS | gap | setting up tls certificates with letsencrypt | (weak) authentication-vs-authorization | 43 | no | — | transparent non-answer |
