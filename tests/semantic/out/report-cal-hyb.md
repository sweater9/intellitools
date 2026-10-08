# Knowledge red-team report — cal-hyb

Dataset: `tests/redteam/calibration-semantic.json` sha256 `981c61d4ae5eeaccf380da163bd08de840761f2999a5489bdf9e868b186b03b7`

Total 188 · PASS 74 · WEAK 73 · MISS 20 · FALSE POSITIVE 21
Pass rate 39.4% · False-positive rate 11.2%
Retrieval on page-kind queries (136): top-1 51.5% · top-3 73.5% · top-5 81.6%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 12 | 12 | 0 | 0 | 0 | 100.0% |
| neg | 40 | 39 | 0 | 0 | 1 | 97.5% |
| page | 136 | 23 | 73 | 20 | 20 | 16.9% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 40 | 39 | 0 | 0 | 1 | 97.5% |
| gap | 12 | 12 | 0 | 0 | 0 | 100.0% |
| paraphrase | 136 | 23 | 73 | 20 | 20 | 16.9% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| cal | 188 | 74 | 73 | 20 | 21 | 39.4% |

## FALSE POSITIVE
- CAL-001 [page/paraphrase] "a program that learns from examples instead of explicit rules" → supervised-learning (score 53.70576254348728, solid yes) — expected what-is-ai; confident wrong page: supervised-learning
- CAL-009 [page/paraphrase] "the hidden instructions that set the assistant's personality" → prompt-injection (score 56, solid yes) — expected system-prompts; confident wrong page: prompt-injection
- CAL-028 [page/paraphrase] "using python to call a hosted language model" → python (score 100.14710955450172, solid yes) — expected calling-ai-apis-with-python; confident wrong page: python
- CAL-029 [page/paraphrase] "which python packages should i learn for machine learning work" → python (score 64.11447648380008, solid yes) — expected python-ai-libraries; confident wrong page: python
- CAL-031 [page/paraphrase] "building a chat window in a javascript ui library" → javascript (score 60.00776909611179, solid yes) — expected react-ai-interfaces; confident wrong page: javascript
- CAL-032 [page/paraphrase] "which toolkit to pick for building an assistant with tools" → agent-tools (score 55.43543734948585, solid yes) — expected choosing-an-agent-framework; confident wrong page: agent-tools
- CAL-033 [page/paraphrase] "where should i keep records for an ai powered app" → api-keys (score 44, solid yes) — expected databases-for-ai-apps; confident wrong page: api-keys
- CAL-034 [page/paraphrase] "how does a bot get permission to read my email" → gmail-for-ai-agents (score 53.97504861147843, solid yes) — expected oauth-for-ai-agents; confident wrong page: gmail-for-ai-agents
- CAL-039 [page/paraphrase] "custom components for microsoft's intranet written in typescript" → typescript (score 66.46065978517692, solid yes) — expected sharepoint-framework; confident wrong page: typescript
- CAL-044 [page/paraphrase] "popular toolkit for chaining llm calls together" → large-language-models (score 27, solid yes) — expected langchain; confident wrong page: large-language-models
- CAL-045 [page/paraphrase] "programs that load and serve open models on a personal computer" → open-weights-models (score 114.70232315294844, solid yes) — expected local-llm-runtimes; confident wrong page: open-weights-models
- CAL-051 [page/paraphrase] "relational database with a strong extension ecosystem" → sql (score 59.57847763704288, solid yes) — expected postgresql; confident wrong page: sql
- CAL-058 [page/paraphrase] "signed tokens a server hands out after login" → tokens (score 34, solid yes) — expected json-web-tokens; confident wrong page: tokens
- CAL-077 [page/paraphrase] "splitting images into patches and applying attention" → transformers (score 58.84484255959744, solid yes) — expected vision-transformers; confident wrong page: transformers
- CAL-083 [page/paraphrase] "caching attention keys and values to speed generation" → transformers (score 44.77789652947233, solid yes) — expected kv-cache; confident wrong page: transformers
- CAL-100 [page/paraphrase] "loading quantised models in plain c plus plus" → csharp (score 20.82196234402154, solid yes) — expected llama-cpp; confident wrong page: csharp
- CAL-112 [page/paraphrase] "measuring how good retrieval and answers are in a rag system" → rag (score 75.63130845499253, solid yes) — expected rag-evaluation; confident wrong page: rag
- CAL-129 [page/paraphrase] "list of the top vulnerabilities for llm applications" → large-language-models (score 27, solid yes) — expected owasp-llm-top-10; confident wrong page: large-language-models
- CAL-133 [page/paraphrase] "moving a policy from simulation to a physical robot" → reinforcement-learning (score 23.577227184074204, solid yes) — expected sim-to-real-transfer; confident wrong page: reinforcement-learning
- CAL-134 [page/paraphrase] "orchestrating containers across many machines" → containers (score 105.56482312883288, solid yes) — expected kubernetes; confident wrong page: containers
- CAL-N24 [neg/ambiguous-or-off-topic] "embedding a screw in drywall" → embeddings (score 47.24294150076777, solid yes) — expected none; confident answer for out-of-scope query: embeddings

## MISS
- CAL-002 [page/paraphrase] "software that writes new text and images on its own" → (weak) multimodal-ai (score 76.42589962450813, solid no) — expected generative-ai; no accepted page in top 5
- CAL-003 [page/paraphrase] "chatbots like the ones everyone talks about, how are they built" → (weak) ai-agent-vs-chatbot (score 29.852600407211526, solid no) — expected large-language-models; no accepted page in top 5
- CAL-006 [page/paraphrase] "the architecture behind modern chat models that looks at all words at once" → (weak) model-apis (score 51.11538648705334, solid no) — expected transformers; no accepted page in top 5
- CAL-010 [page/paraphrase] "my assistant keeps making up facts, why" → (weak) ai-agent-vs-chatbot (score 47.157103150472366, solid no) — expected ai-hallucinations; no accepted page in top 5
- CAL-021 [page/paraphrase] "how can a model press buttons in other programs" → (weak) model-apis (score 57.06962498821184, solid no) — expected agent-tools; no accepted page in top 5
- CAL-030 [page/paraphrase] "showing the answer word by word as it is generated" → (weak) tokens (score 67.10918110368021, solid no) — expected streaming-ai-responses; no accepted page in top 5
- CAL-035 [page/paraphrase] "a format for data made of curly braces and key value pairs" → (weak) lora-and-peft (score 55.61844069484991, solid no) — expected what-is-json; no accepted page in top 5
- CAL-036 [page/paraphrase] "how do two programs talk to each other over the web" → (weak) build-spfx-web-part (score 47.38515040427163, solid no) — expected what-is-an-api; no accepted page in top 5
- CAL-037 [page/paraphrase] "proving who you are when calling a web service" → (weak) function-calling-vs-mcp (score 36.81790044053677, solid no) — expected api-authentication; no accepted page in top 5
- CAL-046 [page/paraphrase] "a language that adds types on top of the web scripting language" → (weak) go-language (score 51.228044768720544, solid no) — expected typescript; no accepted page in top 5
- CAL-054 [page/paraphrase] "versioning code and collaborating with branches" → (weak) multi-agent-systems (score 73.41835566015403, solid no) — expected git; no accepted page in top 5
- CAL-055 [page/paraphrase] "packaging apps with all dependencies to run anywhere" → (weak) teams-development (score 25.991037406646964, solid no) — expected docker; no accepted page in top 5
- CAL-065 [page/paraphrase] "controlling randomness when a model picks the next word" → (weak) large-language-models (score 57.80862777687359, solid no) — expected sampling-and-decoding; no accepted page in top 5
- CAL-067 [page/paraphrase] "a description of allowed fields and types for data" → (weak) json-validation (score 81.1118335528919, solid no) — expected json-schema; no accepted page in top 5
- CAL-069 [page/paraphrase] "finding patterns in data without answers provided" → (weak) common-prompting-mistakes (score 50.73426547604528, solid no) — expected unsupervised-learning; no accepted page in top 5
- CAL-085 [page/paraphrase] "how performance improves as models and data grow" → (weak) model-drift-and-monitoring (score 54.93475583291578, solid no) — expected scaling-laws; no accepted page in top 5
- CAL-102 [page/paraphrase] "a library for training deep networks popular in research" → (weak) deep-learning (score 96.29827158846449, solid no) — expected pytorch; no accepted page in top 5
- CAL-113 [page/paraphrase] "deploying models to production and keeping them healthy" → (weak) model-drift-and-monitoring (score 68.06172140087685, solid no) — expected mlops; no accepted page in top 5
- CAL-116 [page/paraphrase] "seeing what happens inside every model call in production" → (weak) model-apis (score 34.58402162084424, solid no) — expected llm-observability; no accepted page in top 5
- CAL-119 [page/paraphrase] "making a model behave in line with human values" → (weak) rlhf (score 48.43718081262932, solid no) — expected ai-alignment; no accepted page in top 5

## WEAK
- CAL-004 [page/paraphrase] "why do language models chop words into pieces" → (weak) small-language-models (score 70.60056997562725, solid no) — expected tokens; not solid; accepted page in top 5
- CAL-007 [page/paraphrase] "models that understand pictures as well as words" → (weak) vision-language-models (score 84.54000981601146, solid no) — expected multimodal-ai; not solid; accepted page in top 5
- CAL-008 [page/paraphrase] "how to phrase instructions so the model does what i want" → (weak) sycophancy (score 54.98543343837218, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- CAL-011 [page/paraphrase] "ways to stop a chatbot inventing sources" → (weak) ai-agent-vs-chatbot (score 51.7087445308365, solid no) — expected how-to-reduce-hallucinations; not solid; accepted page in top 5
- CAL-012 [page/paraphrase] "turning sentences into lists of numbers so similar ones cluster" → (weak) tokens (score 65.68522783183523, solid no) — expected embeddings; not solid; accepted page in top 5
- CAL-013 [page/paraphrase] "database designed to find nearest neighbours of numeric representations" → (weak) vector-database-vs-traditional-database (score 119.91408844208567, solid no) — expected vector-databases; not solid; accepted page in top 5
- CAL-015 [page/paraphrase] "letting a model look things up in my own documents before answering" → (weak) large-language-models (score 48.138005031980136, solid no) — expected rag; not solid; accepted page in top 5
- CAL-016 [page/paraphrase] "teaching an existing model my company's style with more training" → (weak) fine-tuning (score 70.0009086677696, solid no) — expected fine-tuning; not solid; accepted page in top 5
- CAL-018 [page/paraphrase] "is it safe to give a chatbot confidential company information" → (weak) ai-agent-vs-chatbot (score 37.83841810203515, solid no) — expected ai-privacy-and-security; not solid; accepted page in top 5
- CAL-020 [page/paraphrase] "a model that plans steps and uses software on its own to finish a goal" → (weak) ai-agent-vs-chatbot (score 73.48227621520994, solid no) — expected ai-agents; not solid; accepted page in top 5
- CAL-022 [page/paraphrase] "getting the model to return a call to my function with arguments" → (weak) function-calling (score 87.77346131163965, solid no) — expected function-calling; not solid; accepted page in top 5
- CAL-024 [page/paraphrase] "several specialised bots cooperating on a job" → (weak) a2a-protocol (score 55.86200419397633, solid no) — expected multi-agent-systems; not solid; accepted page in top 5
- CAL-025 [page/paraphrase] "a standard way for assistants to plug into external data sources" → (weak) mcp (score 78.4211726092469, solid no) — expected mcp; not solid; accepted page in top 5
- CAL-026 [page/paraphrase] "which is better for adding knowledge, retrieval or extra training" → (weak) rag (score 85.03578303291364, solid no) — expected rag-vs-fine-tuning; not solid; accepted page in top 5
- CAL-027 [page/paraphrase] "difference between a simple chat bot and an autonomous one" → (weak) ai-agent-vs-chatbot (score 55.52670241363326, solid no) — expected ai-agent-vs-chatbot; not solid; accepted page in top 5
- CAL-038 [page/paraphrase] "microsoft's workplace intranet and document libraries" → (weak) sharepoint (score 68.89638427252359, solid no) — expected sharepoint; not solid; accepted page in top 5
- CAL-040 [page/paraphrase] "microsoft's api for accessing mail, files and calendars of users" → (weak) api-keys (score 50.98678995893449, solid no) — expected microsoft-graph; not solid; accepted page in top 5
- CAL-041 [page/paraphrase] "low code apps and automations from microsoft" → (weak) microsoft-365 (score 59.43574267495985, solid no) — expected power-platform; not solid; accepted page in top 5
- CAL-042 [page/paraphrase] "microsoft's cloud identity and sign in service" → (weak) gcp-fundamentals (score 47.44998890320039, solid no) — expected microsoft-entra-id; not solid; accepted page in top 5
- CAL-047 [page/paraphrase] "systems language focused on memory safety without garbage collection" → (weak) agent-memory (score 65.16381006679327, solid no) — expected rust; not solid; accepted page in top 5
- CAL-048 [page/paraphrase] "the markup and styling languages every web page uses" → (weak) html-and-css (score 55.13633476599665, solid no) — expected html-and-css; not solid; accepted page in top 5
- CAL-049 [page/paraphrase] "server side runtime that runs scripts outside the browser" → (weak) nodejs (score 38.86106442637593, solid no) — expected nodejs; not solid; accepted page in top 5
- CAL-050 [page/paraphrase] "query language for asking relational tables questions" → (weak) sql (score 77.12930748668681, solid no) — expected sql; not solid; accepted page in top 5
- CAL-052 [page/paraphrase] "storing documents as flexible json instead of tables" → (weak) what-is-json (score 71.85426026937031, solid no) — expected mongodb; not solid; accepted page in top 5
- CAL-053 [page/paraphrase] "fast in memory store used for caching" → (weak) prompt-caching (score 77.84115018746603, solid no) — expected redis; not solid; accepted page in top 5
- CAL-056 [page/paraphrase] "automatically testing and deploying every commit" → (weak) cicd (score 39.93144010570467, solid no) — expected cicd; not solid; accepted page in top 5
- CAL-057 [page/paraphrase] "secrets kept outside source code as configuration" → (weak) code-execution-sandboxing (score 57.31727892657968, solid no) — expected environment-variables; not solid; accepted page in top 5
- CAL-059 [page/paraphrase] "browser rule that blocks requests to other websites" → (weak) teams-development (score 28.67394898325341, solid no) — expected cors; not solid; accepted page in top 5
- CAL-062 [page/paraphrase] "models that show step by step thinking before the final answer" → (weak) reasoning-models (score 88.09611636555091, solid no) — expected reasoning-models; not solid; accepted page in top 5
- CAL-063 [page/paraphrase] "asking the model to explain its steps in sequence" → (weak) process-reward-model (score 57.63070598763441, solid no) — expected chain-of-thought; not solid; accepted page in top 5
- CAL-064 [page/paraphrase] "sampling many answers and picking the most common" → (weak) self-consistency (score 63.20061634578257, solid no) — expected self-consistency; not solid; accepted page in top 5
- CAL-066 [page/paraphrase] "forcing output to follow a defined shape" → (weak) prompt-engineering (score 58.979760317018986, solid no) — expected structured-outputs; not solid; accepted page in top 5
- CAL-068 [page/paraphrase] "learning from labelled input output pairs" → (weak) structured-outputs (score 52.18843095469864, solid no) — expected supervised-learning; not solid; accepted page in top 5
- CAL-070 [page/paraphrase] "layers of connected units that learn weights" → (weak) neural-networks (score 67.10787568609055, solid no) — expected neural-networks; not solid; accepted page in top 5
- CAL-071 [page/paraphrase] "how weights are adjusted by following the slope of the error" → (weak) backpropagation-and-gradient-descent (score 34.279830549192305, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- CAL-072 [page/paraphrase] "when a model memorises training data and fails on new data" → (weak) overfitting-and-regularization (score 60.919903370002416, solid no) — expected overfitting-and-regularization; not solid; accepted page in top 5
- CAL-073 [page/paraphrase] "reusing a pretrained network for a new task" → (weak) transfer-learning (score 58.30980600425037, solid no) — expected transfer-learning; not solid; accepted page in top 5
- CAL-074 [page/paraphrase] "agents that learn by trial reward and penalty" → (weak) reward-hacking (score 85.29591617184255, solid no) — expected reinforcement-learning; not solid; accepted page in top 5
- CAL-075 [page/paraphrase] "networks designed for grids of pixels" → (weak) convolutional-neural-networks (score 65.98075845248943, solid no) — expected convolutional-neural-networks; not solid; accepted page in top 5
- CAL-076 [page/paraphrase] "networks that process sequences one step at a time with a hidden state" → (weak) recurrent-neural-networks (score 63.12880132991767, solid no) — expected recurrent-neural-networks; not solid; accepted page in top 5
- CAL-078 [page/paraphrase] "only some specialist subnetworks are activated per input" → (weak) mixture-of-experts (score 93.87588741093657, solid no) — expected mixture-of-experts; not solid; accepted page in top 5
- CAL-080 [page/paraphrase] "systems that generate images by gradually removing noise" → (weak) diffusion-models (score 57.92407331778943, solid no) — expected diffusion-models; not solid; accepted page in top 5
- CAL-084 [page/paraphrase] "encoding the order of words in a sequence" → (weak) positional-encoding (score 94.94668617976464, solid no) — expected positional-encoding; not solid; accepted page in top 5
- CAL-086 [page/paraphrase] "training a base model to follow user instructions" → (weak) instruction-tuning (score 118.65596281171693, solid no) — expected instruction-tuning; not solid; accepted page in top 5
- CAL-087 [page/paraphrase] "cheap adaptation by training small low rank matrices" → (weak) lora-and-peft (score 59.46320834920762, solid no) — expected lora-and-peft; not solid; accepted page in top 5
- CAL-088 [page/paraphrase] "shrinking model weights to fewer bits to save memory" → (weak) quantization (score 69.67361526901732, solid no) — expected quantization; not solid; accepted page in top 5
- CAL-091 [page/paraphrase] "compact models that run on phones" → (weak) small-language-models (score 118.62502184801087, solid no) — expected small-language-models; not solid; accepted page in top 5
- CAL-092 [page/paraphrase] "models whose parameters you can download" → (weak) open-weights-models (score 93.25750204449612, solid no) — expected open-weights-models; not solid; accepted page in top 5
- CAL-093 [page/paraphrase] "models that answer questions about pictures" → (weak) vision-language-models (score 108.50263469554173, solid no) — expected vision-language-models; not solid; accepted page in top 5
- CAL-095 [page/paraphrase] "extracting information from scanned forms and pdfs" → (weak) document-understanding-ai (score 174.73742175897152, solid no) — expected document-understanding-ai; not solid; accepted page in top 5
- CAL-096 [page/paraphrase] "agents talking to each other using a shared protocol from google" → (weak) gmail-for-ai-agents (score 72.78972895731746, solid no) — expected a2a-protocol; not solid; accepted page in top 5
- CAL-097 [page/paraphrase] "security risks when assistants connect to tool servers" → (weak) mcp-security (score 84.32132805270292, solid no) — expected mcp-security; not solid; accepted page in top 5
- CAL-101 [page/paraphrase] "simple command line tool to download and chat with local models" → (weak) ollama (score 63.049965170238146, solid no) — expected ollama; not solid; accepted page in top 5
- CAL-103 [page/paraphrase] "alternate between thinking and acting with observations" → (weak) thinking-budgets (score 42.94564632551425, solid no) — expected react-agent-pattern; not solid; accepted page in top 5
- CAL-104 [page/paraphrase] "agents that click and type on a computer screen" → (weak) computer-use-agents (score 108.36988730404124, solid no) — expected computer-use-agents; not solid; accepted page in top 5
- CAL-105 [page/paraphrase] "running generated code safely in isolation" → (weak) code-execution-sandboxing (score 148.7568367908719, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- CAL-107 [page/paraphrase] "retrieval over a network of connected entities" → (weak) graph-rag (score 121.63845762256032, solid no) — expected graph-rag; not solid; accepted page in top 5
- CAL-108 [page/paraphrase] "deciding what information goes into the model's window" → (weak) context-engineering (score 73.13042340549622, solid no) — expected context-engineering; not solid; accepted page in top 5
- CAL-109 [page/paraphrase] "public scoreboards comparing models" → (weak) benchmarks-and-leaderboards (score 52.439180949472785, solid no) — expected benchmarks-and-leaderboards; not solid; accepted page in top 5
- CAL-110 [page/paraphrase] "test questions leaking into training data" → (weak) benchmark-contamination (score 61.20826583872744, solid no) — expected benchmark-contamination; not solid; accepted page in top 5
- CAL-114 [page/paraphrase] "chips that make training fast" → (weak) gpus-and-ai-accelerators (score 60.6273306964931, solid no) — expected gpus-and-ai-accelerators; not solid; accepted page in top 5
- CAL-115 [page/paraphrase] "splitting training across many machines" → (weak) distributed-training (score 83.28469049399186, solid no) — expected distributed-training; not solid; accepted page in top 5
- CAL-118 [page/paraphrase] "reusing repeated prompt prefixes to save money" → (weak) prompt-caching (score 148.87107895313443, solid no) — expected prompt-caching; not solid; accepted page in top 5
- CAL-120 [page/paraphrase] "training from human comparisons of two answers" → (weak) rlhf (score 41.015446737162435, solid no) — expected rlhf; not solid; accepted page in top 5
- CAL-121 [page/paraphrase] "model flatters the user instead of being accurate" → (weak) sycophancy (score 58.386089830109725, solid no) — expected sycophancy; not solid; accepted page in top 5
- CAL-122 [page/paraphrase] "attacking a system on purpose to find its weaknesses" → (weak) red-teaming (score 62.21759546151942, solid no) — expected red-teaming; not solid; accepted page in top 5
- CAL-123 [page/paraphrase] "filters that block unsafe inputs and outputs" → (weak) ai-guardrails (score 60.40624174417542, solid no) — expected ai-guardrails; not solid; accepted page in top 5
- CAL-127 [page/paraphrase] "european law classifying systems by risk" → (weak) eu-ai-act (score 75.66321015151729, solid no) — expected eu-ai-act; not solid; accepted page in top 5
- CAL-128 [page/paraphrase] "documentation describing a model's intended use and limits" → (weak) model-cards (score 100.4337759004737, solid no) — expected model-cards; not solid; accepted page in top 5
- CAL-131 [page/paraphrase] "systems that physically interact with the world using perception and action" → (weak) world-models (score 50.05644287145378, solid no) — expected embodied-ai; not solid; accepted page in top 5
- CAL-132 [page/paraphrase] "learning from demonstrations by an expert" → (weak) imitation-learning (score 65.60666938555916, solid no) — expected imitation-learning; not solid; accepted page in top 5
- CAL-135 [page/paraphrase] "finding and locating items in pictures with boxes" → (weak) agent-memory (score 85.39658346740873, solid no) — expected object-detection; not solid; accepted page in top 5
- CAL-136 [page/paraphrase] "european privacy regulation and automated processing" → (weak) eu-ai-act (score 83.58111482049632, solid no) — expected gdpr-and-ai; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAL-001 | FALSE POSITIVE | page | a program that learns from examples instead of explicit rules | supervised-learning | 53.70576254348728 | yes | — | confident wrong page: supervised-learning |
| CAL-002 | MISS | page | software that writes new text and images on its own | (weak) multimodal-ai | 76.42589962450813 | no | — | no accepted page in top 5 |
| CAL-003 | MISS | page | chatbots like the ones everyone talks about, how are they built | (weak) ai-agent-vs-chatbot | 29.852600407211526 | no | — | no accepted page in top 5 |
| CAL-004 | WEAK | page | why do language models chop words into pieces | (weak) small-language-models | 70.60056997562725 | no | — | not solid; accepted page in top 5 |
| CAL-005 | PASS | page | how much text can a model remember in one conversation | context-windows | 65.91678177431938 | yes | — |  |
| CAL-006 | MISS | page | the architecture behind modern chat models that looks at all words at once | (weak) model-apis | 51.11538648705334 | no | — | no accepted page in top 5 |
| CAL-007 | WEAK | page | models that understand pictures as well as words | (weak) vision-language-models | 84.54000981601146 | no | — | not solid; accepted page in top 5 |
| CAL-008 | WEAK | page | how to phrase instructions so the model does what i want | (weak) sycophancy | 54.98543343837218 | no | — | not solid; accepted page in top 5 |
| CAL-009 | FALSE POSITIVE | page | the hidden instructions that set the assistant's personality | prompt-injection | 56 | yes | — | confident wrong page: prompt-injection |
| CAL-010 | MISS | page | my assistant keeps making up facts, why | (weak) ai-agent-vs-chatbot | 47.157103150472366 | no | — | no accepted page in top 5 |
| CAL-011 | WEAK | page | ways to stop a chatbot inventing sources | (weak) ai-agent-vs-chatbot | 51.7087445308365 | no | — | not solid; accepted page in top 5 |
| CAL-012 | WEAK | page | turning sentences into lists of numbers so similar ones cluster | (weak) tokens | 65.68522783183523 | no | — | not solid; accepted page in top 5 |
| CAL-013 | WEAK | page | database designed to find nearest neighbours of numeric representations | (weak) vector-database-vs-traditional-database | 119.91408844208567 | no | — | not solid; accepted page in top 5 |
| CAL-014 | PASS | page | how should i split long documents before indexing them | chunking | 98.41627217465336 | yes | — |  |
| CAL-015 | WEAK | page | letting a model look things up in my own documents before answering | (weak) large-language-models | 48.138005031980136 | no | — | not solid; accepted page in top 5 |
| CAL-016 | WEAK | page | teaching an existing model my company's style with more training | (weak) fine-tuning | 70.0009086677696 | no | — | not solid; accepted page in top 5 |
| CAL-017 | PASS | page | run a language model on my own laptop without internet | local-ai | 73.28668087122435 | yes | — |  |
| CAL-018 | WEAK | page | is it safe to give a chatbot confidential company information | (weak) ai-agent-vs-chatbot | 37.83841810203515 | no | — | not solid; accepted page in top 5 |
| CAL-019 | PASS | page | a malicious web page tells my assistant to ignore its rules | prompt-injection | 58.20255896161639 | yes | — |  |
| CAL-020 | WEAK | page | a model that plans steps and uses software on its own to finish a goal | (weak) ai-agent-vs-chatbot | 73.48227621520994 | no | — | not solid; accepted page in top 5 |
| CAL-021 | MISS | page | how can a model press buttons in other programs | (weak) model-apis | 57.06962498821184 | no | — | no accepted page in top 5 |
| CAL-022 | WEAK | page | getting the model to return a call to my function with arguments | (weak) function-calling | 87.77346131163965 | no | — | not solid; accepted page in top 5 |
| CAL-023 | PASS | page | how does an assistant remember things between sessions | agent-memory | 95.71013584373793 | yes | — |  |
| CAL-024 | WEAK | page | several specialised bots cooperating on a job | (weak) a2a-protocol | 55.86200419397633 | no | — | not solid; accepted page in top 5 |
| CAL-025 | WEAK | page | a standard way for assistants to plug into external data sources | (weak) mcp | 78.4211726092469 | no | — | not solid; accepted page in top 5 |
| CAL-026 | WEAK | page | which is better for adding knowledge, retrieval or extra training | (weak) rag | 85.03578303291364 | no | — | not solid; accepted page in top 5 |
| CAL-027 | WEAK | page | difference between a simple chat bot and an autonomous one | (weak) ai-agent-vs-chatbot | 55.52670241363326 | no | — | not solid; accepted page in top 5 |
| CAL-028 | FALSE POSITIVE | page | using python to call a hosted language model | python | 100.14710955450172 | yes | — | confident wrong page: python |
| CAL-029 | FALSE POSITIVE | page | which python packages should i learn for machine learning work | python | 64.11447648380008 | yes | — | confident wrong page: python |
| CAL-030 | MISS | page | showing the answer word by word as it is generated | (weak) tokens | 67.10918110368021 | no | — | no accepted page in top 5 |
| CAL-031 | FALSE POSITIVE | page | building a chat window in a javascript ui library | javascript | 60.00776909611179 | yes | — | confident wrong page: javascript |
| CAL-032 | FALSE POSITIVE | page | which toolkit to pick for building an assistant with tools | agent-tools | 55.43543734948585 | yes | — | confident wrong page: agent-tools |
| CAL-033 | FALSE POSITIVE | page | where should i keep records for an ai powered app | api-keys | 44 | yes | — | confident wrong page: api-keys |
| CAL-034 | FALSE POSITIVE | page | how does a bot get permission to read my email | gmail-for-ai-agents | 53.97504861147843 | yes | — | confident wrong page: gmail-for-ai-agents |
| CAL-035 | MISS | page | a format for data made of curly braces and key value pairs | (weak) lora-and-peft | 55.61844069484991 | no | — | no accepted page in top 5 |
| CAL-036 | MISS | page | how do two programs talk to each other over the web | (weak) build-spfx-web-part | 47.38515040427163 | no | — | no accepted page in top 5 |
| CAL-037 | MISS | page | proving who you are when calling a web service | (weak) function-calling-vs-mcp | 36.81790044053677 | no | — | no accepted page in top 5 |
| CAL-038 | WEAK | page | microsoft's workplace intranet and document libraries | (weak) sharepoint | 68.89638427252359 | no | — | not solid; accepted page in top 5 |
| CAL-039 | FALSE POSITIVE | page | custom components for microsoft's intranet written in typescript | typescript | 66.46065978517692 | yes | — | confident wrong page: typescript |
| CAL-040 | WEAK | page | microsoft's api for accessing mail, files and calendars of users | (weak) api-keys | 50.98678995893449 | no | — | not solid; accepted page in top 5 |
| CAL-041 | WEAK | page | low code apps and automations from microsoft | (weak) microsoft-365 | 59.43574267495985 | no | — | not solid; accepted page in top 5 |
| CAL-042 | WEAK | page | microsoft's cloud identity and sign in service | (weak) gcp-fundamentals | 47.44998890320039 | no | — | not solid; accepted page in top 5 |
| CAL-043 | PASS | page | hosted open model hub and libraries for transformers | hugging-face | 134.98434420581356 | yes | — |  |
| CAL-044 | FALSE POSITIVE | page | popular toolkit for chaining llm calls together | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| CAL-045 | FALSE POSITIVE | page | programs that load and serve open models on a personal computer | open-weights-models | 114.70232315294844 | yes | — | confident wrong page: open-weights-models |
| CAL-046 | MISS | page | a language that adds types on top of the web scripting language | (weak) go-language | 51.228044768720544 | no | — | no accepted page in top 5 |
| CAL-047 | WEAK | page | systems language focused on memory safety without garbage collection | (weak) agent-memory | 65.16381006679327 | no | — | not solid; accepted page in top 5 |
| CAL-048 | WEAK | page | the markup and styling languages every web page uses | (weak) html-and-css | 55.13633476599665 | no | — | not solid; accepted page in top 5 |
| CAL-049 | WEAK | page | server side runtime that runs scripts outside the browser | (weak) nodejs | 38.86106442637593 | no | — | not solid; accepted page in top 5 |
| CAL-050 | WEAK | page | query language for asking relational tables questions | (weak) sql | 77.12930748668681 | no | — | not solid; accepted page in top 5 |
| CAL-051 | FALSE POSITIVE | page | relational database with a strong extension ecosystem | sql | 59.57847763704288 | yes | — | confident wrong page: sql |
| CAL-052 | WEAK | page | storing documents as flexible json instead of tables | (weak) what-is-json | 71.85426026937031 | no | — | not solid; accepted page in top 5 |
| CAL-053 | WEAK | page | fast in memory store used for caching | (weak) prompt-caching | 77.84115018746603 | no | — | not solid; accepted page in top 5 |
| CAL-054 | MISS | page | versioning code and collaborating with branches | (weak) multi-agent-systems | 73.41835566015403 | no | — | no accepted page in top 5 |
| CAL-055 | MISS | page | packaging apps with all dependencies to run anywhere | (weak) teams-development | 25.991037406646964 | no | — | no accepted page in top 5 |
| CAL-056 | WEAK | page | automatically testing and deploying every commit | (weak) cicd | 39.93144010570467 | no | — | not solid; accepted page in top 5 |
| CAL-057 | WEAK | page | secrets kept outside source code as configuration | (weak) code-execution-sandboxing | 57.31727892657968 | no | — | not solid; accepted page in top 5 |
| CAL-058 | FALSE POSITIVE | page | signed tokens a server hands out after login | tokens | 34 | yes | — | confident wrong page: tokens |
| CAL-059 | WEAK | page | browser rule that blocks requests to other websites | (weak) teams-development | 28.67394898325341 | no | — | not solid; accepted page in top 5 |
| CAL-060 | PASS | page | a server calls my url when something happens | webhooks | 59.45206728592278 | yes | — |  |
| CAL-061 | PASS | page | letting the model think longer before replying improves answers | test-time-compute | 49.83941555410269 | yes | — |  |
| CAL-062 | WEAK | page | models that show step by step thinking before the final answer | (weak) reasoning-models | 88.09611636555091 | no | — | not solid; accepted page in top 5 |
| CAL-063 | WEAK | page | asking the model to explain its steps in sequence | (weak) process-reward-model | 57.63070598763441 | no | — | not solid; accepted page in top 5 |
| CAL-064 | WEAK | page | sampling many answers and picking the most common | (weak) self-consistency | 63.20061634578257 | no | — | not solid; accepted page in top 5 |
| CAL-065 | MISS | page | controlling randomness when a model picks the next word | (weak) large-language-models | 57.80862777687359 | no | — | no accepted page in top 5 |
| CAL-066 | WEAK | page | forcing output to follow a defined shape | (weak) prompt-engineering | 58.979760317018986 | no | — | not solid; accepted page in top 5 |
| CAL-067 | MISS | page | a description of allowed fields and types for data | (weak) json-validation | 81.1118335528919 | no | — | no accepted page in top 5 |
| CAL-068 | WEAK | page | learning from labelled input output pairs | (weak) structured-outputs | 52.18843095469864 | no | — | not solid; accepted page in top 5 |
| CAL-069 | MISS | page | finding patterns in data without answers provided | (weak) common-prompting-mistakes | 50.73426547604528 | no | — | no accepted page in top 5 |
| CAL-070 | WEAK | page | layers of connected units that learn weights | (weak) neural-networks | 67.10787568609055 | no | — | not solid; accepted page in top 5 |
| CAL-071 | WEAK | page | how weights are adjusted by following the slope of the error | (weak) backpropagation-and-gradient-descent | 34.279830549192305 | no | — | not solid; accepted page in top 5 |
| CAL-072 | WEAK | page | when a model memorises training data and fails on new data | (weak) overfitting-and-regularization | 60.919903370002416 | no | — | not solid; accepted page in top 5 |
| CAL-073 | WEAK | page | reusing a pretrained network for a new task | (weak) transfer-learning | 58.30980600425037 | no | — | not solid; accepted page in top 5 |
| CAL-074 | WEAK | page | agents that learn by trial reward and penalty | (weak) reward-hacking | 85.29591617184255 | no | — | not solid; accepted page in top 5 |
| CAL-075 | WEAK | page | networks designed for grids of pixels | (weak) convolutional-neural-networks | 65.98075845248943 | no | — | not solid; accepted page in top 5 |
| CAL-076 | WEAK | page | networks that process sequences one step at a time with a hidden state | (weak) recurrent-neural-networks | 63.12880132991767 | no | — | not solid; accepted page in top 5 |
| CAL-077 | FALSE POSITIVE | page | splitting images into patches and applying attention | transformers | 58.84484255959744 | yes | — | confident wrong page: transformers |
| CAL-078 | WEAK | page | only some specialist subnetworks are activated per input | (weak) mixture-of-experts | 93.87588741093657 | no | — | not solid; accepted page in top 5 |
| CAL-079 | PASS | page | sequence models that avoid quadratic attention cost | state-space-models | 85.54321895112055 | yes | — |  |
| CAL-080 | WEAK | page | systems that generate images by gradually removing noise | (weak) diffusion-models | 57.92407331778943 | no | — | not solid; accepted page in top 5 |
| CAL-081 | PASS | page | two networks competing, one forging and one detecting | generative-adversarial-networks | 58.35852000123014 | yes | — |  |
| CAL-082 | PASS | page | networks that operate on nodes and edges | graph-neural-networks | 85.0567203309764 | yes | — |  |
| CAL-083 | FALSE POSITIVE | page | caching attention keys and values to speed generation | transformers | 44.77789652947233 | yes | — | confident wrong page: transformers |
| CAL-084 | WEAK | page | encoding the order of words in a sequence | (weak) positional-encoding | 94.94668617976464 | no | — | not solid; accepted page in top 5 |
| CAL-085 | MISS | page | how performance improves as models and data grow | (weak) model-drift-and-monitoring | 54.93475583291578 | no | — | no accepted page in top 5 |
| CAL-086 | WEAK | page | training a base model to follow user instructions | (weak) instruction-tuning | 118.65596281171693 | no | — | not solid; accepted page in top 5 |
| CAL-087 | WEAK | page | cheap adaptation by training small low rank matrices | (weak) lora-and-peft | 59.46320834920762 | no | — | not solid; accepted page in top 5 |
| CAL-088 | WEAK | page | shrinking model weights to fewer bits to save memory | (weak) quantization | 69.67361526901732 | no | — | not solid; accepted page in top 5 |
| CAL-089 | PASS | page | a small student model learns to imitate a big teacher | knowledge-distillation | 86.70985786724653 | yes | — |  |
| CAL-090 | PASS | page | small draft model proposes tokens a bigger model verifies | speculative-decoding | 79.89413433136755 | yes | — |  |
| CAL-091 | WEAK | page | compact models that run on phones | (weak) small-language-models | 118.62502184801087 | no | — | not solid; accepted page in top 5 |
| CAL-092 | WEAK | page | models whose parameters you can download | (weak) open-weights-models | 93.25750204449612 | no | — | not solid; accepted page in top 5 |
| CAL-093 | WEAK | page | models that answer questions about pictures | (weak) vision-language-models | 108.50263469554173 | no | — | not solid; accepted page in top 5 |
| CAL-094 | PASS | page | converting spoken audio to text and back | speech-ai | 75.7591810991614 | yes | — |  |
| CAL-095 | WEAK | page | extracting information from scanned forms and pdfs | (weak) document-understanding-ai | 174.73742175897152 | no | — | not solid; accepted page in top 5 |
| CAL-096 | WEAK | page | agents talking to each other using a shared protocol from google | (weak) gmail-for-ai-agents | 72.78972895731746 | no | — | not solid; accepted page in top 5 |
| CAL-097 | WEAK | page | security risks when assistants connect to tool servers | (weak) mcp-security | 84.32132805270292 | no | — | not solid; accepted page in top 5 |
| CAL-098 | PASS | page | graph based framework for stateful agent workflows | langgraph | 80.37377293736496 | yes | — |  |
| CAL-099 | PASS | page | serving models fast with paged attention | vllm | 63.949205386237054 | yes | — |  |
| CAL-100 | FALSE POSITIVE | page | loading quantised models in plain c plus plus | csharp | 20.82196234402154 | yes | — | confident wrong page: csharp |
| CAL-101 | WEAK | page | simple command line tool to download and chat with local models | (weak) ollama | 63.049965170238146 | no | — | not solid; accepted page in top 5 |
| CAL-102 | MISS | page | a library for training deep networks popular in research | (weak) deep-learning | 96.29827158846449 | no | — | no accepted page in top 5 |
| CAL-103 | WEAK | page | alternate between thinking and acting with observations | (weak) thinking-budgets | 42.94564632551425 | no | — | not solid; accepted page in top 5 |
| CAL-104 | WEAK | page | agents that click and type on a computer screen | (weak) computer-use-agents | 108.36988730404124 | no | — | not solid; accepted page in top 5 |
| CAL-105 | WEAK | page | running generated code safely in isolation | (weak) code-execution-sandboxing | 148.7568367908719 | no | — | not solid; accepted page in top 5 |
| CAL-106 | PASS | page | combine keyword and meaning search then reorder results | hybrid-search-and-reranking | 106.1779668776781 | yes | — |  |
| CAL-107 | WEAK | page | retrieval over a network of connected entities | (weak) graph-rag | 121.63845762256032 | no | — | not solid; accepted page in top 5 |
| CAL-108 | WEAK | page | deciding what information goes into the model's window | (weak) context-engineering | 73.13042340549622 | no | — | not solid; accepted page in top 5 |
| CAL-109 | WEAK | page | public scoreboards comparing models | (weak) benchmarks-and-leaderboards | 52.439180949472785 | no | — | not solid; accepted page in top 5 |
| CAL-110 | WEAK | page | test questions leaking into training data | (weak) benchmark-contamination | 61.20826583872744 | no | — | not solid; accepted page in top 5 |
| CAL-111 | PASS | page | using a strong model to grade other model answers | llm-as-a-judge | 64.25116852809009 | yes | — |  |
| CAL-112 | FALSE POSITIVE | page | measuring how good retrieval and answers are in a rag system | rag | 75.63130845499253 | yes | — | confident wrong page: rag |
| CAL-113 | MISS | page | deploying models to production and keeping them healthy | (weak) model-drift-and-monitoring | 68.06172140087685 | no | — | no accepted page in top 5 |
| CAL-114 | WEAK | page | chips that make training fast | (weak) gpus-and-ai-accelerators | 60.6273306964931 | no | — | not solid; accepted page in top 5 |
| CAL-115 | WEAK | page | splitting training across many machines | (weak) distributed-training | 83.28469049399186 | no | — | not solid; accepted page in top 5 |
| CAL-116 | MISS | page | seeing what happens inside every model call in production | (weak) model-apis | 34.58402162084424 | no | — | no accepted page in top 5 |
| CAL-117 | PASS | page | input data changing so a deployed model gets worse | model-drift-and-monitoring | 80.98252090522894 | yes | — |  |
| CAL-118 | WEAK | page | reusing repeated prompt prefixes to save money | (weak) prompt-caching | 148.87107895313443 | no | — | not solid; accepted page in top 5 |
| CAL-119 | MISS | page | making a model behave in line with human values | (weak) rlhf | 48.43718081262932 | no | — | no accepted page in top 5 |
| CAL-120 | WEAK | page | training from human comparisons of two answers | (weak) rlhf | 41.015446737162435 | no | — | not solid; accepted page in top 5 |
| CAL-121 | WEAK | page | model flatters the user instead of being accurate | (weak) sycophancy | 58.386089830109725 | no | — | not solid; accepted page in top 5 |
| CAL-122 | WEAK | page | attacking a system on purpose to find its weaknesses | (weak) red-teaming | 62.21759546151942 | no | — | not solid; accepted page in top 5 |
| CAL-123 | WEAK | page | filters that block unsafe inputs and outputs | (weak) ai-guardrails | 60.40624174417542 | no | — | not solid; accepted page in top 5 |
| CAL-124 | PASS | page | studying circuits inside networks to understand them | mechanistic-interpretability | 56.39310035049869 | yes | — |  |
| CAL-125 | PASS | page | unfair outcomes for certain groups from automated decisions | ai-bias-and-fairness | 57.41070630057274 | yes | — |  |
| CAL-126 | PASS | page | rules and oversight for responsible ai in organisations | ai-governance | 83.49055331474418 | yes | — |  |
| CAL-127 | WEAK | page | european law classifying systems by risk | (weak) eu-ai-act | 75.66321015151729 | no | — | not solid; accepted page in top 5 |
| CAL-128 | WEAK | page | documentation describing a model's intended use and limits | (weak) model-cards | 100.4337759004737 | no | — | not solid; accepted page in top 5 |
| CAL-129 | FALSE POSITIVE | page | list of the top vulnerabilities for llm applications | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| CAL-130 | PASS | page | predicting three dimensional protein shapes | alphafold | 75.8376823475329 | yes | — |  |
| CAL-131 | WEAK | page | systems that physically interact with the world using perception and action | (weak) world-models | 50.05644287145378 | no | — | not solid; accepted page in top 5 |
| CAL-132 | WEAK | page | learning from demonstrations by an expert | (weak) imitation-learning | 65.60666938555916 | no | — | not solid; accepted page in top 5 |
| CAL-133 | FALSE POSITIVE | page | moving a policy from simulation to a physical robot | reinforcement-learning | 23.577227184074204 | yes | — | confident wrong page: reinforcement-learning |
| CAL-134 | FALSE POSITIVE | page | orchestrating containers across many machines | containers | 105.56482312883288 | yes | — | confident wrong page: containers |
| CAL-135 | WEAK | page | finding and locating items in pictures with boxes | (weak) agent-memory | 85.39658346740873 | no | — | not solid; accepted page in top 5 |
| CAL-136 | WEAK | page | european privacy regulation and automated processing | (weak) eu-ai-act | 83.58111482049632 | no | — | not solid; accepted page in top 5 |
| CAL-N01 | PASS | neg | toy transformer robot for kids birthday | (weak) transformers | 53.532380621896664 | no | — | no confident answer |
| CAL-N02 | PASS | neg | are mamba snakes dangerous | (weak) state-space-models | 128.32773197780392 | no | — | no confident answer |
| CAL-N03 | PASS | neg | can my python pet eat mice | (weak) python | 63.214503272843444 | no | — | no confident answer |
| CAL-N04 | PASS | neg | react to this message politely | (weak) react | 62.70471272036086 | no | — | no confident answer |
| CAL-N05 | PASS | neg | docker is a clothing brand right | (weak) docker | 89.85283246266478 | no | — | no confident answer |
| CAL-N06 | PASS | neg | find a real estate agent near me | (weak) ai-agent-vs-chatbot | 61.740817658268796 | no | — | no confident answer |
| CAL-N07 | PASS | neg | buy a model train set | (weak) knowledge-distillation | 39.051072922149515 | no | — | no confident answer |
| CAL-N08 | PASS | neg | how to bake sourdough bread | (weak) tokens | 45.82142444199518 | no | — | no confident answer |
| CAL-N09 | PASS | neg | best pizza in rome | (weak) function-calling | 78.0561905466946 | no | — | no confident answer |
| CAL-N10 | PASS | neg | cheapest flights to lisbon | (weak) cicd | 58.434387594186255 | no | — | no confident answer |
| CAL-N11 | PASS | neg | how do i fix a leaking tap | (weak) common-prompting-mistakes | 51.89211210058014 | no | — | no confident answer |
| CAL-N12 | PASS | neg | symptoms of the flu | (weak) red-teaming | 26.995288912657557 | no | — | no confident answer |
| CAL-N13 | PASS | neg | who won the world cup in 2010 | (weak) world-models | 32.650147008605636 | no | — | no confident answer |
| CAL-N14 | PASS | neg | knit a scarf for beginners | (weak) rag-with-python | 70.44862413087327 | no | — | no confident answer |
| CAL-N15 | PASS | neg | go for a walk after dinner | (weak) function-calling | 25.706561793865127 | no | — | no confident answer |
| CAL-N16 | PASS | neg | swift flight of a bird | (weak) chain-of-thought | 47.8745236888974 | no | — | no confident answer |
| CAL-N17 | PASS | neg | rust on my bicycle chain how to remove | (weak) rust | 70.08244075289593 | no | — | no confident answer |
| CAL-N18 | PASS | neg | java coffee beans origin | (weak) java | 54.12330314086778 | no | — | no confident answer |
| CAL-N19 | PASS | neg | ruby gemstone value | (weak) python | 52.84999311787777 | no | — | no confident answer |
| CAL-N20 | PASS | neg | agent 007 movie order | (weak) ai-agent-vs-chatbot | 78.7180621022228 | no | — | no confident answer |
| CAL-N21 | PASS | neg | fashion model portfolio tips | (weak) small-language-models | 58.34716405936522 | no | — | no confident answer |
| CAL-N22 | PASS | neg | how to train for a marathon | (weak) distributed-training | 42.959177191069855 | no | — | no confident answer |
| CAL-N23 | PASS | neg | token of appreciation gift ideas | (weak) tokens | 59.252309539581574 | no | — | no confident answer |
| CAL-N24 | FALSE POSITIVE | neg | embedding a screw in drywall | embeddings | 47.24294150076777 | yes | — | confident answer for out-of-scope query: embeddings |
| CAL-N25 | PASS | neg | cloud formations explained for kids | (weak) deep-learning | 64.10997851331078 | no | — | no confident answer |
| CAL-N26 | PASS | neg | apple pie recipe | (weak) gpus-and-ai-accelerators | 57.58280343127986 | no | — | no confident answer |
| CAL-N27 | PASS | neg | what is the weather tomorrow | (weak) ai-weather-forecasting | 179.52451306356505 | no | — | no confident answer |
| CAL-N28 | PASS | neg | stock market tips for beginners | (weak) python | 66.56836498916509 | no | — | no confident answer |
| CAL-N29 | PASS | neg | learn guitar chords fast | (weak) transformers | 32.6596764855085 | no | — | no confident answer |
| CAL-N30 | PASS | neg | mortgage rates today | (weak) redis | 71.74575016420886 | no | — | no confident answer |
| CAL-N31 | PASS | neg | tips for a job interview | (weak) rag | 51.90444657965512 | no | — | no confident answer |
| CAL-N32 | PASS | neg | how to grow tomatoes | (weak) python-data-for-ai | 45.71361835284624 | no | — | no confident answer |
| CAL-N33 | PASS | neg | ambassador reception dress code | (weak) system-prompts | 62.10765880167135 | no | — | no confident answer |
| CAL-N34 | PASS | neg | spark plug replacement steps | (weak) system-prompts | 63.97944698549801 | no | — | no confident answer |
| CAL-N35 | PASS | neg | bridge card game rules | (weak) sim-to-real-transfer | 106.16652292428654 | no | — | no confident answer |
| CAL-N36 | PASS | neg | sage herb cooking uses | (weak) rag-vs-fine-tuning | 62.63591053124624 | no | — | no confident answer |
| CAL-N37 | PASS | neg | oracle of delphi history | (weak) microsoft-365 | 52.02594648002305 | no | — | no confident answer |
| CAL-N38 | PASS | neg | chrome plated bumper cleaning | (weak) html-and-css | 43.25319298993378 | no | — | no confident answer |
| CAL-N39 | PASS | neg | spring cleaning checklist | (weak) java | 30.088996849223797 | no | — | no confident answer |
| CAL-N40 | PASS | neg | kernel of corn popcorn tips | (weak) semantic-kernel | 79.61740431056117 | no | — | no confident answer |
| CAL-G01 | PASS | gap | how do i set up terraform modules | (weak) package-managers | 21.588031066056462 | no | — | transparent non-answer |
| CAL-G02 | PASS | gap | what is a service mesh like istio | (weak) hugging-face | 60.80528114938603 | no | — | transparent non-answer |
| CAL-G03 | PASS | gap | explain apache kafka partitions | (weak) rag-frameworks | 30.106638699000783 | no | — | transparent non-answer |
| CAL-G04 | PASS | gap | write an ansible playbook | (weak) html-and-css | 52.38631620478218 | no | — | transparent non-answer |
| CAL-G05 | PASS | gap | best linux distro for servers | (weak) mcp-servers-and-clients | 31.78207022847534 | no | — | transparent non-answer |
| CAL-G06 | PASS | gap | federated learning on phones | (weak) deep-learning | 53.58291093782995 | no | — | transparent non-answer |
| CAL-G07 | PASS | gap | differential privacy for datasets | (weak) physics-informed-neural-networks | 37.787500304341805 | no | — | transparent non-answer |
| CAL-G08 | PASS | gap | time series forecasting with prophet | (weak) test-time-compute | 34.4082652397507 | no | — | transparent non-answer |
| CAL-G09 | PASS | gap | how do recommender systems rank movies | (weak) video-generation-models | 53.58378708842715 | no | — | transparent non-answer |
| CAL-G10 | PASS | gap | configuring nginx reverse proxy | (weak) streaming-ai-with-nodejs | 62.99743247128391 | no | — | transparent non-answer |
| CAL-G11 | PASS | gap | angular vs vue for a new project | (weak) transformers-vs-state-space-models | 40.30427568169924 | no | — | transparent non-answer |
| CAL-G12 | PASS | gap | setting up tls certificates with letsencrypt | (weak) redis | 48.57922831763341 | no | — | transparent non-answer |
