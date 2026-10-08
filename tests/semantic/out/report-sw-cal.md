# Knowledge red-team report — sw-cal

Dataset: `tests/redteam/calibration-semantic.json` sha256 `981c61d4ae5eeaccf380da163bd08de840761f2999a5489bdf9e868b186b03b7`

Total 188 · PASS 70 · WEAK 82 · MISS 30 · FALSE POSITIVE 6
Pass rate 37.2% · False-positive rate 3.2%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 70 · WEAK 82 · MISS 30 · FALSE POSITIVE 6 · pass rate 37.2% · FP rate 3.2%
Retrieval on page-kind queries (136): top-1 55.1% · top-3 75.0% · top-5 77.2%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 12 | 12 | 0 | 0 | 0 | 100.0% |
| neg | 40 | 40 | 0 | 0 | 0 | 100.0% |
| page | 136 | 18 | 82 | 30 | 6 | 13.2% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 40 | 40 | 0 | 0 | 0 | 100.0% |
| gap | 12 | 12 | 0 | 0 | 0 | 100.0% |
| paraphrase | 136 | 18 | 82 | 30 | 6 | 13.2% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| cal | 188 | 70 | 82 | 30 | 6 | 37.2% |

## FALSE POSITIVE
- CAL-031 [page/paraphrase] "building a chat window in a javascript ui library" → react (score 92, solid yes) — expected react-ai-interfaces; confident wrong page: react
- CAL-049 [page/paraphrase] "server side runtime that runs scripts outside the browser" → javascript-for-ai (score 91, solid yes) — expected nodejs; confident wrong page: javascript-for-ai
- CAL-062 [page/paraphrase] "models that show step by step thinking before the final answer" → chain-of-thought (score 93, solid yes) — expected reasoning-models; confident wrong page: chain-of-thought
- CAL-126 [page/paraphrase] "rules and oversight for responsible ai in organisations" → eu-ai-act (score 91, solid yes) — expected ai-governance; confident wrong page: eu-ai-act
- CAL-133 [page/paraphrase] "moving a policy from simulation to a physical robot" → embodied-ai (score 86, solid yes) — expected sim-to-real-transfer; confident wrong page: embodied-ai
- CAL-136 [page/paraphrase] "european privacy regulation and automated processing" → eu-ai-act (score 91, solid yes) — expected gdpr-and-ai; confident wrong page: eu-ai-act

## MISS
- CAL-001 [page/paraphrase] "a program that learns from examples instead of explicit rules" → (weak) prompt-engineering (score 50, solid no) — expected what-is-ai; no accepted page in top 5
- CAL-002 [page/paraphrase] "software that writes new text and images on its own" → (weak) multimodal-ai (score 75, solid no) — expected generative-ai; no accepted page in top 5
- CAL-003 [page/paraphrase] "chatbots like the ones everyone talks about, how are they built" → (weak) ai-agent-vs-chatbot (score 66, solid no) — expected large-language-models; no accepted page in top 5
- CAL-006 [page/paraphrase] "the architecture behind modern chat models that looks at all words at once" → (weak) python-for-ai (score 59, solid no) — expected transformers; no accepted page in top 5
- CAL-009 [page/paraphrase] "the hidden instructions that set the assistant's personality" → (weak) vision-language-models (score 55, solid no) — expected system-prompts; no accepted page in top 5
- CAL-010 [page/paraphrase] "my assistant keeps making up facts, why" → (weak) common-prompting-mistakes (score 74, solid no) — expected ai-hallucinations; no accepted page in top 5
- CAL-021 [page/paraphrase] "how can a model press buttons in other programs" → (weak) oauth (score 55, solid no) — expected agent-tools; no accepted page in top 5
- CAL-024 [page/paraphrase] "several specialised bots cooperating on a job" → (weak) a2a-protocol (score 49, solid no) — expected multi-agent-systems; no accepted page in top 5
- CAL-030 [page/paraphrase] "showing the answer word by word as it is generated" → (weak) tokens (score 73, solid no) — expected streaming-ai-responses; no accepted page in top 5
- CAL-033 [page/paraphrase] "where should i keep records for an ai powered app" → (weak) ollama (score 69, solid no) — expected databases-for-ai-apps; no accepted page in top 5
- CAL-034 [page/paraphrase] "how does a bot get permission to read my email" → (weak) authentication-vs-authorization (score 83, solid no) — expected oauth-for-ai-agents; no accepted page in top 5
- CAL-035 [page/paraphrase] "a format for data made of curly braces and key value pairs" → (weak) lora-and-peft (score 40, solid no) — expected what-is-json; no accepted page in top 5
- CAL-036 [page/paraphrase] "how do two programs talk to each other over the web" → (weak) build-spfx-web-part (score 74, solid no) — expected what-is-an-api; no accepted page in top 5
- CAL-054 [page/paraphrase] "versioning code and collaborating with branches" → (weak) multi-agent-systems (score 47, solid no) — expected git; no accepted page in top 5
- CAL-055 [page/paraphrase] "packaging apps with all dependencies to run anywhere" → (weak) teams-development (score 84, solid no) — expected docker; no accepted page in top 5
- CAL-058 [page/paraphrase] "signed tokens a server hands out after login" → (weak) authentication-vs-authorization (score 78, solid no) — expected json-web-tokens; no accepted page in top 5
- CAL-059 [page/paraphrase] "browser rule that blocks requests to other websites" → (weak) teams-development (score 67, solid no) — expected cors; no accepted page in top 5
- CAL-061 [page/paraphrase] "letting the model think longer before replying improves answers" → (weak) chain-of-thought (score 67, solid no) — expected test-time-compute; no accepted page in top 5
- CAL-065 [page/paraphrase] "controlling randomness when a model picks the next word" → (weak) large-language-models (score 64, solid no) — expected sampling-and-decoding; no accepted page in top 5
- CAL-066 [page/paraphrase] "forcing output to follow a defined shape" → (weak) prompt-engineering (score 53, solid no) — expected structured-outputs; no accepted page in top 5
- CAL-068 [page/paraphrase] "learning from labelled input output pairs" → (weak) dpo (score 44, solid no) — expected supervised-learning; no accepted page in top 5
- CAL-069 [page/paraphrase] "finding patterns in data without answers provided" → (weak) common-prompting-mistakes (score 74, solid no) — expected unsupervised-learning; no accepted page in top 5
- CAL-081 [page/paraphrase] "two networks competing, one forging and one detecting" → (weak) ai-materials-discovery (score 53, solid no) — expected generative-adversarial-networks; no accepted page in top 5
- CAL-096 [page/paraphrase] "agents talking to each other using a shared protocol from google" → (weak) gmail-for-ai-agents (score 76, solid no) — expected a2a-protocol; no accepted page in top 5
- CAL-100 [page/paraphrase] "loading quantised models in plain c plus plus" → (weak) ollama (score 61, solid no) — expected llama-cpp; no accepted page in top 5
- CAL-102 [page/paraphrase] "a library for training deep networks popular in research" → (weak) neural-networks (score 76, solid no) — expected pytorch; no accepted page in top 5
- CAL-113 [page/paraphrase] "deploying models to production and keeping them healthy" → (weak) instruction-tuning (score 63, solid no) — expected mlops; no accepted page in top 5
- CAL-116 [page/paraphrase] "seeing what happens inside every model call in production" → (weak) ai-agent-vs-chatbot (score 70, solid no) — expected llm-observability; no accepted page in top 5
- CAL-119 [page/paraphrase] "making a model behave in line with human values" → (weak) large-language-models (score 73, solid no) — expected ai-alignment; no accepted page in top 5
- CAL-135 [page/paraphrase] "finding and locating items in pictures with boxes" → (weak) agent-memory (score 56, solid no) — expected object-detection; no accepted page in top 5

## WEAK
- CAL-004 [page/paraphrase] "why do language models chop words into pieces" → (weak) tokens (score 61, solid no) — expected tokens; not solid; accepted page in top 5
- CAL-005 [page/paraphrase] "how much text can a model remember in one conversation" → (weak) context-windows (score 77, solid no) — expected context-windows; not solid; accepted page in top 5
- CAL-007 [page/paraphrase] "models that understand pictures as well as words" → (weak) vision-language-models (score 77, solid no) — expected multimodal-ai; not solid; accepted page in top 5
- CAL-008 [page/paraphrase] "how to phrase instructions so the model does what i want" → (weak) sycophancy (score 68, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- CAL-011 [page/paraphrase] "ways to stop a chatbot inventing sources" → (weak) how-to-reduce-hallucinations (score 66, solid no) — expected how-to-reduce-hallucinations; not solid; accepted page in top 5
- CAL-012 [page/paraphrase] "turning sentences into lists of numbers so similar ones cluster" → (weak) tokens (score 60, solid no) — expected embeddings; not solid; accepted page in top 5
- CAL-014 [page/paraphrase] "how should i split long documents before indexing them" → (weak) chunking (score 81, solid no) — expected chunking; not solid; accepted page in top 5
- CAL-015 [page/paraphrase] "letting a model look things up in my own documents before answering" → (weak) rag (score 70, solid no) — expected rag; not solid; accepted page in top 5
- CAL-016 [page/paraphrase] "teaching an existing model my company's style with more training" → (weak) fine-tuning (score 61, solid no) — expected fine-tuning; not solid; accepted page in top 5
- CAL-017 [page/paraphrase] "run a language model on my own laptop without internet" → (weak) local-ai (score 77, solid no) — expected local-ai; not solid; accepted page in top 5
- CAL-018 [page/paraphrase] "is it safe to give a chatbot confidential company information" → (weak) ai-privacy-and-security (score 69, solid no) — expected ai-privacy-and-security; not solid; accepted page in top 5
- CAL-019 [page/paraphrase] "a malicious web page tells my assistant to ignore its rules" → (weak) system-prompts (score 75, solid no) — expected prompt-injection; not solid; accepted page in top 5
- CAL-020 [page/paraphrase] "a model that plans steps and uses software on its own to finish a goal" → (weak) ai-agent-vs-chatbot (score 84, solid no) — expected ai-agents; not solid; accepted page in top 5
- CAL-022 [page/paraphrase] "getting the model to return a call to my function with arguments" → (weak) function-calling (score 72, solid no) — expected function-calling; not solid; accepted page in top 5
- CAL-023 [page/paraphrase] "how does an assistant remember things between sessions" → (weak) common-prompting-mistakes (score 62, solid no) — expected agent-memory; not solid; accepted page in top 5
- CAL-025 [page/paraphrase] "a standard way for assistants to plug into external data sources" → (weak) mcp (score 68, solid no) — expected mcp; not solid; accepted page in top 5
- CAL-026 [page/paraphrase] "which is better for adding knowledge, retrieval or extra training" → (weak) rag-vs-fine-tuning (score 63, solid no) — expected rag-vs-fine-tuning; not solid; accepted page in top 5
- CAL-027 [page/paraphrase] "difference between a simple chat bot and an autonomous one" → (weak) teams-development (score 63, solid no) — expected ai-agent-vs-chatbot; not solid; accepted page in top 5
- CAL-028 [page/paraphrase] "using python to call a hosted language model" → (weak) python (score 84, solid no) — expected calling-ai-apis-with-python; not solid; accepted page in top 5
- CAL-029 [page/paraphrase] "which python packages should i learn for machine learning work" → (weak) python-for-ai (score 84, solid no) — expected python-ai-libraries; not solid; accepted page in top 5
- CAL-032 [page/paraphrase] "which toolkit to pick for building an assistant with tools" → (weak) teams-development (score 71, solid no) — expected choosing-an-agent-framework; not solid; accepted page in top 5
- CAL-037 [page/paraphrase] "proving who you are when calling a web service" → (weak) agent-tools (score 52, solid no) — expected api-authentication; not solid; accepted page in top 5
- CAL-038 [page/paraphrase] "microsoft's workplace intranet and document libraries" → (weak) sharepoint (score 83, solid no) — expected sharepoint; not solid; accepted page in top 5
- CAL-041 [page/paraphrase] "low code apps and automations from microsoft" → (weak) power-platform (score 84, solid no) — expected power-platform; not solid; accepted page in top 5
- CAL-044 [page/paraphrase] "popular toolkit for chaining llm calls together" → (weak) javascript-for-ai (score 66, solid no) — expected langchain; not solid; accepted page in top 5
- CAL-045 [page/paraphrase] "programs that load and serve open models on a personal computer" → (weak) local-ai (score 81, solid no) — expected local-llm-runtimes; not solid; accepted page in top 5
- CAL-046 [page/paraphrase] "a language that adds types on top of the web scripting language" → (weak) javascript (score 81, solid no) — expected typescript; not solid; accepted page in top 5
- CAL-047 [page/paraphrase] "systems language focused on memory safety without garbage collection" → (weak) rust (score 48, solid no) — expected rust; not solid; accepted page in top 5
- CAL-048 [page/paraphrase] "the markup and styling languages every web page uses" → (weak) html-and-css (score 57, solid no) — expected html-and-css; not solid; accepted page in top 5
- CAL-052 [page/paraphrase] "storing documents as flexible json instead of tables" → (weak) what-is-json (score 75, solid no) — expected mongodb; not solid; accepted page in top 5
- CAL-053 [page/paraphrase] "fast in memory store used for caching" → (weak) redis (score 70, solid no) — expected redis; not solid; accepted page in top 5
- CAL-056 [page/paraphrase] "automatically testing and deploying every commit" → (weak) cicd (score 67, solid no) — expected cicd; not solid; accepted page in top 5
- CAL-057 [page/paraphrase] "secrets kept outside source code as configuration" → (weak) environment-variables (score 69, solid no) — expected environment-variables; not solid; accepted page in top 5
- CAL-063 [page/paraphrase] "asking the model to explain its steps in sequence" → (weak) chain-of-thought (score 83, solid no) — expected chain-of-thought; not solid; accepted page in top 5
- CAL-064 [page/paraphrase] "sampling many answers and picking the most common" → (weak) self-consistency (score 71, solid no) — expected self-consistency; not solid; accepted page in top 5
- CAL-067 [page/paraphrase] "a description of allowed fields and types for data" → (weak) json-validation (score 77, solid no) — expected json-schema; not solid; accepted page in top 5
- CAL-071 [page/paraphrase] "how weights are adjusted by following the slope of the error" → (weak) backpropagation-and-gradient-descent (score 54, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- CAL-072 [page/paraphrase] "when a model memorises training data and fails on new data" → (weak) overfitting-and-regularization (score 78, solid no) — expected overfitting-and-regularization; not solid; accepted page in top 5
- CAL-073 [page/paraphrase] "reusing a pretrained network for a new task" → (weak) transfer-learning (score 67, solid no) — expected transfer-learning; not solid; accepted page in top 5
- CAL-074 [page/paraphrase] "agents that learn by trial reward and penalty" → (weak) reinforcement-learning (score 83, solid no) — expected reinforcement-learning; not solid; accepted page in top 5
- CAL-075 [page/paraphrase] "networks designed for grids of pixels" → (weak) convolutional-neural-networks (score 73, solid no) — expected convolutional-neural-networks; not solid; accepted page in top 5
- CAL-076 [page/paraphrase] "networks that process sequences one step at a time with a hidden state" → (weak) recurrent-neural-networks (score 82, solid no) — expected recurrent-neural-networks; not solid; accepted page in top 5
- CAL-077 [page/paraphrase] "splitting images into patches and applying attention" → (weak) vision-transformers (score 83, solid no) — expected vision-transformers; not solid; accepted page in top 5
- CAL-078 [page/paraphrase] "only some specialist subnetworks are activated per input" → (weak) mixture-of-experts (score 48, solid no) — expected mixture-of-experts; not solid; accepted page in top 5
- CAL-080 [page/paraphrase] "systems that generate images by gradually removing noise" → (weak) diffusion-models (score 77, solid no) — expected diffusion-models; not solid; accepted page in top 5
- CAL-082 [page/paraphrase] "networks that operate on nodes and edges" → (weak) graph-neural-networks (score 85, solid no) — expected graph-neural-networks; not solid; accepted page in top 5
- CAL-083 [page/paraphrase] "caching attention keys and values to speed generation" → (weak) kv-cache (score 82, solid no) — expected kv-cache; not solid; accepted page in top 5
- CAL-084 [page/paraphrase] "encoding the order of words in a sequence" → (weak) positional-encoding (score 85, solid no) — expected positional-encoding; not solid; accepted page in top 5
- CAL-085 [page/paraphrase] "how performance improves as models and data grow" → (weak) benchmarks-and-leaderboards (score 59, solid no) — expected scaling-laws; not solid; accepted page in top 5
- CAL-086 [page/paraphrase] "training a base model to follow user instructions" → (weak) instruction-tuning (score 63, solid no) — expected instruction-tuning; not solid; accepted page in top 5
- CAL-088 [page/paraphrase] "shrinking model weights to fewer bits to save memory" → (weak) quantization (score 75, solid no) — expected quantization; not solid; accepted page in top 5
- CAL-092 [page/paraphrase] "models whose parameters you can download" → (weak) open-weights-models (score 72, solid no) — expected open-weights-models; not solid; accepted page in top 5
- CAL-093 [page/paraphrase] "models that answer questions about pictures" → (weak) vision-language-models (score 70, solid no) — expected vision-language-models; not solid; accepted page in top 5
- CAL-094 [page/paraphrase] "converting spoken audio to text and back" → (weak) speech-ai (score 51, solid no) — expected speech-ai; not solid; accepted page in top 5
- CAL-097 [page/paraphrase] "security risks when assistants connect to tool servers" → (weak) mcp-security (score 84, solid no) — expected mcp-security; not solid; accepted page in top 5
- CAL-098 [page/paraphrase] "graph based framework for stateful agent workflows" → (weak) choosing-an-agent-framework (score 79, solid no) — expected langgraph; not solid; accepted page in top 5
- CAL-099 [page/paraphrase] "serving models fast with paged attention" → (weak) vllm (score 83, solid no) — expected vllm; not solid; accepted page in top 5
- CAL-101 [page/paraphrase] "simple command line tool to download and chat with local models" → (weak) ollama (score 85, solid no) — expected ollama; not solid; accepted page in top 5
- CAL-103 [page/paraphrase] "alternate between thinking and acting with observations" → (weak) thinking-budgets (score 62, solid no) — expected react-agent-pattern; not solid; accepted page in top 5
- CAL-104 [page/paraphrase] "agents that click and type on a computer screen" → (weak) computer-use-agents (score 84, solid no) — expected computer-use-agents; not solid; accepted page in top 5
- CAL-105 [page/paraphrase] "running generated code safely in isolation" → (weak) code-execution-sandboxing (score 81, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- CAL-106 [page/paraphrase] "combine keyword and meaning search then reorder results" → (weak) hybrid-search-and-reranking (score 75, solid no) — expected hybrid-search-and-reranking; not solid; accepted page in top 5
- CAL-107 [page/paraphrase] "retrieval over a network of connected entities" → (weak) graph-rag (score 85, solid no) — expected graph-rag; not solid; accepted page in top 5
- CAL-109 [page/paraphrase] "public scoreboards comparing models" → (weak) object-detection (score 38, solid no) — expected benchmarks-and-leaderboards; not solid; accepted page in top 5
- CAL-110 [page/paraphrase] "test questions leaking into training data" → (weak) benchmark-contamination (score 71, solid no) — expected benchmark-contamination; not solid; accepted page in top 5
- CAL-111 [page/paraphrase] "using a strong model to grade other model answers" → (weak) gsm8k-and-math-benchmarks (score 70, solid no) — expected llm-as-a-judge; not solid; accepted page in top 5
- CAL-112 [page/paraphrase] "measuring how good retrieval and answers are in a rag system" → (weak) rag-evaluation (score 77, solid no) — expected rag-evaluation; not solid; accepted page in top 5
- CAL-114 [page/paraphrase] "chips that make training fast" → (weak) gpus-and-ai-accelerators (score 50, solid no) — expected gpus-and-ai-accelerators; not solid; accepted page in top 5
- CAL-115 [page/paraphrase] "splitting training across many machines" → (weak) distributed-training (score 75, solid no) — expected distributed-training; not solid; accepted page in top 5
- CAL-117 [page/paraphrase] "input data changing so a deployed model gets worse" → (weak) speculative-decoding (score 60, solid no) — expected model-drift-and-monitoring; not solid; accepted page in top 5
- CAL-120 [page/paraphrase] "training from human comparisons of two answers" → (weak) supervised-learning (score 78, solid no) — expected rlhf; not solid; accepted page in top 5
- CAL-121 [page/paraphrase] "model flatters the user instead of being accurate" → (weak) sycophancy (score 41, solid no) — expected sycophancy; not solid; accepted page in top 5
- CAL-122 [page/paraphrase] "attacking a system on purpose to find its weaknesses" → (weak) red-teaming (score 56, solid no) — expected red-teaming; not solid; accepted page in top 5
- CAL-123 [page/paraphrase] "filters that block unsafe inputs and outputs" → (weak) ai-guardrails (score 59, solid no) — expected ai-guardrails; not solid; accepted page in top 5
- CAL-124 [page/paraphrase] "studying circuits inside networks to understand them" → (weak) mechanistic-interpretability (score 69, solid no) — expected mechanistic-interpretability; not solid; accepted page in top 5
- CAL-125 [page/paraphrase] "unfair outcomes for certain groups from automated decisions" → (weak) ai-bias-and-fairness (score 64, solid no) — expected ai-bias-and-fairness; not solid; accepted page in top 5
- CAL-127 [page/paraphrase] "european law classifying systems by risk" → (weak) eu-ai-act (score 74, solid no) — expected eu-ai-act; not solid; accepted page in top 5
- CAL-128 [page/paraphrase] "documentation describing a model's intended use and limits" → (weak) model-cards (score 81, solid no) — expected model-cards; not solid; accepted page in top 5
- CAL-129 [page/paraphrase] "list of the top vulnerabilities for llm applications" → (weak) owasp-llm-top-10 (score 76, solid no) — expected owasp-llm-top-10; not solid; accepted page in top 5
- CAL-130 [page/paraphrase] "predicting three dimensional protein shapes" → (weak) alphafold (score 81, solid no) — expected alphafold; not solid; accepted page in top 5
- CAL-131 [page/paraphrase] "systems that physically interact with the world using perception and action" → (weak) world-models (score 64, solid no) — expected embodied-ai; not solid; accepted page in top 5
- CAL-134 [page/paraphrase] "orchestrating containers across many machines" → (weak) containers (score 78, solid no) — expected kubernetes; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAL-001 | MISS | page | a program that learns from examples instead of explicit rules | (weak) prompt-engineering | 50 | no | — | no accepted page in top 5 |
| CAL-002 | MISS | page | software that writes new text and images on its own | (weak) multimodal-ai | 75 | no | — | no accepted page in top 5 |
| CAL-003 | MISS | page | chatbots like the ones everyone talks about, how are they built | (weak) ai-agent-vs-chatbot | 66 | no | — | no accepted page in top 5 |
| CAL-004 | WEAK | page | why do language models chop words into pieces | (weak) tokens | 61 | no | — | not solid; accepted page in top 5 |
| CAL-005 | WEAK | page | how much text can a model remember in one conversation | (weak) context-windows | 77 | no | — | not solid; accepted page in top 5 |
| CAL-006 | MISS | page | the architecture behind modern chat models that looks at all words at once | (weak) python-for-ai | 59 | no | — | no accepted page in top 5 |
| CAL-007 | WEAK | page | models that understand pictures as well as words | (weak) vision-language-models | 77 | no | — | not solid; accepted page in top 5 |
| CAL-008 | WEAK | page | how to phrase instructions so the model does what i want | (weak) sycophancy | 68 | no | — | not solid; accepted page in top 5 |
| CAL-009 | MISS | page | the hidden instructions that set the assistant's personality | (weak) vision-language-models | 55 | no | — | no accepted page in top 5 |
| CAL-010 | MISS | page | my assistant keeps making up facts, why | (weak) common-prompting-mistakes | 74 | no | — | no accepted page in top 5 |
| CAL-011 | WEAK | page | ways to stop a chatbot inventing sources | (weak) how-to-reduce-hallucinations | 66 | no | — | not solid; accepted page in top 5 |
| CAL-012 | WEAK | page | turning sentences into lists of numbers so similar ones cluster | (weak) tokens | 60 | no | — | not solid; accepted page in top 5 |
| CAL-013 | PASS | page | database designed to find nearest neighbours of numeric representations | vector-databases | 87 | yes | — |  |
| CAL-014 | WEAK | page | how should i split long documents before indexing them | (weak) chunking | 81 | no | — | not solid; accepted page in top 5 |
| CAL-015 | WEAK | page | letting a model look things up in my own documents before answering | (weak) rag | 70 | no | — | not solid; accepted page in top 5 |
| CAL-016 | WEAK | page | teaching an existing model my company's style with more training | (weak) fine-tuning | 61 | no | — | not solid; accepted page in top 5 |
| CAL-017 | WEAK | page | run a language model on my own laptop without internet | (weak) local-ai | 77 | no | — | not solid; accepted page in top 5 |
| CAL-018 | WEAK | page | is it safe to give a chatbot confidential company information | (weak) ai-privacy-and-security | 69 | no | — | not solid; accepted page in top 5 |
| CAL-019 | WEAK | page | a malicious web page tells my assistant to ignore its rules | (weak) system-prompts | 75 | no | — | not solid; accepted page in top 5 |
| CAL-020 | WEAK | page | a model that plans steps and uses software on its own to finish a goal | (weak) ai-agent-vs-chatbot | 84 | no | — | not solid; accepted page in top 5 |
| CAL-021 | MISS | page | how can a model press buttons in other programs | (weak) oauth | 55 | no | — | no accepted page in top 5 |
| CAL-022 | WEAK | page | getting the model to return a call to my function with arguments | (weak) function-calling | 72 | no | — | not solid; accepted page in top 5 |
| CAL-023 | WEAK | page | how does an assistant remember things between sessions | (weak) common-prompting-mistakes | 62 | no | — | not solid; accepted page in top 5 |
| CAL-024 | MISS | page | several specialised bots cooperating on a job | (weak) a2a-protocol | 49 | no | — | no accepted page in top 5 |
| CAL-025 | WEAK | page | a standard way for assistants to plug into external data sources | (weak) mcp | 68 | no | — | not solid; accepted page in top 5 |
| CAL-026 | WEAK | page | which is better for adding knowledge, retrieval or extra training | (weak) rag-vs-fine-tuning | 63 | no | — | not solid; accepted page in top 5 |
| CAL-027 | WEAK | page | difference between a simple chat bot and an autonomous one | (weak) teams-development | 63 | no | — | not solid; accepted page in top 5 |
| CAL-028 | WEAK | page | using python to call a hosted language model | (weak) python | 84 | no | — | not solid; accepted page in top 5 |
| CAL-029 | WEAK | page | which python packages should i learn for machine learning work | (weak) python-for-ai | 84 | no | — | not solid; accepted page in top 5 |
| CAL-030 | MISS | page | showing the answer word by word as it is generated | (weak) tokens | 73 | no | — | no accepted page in top 5 |
| CAL-031 | FALSE POSITIVE | page | building a chat window in a javascript ui library | react | 92 | yes | — | confident wrong page: react |
| CAL-032 | WEAK | page | which toolkit to pick for building an assistant with tools | (weak) teams-development | 71 | no | — | not solid; accepted page in top 5 |
| CAL-033 | MISS | page | where should i keep records for an ai powered app | (weak) ollama | 69 | no | — | no accepted page in top 5 |
| CAL-034 | MISS | page | how does a bot get permission to read my email | (weak) authentication-vs-authorization | 83 | no | — | no accepted page in top 5 |
| CAL-035 | MISS | page | a format for data made of curly braces and key value pairs | (weak) lora-and-peft | 40 | no | — | no accepted page in top 5 |
| CAL-036 | MISS | page | how do two programs talk to each other over the web | (weak) build-spfx-web-part | 74 | no | — | no accepted page in top 5 |
| CAL-037 | WEAK | page | proving who you are when calling a web service | (weak) agent-tools | 52 | no | — | not solid; accepted page in top 5 |
| CAL-038 | WEAK | page | microsoft's workplace intranet and document libraries | (weak) sharepoint | 83 | no | — | not solid; accepted page in top 5 |
| CAL-039 | PASS | page | custom components for microsoft's intranet written in typescript | sharepoint-framework | 96 | yes | — |  |
| CAL-040 | PASS | page | microsoft's api for accessing mail, files and calendars of users | microsoft-graph | 97 | yes | — |  |
| CAL-041 | WEAK | page | low code apps and automations from microsoft | (weak) power-platform | 84 | no | — | not solid; accepted page in top 5 |
| CAL-042 | PASS | page | microsoft's cloud identity and sign in service | microsoft-entra-id | 96 | yes | — |  |
| CAL-043 | PASS | page | hosted open model hub and libraries for transformers | hugging-face | 91 | yes | — |  |
| CAL-044 | WEAK | page | popular toolkit for chaining llm calls together | (weak) javascript-for-ai | 66 | no | — | not solid; accepted page in top 5 |
| CAL-045 | WEAK | page | programs that load and serve open models on a personal computer | (weak) local-ai | 81 | no | — | not solid; accepted page in top 5 |
| CAL-046 | WEAK | page | a language that adds types on top of the web scripting language | (weak) javascript | 81 | no | — | not solid; accepted page in top 5 |
| CAL-047 | WEAK | page | systems language focused on memory safety without garbage collection | (weak) rust | 48 | no | — | not solid; accepted page in top 5 |
| CAL-048 | WEAK | page | the markup and styling languages every web page uses | (weak) html-and-css | 57 | no | — | not solid; accepted page in top 5 |
| CAL-049 | FALSE POSITIVE | page | server side runtime that runs scripts outside the browser | javascript-for-ai | 91 | yes | — | confident wrong page: javascript-for-ai |
| CAL-050 | PASS | page | query language for asking relational tables questions | sql | 87 | yes | — |  |
| CAL-051 | PASS | page | relational database with a strong extension ecosystem | postgresql | 93 | yes | — |  |
| CAL-052 | WEAK | page | storing documents as flexible json instead of tables | (weak) what-is-json | 75 | no | — | not solid; accepted page in top 5 |
| CAL-053 | WEAK | page | fast in memory store used for caching | (weak) redis | 70 | no | — | not solid; accepted page in top 5 |
| CAL-054 | MISS | page | versioning code and collaborating with branches | (weak) multi-agent-systems | 47 | no | — | no accepted page in top 5 |
| CAL-055 | MISS | page | packaging apps with all dependencies to run anywhere | (weak) teams-development | 84 | no | — | no accepted page in top 5 |
| CAL-056 | WEAK | page | automatically testing and deploying every commit | (weak) cicd | 67 | no | — | not solid; accepted page in top 5 |
| CAL-057 | WEAK | page | secrets kept outside source code as configuration | (weak) environment-variables | 69 | no | — | not solid; accepted page in top 5 |
| CAL-058 | MISS | page | signed tokens a server hands out after login | (weak) authentication-vs-authorization | 78 | no | — | no accepted page in top 5 |
| CAL-059 | MISS | page | browser rule that blocks requests to other websites | (weak) teams-development | 67 | no | — | no accepted page in top 5 |
| CAL-060 | PASS | page | a server calls my url when something happens | webhooks | 86 | yes | — |  |
| CAL-061 | MISS | page | letting the model think longer before replying improves answers | (weak) chain-of-thought | 67 | no | — | no accepted page in top 5 |
| CAL-062 | FALSE POSITIVE | page | models that show step by step thinking before the final answer | chain-of-thought | 93 | yes | — | confident wrong page: chain-of-thought |
| CAL-063 | WEAK | page | asking the model to explain its steps in sequence | (weak) chain-of-thought | 83 | no | — | not solid; accepted page in top 5 |
| CAL-064 | WEAK | page | sampling many answers and picking the most common | (weak) self-consistency | 71 | no | — | not solid; accepted page in top 5 |
| CAL-065 | MISS | page | controlling randomness when a model picks the next word | (weak) large-language-models | 64 | no | — | no accepted page in top 5 |
| CAL-066 | MISS | page | forcing output to follow a defined shape | (weak) prompt-engineering | 53 | no | — | no accepted page in top 5 |
| CAL-067 | WEAK | page | a description of allowed fields and types for data | (weak) json-validation | 77 | no | — | not solid; accepted page in top 5 |
| CAL-068 | MISS | page | learning from labelled input output pairs | (weak) dpo | 44 | no | — | no accepted page in top 5 |
| CAL-069 | MISS | page | finding patterns in data without answers provided | (weak) common-prompting-mistakes | 74 | no | — | no accepted page in top 5 |
| CAL-070 | PASS | page | layers of connected units that learn weights | neural-networks | 88 | yes | — |  |
| CAL-071 | WEAK | page | how weights are adjusted by following the slope of the error | (weak) backpropagation-and-gradient-descent | 54 | no | — | not solid; accepted page in top 5 |
| CAL-072 | WEAK | page | when a model memorises training data and fails on new data | (weak) overfitting-and-regularization | 78 | no | — | not solid; accepted page in top 5 |
| CAL-073 | WEAK | page | reusing a pretrained network for a new task | (weak) transfer-learning | 67 | no | — | not solid; accepted page in top 5 |
| CAL-074 | WEAK | page | agents that learn by trial reward and penalty | (weak) reinforcement-learning | 83 | no | — | not solid; accepted page in top 5 |
| CAL-075 | WEAK | page | networks designed for grids of pixels | (weak) convolutional-neural-networks | 73 | no | — | not solid; accepted page in top 5 |
| CAL-076 | WEAK | page | networks that process sequences one step at a time with a hidden state | (weak) recurrent-neural-networks | 82 | no | — | not solid; accepted page in top 5 |
| CAL-077 | WEAK | page | splitting images into patches and applying attention | (weak) vision-transformers | 83 | no | — | not solid; accepted page in top 5 |
| CAL-078 | WEAK | page | only some specialist subnetworks are activated per input | (weak) mixture-of-experts | 48 | no | — | not solid; accepted page in top 5 |
| CAL-079 | PASS | page | sequence models that avoid quadratic attention cost | state-space-models | 92 | yes | — |  |
| CAL-080 | WEAK | page | systems that generate images by gradually removing noise | (weak) diffusion-models | 77 | no | — | not solid; accepted page in top 5 |
| CAL-081 | MISS | page | two networks competing, one forging and one detecting | (weak) ai-materials-discovery | 53 | no | — | no accepted page in top 5 |
| CAL-082 | WEAK | page | networks that operate on nodes and edges | (weak) graph-neural-networks | 85 | no | — | not solid; accepted page in top 5 |
| CAL-083 | WEAK | page | caching attention keys and values to speed generation | (weak) kv-cache | 82 | no | — | not solid; accepted page in top 5 |
| CAL-084 | WEAK | page | encoding the order of words in a sequence | (weak) positional-encoding | 85 | no | — | not solid; accepted page in top 5 |
| CAL-085 | WEAK | page | how performance improves as models and data grow | (weak) benchmarks-and-leaderboards | 59 | no | — | not solid; accepted page in top 5 |
| CAL-086 | WEAK | page | training a base model to follow user instructions | (weak) instruction-tuning | 63 | no | — | not solid; accepted page in top 5 |
| CAL-087 | PASS | page | cheap adaptation by training small low rank matrices | lora-and-peft | 88 | yes | — |  |
| CAL-088 | WEAK | page | shrinking model weights to fewer bits to save memory | (weak) quantization | 75 | no | — | not solid; accepted page in top 5 |
| CAL-089 | PASS | page | a small student model learns to imitate a big teacher | knowledge-distillation | 93 | yes | — |  |
| CAL-090 | PASS | page | small draft model proposes tokens a bigger model verifies | speculative-decoding | 90 | yes | — |  |
| CAL-091 | PASS | page | compact models that run on phones | small-language-models | 87 | yes | — |  |
| CAL-092 | WEAK | page | models whose parameters you can download | (weak) open-weights-models | 72 | no | — | not solid; accepted page in top 5 |
| CAL-093 | WEAK | page | models that answer questions about pictures | (weak) vision-language-models | 70 | no | — | not solid; accepted page in top 5 |
| CAL-094 | WEAK | page | converting spoken audio to text and back | (weak) speech-ai | 51 | no | — | not solid; accepted page in top 5 |
| CAL-095 | PASS | page | extracting information from scanned forms and pdfs | document-understanding-ai | 89 | yes | — |  |
| CAL-096 | MISS | page | agents talking to each other using a shared protocol from google | (weak) gmail-for-ai-agents | 76 | no | — | no accepted page in top 5 |
| CAL-097 | WEAK | page | security risks when assistants connect to tool servers | (weak) mcp-security | 84 | no | — | not solid; accepted page in top 5 |
| CAL-098 | WEAK | page | graph based framework for stateful agent workflows | (weak) choosing-an-agent-framework | 79 | no | — | not solid; accepted page in top 5 |
| CAL-099 | WEAK | page | serving models fast with paged attention | (weak) vllm | 83 | no | — | not solid; accepted page in top 5 |
| CAL-100 | MISS | page | loading quantised models in plain c plus plus | (weak) ollama | 61 | no | — | no accepted page in top 5 |
| CAL-101 | WEAK | page | simple command line tool to download and chat with local models | (weak) ollama | 85 | no | — | not solid; accepted page in top 5 |
| CAL-102 | MISS | page | a library for training deep networks popular in research | (weak) neural-networks | 76 | no | — | no accepted page in top 5 |
| CAL-103 | WEAK | page | alternate between thinking and acting with observations | (weak) thinking-budgets | 62 | no | — | not solid; accepted page in top 5 |
| CAL-104 | WEAK | page | agents that click and type on a computer screen | (weak) computer-use-agents | 84 | no | — | not solid; accepted page in top 5 |
| CAL-105 | WEAK | page | running generated code safely in isolation | (weak) code-execution-sandboxing | 81 | no | — | not solid; accepted page in top 5 |
| CAL-106 | WEAK | page | combine keyword and meaning search then reorder results | (weak) hybrid-search-and-reranking | 75 | no | — | not solid; accepted page in top 5 |
| CAL-107 | WEAK | page | retrieval over a network of connected entities | (weak) graph-rag | 85 | no | — | not solid; accepted page in top 5 |
| CAL-108 | PASS | page | deciding what information goes into the model's window | context-engineering | 85 | yes | — |  |
| CAL-109 | WEAK | page | public scoreboards comparing models | (weak) object-detection | 38 | no | — | not solid; accepted page in top 5 |
| CAL-110 | WEAK | page | test questions leaking into training data | (weak) benchmark-contamination | 71 | no | — | not solid; accepted page in top 5 |
| CAL-111 | WEAK | page | using a strong model to grade other model answers | (weak) gsm8k-and-math-benchmarks | 70 | no | — | not solid; accepted page in top 5 |
| CAL-112 | WEAK | page | measuring how good retrieval and answers are in a rag system | (weak) rag-evaluation | 77 | no | — | not solid; accepted page in top 5 |
| CAL-113 | MISS | page | deploying models to production and keeping them healthy | (weak) instruction-tuning | 63 | no | — | no accepted page in top 5 |
| CAL-114 | WEAK | page | chips that make training fast | (weak) gpus-and-ai-accelerators | 50 | no | — | not solid; accepted page in top 5 |
| CAL-115 | WEAK | page | splitting training across many machines | (weak) distributed-training | 75 | no | — | not solid; accepted page in top 5 |
| CAL-116 | MISS | page | seeing what happens inside every model call in production | (weak) ai-agent-vs-chatbot | 70 | no | — | no accepted page in top 5 |
| CAL-117 | WEAK | page | input data changing so a deployed model gets worse | (weak) speculative-decoding | 60 | no | — | not solid; accepted page in top 5 |
| CAL-118 | PASS | page | reusing repeated prompt prefixes to save money | prompt-caching | 89 | yes | — |  |
| CAL-119 | MISS | page | making a model behave in line with human values | (weak) large-language-models | 73 | no | — | no accepted page in top 5 |
| CAL-120 | WEAK | page | training from human comparisons of two answers | (weak) supervised-learning | 78 | no | — | not solid; accepted page in top 5 |
| CAL-121 | WEAK | page | model flatters the user instead of being accurate | (weak) sycophancy | 41 | no | — | not solid; accepted page in top 5 |
| CAL-122 | WEAK | page | attacking a system on purpose to find its weaknesses | (weak) red-teaming | 56 | no | — | not solid; accepted page in top 5 |
| CAL-123 | WEAK | page | filters that block unsafe inputs and outputs | (weak) ai-guardrails | 59 | no | — | not solid; accepted page in top 5 |
| CAL-124 | WEAK | page | studying circuits inside networks to understand them | (weak) mechanistic-interpretability | 69 | no | — | not solid; accepted page in top 5 |
| CAL-125 | WEAK | page | unfair outcomes for certain groups from automated decisions | (weak) ai-bias-and-fairness | 64 | no | — | not solid; accepted page in top 5 |
| CAL-126 | FALSE POSITIVE | page | rules and oversight for responsible ai in organisations | eu-ai-act | 91 | yes | — | confident wrong page: eu-ai-act |
| CAL-127 | WEAK | page | european law classifying systems by risk | (weak) eu-ai-act | 74 | no | — | not solid; accepted page in top 5 |
| CAL-128 | WEAK | page | documentation describing a model's intended use and limits | (weak) model-cards | 81 | no | — | not solid; accepted page in top 5 |
| CAL-129 | WEAK | page | list of the top vulnerabilities for llm applications | (weak) owasp-llm-top-10 | 76 | no | — | not solid; accepted page in top 5 |
| CAL-130 | WEAK | page | predicting three dimensional protein shapes | (weak) alphafold | 81 | no | — | not solid; accepted page in top 5 |
| CAL-131 | WEAK | page | systems that physically interact with the world using perception and action | (weak) world-models | 64 | no | — | not solid; accepted page in top 5 |
| CAL-132 | PASS | page | learning from demonstrations by an expert | imitation-learning | 92 | yes | — |  |
| CAL-133 | FALSE POSITIVE | page | moving a policy from simulation to a physical robot | embodied-ai | 86 | yes | — | confident wrong page: embodied-ai |
| CAL-134 | WEAK | page | orchestrating containers across many machines | (weak) containers | 78 | no | — | not solid; accepted page in top 5 |
| CAL-135 | MISS | page | finding and locating items in pictures with boxes | (weak) agent-memory | 56 | no | — | no accepted page in top 5 |
| CAL-136 | FALSE POSITIVE | page | european privacy regulation and automated processing | eu-ai-act | 91 | yes | — | confident wrong page: eu-ai-act |
| CAL-N01 | PASS | neg | toy transformer robot for kids birthday | (weak) multimodal-ai | 49 | no | — | no confident answer |
| CAL-N02 | PASS | neg | are mamba snakes dangerous | (weak) state-space-models | 48 | no | — | no confident answer |
| CAL-N03 | PASS | neg | can my python pet eat mice | (weak) python | 46 | no | — | no confident answer |
| CAL-N04 | PASS | neg | react to this message politely | (weak) react-chatbot-state | 70 | no | — | no confident answer |
| CAL-N05 | PASS | neg | docker is a clothing brand right | (weak) docker | 61 | no | — | no confident answer |
| CAL-N06 | PASS | neg | find a real estate agent near me | (weak) ai-agent-vs-chatbot | 58 | no | — | no confident answer |
| CAL-N07 | PASS | neg | buy a model train set | (weak) gpus-and-ai-accelerators | 67 | no | — | no confident answer |
| CAL-N08 | PASS | neg | how to bake sourdough bread | (weak) tokens | 43 | no | — | no confident answer |
| CAL-N09 | PASS | neg | best pizza in rome | (weak) function-calling | 38 | no | — | no confident answer |
| CAL-N10 | PASS | neg | cheapest flights to lisbon | (weak) cicd | 36 | no | — | no confident answer |
| CAL-N11 | PASS | neg | how do i fix a leaking tap | (weak) prompt-injection | 53 | no | — | no confident answer |
| CAL-N12 | PASS | neg | symptoms of the flu | (weak) red-teaming | 34 | no | — | no confident answer |
| CAL-N13 | PASS | neg | who won the world cup in 2010 | (weak) mmlu | 48 | no | — | no confident answer |
| CAL-N14 | PASS | neg | knit a scarf for beginners | (weak) rag-with-python | 52 | no | — | no confident answer |
| CAL-N15 | PASS | neg | go for a walk after dinner | (weak) function-calling | 57 | no | — | no confident answer |
| CAL-N16 | PASS | neg | swift flight of a bird | (weak) chain-of-thought | 37 | no | — | no confident answer |
| CAL-N17 | PASS | neg | rust on my bicycle chain how to remove | (weak) rust | 68 | no | — | no confident answer |
| CAL-N18 | PASS | neg | java coffee beans origin | (weak) java | 47 | no | — | no confident answer |
| CAL-N19 | PASS | neg | ruby gemstone value | (weak) python | 41 | no | — | no confident answer |
| CAL-N20 | PASS | neg | agent 007 movie order | (weak) crewai | 42 | no | — | no confident answer |
| CAL-N21 | PASS | neg | fashion model portfolio tips | (weak) small-language-models | 33 | no | — | no confident answer |
| CAL-N22 | PASS | neg | how to train for a marathon | (weak) pytorch | 40 | no | — | no confident answer |
| CAL-N23 | PASS | neg | token of appreciation gift ideas | (weak) tokens | 45 | no | — | no confident answer |
| CAL-N24 | PASS | neg | embedding a screw in drywall | (weak) positional-encoding | 53 | no | — | no confident answer |
| CAL-N25 | PASS | neg | cloud formations explained for kids | (weak) deep-learning | 42 | no | — | no confident answer |
| CAL-N26 | PASS | neg | apple pie recipe | (weak) gpus-and-ai-accelerators | 49 | no | — | no confident answer |
| CAL-N27 | PASS | neg | what is the weather tomorrow | (weak) ai-weather-forecasting | 79 | no | — | no confident answer |
| CAL-N28 | PASS | neg | stock market tips for beginners | (weak) python | 37 | no | — | no confident answer |
| CAL-N29 | PASS | neg | learn guitar chords fast | (weak) transformers | 40 | no | — | no confident answer |
| CAL-N30 | PASS | neg | mortgage rates today | (weak) redis | 44 | no | — | no confident answer |
| CAL-N31 | PASS | neg | tips for a job interview | (weak) rag | 57 | no | — | no confident answer |
| CAL-N32 | PASS | neg | how to grow tomatoes | (weak) python-data-for-ai | 33 | no | — | no confident answer |
| CAL-N33 | PASS | neg | ambassador reception dress code | (weak) system-prompts | 42 | no | — | no confident answer |
| CAL-N34 | PASS | neg | spark plug replacement steps | (weak) system-prompts | 44 | no | — | no confident answer |
| CAL-N35 | PASS | neg | bridge card game rules | (weak) sim-to-real-transfer | 59 | no | — | no confident answer |
| CAL-N36 | PASS | neg | sage herb cooking uses | (weak) rag-vs-fine-tuning | 31 | no | — | no confident answer |
| CAL-N37 | PASS | neg | oracle of delphi history | (weak) microsoft-365 | 56 | no | — | no confident answer |
| CAL-N38 | PASS | neg | chrome plated bumper cleaning | (weak) html-and-css | 44 | no | — | no confident answer |
| CAL-N39 | PASS | neg | spring cleaning checklist | (weak) choosing-an-agent-framework | 46 | no | — | no confident answer |
| CAL-N40 | PASS | neg | kernel of corn popcorn tips | (weak) semantic-kernel | 38 | no | — | no confident answer |
| CAL-G01 | PASS | gap | how do i set up terraform modules | (weak) package-managers | 65 | no | — | transparent non-answer |
| CAL-G02 | PASS | gap | what is a service mesh like istio | (weak) hugging-face | 59 | no | — | transparent non-answer |
| CAL-G03 | PASS | gap | explain apache kafka partitions | (weak) rag-frameworks | 27 | no | — | transparent non-answer |
| CAL-G04 | PASS | gap | write an ansible playbook | (weak) html-and-css | 48 | no | — | transparent non-answer |
| CAL-G05 | PASS | gap | best linux distro for servers | (weak) containers | 75 | no | — | transparent non-answer |
| CAL-G06 | PASS | gap | federated learning on phones | (weak) pytorch | 37 | no | — | transparent non-answer |
| CAL-G07 | PASS | gap | differential privacy for datasets | (weak) physics-informed-neural-networks | 69 | no | — | transparent non-answer |
| CAL-G08 | PASS | gap | time series forecasting with prophet | (weak) ai-weather-forecasting | 50 | no | — | transparent non-answer |
| CAL-G09 | PASS | gap | how do recommender systems rank movies | (weak) video-generation-models | 49 | no | — | transparent non-answer |
| CAL-G10 | PASS | gap | configuring nginx reverse proxy | (weak) streaming-ai-with-nodejs | 53 | no | — | transparent non-answer |
| CAL-G11 | PASS | gap | angular vs vue for a new project | (weak) transformers-vs-state-space-models | 49 | no | — | transparent non-answer |
| CAL-G12 | PASS | gap | setting up tls certificates with letsencrypt | (weak) redis | 39 | no | — | transparent non-answer |
