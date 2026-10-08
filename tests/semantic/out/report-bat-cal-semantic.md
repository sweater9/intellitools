# Knowledge red-team report — bat-cal-semantic

Dataset: `tests/redteam/calibration-semantic.json` sha256 `981c61d4ae5eeaccf380da163bd08de840761f2999a5489bdf9e868b186b03b7`

Total 188 · PASS 89 · WEAK 55 · MISS 24 · FALSE POSITIVE 20
Pass rate 47.3% · False-positive rate 10.6%
Retrieval on page-kind queries (136): top-1 55.9% · top-3 75.0% · top-5 79.4%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 12 | 11 | 0 | 0 | 1 | 91.7% |
| neg | 40 | 37 | 0 | 0 | 3 | 92.5% |
| page | 136 | 41 | 55 | 24 | 16 | 30.1% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 40 | 37 | 0 | 0 | 3 | 92.5% |
| gap | 12 | 11 | 0 | 0 | 1 | 91.7% |
| paraphrase | 136 | 41 | 55 | 24 | 16 | 30.1% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| cal | 188 | 89 | 55 | 24 | 20 | 47.3% |

## FALSE POSITIVE
- CAL-020 [page/paraphrase] "a model that plans steps and uses software on its own to finish a goal" → ai-agent-vs-chatbot (score 85, solid yes) — expected ai-agents; confident wrong page: ai-agent-vs-chatbot
- CAL-028 [page/paraphrase] "using python to call a hosted language model" → python (score 85, solid yes) — expected calling-ai-apis-with-python; confident wrong page: python
- CAL-029 [page/paraphrase] "which python packages should i learn for machine learning work" → python-for-ai (score 83, solid yes) — expected python-ai-libraries; confident wrong page: python-for-ai
- CAL-031 [page/paraphrase] "building a chat window in a javascript ui library" → react (score 92, solid yes) — expected react-ai-interfaces; confident wrong page: react
- CAL-034 [page/paraphrase] "how does a bot get permission to read my email" → authentication-vs-authorization (score 86, solid yes) — expected oauth-for-ai-agents; confident wrong page: authentication-vs-authorization
- CAL-045 [page/paraphrase] "programs that load and serve open models on a personal computer" → local-ai (score 85, solid yes) — expected local-llm-runtimes; confident wrong page: local-ai
- CAL-046 [page/paraphrase] "a language that adds types on top of the web scripting language" → javascript (score 83, solid yes) — expected typescript; confident wrong page: javascript
- CAL-055 [page/paraphrase] "packaging apps with all dependencies to run anywhere" → teams-development (score 87, solid yes) — expected docker; confident wrong page: teams-development
- CAL-058 [page/paraphrase] "signed tokens a server hands out after login" → openid-connect (score 83, solid yes) — expected json-web-tokens; confident wrong page: openid-connect
- CAL-062 [page/paraphrase] "models that show step by step thinking before the final answer" → chain-of-thought (score 94, solid yes) — expected reasoning-models; confident wrong page: chain-of-thought
- CAL-067 [page/paraphrase] "a description of allowed fields and types for data" → json-validation (score 80, solid yes) — expected json-schema; confident wrong page: json-validation
- CAL-098 [page/paraphrase] "graph based framework for stateful agent workflows" → choosing-an-agent-framework (score 81, solid yes) — expected langgraph; confident wrong page: choosing-an-agent-framework
- CAL-120 [page/paraphrase] "training from human comparisons of two answers" → supervised-learning (score 81, solid yes) — expected rlhf; confident wrong page: supervised-learning
- CAL-126 [page/paraphrase] "rules and oversight for responsible ai in organisations" → eu-ai-act (score 92, solid yes) — expected ai-governance; confident wrong page: eu-ai-act
- CAL-133 [page/paraphrase] "moving a policy from simulation to a physical robot" → embodied-ai (score 86, solid yes) — expected sim-to-real-transfer; confident wrong page: embodied-ai
- CAL-136 [page/paraphrase] "european privacy regulation and automated processing" → eu-ai-act (score 92, solid yes) — expected gdpr-and-ai; confident wrong page: eu-ai-act
- CAL-N04 [neg/ambiguous-or-off-topic] "react to this message politely" → react-chatbot-state (score 80, solid yes) — expected none; confident answer for out-of-scope query: react-chatbot-state
- CAL-N14 [neg/ambiguous-or-off-topic] "knit a scarf for beginners" → python-for-ai (score 86, solid yes) — expected none; confident answer for out-of-scope query: python-for-ai
- CAL-N24 [neg/ambiguous-or-off-topic] "embedding a screw in drywall" → embeddings (score 85, solid yes) — expected none; confident answer for out-of-scope query: embeddings
- CAL-G08 [gap/gap] "time series forecasting with prophet" → ai-weather-forecasting (score 87, solid yes) — expected none; confident unrelated page: ai-weather-forecasting

## MISS
- CAL-001 [page/paraphrase] "a program that learns from examples instead of explicit rules" → (weak) prompt-engineering (score 52, solid no) — expected what-is-ai; no accepted page in top 5
- CAL-002 [page/paraphrase] "software that writes new text and images on its own" → (weak) multimodal-ai (score 78, solid no) — expected generative-ai; no accepted page in top 5
- CAL-003 [page/paraphrase] "chatbots like the ones everyone talks about, how are they built" → (weak) ai-agent-vs-chatbot (score 70, solid no) — expected large-language-models; no accepted page in top 5
- CAL-006 [page/paraphrase] "the architecture behind modern chat models that looks at all words at once" → (weak) python-for-ai (score 61, solid no) — expected transformers; no accepted page in top 5
- CAL-009 [page/paraphrase] "the hidden instructions that set the assistant's personality" → (weak) vision-language-models (score 61, solid no) — expected system-prompts; no accepted page in top 5
- CAL-010 [page/paraphrase] "my assistant keeps making up facts, why" → (weak) common-prompting-mistakes (score 75, solid no) — expected ai-hallucinations; no accepted page in top 5
- CAL-021 [page/paraphrase] "how can a model press buttons in other programs" → (weak) microsoft-entra-id (score 55, solid no) — expected agent-tools; no accepted page in top 5
- CAL-030 [page/paraphrase] "showing the answer word by word as it is generated" → (weak) tokens (score 72, solid no) — expected streaming-ai-responses; no accepted page in top 5
- CAL-033 [page/paraphrase] "where should i keep records for an ai powered app" → (weak) local-ai-vs-cloud-ai (score 73, solid no) — expected databases-for-ai-apps; no accepted page in top 5
- CAL-035 [page/paraphrase] "a format for data made of curly braces and key value pairs" → (weak) contrastive-learning-clip (score 51, solid no) — expected what-is-json; no accepted page in top 5
- CAL-036 [page/paraphrase] "how do two programs talk to each other over the web" → (weak) build-spfx-web-part (score 75, solid no) — expected what-is-an-api; no accepted page in top 5
- CAL-054 [page/paraphrase] "versioning code and collaborating with branches" → (weak) autogen (score 67, solid no) — expected git; no accepted page in top 5
- CAL-059 [page/paraphrase] "browser rule that blocks requests to other websites" → (weak) react-chatbot-state (score 80, solid no) — expected cors; no accepted page in top 5
- CAL-065 [page/paraphrase] "controlling randomness when a model picks the next word" → (weak) best-of-n-sampling (score 66, solid no) — expected sampling-and-decoding; no accepted page in top 5
- CAL-068 [page/paraphrase] "learning from labelled input output pairs" → (weak) dpo (score 75, solid no) — expected supervised-learning; no accepted page in top 5
- CAL-069 [page/paraphrase] "finding patterns in data without answers provided" → (weak) common-prompting-mistakes (score 74, solid no) — expected unsupervised-learning; no accepted page in top 5
- CAL-071 [page/paraphrase] "how weights are adjusted by following the slope of the error" → (weak) large-language-models (score 67, solid no) — expected backpropagation-and-gradient-descent; no accepted page in top 5
- CAL-081 [page/paraphrase] "two networks competing, one forging and one detecting" → (weak) graph-neural-networks (score 72, solid no) — expected generative-adversarial-networks; no accepted page in top 5
- CAL-100 [page/paraphrase] "loading quantised models in plain c plus plus" → (weak) ollama (score 66, solid no) — expected llama-cpp; no accepted page in top 5
- CAL-102 [page/paraphrase] "a library for training deep networks popular in research" → (weak) neural-networks (score 76, solid no) — expected pytorch; no accepted page in top 5
- CAL-113 [page/paraphrase] "deploying models to production and keeping them healthy" → (weak) overfitting-and-regularization (score 66, solid no) — expected mlops; no accepted page in top 5
- CAL-116 [page/paraphrase] "seeing what happens inside every model call in production" → (weak) ai-agent-vs-chatbot (score 73, solid no) — expected llm-observability; no accepted page in top 5
- CAL-119 [page/paraphrase] "making a model behave in line with human values" → (weak) reasoning-models (score 76, solid no) — expected ai-alignment; no accepted page in top 5
- CAL-135 [page/paraphrase] "finding and locating items in pictures with boxes" → (weak) agent-memory (score 61, solid no) — expected object-detection; no accepted page in top 5

## WEAK
- CAL-004 [page/paraphrase] "why do language models chop words into pieces" → (weak) transformers (score 75, solid no) — expected tokens; not solid; accepted page in top 5
- CAL-005 [page/paraphrase] "how much text can a model remember in one conversation" → (weak) context-windows (score 77, solid no) — expected context-windows; not solid; accepted page in top 5
- CAL-007 [page/paraphrase] "models that understand pictures as well as words" → (weak) vision-language-models (score 78, solid no) — expected multimodal-ai; not solid; accepted page in top 5
- CAL-008 [page/paraphrase] "how to phrase instructions so the model does what i want" → (weak) sycophancy (score 71, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- CAL-011 [page/paraphrase] "ways to stop a chatbot inventing sources" → (weak) how-to-reduce-hallucinations (score 69, solid no) — expected how-to-reduce-hallucinations; not solid; accepted page in top 5
- CAL-012 [page/paraphrase] "turning sentences into lists of numbers so similar ones cluster" → (weak) tokens (score 66, solid no) — expected embeddings; not solid; accepted page in top 5
- CAL-015 [page/paraphrase] "letting a model look things up in my own documents before answering" → (weak) reasoning-transparency (score 74, solid no) — expected rag; not solid; accepted page in top 5
- CAL-016 [page/paraphrase] "teaching an existing model my company's style with more training" → (weak) fine-tuning (score 62, solid no) — expected fine-tuning; not solid; accepted page in top 5
- CAL-017 [page/paraphrase] "run a language model on my own laptop without internet" → (weak) local-ai (score 79, solid no) — expected local-ai; not solid; accepted page in top 5
- CAL-018 [page/paraphrase] "is it safe to give a chatbot confidential company information" → (weak) ai-privacy-and-security (score 71, solid no) — expected ai-privacy-and-security; not solid; accepted page in top 5
- CAL-019 [page/paraphrase] "a malicious web page tells my assistant to ignore its rules" → (weak) system-prompts (score 75, solid no) — expected prompt-injection; not solid; accepted page in top 5
- CAL-022 [page/paraphrase] "getting the model to return a call to my function with arguments" → (weak) function-calling (score 73, solid no) — expected function-calling; not solid; accepted page in top 5
- CAL-023 [page/paraphrase] "how does an assistant remember things between sessions" → (weak) agent-memory (score 63, solid no) — expected agent-memory; not solid; accepted page in top 5
- CAL-024 [page/paraphrase] "several specialised bots cooperating on a job" → (weak) multi-agent-systems (score 70, solid no) — expected multi-agent-systems; not solid; accepted page in top 5
- CAL-025 [page/paraphrase] "a standard way for assistants to plug into external data sources" → (weak) mcp (score 69, solid no) — expected mcp; not solid; accepted page in top 5
- CAL-026 [page/paraphrase] "which is better for adding knowledge, retrieval or extra training" → (weak) rag-vs-fine-tuning (score 60, solid no) — expected rag-vs-fine-tuning; not solid; accepted page in top 5
- CAL-027 [page/paraphrase] "difference between a simple chat bot and an autonomous one" → (weak) ai-agent-vs-chatbot (score 64, solid no) — expected ai-agent-vs-chatbot; not solid; accepted page in top 5
- CAL-032 [page/paraphrase] "which toolkit to pick for building an assistant with tools" → (weak) teams-development (score 75, solid no) — expected choosing-an-agent-framework; not solid; accepted page in top 5
- CAL-037 [page/paraphrase] "proving who you are when calling a web service" → (weak) agent-tools (score 68, solid no) — expected api-authentication; not solid; accepted page in top 5
- CAL-044 [page/paraphrase] "popular toolkit for chaining llm calls together" → (weak) langchain (score 71, solid no) — expected langchain; not solid; accepted page in top 5
- CAL-047 [page/paraphrase] "systems language focused on memory safety without garbage collection" → (weak) rust (score 44, solid no) — expected rust; not solid; accepted page in top 5
- CAL-048 [page/paraphrase] "the markup and styling languages every web page uses" → (weak) html-and-css (score 65, solid no) — expected html-and-css; not solid; accepted page in top 5
- CAL-052 [page/paraphrase] "storing documents as flexible json instead of tables" → (weak) json-validation (score 74, solid no) — expected mongodb; not solid; accepted page in top 5
- CAL-053 [page/paraphrase] "fast in memory store used for caching" → (weak) redis (score 69, solid no) — expected redis; not solid; accepted page in top 5
- CAL-056 [page/paraphrase] "automatically testing and deploying every commit" → (weak) cicd (score 68, solid no) — expected cicd; not solid; accepted page in top 5
- CAL-057 [page/paraphrase] "secrets kept outside source code as configuration" → (weak) github (score 71, solid no) — expected environment-variables; not solid; accepted page in top 5
- CAL-061 [page/paraphrase] "letting the model think longer before replying improves answers" → (weak) chain-of-thought (score 79, solid no) — expected test-time-compute; not solid; accepted page in top 5
- CAL-064 [page/paraphrase] "sampling many answers and picking the most common" → (weak) self-consistency (score 73, solid no) — expected self-consistency; not solid; accepted page in top 5
- CAL-066 [page/paraphrase] "forcing output to follow a defined shape" → (weak) constrained-decoding (score 65, solid no) — expected structured-outputs; not solid; accepted page in top 5
- CAL-072 [page/paraphrase] "when a model memorises training data and fails on new data" → (weak) overfitting-and-regularization (score 80, solid no) — expected overfitting-and-regularization; not solid; accepted page in top 5
- CAL-073 [page/paraphrase] "reusing a pretrained network for a new task" → (weak) transfer-learning (score 71, solid no) — expected transfer-learning; not solid; accepted page in top 5
- CAL-078 [page/paraphrase] "only some specialist subnetworks are activated per input" → (weak) langgraph (score 53, solid no) — expected mixture-of-experts; not solid; accepted page in top 5
- CAL-080 [page/paraphrase] "systems that generate images by gradually removing noise" → (weak) diffusion-models (score 78, solid no) — expected diffusion-models; not solid; accepted page in top 5
- CAL-085 [page/paraphrase] "how performance improves as models and data grow" → (weak) scaling-laws (score 63, solid no) — expected scaling-laws; not solid; accepted page in top 5
- CAL-086 [page/paraphrase] "training a base model to follow user instructions" → (weak) instruction-tuning (score 67, solid no) — expected instruction-tuning; not solid; accepted page in top 5
- CAL-092 [page/paraphrase] "models whose parameters you can download" → (weak) open-weights-models (score 73, solid no) — expected open-weights-models; not solid; accepted page in top 5
- CAL-093 [page/paraphrase] "models that answer questions about pictures" → (weak) vision-language-models (score 71, solid no) — expected vision-language-models; not solid; accepted page in top 5
- CAL-094 [page/paraphrase] "converting spoken audio to text and back" → (weak) grammar-guided-generation (score 63, solid no) — expected speech-ai; not solid; accepted page in top 5
- CAL-096 [page/paraphrase] "agents talking to each other using a shared protocol from google" → (weak) autogen (score 76, solid no) — expected a2a-protocol; not solid; accepted page in top 5
- CAL-103 [page/paraphrase] "alternate between thinking and acting with observations" → (weak) thinking-budgets (score 62, solid no) — expected react-agent-pattern; not solid; accepted page in top 5
- CAL-106 [page/paraphrase] "combine keyword and meaning search then reorder results" → (weak) hybrid-search-and-reranking (score 77, solid no) — expected hybrid-search-and-reranking; not solid; accepted page in top 5
- CAL-109 [page/paraphrase] "public scoreboards comparing models" → (weak) benchmarks-and-leaderboards (score 76, solid no) — expected benchmarks-and-leaderboards; not solid; accepted page in top 5
- CAL-110 [page/paraphrase] "test questions leaking into training data" → (weak) benchmark-contamination (score 75, solid no) — expected benchmark-contamination; not solid; accepted page in top 5
- CAL-111 [page/paraphrase] "using a strong model to grade other model answers" → (weak) gsm8k-and-math-benchmarks (score 70, solid no) — expected llm-as-a-judge; not solid; accepted page in top 5
- CAL-112 [page/paraphrase] "measuring how good retrieval and answers are in a rag system" → (weak) rag-evaluation (score 78, solid no) — expected rag-evaluation; not solid; accepted page in top 5
- CAL-114 [page/paraphrase] "chips that make training fast" → (weak) quantization (score 58, solid no) — expected gpus-and-ai-accelerators; not solid; accepted page in top 5
- CAL-115 [page/paraphrase] "splitting training across many machines" → (weak) distributed-training (score 77, solid no) — expected distributed-training; not solid; accepted page in top 5
- CAL-117 [page/paraphrase] "input data changing so a deployed model gets worse" → (weak) speculative-decoding (score 64, solid no) — expected model-drift-and-monitoring; not solid; accepted page in top 5
- CAL-121 [page/paraphrase] "model flatters the user instead of being accurate" → (weak) sycophancy (score 49, solid no) — expected sycophancy; not solid; accepted page in top 5
- CAL-122 [page/paraphrase] "attacking a system on purpose to find its weaknesses" → (weak) red-teaming (score 65, solid no) — expected red-teaming; not solid; accepted page in top 5
- CAL-123 [page/paraphrase] "filters that block unsafe inputs and outputs" → (weak) ai-guardrails (score 63, solid no) — expected ai-guardrails; not solid; accepted page in top 5
- CAL-124 [page/paraphrase] "studying circuits inside networks to understand them" → (weak) mechanistic-interpretability (score 74, solid no) — expected mechanistic-interpretability; not solid; accepted page in top 5
- CAL-125 [page/paraphrase] "unfair outcomes for certain groups from automated decisions" → (weak) ai-bias-and-fairness (score 70, solid no) — expected ai-bias-and-fairness; not solid; accepted page in top 5
- CAL-129 [page/paraphrase] "list of the top vulnerabilities for llm applications" → (weak) owasp-llm-top-10 (score 75, solid no) — expected owasp-llm-top-10; not solid; accepted page in top 5
- CAL-134 [page/paraphrase] "orchestrating containers across many machines" → (weak) containers (score 79, solid no) — expected kubernetes; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAL-001 | MISS | page | a program that learns from examples instead of explicit rules | (weak) prompt-engineering | 52 | no | — | no accepted page in top 5 |
| CAL-002 | MISS | page | software that writes new text and images on its own | (weak) multimodal-ai | 78 | no | — | no accepted page in top 5 |
| CAL-003 | MISS | page | chatbots like the ones everyone talks about, how are they built | (weak) ai-agent-vs-chatbot | 70 | no | — | no accepted page in top 5 |
| CAL-004 | WEAK | page | why do language models chop words into pieces | (weak) transformers | 75 | no | — | not solid; accepted page in top 5 |
| CAL-005 | WEAK | page | how much text can a model remember in one conversation | (weak) context-windows | 77 | no | — | not solid; accepted page in top 5 |
| CAL-006 | MISS | page | the architecture behind modern chat models that looks at all words at once | (weak) python-for-ai | 61 | no | — | no accepted page in top 5 |
| CAL-007 | WEAK | page | models that understand pictures as well as words | (weak) vision-language-models | 78 | no | — | not solid; accepted page in top 5 |
| CAL-008 | WEAK | page | how to phrase instructions so the model does what i want | (weak) sycophancy | 71 | no | — | not solid; accepted page in top 5 |
| CAL-009 | MISS | page | the hidden instructions that set the assistant's personality | (weak) vision-language-models | 61 | no | — | no accepted page in top 5 |
| CAL-010 | MISS | page | my assistant keeps making up facts, why | (weak) common-prompting-mistakes | 75 | no | — | no accepted page in top 5 |
| CAL-011 | WEAK | page | ways to stop a chatbot inventing sources | (weak) how-to-reduce-hallucinations | 69 | no | — | not solid; accepted page in top 5 |
| CAL-012 | WEAK | page | turning sentences into lists of numbers so similar ones cluster | (weak) tokens | 66 | no | — | not solid; accepted page in top 5 |
| CAL-013 | PASS | page | database designed to find nearest neighbours of numeric representations | vector-databases | 88 | yes | — |  |
| CAL-014 | PASS | page | how should i split long documents before indexing them | chunking | 83 | yes | — |  |
| CAL-015 | WEAK | page | letting a model look things up in my own documents before answering | (weak) reasoning-transparency | 74 | no | — | not solid; accepted page in top 5 |
| CAL-016 | WEAK | page | teaching an existing model my company's style with more training | (weak) fine-tuning | 62 | no | — | not solid; accepted page in top 5 |
| CAL-017 | WEAK | page | run a language model on my own laptop without internet | (weak) local-ai | 79 | no | — | not solid; accepted page in top 5 |
| CAL-018 | WEAK | page | is it safe to give a chatbot confidential company information | (weak) ai-privacy-and-security | 71 | no | — | not solid; accepted page in top 5 |
| CAL-019 | WEAK | page | a malicious web page tells my assistant to ignore its rules | (weak) system-prompts | 75 | no | — | not solid; accepted page in top 5 |
| CAL-020 | FALSE POSITIVE | page | a model that plans steps and uses software on its own to finish a goal | ai-agent-vs-chatbot | 85 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| CAL-021 | MISS | page | how can a model press buttons in other programs | (weak) microsoft-entra-id | 55 | no | — | no accepted page in top 5 |
| CAL-022 | WEAK | page | getting the model to return a call to my function with arguments | (weak) function-calling | 73 | no | — | not solid; accepted page in top 5 |
| CAL-023 | WEAK | page | how does an assistant remember things between sessions | (weak) agent-memory | 63 | no | — | not solid; accepted page in top 5 |
| CAL-024 | WEAK | page | several specialised bots cooperating on a job | (weak) multi-agent-systems | 70 | no | — | not solid; accepted page in top 5 |
| CAL-025 | WEAK | page | a standard way for assistants to plug into external data sources | (weak) mcp | 69 | no | — | not solid; accepted page in top 5 |
| CAL-026 | WEAK | page | which is better for adding knowledge, retrieval or extra training | (weak) rag-vs-fine-tuning | 60 | no | — | not solid; accepted page in top 5 |
| CAL-027 | WEAK | page | difference between a simple chat bot and an autonomous one | (weak) ai-agent-vs-chatbot | 64 | no | — | not solid; accepted page in top 5 |
| CAL-028 | FALSE POSITIVE | page | using python to call a hosted language model | python | 85 | yes | — | confident wrong page: python |
| CAL-029 | FALSE POSITIVE | page | which python packages should i learn for machine learning work | python-for-ai | 83 | yes | — | confident wrong page: python-for-ai |
| CAL-030 | MISS | page | showing the answer word by word as it is generated | (weak) tokens | 72 | no | — | no accepted page in top 5 |
| CAL-031 | FALSE POSITIVE | page | building a chat window in a javascript ui library | react | 92 | yes | — | confident wrong page: react |
| CAL-032 | WEAK | page | which toolkit to pick for building an assistant with tools | (weak) teams-development | 75 | no | — | not solid; accepted page in top 5 |
| CAL-033 | MISS | page | where should i keep records for an ai powered app | (weak) local-ai-vs-cloud-ai | 73 | no | — | no accepted page in top 5 |
| CAL-034 | FALSE POSITIVE | page | how does a bot get permission to read my email | authentication-vs-authorization | 86 | yes | — | confident wrong page: authentication-vs-authorization |
| CAL-035 | MISS | page | a format for data made of curly braces and key value pairs | (weak) contrastive-learning-clip | 51 | no | — | no accepted page in top 5 |
| CAL-036 | MISS | page | how do two programs talk to each other over the web | (weak) build-spfx-web-part | 75 | no | — | no accepted page in top 5 |
| CAL-037 | WEAK | page | proving who you are when calling a web service | (weak) agent-tools | 68 | no | — | not solid; accepted page in top 5 |
| CAL-038 | PASS | page | microsoft's workplace intranet and document libraries | sharepoint | 96 | yes | — |  |
| CAL-039 | PASS | page | custom components for microsoft's intranet written in typescript | sharepoint-framework | 96 | yes | — |  |
| CAL-040 | PASS | page | microsoft's api for accessing mail, files and calendars of users | microsoft-graph | 97 | yes | — |  |
| CAL-041 | PASS | page | low code apps and automations from microsoft | power-platform | 84 | yes | — |  |
| CAL-042 | PASS | page | microsoft's cloud identity and sign in service | microsoft-entra-id | 97 | yes | — |  |
| CAL-043 | PASS | page | hosted open model hub and libraries for transformers | hugging-face | 92 | yes | — |  |
| CAL-044 | WEAK | page | popular toolkit for chaining llm calls together | (weak) langchain | 71 | no | — | not solid; accepted page in top 5 |
| CAL-045 | FALSE POSITIVE | page | programs that load and serve open models on a personal computer | local-ai | 85 | yes | — | confident wrong page: local-ai |
| CAL-046 | FALSE POSITIVE | page | a language that adds types on top of the web scripting language | javascript | 83 | yes | — | confident wrong page: javascript |
| CAL-047 | WEAK | page | systems language focused on memory safety without garbage collection | (weak) rust | 44 | no | — | not solid; accepted page in top 5 |
| CAL-048 | WEAK | page | the markup and styling languages every web page uses | (weak) html-and-css | 65 | no | — | not solid; accepted page in top 5 |
| CAL-049 | PASS | page | server side runtime that runs scripts outside the browser | nodejs | 93 | yes | — |  |
| CAL-050 | PASS | page | query language for asking relational tables questions | sql | 89 | yes | — |  |
| CAL-051 | PASS | page | relational database with a strong extension ecosystem | postgresql | 93 | yes | — |  |
| CAL-052 | WEAK | page | storing documents as flexible json instead of tables | (weak) json-validation | 74 | no | — | not solid; accepted page in top 5 |
| CAL-053 | WEAK | page | fast in memory store used for caching | (weak) redis | 69 | no | — | not solid; accepted page in top 5 |
| CAL-054 | MISS | page | versioning code and collaborating with branches | (weak) autogen | 67 | no | — | no accepted page in top 5 |
| CAL-055 | FALSE POSITIVE | page | packaging apps with all dependencies to run anywhere | teams-development | 87 | yes | — | confident wrong page: teams-development |
| CAL-056 | WEAK | page | automatically testing and deploying every commit | (weak) cicd | 68 | no | — | not solid; accepted page in top 5 |
| CAL-057 | WEAK | page | secrets kept outside source code as configuration | (weak) github | 71 | no | — | not solid; accepted page in top 5 |
| CAL-058 | FALSE POSITIVE | page | signed tokens a server hands out after login | openid-connect | 83 | yes | — | confident wrong page: openid-connect |
| CAL-059 | MISS | page | browser rule that blocks requests to other websites | (weak) react-chatbot-state | 80 | no | — | no accepted page in top 5 |
| CAL-060 | PASS | page | a server calls my url when something happens | webhooks | 89 | yes | — |  |
| CAL-061 | WEAK | page | letting the model think longer before replying improves answers | (weak) chain-of-thought | 79 | no | — | not solid; accepted page in top 5 |
| CAL-062 | FALSE POSITIVE | page | models that show step by step thinking before the final answer | chain-of-thought | 94 | yes | — | confident wrong page: chain-of-thought |
| CAL-063 | PASS | page | asking the model to explain its steps in sequence | chain-of-thought | 84 | yes | — |  |
| CAL-064 | WEAK | page | sampling many answers and picking the most common | (weak) self-consistency | 73 | no | — | not solid; accepted page in top 5 |
| CAL-065 | MISS | page | controlling randomness when a model picks the next word | (weak) best-of-n-sampling | 66 | no | — | no accepted page in top 5 |
| CAL-066 | WEAK | page | forcing output to follow a defined shape | (weak) constrained-decoding | 65 | no | — | not solid; accepted page in top 5 |
| CAL-067 | FALSE POSITIVE | page | a description of allowed fields and types for data | json-validation | 80 | yes | — | confident wrong page: json-validation |
| CAL-068 | MISS | page | learning from labelled input output pairs | (weak) dpo | 75 | no | — | no accepted page in top 5 |
| CAL-069 | MISS | page | finding patterns in data without answers provided | (weak) common-prompting-mistakes | 74 | no | — | no accepted page in top 5 |
| CAL-070 | PASS | page | layers of connected units that learn weights | neural-networks | 90 | yes | — |  |
| CAL-071 | MISS | page | how weights are adjusted by following the slope of the error | (weak) large-language-models | 67 | no | — | no accepted page in top 5 |
| CAL-072 | WEAK | page | when a model memorises training data and fails on new data | (weak) overfitting-and-regularization | 80 | no | — | not solid; accepted page in top 5 |
| CAL-073 | WEAK | page | reusing a pretrained network for a new task | (weak) transfer-learning | 71 | no | — | not solid; accepted page in top 5 |
| CAL-074 | PASS | page | agents that learn by trial reward and penalty | reinforcement-learning | 84 | yes | — |  |
| CAL-075 | PASS | page | networks designed for grids of pixels | convolutional-neural-networks | 80 | yes | — |  |
| CAL-076 | PASS | page | networks that process sequences one step at a time with a hidden state | recurrent-neural-networks | 84 | yes | — |  |
| CAL-077 | PASS | page | splitting images into patches and applying attention | vision-transformers | 85 | yes | — |  |
| CAL-078 | WEAK | page | only some specialist subnetworks are activated per input | (weak) langgraph | 53 | no | — | not solid; accepted page in top 5 |
| CAL-079 | PASS | page | sequence models that avoid quadratic attention cost | state-space-models | 93 | yes | — |  |
| CAL-080 | WEAK | page | systems that generate images by gradually removing noise | (weak) diffusion-models | 78 | no | — | not solid; accepted page in top 5 |
| CAL-081 | MISS | page | two networks competing, one forging and one detecting | (weak) graph-neural-networks | 72 | no | — | no accepted page in top 5 |
| CAL-082 | PASS | page | networks that operate on nodes and edges | graph-neural-networks | 86 | yes | — |  |
| CAL-083 | PASS | page | caching attention keys and values to speed generation | kv-cache | 82 | yes | — |  |
| CAL-084 | PASS | page | encoding the order of words in a sequence | positional-encoding | 85 | yes | — |  |
| CAL-085 | WEAK | page | how performance improves as models and data grow | (weak) scaling-laws | 63 | no | — | not solid; accepted page in top 5 |
| CAL-086 | WEAK | page | training a base model to follow user instructions | (weak) instruction-tuning | 67 | no | — | not solid; accepted page in top 5 |
| CAL-087 | PASS | page | cheap adaptation by training small low rank matrices | lora-and-peft | 88 | yes | — |  |
| CAL-088 | PASS | page | shrinking model weights to fewer bits to save memory | quantization | 86 | yes | — |  |
| CAL-089 | PASS | page | a small student model learns to imitate a big teacher | knowledge-distillation | 93 | yes | — |  |
| CAL-090 | PASS | page | small draft model proposes tokens a bigger model verifies | speculative-decoding | 91 | yes | — |  |
| CAL-091 | PASS | page | compact models that run on phones | small-language-models | 87 | yes | — |  |
| CAL-092 | WEAK | page | models whose parameters you can download | (weak) open-weights-models | 73 | no | — | not solid; accepted page in top 5 |
| CAL-093 | WEAK | page | models that answer questions about pictures | (weak) vision-language-models | 71 | no | — | not solid; accepted page in top 5 |
| CAL-094 | WEAK | page | converting spoken audio to text and back | (weak) grammar-guided-generation | 63 | no | — | not solid; accepted page in top 5 |
| CAL-095 | PASS | page | extracting information from scanned forms and pdfs | document-understanding-ai | 88 | yes | — |  |
| CAL-096 | WEAK | page | agents talking to each other using a shared protocol from google | (weak) autogen | 76 | no | — | not solid; accepted page in top 5 |
| CAL-097 | PASS | page | security risks when assistants connect to tool servers | mcp-security | 84 | yes | — |  |
| CAL-098 | FALSE POSITIVE | page | graph based framework for stateful agent workflows | choosing-an-agent-framework | 81 | yes | — | confident wrong page: choosing-an-agent-framework |
| CAL-099 | PASS | page | serving models fast with paged attention | vllm | 81 | yes | — |  |
| CAL-100 | MISS | page | loading quantised models in plain c plus plus | (weak) ollama | 66 | no | — | no accepted page in top 5 |
| CAL-101 | PASS | page | simple command line tool to download and chat with local models | ollama | 87 | yes | — |  |
| CAL-102 | MISS | page | a library for training deep networks popular in research | (weak) neural-networks | 76 | no | — | no accepted page in top 5 |
| CAL-103 | WEAK | page | alternate between thinking and acting with observations | (weak) thinking-budgets | 62 | no | — | not solid; accepted page in top 5 |
| CAL-104 | PASS | page | agents that click and type on a computer screen | computer-use-agents | 84 | yes | — |  |
| CAL-105 | PASS | page | running generated code safely in isolation | code-execution-sandboxing | 81 | yes | — |  |
| CAL-106 | WEAK | page | combine keyword and meaning search then reorder results | (weak) hybrid-search-and-reranking | 77 | no | — | not solid; accepted page in top 5 |
| CAL-107 | PASS | page | retrieval over a network of connected entities | graph-rag | 83 | yes | — |  |
| CAL-108 | PASS | page | deciding what information goes into the model's window | context-engineering | 85 | yes | — |  |
| CAL-109 | WEAK | page | public scoreboards comparing models | (weak) benchmarks-and-leaderboards | 76 | no | — | not solid; accepted page in top 5 |
| CAL-110 | WEAK | page | test questions leaking into training data | (weak) benchmark-contamination | 75 | no | — | not solid; accepted page in top 5 |
| CAL-111 | WEAK | page | using a strong model to grade other model answers | (weak) gsm8k-and-math-benchmarks | 70 | no | — | not solid; accepted page in top 5 |
| CAL-112 | WEAK | page | measuring how good retrieval and answers are in a rag system | (weak) rag-evaluation | 78 | no | — | not solid; accepted page in top 5 |
| CAL-113 | MISS | page | deploying models to production and keeping them healthy | (weak) overfitting-and-regularization | 66 | no | — | no accepted page in top 5 |
| CAL-114 | WEAK | page | chips that make training fast | (weak) quantization | 58 | no | — | not solid; accepted page in top 5 |
| CAL-115 | WEAK | page | splitting training across many machines | (weak) distributed-training | 77 | no | — | not solid; accepted page in top 5 |
| CAL-116 | MISS | page | seeing what happens inside every model call in production | (weak) ai-agent-vs-chatbot | 73 | no | — | no accepted page in top 5 |
| CAL-117 | WEAK | page | input data changing so a deployed model gets worse | (weak) speculative-decoding | 64 | no | — | not solid; accepted page in top 5 |
| CAL-118 | PASS | page | reusing repeated prompt prefixes to save money | prompt-caching | 88 | yes | — |  |
| CAL-119 | MISS | page | making a model behave in line with human values | (weak) reasoning-models | 76 | no | — | no accepted page in top 5 |
| CAL-120 | FALSE POSITIVE | page | training from human comparisons of two answers | supervised-learning | 81 | yes | — | confident wrong page: supervised-learning |
| CAL-121 | WEAK | page | model flatters the user instead of being accurate | (weak) sycophancy | 49 | no | — | not solid; accepted page in top 5 |
| CAL-122 | WEAK | page | attacking a system on purpose to find its weaknesses | (weak) red-teaming | 65 | no | — | not solid; accepted page in top 5 |
| CAL-123 | WEAK | page | filters that block unsafe inputs and outputs | (weak) ai-guardrails | 63 | no | — | not solid; accepted page in top 5 |
| CAL-124 | WEAK | page | studying circuits inside networks to understand them | (weak) mechanistic-interpretability | 74 | no | — | not solid; accepted page in top 5 |
| CAL-125 | WEAK | page | unfair outcomes for certain groups from automated decisions | (weak) ai-bias-and-fairness | 70 | no | — | not solid; accepted page in top 5 |
| CAL-126 | FALSE POSITIVE | page | rules and oversight for responsible ai in organisations | eu-ai-act | 92 | yes | — | confident wrong page: eu-ai-act |
| CAL-127 | PASS | page | european law classifying systems by risk | eu-ai-act | 87 | yes | — |  |
| CAL-128 | PASS | page | documentation describing a model's intended use and limits | model-cards | 83 | yes | — |  |
| CAL-129 | WEAK | page | list of the top vulnerabilities for llm applications | (weak) owasp-llm-top-10 | 75 | no | — | not solid; accepted page in top 5 |
| CAL-130 | PASS | page | predicting three dimensional protein shapes | alphafold | 81 | yes | — |  |
| CAL-131 | PASS | page | systems that physically interact with the world using perception and action | embodied-ai | 81 | yes | — |  |
| CAL-132 | PASS | page | learning from demonstrations by an expert | imitation-learning | 94 | yes | — |  |
| CAL-133 | FALSE POSITIVE | page | moving a policy from simulation to a physical robot | embodied-ai | 86 | yes | — | confident wrong page: embodied-ai |
| CAL-134 | WEAK | page | orchestrating containers across many machines | (weak) containers | 79 | no | — | not solid; accepted page in top 5 |
| CAL-135 | MISS | page | finding and locating items in pictures with boxes | (weak) agent-memory | 61 | no | — | no accepted page in top 5 |
| CAL-136 | FALSE POSITIVE | page | european privacy regulation and automated processing | eu-ai-act | 92 | yes | — | confident wrong page: eu-ai-act |
| CAL-N01 | PASS | neg | toy transformer robot for kids birthday | (weak) multimodal-ai | 56 | no | — | no confident answer |
| CAL-N02 | PASS | neg | are mamba snakes dangerous | (weak) state-space-models | 64 | no | — | no confident answer |
| CAL-N03 | PASS | neg | can my python pet eat mice | (weak) python | 71 | no | — | no confident answer |
| CAL-N04 | FALSE POSITIVE | neg | react to this message politely | react-chatbot-state | 80 | yes | — | confident answer for out-of-scope query: react-chatbot-state |
| CAL-N05 | PASS | neg | docker is a clothing brand right | (weak) docker | 69 | no | — | no confident answer |
| CAL-N06 | PASS | neg | find a real estate agent near me | (weak) ai-agent-vs-chatbot | 59 | no | — | no confident answer |
| CAL-N07 | PASS | neg | buy a model train set | (weak) transfer-learning | 68 | no | — | no confident answer |
| CAL-N08 | PASS | neg | how to bake sourdough bread | (weak) transfer-learning | 59 | no | — | no confident answer |
| CAL-N09 | PASS | neg | best pizza in rome | (weak) function-calling | 36 | no | — | no confident answer |
| CAL-N10 | PASS | neg | cheapest flights to lisbon | (weak) rag-evaluation | 39 | no | — | no confident answer |
| CAL-N11 | PASS | neg | how do i fix a leaking tap | (weak) common-prompting-mistakes | 63 | no | — | no confident answer |
| CAL-N12 | PASS | neg | symptoms of the flu | (weak) how-to-reduce-hallucinations | 37 | no | — | no confident answer |
| CAL-N13 | PASS | neg | who won the world cup in 2010 | (weak) mmlu | 49 | no | — | no confident answer |
| CAL-N14 | FALSE POSITIVE | neg | knit a scarf for beginners | python-for-ai | 86 | yes | — | confident answer for out-of-scope query: python-for-ai |
| CAL-N15 | PASS | neg | go for a walk after dinner | (weak) go-language | 61 | no | — | no confident answer |
| CAL-N16 | PASS | neg | swift flight of a bird | (weak) streaming-ai-responses | 42 | no | — | no confident answer |
| CAL-N17 | PASS | neg | rust on my bicycle chain how to remove | (weak) rust | 77 | no | — | no confident answer |
| CAL-N18 | PASS | neg | java coffee beans origin | (weak) java | 61 | no | — | no confident answer |
| CAL-N19 | PASS | neg | ruby gemstone value | (weak) markov-decision-processes | 56 | no | — | no confident answer |
| CAL-N20 | PASS | neg | agent 007 movie order | (weak) ai-agent-vs-chatbot | 50 | no | — | no confident answer |
| CAL-N21 | PASS | neg | fashion model portfolio tips | (weak) rag-vs-fine-tuning | 60 | no | — | no confident answer |
| CAL-N22 | PASS | neg | how to train for a marathon | (weak) distributed-training | 45 | no | — | no confident answer |
| CAL-N23 | PASS | neg | token of appreciation gift ideas | (weak) json-web-tokens | 53 | no | — | no confident answer |
| CAL-N24 | FALSE POSITIVE | neg | embedding a screw in drywall | embeddings | 85 | yes | — | confident answer for out-of-scope query: embeddings |
| CAL-N25 | PASS | neg | cloud formations explained for kids | (weak) deep-learning | 56 | no | — | no confident answer |
| CAL-N26 | PASS | neg | apple pie recipe | (weak) gpus-and-ai-accelerators | 79 | no | — | no confident answer |
| CAL-N27 | PASS | neg | what is the weather tomorrow | (weak) ai-weather-forecasting | 79 | no | — | no confident answer |
| CAL-N28 | PASS | neg | stock market tips for beginners | (weak) prompt-engineering | 42 | no | — | no confident answer |
| CAL-N29 | PASS | neg | learn guitar chords fast | (weak) fine-tuning | 54 | no | — | no confident answer |
| CAL-N30 | PASS | neg | mortgage rates today | (weak) llm-benchmarks-vs-task-evals | 47 | no | — | no confident answer |
| CAL-N31 | PASS | neg | tips for a job interview | (weak) rag | 64 | no | — | no confident answer |
| CAL-N32 | PASS | neg | how to grow tomatoes | (weak) rest-vs-graphql | 56 | no | — | no confident answer |
| CAL-N33 | PASS | neg | ambassador reception dress code | (weak) system-prompts | 49 | no | — | no confident answer |
| CAL-N34 | PASS | neg | spark plug replacement steps | (weak) system-prompts | 44 | no | — | no confident answer |
| CAL-N35 | PASS | neg | bridge card game rules | (weak) sim-to-real-transfer | 61 | no | — | no confident answer |
| CAL-N36 | PASS | neg | sage herb cooking uses | (weak) knowledge-distillation | 47 | no | — | no confident answer |
| CAL-N37 | PASS | neg | oracle of delphi history | (weak) microsoft-365 | 64 | no | — | no confident answer |
| CAL-N38 | PASS | neg | chrome plated bumper cleaning | (weak) agentic-rag | 48 | no | — | no confident answer |
| CAL-N39 | PASS | neg | spring cleaning checklist | (weak) dspy | 53 | no | — | no confident answer |
| CAL-N40 | PASS | neg | kernel of corn popcorn tips | (weak) semantic-kernel | 49 | no | — | no confident answer |
| CAL-G01 | PASS | gap | how do i set up terraform modules | (weak) package-managers | 66 | no | — | transparent non-answer |
| CAL-G02 | PASS | gap | what is a service mesh like istio | (weak) hugging-face | 65 | no | — | transparent non-answer |
| CAL-G03 | PASS | gap | explain apache kafka partitions | (weak) reasoning-transparency | 75 | no | — | transparent non-answer |
| CAL-G04 | PASS | gap | write an ansible playbook | (weak) html-and-css | 57 | no | — | transparent non-answer |
| CAL-G05 | PASS | gap | best linux distro for servers | (weak) containers | 75 | no | — | transparent non-answer |
| CAL-G06 | PASS | gap | federated learning on phones | (weak) deep-learning | 57 | no | — | transparent non-answer |
| CAL-G07 | PASS | gap | differential privacy for datasets | (weak) physics-informed-neural-networks | 70 | no | — | transparent non-answer |
| CAL-G08 | FALSE POSITIVE | gap | time series forecasting with prophet | ai-weather-forecasting | 87 | yes | — | confident unrelated page: ai-weather-forecasting |
| CAL-G09 | PASS | gap | how do recommender systems rank movies | (weak) video-generation-models | 50 | no | — | transparent non-answer |
| CAL-G10 | PASS | gap | configuring nginx reverse proxy | (weak) streaming-ai-with-nodejs | 55 | no | — | transparent non-answer |
| CAL-G11 | PASS | gap | angular vs vue for a new project | (weak) framework-vs-direct-api | 67 | no | — | transparent non-answer |
| CAL-G12 | PASS | gap | setting up tls certificates with letsencrypt | (weak) redis | 49 | no | — | transparent non-answer |
