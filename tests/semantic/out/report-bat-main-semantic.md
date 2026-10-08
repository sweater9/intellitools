# Knowledge red-team report — bat-main-semantic

Dataset: `tests/redteam/frozen-queries.json` sha256 `4982137be9b08e5b5635cf7da758e43f51f0580d5acdb740ad27513aaf026ec0`

Total 426 · PASS 239 · WEAK 93 · MISS 43 · FALSE POSITIVE 51
Pass rate 56.1% · False-positive rate 12.0%
Retrieval on page-kind queries (304): top-1 64.1% · top-3 79.6% · top-5 83.6%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 2/4

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 43 | 30 | 0 | 0 | 13 | 69.8% |
| neg | 79 | 70 | 0 | 0 | 9 | 88.6% |
| page | 304 | 139 | 93 | 43 | 29 | 45.7% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| acronym | 14 | 7 | 3 | 3 | 1 | 50.0% |
| ambiguous-or-off-topic | 73 | 65 | 0 | 0 | 8 | 89.0% |
| architecture | 5 | 2 | 1 | 2 | 0 | 40.0% |
| beginner | 46 | 27 | 7 | 6 | 6 | 58.7% |
| comparison | 9 | 3 | 4 | 2 | 0 | 33.3% |
| concept | 74 | 42 | 22 | 5 | 5 | 56.8% |
| conversational | 3 | 0 | 2 | 1 | 0 | 0.0% |
| coverage-probe | 39 | 27 | 0 | 0 | 12 | 69.2% |
| expert | 16 | 6 | 6 | 0 | 4 | 37.5% |
| implementation | 28 | 14 | 6 | 5 | 3 | 50.0% |
| integration | 5 | 2 | 1 | 1 | 1 | 40.0% |
| mixed-natural | 25 | 6 | 10 | 8 | 1 | 24.0% |
| security | 20 | 7 | 8 | 2 | 3 | 35.0% |
| tech-selection | 1 | 0 | 1 | 0 | 0 | 0.0% |
| troubleshooting | 14 | 3 | 9 | 1 | 1 | 21.4% |
| typo | 16 | 8 | 4 | 0 | 4 | 50.0% |
| vague | 14 | 6 | 4 | 2 | 2 | 42.9% |
| what-to-use | 24 | 14 | 5 | 5 | 0 | 58.3% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 4 | 2 | 1 | 0 | 1 | 50.0% |
| agent | 18 | 6 | 6 | 5 | 1 | 33.3% |
| ai | 37 | 22 | 4 | 4 | 7 | 59.5% |
| amb | 53 | 45 | 0 | 0 | 8 | 84.9% |
| api | 11 | 9 | 0 | 1 | 1 | 81.8% |
| arch | 6 | 3 | 3 | 0 | 0 | 50.0% |
| cloud | 5 | 4 | 1 | 0 | 0 | 80.0% |
| cv | 6 | 2 | 1 | 0 | 3 | 33.3% |
| data | 2 | 2 | 0 | 0 | 0 | 100.0% |
| db | 9 | 8 | 0 | 1 | 0 | 88.9% |
| dev | 15 | 11 | 1 | 0 | 3 | 73.3% |
| devops | 17 | 12 | 1 | 0 | 4 | 70.6% |
| dl | 10 | 4 | 2 | 3 | 1 | 40.0% |
| embed | 2 | 0 | 1 | 1 | 0 | 0.0% |
| eval | 10 | 3 | 4 | 3 | 0 | 30.0% |
| fw | 9 | 7 | 1 | 0 | 1 | 77.8% |
| gov | 8 | 2 | 1 | 2 | 3 | 25.0% |
| js | 3 | 3 | 0 | 0 | 0 | 100.0% |
| json | 4 | 1 | 2 | 0 | 1 | 25.0% |
| llm | 30 | 5 | 16 | 3 | 6 | 16.7% |
| local | 5 | 1 | 3 | 1 | 0 | 20.0% |
| mcp | 7 | 3 | 1 | 2 | 1 | 42.9% |
| mixed | 25 | 6 | 10 | 8 | 1 | 24.0% |
| ml | 7 | 3 | 3 | 1 | 0 | 42.9% |
| mlops | 8 | 3 | 4 | 1 | 0 | 37.5% |
| mm | 2 | 1 | 0 | 0 | 1 | 50.0% |
| ms | 16 | 14 | 0 | 0 | 2 | 87.5% |
| nextjs | 1 | 1 | 0 | 0 | 0 | 100.0% |
| node | 2 | 2 | 0 | 0 | 0 | 100.0% |
| off | 20 | 20 | 0 | 0 | 0 | 100.0% |
| prompt | 4 | 0 | 4 | 0 | 0 | 0.0% |
| python | 6 | 4 | 2 | 0 | 0 | 66.7% |
| rag | 6 | 2 | 2 | 2 | 0 | 33.3% |
| react | 3 | 3 | 0 | 0 | 0 | 100.0% |
| rl | 4 | 1 | 3 | 0 | 0 | 25.0% |
| robot | 7 | 3 | 2 | 0 | 2 | 42.9% |
| runtime | 9 | 4 | 3 | 2 | 0 | 44.4% |
| safety | 7 | 5 | 1 | 1 | 0 | 71.4% |
| science | 5 | 4 | 1 | 0 | 0 | 80.0% |
| sec | 11 | 2 | 5 | 2 | 2 | 18.2% |
| speech | 4 | 1 | 3 | 0 | 0 | 25.0% |
| ts | 2 | 1 | 1 | 0 | 0 | 50.0% |
| vector | 5 | 3 | 0 | 0 | 2 | 60.0% |
| video | 1 | 1 | 0 | 0 | 0 | 100.0% |

## FALSE POSITIVE
- RT018 [page/concept] "how do generative models make pictures out of noise" → generative-ai (score 84, solid yes) — expected diffusion-models; confident wrong page: generative-ai
- RT033 [page/beginner] "what is a prompt and why does wording matter" → common-prompting-mistakes (score 83, solid yes) — expected prompt-engineering|system-prompts; confident wrong page: common-prompting-mistakes
- RT038 [page/expert] "how do reasoning models spend extra tokens before answering" → thinking-budgets (score 84, solid yes) — expected reasoning-models|test-time-compute; confident wrong page: thinking-budgets
- RT041 [page/expert] "reward models trained only on final answers" → process-reward-model (score 88, solid yes) — expected outcome-reward-model; confident wrong page: process-reward-model
- RT046 [page/implementation] "make the model return json that always matches my schema" → json-validation (score 85, solid yes) — expected structured-outputs|constrained-decoding|json-schema; confident wrong page: json-validation
- RT050 [page/troubleshooting] "why is the same prompt giving different answers every time" → common-prompting-mistakes (score 83, solid yes) — expected sampling-and-decoding; confident wrong page: common-prompting-mistakes
- RT063 [page/expert] "hnsw vs ivf index tradeoffs" → vector-database-vs-traditional-database (score 83, solid yes) — expected vector-databases|pgvector; confident wrong page: vector-database-vs-traditional-database
- RT064 [page/typo] "vektor databse basics" → pgvector (score 90, solid yes) — expected vector-databases; confident wrong page: pgvector
- RT071 [page/security] "can a malicious email hijack my agent" → mcp-security (score 82, solid yes) — expected prompt-injection|gmail-for-ai-agents; confident wrong page: mcp-security
- RT087 [page/security] "is it safe to install a random mcp server from github" → mcp-servers-and-clients (score 86, solid yes) — expected mcp-security; confident wrong page: mcp-servers-and-clients
- RT089 [page/beginner] "what is a2a" → a2a-vs-mcp (score 93, solid yes) — expected a2a-protocol; confident wrong page: a2a-vs-mcp
- RT116 [page/beginner] "what is json" → json-schema (score 94, solid yes) — expected what-is-json; confident wrong page: json-schema
- RT122 [page/beginner] "what is inside a json web token" → oauth (score 82, solid yes) — expected json-web-tokens; confident wrong page: oauth
- RT143 [page/beginner] "git basics for beginners" → python-for-ai (score 85, solid yes) — expected git; confident wrong page: python-for-ai
- RT148 [page/implementation] "package an app so it runs the same everywhere" → environment-variables (score 83, solid yes) — expected docker|containers; confident wrong page: environment-variables
- RT160 [page/integration] "let a daemon service call graph without a user" → api-authentication (score 87, solid yes) — expected microsoft-graph|microsoft-entra-id|oauth; confident wrong page: api-authentication
- RT168 [page/concept] "microsoft sdk for plugging llms into dotnet apps" → ai-sdks (score 88, solid yes) — expected semantic-kernel; confident wrong page: ai-sdks
- RT185 [page/beginner] "what is multimodal ai" → generative-ai (score 89, solid yes) — expected multimodal-ai; confident wrong page: generative-ai
- RT187 [page/concept] "what is clip in computer vision" → video-generation-models (score 85, solid yes) — expected contrastive-learning-clip; confident wrong page: video-generation-models
- RT190 [gap/coverage-probe] "how does object detection like yolo work" → object-detection (score 94, solid yes) — expected convolutional-neural-networks|vision-transformers; confident unrelated page: object-detection
- RT191 [gap/coverage-probe] "opencv tutorial for face detection" → object-detection (score 91, solid yes) — expected convolutional-neural-networks; confident unrelated page: object-detection
- RT201 [page/concept] "ai that imagines future states to plan actions" → ai-agents (score 83, solid yes) — expected world-models; confident wrong page: ai-agents
- RT202 [gap/coverage-probe] "how do i program a robot with ros" → robot-operating-system (score 94, solid yes) — expected embodied-ai; confident unrelated page: robot-operating-system
- RT208 [page/security] "standard checklist of security risks for generative ai apps" → nist-ai-rmf (score 85, solid yes) — expected owasp-llm-top-10; confident wrong page: nist-ai-rmf
- RT214 [page/expert] "least privilege design for tool using agents" → mcp-security (score 89, solid yes) — expected integration-permissions|agent-tools|prompt-injection; confident wrong page: mcp-security
- RT235 [page/concept] "certifiable standard for managing ai in an organisation" → ai-governance (score 90, solid yes) — expected iso-iec-42001; confident wrong page: ai-governance
- RT238 [gap/coverage-probe] "what is gdpr and does it cover ai training data" → gdpr-and-ai (score 84, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: gdpr-and-ai
- RT239 [gap/coverage-probe] "ai regulation in the united states" → eu-ai-act (score 88, solid yes) — expected ai-governance|nist-ai-rmf; confident unrelated page: eu-ai-act
- RT260 [page/implementation] "fine tune a 7b model on a single consumer gpu" → quantization (score 83, solid yes) — expected lora-and-peft|fine-tuning; confident wrong page: quantization
- RT268 [page/vague] "ai security" → ai-governance (score 89, solid yes) — expected ai-privacy-and-security|prompt-injection|owasp-llm-top-10; confident wrong page: ai-governance
- RT273 [neg/vague] "learning" → supervised-learning (score 88, solid yes) — expected none; confident answer for out-of-scope query: supervised-learning
- RT281 [page/acronym] "what is hitl in ai workflows" → what-is-an-ai-framework (score 81, solid yes) — expected agentic-workflows|ai-agents; confident wrong page: what-is-an-ai-framework
- RT290 [gap/typo] "kubenetes basics" → kubernetes (score 86, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT291 [page/typo] "langchian agents" → openai-agents-sdk (score 87, solid yes) — expected langchain|agent-frameworks-compared; confident wrong page: openai-agents-sdk
- RT293 [page/typo] "fine tunning vs prompting" → lora-vs-full-fine-tuning (score 86, solid yes) — expected fine-tuning|rag-vs-fine-tuning|prompt-engineering; confident wrong page: lora-vs-full-fine-tuning
- RT296 [gap/coverage-probe] "how do i run a kubernetes cluster" → kubernetes (score 89, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT300 [gap/coverage-probe] "linux command line cheat sheet" → containers (score 84, solid yes) — expected git; confident unrelated page: containers
- RT306 [gap/coverage-probe] "vs code extensions for python" → python-ai-libraries (score 88, solid yes) — expected python; confident unrelated page: python-ai-libraries
- RT308 [gap/coverage-probe] "grpc vs rest" → rest-vs-graphql (score 86, solid yes) — expected rest-apis|what-is-an-api; confident unrelated page: rest-vs-graphql
- RT315 [gap/coverage-probe] "time series forecasting with arima" → ai-weather-forecasting (score 87, solid yes) — expected supervised-learning; confident unrelated page: ai-weather-forecasting
- RT318 [gap/coverage-probe] "what is causal inference" → encoder-decoder-vs-decoder-only (score 90, solid yes) — expected supervised-learning; confident unrelated page: encoder-decoder-vs-decoder-only
- RT327 [gap/coverage-probe] "how do i migrate sharepoint on premises to online" → build-spfx-web-part (score 82, solid yes) — expected sharepoint|microsoft-365; confident unrelated page: build-spfx-web-part
- RT330 [neg/ambiguous-or-off-topic] "mamba snake" → state-space-models (score 94, solid yes) — expected none; confident answer for out-of-scope query: state-space-models
- RT331 [neg/ambiguous-or-off-topic] "python pet" → python (score 98, solid yes) — expected none; confident answer for out-of-scope query: python
- RT332 [neg/ambiguous-or-off-topic] "react to this message" → react-chatbot-state (score 92, solid yes) — expected none; confident answer for out-of-scope query: react-chatbot-state
- RT339 [neg/ambiguous-or-off-topic] "rust remover for bike chains" → rust (score 91, solid yes) — expected none; confident answer for out-of-scope query: rust
- RT346 [neg/ambiguous-or-off-topic] "node of ranvier function" → nodejs (score 86, solid yes) — expected none; confident answer for out-of-scope query: nodejs
- RT353 [neg/ambiguous-or-off-topic] "rag doll sewing pattern" → agentic-rag (score 85, solid yes) — expected none; confident answer for out-of-scope query: agentic-rag
- RT357 [neg/ambiguous-or-off-topic] "popcorn kernel not popping" → semantic-kernel (score 96, solid yes) — expected none; confident answer for out-of-scope query: semantic-kernel
- RT366 [neg/ambiguous-or-off-topic] "reinforcement learning in child psychology rewards" → reinforcement-learning (score 85, solid yes) — expected none; confident answer for out-of-scope query: reinforcement-learning
- RT412 [page/mixed-natural] "how do i let users log in with microsoft to my ai app" → api-authentication (score 80, solid yes) — expected microsoft-entra-id|oauth|openid-connect; confident wrong page: api-authentication

## MISS
- RT003 [page/beginner] "how does chatgpt actually work" → (weak) sycophancy (score 69, solid no) — expected large-language-models|transformers|generative-ai; no accepted page in top 5
- RT006 [page/beginner] "how much text can an llm remember in one go" → (weak) go-language (score 61, solid no) — expected context-windows|tokens; no accepted page in top 5
- RT012 [page/implementation] "reuse imagenet weights for my own photos" → (weak) diffusion-models (score 45, solid no) — expected transfer-learning|convolutional-neural-networks; no accepted page in top 5
- RT019 [page/concept] "two networks competing to make fake images" → (weak) convolutional-neural-networks (score 70, solid no) — expected generative-adversarial-networks; no accepted page in top 5
- RT025 [page/conversational] "hey can you tell me what unsupervised learning even is" → (weak) sycophancy (score 67, solid no) — expected unsupervised-learning; no accepted page in top 5
- RT028 [page/acronym] "gnn use cases" → (weak) computer-use-agents (score 43, solid no) — expected graph-neural-networks; no accepted page in top 5
- RT052 [page/architecture] "design a pipeline that answers questions from our internal wiki" → (weak) agentic-rag (score 66, solid no) — expected rag|chunking|embeddings|vector-databases; no accepted page in top 5
- RT053 [page/implementation] "how big should my chunks be" → (weak) rag-with-python (score 63, solid no) — expected chunking; no accepted page in top 5
- RT059 [page/concept] "how can a computer know two sentences mean the same thing" → (weak) what-is-ai (score 61, solid no) — expected embeddings; no accepted page in top 5
- RT068 [page/integration] "let my assistant send calendar invites on my behalf" → (weak) authentication-vs-authorization (score 76, solid no) — expected connecting-agents-to-apps|oauth-for-ai-agents|integration-permissions|agent-tools; no accepted page in top 5
- RT074 [page/troubleshooting] "agent forgets what we decided yesterday" → (weak) ai-agents (score 66, solid no) — expected agent-memory|context-windows; no accepted page in top 5
- RT075 [page/architecture] "should i use several agents or one" → (weak) ai-agent-vs-chatbot (score 67, solid no) — expected multi-agent-systems|agentic-workflows|ai-agents; no accepted page in top 5
- RT078 [page/what-to-use] "do i even need langchain" → (weak) python-for-ai (score 71, solid no) — expected framework-vs-direct-api|langchain|agent-frameworks-compared; no accepted page in top 5
- RT081 [page/what-to-use] "i need a plan for who does what between agents handling support tickets" → (weak) python-ai-libraries (score 69, solid no) — expected agentic-workflows|multi-agent-systems; no accepted page in top 5
- RT083 [page/beginner] "i keep hearing about mcp, what problem does it solve" → (weak) react-agent-pattern (score 59, solid no) — expected mcp; no accepted page in top 5
- RT085 [page/comparison] "why not just call the api directly instead of mcp" → (weak) function-calling-vs-mcp (score 78, solid no) — expected mcp-vs-api; no accepted page in top 5
- RT113 [page/beginner] "what does restful mean" → (weak) context-windows (score 59, solid no) — expected rest-apis; no accepted page in top 5
- RT134 [page/implementation] "store chat history for an assistant" → (weak) react-chatbot-state (score 77, solid no) — expected databases-for-ai-apps|postgresql-for-ai-apps|agent-memory; no accepted page in top 5
- RT173 [page/what-to-use] "serve a model to hundreds of users" → (weak) local-ai (score 75, solid no) — expected vllm|model-serving-and-inference|local-runtimes-compared; no accepted page in top 5
- RT177 [page/what-to-use] "how do i run a model in the browser" → (weak) javascript-for-ai (score 78, solid no) — expected onnx-runtime|local-ai; no accepted page in top 5
- RT181 [page/comparison] "local model or cloud api for sensitive documents" → (weak) gcp-fundamentals (score 77, solid no) — expected local-ai-vs-cloud-ai|ai-privacy-and-security; no accepted page in top 5
- RT207 [page/security] "remove secrets from a log before sharing it with an ai" → (weak) gmail-for-ai-agents (score 76, solid no) — expected ai-privacy-and-security|llm-observability; no accepted page in top 5
- RT212 [page/security] "can i tell if an image was made by ai" → (weak) ai-hallucinations (score 60, solid no) — expected c2pa-content-provenance; no accepted page in top 5
- RT215 [page/beginner] "how do i know if my ai feature is any good" → (weak) sycophancy (score 67, solid no) — expected ai-evaluation|llm-benchmarks-vs-task-evals; no accepted page in top 5
- RT219 [page/implementation] "build a test set for my rag bot" → (weak) package-managers (score 58, solid no) — expected rag-evaluation|ai-evaluation; no accepted page in top 5
- RT222 [page/what-to-use] "check whether each claim is backed by the source text" → (weak) agentic-workflows (score 68, solid no) — expected how-to-reduce-hallucinations|ai-hallucinations|rag-evaluation; no accepted page in top 5
- RT227 [page/implementation] "log prompts and tokens in production" → (weak) prompt-caching (score 64, solid no) — expected llm-observability; no accepted page in top 5
- RT232 [page/beginner] "who signs off on ai use inside a company" → (weak) environment-variables (score 74, solid no) — expected ai-governance; no accepted page in top 5
- RT237 [page/concept] "are my model's error rates different across demographic groups" → (weak) human-preference-evaluation (score 54, solid no) — expected ai-bias-and-fairness; no accepted page in top 5
- RT246 [page/concept] "can we see inside a neural network" → (weak) convolutional-neural-networks (score 72, solid no) — expected mechanistic-interpretability; no accepted page in top 5
- RT259 [page/concept] "how are base models turned into chat assistants" → (weak) multimodal-ai (score 59, solid no) — expected instruction-tuning|rlhf; no accepted page in top 5
- RT266 [page/vague] "how do i get started with ai" → (weak) llm-observability (score 66, solid no) — expected what-is-ai|python-for-ai|large-language-models; no accepted page in top 5
- RT271 [page/vague] "rag vs" → (weak) llamaindex (score 79, solid no) — expected rag-vs-fine-tuning|rag; no accepted page in top 5
- RT283 [page/acronym] "asr vs tts" → (weak) nodejs-for-ai (score 62, solid no) — expected speech-ai; no accepted page in top 5
- RT287 [page/acronym] "oss vs proprietary models" → (weak) onnx-runtime (score 75, solid no) — expected open-weights-models; no accepted page in top 5
- RT402 [page/mixed-natural] "use a model to check my own answers before sending them to a user" → (weak) ai-evaluation (score 67, solid no) — expected ai-guardrails|llm-as-a-judge|how-to-reduce-hallucinations; no accepted page in top 5
- RT405 [page/mixed-natural] "a model that sees my screen and clicks buttons" → (weak) model-apis (score 78, solid no) — expected computer-use-agents; no accepted page in top 5
- RT408 [page/mixed-natural] "trace every tool call my agent makes" → (weak) webhooks (score 68, solid no) — expected llm-observability|agent-evaluation; no accepted page in top 5
- RT410 [page/mixed-natural] "how do i give an llm access to my database safely" → (weak) oauth-for-ai-agents (score 72, solid no) — expected agent-tools|integration-permissions|databases-for-ai-apps|function-calling; no accepted page in top 5
- RT416 [page/mixed-natural] "why does inference get slower with longer prompts" → (weak) thinking-budgets (score 71, solid no) — expected kv-cache|context-windows|model-serving-and-inference; no accepted page in top 5
- RT422 [page/mixed-natural] "how do i stop my agent from running up a huge bill" → (weak) ai-agent-vs-chatbot (score 71, solid no) — expected llm-cost-optimization|react-agent-pattern|agentic-workflows; no accepted page in top 5
- RT423 [page/mixed-natural] "model says it cannot see my document but i pasted it" → (weak) sql-vs-nosql (score 73, solid no) — expected context-windows|tokens; no accepted page in top 5
- RT426 [page/mixed-natural] "how to get consistent structured data out of messy emails" → (weak) generative-ai (score 65, solid no) — expected structured-outputs|document-understanding-ai|constrained-decoding; no accepted page in top 5

## WEAK
- RT002 [page/beginner] "explain neural nets like im five" → (weak) neural-networks (score 71, solid no) — expected neural-networks|deep-learning; not solid; accepted page in top 5
- RT004 [page/beginner] "why do language models make stuff up" → (weak) ai-hallucinations (score 69, solid no) — expected ai-hallucinations|how-to-reduce-hallucinations; not solid; accepted page in top 5
- RT005 [page/typo] "wats a token in ai" → (weak) tokens (score 72, solid no) — expected tokens; not solid; accepted page in top 5
- RT009 [page/beginner] "labelled versus unlabelled data in machine learning" → (weak) deep-q-networks (score 62, solid no) — expected supervised-learning|unsupervised-learning; not solid; accepted page in top 5
- RT010 [page/concept] "how does a neural network adjust itself while training" → (weak) deep-q-networks (score 75, solid no) — expected backpropagation-and-gradient-descent|neural-networks; not solid; accepted page in top 5
- RT011 [page/troubleshooting] "my classifier is 99 percent on training data and 70 percent on new data" → (weak) neural-networks (score 62, solid no) — expected overfitting-and-regularization; not solid; accepted page in top 5
- RT013 [page/vague] "robot dog learning to walk by trial and error" → (weak) imitation-learning (score 63, solid no) — expected reinforcement-learning|sim-to-real-transfer|embodied-ai; not solid; accepted page in top 5
- RT014 [page/concept] "how do image classifiers detect edges and shapes" → (weak) object-detection (score 70, solid no) — expected convolutional-neural-networks; not solid; accepted page in top 5
- RT015 [page/comparison] "why did transformers replace lstms" → (weak) vision-transformers (score 78, solid no) — expected transformers|recurrent-neural-networks; not solid; accepted page in top 5
- RT016 [page/concept] "attention is all you need explained simply" → (weak) context-windows (score 68, solid no) — expected transformers; not solid; accepted page in top 5
- RT023 [page/expert] "bellman optimality equation intuition" → (weak) markov-decision-processes (score 73, solid no) — expected markov-decision-processes; not solid; accepted page in top 5
- RT024 [page/expert] "why does dqn need a target network" → (weak) deep-q-networks (score 76, solid no) — expected deep-q-networks; not solid; accepted page in top 5
- RT026 [page/acronym] "sgd vs adam which one" → (weak) backpropagation-and-gradient-descent (score 78, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- RT030 [page/typo] "transfomer architecure basics" → (weak) transformers (score 74, solid no) — expected transformers; not solid; accepted page in top 5
- RT032 [page/typo] "embedings vs tokens" → (weak) embeddings (score 75, solid no) — expected embeddings|tokens; not solid; accepted page in top 5
- RT034 [page/what-to-use] "i need to write a good prompt for summarising legal contracts" → (weak) common-prompting-mistakes (score 62, solid no) — expected prompt-engineering|common-prompting-mistakes; not solid; accepted page in top 5
- RT035 [page/implementation] "what goes in a system prompt for a customer support bot" → (weak) system-prompts (score 65, solid no) — expected system-prompts|prompt-engineering; not solid; accepted page in top 5
- RT036 [page/troubleshooting] "the model keeps ignoring my instructions" → (weak) common-prompting-mistakes (score 75, solid no) — expected common-prompting-mistakes|system-prompts|prompt-engineering; not solid; accepted page in top 5
- RT037 [page/comparison] "compare my old system prompt with the new one" → (weak) common-prompting-mistakes (score 74, solid no) — expected system-prompts|prompt-engineering; not solid; accepted page in top 5
- RT040 [page/expert] "step level verifier for maths solutions" → (weak) process-reward-model (score 80, solid no) — expected process-reward-model; not solid; accepted page in top 5
- RT042 [page/expert] "rl with unit test rewards for coding models" → (weak) reinforcement-learning-for-reasoning (score 80, solid no) — expected reinforcement-learning-for-reasoning; not solid; accepted page in top 5
- RT043 [page/conversational] "can i read what the model was thinking before it answered" → (weak) reasoning-transparency (score 77, solid no) — expected reasoning-transparency|reasoning-models; not solid; accepted page in top 5
- RT044 [page/troubleshooting] "my output is truncated when using a thinking model" → (weak) thinking-budgets (score 80, solid no) — expected thinking-budgets|reasoning-models; not solid; accepted page in top 5
- RT045 [page/tech-selection] "when is a thinking model worth the extra cost" → (weak) thinking-budgets (score 78, solid no) — expected reasoning-vs-standard-models|reasoning-models|llm-cost-optimization; not solid; accepted page in top 5
- RT047 [page/expert] "how do grammars restrict which tokens a model can sample" → (weak) constrained-decoding (score 67, solid no) — expected constrained-decoding|grammar-guided-generation; not solid; accepted page in top 5
- RT049 [page/beginner] "what does temperature do" → (weak) sampling-and-decoding (score 74, solid no) — expected sampling-and-decoding; not solid; accepted page in top 5
- RT051 [page/concept] "what is rag in simple words" → (weak) rag (score 76, solid no) — expected rag; not solid; accepted page in top 5
- RT054 [page/troubleshooting] "rag answers sound confident but cite the wrong document" → (weak) common-prompting-mistakes (score 74, solid no) — expected rag-evaluation|how-to-reduce-hallucinations|hybrid-search-and-reranking|rag; not solid; accepted page in top 5
- RT055 [page/comparison] "should i fine tune or use retrieval for company docs" → (weak) rag-vs-fine-tuning (score 76, solid no) — expected rag-vs-fine-tuning; not solid; accepted page in top 5
- RT058 [page/concept] "how do i measure how similar two documents are numerically" → (weak) embeddings (score 64, solid no) — expected embeddings; not solid; accepted page in top 5
- RT066 [page/conversational] "is a bot that only answers questions already an agent" → (weak) agent-protocol-landscape (score 64, solid no) — expected ai-agent-vs-chatbot; not solid; accepted page in top 5
- RT069 [page/integration] "how do i connect an ai agent to slack and jira" → (weak) gmail-for-ai-agents (score 73, solid no) — expected connecting-agents-to-apps|agent-tools|mcp; not solid; accepted page in top 5
- RT070 [page/security] "what permissions should an email reading agent have" → (weak) authentication-vs-authorization (score 77, solid no) — expected integration-permissions|gmail-for-ai-agents|oauth-for-ai-agents; not solid; accepted page in top 5
- RT072 [page/architecture] "how do agents decide which tool to call" → (weak) agent-tools (score 75, solid no) — expected agent-tools|function-calling|react-agent-pattern; not solid; accepted page in top 5
- RT073 [page/troubleshooting] "my agent gets stuck repeating the same step" → (weak) ai-agent-vs-chatbot (score 71, solid no) — expected react-agent-pattern|agentic-workflows|ai-agents; not solid; accepted page in top 5
- RT077 [page/comparison] "langgraph versus crewai" → (weak) crewai (score 75, solid no) — expected agent-frameworks-compared|langgraph|crewai; not solid; accepted page in top 5
- RT092 [page/expert] "where is the agent card published" → (weak) agent-protocol-landscape (score 69, solid no) — expected a2a-protocol; not solid; accepted page in top 5
- RT093 [page/typo] "modle context protocal" → (weak) mcp (score 77, solid no) — expected mcp; not solid; accepted page in top 5
- RT098 [page/troubleshooting] "pip install broke my environment" → (weak) package-managers (score 77, solid no) — expected package-managers|python; not solid; accepted page in top 5
- RT099 [page/vague] "python for machine learning where to begin" → (weak) python-for-ai (score 70, solid no) — expected python-for-ai|python; not solid; accepted page in top 5
- RT101 [page/implementation] "type the response from my ai endpoint" → (weak) nodejs-for-ai (score 71, solid no) — expected typescript-api-client-types|typescript-for-ai; not solid; accepted page in top 5
- RT117 [page/troubleshooting] "unexpected token in json at position 0" → (weak) structured-outputs (score 76, solid no) — expected json-validation|what-is-json; not solid; accepted page in top 5
- RT119 [page/what-to-use] "pretty print and validate this json" → json-validation (score 87, solid yes) — expected json-validation|what-is-json; expected tool not offered: json-formatter
- RT139 [page/security] "my s3 bucket is public by mistake" → (weak) code-execution-sandboxing (score 54, solid no) — expected aws-fundamentals; not solid; accepted page in top 5
- RT146 [page/implementation] "set up automatic tests on every pull request" → (weak) ai-agents (score 64, solid no) — expected cicd|github; not solid; accepted page in top 5
- RT167 [page/concept] "framework where you declare modules and let an optimizer tune the prompts" → (weak) dspy (score 63, solid no) — expected dspy; not solid; accepted page in top 5
- RT171 [page/beginner] "easiest way to pull and chat with an open model on my own pc" → (weak) local-ai-vs-cloud-ai (score 74, solid no) — expected ollama|local-ai; not solid; accepted page in top 5
- RT172 [page/what-to-use] "run an llm on my laptop without a gpu" → (weak) vllm (score 78, solid no) — expected llama-cpp|ollama|local-ai|quantization; not solid; accepted page in top 5
- RT178 [page/concept] "why use pytorch" → (weak) pytorch (score 57, solid no) — expected pytorch; not solid; accepted page in top 5
- RT180 [page/beginner] "can i run ai privately on my own machine" → (weak) local-ai (score 66, solid no) — expected local-ai|local-ai-vs-cloud-ai; not solid; accepted page in top 5
- RT182 [page/concept] "are downloadable models the same as open source" → (weak) open-weights-models (score 79, solid no) — expected open-weights-models; not solid; accepted page in top 5
- RT183 [page/concept] "tiny llms that run on a phone" → (weak) hugging-face (score 76, solid no) — expected small-language-models; not solid; accepted page in top 5
- RT193 [page/implementation] "build a voice assistant with an llm" → (weak) speech-ai (score 76, solid no) — expected speech-ai|ai-agents; not solid; accepted page in top 5
- RT194 [page/security] "can ai clone my voice" → (weak) speech-ai (score 76, solid no) — expected speech-ai|c2pa-content-provenance; not solid; accepted page in top 5
- RT195 [page/concept] "what is whisper" → (weak) speech-ai (score 53, solid no) — expected speech-ai; not solid; accepted page in top 5
- RT199 [page/concept] "teaching a robot by demonstration" → (weak) imitation-learning (score 57, solid no) — expected imitation-learning; not solid; accepted page in top 5
- RT200 [page/troubleshooting] "my policy works in the simulator but not on hardware" → (weak) sim-to-real-transfer (score 71, solid no) — expected sim-to-real-transfer; not solid; accepted page in top 5
- RT204 [page/security] "text hidden in a web page that tells my assistant to misbehave" → (weak) rag (score 68, solid no) — expected prompt-injection; not solid; accepted page in top 5
- RT206 [page/security] "is it ok to paste customer data into chatgpt" → (weak) oauth-for-ai-agents (score 67, solid no) — expected ai-privacy-and-security; not solid; accepted page in top 5
- RT209 [page/security] "how do i red team my chatbot" → (weak) red-teaming (score 77, solid no) — expected red-teaming; not solid; accepted page in top 5
- RT211 [page/security] "how do i sandbox code the model writes" → (weak) code-execution-sandboxing (score 79, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- RT213 [page/security] "what is jailbreaking a model" → (weak) red-teaming (score 75, solid no) — expected prompt-injection|red-teaming; not solid; accepted page in top 5
- RT217 [page/concept] "why are leaderboard rankings misleading" → (weak) benchmarks-and-leaderboards (score 74, solid no) — expected benchmarks-and-leaderboards|benchmark-contamination; not solid; accepted page in top 5
- RT218 [page/concept] "using one model to grade another" → (weak) humaneval (score 58, solid no) — expected llm-as-a-judge; not solid; accepted page in top 5
- RT220 [page/what-to-use] "which metrics for a classifier with rare positives" → (weak) evaluation-metrics-for-ai (score 67, solid no) — expected evaluation-metrics-for-ai; not solid; accepted page in top 5
- RT221 [page/concept] "benchmark where models fix real github issues" → (weak) swe-bench (score 72, solid no) — expected swe-bench; not solid; accepted page in top 5
- RT224 [page/beginner] "how do teams keep ml models running reliably after launch" → (weak) local-ai (score 64, solid no) — expected mlops; not solid; accepted page in top 5
- RT226 [page/troubleshooting] "my model got worse after three months in production" → (weak) model-drift-and-monitoring (score 68, solid no) — expected model-drift-and-monitoring; not solid; accepted page in top 5
- RT228 [page/what-to-use] "how many gpus do i need to serve a 70b model" → (weak) vllm (score 76, solid no) — expected gpus-and-ai-accelerators|model-serving-and-inference|quantization; not solid; accepted page in top 5
- RT230 [page/implementation] "cut my llm bill" → (weak) llm-cost-optimization (score 63, solid no) — expected llm-cost-optimization|prompt-caching; not solid; accepted page in top 5
- RT236 [page/concept] "documentation template for a released model" → (weak) model-cards (score 64, solid no) — expected model-cards; not solid; accepted page in top 5
- RT242 [page/concept] "why do chatbots flatter users" → (weak) sycophancy (score 58, solid no) — expected sycophancy|rlhf; not solid; accepted page in top 5
- RT250 [page/concept] "ai for finding new battery materials" → (weak) ai-materials-discovery (score 74, solid no) — expected ai-materials-discovery; not solid; accepted page in top 5
- RT254 [page/concept] "how does a kv cache save compute" → (weak) kv-cache (score 78, solid no) — expected kv-cache; not solid; accepted page in top 5
- RT255 [page/concept] "what is flash attention" → (weak) flash-attention (score 77, solid no) — expected flash-attention; not solid; accepted page in top 5
- RT256 [page/concept] "how do transformers know word order" → (weak) context-windows (score 70, solid no) — expected positional-encoding; not solid; accepted page in top 5
- RT261 [page/concept] "distilling a big model into a small one" → (weak) knowledge-distillation (score 63, solid no) — expected knowledge-distillation; not solid; accepted page in top 5
- RT264 [page/implementation] "manage what goes into the context window for a long running agent" → (weak) ai-agent-vs-chatbot (score 70, solid no) — expected context-engineering|context-windows|agent-memory; not solid; accepted page in top 5
- RT265 [page/concept] "what are open source models like llama" → (weak) open-weights-models (score 80, solid no) — expected open-weights-models|local-ai; not solid; accepted page in top 5
- RT267 [page/vague] "tell me about agents" → (weak) ai-agents (score 69, solid no) — expected ai-agents; not solid; accepted page in top 5
- RT269 [page/vague] "best way to use ai at work" → (weak) local-ai (score 63, solid no) — expected ai-privacy-and-security|prompt-engineering|ai-governance; not solid; accepted page in top 5
- RT278 [page/acronym] "llm rag mcp relationship" → (weak) mcp (score 72, solid no) — expected rag|mcp|large-language-models; not solid; accepted page in top 5
- RT285 [page/acronym] "crud api example" → (weak) calling-ai-apis-with-javascript (score 80, solid no) — expected rest-apis|what-is-an-api; not solid; accepted page in top 5
- RT403 [page/mixed-natural] "how can i make my chatbot cite its sources" → (weak) reasoning-transparency (score 68, solid no) — expected rag|how-to-reduce-hallucinations; not solid; accepted page in top 5
- RT404 [page/mixed-natural] "why does my assistant lose context in long chats" → (weak) context-windows (score 68, solid no) — expected context-windows|agent-memory; not solid; accepted page in top 5
- RT409 [page/mixed-natural] "keep an ai agent from deleting my files" → (weak) gmail-for-ai-agents (score 73, solid no) — expected integration-permissions|code-execution-sandboxing|agent-tools|ai-guardrails; not solid; accepted page in top 5
- RT411 [page/mixed-natural] "what is tool calling and how do i implement it" → (weak) function-calling (score 70, solid no) — expected function-calling|agent-tools; not solid; accepted page in top 5
- RT415 [page/mixed-natural] "speed up llm responses without hurting quality" → (weak) llm-cost-optimization (score 52, solid no) — expected speculative-decoding|model-serving-and-inference|kv-cache; not solid; accepted page in top 5
- RT417 [page/mixed-natural] "difference between an embedding model and a chat model" → (weak) encoder-decoder-vs-decoder-only (score 72, solid no) — expected embeddings|encoder-decoder-vs-decoder-only|large-language-models; not solid; accepted page in top 5
- RT420 [page/mixed-natural] "safe way to let ai write sql" → (weak) frontend-and-backend (score 70, solid no) — expected sql|agent-tools|code-execution-sandboxing|prompt-injection; not solid; accepted page in top 5
- RT421 [page/mixed-natural] "can i run deepseek or llama privately" → (weak) gbnf-grammars (score 56, solid no) — expected local-ai|open-weights-models|ollama; not solid; accepted page in top 5
- RT424 [page/mixed-natural] "ai to turn meeting recordings into notes" → (weak) react-chatbot-state (score 62, solid no) — expected speech-ai; not solid; accepted page in top 5
- RT425 [page/mixed-natural] "how do i know the model was not trained on my benchmark" → (weak) benchmark-contamination (score 71, solid no) — expected benchmark-contamination; not solid; accepted page in top 5

## Path completeness failures
- RT068 "let my assistant send calendar invites on my behalf" top (weak) authentication-vs-authorization; learn -
- RT070 "what permissions should an email reading agent have" top (weak) authentication-vs-authorization; learn -

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RT001 | PASS | page | ai vs machine learning whats the difference | what-is-ai | 82 | yes | — |  |
| RT002 | WEAK | page | explain neural nets like im five | (weak) neural-networks | 71 | no | — | not solid; accepted page in top 5 |
| RT003 | MISS | page | how does chatgpt actually work | (weak) sycophancy | 69 | no | — | no accepted page in top 5 |
| RT004 | WEAK | page | why do language models make stuff up | (weak) ai-hallucinations | 69 | no | — | not solid; accepted page in top 5 |
| RT005 | WEAK | page | wats a token in ai | (weak) tokens | 72 | no | — | not solid; accepted page in top 5 |
| RT006 | MISS | page | how much text can an llm remember in one go | (weak) go-language | 61 | no | — | no accepted page in top 5 |
| RT007 | PASS | page | what makes a model generative | generative-ai | 82 | yes | — |  |
| RT008 | PASS | page | is deep learning the same as ml | deep-learning | 89 | yes | — |  |
| RT009 | WEAK | page | labelled versus unlabelled data in machine learning | (weak) deep-q-networks | 62 | no | — | not solid; accepted page in top 5 |
| RT010 | WEAK | page | how does a neural network adjust itself while training | (weak) deep-q-networks | 75 | no | — | not solid; accepted page in top 5 |
| RT011 | WEAK | page | my classifier is 99 percent on training data and 70 percent on new data | (weak) neural-networks | 62 | no | — | not solid; accepted page in top 5 |
| RT012 | MISS | page | reuse imagenet weights for my own photos | (weak) diffusion-models | 45 | no | — | no accepted page in top 5 |
| RT013 | WEAK | page | robot dog learning to walk by trial and error | (weak) imitation-learning | 63 | no | — | not solid; accepted page in top 5 |
| RT014 | WEAK | page | how do image classifiers detect edges and shapes | (weak) object-detection | 70 | no | — | not solid; accepted page in top 5 |
| RT015 | WEAK | page | why did transformers replace lstms | (weak) vision-transformers | 78 | no | — | not solid; accepted page in top 5 |
| RT016 | WEAK | page | attention is all you need explained simply | (weak) context-windows | 68 | no | — | not solid; accepted page in top 5 |
| RT017 | PASS | page | what is a latent space | variational-autoencoders | 90 | yes | — |  |
| RT018 | FALSE POSITIVE | page | how do generative models make pictures out of noise | generative-ai | 84 | yes | — | confident wrong page: generative-ai |
| RT019 | MISS | page | two networks competing to make fake images | (weak) convolutional-neural-networks | 70 | no | — | no accepted page in top 5 |
| RT020 | PASS | page | which neural network type handles molecules and social networks | graph-neural-networks | 91 | yes | — |  |
| RT021 | PASS | page | why does adam use decoupled weight decay | overfitting-and-regularization | 81 | yes | — |  |
| RT022 | PASS | page | how does ppo clip the policy update | proximal-policy-optimization | 82 | yes | — |  |
| RT023 | WEAK | page | bellman optimality equation intuition | (weak) markov-decision-processes | 73 | no | — | not solid; accepted page in top 5 |
| RT024 | WEAK | page | why does dqn need a target network | (weak) deep-q-networks | 76 | no | — | not solid; accepted page in top 5 |
| RT025 | MISS | page | hey can you tell me what unsupervised learning even is | (weak) sycophancy | 67 | no | — | no accepted page in top 5 |
| RT026 | WEAK | page | sgd vs adam which one | (weak) backpropagation-and-gradient-descent | 78 | no | — | not solid; accepted page in top 5 |
| RT027 | PASS | page | what is a vae used for | variational-autoencoders | 96 | yes | — |  |
| RT028 | MISS | page | gnn use cases | (weak) computer-use-agents | 43 | no | — | no accepted page in top 5 |
| RT029 | PASS | page | cnn or vit for a small dataset | cnn-vs-vision-transformer | 93 | yes | — |  |
| RT030 | WEAK | page | transfomer architecure basics | (weak) transformers | 74 | no | — | not solid; accepted page in top 5 |
| RT031 | PASS | page | reinforcment learning explaned | reinforcement-learning | 90 | yes | — |  |
| RT032 | WEAK | page | embedings vs tokens | (weak) embeddings | 75 | no | — | not solid; accepted page in top 5 |
| RT033 | FALSE POSITIVE | page | what is a prompt and why does wording matter | common-prompting-mistakes | 83 | yes | — | confident wrong page: common-prompting-mistakes |
| RT034 | WEAK | page | i need to write a good prompt for summarising legal contracts | (weak) common-prompting-mistakes | 62 | no | — | not solid; accepted page in top 5 |
| RT035 | WEAK | page | what goes in a system prompt for a customer support bot | (weak) system-prompts | 65 | no | — | not solid; accepted page in top 5 |
| RT036 | WEAK | page | the model keeps ignoring my instructions | (weak) common-prompting-mistakes | 75 | no | — | not solid; accepted page in top 5 |
| RT037 | WEAK | page | compare my old system prompt with the new one | (weak) common-prompting-mistakes | 74 | no | — | not solid; accepted page in top 5 |
| RT038 | FALSE POSITIVE | page | how do reasoning models spend extra tokens before answering | thinking-budgets | 84 | yes | — | confident wrong page: thinking-budgets |
| RT039 | PASS | page | majority vote across sampled chains of thought | self-consistency | 83 | yes | — |  |
| RT040 | WEAK | page | step level verifier for maths solutions | (weak) process-reward-model | 80 | no | — | not solid; accepted page in top 5 |
| RT041 | FALSE POSITIVE | page | reward models trained only on final answers | process-reward-model | 88 | yes | — | confident wrong page: process-reward-model |
| RT042 | WEAK | page | rl with unit test rewards for coding models | (weak) reinforcement-learning-for-reasoning | 80 | no | — | not solid; accepted page in top 5 |
| RT043 | WEAK | page | can i read what the model was thinking before it answered | (weak) reasoning-transparency | 77 | no | — | not solid; accepted page in top 5 |
| RT044 | WEAK | page | my output is truncated when using a thinking model | (weak) thinking-budgets | 80 | no | — | not solid; accepted page in top 5 |
| RT045 | WEAK | page | when is a thinking model worth the extra cost | (weak) thinking-budgets | 78 | no | — | not solid; accepted page in top 5 |
| RT046 | FALSE POSITIVE | page | make the model return json that always matches my schema | json-validation | 85 | yes | — | confident wrong page: json-validation |
| RT047 | WEAK | page | how do grammars restrict which tokens a model can sample | (weak) constrained-decoding | 67 | no | — | not solid; accepted page in top 5 |
| RT048 | PASS | page | json mode or function calling for extraction | structured-outputs | 91 | yes | — |  |
| RT049 | WEAK | page | what does temperature do | (weak) sampling-and-decoding | 74 | no | — | not solid; accepted page in top 5 |
| RT050 | FALSE POSITIVE | page | why is the same prompt giving different answers every time | common-prompting-mistakes | 83 | yes | — | confident wrong page: common-prompting-mistakes |
| RT051 | WEAK | page | what is rag in simple words | (weak) rag | 76 | no | — | not solid; accepted page in top 5 |
| RT052 | MISS | page | design a pipeline that answers questions from our internal wiki | (weak) agentic-rag | 66 | no | — | no accepted page in top 5 |
| RT053 | MISS | page | how big should my chunks be | (weak) rag-with-python | 63 | no | — | no accepted page in top 5 |
| RT054 | WEAK | page | rag answers sound confident but cite the wrong document | (weak) common-prompting-mistakes | 74 | no | — | not solid; accepted page in top 5 |
| RT055 | WEAK | page | should i fine tune or use retrieval for company docs | (weak) rag-vs-fine-tuning | 76 | no | — | not solid; accepted page in top 5 |
| RT056 | PASS | page | reranking with a cross encoder after bm25 | hybrid-search-and-reranking | 86 | yes | — |  |
| RT057 | PASS | page | multi hop questions over a knowledge graph | graph-rag | 85 | yes | — |  |
| RT058 | WEAK | page | how do i measure how similar two documents are numerically | (weak) embeddings | 64 | no | — | not solid; accepted page in top 5 |
| RT059 | MISS | page | how can a computer know two sentences mean the same thing | (weak) what-is-ai | 61 | no | — | no accepted page in top 5 |
| RT060 | PASS | page | store embeddings in postgres | pgvector | 95 | yes | — |  |
| RT061 | PASS | page | can plain postgres handle semantic search or must i add a vector store | choosing-a-vector-store | 91 | yes | — |  |
| RT062 | PASS | page | which vector store should i pick for a prototype | choosing-a-vector-store | 81 | yes | — |  |
| RT063 | FALSE POSITIVE | page | hnsw vs ivf index tradeoffs | vector-database-vs-traditional-database | 83 | yes | — | confident wrong page: vector-database-vs-traditional-database |
| RT064 | FALSE POSITIVE | page | vektor databse basics | pgvector | 90 | yes | — | confident wrong page: pgvector |
| RT065 | PASS | page | what is an ai agent | ai-agents | 95 | yes | — |  |
| RT066 | WEAK | page | is a bot that only answers questions already an agent | (weak) agent-protocol-landscape | 64 | no | — | not solid; accepted page in top 5 |
| RT067 | PASS | page | i want an ai agent that can read gmail | gmail-for-ai-agents | 86 | yes | — |  |
| RT068 | MISS | page | let my assistant send calendar invites on my behalf | (weak) authentication-vs-authorization | 76 | no | — | no accepted page in top 5 |
| RT069 | WEAK | page | how do i connect an ai agent to slack and jira | (weak) gmail-for-ai-agents | 73 | no | — | not solid; accepted page in top 5 |
| RT070 | WEAK | page | what permissions should an email reading agent have | (weak) authentication-vs-authorization | 77 | no | — | not solid; accepted page in top 5 |
| RT071 | FALSE POSITIVE | page | can a malicious email hijack my agent | mcp-security | 82 | yes | — | confident wrong page: mcp-security |
| RT072 | WEAK | page | how do agents decide which tool to call | (weak) agent-tools | 75 | no | — | not solid; accepted page in top 5 |
| RT073 | WEAK | page | my agent gets stuck repeating the same step | (weak) ai-agent-vs-chatbot | 71 | no | — | not solid; accepted page in top 5 |
| RT074 | MISS | page | agent forgets what we decided yesterday | (weak) ai-agents | 66 | no | — | no accepted page in top 5 |
| RT075 | MISS | page | should i use several agents or one | (weak) ai-agent-vs-chatbot | 67 | no | — | no accepted page in top 5 |
| RT076 | PASS | page | which framework for a production agent | choosing-an-agent-framework | 85 | yes | — |  |
| RT077 | WEAK | page | langgraph versus crewai | (weak) crewai | 75 | no | — | not solid; accepted page in top 5 |
| RT078 | MISS | page | do i even need langchain | (weak) python-for-ai | 71 | no | — | no accepted page in top 5 |
| RT079 | PASS | page | retrieval where the model decides to search again if results look poor | agentic-rag | 81 | yes | — |  |
| RT080 | PASS | page | what is the react prompting pattern for agents | react-agent-pattern | 89 | yes | — |  |
| RT081 | MISS | page | i need a plan for who does what between agents handling support tickets | (weak) python-ai-libraries | 69 | no | — | no accepted page in top 5 |
| RT082 | PASS | page | how do agent evaluation harnesses score tool trajectories | agent-evaluation | 80 | yes | — |  |
| RT083 | MISS | page | i keep hearing about mcp, what problem does it solve | (weak) react-agent-pattern | 59 | no | — | no accepted page in top 5 |
| RT084 | PASS | page | why would i build an mcp server | mcp-servers-and-clients | 89 | yes | — |  |
| RT085 | MISS | page | why not just call the api directly instead of mcp | (weak) function-calling-vs-mcp | 78 | no | — | no accepted page in top 5 |
| RT086 | PASS | page | mcp or plain function calling for my app | function-calling-vs-mcp | 90 | yes | — |  |
| RT087 | FALSE POSITIVE | page | is it safe to install a random mcp server from github | mcp-servers-and-clients | 86 | yes | — | confident wrong page: mcp-servers-and-clients |
| RT088 | PASS | page | tool poisoning in mcp | mcp-security | 97 | yes | — |  |
| RT089 | FALSE POSITIVE | page | what is a2a | a2a-vs-mcp | 93 | yes | — | confident wrong page: a2a-vs-mcp |
| RT090 | PASS | page | are a2a and mcp competitors | a2a-vs-mcp | 86 | yes | — |  |
| RT091 | PASS | page | how would agents from different vendors collaborate | a2a-protocol | 80 | yes | — |  |
| RT092 | WEAK | page | where is the agent card published | (weak) agent-protocol-landscape | 69 | no | — | not solid; accepted page in top 5 |
| RT093 | WEAK | page | modle context protocal | (weak) mcp | 77 | no | — | not solid; accepted page in top 5 |
| RT094 | PASS | page | how do i call an llm api from python | calling-ai-apis-with-python | 97 | yes | — |  |
| RT095 | PASS | page | build a small rag app in python | rag-with-python | 90 | yes | — |  |
| RT096 | PASS | page | read a csv and clean it before sending to a model | python-data-for-ai | 81 | yes | — |  |
| RT097 | PASS | page | which python libraries do i need for ai work | python-ai-libraries | 95 | yes | — |  |
| RT098 | WEAK | page | pip install broke my environment | (weak) package-managers | 77 | no | — | not solid; accepted page in top 5 |
| RT099 | WEAK | page | python for machine learning where to begin | (weak) python-for-ai | 70 | no | — | not solid; accepted page in top 5 |
| RT100 | PASS | page | call an ai api from javascript without exposing my key | javascript-for-ai | 88 | yes | — |  |
| RT101 | WEAK | page | type the response from my ai endpoint | (weak) nodejs-for-ai | 71 | no | — | not solid; accepted page in top 5 |
| RT102 | PASS | page | stream tokens to the browser as they arrive | streaming-ai-responses | 89 | yes | — |  |
| RT103 | PASS | page | manage chat message state in react | react-chatbot-state | 92 | yes | — |  |
| RT104 | PASS | page | build a chat ui with react | react-ai-interfaces | 93 | yes | — |  |
| RT105 | PASS | page | what is react used for | react | 94 | yes | — |  |
| RT106 | PASS | page | should i use next.js for an ai chat app | nextjs | 89 | yes | — |  |
| RT107 | PASS | page | express server that proxies model requests | express | 86 | yes | — |  |
| RT108 | PASS | page | node js streming response | nodejs | 97 | yes | — |  |
| RT109 | PASS | page | why use typescript instead of javascript | typescript | 91 | yes | — |  |
| RT110 | PASS | page | typescript or javascript for a small tool | typescript | 94 | yes | — |  |
| RT111 | PASS | page | what is an api | what-is-an-api | 97 | yes | — |  |
| RT112 | PASS | page | rest vs graphql which one | rest-vs-graphql | 93 | yes | — |  |
| RT113 | MISS | page | what does restful mean | (weak) context-windows | 59 | no | — | no accepted page in top 5 |
| RT114 | PASS | page | where should i keep my api keys | api-keys | 89 | yes | — |  |
| RT115 | PASS | page | api key versus oauth token | api-authentication | 92 | yes | — |  |
| RT116 | FALSE POSITIVE | page | what is json | json-schema | 94 | yes | — | confident wrong page: json-schema |
| RT117 | WEAK | page | unexpected token in json at position 0 | (weak) structured-outputs | 76 | no | — | not solid; accepted page in top 5 |
| RT118 | PASS | page | validate an api payload against a schema | json-validation | 91 | yes | — |  |
| RT119 | WEAK | page | pretty print and validate this json | json-validation | 87 | yes | — | expected tool not offered: json-formatter |
| RT120 | PASS | page | what is a webhook | webhooks | 96 | yes | — |  |
| RT121 | PASS | page | browser says blocked by cors policy | cors | 97 | yes | — |  |
| RT122 | FALSE POSITIVE | page | what is inside a json web token | oauth | 82 | yes | — | confident wrong page: oauth |
| RT123 | PASS | page | difference between authentication and authorization | authentication-vs-authorization | 96 | yes | — |  |
| RT124 | PASS | page | what is the oauth authorization code flow | oauth | 97 | yes | — |  |
| RT125 | PASS | page | openid connect vs oauth | openid-connect | 96 | yes | — |  |
| RT126 | PASS | page | when to use sql vs nosql | sql-vs-nosql | 97 | yes | — |  |
| RT127 | PASS | page | what is a relational database | postgresql | 96 | yes | — |  |
| RT128 | PASS | page | how do i join two tables | sql | 83 | yes | — |  |
| RT129 | PASS | page | postgres or mysql for a new project | mysql | 94 | yes | — |  |
| RT130 | PASS | page | sqlite for a small app | sqlite | 93 | yes | — |  |
| RT131 | PASS | page | what is redis used for | redis | 89 | yes | — |  |
| RT132 | PASS | page | what is an orm | prisma-and-orms | 83 | yes | — |  |
| RT133 | PASS | page | which database should an ai app use | postgresql-for-ai-apps | 89 | yes | — |  |
| RT134 | MISS | page | store chat history for an assistant | (weak) react-chatbot-state | 77 | no | — | no accepted page in top 5 |
| RT135 | PASS | page | what is aws and what are its main services | aws-fundamentals | 89 | yes | — |  |
| RT136 | PASS | page | azure basics for developers | azure-fundamentals | 92 | yes | — |  |
| RT137 | PASS | page | what is gcp | gcp-fundamentals | 91 | yes | — |  |
| RT138 | PASS | page | aws vs azure vs gcp for hosting a model | aws-fundamentals | 88 | yes | — |  |
| RT139 | WEAK | page | my s3 bucket is public by mistake | (weak) code-execution-sandboxing | 54 | no | — | not solid; accepted page in top 5 |
| RT140 | PASS | page | what is docker | docker | 98 | yes | — |  |
| RT141 | PASS | page | container versus virtual machine | containers | 94 | yes | — |  |
| RT142 | PASS | page | what is ci cd | cicd | 96 | yes | — |  |
| RT143 | FALSE POSITIVE | page | git basics for beginners | python-for-ai | 85 | yes | — | confident wrong page: python-for-ai |
| RT144 | PASS | page | git says i have a merge conflict | git | 88 | yes | — |  |
| RT145 | PASS | page | what is github and how is it different from git | git | 93 | yes | — |  |
| RT146 | WEAK | page | set up automatic tests on every pull request | (weak) ai-agents | 64 | no | — | not solid; accepted page in top 5 |
| RT147 | PASS | page | what are environment variables for | environment-variables | 90 | yes | — |  |
| RT148 | FALSE POSITIVE | page | package an app so it runs the same everywhere | environment-variables | 83 | yes | — | confident wrong page: environment-variables |
| RT149 | PASS | page | npm install fails with dependency errors | package-managers | 85 | yes | — |  |
| RT150 | PASS | page | what is sharepoint | sharepoint | 97 | yes | — |  |
| RT151 | PASS | page | what is spfx | sharepoint-framework | 89 | yes | — |  |
| RT152 | PASS | page | build my first spfx web part | build-spfx-web-part | 98 | yes | — |  |
| RT153 | PASS | page | sharepont framwork webpart | sharepoint-framework | 95 | yes | — |  |
| RT154 | PASS | page | what is microsoft graph | microsoft-graph | 96 | yes | — |  |
| RT155 | PASS | page | read a user's calendar through microsoft graph | microsoft-graph | 94 | yes | — |  |
| RT156 | PASS | page | what is entra id | microsoft-entra-id | 98 | yes | — |  |
| RT157 | PASS | page | what is power automate and power apps | power-platform | 98 | yes | — |  |
| RT158 | PASS | page | build a teams tab or bot | teams-development | 96 | yes | — |  |
| RT159 | PASS | page | what is microsoft 365 | microsoft-365 | 98 | yes | — |  |
| RT160 | FALSE POSITIVE | page | let a daemon service call graph without a user | api-authentication | 87 | yes | — | confident wrong page: api-authentication |
| RT161 | PASS | page | spfx or power apps for an intranet form | sharepoint | 94 | yes | — |  |
| RT162 | PASS | page | what is an ai framework | what-is-an-ai-framework | 97 | yes | — |  |
| RT163 | PASS | page | what is hugging face | hugging-face | 92 | yes | — |  |
| RT164 | PASS | page | which sdk should i use to call different models | ai-sdks | 82 | yes | — |  |
| RT165 | PASS | page | what is llamaindex for | llamaindex | 90 | yes | — |  |
| RT166 | PASS | page | langchain or llamaindex for rag | rag-frameworks | 94 | yes | — |  |
| RT167 | WEAK | page | framework where you declare modules and let an optimizer tune the prompts | (weak) dspy | 63 | no | — | not solid; accepted page in top 5 |
| RT168 | FALSE POSITIVE | page | microsoft sdk for plugging llms into dotnet apps | ai-sdks | 88 | yes | — | confident wrong page: ai-sdks |
| RT169 | PASS | page | what is the openai agents sdk | openai-agents-sdk | 98 | yes | — |  |
| RT170 | PASS | page | what is autogen | autogen | 95 | yes | — |  |
| RT171 | WEAK | page | easiest way to pull and chat with an open model on my own pc | (weak) local-ai-vs-cloud-ai | 74 | no | — | not solid; accepted page in top 5 |
| RT172 | WEAK | page | run an llm on my laptop without a gpu | (weak) vllm | 78 | no | — | not solid; accepted page in top 5 |
| RT173 | MISS | page | serve a model to hundreds of users | (weak) local-ai | 75 | no | — | no accepted page in top 5 |
| RT174 | PASS | page | ollama versus vllm | local-runtimes-compared | 85 | yes | — |  |
| RT175 | PASS | page | what is gguf | llama-cpp | 89 | yes | — |  |
| RT176 | PASS | page | what is onnx | onnx-runtime | 89 | yes | — |  |
| RT177 | MISS | page | how do i run a model in the browser | (weak) javascript-for-ai | 78 | no | — | no accepted page in top 5 |
| RT178 | WEAK | page | why use pytorch | (weak) pytorch | 57 | no | — | not solid; accepted page in top 5 |
| RT179 | PASS | page | cuda out of memory when loading a 13b model | gpus-and-ai-accelerators | 83 | yes | — |  |
| RT180 | WEAK | page | can i run ai privately on my own machine | (weak) local-ai | 66 | no | — | not solid; accepted page in top 5 |
| RT181 | MISS | page | local model or cloud api for sensitive documents | (weak) gcp-fundamentals | 77 | no | — | no accepted page in top 5 |
| RT182 | WEAK | page | are downloadable models the same as open source | (weak) open-weights-models | 79 | no | — | not solid; accepted page in top 5 |
| RT183 | WEAK | page | tiny llms that run on a phone | (weak) hugging-face | 76 | no | — | not solid; accepted page in top 5 |
| RT184 | PASS | page | what does 4 bit quantization do | quantization | 91 | yes | — |  |
| RT185 | FALSE POSITIVE | page | what is multimodal ai | generative-ai | 89 | yes | — | confident wrong page: generative-ai |
| RT186 | PASS | page | how do models understand images and text together | vision-language-models | 86 | yes | — |  |
| RT187 | FALSE POSITIVE | page | what is clip in computer vision | video-generation-models | 85 | yes | — | confident wrong page: video-generation-models |
| RT188 | PASS | page | extract text from scanned invoices | document-understanding-ai | 81 | yes | — |  |
| RT189 | PASS | page | vision transformer vs resnet | cnn-vs-vision-transformer | 98 | yes | — |  |
| RT190 | FALSE POSITIVE | gap | how does object detection like yolo work | object-detection | 94 | yes | — | confident unrelated page: object-detection |
| RT191 | FALSE POSITIVE | gap | opencv tutorial for face detection | object-detection | 91 | yes | — | confident unrelated page: object-detection |
| RT192 | PASS | page | how does speech to text work | speech-ai | 92 | yes | — |  |
| RT193 | WEAK | page | build a voice assistant with an llm | (weak) speech-ai | 76 | no | — | not solid; accepted page in top 5 |
| RT194 | WEAK | page | can ai clone my voice | (weak) speech-ai | 76 | no | — | not solid; accepted page in top 5 |
| RT195 | WEAK | page | what is whisper | (weak) speech-ai | 53 | no | — | not solid; accepted page in top 5 |
| RT196 | PASS | page | how do text to video models work | video-generation-models | 91 | yes | — |  |
| RT197 | PASS | page | how do robots learn from ai | embodied-ai | 91 | yes | — |  |
| RT198 | PASS | page | what is a vla model | vision-language-action-models | 93 | yes | — |  |
| RT199 | WEAK | page | teaching a robot by demonstration | (weak) imitation-learning | 57 | no | — | not solid; accepted page in top 5 |
| RT200 | WEAK | page | my policy works in the simulator but not on hardware | (weak) sim-to-real-transfer | 71 | no | — | not solid; accepted page in top 5 |
| RT201 | FALSE POSITIVE | page | ai that imagines future states to plan actions | ai-agents | 83 | yes | — | confident wrong page: ai-agents |
| RT202 | FALSE POSITIVE | gap | how do i program a robot with ros | robot-operating-system | 94 | yes | — | confident unrelated page: robot-operating-system |
| RT203 | PASS | gap | how do self driving cars work | (weak) world-models | 62 | no | — | transparent non-answer |
| RT204 | WEAK | page | text hidden in a web page that tells my assistant to misbehave | (weak) rag | 68 | no | — | not solid; accepted page in top 5 |
| RT205 | PASS | page | ignore previous instructions attack | prompt-injection | 88 | yes | — |  |
| RT206 | WEAK | page | is it ok to paste customer data into chatgpt | (weak) oauth-for-ai-agents | 67 | no | — | not solid; accepted page in top 5 |
| RT207 | MISS | page | remove secrets from a log before sharing it with an ai | (weak) gmail-for-ai-agents | 76 | no | — | no accepted page in top 5 |
| RT208 | FALSE POSITIVE | page | standard checklist of security risks for generative ai apps | nist-ai-rmf | 85 | yes | — | confident wrong page: nist-ai-rmf |
| RT209 | WEAK | page | how do i red team my chatbot | (weak) red-teaming | 77 | no | — | not solid; accepted page in top 5 |
| RT210 | PASS | page | how do guardrails stop harmful output | ai-guardrails | 85 | yes | — |  |
| RT211 | WEAK | page | how do i sandbox code the model writes | (weak) code-execution-sandboxing | 79 | no | — | not solid; accepted page in top 5 |
| RT212 | MISS | page | can i tell if an image was made by ai | (weak) ai-hallucinations | 60 | no | — | no accepted page in top 5 |
| RT213 | WEAK | page | what is jailbreaking a model | (weak) red-teaming | 75 | no | — | not solid; accepted page in top 5 |
| RT214 | FALSE POSITIVE | page | least privilege design for tool using agents | mcp-security | 89 | yes | — | confident wrong page: mcp-security |
| RT215 | MISS | page | how do i know if my ai feature is any good | (weak) sycophancy | 67 | no | — | no accepted page in top 5 |
| RT216 | PASS | page | what does a high score on the 57 subject multiple choice benchmark tell me | mmlu | 85 | yes | — |  |
| RT217 | WEAK | page | why are leaderboard rankings misleading | (weak) benchmarks-and-leaderboards | 74 | no | — | not solid; accepted page in top 5 |
| RT218 | WEAK | page | using one model to grade another | (weak) humaneval | 58 | no | — | not solid; accepted page in top 5 |
| RT219 | MISS | page | build a test set for my rag bot | (weak) package-managers | 58 | no | — | no accepted page in top 5 |
| RT220 | WEAK | page | which metrics for a classifier with rare positives | (weak) evaluation-metrics-for-ai | 67 | no | — | not solid; accepted page in top 5 |
| RT221 | WEAK | page | benchmark where models fix real github issues | (weak) swe-bench | 72 | no | — | not solid; accepted page in top 5 |
| RT222 | MISS | page | check whether each claim is backed by the source text | (weak) agentic-workflows | 68 | no | — | no accepted page in top 5 |
| RT223 | PASS | page | how are chatbot elo rankings made | human-preference-evaluation | 94 | yes | — |  |
| RT224 | WEAK | page | how do teams keep ml models running reliably after launch | (weak) local-ai | 64 | no | — | not solid; accepted page in top 5 |
| RT225 | PASS | page | track experiments and register models | mlflow | 85 | yes | — |  |
| RT226 | WEAK | page | my model got worse after three months in production | (weak) model-drift-and-monitoring | 68 | no | — | not solid; accepted page in top 5 |
| RT227 | MISS | page | log prompts and tokens in production | (weak) prompt-caching | 64 | no | — | no accepted page in top 5 |
| RT228 | WEAK | page | how many gpus do i need to serve a 70b model | (weak) vllm | 76 | no | — | not solid; accepted page in top 5 |
| RT229 | PASS | page | how to split training across several gpus | distributed-training | 85 | yes | — |  |
| RT230 | WEAK | page | cut my llm bill | (weak) llm-cost-optimization | 63 | no | — | not solid; accepted page in top 5 |
| RT231 | PASS | page | what is ray used for | ray | 94 | yes | — |  |
| RT232 | MISS | page | who signs off on ai use inside a company | (weak) environment-variables | 74 | no | — | no accepted page in top 5 |
| RT233 | PASS | page | does the eu ai act apply to my startup | eu-ai-act | 89 | yes | — |  |
| RT234 | PASS | page | what is the nist ai risk framework | nist-ai-rmf | 98 | yes | — |  |
| RT235 | FALSE POSITIVE | page | certifiable standard for managing ai in an organisation | ai-governance | 90 | yes | — | confident wrong page: ai-governance |
| RT236 | WEAK | page | documentation template for a released model | (weak) model-cards | 64 | no | — | not solid; accepted page in top 5 |
| RT237 | MISS | page | are my model's error rates different across demographic groups | (weak) human-preference-evaluation | 54 | no | — | no accepted page in top 5 |
| RT238 | FALSE POSITIVE | gap | what is gdpr and does it cover ai training data | gdpr-and-ai | 84 | yes | — | confident unrelated page: gdpr-and-ai |
| RT239 | FALSE POSITIVE | gap | ai regulation in the united states | eu-ai-act | 88 | yes | — | confident unrelated page: eu-ai-act |
| RT240 | PASS | page | what is sycophancy | sycophancy | 93 | yes | — |  |
| RT241 | PASS | page | how is dpo different from rlhf | dpo-vs-rlhf | 95 | yes | — |  |
| RT242 | WEAK | page | why do chatbots flatter users | (weak) sycophancy | 58 | no | — | not solid; accepted page in top 5 |
| RT243 | PASS | page | what does alignment mean for ai | ai-alignment | 85 | yes | — |  |
| RT244 | PASS | page | reward hacking examples | reward-hacking | 85 | yes | — |  |
| RT245 | PASS | page | ai critiques its own answers using written principles | constitutional-ai-and-rlaif | 84 | yes | — |  |
| RT246 | MISS | page | can we see inside a neural network | (weak) convolutional-neural-networks | 72 | no | — | no accepted page in top 5 |
| RT247 | PASS | page | predict 3d structure from an amino acid sequence | alphafold | 92 | yes | — |  |
| RT248 | PASS | page | neural networks that respect physics equations | physics-informed-neural-networks | 91 | yes | — |  |
| RT249 | PASS | page | can machine learning forecast weather | ai-weather-forecasting | 96 | yes | — |  |
| RT250 | WEAK | page | ai for finding new battery materials | (weak) ai-materials-discovery | 74 | no | — | not solid; accepted page in top 5 |
| RT251 | PASS | page | ai in drug discovery | ai-drug-discovery | 96 | yes | — |  |
| RT252 | PASS | page | model with many experts but only a few active per token | mixture-of-experts | 89 | yes | — |  |
| RT253 | PASS | page | what are state space models and mamba | state-space-models | 97 | yes | — |  |
| RT254 | WEAK | page | how does a kv cache save compute | (weak) kv-cache | 78 | no | — | not solid; accepted page in top 5 |
| RT255 | WEAK | page | what is flash attention | (weak) flash-attention | 77 | no | — | not solid; accepted page in top 5 |
| RT256 | WEAK | page | how do transformers know word order | (weak) context-windows | 70 | no | — | not solid; accepted page in top 5 |
| RT257 | PASS | page | bert versus gpt style models | encoder-decoder-vs-decoder-only | 94 | yes | — |  |
| RT258 | PASS | page | does making llms bigger improve them predictably | scaling-laws | 84 | yes | — |  |
| RT259 | MISS | page | how are base models turned into chat assistants | (weak) multimodal-ai | 59 | no | — | no accepted page in top 5 |
| RT260 | FALSE POSITIVE | page | fine tune a 7b model on a single consumer gpu | quantization | 83 | yes | — | confident wrong page: quantization |
| RT261 | WEAK | page | distilling a big model into a small one | (weak) knowledge-distillation | 63 | no | — | not solid; accepted page in top 5 |
| RT262 | PASS | page | small draft model proposes tokens a big model verifies | speculative-decoding | 90 | yes | — |  |
| RT263 | PASS | page | how does prompt caching reduce cost | prompt-caching | 84 | yes | — |  |
| RT264 | WEAK | page | manage what goes into the context window for a long running agent | (weak) ai-agent-vs-chatbot | 70 | no | — | not solid; accepted page in top 5 |
| RT265 | WEAK | page | what are open source models like llama | (weak) open-weights-models | 80 | no | — | not solid; accepted page in top 5 |
| RT266 | MISS | page | how do i get started with ai | (weak) llm-observability | 66 | no | — | no accepted page in top 5 |
| RT267 | WEAK | page | tell me about agents | (weak) ai-agents | 69 | no | — | not solid; accepted page in top 5 |
| RT268 | FALSE POSITIVE | page | ai security | ai-governance | 89 | yes | — | confident wrong page: ai-governance |
| RT269 | WEAK | page | best way to use ai at work | (weak) local-ai | 63 | no | — | not solid; accepted page in top 5 |
| RT270 | PASS | page | vectors | vector-databases | 91 | yes | — |  |
| RT271 | MISS | page | rag vs | (weak) llamaindex | 79 | no | — | no accepted page in top 5 |
| RT272 | PASS | neg | models | (weak) small-language-models | 80 | no | — | no confident answer |
| RT273 | FALSE POSITIVE | neg | learning | supervised-learning | 88 | yes | — | confident answer for out-of-scope query: supervised-learning |
| RT274 | PASS | neg | explain it simply please | (weak) reasoning-transparency | 77 | no | — | no confident answer |
| RT275 | PASS | neg | best one | (weak) best-of-n-sampling | 80 | no | — | no confident answer |
| RT276 | PASS | neg | help with my code | (weak) system-prompts | 65 | no | — | no confident answer |
| RT277 | PASS | neg | it does not work | (weak) python-ai-libraries | 63 | no | — | no confident answer |
| RT278 | WEAK | page | llm rag mcp relationship | (weak) mcp | 72 | no | — | not solid; accepted page in top 5 |
| RT279 | PASS | gap | what do nlp and nlu mean | (weak) chain-of-thought | 59 | no | — | transparent non-answer |
| RT280 | PASS | page | gpu vs tpu | gpus-and-ai-accelerators | 83 | yes | — |  |
| RT281 | FALSE POSITIVE | page | what is hitl in ai workflows | what-is-an-ai-framework | 81 | yes | — | confident wrong page: what-is-an-ai-framework |
| RT282 | PASS | page | what is bleu and rouge | evaluation-metrics-for-ai | 96 | yes | — |  |
| RT283 | MISS | page | asr vs tts | (weak) nodejs-for-ai | 62 | no | — | no accepted page in top 5 |
| RT284 | PASS | gap | spa vs ssr | (weak) framework-vs-direct-api | 54 | no | — | transparent non-answer |
| RT285 | WEAK | page | crud api example | (weak) calling-ai-apis-with-javascript | 80 | no | — | not solid; accepted page in top 5 |
| RT286 | PASS | gap | sso with saml or oidc | oauth | 87 | yes | — | nearby page: oauth |
| RT287 | MISS | page | oss vs proprietary models | (weak) onnx-runtime | 75 | no | — | no accepted page in top 5 |
| RT288 | PASS | page | dockr container networking | docker | 85 | yes | — |  |
| RT289 | PASS | page | postgress vs mysql | postgresql | 95 | yes | — |  |
| RT290 | FALSE POSITIVE | gap | kubenetes basics | kubernetes | 86 | yes | — | confident unrelated page: kubernetes |
| RT291 | FALSE POSITIVE | page | langchian agents | openai-agents-sdk | 87 | yes | — | confident wrong page: openai-agents-sdk |
| RT292 | PASS | page | hugging fase models | hugging-face | 89 | yes | — |  |
| RT293 | FALSE POSITIVE | page | fine tunning vs prompting | lora-vs-full-fine-tuning | 86 | yes | — | confident wrong page: lora-vs-full-fine-tuning |
| RT294 | PASS | page | halucination in llms | ai-hallucinations | 83 | yes | — |  |
| RT295 | PASS | page | guardrials for llm apps | ai-guardrails | 81 | yes | — |  |
| RT296 | FALSE POSITIVE | gap | how do i run a kubernetes cluster | kubernetes | 89 | yes | — | confident unrelated page: kubernetes |
| RT297 | PASS | gap | what is a helm chart | (weak) kubernetes | 79 | no | — | transparent non-answer |
| RT298 | PASS | gap | terraform vs pulumi | (weak) framework-vs-direct-api | 65 | no | — | transparent non-answer |
| RT299 | PASS | gap | how do i configure nginx as a reverse proxy | (weak) streaming-ai-with-nodejs | 66 | no | — | transparent non-answer |
| RT300 | FALSE POSITIVE | gap | linux command line cheat sheet | containers | 84 | yes | — | confident unrelated page: containers |
| RT301 | PASS | gap | what is a service mesh | (weak) gcp-fundamentals | 63 | no | — | transparent non-answer |
| RT302 | PASS | gap | prometheus and grafana monitoring | model-drift-and-monitoring | 92 | yes | — | nearby page: model-drift-and-monitoring |
| RT303 | PASS | gap | vue vs angular | (weak) framework-vs-direct-api | 73 | no | — | transparent non-answer |
| RT304 | PASS | gap | how do i write unit tests with jest | (weak) humaneval | 71 | no | — | transparent non-answer |
| RT305 | PASS | gap | what is a monorepo | (weak) generative-ai | 59 | no | — | transparent non-answer |
| RT306 | FALSE POSITIVE | gap | vs code extensions for python | python-ai-libraries | 88 | yes | — | confident unrelated page: python-ai-libraries |
| RT307 | PASS | gap | what is graphql federation | (weak) rest-vs-graphql | 45 | no | — | transparent non-answer |
| RT308 | FALSE POSITIVE | gap | grpc vs rest | rest-vs-graphql | 86 | yes | — | confident unrelated page: rest-vs-graphql |
| RT309 | PASS | gap | how do i set up tls certificates | (weak) json-web-tokens | 54 | no | — | transparent non-answer |
| RT310 | PASS | gap | what is apache kafka | (weak) generative-ai | 59 | no | — | transparent non-answer |
| RT311 | PASS | gap | data warehouse vs data lake | (weak) gcp-fundamentals | 63 | no | — | transparent non-answer |
| RT312 | PASS | gap | what is federated learning | (weak) unsupervised-learning | 72 | no | — | transparent non-answer |
| RT313 | PASS | gap | differential privacy explained | (weak) physics-informed-neural-networks | 68 | no | — | transparent non-answer |
| RT314 | PASS | gap | how does a recommender system work | (weak) agentic-workflows | 52 | no | — | transparent non-answer |
| RT315 | FALSE POSITIVE | gap | time series forecasting with arima | ai-weather-forecasting | 87 | yes | — | confident unrelated page: ai-weather-forecasting |
| RT316 | PASS | gap | what is automl | (weak) generative-ai | 59 | no | — | transparent non-answer |
| RT317 | PASS | gap | how do i label training data | (weak) ai-weather-forecasting | 63 | no | — | transparent non-answer |
| RT318 | FALSE POSITIVE | gap | what is causal inference | encoder-decoder-vs-decoder-only | 90 | yes | — | confident unrelated page: encoder-decoder-vs-decoder-only |
| RT319 | PASS | gap | classic keyword weighting before neural embeddings | (weak) hybrid-search-and-reranking | 69 | no | — | transparent non-answer |
| RT320 | PASS | gap | what is the best ai coding assistant | (weak) ai-agent-vs-chatbot | 77 | no | — | transparent non-answer |
| RT321 | PASS | gap | cursor vs copilot | (weak) onnx-runtime | 53 | no | — | transparent non-answer |
| RT322 | PASS | gap | what is the current top model on the leaderboard | benchmarks-and-leaderboards | 84 | yes | — | nearby page: benchmarks-and-leaderboards |
| RT323 | PASS | gap | how many parameters does the newest model have | (weak) world-models | 53 | no | — | transparent non-answer |
| RT324 | PASS | gap | when does the next frontier model release | (weak) ai-agents | 60 | no | — | transparent non-answer |
| RT325 | PASS | gap | how do i use azure devops pipelines | (weak) mlops | 69 | no | — | transparent non-answer |
| RT326 | PASS | gap | power bi dashboards | power-platform | 92 | yes | — | nearby page: power-platform |
| RT327 | FALSE POSITIVE | gap | how do i migrate sharepoint on premises to online | build-spfx-web-part | 82 | yes | — | confident unrelated page: build-spfx-web-part |
| RT328 | PASS | gap | what is a sharepoint site collection | sharepoint | 93 | yes | — | nearby page: sharepoint |
| RT329 | PASS | neg | transformer toy | (weak) transformers | 73 | no | — | no confident answer |
| RT330 | FALSE POSITIVE | neg | mamba snake | state-space-models | 94 | yes | — | confident answer for out-of-scope query: state-space-models |
| RT331 | FALSE POSITIVE | neg | python pet | python | 98 | yes | — | confident answer for out-of-scope query: python |
| RT332 | FALSE POSITIVE | neg | react to this message | react-chatbot-state | 92 | yes | — | confident answer for out-of-scope query: react-chatbot-state |
| RT333 | PASS | neg | docker clothing | (weak) docker | 73 | no | — | no confident answer |
| RT334 | PASS | neg | agent real estate | (weak) autogen | 72 | no | — | no confident answer |
| RT335 | PASS | neg | model train hobby | (weak) knowledge-distillation | 57 | no | — | no confident answer |
| RT336 | PASS | neg | java coffee beans | (weak) java | 62 | no | — | no confident answer |
| RT337 | PASS | neg | ruby gemstone ring price | (weak) kv-cache | 49 | no | — | no confident answer |
| RT338 | PASS | neg | swift taylor concert tickets | (weak) llm-observability | 50 | no | — | no confident answer |
| RT339 | FALSE POSITIVE | neg | rust remover for bike chains | rust | 91 | yes | — | confident answer for out-of-scope query: rust |
| RT340 | PASS | neg | go board game opening strategy | (weak) ai-agents | 54 | no | — | no confident answer |
| RT341 | PASS | neg | kotlin island vacation | (weak) java | 40 | no | — | no confident answer |
| RT342 | PASS | neg | oracle of delphi history | (weak) microsoft-365 | 64 | no | — | no confident answer |
| RT343 | PASS | neg | spark plug gap size | (weak) vision-transformers | 50 | no | — | no confident answer |
| RT344 | PASS | neg | panda zoo opening hours | (weak) react-ai-interfaces | 55 | no | — | no confident answer |
| RT345 | PASS | neg | git gud meaning | (weak) git | 80 | no | — | no confident answer |
| RT346 | FALSE POSITIVE | neg | node of ranvier function | nodejs | 86 | yes | — | confident answer for out-of-scope query: nodejs |
| RT347 | PASS | neg | cloud seeding rain | (weak) gcp-fundamentals | 55 | no | — | no confident answer |
| RT348 | PASS | neg | azure blue paint colour | (weak) docker | 53 | no | — | no confident answer |
| RT349 | PASS | neg | bert and ernie sesame street | (weak) encoder-decoder-vs-decoder-only | 63 | no | — | no confident answer |
| RT350 | PASS | neg | llama farm wool prices | (weak) ollama | 74 | no | — | no confident answer |
| RT351 | PASS | neg | claude monet water lilies | (weak) docker | 41 | no | — | no confident answer |
| RT352 | PASS | neg | gemini star sign compatibility | (weak) microsoft-entra-id | 55 | no | — | no confident answer |
| RT353 | FALSE POSITIVE | neg | rag doll sewing pattern | agentic-rag | 85 | yes | — | confident answer for out-of-scope query: agentic-rag |
| RT354 | PASS | neg | vector graphics for a logo | (weak) pgvector | 74 | no | — | no confident answer |
| RT355 | PASS | neg | token of appreciation gift ideas | (weak) json-web-tokens | 53 | no | — | no confident answer |
| RT356 | PASS | neg | agent smith matrix quotes | (weak) swe-bench | 45 | no | — | no confident answer |
| RT357 | FALSE POSITIVE | neg | popcorn kernel not popping | semantic-kernel | 96 | yes | — | confident answer for out-of-scope query: semantic-kernel |
| RT358 | PASS | neg | swarm of bees in my garden | (weak) openai-agents-sdk | 55 | no | — | no confident answer |
| RT359 | PASS | neg | proxy voting at a shareholder meeting | (weak) self-consistency | 58 | no | — | no confident answer |
| RT360 | PASS | neg | bearer bonds explained | (weak) json-web-tokens | 52 | no | — | no confident answer |
| RT361 | PASS | neg | oil pipeline construction jobs | (weak) distributed-training | 61 | no | — | no confident answer |
| RT362 | PASS | neg | cookie recipe chocolate chip | (weak) hugging-face | 62 | no | — | no confident answer |
| RT363 | PASS | neg | diffusion of heat in metal | (weak) quantization | 66 | no | — | no confident answer |
| RT364 | PASS | neg | attention deficit in adults | (weak) overfitting-and-regularization | 48 | no | — | no confident answer |
| RT365 | PASS | neg | neural pathways in the brain after stroke | (weak) neural-networks | 73 | no | — | no confident answer |
| RT366 | FALSE POSITIVE | neg | reinforcement learning in child psychology rewards | reinforcement-learning | 85 | yes | — | confident answer for out-of-scope query: reinforcement-learning |
| RT367 | PASS | neg | unsupervised learning at home for kids | (weak) unsupervised-learning | 57 | no | — | no confident answer |
| RT368 | PASS | neg | embedding a youtube video in my wordpress site | (weak) multimodal-ai | 59 | no | — | no confident answer |
| RT369 | PASS | neg | vector in physics velocity and force | (weak) physics-informed-neural-networks | 73 | no | — | no confident answer |
| RT370 | PASS | neg | distillation of whisky at home | (weak) knowledge-distillation | 68 | no | — | no confident answer |
| RT371 | PASS | neg | dropout rate at university | (weak) gsm8k-and-math-benchmarks | 49 | no | — | no confident answer |
| RT372 | PASS | neg | tensor in general relativity | (weak) distributed-training | 78 | no | — | no confident answer |
| RT373 | PASS | neg | clip art for presentations | (weak) vision-language-models | 63 | no | — | no confident answer |
| RT374 | PASS | neg | chain link fence installation | (weak) model-serving-and-inference | 38 | no | — | no confident answer |
| RT375 | PASS | neg | whisper in my ear lyrics | (weak) speech-ai | 57 | no | — | no confident answer |
| RT376 | PASS | neg | llama drama kids book | (weak) go-language | 54 | no | — | no confident answer |
| RT377 | PASS | neg | mistral wind south of france | (weak) open-weights-models | 46 | no | — | no confident answer |
| RT378 | PASS | neg | falcon heavy launch schedule | (weak) kubernetes | 65 | no | — | no confident answer |
| RT379 | PASS | neg | bard of avon poetry | (weak) python | 62 | no | — | no confident answer |
| RT380 | PASS | neg | perplexity about my career choice | (weak) evaluation-metrics-for-ai | 76 | no | — | no confident answer |
| RT381 | PASS | neg | sam altman net worth | (weak) object-detection | 60 | no | — | no confident answer |
| RT382 | PASS | neg | best hiking boots under 150 | (weak) open-weights-models | 52 | no | — | no confident answer |
| RT383 | PASS | neg | how to file self assessment tax | (weak) eu-ai-act | 75 | no | — | no confident answer |
| RT384 | PASS | neg | recipe for lasagna | (weak) cnn-vs-vision-transformer | 50 | no | — | no confident answer |
| RT385 | PASS | neg | who invented the telephone | (weak) agent-memory | 47 | no | — | no confident answer |
| RT386 | PASS | neg | translate good morning to french | (weak) rag-vs-fine-tuning | 63 | no | — | no confident answer |
| RT387 | PASS | neg | symptoms of the flu | (weak) how-to-reduce-hallucinations | 37 | no | — | no confident answer |
| RT388 | PASS | neg | mortgage rates this week | (weak) llm-benchmarks-vs-task-evals | 53 | no | — | no confident answer |
| RT389 | PASS | neg | plan a 10k race pace strategy | (weak) agent-planning | 67 | no | — | no confident answer |
| RT390 | PASS | neg | football scores tonight | (weak) human-preference-evaluation | 55 | no | — | no confident answer |
| RT391 | PASS | neg | how to repot a succulent | (weak) ai-hallucinations | 59 | no | — | no confident answer |
| RT392 | PASS | neg | nvidia stock forecast | (weak) ai-weather-forecasting | 65 | no | — | no confident answer |
| RT393 | PASS | neg | should i buy bitcoin | (weak) gpus-and-ai-accelerators | 61 | no | — | no confident answer |
| RT394 | PASS | neg | best laptop for students | (weak) local-ai | 49 | no | — | no confident answer |
| RT395 | PASS | neg | how to write a wedding speech | (weak) speech-ai | 65 | no | — | no confident answer |
| RT396 | PASS | neg | write me a poem about the sea | (weak) eu-ai-act | 52 | no | — | no confident answer |
| RT397 | PASS | neg | tell me a joke | (weak) ai-hallucinations | 68 | no | — | no confident answer |
| RT398 | PASS | neg | what is the meaning of life | (weak) embeddings | 64 | no | — | no confident answer |
| RT399 | PASS | neg | summarise this article for me | (weak) prompt-engineering | 73 | no | — | no confident answer |
| RT400 | PASS | neg | is it going to rain tomorrow | (weak) package-managers | 60 | no | — | no confident answer |
| RT401 | PASS | neg | how do i fix a flat bicycle tyre | (weak) rag-frameworks | 56 | no | — | no confident answer |
| RT402 | MISS | page | use a model to check my own answers before sending them to a user | (weak) ai-evaluation | 67 | no | — | no accepted page in top 5 |
| RT403 | WEAK | page | how can i make my chatbot cite its sources | (weak) reasoning-transparency | 68 | no | — | not solid; accepted page in top 5 |
| RT404 | WEAK | page | why does my assistant lose context in long chats | (weak) context-windows | 68 | no | — | not solid; accepted page in top 5 |
| RT405 | MISS | page | a model that sees my screen and clicks buttons | (weak) model-apis | 78 | no | — | no accepted page in top 5 |
| RT406 | PASS | page | stop the model leaking my system prompt | prompt-injection | 88 | yes | — |  |
| RT407 | PASS | page | compare gpt style and bert style models for classification | encoder-decoder-vs-decoder-only | 84 | yes | — |  |
| RT408 | MISS | page | trace every tool call my agent makes | (weak) webhooks | 68 | no | — | no accepted page in top 5 |
| RT409 | WEAK | page | keep an ai agent from deleting my files | (weak) gmail-for-ai-agents | 73 | no | — | not solid; accepted page in top 5 |
| RT410 | MISS | page | how do i give an llm access to my database safely | (weak) oauth-for-ai-agents | 72 | no | — | no accepted page in top 5 |
| RT411 | WEAK | page | what is tool calling and how do i implement it | (weak) function-calling | 70 | no | — | not solid; accepted page in top 5 |
| RT412 | FALSE POSITIVE | page | how do i let users log in with microsoft to my ai app | api-authentication | 80 | yes | — | confident wrong page: api-authentication |
| RT413 | PASS | page | difference between ai assistant copilot and agent | ai-agent-vs-chatbot | 90 | yes | — |  |
| RT414 | PASS | page | how do i chunk pdfs for retrieval | chunking | 85 | yes | — |  |
| RT415 | WEAK | page | speed up llm responses without hurting quality | (weak) llm-cost-optimization | 52 | no | — | not solid; accepted page in top 5 |
| RT416 | MISS | page | why does inference get slower with longer prompts | (weak) thinking-budgets | 71 | no | — | no accepted page in top 5 |
| RT417 | WEAK | page | difference between an embedding model and a chat model | (weak) encoder-decoder-vs-decoder-only | 72 | no | — | not solid; accepted page in top 5 |
| RT418 | PASS | page | what is a good chunk overlap | chunking | 85 | yes | — |  |
| RT419 | PASS | page | how do i evaluate whether retrieval found the right passage | rag-evaluation | 83 | yes | — |  |
| RT420 | WEAK | page | safe way to let ai write sql | (weak) frontend-and-backend | 70 | no | — | not solid; accepted page in top 5 |
| RT421 | WEAK | page | can i run deepseek or llama privately | (weak) gbnf-grammars | 56 | no | — | not solid; accepted page in top 5 |
| RT422 | MISS | page | how do i stop my agent from running up a huge bill | (weak) ai-agent-vs-chatbot | 71 | no | — | no accepted page in top 5 |
| RT423 | MISS | page | model says it cannot see my document but i pasted it | (weak) sql-vs-nosql | 73 | no | — | no accepted page in top 5 |
| RT424 | WEAK | page | ai to turn meeting recordings into notes | (weak) react-chatbot-state | 62 | no | — | not solid; accepted page in top 5 |
| RT425 | WEAK | page | how do i know the model was not trained on my benchmark | (weak) benchmark-contamination | 71 | no | — | not solid; accepted page in top 5 |
| RT426 | MISS | page | how to get consistent structured data out of messy emails | (weak) generative-ai | 65 | no | — | no accepted page in top 5 |
