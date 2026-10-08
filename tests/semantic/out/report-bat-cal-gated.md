# Knowledge red-team report — bat-cal-gated

Dataset: `tests/redteam/calibration-semantic.json` sha256 `981c61d4ae5eeaccf380da163bd08de840761f2999a5489bdf9e868b186b03b7`

Total 188 · PASS 79 · WEAK 68 · MISS 20 · FALSE POSITIVE 21
Pass rate 42.0% · False-positive rate 11.2%
Retrieval on page-kind queries (136): top-1 50.7% · top-3 72.1% · top-5 80.9%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/0

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 12 | 12 | 0 | 0 | 0 | 100.0% |
| neg | 40 | 39 | 0 | 0 | 1 | 97.5% |
| page | 136 | 28 | 68 | 20 | 20 | 20.6% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 40 | 39 | 0 | 0 | 1 | 97.5% |
| gap | 12 | 12 | 0 | 0 | 0 | 100.0% |
| paraphrase | 136 | 28 | 68 | 20 | 20 | 20.6% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| cal | 188 | 79 | 68 | 20 | 21 | 42.0% |

## FALSE POSITIVE
- CAL-001 [page/paraphrase] "a program that learns from examples instead of explicit rules" → supervised-learning (score 47, solid yes) — expected what-is-ai; confident wrong page: supervised-learning
- CAL-009 [page/paraphrase] "the hidden instructions that set the assistant's personality" → prompt-injection (score 56, solid yes) — expected system-prompts; confident wrong page: prompt-injection
- CAL-028 [page/paraphrase] "using python to call a hosted language model" → python (score 97.06100569543248, solid yes) — expected calling-ai-apis-with-python; confident wrong page: python
- CAL-029 [page/paraphrase] "which python packages should i learn for machine learning work" → python (score 49, solid yes) — expected python-ai-libraries; confident wrong page: python
- CAL-031 [page/paraphrase] "building a chat window in a javascript ui library" → javascript (score 55, solid yes) — expected react-ai-interfaces; confident wrong page: javascript
- CAL-032 [page/paraphrase] "which toolkit to pick for building an assistant with tools" → agent-tools (score 51.38844203210212, solid yes) — expected choosing-an-agent-framework; confident wrong page: agent-tools
- CAL-033 [page/paraphrase] "where should i keep records for an ai powered app" → api-keys (score 46.733481864454355, solid yes) — expected databases-for-ai-apps; confident wrong page: api-keys
- CAL-034 [page/paraphrase] "how does a bot get permission to read my email" → gmail-for-ai-agents (score 52, solid yes) — expected oauth-for-ai-agents; confident wrong page: gmail-for-ai-agents
- CAL-039 [page/paraphrase] "custom components for microsoft's intranet written in typescript" → typescript (score 61, solid yes) — expected sharepoint-framework; confident wrong page: typescript
- CAL-044 [page/paraphrase] "popular toolkit for chaining llm calls together" → large-language-models (score 27, solid yes) — expected langchain; confident wrong page: large-language-models
- CAL-045 [page/paraphrase] "programs that load and serve open models on a personal computer" → open-weights-models (score 108, solid yes) — expected local-llm-runtimes; confident wrong page: open-weights-models
- CAL-051 [page/paraphrase] "relational database with a strong extension ecosystem" → sql (score 51, solid yes) — expected postgresql; confident wrong page: sql
- CAL-058 [page/paraphrase] "signed tokens a server hands out after login" → tokens (score 34, solid yes) — expected json-web-tokens; confident wrong page: tokens
- CAL-061 [page/paraphrase] "letting the model think longer before replying improves answers" → reasoning-models (score 45, solid yes) — expected test-time-compute; confident wrong page: reasoning-models
- CAL-067 [page/paraphrase] "a description of allowed fields and types for data" → json-validation (score 82.68699413141051, solid yes) — expected json-schema; confident wrong page: json-validation
- CAL-077 [page/paraphrase] "splitting images into patches and applying attention" → transformers (score 57.37984291492013, solid yes) — expected vision-transformers; confident wrong page: transformers
- CAL-100 [page/paraphrase] "loading quantised models in plain c plus plus" → csharp (score 20, solid yes) — expected llama-cpp; confident wrong page: csharp
- CAL-112 [page/paraphrase] "measuring how good retrieval and answers are in a rag system" → rag (score 62, solid yes) — expected rag-evaluation; confident wrong page: rag
- CAL-133 [page/paraphrase] "moving a policy from simulation to a physical robot" → reinforcement-learning (score 23.932397717339946, solid yes) — expected sim-to-real-transfer; confident wrong page: reinforcement-learning
- CAL-134 [page/paraphrase] "orchestrating containers across many machines" → containers (score 100.47711129886964, solid yes) — expected kubernetes; confident wrong page: containers
- CAL-N24 [neg/ambiguous-or-off-topic] "embedding a screw in drywall" → embeddings (score 44, solid yes) — expected none; confident answer for out-of-scope query: embeddings

## MISS
- CAL-002 [page/paraphrase] "software that writes new text and images on its own" → (weak) multimodal-ai (score 69.57818457820892, solid no) — expected generative-ai; no accepted page in top 5
- CAL-003 [page/paraphrase] "chatbots like the ones everyone talks about, how are they built" → (weak) ai-agent-vs-chatbot (score 30.59630619634977, solid no) — expected large-language-models; no accepted page in top 5
- CAL-006 [page/paraphrase] "the architecture behind modern chat models that looks at all words at once" → (weak) model-apis (score 46.733109391926064, solid no) — expected transformers; no accepted page in top 5
- CAL-010 [page/paraphrase] "my assistant keeps making up facts, why" → (weak) ai-agent-vs-chatbot (score 45.01330161423468, solid no) — expected ai-hallucinations; no accepted page in top 5
- CAL-021 [page/paraphrase] "how can a model press buttons in other programs" → (weak) model-apis (score 53.809050857138196, solid no) — expected agent-tools; no accepted page in top 5
- CAL-030 [page/paraphrase] "showing the answer word by word as it is generated" → (weak) tokens (score 61.42513727646516, solid no) — expected streaming-ai-responses; no accepted page in top 5
- CAL-035 [page/paraphrase] "a format for data made of curly braces and key value pairs" → (weak) contrastive-learning-clip (score 42.008829645261294, solid no) — expected what-is-json; no accepted page in top 5
- CAL-036 [page/paraphrase] "how do two programs talk to each other over the web" → (weak) build-spfx-web-part (score 45.94978914835987, solid no) — expected what-is-an-api; no accepted page in top 5
- CAL-037 [page/paraphrase] "proving who you are when calling a web service" → (weak) build-spfx-web-part (score 39.137172489706, solid no) — expected api-authentication; no accepted page in top 5
- CAL-046 [page/paraphrase] "a language that adds types on top of the web scripting language" → (weak) go-language (score 49.36953010724849, solid no) — expected typescript; no accepted page in top 5
- CAL-054 [page/paraphrase] "versioning code and collaborating with branches" → (weak) autogen (score 70.14006693912532, solid no) — expected git; no accepted page in top 5
- CAL-055 [page/paraphrase] "packaging apps with all dependencies to run anywhere" → (weak) teams-development (score 23.716011804314384, solid no) — expected docker; no accepted page in top 5
- CAL-065 [page/paraphrase] "controlling randomness when a model picks the next word" → (weak) large-language-models (score 53.211520714258064, solid no) — expected sampling-and-decoding; no accepted page in top 5
- CAL-069 [page/paraphrase] "finding patterns in data without answers provided" → (weak) common-prompting-mistakes (score 46.92502188775772, solid no) — expected unsupervised-learning; no accepted page in top 5
- CAL-071 [page/paraphrase] "how weights are adjusted by following the slope of the error" → (weak) large-language-models (score 46.709087778266735, solid no) — expected backpropagation-and-gradient-descent; no accepted page in top 5
- CAL-102 [page/paraphrase] "a library for training deep networks popular in research" → (weak) deep-learning (score 90.26897895955474, solid no) — expected pytorch; no accepted page in top 5
- CAL-113 [page/paraphrase] "deploying models to production and keeping them healthy" → (weak) model-drift-and-monitoring (score 67.68823323510517, solid no) — expected mlops; no accepted page in top 5
- CAL-116 [page/paraphrase] "seeing what happens inside every model call in production" → (weak) model-apis (score 32.19622285000939, solid no) — expected llm-observability; no accepted page in top 5
- CAL-119 [page/paraphrase] "making a model behave in line with human values" → (weak) rlhf (score 46.536019273242786, solid no) — expected ai-alignment; no accepted page in top 5
- CAL-135 [page/paraphrase] "finding and locating items in pictures with boxes" → (weak) agent-memory (score 85.3840922726996, solid no) — expected object-detection; no accepted page in top 5

## WEAK
- CAL-004 [page/paraphrase] "why do language models chop words into pieces" → (weak) vision-language-models (score 83.90452504474935, solid no) — expected tokens; not solid; accepted page in top 5
- CAL-007 [page/paraphrase] "models that understand pictures as well as words" → (weak) vision-language-models (score 68.27722216463513, solid no) — expected multimodal-ai; not solid; accepted page in top 5
- CAL-008 [page/paraphrase] "how to phrase instructions so the model does what i want" → (weak) sycophancy (score 57.177717972662684, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- CAL-011 [page/paraphrase] "ways to stop a chatbot inventing sources" → (weak) how-to-reduce-hallucinations (score 50.09615546379682, solid no) — expected how-to-reduce-hallucinations; not solid; accepted page in top 5
- CAL-012 [page/paraphrase] "turning sentences into lists of numbers so similar ones cluster" → (weak) tokens (score 62.23175397792837, solid no) — expected embeddings; not solid; accepted page in top 5
- CAL-013 [page/paraphrase] "database designed to find nearest neighbours of numeric representations" → (weak) vector-database-vs-traditional-database (score 119.87978548005651, solid no) — expected vector-databases; not solid; accepted page in top 5
- CAL-015 [page/paraphrase] "letting a model look things up in my own documents before answering" → (weak) large-language-models (score 48.949688097016036, solid no) — expected rag; not solid; accepted page in top 5
- CAL-016 [page/paraphrase] "teaching an existing model my company's style with more training" → (weak) fine-tuning (score 67.26416218140378, solid no) — expected fine-tuning; not solid; accepted page in top 5
- CAL-018 [page/paraphrase] "is it safe to give a chatbot confidential company information" → (weak) ai-privacy-and-security (score 36.07987545179591, solid no) — expected ai-privacy-and-security; not solid; accepted page in top 5
- CAL-020 [page/paraphrase] "a model that plans steps and uses software on its own to finish a goal" → (weak) agent-planning (score 71.83236377611235, solid no) — expected ai-agents; not solid; accepted page in top 5
- CAL-022 [page/paraphrase] "getting the model to return a call to my function with arguments" → (weak) function-calling (score 82.81998574667219, solid no) — expected function-calling; not solid; accepted page in top 5
- CAL-024 [page/paraphrase] "several specialised bots cooperating on a job" → (weak) multi-agent-systems (score 67.27511046817034, solid no) — expected multi-agent-systems; not solid; accepted page in top 5
- CAL-025 [page/paraphrase] "a standard way for assistants to plug into external data sources" → (weak) mcp (score 67.21830613993178, solid no) — expected mcp; not solid; accepted page in top 5
- CAL-026 [page/paraphrase] "which is better for adding knowledge, retrieval or extra training" → (weak) rag (score 72.95182347226728, solid no) — expected rag-vs-fine-tuning; not solid; accepted page in top 5
- CAL-027 [page/paraphrase] "difference between a simple chat bot and an autonomous one" → (weak) ai-agent-vs-chatbot (score 54.493195656149894, solid no) — expected ai-agent-vs-chatbot; not solid; accepted page in top 5
- CAL-038 [page/paraphrase] "microsoft's workplace intranet and document libraries" → (weak) sharepoint (score 53.390404212389626, solid no) — expected sharepoint; not solid; accepted page in top 5
- CAL-040 [page/paraphrase] "microsoft's api for accessing mail, files and calendars of users" → (weak) api-keys (score 48.58253424319723, solid no) — expected microsoft-graph; not solid; accepted page in top 5
- CAL-041 [page/paraphrase] "low code apps and automations from microsoft" → (weak) microsoft-365 (score 55.480860261585605, solid no) — expected power-platform; not solid; accepted page in top 5
- CAL-042 [page/paraphrase] "microsoft's cloud identity and sign in service" → (weak) gcp-fundamentals (score 46.04843028729527, solid no) — expected microsoft-entra-id; not solid; accepted page in top 5
- CAL-047 [page/paraphrase] "systems language focused on memory safety without garbage collection" → (weak) agent-memory (score 56.07009762194901, solid no) — expected rust; not solid; accepted page in top 5
- CAL-048 [page/paraphrase] "the markup and styling languages every web page uses" → (weak) build-spfx-web-part (score 49.43009394289848, solid no) — expected html-and-css; not solid; accepted page in top 5
- CAL-049 [page/paraphrase] "server side runtime that runs scripts outside the browser" → (weak) nodejs (score 37.218884740103306, solid no) — expected nodejs; not solid; accepted page in top 5
- CAL-050 [page/paraphrase] "query language for asking relational tables questions" → (weak) sql (score 75.33905377081555, solid no) — expected sql; not solid; accepted page in top 5
- CAL-052 [page/paraphrase] "storing documents as flexible json instead of tables" → (weak) json-validation (score 66.10171457879409, solid no) — expected mongodb; not solid; accepted page in top 5
- CAL-053 [page/paraphrase] "fast in memory store used for caching" → (weak) prompt-caching (score 66.9433139528924, solid no) — expected redis; not solid; accepted page in top 5
- CAL-056 [page/paraphrase] "automatically testing and deploying every commit" → (weak) cicd (score 38.13104927578868, solid no) — expected cicd; not solid; accepted page in top 5
- CAL-057 [page/paraphrase] "secrets kept outside source code as configuration" → (weak) code-execution-sandboxing (score 51.16969709546667, solid no) — expected environment-variables; not solid; accepted page in top 5
- CAL-059 [page/paraphrase] "browser rule that blocks requests to other websites" → (weak) javascript-for-ai (score 20.34105949055948, solid no) — expected cors; not solid; accepted page in top 5
- CAL-062 [page/paraphrase] "models that show step by step thinking before the final answer" → (weak) reasoning-models (score 83.91814015351991, solid no) — expected reasoning-models; not solid; accepted page in top 5
- CAL-063 [page/paraphrase] "asking the model to explain its steps in sequence" → (weak) process-reward-model (score 57.12791057932514, solid no) — expected chain-of-thought; not solid; accepted page in top 5
- CAL-064 [page/paraphrase] "sampling many answers and picking the most common" → (weak) self-consistency (score 58.77927062185273, solid no) — expected self-consistency; not solid; accepted page in top 5
- CAL-066 [page/paraphrase] "forcing output to follow a defined shape" → (weak) structured-outputs (score 71.66006823582464, solid no) — expected structured-outputs; not solid; accepted page in top 5
- CAL-068 [page/paraphrase] "learning from labelled input output pairs" → (weak) deep-learning (score 36.38771475628658, solid no) — expected supervised-learning; not solid; accepted page in top 5
- CAL-070 [page/paraphrase] "layers of connected units that learn weights" → (weak) neural-networks (score 64.49914132588326, solid no) — expected neural-networks; not solid; accepted page in top 5
- CAL-072 [page/paraphrase] "when a model memorises training data and fails on new data" → (weak) overfitting-and-regularization (score 55.89487371955885, solid no) — expected overfitting-and-regularization; not solid; accepted page in top 5
- CAL-073 [page/paraphrase] "reusing a pretrained network for a new task" → (weak) transfer-learning (score 54.178748614050384, solid no) — expected transfer-learning; not solid; accepted page in top 5
- CAL-074 [page/paraphrase] "agents that learn by trial reward and penalty" → (weak) reward-hacking (score 81.54022223566773, solid no) — expected reinforcement-learning; not solid; accepted page in top 5
- CAL-075 [page/paraphrase] "networks designed for grids of pixels" → (weak) convolutional-neural-networks (score 60.31920656204, solid no) — expected convolutional-neural-networks; not solid; accepted page in top 5
- CAL-076 [page/paraphrase] "networks that process sequences one step at a time with a hidden state" → (weak) recurrent-neural-networks (score 61.00219385012507, solid no) — expected recurrent-neural-networks; not solid; accepted page in top 5
- CAL-078 [page/paraphrase] "only some specialist subnetworks are activated per input" → (weak) mixture-of-experts (score 80.21014430707373, solid no) — expected mixture-of-experts; not solid; accepted page in top 5
- CAL-080 [page/paraphrase] "systems that generate images by gradually removing noise" → (weak) diffusion-models (score 54.74552806484641, solid no) — expected diffusion-models; not solid; accepted page in top 5
- CAL-085 [page/paraphrase] "how performance improves as models and data grow" → (weak) model-drift-and-monitoring (score 53.51109168577484, solid no) — expected scaling-laws; not solid; accepted page in top 5
- CAL-086 [page/paraphrase] "training a base model to follow user instructions" → (weak) instruction-tuning (score 117.52503730218291, solid no) — expected instruction-tuning; not solid; accepted page in top 5
- CAL-087 [page/paraphrase] "cheap adaptation by training small low rank matrices" → (weak) lora-and-peft (score 56.453590481848615, solid no) — expected lora-and-peft; not solid; accepted page in top 5
- CAL-088 [page/paraphrase] "shrinking model weights to fewer bits to save memory" → (weak) quantization (score 73.15170413140913, solid no) — expected quantization; not solid; accepted page in top 5
- CAL-092 [page/paraphrase] "models whose parameters you can download" → (weak) open-weights-models (score 89.86181229890326, solid no) — expected open-weights-models; not solid; accepted page in top 5
- CAL-093 [page/paraphrase] "models that answer questions about pictures" → (weak) vision-language-models (score 88.81149208971463, solid no) — expected vision-language-models; not solid; accepted page in top 5
- CAL-096 [page/paraphrase] "agents talking to each other using a shared protocol from google" → (weak) gmail-for-ai-agents (score 67.93407156978658, solid no) — expected a2a-protocol; not solid; accepted page in top 5
- CAL-097 [page/paraphrase] "security risks when assistants connect to tool servers" → (weak) mcp-security (score 78.63840528029841, solid no) — expected mcp-security; not solid; accepted page in top 5
- CAL-101 [page/paraphrase] "simple command line tool to download and chat with local models" → (weak) ollama (score 59.791168300619134, solid no) — expected ollama; not solid; accepted page in top 5
- CAL-103 [page/paraphrase] "alternate between thinking and acting with observations" → (weak) thinking-budgets (score 36.78156019767081, solid no) — expected react-agent-pattern; not solid; accepted page in top 5
- CAL-104 [page/paraphrase] "agents that click and type on a computer screen" → (weak) computer-use-agents (score 101.74607743088825, solid no) — expected computer-use-agents; not solid; accepted page in top 5
- CAL-107 [page/paraphrase] "retrieval over a network of connected entities" → (weak) graph-rag (score 112.69416048406245, solid no) — expected graph-rag; not solid; accepted page in top 5
- CAL-108 [page/paraphrase] "deciding what information goes into the model's window" → (weak) context-engineering (score 66.44234550952422, solid no) — expected context-engineering; not solid; accepted page in top 5
- CAL-109 [page/paraphrase] "public scoreboards comparing models" → (weak) reasoning-vs-standard-models (score 48.833624425138375, solid no) — expected benchmarks-and-leaderboards; not solid; accepted page in top 5
- CAL-110 [page/paraphrase] "test questions leaking into training data" → (weak) benchmark-contamination (score 58.7855666876607, solid no) — expected benchmark-contamination; not solid; accepted page in top 5
- CAL-114 [page/paraphrase] "chips that make training fast" → (weak) quantization (score 47.804394445034276, solid no) — expected gpus-and-ai-accelerators; not solid; accepted page in top 5
- CAL-115 [page/paraphrase] "splitting training across many machines" → (weak) distributed-training (score 80.11789250065121, solid no) — expected distributed-training; not solid; accepted page in top 5
- CAL-120 [page/paraphrase] "training from human comparisons of two answers" → (weak) rlhf (score 37.44992539808378, solid no) — expected rlhf; not solid; accepted page in top 5
- CAL-121 [page/paraphrase] "model flatters the user instead of being accurate" → (weak) sycophancy (score 52.113367403377886, solid no) — expected sycophancy; not solid; accepted page in top 5
- CAL-122 [page/paraphrase] "attacking a system on purpose to find its weaknesses" → (weak) red-teaming (score 64.69666184423531, solid no) — expected red-teaming; not solid; accepted page in top 5
- CAL-123 [page/paraphrase] "filters that block unsafe inputs and outputs" → (weak) ai-guardrails (score 59.6562991335378, solid no) — expected ai-guardrails; not solid; accepted page in top 5
- CAL-127 [page/paraphrase] "european law classifying systems by risk" → (weak) eu-ai-act (score 76.60550916454939, solid no) — expected eu-ai-act; not solid; accepted page in top 5
- CAL-128 [page/paraphrase] "documentation describing a model's intended use and limits" → (weak) model-cards (score 94.98304936057542, solid no) — expected model-cards; not solid; accepted page in top 5
- CAL-129 [page/paraphrase] "list of the top vulnerabilities for llm applications" → (weak) owasp-llm-top-10 (score 136.642356065211, solid no) — expected owasp-llm-top-10; not solid; accepted page in top 5
- CAL-131 [page/paraphrase] "systems that physically interact with the world using perception and action" → (weak) world-models (score 42.572418999524686, solid no) — expected embodied-ai; not solid; accepted page in top 5
- CAL-132 [page/paraphrase] "learning from demonstrations by an expert" → (weak) imitation-learning (score 61.36241831383896, solid no) — expected imitation-learning; not solid; accepted page in top 5
- CAL-136 [page/paraphrase] "european privacy regulation and automated processing" → (weak) gdpr-and-ai (score 80.26790588974886, solid no) — expected gdpr-and-ai; not solid; accepted page in top 5

## Path completeness failures

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| CAL-001 | FALSE POSITIVE | page | a program that learns from examples instead of explicit rules | supervised-learning | 47 | yes | — | confident wrong page: supervised-learning |
| CAL-002 | MISS | page | software that writes new text and images on its own | (weak) multimodal-ai | 69.57818457820892 | no | — | no accepted page in top 5 |
| CAL-003 | MISS | page | chatbots like the ones everyone talks about, how are they built | (weak) ai-agent-vs-chatbot | 30.59630619634977 | no | — | no accepted page in top 5 |
| CAL-004 | WEAK | page | why do language models chop words into pieces | (weak) vision-language-models | 83.90452504474935 | no | — | not solid; accepted page in top 5 |
| CAL-005 | PASS | page | how much text can a model remember in one conversation | context-windows | 54 | yes | — |  |
| CAL-006 | MISS | page | the architecture behind modern chat models that looks at all words at once | (weak) model-apis | 46.733109391926064 | no | — | no accepted page in top 5 |
| CAL-007 | WEAK | page | models that understand pictures as well as words | (weak) vision-language-models | 68.27722216463513 | no | — | not solid; accepted page in top 5 |
| CAL-008 | WEAK | page | how to phrase instructions so the model does what i want | (weak) sycophancy | 57.177717972662684 | no | — | not solid; accepted page in top 5 |
| CAL-009 | FALSE POSITIVE | page | the hidden instructions that set the assistant's personality | prompt-injection | 56 | yes | — | confident wrong page: prompt-injection |
| CAL-010 | MISS | page | my assistant keeps making up facts, why | (weak) ai-agent-vs-chatbot | 45.01330161423468 | no | — | no accepted page in top 5 |
| CAL-011 | WEAK | page | ways to stop a chatbot inventing sources | (weak) how-to-reduce-hallucinations | 50.09615546379682 | no | — | not solid; accepted page in top 5 |
| CAL-012 | WEAK | page | turning sentences into lists of numbers so similar ones cluster | (weak) tokens | 62.23175397792837 | no | — | not solid; accepted page in top 5 |
| CAL-013 | WEAK | page | database designed to find nearest neighbours of numeric representations | (weak) vector-database-vs-traditional-database | 119.87978548005651 | no | — | not solid; accepted page in top 5 |
| CAL-014 | PASS | page | how should i split long documents before indexing them | chunking | 80 | yes | — |  |
| CAL-015 | WEAK | page | letting a model look things up in my own documents before answering | (weak) large-language-models | 48.949688097016036 | no | — | not solid; accepted page in top 5 |
| CAL-016 | WEAK | page | teaching an existing model my company's style with more training | (weak) fine-tuning | 67.26416218140378 | no | — | not solid; accepted page in top 5 |
| CAL-017 | PASS | page | run a language model on my own laptop without internet | local-ai | 63 | yes | — |  |
| CAL-018 | WEAK | page | is it safe to give a chatbot confidential company information | (weak) ai-privacy-and-security | 36.07987545179591 | no | — | not solid; accepted page in top 5 |
| CAL-019 | PASS | page | a malicious web page tells my assistant to ignore its rules | prompt-injection | 55 | yes | — |  |
| CAL-020 | WEAK | page | a model that plans steps and uses software on its own to finish a goal | (weak) agent-planning | 71.83236377611235 | no | — | not solid; accepted page in top 5 |
| CAL-021 | MISS | page | how can a model press buttons in other programs | (weak) model-apis | 53.809050857138196 | no | — | no accepted page in top 5 |
| CAL-022 | WEAK | page | getting the model to return a call to my function with arguments | (weak) function-calling | 82.81998574667219 | no | — | not solid; accepted page in top 5 |
| CAL-023 | PASS | page | how does an assistant remember things between sessions | agent-memory | 89 | yes | — |  |
| CAL-024 | WEAK | page | several specialised bots cooperating on a job | (weak) multi-agent-systems | 67.27511046817034 | no | — | not solid; accepted page in top 5 |
| CAL-025 | WEAK | page | a standard way for assistants to plug into external data sources | (weak) mcp | 67.21830613993178 | no | — | not solid; accepted page in top 5 |
| CAL-026 | WEAK | page | which is better for adding knowledge, retrieval or extra training | (weak) rag | 72.95182347226728 | no | — | not solid; accepted page in top 5 |
| CAL-027 | WEAK | page | difference between a simple chat bot and an autonomous one | (weak) ai-agent-vs-chatbot | 54.493195656149894 | no | — | not solid; accepted page in top 5 |
| CAL-028 | FALSE POSITIVE | page | using python to call a hosted language model | python | 97.06100569543248 | yes | — | confident wrong page: python |
| CAL-029 | FALSE POSITIVE | page | which python packages should i learn for machine learning work | python | 49 | yes | — | confident wrong page: python |
| CAL-030 | MISS | page | showing the answer word by word as it is generated | (weak) tokens | 61.42513727646516 | no | — | no accepted page in top 5 |
| CAL-031 | FALSE POSITIVE | page | building a chat window in a javascript ui library | javascript | 55 | yes | — | confident wrong page: javascript |
| CAL-032 | FALSE POSITIVE | page | which toolkit to pick for building an assistant with tools | agent-tools | 51.38844203210212 | yes | — | confident wrong page: agent-tools |
| CAL-033 | FALSE POSITIVE | page | where should i keep records for an ai powered app | api-keys | 46.733481864454355 | yes | — | confident wrong page: api-keys |
| CAL-034 | FALSE POSITIVE | page | how does a bot get permission to read my email | gmail-for-ai-agents | 52 | yes | — | confident wrong page: gmail-for-ai-agents |
| CAL-035 | MISS | page | a format for data made of curly braces and key value pairs | (weak) contrastive-learning-clip | 42.008829645261294 | no | — | no accepted page in top 5 |
| CAL-036 | MISS | page | how do two programs talk to each other over the web | (weak) build-spfx-web-part | 45.94978914835987 | no | — | no accepted page in top 5 |
| CAL-037 | MISS | page | proving who you are when calling a web service | (weak) build-spfx-web-part | 39.137172489706 | no | — | no accepted page in top 5 |
| CAL-038 | WEAK | page | microsoft's workplace intranet and document libraries | (weak) sharepoint | 53.390404212389626 | no | — | not solid; accepted page in top 5 |
| CAL-039 | FALSE POSITIVE | page | custom components for microsoft's intranet written in typescript | typescript | 61 | yes | — | confident wrong page: typescript |
| CAL-040 | WEAK | page | microsoft's api for accessing mail, files and calendars of users | (weak) api-keys | 48.58253424319723 | no | — | not solid; accepted page in top 5 |
| CAL-041 | WEAK | page | low code apps and automations from microsoft | (weak) microsoft-365 | 55.480860261585605 | no | — | not solid; accepted page in top 5 |
| CAL-042 | WEAK | page | microsoft's cloud identity and sign in service | (weak) gcp-fundamentals | 46.04843028729527 | no | — | not solid; accepted page in top 5 |
| CAL-043 | PASS | page | hosted open model hub and libraries for transformers | hugging-face | 129.6493452680627 | yes | — |  |
| CAL-044 | FALSE POSITIVE | page | popular toolkit for chaining llm calls together | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| CAL-045 | FALSE POSITIVE | page | programs that load and serve open models on a personal computer | open-weights-models | 108 | yes | — | confident wrong page: open-weights-models |
| CAL-046 | MISS | page | a language that adds types on top of the web scripting language | (weak) go-language | 49.36953010724849 | no | — | no accepted page in top 5 |
| CAL-047 | WEAK | page | systems language focused on memory safety without garbage collection | (weak) agent-memory | 56.07009762194901 | no | — | not solid; accepted page in top 5 |
| CAL-048 | WEAK | page | the markup and styling languages every web page uses | (weak) build-spfx-web-part | 49.43009394289848 | no | — | not solid; accepted page in top 5 |
| CAL-049 | WEAK | page | server side runtime that runs scripts outside the browser | (weak) nodejs | 37.218884740103306 | no | — | not solid; accepted page in top 5 |
| CAL-050 | WEAK | page | query language for asking relational tables questions | (weak) sql | 75.33905377081555 | no | — | not solid; accepted page in top 5 |
| CAL-051 | FALSE POSITIVE | page | relational database with a strong extension ecosystem | sql | 51 | yes | — | confident wrong page: sql |
| CAL-052 | WEAK | page | storing documents as flexible json instead of tables | (weak) json-validation | 66.10171457879409 | no | — | not solid; accepted page in top 5 |
| CAL-053 | WEAK | page | fast in memory store used for caching | (weak) prompt-caching | 66.9433139528924 | no | — | not solid; accepted page in top 5 |
| CAL-054 | MISS | page | versioning code and collaborating with branches | (weak) autogen | 70.14006693912532 | no | — | no accepted page in top 5 |
| CAL-055 | MISS | page | packaging apps with all dependencies to run anywhere | (weak) teams-development | 23.716011804314384 | no | — | no accepted page in top 5 |
| CAL-056 | WEAK | page | automatically testing and deploying every commit | (weak) cicd | 38.13104927578868 | no | — | not solid; accepted page in top 5 |
| CAL-057 | WEAK | page | secrets kept outside source code as configuration | (weak) code-execution-sandboxing | 51.16969709546667 | no | — | not solid; accepted page in top 5 |
| CAL-058 | FALSE POSITIVE | page | signed tokens a server hands out after login | tokens | 34 | yes | — | confident wrong page: tokens |
| CAL-059 | WEAK | page | browser rule that blocks requests to other websites | (weak) javascript-for-ai | 20.34105949055948 | no | — | not solid; accepted page in top 5 |
| CAL-060 | PASS | page | a server calls my url when something happens | webhooks | 58.63653567893067 | yes | — |  |
| CAL-061 | FALSE POSITIVE | page | letting the model think longer before replying improves answers | reasoning-models | 45 | yes | — | confident wrong page: reasoning-models |
| CAL-062 | WEAK | page | models that show step by step thinking before the final answer | (weak) reasoning-models | 83.91814015351991 | no | — | not solid; accepted page in top 5 |
| CAL-063 | WEAK | page | asking the model to explain its steps in sequence | (weak) process-reward-model | 57.12791057932514 | no | — | not solid; accepted page in top 5 |
| CAL-064 | WEAK | page | sampling many answers and picking the most common | (weak) self-consistency | 58.77927062185273 | no | — | not solid; accepted page in top 5 |
| CAL-065 | MISS | page | controlling randomness when a model picks the next word | (weak) large-language-models | 53.211520714258064 | no | — | no accepted page in top 5 |
| CAL-066 | WEAK | page | forcing output to follow a defined shape | (weak) structured-outputs | 71.66006823582464 | no | — | not solid; accepted page in top 5 |
| CAL-067 | FALSE POSITIVE | page | a description of allowed fields and types for data | json-validation | 82.68699413141051 | yes | — | confident wrong page: json-validation |
| CAL-068 | WEAK | page | learning from labelled input output pairs | (weak) deep-learning | 36.38771475628658 | no | — | not solid; accepted page in top 5 |
| CAL-069 | MISS | page | finding patterns in data without answers provided | (weak) common-prompting-mistakes | 46.92502188775772 | no | — | no accepted page in top 5 |
| CAL-070 | WEAK | page | layers of connected units that learn weights | (weak) neural-networks | 64.49914132588326 | no | — | not solid; accepted page in top 5 |
| CAL-071 | MISS | page | how weights are adjusted by following the slope of the error | (weak) large-language-models | 46.709087778266735 | no | — | no accepted page in top 5 |
| CAL-072 | WEAK | page | when a model memorises training data and fails on new data | (weak) overfitting-and-regularization | 55.89487371955885 | no | — | not solid; accepted page in top 5 |
| CAL-073 | WEAK | page | reusing a pretrained network for a new task | (weak) transfer-learning | 54.178748614050384 | no | — | not solid; accepted page in top 5 |
| CAL-074 | WEAK | page | agents that learn by trial reward and penalty | (weak) reward-hacking | 81.54022223566773 | no | — | not solid; accepted page in top 5 |
| CAL-075 | WEAK | page | networks designed for grids of pixels | (weak) convolutional-neural-networks | 60.31920656204 | no | — | not solid; accepted page in top 5 |
| CAL-076 | WEAK | page | networks that process sequences one step at a time with a hidden state | (weak) recurrent-neural-networks | 61.00219385012507 | no | — | not solid; accepted page in top 5 |
| CAL-077 | FALSE POSITIVE | page | splitting images into patches and applying attention | transformers | 57.37984291492013 | yes | — | confident wrong page: transformers |
| CAL-078 | WEAK | page | only some specialist subnetworks are activated per input | (weak) mixture-of-experts | 80.21014430707373 | no | — | not solid; accepted page in top 5 |
| CAL-079 | PASS | page | sequence models that avoid quadratic attention cost | state-space-models | 77 | yes | — |  |
| CAL-080 | WEAK | page | systems that generate images by gradually removing noise | (weak) diffusion-models | 54.74552806484641 | no | — | not solid; accepted page in top 5 |
| CAL-081 | PASS | page | two networks competing, one forging and one detecting | generative-adversarial-networks | 57 | yes | — |  |
| CAL-082 | PASS | page | networks that operate on nodes and edges | graph-neural-networks | 65 | yes | — |  |
| CAL-083 | PASS | page | caching attention keys and values to speed generation | kv-cache | 18 | yes | — |  |
| CAL-084 | PASS | page | encoding the order of words in a sequence | positional-encoding | 88.51624336615248 | yes | — |  |
| CAL-085 | WEAK | page | how performance improves as models and data grow | (weak) model-drift-and-monitoring | 53.51109168577484 | no | — | not solid; accepted page in top 5 |
| CAL-086 | WEAK | page | training a base model to follow user instructions | (weak) instruction-tuning | 117.52503730218291 | no | — | not solid; accepted page in top 5 |
| CAL-087 | WEAK | page | cheap adaptation by training small low rank matrices | (weak) lora-and-peft | 56.453590481848615 | no | — | not solid; accepted page in top 5 |
| CAL-088 | WEAK | page | shrinking model weights to fewer bits to save memory | (weak) quantization | 73.15170413140913 | no | — | not solid; accepted page in top 5 |
| CAL-089 | PASS | page | a small student model learns to imitate a big teacher | knowledge-distillation | 76 | yes | — |  |
| CAL-090 | PASS | page | small draft model proposes tokens a bigger model verifies | speculative-decoding | 62 | yes | — |  |
| CAL-091 | PASS | page | compact models that run on phones | small-language-models | 112.92188462512769 | yes | — |  |
| CAL-092 | WEAK | page | models whose parameters you can download | (weak) open-weights-models | 89.86181229890326 | no | — | not solid; accepted page in top 5 |
| CAL-093 | WEAK | page | models that answer questions about pictures | (weak) vision-language-models | 88.81149208971463 | no | — | not solid; accepted page in top 5 |
| CAL-094 | PASS | page | converting spoken audio to text and back | speech-ai | 62 | yes | — |  |
| CAL-095 | PASS | page | extracting information from scanned forms and pdfs | document-understanding-ai | 155.04156042222854 | yes | — |  |
| CAL-096 | WEAK | page | agents talking to each other using a shared protocol from google | (weak) gmail-for-ai-agents | 67.93407156978658 | no | — | not solid; accepted page in top 5 |
| CAL-097 | WEAK | page | security risks when assistants connect to tool servers | (weak) mcp-security | 78.63840528029841 | no | — | not solid; accepted page in top 5 |
| CAL-098 | PASS | page | graph based framework for stateful agent workflows | langgraph | 67 | yes | — |  |
| CAL-099 | PASS | page | serving models fast with paged attention | vllm | 53 | yes | — |  |
| CAL-100 | FALSE POSITIVE | page | loading quantised models in plain c plus plus | csharp | 20 | yes | — | confident wrong page: csharp |
| CAL-101 | WEAK | page | simple command line tool to download and chat with local models | (weak) ollama | 59.791168300619134 | no | — | not solid; accepted page in top 5 |
| CAL-102 | MISS | page | a library for training deep networks popular in research | (weak) deep-learning | 90.26897895955474 | no | — | no accepted page in top 5 |
| CAL-103 | WEAK | page | alternate between thinking and acting with observations | (weak) thinking-budgets | 36.78156019767081 | no | — | not solid; accepted page in top 5 |
| CAL-104 | WEAK | page | agents that click and type on a computer screen | (weak) computer-use-agents | 101.74607743088825 | no | — | not solid; accepted page in top 5 |
| CAL-105 | PASS | page | running generated code safely in isolation | code-execution-sandboxing | 136.9234035295794 | yes | — |  |
| CAL-106 | PASS | page | combine keyword and meaning search then reorder results | hybrid-search-and-reranking | 89 | yes | — |  |
| CAL-107 | WEAK | page | retrieval over a network of connected entities | (weak) graph-rag | 112.69416048406245 | no | — | not solid; accepted page in top 5 |
| CAL-108 | WEAK | page | deciding what information goes into the model's window | (weak) context-engineering | 66.44234550952422 | no | — | not solid; accepted page in top 5 |
| CAL-109 | WEAK | page | public scoreboards comparing models | (weak) reasoning-vs-standard-models | 48.833624425138375 | no | — | not solid; accepted page in top 5 |
| CAL-110 | WEAK | page | test questions leaking into training data | (weak) benchmark-contamination | 58.7855666876607 | no | — | not solid; accepted page in top 5 |
| CAL-111 | PASS | page | using a strong model to grade other model answers | llm-as-a-judge | 57 | yes | — |  |
| CAL-112 | FALSE POSITIVE | page | measuring how good retrieval and answers are in a rag system | rag | 62 | yes | — | confident wrong page: rag |
| CAL-113 | MISS | page | deploying models to production and keeping them healthy | (weak) model-drift-and-monitoring | 67.68823323510517 | no | — | no accepted page in top 5 |
| CAL-114 | WEAK | page | chips that make training fast | (weak) quantization | 47.804394445034276 | no | — | not solid; accepted page in top 5 |
| CAL-115 | WEAK | page | splitting training across many machines | (weak) distributed-training | 80.11789250065121 | no | — | not solid; accepted page in top 5 |
| CAL-116 | MISS | page | seeing what happens inside every model call in production | (weak) model-apis | 32.19622285000939 | no | — | no accepted page in top 5 |
| CAL-117 | PASS | page | input data changing so a deployed model gets worse | model-drift-and-monitoring | 73 | yes | — |  |
| CAL-118 | PASS | page | reusing repeated prompt prefixes to save money | prompt-caching | 132.84093862717032 | yes | — |  |
| CAL-119 | MISS | page | making a model behave in line with human values | (weak) rlhf | 46.536019273242786 | no | — | no accepted page in top 5 |
| CAL-120 | WEAK | page | training from human comparisons of two answers | (weak) rlhf | 37.44992539808378 | no | — | not solid; accepted page in top 5 |
| CAL-121 | WEAK | page | model flatters the user instead of being accurate | (weak) sycophancy | 52.113367403377886 | no | — | not solid; accepted page in top 5 |
| CAL-122 | WEAK | page | attacking a system on purpose to find its weaknesses | (weak) red-teaming | 64.69666184423531 | no | — | not solid; accepted page in top 5 |
| CAL-123 | WEAK | page | filters that block unsafe inputs and outputs | (weak) ai-guardrails | 59.6562991335378 | no | — | not solid; accepted page in top 5 |
| CAL-124 | PASS | page | studying circuits inside networks to understand them | mechanistic-interpretability | 57.64951648663914 | yes | — |  |
| CAL-125 | PASS | page | unfair outcomes for certain groups from automated decisions | ai-bias-and-fairness | 50 | yes | — |  |
| CAL-126 | PASS | page | rules and oversight for responsible ai in organisations | ai-governance | 70 | yes | — |  |
| CAL-127 | WEAK | page | european law classifying systems by risk | (weak) eu-ai-act | 76.60550916454939 | no | — | not solid; accepted page in top 5 |
| CAL-128 | WEAK | page | documentation describing a model's intended use and limits | (weak) model-cards | 94.98304936057542 | no | — | not solid; accepted page in top 5 |
| CAL-129 | WEAK | page | list of the top vulnerabilities for llm applications | (weak) owasp-llm-top-10 | 136.642356065211 | no | — | not solid; accepted page in top 5 |
| CAL-130 | PASS | page | predicting three dimensional protein shapes | alphafold | 65 | yes | — |  |
| CAL-131 | WEAK | page | systems that physically interact with the world using perception and action | (weak) world-models | 42.572418999524686 | no | — | not solid; accepted page in top 5 |
| CAL-132 | WEAK | page | learning from demonstrations by an expert | (weak) imitation-learning | 61.36241831383896 | no | — | not solid; accepted page in top 5 |
| CAL-133 | FALSE POSITIVE | page | moving a policy from simulation to a physical robot | reinforcement-learning | 23.932397717339946 | yes | — | confident wrong page: reinforcement-learning |
| CAL-134 | FALSE POSITIVE | page | orchestrating containers across many machines | containers | 100.47711129886964 | yes | — | confident wrong page: containers |
| CAL-135 | MISS | page | finding and locating items in pictures with boxes | (weak) agent-memory | 85.3840922726996 | no | — | no accepted page in top 5 |
| CAL-136 | WEAK | page | european privacy regulation and automated processing | (weak) gdpr-and-ai | 80.26790588974886 | no | — | not solid; accepted page in top 5 |
| CAL-N01 | PASS | neg | toy transformer robot for kids birthday | (weak) transformers | 50 | no | — | no confident answer |
| CAL-N02 | PASS | neg | are mamba snakes dangerous | (weak) state-space-models | 130.2632211257153 | no | — | no confident answer |
| CAL-N03 | PASS | neg | can my python pet eat mice | (weak) python | 46 | no | — | no confident answer |
| CAL-N04 | PASS | neg | react to this message politely | (weak) react | 54 | no | — | no confident answer |
| CAL-N05 | PASS | neg | docker is a clothing brand right | (weak) docker | 75 | no | — | no confident answer |
| CAL-N06 | PASS | neg | find a real estate agent near me | (weak) ai-agent-vs-chatbot | 59.127668333090696 | no | — | no confident answer |
| CAL-N07 | PASS | neg | buy a model train set | (weak) knowledge-distillation | 39.87457797070732 | no | — | no confident answer |
| CAL-N08 | PASS | neg | how to bake sourdough bread | (weak) transfer-learning | 40.80631398796365 | no | — | no confident answer |
| CAL-N09 | PASS | neg | best pizza in rome | (weak) function-calling | 51.45738580517382 | no | — | no confident answer |
| CAL-N10 | PASS | neg | cheapest flights to lisbon | (weak) rag-evaluation | 49.05855607318817 | no | — | no confident answer |
| CAL-N11 | PASS | neg | how do i fix a leaking tap | (weak) common-prompting-mistakes | 57.520480982746214 | no | — | no confident answer |
| CAL-N12 | PASS | neg | symptoms of the flu | (weak) how-to-reduce-hallucinations | 29.39392545465722 | no | — | no confident answer |
| CAL-N13 | PASS | neg | who won the world cup in 2010 | (weak) world-models | 33.695025544596234 | no | — | no confident answer |
| CAL-N14 | PASS | neg | knit a scarf for beginners | (weak) python | 90.28959341470397 | no | — | no confident answer |
| CAL-N15 | PASS | neg | go for a walk after dinner | (weak) go-language | 22.971526135793233 | no | — | no confident answer |
| CAL-N16 | PASS | neg | swift flight of a bird | (weak) streaming-ai-responses | 41.432776186781936 | no | — | no confident answer |
| CAL-N17 | PASS | neg | rust on my bicycle chain how to remove | (weak) rust | 46 | no | — | no confident answer |
| CAL-N18 | PASS | neg | java coffee beans origin | (weak) java | 46 | no | — | no confident answer |
| CAL-N19 | PASS | neg | ruby gemstone value | (weak) markov-decision-processes | 82.6004187454522 | no | — | no confident answer |
| CAL-N20 | PASS | neg | agent 007 movie order | (weak) ai-agent-vs-chatbot | 91.57284425083202 | no | — | no confident answer |
| CAL-N21 | PASS | neg | fashion model portfolio tips | (weak) rag-vs-fine-tuning | 46.072573903839206 | no | — | no confident answer |
| CAL-N22 | PASS | neg | how to train for a marathon | (weak) distributed-training | 40.87779418472393 | no | — | no confident answer |
| CAL-N23 | PASS | neg | token of appreciation gift ideas | (weak) tokens | 41 | no | — | no confident answer |
| CAL-N24 | FALSE POSITIVE | neg | embedding a screw in drywall | embeddings | 44 | yes | — | confident answer for out-of-scope query: embeddings |
| CAL-N25 | PASS | neg | cloud formations explained for kids | (weak) deep-learning | 92.90145976650973 | no | — | no confident answer |
| CAL-N26 | PASS | neg | apple pie recipe | (weak) gpus-and-ai-accelerators | 83.59075316486681 | no | — | no confident answer |
| CAL-N27 | PASS | neg | what is the weather tomorrow | (weak) ai-weather-forecasting | 170.54140364132158 | no | — | no confident answer |
| CAL-N28 | PASS | neg | stock market tips for beginners | (weak) prompt-engineering | 60.62453205851328 | no | — | no confident answer |
| CAL-N29 | PASS | neg | learn guitar chords fast | (weak) fine-tuning | 45.05273760973153 | no | — | no confident answer |
| CAL-N30 | PASS | neg | mortgage rates today | (weak) llm-benchmarks-vs-task-evals | 46.389225473978904 | no | — | no confident answer |
| CAL-N31 | PASS | neg | tips for a job interview | (weak) rag | 36.83864151008167 | no | — | no confident answer |
| CAL-N32 | PASS | neg | how to grow tomatoes | (weak) rest-vs-graphql | 27.991514958453592 | no | — | no confident answer |
| CAL-N33 | PASS | neg | ambassador reception dress code | (weak) system-prompts | 56.42000492792943 | no | — | no confident answer |
| CAL-N34 | PASS | neg | spark plug replacement steps | (weak) system-prompts | 30.78143678758899 | no | — | no confident answer |
| CAL-N35 | PASS | neg | bridge card game rules | (weak) sim-to-real-transfer | 91.77333703815901 | no | — | no confident answer |
| CAL-N36 | PASS | neg | sage herb cooking uses | (weak) knowledge-distillation | 59.327273155922946 | no | — | no confident answer |
| CAL-N37 | PASS | neg | oracle of delphi history | (weak) microsoft-365 | 43.78545895217976 | no | — | no confident answer |
| CAL-N38 | PASS | neg | chrome plated bumper cleaning | (weak) agentic-rag | 34.165023171723995 | no | — | no confident answer |
| CAL-N39 | PASS | neg | spring cleaning checklist | (weak) dspy | 31.07495670492591 | no | — | no confident answer |
| CAL-N40 | PASS | neg | kernel of corn popcorn tips | (weak) semantic-kernel | 88.82939341340371 | no | — | no confident answer |
| CAL-G01 | PASS | gap | how do i set up terraform modules | (weak) package-managers | 18.561786949611317 | no | — | transparent non-answer |
| CAL-G02 | PASS | gap | what is a service mesh like istio | (weak) hugging-face | 62.33811012482547 | no | — | transparent non-answer |
| CAL-G03 | PASS | gap | explain apache kafka partitions | (weak) reasoning-transparency | 57.61769696841074 | no | — | transparent non-answer |
| CAL-G04 | PASS | gap | write an ansible playbook | (weak) html-and-css | 45.264160482700646 | no | — | transparent non-answer |
| CAL-G05 | PASS | gap | best linux distro for servers | (weak) mcp-servers-and-clients | 31.72042698023066 | no | — | transparent non-answer |
| CAL-G06 | PASS | gap | federated learning on phones | (weak) deep-learning | 60.78712247291633 | no | — | transparent non-answer |
| CAL-G07 | PASS | gap | differential privacy for datasets | (weak) physics-informed-neural-networks | 31.927292232831824 | no | — | transparent non-answer |
| CAL-G08 | PASS | gap | time series forecasting with prophet | (weak) ai-weather-forecasting | 45.05196816037948 | no | — | transparent non-answer |
| CAL-G09 | PASS | gap | how do recommender systems rank movies | (weak) video-generation-models | 28.87188547848964 | no | — | transparent non-answer |
| CAL-G10 | PASS | gap | configuring nginx reverse proxy | (weak) streaming-ai-with-nodejs | 60.75462984151356 | no | — | transparent non-answer |
| CAL-G11 | PASS | gap | angular vs vue for a new project | (weak) framework-vs-direct-api | 38.157636278164674 | no | — | transparent non-answer |
| CAL-G12 | PASS | gap | setting up tls certificates with letsencrypt | (weak) redis | 47.02750889011969 | no | — | transparent non-answer |
