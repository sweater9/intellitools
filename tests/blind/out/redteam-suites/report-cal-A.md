# Knowledge red-team report — cal-A

Dataset: `tests/redteam/calibration-semantic.json` sha256 `981c61d4ae5eeaccf380da163bd08de840761f2999a5489bdf9e868b186b03b7`

Total 188 · PASS 73 · WEAK 44 · MISS 49 · FALSE POSITIVE 22
Pass rate 38.8% · False-positive rate 11.7%
Retrieval on page-kind queries (136): top-1 27.9% · top-3 42.6% · top-5 59.6%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 12 | 12 | 0 | 0 | 0 | 100.0% |
| neg | 40 | 39 | 0 | 0 | 1 | 97.5% |
| page | 136 | 22 | 44 | 49 | 21 | 16.2% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 40 | 39 | 0 | 0 | 1 | 97.5% |
| gap | 12 | 12 | 0 | 0 | 0 | 100.0% |
| paraphrase | 136 | 22 | 44 | 49 | 21 | 16.2% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| cal | 188 | 73 | 44 | 49 | 22 | 38.8% |

## FALSE POSITIVE
- CAL-001 [page/paraphrase] "a program that learns from examples instead of explicit rules" → supervised-learning (score 47, solid yes) — expected what-is-ai; confident wrong page: supervised-learning
- CAL-009 [page/paraphrase] "the hidden instructions that set the assistant's personality" → prompt-injection (score 56, solid yes) — expected system-prompts; confident wrong page: prompt-injection
- CAL-028 [page/paraphrase] "using python to call a hosted language model" → python (score 51, solid yes) — expected calling-ai-apis-with-python; confident wrong page: python
- CAL-029 [page/paraphrase] "which python packages should i learn for machine learning work" → python (score 49, solid yes) — expected python-ai-libraries; confident wrong page: python
- CAL-031 [page/paraphrase] "building a chat window in a javascript ui library" → javascript (score 55, solid yes) — expected react-ai-interfaces; confident wrong page: javascript
- CAL-032 [page/paraphrase] "which toolkit to pick for building an assistant with tools" → agent-tools (score 37, solid yes) — expected choosing-an-agent-framework; confident wrong page: agent-tools
- CAL-033 [page/paraphrase] "where should i keep records for an ai powered app" → api-keys (score 44, solid yes) — expected databases-for-ai-apps; confident wrong page: api-keys
- CAL-034 [page/paraphrase] "how does a bot get permission to read my email" → gmail-for-ai-agents (score 52, solid yes) — expected oauth-for-ai-agents; confident wrong page: gmail-for-ai-agents
- CAL-039 [page/paraphrase] "custom components for microsoft's intranet written in typescript" → typescript (score 61, solid yes) — expected sharepoint-framework; confident wrong page: typescript
- CAL-044 [page/paraphrase] "popular toolkit for chaining llm calls together" → large-language-models (score 27, solid yes) — expected langchain; confident wrong page: large-language-models
- CAL-045 [page/paraphrase] "programs that load and serve open models on a personal computer" → open-weights-models (score 108, solid yes) — expected local-llm-runtimes; confident wrong page: open-weights-models
- CAL-051 [page/paraphrase] "relational database with a strong extension ecosystem" → sql (score 51, solid yes) — expected postgresql; confident wrong page: sql
- CAL-058 [page/paraphrase] "signed tokens a server hands out after login" → tokens (score 34, solid yes) — expected json-web-tokens; confident wrong page: tokens
- CAL-061 [page/paraphrase] "letting the model think longer before replying improves answers" → reasoning-models (score 45, solid yes) — expected test-time-compute; confident wrong page: reasoning-models
- CAL-077 [page/paraphrase] "splitting images into patches and applying attention" → transformers (score 34, solid yes) — expected vision-transformers; confident wrong page: transformers
- CAL-083 [page/paraphrase] "caching attention keys and values to speed generation" → transformers (score 42, solid yes) — expected kv-cache; confident wrong page: transformers
- CAL-100 [page/paraphrase] "loading quantised models in plain c plus plus" → csharp (score 20, solid yes) — expected llama-cpp; confident wrong page: csharp
- CAL-112 [page/paraphrase] "measuring how good retrieval and answers are in a rag system" → rag (score 62, solid yes) — expected rag-evaluation; confident wrong page: rag
- CAL-129 [page/paraphrase] "list of the top vulnerabilities for llm applications" → large-language-models (score 27, solid yes) — expected owasp-llm-top-10; confident wrong page: large-language-models
- CAL-133 [page/paraphrase] "moving a policy from simulation to a physical robot" → reinforcement-learning (score 21, solid yes) — expected sim-to-real-transfer; confident wrong page: reinforcement-learning
- CAL-134 [page/paraphrase] "orchestrating containers across many machines" → containers (score 32, solid yes) — expected kubernetes; confident wrong page: containers
- CAL-N24 [neg/ambiguous-or-off-topic] "embedding a screw in drywall" → embeddings (score 44, solid yes) — expected none; confident answer for out-of-scope query: embeddings

## MISS
- CAL-002 [page/paraphrase] "software that writes new text and images on its own" → (weak) contrastive-learning-clip (score 12, solid no) — expected generative-ai; no accepted page in top 5
- CAL-003 [page/paraphrase] "chatbots like the ones everyone talks about, how are they built" → (weak) agent-tools (score 4, solid no) — expected large-language-models; no accepted page in top 5
- CAL-004 [page/paraphrase] "why do language models chop words into pieces" → (weak) small-language-models (score 62, solid no) — expected tokens; no accepted page in top 5
- CAL-006 [page/paraphrase] "the architecture behind modern chat models that looks at all words at once" → (weak) reasoning-models (score 40, solid no) — expected transformers; no accepted page in top 5
- CAL-007 [page/paraphrase] "models that understand pictures as well as words" → (weak) reasoning-models (score 40, solid no) — expected multimodal-ai; no accepted page in top 5
- CAL-008 [page/paraphrase] "how to phrase instructions so the model does what i want" → (weak) model-cards (score 28, solid no) — expected prompt-engineering; no accepted page in top 5
- CAL-015 [page/paraphrase] "letting a model look things up in my own documents before answering" → (weak) model-cards (score 29, solid no) — expected rag; no accepted page in top 5
- CAL-020 [page/paraphrase] "a model that plans steps and uses software on its own to finish a goal" → (weak) model-cards (score 29, solid no) — expected ai-agents; no accepted page in top 5
- CAL-021 [page/paraphrase] "how can a model press buttons in other programs" → (weak) model-cards (score 28, solid no) — expected agent-tools; no accepted page in top 5
- CAL-025 [page/paraphrase] "a standard way for assistants to plug into external data sources" → (weak) gdpr-and-ai (score 29, solid no) — expected mcp; no accepted page in top 5
- CAL-026 [page/paraphrase] "which is better for adding knowledge, retrieval or extra training" → (weak) rag (score 46, solid no) — expected rag-vs-fine-tuning; no accepted page in top 5
- CAL-030 [page/paraphrase] "showing the answer word by word as it is generated" → (weak) gsm8k-and-math-benchmarks (score 11, solid no) — expected streaming-ai-responses; no accepted page in top 5
- CAL-035 [page/paraphrase] "a format for data made of curly braces and key value pairs" → (weak) gdpr-and-ai (score 29, solid no) — expected what-is-json; no accepted page in top 5
- CAL-036 [page/paraphrase] "how do two programs talk to each other over the web" → (weak) build-spfx-web-part (score 30, solid no) — expected what-is-an-api; no accepted page in top 5
- CAL-037 [page/paraphrase] "proving who you are when calling a web service" → (weak) build-spfx-web-part (score 30, solid no) — expected api-authentication; no accepted page in top 5
- CAL-040 [page/paraphrase] "microsoft's api for accessing mail, files and calendars of users" → (weak) api-keys (score 34, solid no) — expected microsoft-graph; no accepted page in top 5
- CAL-042 [page/paraphrase] "microsoft's cloud identity and sign in service" → (weak) local-ai-vs-cloud-ai (score 26, solid no) — expected microsoft-entra-id; no accepted page in top 5
- CAL-046 [page/paraphrase] "a language that adds types on top of the web scripting language" → (weak) build-spfx-web-part (score 30, solid no) — expected typescript; no accepted page in top 5
- CAL-047 [page/paraphrase] "systems language focused on memory safety without garbage collection" → (weak) agent-memory (score 34, solid no) — expected rust; no accepted page in top 5
- CAL-048 [page/paraphrase] "the markup and styling languages every web page uses" → (weak) build-spfx-web-part (score 30, solid no) — expected html-and-css; no accepted page in top 5
- CAL-052 [page/paraphrase] "storing documents as flexible json instead of tables" → (weak) json-validation (score 30, solid no) — expected mongodb; no accepted page in top 5
- CAL-053 [page/paraphrase] "fast in memory store used for caching" → (weak) agent-memory (score 38, solid no) — expected redis; no accepted page in top 5
- CAL-054 [page/paraphrase] "versioning code and collaborating with branches" → (weak) code-execution-sandboxing (score 34, solid no) — expected git; no accepted page in top 5
- CAL-055 [page/paraphrase] "packaging apps with all dependencies to run anywhere" → (weak) connecting-agents-to-apps (score 10, solid no) — expected docker; no accepted page in top 5
- CAL-056 [page/paraphrase] "automatically testing and deploying every commit" → (weak) red-teaming (score 15, solid no) — expected cicd; no accepted page in top 5
- CAL-063 [page/paraphrase] "asking the model to explain its steps in sequence" → (weak) model-cards (score 28, solid no) — expected chain-of-thought; no accepted page in top 5
- CAL-065 [page/paraphrase] "controlling randomness when a model picks the next word" → (weak) model-cards (score 28, solid no) — expected sampling-and-decoding; no accepted page in top 5
- CAL-067 [page/paraphrase] "a description of allowed fields and types for data" → (weak) gdpr-and-ai (score 29, solid no) — expected json-schema; no accepted page in top 5
- CAL-069 [page/paraphrase] "finding patterns in data without answers provided" → (weak) gdpr-and-ai (score 29, solid no) — expected unsupervised-learning; no accepted page in top 5
- CAL-071 [page/paraphrase] "how weights are adjusted by following the slope of the error" → (weak) open-weights-models (score 22, solid no) — expected backpropagation-and-gradient-descent; no accepted page in top 5
- CAL-072 [page/paraphrase] "when a model memorises training data and fails on new data" → (weak) gdpr-and-ai (score 44, solid no) — expected overfitting-and-regularization; no accepted page in top 5
- CAL-074 [page/paraphrase] "agents that learn by trial reward and penalty" → (weak) openai-agents-sdk (score 36, solid no) — expected reinforcement-learning; no accepted page in top 5
- CAL-085 [page/paraphrase] "how performance improves as models and data grow" → (weak) reasoning-models (score 40, solid no) — expected scaling-laws; no accepted page in top 5
- CAL-088 [page/paraphrase] "shrinking model weights to fewer bits to save memory" → (weak) agent-memory (score 34, solid no) — expected quantization; no accepted page in top 5
- CAL-092 [page/paraphrase] "models whose parameters you can download" → (weak) reasoning-models (score 40, solid no) — expected open-weights-models; no accepted page in top 5
- CAL-093 [page/paraphrase] "models that answer questions about pictures" → (weak) reasoning-models (score 40, solid no) — expected vision-language-models; no accepted page in top 5
- CAL-101 [page/paraphrase] "simple command line tool to download and chat with local models" → (weak) reasoning-models (score 40, solid no) — expected ollama; no accepted page in top 5
- CAL-102 [page/paraphrase] "a library for training deep networks popular in research" → (weak) deep-learning (score 33, solid no) — expected pytorch; no accepted page in top 5
- CAL-103 [page/paraphrase] "alternate between thinking and acting with observations" → (weak) thinking-budgets (score 19, solid no) — expected react-agent-pattern; no accepted page in top 5
- CAL-107 [page/paraphrase] "retrieval over a network of connected entities" → (weak) agentic-rag (score 44, solid no) — expected graph-rag; no accepted page in top 5
- CAL-108 [page/paraphrase] "deciding what information goes into the model's window" → (weak) reasoning-models (score 40, solid no) — expected context-engineering; no accepted page in top 5
- CAL-109 [page/paraphrase] "public scoreboards comparing models" → (weak) reasoning-models (score 40, solid no) — expected benchmarks-and-leaderboards; no accepted page in top 5
- CAL-113 [page/paraphrase] "deploying models to production and keeping them healthy" → (weak) reasoning-models (score 40, solid no) — expected mlops; no accepted page in top 5
- CAL-114 [page/paraphrase] "chips that make training fast" → (weak) distributed-training (score 13, solid no) — expected gpus-and-ai-accelerators; no accepted page in top 5
- CAL-116 [page/paraphrase] "seeing what happens inside every model call in production" → (weak) model-apis (score 32, solid no) — expected llm-observability; no accepted page in top 5
- CAL-119 [page/paraphrase] "making a model behave in line with human values" → (weak) model-cards (score 28, solid no) — expected ai-alignment; no accepted page in top 5
- CAL-121 [page/paraphrase] "model flatters the user instead of being accurate" → (weak) model-cards (score 28, solid no) — expected sycophancy; no accepted page in top 5
- CAL-122 [page/paraphrase] "attacking a system on purpose to find its weaknesses" → (weak) system-prompts (score 26, solid no) — expected red-teaming; no accepted page in top 5
- CAL-131 [page/paraphrase] "systems that physically interact with the world using perception and action" → (weak) world-models (score 26, solid no) — expected embodied-ai; no accepted page in top 5

## WEAK
- CAL-010 [page/paraphrase] "my assistant keeps making up facts, why" → (weak) ai-agent-vs-chatbot (score 18, solid no) — expected ai-hallucinations; not solid; accepted page in top 5
- CAL-011 [page/paraphrase] "ways to stop a chatbot inventing sources" → (weak) ai-agent-vs-chatbot (score 27, solid no) — expected how-to-reduce-hallucinations; not solid; accepted page in top 5
- CAL-012 [page/paraphrase] "turning sentences into lists of numbers so similar ones cluster" → (weak) kubernetes (score 9, solid no) — expected embeddings; not solid; accepted page in top 5
- CAL-013 [page/paraphrase] "database designed to find nearest neighbours of numeric representations" → (weak) vector-database-vs-traditional-database (score 32, solid no) — expected vector-databases; not solid; accepted page in top 5
- CAL-016 [page/paraphrase] "teaching an existing model my company's style with more training" → (weak) model-drift-and-monitoring (score 30, solid no) — expected fine-tuning; not solid; accepted page in top 5
- CAL-018 [page/paraphrase] "is it safe to give a chatbot confidential company information" → (weak) ai-agent-vs-chatbot (score 27, solid no) — expected ai-privacy-and-security; not solid; accepted page in top 5
- CAL-022 [page/paraphrase] "getting the model to return a call to my function with arguments" → (weak) function-calling (score 35, solid no) — expected function-calling; not solid; accepted page in top 5
- CAL-024 [page/paraphrase] "several specialised bots cooperating on a job" → (weak) agent-protocol-landscape (score 1, solid no) — expected multi-agent-systems; not solid; accepted page in top 5
- CAL-027 [page/paraphrase] "difference between a simple chat bot and an autonomous one" → (weak) ai-agent-vs-chatbot (score 19, solid no) — expected ai-agent-vs-chatbot; not solid; accepted page in top 5
- CAL-038 [page/paraphrase] "microsoft's workplace intranet and document libraries" → (weak) python-ai-libraries (score 24, solid no) — expected sharepoint; not solid; accepted page in top 5
- CAL-041 [page/paraphrase] "low code apps and automations from microsoft" → (weak) code-execution-sandboxing (score 34, solid no) — expected power-platform; not solid; accepted page in top 5
- CAL-049 [page/paraphrase] "server side runtime that runs scripts outside the browser" → (weak) onnx-runtime (score 28, solid no) — expected nodejs; not solid; accepted page in top 5
- CAL-050 [page/paraphrase] "query language for asking relational tables questions" → (weak) small-language-models (score 24, solid no) — expected sql; not solid; accepted page in top 5
- CAL-057 [page/paraphrase] "secrets kept outside source code as configuration" → (weak) code-execution-sandboxing (score 34, solid no) — expected environment-variables; not solid; accepted page in top 5
- CAL-059 [page/paraphrase] "browser rule that blocks requests to other websites" → (weak) computer-use-agents (score 14, solid no) — expected cors; not solid; accepted page in top 5
- CAL-062 [page/paraphrase] "models that show step by step thinking before the final answer" → (weak) reasoning-models (score 50, solid no) — expected reasoning-models; not solid; accepted page in top 5
- CAL-064 [page/paraphrase] "sampling many answers and picking the most common" → (weak) best-of-n-sampling (score 22, solid no) — expected self-consistency; not solid; accepted page in top 5
- CAL-066 [page/paraphrase] "forcing output to follow a defined shape" → (weak) structured-outputs (score 24, solid no) — expected structured-outputs; not solid; accepted page in top 5
- CAL-068 [page/paraphrase] "learning from labelled input output pairs" → (weak) deep-learning (score 34, solid no) — expected supervised-learning; not solid; accepted page in top 5
- CAL-070 [page/paraphrase] "layers of connected units that learn weights" → (weak) open-weights-models (score 22, solid no) — expected neural-networks; not solid; accepted page in top 5
- CAL-073 [page/paraphrase] "reusing a pretrained network for a new task" → (weak) agent-planning (score 12, solid no) — expected transfer-learning; not solid; accepted page in top 5
- CAL-075 [page/paraphrase] "networks designed for grids of pixels" → (weak) deep-q-networks (score 12, solid no) — expected convolutional-neural-networks; not solid; accepted page in top 5
- CAL-076 [page/paraphrase] "networks that process sequences one step at a time with a hidden state" → (weak) process-reward-model (score 39, solid no) — expected recurrent-neural-networks; not solid; accepted page in top 5
- CAL-078 [page/paraphrase] "only some specialist subnetworks are activated per input" → (weak) encoder-decoder-vs-decoder-only (score 17, solid no) — expected mixture-of-experts; not solid; accepted page in top 5
- CAL-080 [page/paraphrase] "systems that generate images by gradually removing noise" → (weak) multi-agent-systems (score 17, solid no) — expected diffusion-models; not solid; accepted page in top 5
- CAL-084 [page/paraphrase] "encoding the order of words in a sequence" → (weak) positional-encoding (score 16, solid no) — expected positional-encoding; not solid; accepted page in top 5
- CAL-086 [page/paraphrase] "training a base model to follow user instructions" → (weak) model-cards (score 28, solid no) — expected instruction-tuning; not solid; accepted page in top 5
- CAL-087 [page/paraphrase] "cheap adaptation by training small low rank matrices" → (weak) small-language-models (score 24, solid no) — expected lora-and-peft; not solid; accepted page in top 5
- CAL-091 [page/paraphrase] "compact models that run on phones" → (weak) small-language-models (score 45, solid no) — expected small-language-models; not solid; accepted page in top 5
- CAL-095 [page/paraphrase] "extracting information from scanned forms and pdfs" → (weak) document-understanding-ai (score 31, solid no) — expected document-understanding-ai; not solid; accepted page in top 5
- CAL-096 [page/paraphrase] "agents talking to each other using a shared protocol from google" → (weak) agent-protocol-landscape (score 45, solid no) — expected a2a-protocol; not solid; accepted page in top 5
- CAL-097 [page/paraphrase] "security risks when assistants connect to tool servers" → (weak) mcp-security (score 41, solid no) — expected mcp-security; not solid; accepted page in top 5
- CAL-104 [page/paraphrase] "agents that click and type on a computer screen" → (weak) computer-use-agents (score 58, solid no) — expected computer-use-agents; not solid; accepted page in top 5
- CAL-105 [page/paraphrase] "running generated code safely in isolation" → (weak) code-execution-sandboxing (score 60, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- CAL-110 [page/paraphrase] "test questions leaking into training data" → (weak) gdpr-and-ai (score 42, solid no) — expected benchmark-contamination; not solid; accepted page in top 5
- CAL-115 [page/paraphrase] "splitting training across many machines" → (weak) distributed-training (score 16, solid no) — expected distributed-training; not solid; accepted page in top 5
- CAL-118 [page/paraphrase] "reusing repeated prompt prefixes to save money" → (weak) system-prompts (score 25, solid no) — expected prompt-caching; not solid; accepted page in top 5
- CAL-120 [page/paraphrase] "training from human comparisons of two answers" → (weak) rlhf (score 20, solid no) — expected rlhf; not solid; accepted page in top 5
- CAL-123 [page/paraphrase] "filters that block unsafe inputs and outputs" → (weak) structured-outputs (score 14, solid no) — expected ai-guardrails; not solid; accepted page in top 5
- CAL-127 [page/paraphrase] "european law classifying systems by risk" → (weak) eu-ai-act (score 21, solid no) — expected eu-ai-act; not solid; accepted page in top 5
- CAL-128 [page/paraphrase] "documentation describing a model's intended use and limits" → (weak) model-cards (score 44, solid no) — expected model-cards; not solid; accepted page in top 5
- CAL-132 [page/paraphrase] "learning from demonstrations by an expert" → (weak) deep-learning (score 34, solid no) — expected imitation-learning; not solid; accepted page in top 5
- CAL-135 [page/paraphrase] "finding and locating items in pictures with boxes" → (weak) object-detection (score 3, solid no) — expected object-detection; not solid; accepted page in top 5
- CAL-136 [page/paraphrase] "european privacy regulation and automated processing" → (weak) ai-privacy-and-security (score 15, solid no) — expected gdpr-and-ai; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAL-001 | FALSE POSITIVE | page | a program that learns from examples instead of explicit rules | supervised-learning | 47 | yes | — | confident wrong page: supervised-learning |
| CAL-002 | MISS | page | software that writes new text and images on its own | (weak) contrastive-learning-clip | 12 | no | — | no accepted page in top 5 |
| CAL-003 | MISS | page | chatbots like the ones everyone talks about, how are they built | (weak) agent-tools | 4 | no | — | no accepted page in top 5 |
| CAL-004 | MISS | page | why do language models chop words into pieces | (weak) small-language-models | 62 | no | — | no accepted page in top 5 |
| CAL-005 | PASS | page | how much text can a model remember in one conversation | context-windows | 54 | yes | — |  |
| CAL-006 | MISS | page | the architecture behind modern chat models that looks at all words at once | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| CAL-007 | MISS | page | models that understand pictures as well as words | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| CAL-008 | MISS | page | how to phrase instructions so the model does what i want | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| CAL-009 | FALSE POSITIVE | page | the hidden instructions that set the assistant's personality | prompt-injection | 56 | yes | — | confident wrong page: prompt-injection |
| CAL-010 | WEAK | page | my assistant keeps making up facts, why | (weak) ai-agent-vs-chatbot | 18 | no | — | not solid; accepted page in top 5 |
| CAL-011 | WEAK | page | ways to stop a chatbot inventing sources | (weak) ai-agent-vs-chatbot | 27 | no | — | not solid; accepted page in top 5 |
| CAL-012 | WEAK | page | turning sentences into lists of numbers so similar ones cluster | (weak) kubernetes | 9 | no | — | not solid; accepted page in top 5 |
| CAL-013 | WEAK | page | database designed to find nearest neighbours of numeric representations | (weak) vector-database-vs-traditional-database | 32 | no | — | not solid; accepted page in top 5 |
| CAL-014 | PASS | page | how should i split long documents before indexing them | chunking | 80 | yes | — |  |
| CAL-015 | MISS | page | letting a model look things up in my own documents before answering | (weak) model-cards | 29 | no | — | no accepted page in top 5 |
| CAL-016 | WEAK | page | teaching an existing model my company's style with more training | (weak) model-drift-and-monitoring | 30 | no | — | not solid; accepted page in top 5 |
| CAL-017 | PASS | page | run a language model on my own laptop without internet | local-ai | 63 | yes | — |  |
| CAL-018 | WEAK | page | is it safe to give a chatbot confidential company information | (weak) ai-agent-vs-chatbot | 27 | no | — | not solid; accepted page in top 5 |
| CAL-019 | PASS | page | a malicious web page tells my assistant to ignore its rules | prompt-injection | 55 | yes | — |  |
| CAL-020 | MISS | page | a model that plans steps and uses software on its own to finish a goal | (weak) model-cards | 29 | no | — | no accepted page in top 5 |
| CAL-021 | MISS | page | how can a model press buttons in other programs | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| CAL-022 | WEAK | page | getting the model to return a call to my function with arguments | (weak) function-calling | 35 | no | — | not solid; accepted page in top 5 |
| CAL-023 | PASS | page | how does an assistant remember things between sessions | agent-memory | 89 | yes | — |  |
| CAL-024 | WEAK | page | several specialised bots cooperating on a job | (weak) agent-protocol-landscape | 1 | no | — | not solid; accepted page in top 5 |
| CAL-025 | MISS | page | a standard way for assistants to plug into external data sources | (weak) gdpr-and-ai | 29 | no | — | no accepted page in top 5 |
| CAL-026 | MISS | page | which is better for adding knowledge, retrieval or extra training | (weak) rag | 46 | no | — | no accepted page in top 5 |
| CAL-027 | WEAK | page | difference between a simple chat bot and an autonomous one | (weak) ai-agent-vs-chatbot | 19 | no | — | not solid; accepted page in top 5 |
| CAL-028 | FALSE POSITIVE | page | using python to call a hosted language model | python | 51 | yes | — | confident wrong page: python |
| CAL-029 | FALSE POSITIVE | page | which python packages should i learn for machine learning work | python | 49 | yes | — | confident wrong page: python |
| CAL-030 | MISS | page | showing the answer word by word as it is generated | (weak) gsm8k-and-math-benchmarks | 11 | no | — | no accepted page in top 5 |
| CAL-031 | FALSE POSITIVE | page | building a chat window in a javascript ui library | javascript | 55 | yes | — | confident wrong page: javascript |
| CAL-032 | FALSE POSITIVE | page | which toolkit to pick for building an assistant with tools | agent-tools | 37 | yes | — | confident wrong page: agent-tools |
| CAL-033 | FALSE POSITIVE | page | where should i keep records for an ai powered app | api-keys | 44 | yes | — | confident wrong page: api-keys |
| CAL-034 | FALSE POSITIVE | page | how does a bot get permission to read my email | gmail-for-ai-agents | 52 | yes | — | confident wrong page: gmail-for-ai-agents |
| CAL-035 | MISS | page | a format for data made of curly braces and key value pairs | (weak) gdpr-and-ai | 29 | no | — | no accepted page in top 5 |
| CAL-036 | MISS | page | how do two programs talk to each other over the web | (weak) build-spfx-web-part | 30 | no | — | no accepted page in top 5 |
| CAL-037 | MISS | page | proving who you are when calling a web service | (weak) build-spfx-web-part | 30 | no | — | no accepted page in top 5 |
| CAL-038 | WEAK | page | microsoft's workplace intranet and document libraries | (weak) python-ai-libraries | 24 | no | — | not solid; accepted page in top 5 |
| CAL-039 | FALSE POSITIVE | page | custom components for microsoft's intranet written in typescript | typescript | 61 | yes | — | confident wrong page: typescript |
| CAL-040 | MISS | page | microsoft's api for accessing mail, files and calendars of users | (weak) api-keys | 34 | no | — | no accepted page in top 5 |
| CAL-041 | WEAK | page | low code apps and automations from microsoft | (weak) code-execution-sandboxing | 34 | no | — | not solid; accepted page in top 5 |
| CAL-042 | MISS | page | microsoft's cloud identity and sign in service | (weak) local-ai-vs-cloud-ai | 26 | no | — | no accepted page in top 5 |
| CAL-043 | PASS | page | hosted open model hub and libraries for transformers | hugging-face | 46 | yes | — |  |
| CAL-044 | FALSE POSITIVE | page | popular toolkit for chaining llm calls together | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| CAL-045 | FALSE POSITIVE | page | programs that load and serve open models on a personal computer | open-weights-models | 108 | yes | — | confident wrong page: open-weights-models |
| CAL-046 | MISS | page | a language that adds types on top of the web scripting language | (weak) build-spfx-web-part | 30 | no | — | no accepted page in top 5 |
| CAL-047 | MISS | page | systems language focused on memory safety without garbage collection | (weak) agent-memory | 34 | no | — | no accepted page in top 5 |
| CAL-048 | MISS | page | the markup and styling languages every web page uses | (weak) build-spfx-web-part | 30 | no | — | no accepted page in top 5 |
| CAL-049 | WEAK | page | server side runtime that runs scripts outside the browser | (weak) onnx-runtime | 28 | no | — | not solid; accepted page in top 5 |
| CAL-050 | WEAK | page | query language for asking relational tables questions | (weak) small-language-models | 24 | no | — | not solid; accepted page in top 5 |
| CAL-051 | FALSE POSITIVE | page | relational database with a strong extension ecosystem | sql | 51 | yes | — | confident wrong page: sql |
| CAL-052 | MISS | page | storing documents as flexible json instead of tables | (weak) json-validation | 30 | no | — | no accepted page in top 5 |
| CAL-053 | MISS | page | fast in memory store used for caching | (weak) agent-memory | 38 | no | — | no accepted page in top 5 |
| CAL-054 | MISS | page | versioning code and collaborating with branches | (weak) code-execution-sandboxing | 34 | no | — | no accepted page in top 5 |
| CAL-055 | MISS | page | packaging apps with all dependencies to run anywhere | (weak) connecting-agents-to-apps | 10 | no | — | no accepted page in top 5 |
| CAL-056 | MISS | page | automatically testing and deploying every commit | (weak) red-teaming | 15 | no | — | no accepted page in top 5 |
| CAL-057 | WEAK | page | secrets kept outside source code as configuration | (weak) code-execution-sandboxing | 34 | no | — | not solid; accepted page in top 5 |
| CAL-058 | FALSE POSITIVE | page | signed tokens a server hands out after login | tokens | 34 | yes | — | confident wrong page: tokens |
| CAL-059 | WEAK | page | browser rule that blocks requests to other websites | (weak) computer-use-agents | 14 | no | — | not solid; accepted page in top 5 |
| CAL-060 | PASS | page | a server calls my url when something happens | webhooks | 33 | yes | — |  |
| CAL-061 | FALSE POSITIVE | page | letting the model think longer before replying improves answers | reasoning-models | 45 | yes | — | confident wrong page: reasoning-models |
| CAL-062 | WEAK | page | models that show step by step thinking before the final answer | (weak) reasoning-models | 50 | no | — | not solid; accepted page in top 5 |
| CAL-063 | MISS | page | asking the model to explain its steps in sequence | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| CAL-064 | WEAK | page | sampling many answers and picking the most common | (weak) best-of-n-sampling | 22 | no | — | not solid; accepted page in top 5 |
| CAL-065 | MISS | page | controlling randomness when a model picks the next word | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| CAL-066 | WEAK | page | forcing output to follow a defined shape | (weak) structured-outputs | 24 | no | — | not solid; accepted page in top 5 |
| CAL-067 | MISS | page | a description of allowed fields and types for data | (weak) gdpr-and-ai | 29 | no | — | no accepted page in top 5 |
| CAL-068 | WEAK | page | learning from labelled input output pairs | (weak) deep-learning | 34 | no | — | not solid; accepted page in top 5 |
| CAL-069 | MISS | page | finding patterns in data without answers provided | (weak) gdpr-and-ai | 29 | no | — | no accepted page in top 5 |
| CAL-070 | WEAK | page | layers of connected units that learn weights | (weak) open-weights-models | 22 | no | — | not solid; accepted page in top 5 |
| CAL-071 | MISS | page | how weights are adjusted by following the slope of the error | (weak) open-weights-models | 22 | no | — | no accepted page in top 5 |
| CAL-072 | MISS | page | when a model memorises training data and fails on new data | (weak) gdpr-and-ai | 44 | no | — | no accepted page in top 5 |
| CAL-073 | WEAK | page | reusing a pretrained network for a new task | (weak) agent-planning | 12 | no | — | not solid; accepted page in top 5 |
| CAL-074 | MISS | page | agents that learn by trial reward and penalty | (weak) openai-agents-sdk | 36 | no | — | no accepted page in top 5 |
| CAL-075 | WEAK | page | networks designed for grids of pixels | (weak) deep-q-networks | 12 | no | — | not solid; accepted page in top 5 |
| CAL-076 | WEAK | page | networks that process sequences one step at a time with a hidden state | (weak) process-reward-model | 39 | no | — | not solid; accepted page in top 5 |
| CAL-077 | FALSE POSITIVE | page | splitting images into patches and applying attention | transformers | 34 | yes | — | confident wrong page: transformers |
| CAL-078 | WEAK | page | only some specialist subnetworks are activated per input | (weak) encoder-decoder-vs-decoder-only | 17 | no | — | not solid; accepted page in top 5 |
| CAL-079 | PASS | page | sequence models that avoid quadratic attention cost | state-space-models | 77 | yes | — |  |
| CAL-080 | WEAK | page | systems that generate images by gradually removing noise | (weak) multi-agent-systems | 17 | no | — | not solid; accepted page in top 5 |
| CAL-081 | PASS | page | two networks competing, one forging and one detecting | generative-adversarial-networks | 57 | yes | — |  |
| CAL-082 | PASS | page | networks that operate on nodes and edges | graph-neural-networks | 65 | yes | — |  |
| CAL-083 | FALSE POSITIVE | page | caching attention keys and values to speed generation | transformers | 42 | yes | — | confident wrong page: transformers |
| CAL-084 | WEAK | page | encoding the order of words in a sequence | (weak) positional-encoding | 16 | no | — | not solid; accepted page in top 5 |
| CAL-085 | MISS | page | how performance improves as models and data grow | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| CAL-086 | WEAK | page | training a base model to follow user instructions | (weak) model-cards | 28 | no | — | not solid; accepted page in top 5 |
| CAL-087 | WEAK | page | cheap adaptation by training small low rank matrices | (weak) small-language-models | 24 | no | — | not solid; accepted page in top 5 |
| CAL-088 | MISS | page | shrinking model weights to fewer bits to save memory | (weak) agent-memory | 34 | no | — | no accepted page in top 5 |
| CAL-089 | PASS | page | a small student model learns to imitate a big teacher | knowledge-distillation | 76 | yes | — |  |
| CAL-090 | PASS | page | small draft model proposes tokens a bigger model verifies | speculative-decoding | 62 | yes | — |  |
| CAL-091 | WEAK | page | compact models that run on phones | (weak) small-language-models | 45 | no | — | not solid; accepted page in top 5 |
| CAL-092 | MISS | page | models whose parameters you can download | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| CAL-093 | MISS | page | models that answer questions about pictures | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| CAL-094 | PASS | page | converting spoken audio to text and back | speech-ai | 62 | yes | — |  |
| CAL-095 | WEAK | page | extracting information from scanned forms and pdfs | (weak) document-understanding-ai | 31 | no | — | not solid; accepted page in top 5 |
| CAL-096 | WEAK | page | agents talking to each other using a shared protocol from google | (weak) agent-protocol-landscape | 45 | no | — | not solid; accepted page in top 5 |
| CAL-097 | WEAK | page | security risks when assistants connect to tool servers | (weak) mcp-security | 41 | no | — | not solid; accepted page in top 5 |
| CAL-098 | PASS | page | graph based framework for stateful agent workflows | langgraph | 67 | yes | — |  |
| CAL-099 | PASS | page | serving models fast with paged attention | vllm | 53 | yes | — |  |
| CAL-100 | FALSE POSITIVE | page | loading quantised models in plain c plus plus | csharp | 20 | yes | — | confident wrong page: csharp |
| CAL-101 | MISS | page | simple command line tool to download and chat with local models | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| CAL-102 | MISS | page | a library for training deep networks popular in research | (weak) deep-learning | 33 | no | — | no accepted page in top 5 |
| CAL-103 | MISS | page | alternate between thinking and acting with observations | (weak) thinking-budgets | 19 | no | — | no accepted page in top 5 |
| CAL-104 | WEAK | page | agents that click and type on a computer screen | (weak) computer-use-agents | 58 | no | — | not solid; accepted page in top 5 |
| CAL-105 | WEAK | page | running generated code safely in isolation | (weak) code-execution-sandboxing | 60 | no | — | not solid; accepted page in top 5 |
| CAL-106 | PASS | page | combine keyword and meaning search then reorder results | hybrid-search-and-reranking | 89 | yes | — |  |
| CAL-107 | MISS | page | retrieval over a network of connected entities | (weak) agentic-rag | 44 | no | — | no accepted page in top 5 |
| CAL-108 | MISS | page | deciding what information goes into the model's window | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| CAL-109 | MISS | page | public scoreboards comparing models | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| CAL-110 | WEAK | page | test questions leaking into training data | (weak) gdpr-and-ai | 42 | no | — | not solid; accepted page in top 5 |
| CAL-111 | PASS | page | using a strong model to grade other model answers | llm-as-a-judge | 57 | yes | — |  |
| CAL-112 | FALSE POSITIVE | page | measuring how good retrieval and answers are in a rag system | rag | 62 | yes | — | confident wrong page: rag |
| CAL-113 | MISS | page | deploying models to production and keeping them healthy | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| CAL-114 | MISS | page | chips that make training fast | (weak) distributed-training | 13 | no | — | no accepted page in top 5 |
| CAL-115 | WEAK | page | splitting training across many machines | (weak) distributed-training | 16 | no | — | not solid; accepted page in top 5 |
| CAL-116 | MISS | page | seeing what happens inside every model call in production | (weak) model-apis | 32 | no | — | no accepted page in top 5 |
| CAL-117 | PASS | page | input data changing so a deployed model gets worse | model-drift-and-monitoring | 73 | yes | — |  |
| CAL-118 | WEAK | page | reusing repeated prompt prefixes to save money | (weak) system-prompts | 25 | no | — | not solid; accepted page in top 5 |
| CAL-119 | MISS | page | making a model behave in line with human values | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| CAL-120 | WEAK | page | training from human comparisons of two answers | (weak) rlhf | 20 | no | — | not solid; accepted page in top 5 |
| CAL-121 | MISS | page | model flatters the user instead of being accurate | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| CAL-122 | MISS | page | attacking a system on purpose to find its weaknesses | (weak) system-prompts | 26 | no | — | no accepted page in top 5 |
| CAL-123 | WEAK | page | filters that block unsafe inputs and outputs | (weak) structured-outputs | 14 | no | — | not solid; accepted page in top 5 |
| CAL-124 | PASS | page | studying circuits inside networks to understand them | mechanistic-interpretability | 24 | yes | — |  |
| CAL-125 | PASS | page | unfair outcomes for certain groups from automated decisions | ai-bias-and-fairness | 50 | yes | — |  |
| CAL-126 | PASS | page | rules and oversight for responsible ai in organisations | ai-governance | 70 | yes | — |  |
| CAL-127 | WEAK | page | european law classifying systems by risk | (weak) eu-ai-act | 21 | no | — | not solid; accepted page in top 5 |
| CAL-128 | WEAK | page | documentation describing a model's intended use and limits | (weak) model-cards | 44 | no | — | not solid; accepted page in top 5 |
| CAL-129 | FALSE POSITIVE | page | list of the top vulnerabilities for llm applications | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| CAL-130 | PASS | page | predicting three dimensional protein shapes | alphafold | 65 | yes | — |  |
| CAL-131 | MISS | page | systems that physically interact with the world using perception and action | (weak) world-models | 26 | no | — | no accepted page in top 5 |
| CAL-132 | WEAK | page | learning from demonstrations by an expert | (weak) deep-learning | 34 | no | — | not solid; accepted page in top 5 |
| CAL-133 | FALSE POSITIVE | page | moving a policy from simulation to a physical robot | reinforcement-learning | 21 | yes | — | confident wrong page: reinforcement-learning |
| CAL-134 | FALSE POSITIVE | page | orchestrating containers across many machines | containers | 32 | yes | — | confident wrong page: containers |
| CAL-135 | WEAK | page | finding and locating items in pictures with boxes | (weak) object-detection | 3 | no | — | not solid; accepted page in top 5 |
| CAL-136 | WEAK | page | european privacy regulation and automated processing | (weak) ai-privacy-and-security | 15 | no | — | not solid; accepted page in top 5 |
| CAL-N01 | PASS | neg | toy transformer robot for kids birthday | (weak) transformers | 50 | no | — | no confident answer |
| CAL-N02 | PASS | neg | are mamba snakes dangerous | (weak) state-space-models | 31 | no | — | no confident answer |
| CAL-N03 | PASS | neg | can my python pet eat mice | (weak) python | 46 | no | — | no confident answer |
| CAL-N04 | PASS | neg | react to this message politely | (weak) react | 54 | no | — | no confident answer |
| CAL-N05 | PASS | neg | docker is a clothing brand right | (weak) docker | 75 | no | — | no confident answer |
| CAL-N06 | PASS | neg | find a real estate agent near me | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| CAL-N07 | PASS | neg | buy a model train set | (weak) model-cards | 28 | no | — | no confident answer |
| CAL-N08 | PASS | neg | how to bake sourdough bread | (weak) cnn-vs-vision-transformer | 1 | no | — | no confident answer |
| CAL-N09 | PASS | neg | best pizza in rome | (weak) best-of-n-sampling | 28 | no | — | no confident answer |
| CAL-N10 | PASS | neg | cheapest flights to lisbon | (weak) none | 0 | no | — | no confident answer |
| CAL-N11 | PASS | neg | how do i fix a leaking tap | (weak) common-prompting-mistakes | 8 | no | — | no confident answer |
| CAL-N12 | PASS | neg | symptoms of the flu | (weak) none | 0 | no | — | no confident answer |
| CAL-N13 | PASS | neg | who won the world cup in 2010 | (weak) world-models | 26 | no | — | no confident answer |
| CAL-N14 | PASS | neg | knit a scarf for beginners | (weak) python | 2 | no | — | no confident answer |
| CAL-N15 | PASS | neg | go for a walk after dinner | (weak) none | 0 | no | — | no confident answer |
| CAL-N16 | PASS | neg | swift flight of a bird | (weak) none | 0 | no | — | no confident answer |
| CAL-N17 | PASS | neg | rust on my bicycle chain how to remove | (weak) rust | 46 | no | — | no confident answer |
| CAL-N18 | PASS | neg | java coffee beans origin | (weak) java | 46 | no | — | no confident answer |
| CAL-N19 | PASS | neg | ruby gemstone value | (weak) deep-q-networks | 7 | no | — | no confident answer |
| CAL-N20 | PASS | neg | agent 007 movie order | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| CAL-N21 | PASS | neg | fashion model portfolio tips | (weak) model-cards | 28 | no | — | no confident answer |
| CAL-N22 | PASS | neg | how to train for a marathon | (weak) distributed-training | 6 | no | — | no confident answer |
| CAL-N23 | PASS | neg | token of appreciation gift ideas | (weak) tokens | 41 | no | — | no confident answer |
| CAL-N24 | FALSE POSITIVE | neg | embedding a screw in drywall | embeddings | 44 | yes | — | confident answer for out-of-scope query: embeddings |
| CAL-N25 | PASS | neg | cloud formations explained for kids | (weak) gcp-fundamentals | 23 | no | — | no confident answer |
| CAL-N26 | PASS | neg | apple pie recipe | (weak) gpus-and-ai-accelerators | 6 | no | — | no confident answer |
| CAL-N27 | PASS | neg | what is the weather tomorrow | (weak) ai-weather-forecasting | 28 | no | — | no confident answer |
| CAL-N28 | PASS | neg | stock market tips for beginners | (weak) prompt-engineering | 2 | no | — | no confident answer |
| CAL-N29 | PASS | neg | learn guitar chords fast | (weak) evaluation-metrics-for-ai | 4 | no | — | no confident answer |
| CAL-N30 | PASS | neg | mortgage rates today | (weak) best-of-n-sampling | 1 | no | — | no confident answer |
| CAL-N31 | PASS | neg | tips for a job interview | (weak) prompt-engineering | 2 | no | — | no confident answer |
| CAL-N32 | PASS | neg | how to grow tomatoes | (weak) kv-cache | 2 | no | — | no confident answer |
| CAL-N33 | PASS | neg | ambassador reception dress code | (weak) code-execution-sandboxing | 34 | no | — | no confident answer |
| CAL-N34 | PASS | neg | spark plug replacement steps | (weak) diffusion-models | 2 | no | — | no confident answer |
| CAL-N35 | PASS | neg | bridge card game rules | (weak) model-cards | 20 | no | — | no confident answer |
| CAL-N36 | PASS | neg | sage herb cooking uses | (weak) computer-use-agents | 2 | no | — | no confident answer |
| CAL-N37 | PASS | neg | oracle of delphi history | (weak) git | 4 | no | — | no confident answer |
| CAL-N38 | PASS | neg | chrome plated bumper cleaning | (weak) none | 0 | no | — | no confident answer |
| CAL-N39 | PASS | neg | spring cleaning checklist | (weak) owasp-llm-top-10 | 6 | no | — | no confident answer |
| CAL-N40 | PASS | neg | kernel of corn popcorn tips | (weak) semantic-kernel | 36 | no | — | no confident answer |
| CAL-G01 | PASS | gap | how do i set up terraform modules | (weak) benchmark-contamination | 6 | no | — | transparent non-answer |
| CAL-G02 | PASS | gap | what is a service mesh like istio | (weak) azure-fundamentals | 7 | no | — | transparent non-answer |
| CAL-G03 | PASS | gap | explain apache kafka partitions | (weak) reasoning-transparency | 2 | no | — | transparent non-answer |
| CAL-G04 | PASS | gap | write an ansible playbook | (weak) prompt-engineering | 14 | no | — | transparent non-answer |
| CAL-G05 | PASS | gap | best linux distro for servers | (weak) best-of-n-sampling | 28 | no | — | transparent non-answer |
| CAL-G06 | PASS | gap | federated learning on phones | (weak) deep-learning | 34 | no | — | transparent non-answer |
| CAL-G07 | PASS | gap | differential privacy for datasets | (weak) ai-privacy-and-security | 15 | no | — | transparent non-answer |
| CAL-G08 | PASS | gap | time series forecasting with prophet | (weak) test-time-compute | 26 | no | — | transparent non-answer |
| CAL-G09 | PASS | gap | how do recommender systems rank movies | (weak) multi-agent-systems | 17 | no | — | transparent non-answer |
| CAL-G10 | PASS | gap | configuring nginx reverse proxy | (weak) nodejs-for-ai | 6 | no | — | transparent non-answer |
| CAL-G11 | PASS | gap | angular vs vue for a new project | (weak) ai-materials-discovery | 10 | no | — | transparent non-answer |
| CAL-G12 | PASS | gap | setting up tls certificates with letsencrypt | (weak) thinking-budgets | 3 | no | — | transparent non-answer |
