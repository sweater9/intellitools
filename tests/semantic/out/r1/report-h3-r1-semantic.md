# Knowledge red-team report — h3-r1-semantic

Dataset: `tests/redteam/frozen-holdout3.json` sha256 `c46fc1bbac641b81ab592df006669547e2fea124568bd4b0d27bd3487766f1b5`

Total 211 · PASS 97 · WEAK 62 · MISS 33 · FALSE POSITIVE 19
Pass rate 46.0% · False-positive rate 9.0%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 97 · WEAK 62 · MISS 33 · FALSE POSITIVE 19 · pass rate 46.0% · FP rate 9.0%
Retrieval on page-kind queries (157): top-1 52.9% · top-3 71.3% · top-5 76.4%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/1

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 16 | 15 | 0 | 0 | 1 | 93.8% |
| neg | 38 | 37 | 0 | 0 | 1 | 97.4% |
| page | 157 | 45 | 62 | 33 | 17 | 28.7% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 37 | 37 | 0 | 0 | 0 | 100.0% |
| architecture | 2 | 1 | 1 | 0 | 0 | 50.0% |
| beginner | 11 | 3 | 4 | 2 | 2 | 27.3% |
| concept | 83 | 22 | 31 | 22 | 8 | 26.5% |
| coverage-probe | 14 | 14 | 0 | 0 | 0 | 100.0% |
| implementation | 20 | 9 | 5 | 3 | 3 | 45.0% |
| integration | 4 | 1 | 1 | 2 | 0 | 25.0% |
| security | 11 | 1 | 5 | 3 | 2 | 9.1% |
| troubleshooting | 6 | 0 | 5 | 1 | 0 | 0.0% |
| typo | 10 | 5 | 3 | 0 | 2 | 50.0% |
| vague | 6 | 1 | 3 | 0 | 2 | 16.7% |
| what-to-use | 7 | 3 | 4 | 0 | 0 | 42.9% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 1 | 1 | 0 | 0 | 0 | 100.0% |
| agent | 10 | 1 | 5 | 4 | 0 | 10.0% |
| ai | 19 | 10 | 6 | 0 | 3 | 52.6% |
| amb | 24 | 24 | 0 | 0 | 0 | 100.0% |
| api | 7 | 0 | 4 | 1 | 2 | 0.0% |
| arch | 4 | 2 | 0 | 2 | 0 | 50.0% |
| cloud | 4 | 2 | 1 | 0 | 1 | 50.0% |
| cv | 1 | 0 | 0 | 1 | 0 | 0.0% |
| db | 5 | 3 | 1 | 0 | 1 | 60.0% |
| dev | 8 | 6 | 1 | 0 | 1 | 75.0% |
| devops | 7 | 2 | 3 | 0 | 2 | 28.6% |
| dl | 9 | 2 | 5 | 2 | 0 | 22.2% |
| eval | 5 | 0 | 2 | 2 | 1 | 0.0% |
| fw | 2 | 1 | 0 | 1 | 0 | 50.0% |
| gov | 6 | 3 | 0 | 2 | 1 | 50.0% |
| js | 1 | 0 | 0 | 0 | 1 | 0.0% |
| llm | 11 | 1 | 6 | 3 | 1 | 9.1% |
| mcp | 3 | 1 | 0 | 1 | 1 | 33.3% |
| ml | 3 | 0 | 1 | 2 | 0 | 0.0% |
| mlops | 7 | 0 | 4 | 3 | 0 | 0.0% |
| mm | 4 | 0 | 4 | 0 | 0 | 0.0% |
| ms | 8 | 7 | 0 | 1 | 0 | 87.5% |
| node | 1 | 1 | 0 | 0 | 0 | 100.0% |
| off | 13 | 13 | 0 | 0 | 0 | 100.0% |
| prompt | 3 | 0 | 2 | 1 | 0 | 0.0% |
| python | 2 | 2 | 0 | 0 | 0 | 100.0% |
| rag | 8 | 3 | 4 | 1 | 0 | 37.5% |
| react | 1 | 0 | 0 | 0 | 1 | 0.0% |
| reason | 6 | 2 | 1 | 2 | 1 | 33.3% |
| rl | 1 | 0 | 1 | 0 | 0 | 0.0% |
| robot | 5 | 1 | 4 | 0 | 0 | 20.0% |
| runtime | 5 | 4 | 0 | 1 | 0 | 80.0% |
| safety | 4 | 1 | 1 | 1 | 1 | 25.0% |
| science | 2 | 1 | 1 | 0 | 0 | 50.0% |
| sec | 7 | 1 | 4 | 2 | 0 | 14.3% |
| struct | 3 | 1 | 1 | 0 | 1 | 33.3% |
| ts | 1 | 1 | 0 | 0 | 0 | 100.0% |

## FALSE POSITIVE
- H3-026 [page/concept] "smaller model copying a larger one" → small-language-models (score 80, solid yes) — expected knowledge-distillation; confident wrong page: small-language-models
- H3-030 [page/concept] "letting a model deliberate longer for harder questions" → chain-of-thought (score 82, solid yes) — expected test-time-compute|reasoning-models; confident wrong page: chain-of-thought
- H3-036 [page/implementation] "get typed objects back from an llm call" → typescript-for-ai (score 86, solid yes) — expected structured-outputs|constrained-decoding; confident wrong page: typescript-for-ai
- H3-061 [page/concept] "building a server that offers tools to ai apps" → mcp-vs-api (score 85, solid yes) — expected mcp-servers-and-clients; confident wrong page: mcp-vs-api
- H3-066 [page/implementation] "browser app talking to a model through my own backend" → javascript-for-ai (score 93, solid yes) — expected calling-ai-apis-with-javascript|nodejs-for-ai|api-keys; confident wrong page: javascript-for-ai
- H3-068 [page/implementation] "ui components for a chat assistant" → react (score 85, solid yes) — expected react-ai-interfaces|react-chatbot-state; confident wrong page: react
- H3-072 [page/security] "where do i put credentials so they do not leak into git" → git (score 84, solid yes) — expected environment-variables|api-keys; confident wrong page: git
- H3-073 [page/security] "login with google or microsoft for my web app" → microsoft-graph (score 94, solid yes) — expected openid-connect|oauth; confident wrong page: microsoft-graph
- H3-081 [page/concept] "mapping database rows to objects in code" → databases-for-ai-apps (score 85, solid yes) — expected prisma-and-orms; confident wrong page: databases-for-ai-apps
- H3-083 [page/beginner] "microsoft cloud basics for a developer" → microsoft-365 (score 88, solid yes) — expected azure-fundamentals; confident wrong page: microsoft-365
- H3-086 [page/beginner] "wrap my app so it runs identically on any server" → nextjs (score 89, solid yes) — expected docker|containers; confident wrong page: nextjs
- H3-090 [page/concept] "managing many containers across machines" → containers (score 81, solid yes) — expected kubernetes; confident wrong page: containers
- H3-121 [page/concept] "are the scores on public model rankings reliable" → human-preference-evaluation (score 86, solid yes) — expected benchmarks-and-leaderboards|benchmark-contamination; confident wrong page: human-preference-evaluation
- H3-133 [page/concept] "company policy for using generative ai" → nist-ai-rmf (score 85, solid yes) — expected ai-governance; confident wrong page: nist-ai-rmf
- H3-139 [page/concept] "tuning on pairs of preferred and dispreferred answers without a reward model" → rlhf (score 80, solid yes) — expected dpo|preference-optimization; confident wrong page: rlhf
- H3-152 [page/typo] "multimodel ai basics" → what-is-ai (score 81, solid yes) — expected multimodal-ai|vision-language-models; confident wrong page: what-is-ai
- H3-153 [page/typo] "llama indxe vs langchan" → llama-cpp (score 85, solid yes) — expected llamaindex|langchain|rag-frameworks; confident wrong page: llama-cpp
- H3-155 [neg/vague] "ai" → ai-governance (score 85, solid yes) — expected none; confident answer for out-of-scope query: ai-governance
- H3-158 [gap/vague] "devops" → mlops (score 93, solid yes) — expected cicd|docker|containers|git; confident unrelated page: mlops

## MISS
- H3-004 [page/beginner] "is there a cap on how many words i can paste into the assistant" → (weak) common-prompting-mistakes (score 71, solid no) — expected context-windows|tokens; no accepted page in top 5
- H3-005 [page/concept] "teaching software with examples that already have answers" → (weak) what-is-ai (score 62, solid no) — expected supervised-learning; no accepted page in top 5
- H3-006 [page/concept] "software that discovers groups by itself in raw data" → (weak) mcp-servers-and-clients (score 65, solid no) — expected unsupervised-learning; no accepted page in top 5
- H3-013 [page/concept] "why convolutions suit pictures" → (weak) multimodal-ai (score 69, solid no) — expected convolutional-neural-networks; no accepted page in top 5
- H3-014 [page/concept] "self attention versus recurrence for sequences" → (weak) overfitting-and-regularization (score 58, solid no) — expected transformers|recurrent-neural-networks; no accepted page in top 5
- H3-019 [page/concept] "how does a model keep track of where each word sits in the sentence" → (weak) context-windows (score 73, solid no) — expected positional-encoding; no accepted page in top 5
- H3-020 [page/concept] "architectures with many specialised subnetworks" → (weak) deep-learning (score 70, solid no) — expected mixture-of-experts; no accepted page in top 5
- H3-022 [page/concept] "what does it mean to train longer on more text" → (weak) large-language-models (score 68, solid no) — expected scaling-laws; no accepted page in top 5
- H3-027 [page/concept] "guess several words ahead and verify them" → (weak) how-to-reduce-hallucinations (score 76, solid no) — expected speculative-decoding; no accepted page in top 5
- H3-034 [page/concept] "privacy of a model's inner deliberation" → (weak) ai-alignment (score 59, solid no) — expected reasoning-transparency; no accepted page in top 5
- H3-035 [page/concept] "should i pick a deliberating model or a quick one" → (weak) chain-of-thought (score 73, solid no) — expected reasoning-vs-standard-models|reasoning-models; no accepted page in top 5
- H3-040 [page/implementation] "setting the personality and rules for an assistant" → (weak) human-preference-evaluation (score 47, solid no) — expected system-prompts; no accepted page in top 5
- H3-042 [page/implementation] "let a model answer from the files on my drive" → (weak) frontend-and-backend (score 67, solid no) — expected rag; no accepted page in top 5
- H3-050 [page/integration] "assistant that can look through my mailbox and summarise it" → (weak) system-prompts (score 71, solid no) — expected gmail-for-ai-agents|connecting-agents-to-apps; no accepted page in top 5
- H3-051 [page/integration] "let a bot create tickets in our issue tracker" → (weak) github (score 66, solid no) — expected connecting-agents-to-apps|agent-tools|function-calling; no accepted page in top 5
- H3-056 [page/concept] "giving a model the ability to run functions" → (weak) ai-agent-vs-chatbot (score 62, solid no) — expected function-calling|agent-tools; no accepted page in top 5
- H3-058 [page/troubleshooting] "my assistant calls the wrong tool half the time" → (weak) ai-agents (score 70, solid no) — expected agent-tools|function-calling|agent-evaluation; no accepted page in top 5
- H3-062 [page/security] "could a connected tool server steal my data" → (weak) api-authentication (score 76, solid no) — expected mcp-security; no accepted page in top 5
- H3-070 [page/concept] "how do two programs talk over http" → (weak) nextjs (score 77, solid no) — expected what-is-an-api|rest-apis; no accepted page in top 5
- H3-095 [page/implementation] "automate approvals without writing code" → (weak) integration-permissions (score 66, solid no) — expected power-platform; no accepted page in top 5
- H3-097 [page/beginner] "libraries that help assemble llm apps" → (weak) build-spfx-web-part (score 54, solid no) — expected what-is-an-ai-framework|ai-sdks; no accepted page in top 5
- H3-103 [page/concept] "which deep learning library is most widely used for research" → (weak) deep-learning (score 71, solid no) — expected pytorch; no accepted page in top 5
- H3-108 [page/concept] "locating and naming objects in photos" → (weak) c2pa-content-provenance (score 46, solid no) — expected object-detection; no accepted page in top 5
- H3-115 [page/security] "what personal data should never go into a public chatbot" → (weak) agent-memory (score 69, solid no) — expected ai-privacy-and-security|gdpr-and-ai; no accepted page in top 5
- H3-117 [page/security] "runtime checks on what the model is allowed to say" → (weak) model-cards (score 50, solid no) — expected ai-guardrails; no accepted page in top 5
- H3-122 [page/concept] "have a stronger model score weaker model answers" → (weak) best-of-n-sampling (score 77, solid no) — expected llm-as-a-judge; no accepted page in top 5
- H3-124 [page/concept] "how do i test my llm application end to end" → (weak) llm-observability (score 60, solid no) — expected ai-evaluation; no accepted page in top 5
- H3-127 [page/concept] "detect that live data no longer looks like training data" → (weak) multimodal-ai (score 54, solid no) — expected model-drift-and-monitoring; no accepted page in top 5
- H3-128 [page/concept] "record every prompt response and cost in production" → (weak) model-apis (score 57, solid no) — expected llm-observability; no accepted page in top 5
- H3-132 [page/concept] "logging runs and comparing model versions" → (weak) model-drift-and-monitoring (score 41, solid no) — expected mlflow; no accepted page in top 5
- H3-137 [page/concept] "do models treat different groups unequally" → (weak) world-models (score 49, solid no) — expected ai-bias-and-fairness; no accepted page in top 5
- H3-138 [page/concept] "how do i document what my model can and cannot do" → (weak) ai-evaluation (score 52, solid no) — expected model-cards; no accepted page in top 5
- H3-142 [page/concept] "making models follow human values" → (weak) supervised-learning (score 73, solid no) — expected ai-alignment; no accepted page in top 5

## WEAK
- H3-001 [page/beginner] "im new here, what even is artificial intelligence" → (weak) what-is-ai (score 74, solid no) — expected what-is-ai; not solid; accepted page in top 5
- H3-002 [page/beginner] "why does my chat assistant sometimes confidently say wrong things" → (weak) common-prompting-mistakes (score 73, solid no) — expected ai-hallucinations|how-to-reduce-hallucinations; not solid; accepted page in top 5
- H3-003 [page/beginner] "what are the little chunks of text a model reads called" → (weak) tokens (score 76, solid no) — expected tokens; not solid; accepted page in top 5
- H3-007 [page/concept] "stacked layers of simple math units that learn patterns" → (weak) deep-learning (score 56, solid no) — expected neural-networks|deep-learning; not solid; accepted page in top 5
- H3-008 [page/concept] "how the error signal flows backwards through the layers" → (weak) positional-encoding (score 39, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- H3-009 [page/troubleshooting] "accuracy looks perfect in my notebook but tanks after deployment" → (weak) instruction-tuning (score 45, solid no) — expected overfitting-and-regularization|model-drift-and-monitoring; not solid; accepted page in top 5
- H3-010 [page/troubleshooting] "my network outputs nan after a few steps" → (weak) backpropagation-and-gradient-descent (score 65, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- H3-011 [page/implementation] "take a model trained on millions of photos and adapt it to x-rays" → (weak) multimodal-ai (score 45, solid no) — expected transfer-learning; not solid; accepted page in top 5
- H3-012 [page/concept] "software learns a policy by being scored on outcomes" → (weak) reinforcement-learning (score 73, solid no) — expected reinforcement-learning; not solid; accepted page in top 5
- H3-017 [page/concept] "networks for data that is linked together like friendships" → (weak) graph-neural-networks (score 63, solid no) — expected graph-neural-networks; not solid; accepted page in top 5
- H3-023 [page/concept] "making the assistant polite and instruction following after pretraining" → (weak) instruction-tuning (score 67, solid no) — expected instruction-tuning|rlhf; not solid; accepted page in top 5
- H3-024 [page/what-to-use] "cheaper way to specialise a big model than retraining everything" → (weak) quantization (score 68, solid no) — expected lora-and-peft|lora-vs-full-fine-tuning; not solid; accepted page in top 5
- H3-025 [page/what-to-use] "make a model fit on a small graphics card" → (weak) onnx-runtime (score 47, solid no) — expected quantization|gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-029 [page/concept] "can i legally use downloadable model weights in a product" → (weak) open-weights-models (score 48, solid no) — expected open-weights-models; not solid; accepted page in top 5
- H3-031 [page/concept] "sample a bunch of solutions and go with the consensus" → (weak) self-consistency (score 40, solid no) — expected self-consistency; not solid; accepted page in top 5
- H3-038 [page/concept] "how do sampling knobs shape the text a model writes" → (weak) sampling-and-decoding (score 47, solid no) — expected sampling-and-decoding; not solid; accepted page in top 5
- H3-039 [page/implementation] "how do i word my request so the answer comes out right" → (weak) rag (score 71, solid no) — expected prompt-engineering|common-prompting-mistakes; not solid; accepted page in top 5
- H3-041 [page/troubleshooting] "why do my prompts work on some inputs and fail on others" → (weak) common-prompting-mistakes (score 75, solid no) — expected common-prompting-mistakes|prompt-engineering|ai-evaluation; not solid; accepted page in top 5
- H3-043 [page/implementation] "splitting large documents sensibly before indexing" → (weak) chunking (score 61, solid no) — expected chunking; not solid; accepted page in top 5
- H3-047 [page/troubleshooting] "good documents indexed but answers still miss the point" → (weak) llamaindex (score 72, solid no) — expected rag-evaluation|hybrid-search-and-reranking|chunking; not solid; accepted page in top 5
- H3-048 [page/concept] "retrieval that follows links between concepts" → (weak) agentic-rag (score 62, solid no) — expected graph-rag; not solid; accepted page in top 5
- H3-049 [page/implementation] "measuring whether my retrieval is any good" → (weak) rag-evaluation (score 74, solid no) — expected rag-evaluation; not solid; accepted page in top 5
- H3-052 [page/integration] "which scopes does an assistant need to read my calendar" → (weak) authentication-vs-authorization (score 76, solid no) — expected oauth-for-ai-agents|integration-permissions|connecting-agents-to-apps; not solid; accepted page in top 5
- H3-053 [page/security] "what could go wrong if an assistant can send emails by itself" → (weak) integration-permissions (score 74, solid no) — expected integration-permissions|prompt-injection|gmail-for-ai-agents; not solid; accepted page in top 5
- H3-054 [page/concept] "software that plans acts and checks its own progress" → (weak) agent-planning (score 80, solid no) — expected ai-agents|react-agent-pattern|agent-planning; not solid; accepted page in top 5
- H3-057 [page/architecture] "keeping a long conversation history manageable for an agent" → (weak) ai-agent-vs-chatbot (score 76, solid no) — expected agent-memory|context-windows|context-engineering; not solid; accepted page in top 5
- H3-059 [page/what-to-use] "pick a library for building agent loops" → (weak) choosing-an-agent-framework (score 77, solid no) — expected agent-frameworks-compared|choosing-an-agent-framework; not solid; accepted page in top 5
- H3-071 [page/concept] "querying exactly the fields i need from an api" → (weak) calling-ai-apis-with-python (score 69, solid no) — expected graphql|rest-vs-graphql; not solid; accepted page in top 5
- H3-074 [page/concept] "signed tokens that carry claims" → (weak) json-web-tokens (score 72, solid no) — expected json-web-tokens; not solid; accepted page in top 5
- H3-075 [page/concept] "why does my browser refuse the response from another domain" → (weak) cors (score 72, solid no) — expected cors; not solid; accepted page in top 5
- H3-076 [page/concept] "server calls me when something happens" → (weak) mcp-servers-and-clients (score 76, solid no) — expected webhooks; not solid; accepted page in top 5
- H3-080 [page/concept] "in memory key value store" → (weak) redis (score 79, solid no) — expected redis; not solid; accepted page in top 5
- H3-085 [page/what-to-use] "which cloud gives gpus for model hosting" → (weak) gcp-fundamentals (score 72, solid no) — expected aws-fundamentals|azure-fundamentals|gcp-fundamentals|gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-087 [page/beginner] "keep track of changes to my code and collaborate" → (weak) autogen (score 51, solid no) — expected git|github; not solid; accepted page in top 5
- H3-088 [page/implementation] "run checks automatically whenever i push" → (weak) cicd (score 72, solid no) — expected cicd|github; not solid; accepted page in top 5
- H3-089 [page/troubleshooting] "my deployment keeps crashing and restarting in the cluster" → (weak) kubernetes (score 74, solid no) — expected kubernetes|containers; not solid; accepted page in top 5
- H3-104 [page/concept] "model that reads pictures and answers questions about them" → (weak) vision-language-models (score 64, solid no) — expected vision-language-models; not solid; accepted page in top 5
- H3-105 [page/concept] "turn recorded speech into text" → (weak) speech-ai (score 74, solid no) — expected speech-ai; not solid; accepted page in top 5
- H3-106 [page/concept] "pull fields from scanned forms" → (weak) document-understanding-ai (score 73, solid no) — expected document-understanding-ai; not solid; accepted page in top 5
- H3-107 [page/concept] "generating clips from a text description" → (weak) vision-language-models (score 66, solid no) — expected video-generation-models; not solid; accepted page in top 5
- H3-109 [page/concept] "software layer that connects sensors and motors in a robot" → (weak) robot-operating-system (score 66, solid no) — expected robot-operating-system|embodied-ai; not solid; accepted page in top 5
- H3-110 [page/concept] "policy that maps pictures and words to motor commands" → (weak) multimodal-ai (score 63, solid no) — expected vision-language-action-models; not solid; accepted page in top 5
- H3-111 [page/concept] "teach manipulation by copying human operators" → (weak) physics-informed-neural-networks (score 68, solid no) — expected imitation-learning; not solid; accepted page in top 5
- H3-112 [page/concept] "transferring skills from a physics simulator to a real machine" → (weak) sim-to-real-transfer (score 70, solid no) — expected sim-to-real-transfer; not solid; accepted page in top 5
- H3-116 [page/security] "probing my own assistant for weaknesses before launch" → (weak) red-teaming (score 55, solid no) — expected red-teaming; not solid; accepted page in top 5
- H3-118 [page/security] "running untrusted generated scripts without risking my machine" → (weak) code-execution-sandboxing (score 48, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- H3-119 [page/security] "labelling content as machine made" → (weak) c2pa-content-provenance (score 55, solid no) — expected c2pa-content-provenance; not solid; accepted page in top 5
- H3-120 [page/security] "top vulnerabilities for generative ai applications" → (weak) nist-ai-rmf (score 79, solid no) — expected owasp-llm-top-10; not solid; accepted page in top 5
- H3-123 [page/concept] "which numbers describe a classifier on imbalanced data" → (weak) evaluation-metrics-for-ai (score 69, solid no) — expected evaluation-metrics-for-ai; not solid; accepted page in top 5
- H3-125 [page/concept] "is a coding benchmark of real repository bugs useful" → (weak) swe-bench (score 78, solid no) — expected swe-bench; not solid; accepted page in top 5
- H3-126 [page/concept] "operational discipline for machine learning teams" → (weak) what-is-ai (score 58, solid no) — expected mlops; not solid; accepted page in top 5
- H3-129 [page/concept] "reduce what i pay per request to a hosted model" → (weak) local-ai (score 64, solid no) — expected llm-cost-optimization|prompt-caching; not solid; accepted page in top 5
- H3-130 [page/concept] "split a big training job across accelerators" → (weak) distributed-training (score 77, solid no) — expected distributed-training; not solid; accepted page in top 5
- H3-131 [page/concept] "choose accelerators for inference" → (weak) gpus-and-ai-accelerators (score 79, solid no) — expected gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-140 [page/concept] "models agreeing with whatever the user says" → (weak) sycophancy (score 70, solid no) — expected sycophancy; not solid; accepted page in top 5
- H3-144 [page/concept] "neural nets as fast stand ins for physics simulations" → (weak) physics-informed-neural-networks (score 56, solid no) — expected physics-informed-neural-networks|ai-for-science; not solid; accepted page in top 5
- H3-145 [page/typo] "kuberntes pods keep restarting" → (weak) kubernetes (score 57, solid no) — expected kubernetes; not solid; accepted page in top 5
- H3-148 [page/typo] "embeding model choise" → (weak) embeddings (score 75, solid no) — expected embeddings; not solid; accepted page in top 5
- H3-150 [page/typo] "reasonning models explained" → (weak) world-models (score 71, solid no) — expected reasoning-models; not solid; accepted page in top 5
- H3-156 [page/vague] "prompts" → (weak) system-prompts (score 72, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- H3-157 [page/vague] "embeddings and stuff" → (weak) rag-with-python (score 48, solid no) — expected embeddings; not solid; accepted page in top 5
- H3-160 [page/vague] "safety" → (weak) ai-governance (score 60, solid no) — expected ai-alignment|ai-privacy-and-security|prompt-injection|ai-guardrails; not solid; accepted page in top 5

## Path completeness failures
- H3-050 "assistant that can look through my mailbox and summarise it" top (weak) system-prompts; learn -

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H3-001 | WEAK | page | im new here, what even is artificial intelligence | (weak) what-is-ai | 74 | no | — | not solid; accepted page in top 5 |
| H3-002 | WEAK | page | why does my chat assistant sometimes confidently say wrong things | (weak) common-prompting-mistakes | 73 | no | — | not solid; accepted page in top 5 |
| H3-003 | WEAK | page | what are the little chunks of text a model reads called | (weak) tokens | 76 | no | — | not solid; accepted page in top 5 |
| H3-004 | MISS | page | is there a cap on how many words i can paste into the assistant | (weak) common-prompting-mistakes | 71 | no | — | no accepted page in top 5 |
| H3-005 | MISS | page | teaching software with examples that already have answers | (weak) what-is-ai | 62 | no | — | no accepted page in top 5 |
| H3-006 | MISS | page | software that discovers groups by itself in raw data | (weak) mcp-servers-and-clients | 65 | no | — | no accepted page in top 5 |
| H3-007 | WEAK | page | stacked layers of simple math units that learn patterns | (weak) deep-learning | 56 | no | — | not solid; accepted page in top 5 |
| H3-008 | WEAK | page | how the error signal flows backwards through the layers | (weak) positional-encoding | 39 | no | — | not solid; accepted page in top 5 |
| H3-009 | WEAK | page | accuracy looks perfect in my notebook but tanks after deployment | (weak) instruction-tuning | 45 | no | — | not solid; accepted page in top 5 |
| H3-010 | WEAK | page | my network outputs nan after a few steps | (weak) backpropagation-and-gradient-descent | 65 | no | — | not solid; accepted page in top 5 |
| H3-011 | WEAK | page | take a model trained on millions of photos and adapt it to x-rays | (weak) multimodal-ai | 45 | no | — | not solid; accepted page in top 5 |
| H3-012 | WEAK | page | software learns a policy by being scored on outcomes | (weak) reinforcement-learning | 73 | no | — | not solid; accepted page in top 5 |
| H3-013 | MISS | page | why convolutions suit pictures | (weak) multimodal-ai | 69 | no | — | no accepted page in top 5 |
| H3-014 | MISS | page | self attention versus recurrence for sequences | (weak) overfitting-and-regularization | 58 | no | — | no accepted page in top 5 |
| H3-015 | PASS | page | noise to picture generators | diffusion-models | 84 | yes | — |  |
| H3-016 | PASS | page | autoencoder with a probabilistic bottleneck | variational-autoencoders | 82 | yes | — |  |
| H3-017 | WEAK | page | networks for data that is linked together like friendships | (weak) graph-neural-networks | 63 | no | — | not solid; accepted page in top 5 |
| H3-018 | PASS | page | memory cost of storing past attention states while generating | kv-cache | 91 | yes | — |  |
| H3-019 | MISS | page | how does a model keep track of where each word sits in the sentence | (weak) context-windows | 73 | no | — | no accepted page in top 5 |
| H3-020 | MISS | page | architectures with many specialised subnetworks | (weak) deep-learning | 70 | no | — | no accepted page in top 5 |
| H3-021 | PASS | page | a more efficient sequence layer than attention for very long inputs | state-space-models | 86 | yes | — |  |
| H3-022 | MISS | page | what does it mean to train longer on more text | (weak) large-language-models | 68 | no | — | no accepted page in top 5 |
| H3-023 | WEAK | page | making the assistant polite and instruction following after pretraining | (weak) instruction-tuning | 67 | no | — | not solid; accepted page in top 5 |
| H3-024 | WEAK | page | cheaper way to specialise a big model than retraining everything | (weak) quantization | 68 | no | — | not solid; accepted page in top 5 |
| H3-025 | WEAK | page | make a model fit on a small graphics card | (weak) onnx-runtime | 47 | no | — | not solid; accepted page in top 5 |
| H3-026 | FALSE POSITIVE | page | smaller model copying a larger one | small-language-models | 80 | yes | — | confident wrong page: small-language-models |
| H3-027 | MISS | page | guess several words ahead and verify them | (weak) how-to-reduce-hallucinations | 76 | no | — | no accepted page in top 5 |
| H3-028 | PASS | page | compact models for edge devices | small-language-models | 82 | yes | — |  |
| H3-029 | WEAK | page | can i legally use downloadable model weights in a product | (weak) open-weights-models | 48 | no | — | not solid; accepted page in top 5 |
| H3-030 | FALSE POSITIVE | page | letting a model deliberate longer for harder questions | chain-of-thought | 82 | yes | — | confident wrong page: chain-of-thought |
| H3-031 | WEAK | page | sample a bunch of solutions and go with the consensus | (weak) self-consistency | 40 | no | — | not solid; accepted page in top 5 |
| H3-032 | PASS | page | a scorer that checks each intermediate step | process-reward-model | 90 | yes | — |  |
| H3-033 | PASS | page | training with rewards that come from automatic checkers | reinforcement-learning-for-reasoning | 90 | yes | — |  |
| H3-034 | MISS | page | privacy of a model's inner deliberation | (weak) ai-alignment | 59 | no | — | no accepted page in top 5 |
| H3-035 | MISS | page | should i pick a deliberating model or a quick one | (weak) chain-of-thought | 73 | no | — | no accepted page in top 5 |
| H3-036 | FALSE POSITIVE | page | get typed objects back from an llm call | typescript-for-ai | 86 | yes | — | confident wrong page: typescript-for-ai |
| H3-037 | PASS | page | force an llm to stay inside a json schema | json-schema | 91 | yes | — |  |
| H3-038 | WEAK | page | how do sampling knobs shape the text a model writes | (weak) sampling-and-decoding | 47 | no | — | not solid; accepted page in top 5 |
| H3-039 | WEAK | page | how do i word my request so the answer comes out right | (weak) rag | 71 | no | — | not solid; accepted page in top 5 |
| H3-040 | MISS | page | setting the personality and rules for an assistant | (weak) human-preference-evaluation | 47 | no | — | no accepted page in top 5 |
| H3-041 | WEAK | page | why do my prompts work on some inputs and fail on others | (weak) common-prompting-mistakes | 75 | no | — | not solid; accepted page in top 5 |
| H3-042 | MISS | page | let a model answer from the files on my drive | (weak) frontend-and-backend | 67 | no | — | no accepted page in top 5 |
| H3-043 | WEAK | page | splitting large documents sensibly before indexing | (weak) chunking | 61 | no | — | not solid; accepted page in top 5 |
| H3-044 | PASS | page | numbers that capture the meaning of a sentence | embeddings | 82 | yes | — |  |
| H3-045 | PASS | page | a database built for finding nearest vectors | vector-databases | 93 | yes | — |  |
| H3-046 | PASS | page | use my existing postgres for similarity search | pgvector | 96 | yes | — |  |
| H3-047 | WEAK | page | good documents indexed but answers still miss the point | (weak) llamaindex | 72 | no | — | not solid; accepted page in top 5 |
| H3-048 | WEAK | page | retrieval that follows links between concepts | (weak) agentic-rag | 62 | no | — | not solid; accepted page in top 5 |
| H3-049 | WEAK | page | measuring whether my retrieval is any good | (weak) rag-evaluation | 74 | no | — | not solid; accepted page in top 5 |
| H3-050 | MISS | page | assistant that can look through my mailbox and summarise it | (weak) system-prompts | 71 | no | — | no accepted page in top 5 |
| H3-051 | MISS | page | let a bot create tickets in our issue tracker | (weak) github | 66 | no | — | no accepted page in top 5 |
| H3-052 | WEAK | page | which scopes does an assistant need to read my calendar | (weak) authentication-vs-authorization | 76 | no | — | not solid; accepted page in top 5 |
| H3-053 | WEAK | page | what could go wrong if an assistant can send emails by itself | (weak) integration-permissions | 74 | no | — | not solid; accepted page in top 5 |
| H3-054 | WEAK | page | software that plans acts and checks its own progress | (weak) agent-planning | 80 | no | — | not solid; accepted page in top 5 |
| H3-055 | PASS | page | how to coordinate a researcher agent and a writer agent | multi-agent-systems | 84 | yes | — |  |
| H3-056 | MISS | page | giving a model the ability to run functions | (weak) ai-agent-vs-chatbot | 62 | no | — | no accepted page in top 5 |
| H3-057 | WEAK | page | keeping a long conversation history manageable for an agent | (weak) ai-agent-vs-chatbot | 76 | no | — | not solid; accepted page in top 5 |
| H3-058 | MISS | page | my assistant calls the wrong tool half the time | (weak) ai-agents | 70 | no | — | no accepted page in top 5 |
| H3-059 | WEAK | page | pick a library for building agent loops | (weak) choosing-an-agent-framework | 77 | no | — | not solid; accepted page in top 5 |
| H3-060 | PASS | page | protocol that lets assistants plug into external services | mcp | 91 | yes | — |  |
| H3-061 | FALSE POSITIVE | page | building a server that offers tools to ai apps | mcp-vs-api | 85 | yes | — | confident wrong page: mcp-vs-api |
| H3-062 | MISS | page | could a connected tool server steal my data | (weak) api-authentication | 76 | no | — | no accepted page in top 5 |
| H3-063 | PASS | page | protocol for agents built by different companies to cooperate | a2a-protocol | 85 | yes | — |  |
| H3-064 | PASS | page | send a prompt to a hosted model with the python sdk | calling-ai-apis-with-python | 85 | yes | — |  |
| H3-065 | PASS | page | prepare tabular data for an llm in python | python-data-for-ai | 86 | yes | — |  |
| H3-066 | FALSE POSITIVE | page | browser app talking to a model through my own backend | javascript-for-ai | 93 | yes | — | confident wrong page: javascript-for-ai |
| H3-067 | PASS | page | make my api client type safe | typescript-api-client-types | 84 | yes | — |  |
| H3-068 | FALSE POSITIVE | page | ui components for a chat assistant | react | 85 | yes | — | confident wrong page: react |
| H3-069 | PASS | page | run a model proxy on express | express | 89 | yes | — |  |
| H3-070 | MISS | page | how do two programs talk over http | (weak) nextjs | 77 | no | — | no accepted page in top 5 |
| H3-071 | WEAK | page | querying exactly the fields i need from an api | (weak) calling-ai-apis-with-python | 69 | no | — | not solid; accepted page in top 5 |
| H3-072 | FALSE POSITIVE | page | where do i put credentials so they do not leak into git | git | 84 | yes | — | confident wrong page: git |
| H3-073 | FALSE POSITIVE | page | login with google or microsoft for my web app | microsoft-graph | 94 | yes | — | confident wrong page: microsoft-graph |
| H3-074 | WEAK | page | signed tokens that carry claims | (weak) json-web-tokens | 72 | no | — | not solid; accepted page in top 5 |
| H3-075 | WEAK | page | why does my browser refuse the response from another domain | (weak) cors | 72 | no | — | not solid; accepted page in top 5 |
| H3-076 | WEAK | page | server calls me when something happens | (weak) mcp-servers-and-clients | 76 | no | — | not solid; accepted page in top 5 |
| H3-077 | PASS | page | structured query language for relational data | sql | 87 | yes | — |  |
| H3-078 | PASS | page | document store or relational tables for flexible records | sql-vs-nosql | 91 | yes | — |  |
| H3-079 | PASS | page | lightweight embedded database | sqlite | 89 | yes | — |  |
| H3-080 | WEAK | page | in memory key value store | (weak) redis | 79 | no | — | not solid; accepted page in top 5 |
| H3-081 | FALSE POSITIVE | page | mapping database rows to objects in code | databases-for-ai-apps | 85 | yes | — | confident wrong page: databases-for-ai-apps |
| H3-082 | PASS | page | what can i host on amazon web services | aws-fundamentals | 91 | yes | — |  |
| H3-083 | FALSE POSITIVE | page | microsoft cloud basics for a developer | microsoft-365 | 88 | yes | — | confident wrong page: microsoft-365 |
| H3-084 | PASS | page | googles cloud platform overview | gcp-fundamentals | 91 | yes | — |  |
| H3-085 | WEAK | page | which cloud gives gpus for model hosting | (weak) gcp-fundamentals | 72 | no | — | not solid; accepted page in top 5 |
| H3-086 | FALSE POSITIVE | page | wrap my app so it runs identically on any server | nextjs | 89 | yes | — | confident wrong page: nextjs |
| H3-087 | WEAK | page | keep track of changes to my code and collaborate | (weak) autogen | 51 | no | — | not solid; accepted page in top 5 |
| H3-088 | WEAK | page | run checks automatically whenever i push | (weak) cicd | 72 | no | — | not solid; accepted page in top 5 |
| H3-089 | WEAK | page | my deployment keeps crashing and restarting in the cluster | (weak) kubernetes | 74 | no | — | not solid; accepted page in top 5 |
| H3-090 | FALSE POSITIVE | page | managing many containers across machines | containers | 81 | yes | — | confident wrong page: containers |
| H3-091 | PASS | page | team intranet platform from microsoft | sharepoint | 96 | yes | — |  |
| H3-092 | PASS | page | custom client side components for modern sharepoint pages | sharepoint-framework | 96 | yes | — |  |
| H3-093 | PASS | page | fetch mail and files from a users microsoft account | microsoft-graph | 94 | yes | — |  |
| H3-094 | PASS | page | microsofts identity platform for sign in and permissions | microsoft-entra-id | 93 | yes | — |  |
| H3-095 | MISS | page | automate approvals without writing code | (weak) integration-permissions | 66 | no | — | no accepted page in top 5 |
| H3-096 | PASS | page | build an app that lives inside microsoft teams | teams-development | 94 | yes | — |  |
| H3-097 | MISS | page | libraries that help assemble llm apps | (weak) build-spfx-web-part | 54 | no | — | no accepted page in top 5 |
| H3-098 | PASS | page | the hub where people share pretrained models | hugging-face | 80 | yes | — |  |
| H3-099 | PASS | page | run open models offline on my machine | local-ai | 85 | yes | — |  |
| H3-100 | PASS | page | serving engine with continuous batching | vllm | 94 | yes | — |  |
| H3-101 | PASS | page | quantized model format for cpu inference | llama-cpp | 91 | yes | — |  |
| H3-102 | PASS | page | portable inference format for many platforms | onnx-runtime | 81 | yes | — |  |
| H3-103 | MISS | page | which deep learning library is most widely used for research | (weak) deep-learning | 71 | no | — | no accepted page in top 5 |
| H3-104 | WEAK | page | model that reads pictures and answers questions about them | (weak) vision-language-models | 64 | no | — | not solid; accepted page in top 5 |
| H3-105 | WEAK | page | turn recorded speech into text | (weak) speech-ai | 74 | no | — | not solid; accepted page in top 5 |
| H3-106 | WEAK | page | pull fields from scanned forms | (weak) document-understanding-ai | 73 | no | — | not solid; accepted page in top 5 |
| H3-107 | WEAK | page | generating clips from a text description | (weak) vision-language-models | 66 | no | — | not solid; accepted page in top 5 |
| H3-108 | MISS | page | locating and naming objects in photos | (weak) c2pa-content-provenance | 46 | no | — | no accepted page in top 5 |
| H3-109 | WEAK | page | software layer that connects sensors and motors in a robot | (weak) robot-operating-system | 66 | no | — | not solid; accepted page in top 5 |
| H3-110 | WEAK | page | policy that maps pictures and words to motor commands | (weak) multimodal-ai | 63 | no | — | not solid; accepted page in top 5 |
| H3-111 | WEAK | page | teach manipulation by copying human operators | (weak) physics-informed-neural-networks | 68 | no | — | not solid; accepted page in top 5 |
| H3-112 | WEAK | page | transferring skills from a physics simulator to a real machine | (weak) sim-to-real-transfer | 70 | no | — | not solid; accepted page in top 5 |
| H3-113 | PASS | page | a learned simulator used for planning | world-models | 83 | yes | — |  |
| H3-114 | PASS | page | attack where crafted text overrides my assistants rules | prompt-injection | 88 | yes | — |  |
| H3-115 | MISS | page | what personal data should never go into a public chatbot | (weak) agent-memory | 69 | no | — | no accepted page in top 5 |
| H3-116 | WEAK | page | probing my own assistant for weaknesses before launch | (weak) red-teaming | 55 | no | — | not solid; accepted page in top 5 |
| H3-117 | MISS | page | runtime checks on what the model is allowed to say | (weak) model-cards | 50 | no | — | no accepted page in top 5 |
| H3-118 | WEAK | page | running untrusted generated scripts without risking my machine | (weak) code-execution-sandboxing | 48 | no | — | not solid; accepted page in top 5 |
| H3-119 | WEAK | page | labelling content as machine made | (weak) c2pa-content-provenance | 55 | no | — | not solid; accepted page in top 5 |
| H3-120 | WEAK | page | top vulnerabilities for generative ai applications | (weak) nist-ai-rmf | 79 | no | — | not solid; accepted page in top 5 |
| H3-121 | FALSE POSITIVE | page | are the scores on public model rankings reliable | human-preference-evaluation | 86 | yes | — | confident wrong page: human-preference-evaluation |
| H3-122 | MISS | page | have a stronger model score weaker model answers | (weak) best-of-n-sampling | 77 | no | — | no accepted page in top 5 |
| H3-123 | WEAK | page | which numbers describe a classifier on imbalanced data | (weak) evaluation-metrics-for-ai | 69 | no | — | not solid; accepted page in top 5 |
| H3-124 | MISS | page | how do i test my llm application end to end | (weak) llm-observability | 60 | no | — | no accepted page in top 5 |
| H3-125 | WEAK | page | is a coding benchmark of real repository bugs useful | (weak) swe-bench | 78 | no | — | not solid; accepted page in top 5 |
| H3-126 | WEAK | page | operational discipline for machine learning teams | (weak) what-is-ai | 58 | no | — | not solid; accepted page in top 5 |
| H3-127 | MISS | page | detect that live data no longer looks like training data | (weak) multimodal-ai | 54 | no | — | no accepted page in top 5 |
| H3-128 | MISS | page | record every prompt response and cost in production | (weak) model-apis | 57 | no | — | no accepted page in top 5 |
| H3-129 | WEAK | page | reduce what i pay per request to a hosted model | (weak) local-ai | 64 | no | — | not solid; accepted page in top 5 |
| H3-130 | WEAK | page | split a big training job across accelerators | (weak) distributed-training | 77 | no | — | not solid; accepted page in top 5 |
| H3-131 | WEAK | page | choose accelerators for inference | (weak) gpus-and-ai-accelerators | 79 | no | — | not solid; accepted page in top 5 |
| H3-132 | MISS | page | logging runs and comparing model versions | (weak) model-drift-and-monitoring | 41 | no | — | no accepted page in top 5 |
| H3-133 | FALSE POSITIVE | page | company policy for using generative ai | nist-ai-rmf | 85 | yes | — | confident wrong page: nist-ai-rmf |
| H3-134 | PASS | page | european law classing ai by risk level | eu-ai-act | 93 | yes | — |  |
| H3-135 | PASS | page | us government framework for managing ai risk | nist-ai-rmf | 93 | yes | — |  |
| H3-136 | PASS | page | auditable management system standard for ai | iso-iec-42001 | 84 | yes | — |  |
| H3-137 | MISS | page | do models treat different groups unequally | (weak) world-models | 49 | no | — | no accepted page in top 5 |
| H3-138 | MISS | page | how do i document what my model can and cannot do | (weak) ai-evaluation | 52 | no | — | no accepted page in top 5 |
| H3-139 | FALSE POSITIVE | page | tuning on pairs of preferred and dispreferred answers without a reward model | rlhf | 80 | yes | — | confident wrong page: rlhf |
| H3-140 | WEAK | page | models agreeing with whatever the user says | (weak) sycophancy | 70 | no | — | not solid; accepted page in top 5 |
| H3-141 | PASS | page | exploiting a flawed scoring rule | reward-hacking | 89 | yes | — |  |
| H3-142 | MISS | page | making models follow human values | (weak) supervised-learning | 73 | no | — | no accepted page in top 5 |
| H3-143 | PASS | page | ml systems that predict how proteins fold | alphafold | 89 | yes | — |  |
| H3-144 | WEAK | page | neural nets as fast stand ins for physics simulations | (weak) physics-informed-neural-networks | 56 | no | — | not solid; accepted page in top 5 |
| H3-145 | WEAK | page | kuberntes pods keep restarting | (weak) kubernetes | 57 | no | — | not solid; accepted page in top 5 |
| H3-146 | PASS | page | doker compose networking | docker | 95 | yes | — |  |
| H3-147 | PASS | page | retreival augmented generaton | rag | 89 | yes | — |  |
| H3-148 | WEAK | page | embeding model choise | (weak) embeddings | 75 | no | — | not solid; accepted page in top 5 |
| H3-149 | PASS | page | chain of thougth prompting | chain-of-thought | 94 | yes | — |  |
| H3-150 | WEAK | page | reasonning models explained | (weak) world-models | 71 | no | — | not solid; accepted page in top 5 |
| H3-151 | PASS | page | vecotr search in postgress | pgvector | 96 | yes | — |  |
| H3-152 | FALSE POSITIVE | page | multimodel ai basics | what-is-ai | 81 | yes | — | confident wrong page: what-is-ai |
| H3-153 | FALSE POSITIVE | page | llama indxe vs langchan | llama-cpp | 85 | yes | — | confident wrong page: llama-cpp |
| H3-154 | PASS | page | agentc workflows | agentic-workflows | 92 | yes | — |  |
| H3-155 | FALSE POSITIVE | neg | ai | ai-governance | 85 | yes | — | confident answer for out-of-scope query: ai-governance |
| H3-156 | WEAK | page | prompts | (weak) system-prompts | 72 | no | — | not solid; accepted page in top 5 |
| H3-157 | WEAK | page | embeddings and stuff | (weak) rag-with-python | 48 | no | — | not solid; accepted page in top 5 |
| H3-158 | FALSE POSITIVE | gap | devops | mlops | 93 | yes | — | confident unrelated page: mlops |
| H3-159 | PASS | neg | something with tokens | (weak) tokens | 70 | no | — | no confident answer |
| H3-160 | WEAK | page | safety | (weak) ai-governance | 60 | no | — | not solid; accepted page in top 5 |
| H3-161 | PASS | gap | ansible vs chef | (weak) ai-agent-vs-chatbot | 46 | no | — | transparent non-answer |
| H3-162 | PASS | gap | ssh key setup | (weak) api-keys | 77 | no | — | transparent non-answer |
| H3-163 | PASS | gap | how do i debounce a function | (weak) function-calling | 74 | no | — | transparent non-answer |
| H3-164 | PASS | gap | python decorators explained | python | 90 | yes | — | nearby page: python |
| H3-165 | PASS | gap | how to write a regex for emails | (weak) rag | 58 | no | — | transparent non-answer |
| H3-166 | PASS | gap | svelte vs react | (weak) react | 76 | no | — | transparent non-answer |
| H3-167 | PASS | gap | how do i build a recommendation engine | (weak) nodejs | 70 | no | — | transparent non-answer |
| H3-168 | PASS | gap | speech synthesis voices that sound human | (weak) speech-ai | 75 | no | — | transparent non-answer |
| H3-169 | PASS | gap | which gpu to buy this year | (weak) vllm | 63 | no | — | transparent non-answer |
| H3-170 | PASS | gap | tensorflow lite for microcontrollers | (weak) gpus-and-ai-accelerators | 62 | no | — | transparent non-answer |
| H3-171 | PASS | gap | what is jax | (weak) physics-informed-neural-networks | 72 | no | — | transparent non-answer |
| H3-172 | PASS | gap | what does the nobel prize in chemistry have to do with ai | (weak) ai-drug-discovery | 46 | no | — | transparent non-answer |
| H3-173 | PASS | gap | what is azure openai service pricing | azure-fundamentals | 91 | yes | — | nearby page: azure-fundamentals |
| H3-174 | PASS | gap | how to build a power bi report | power-platform | 90 | yes | — | nearby page: power-platform |
| H3-175 | PASS | neg | transformer cosplay costume | (weak) vision-transformers | 56 | no | — | no confident answer |
| H3-176 | PASS | neg | mamba mentality tshirt | (weak) state-space-models | 58 | no | — | no confident answer |
| H3-177 | PASS | neg | python regius ball care | (weak) python | 52 | no | — | no confident answer |
| H3-178 | PASS | gap | react native vs flutter | (weak) react | 75 | no | — | transparent non-answer |
| H3-179 | PASS | neg | docker pants waterproof | (weak) docker | 55 | no | — | no confident answer |
| H3-180 | PASS | neg | estate agent fees when selling a flat | (weak) local-ai-vs-cloud-ai | 57 | no | — | no confident answer |
| H3-181 | PASS | neg | scale model train layouts | (weak) encoder-decoder-vs-decoder-only | 71 | no | — | no confident answer |
| H3-182 | PASS | neg | java island travel tips | (weak) java | 62 | no | — | no confident answer |
| H3-183 | PASS | neg | go kart racing near me | (weak) open-weights-models | 43 | no | — | no confident answer |
| H3-184 | PASS | neg | spring break destinations | (weak) java | 42 | no | — | no confident answer |
| H3-185 | PASS | neg | swift bird migration | (weak) system-prompts | 29 | no | — | no confident answer |
| H3-186 | PASS | neg | gemini constellation stars | (weak) transformers-vs-state-space-models | 38 | no | — | no confident answer |
| H3-187 | PASS | neg | falcon bird of prey training | (weak) search-over-reasoning | 28 | no | — | no confident answer |
| H3-188 | PASS | neg | bert lahr wizard of oz | (weak) encoder-decoder-vs-decoder-only | 53 | no | — | no confident answer |
| H3-189 | PASS | neg | llama trekking in peru | (weak) ollama | 61 | no | — | no confident answer |
| H3-190 | PASS | neg | claude debussy piano pieces | (weak) instruction-tuning | 48 | no | — | no confident answer |
| H3-191 | PASS | neg | mistral breeze sailing | (weak) open-weights-models | 33 | no | — | no confident answer |
| H3-192 | PASS | neg | agent provocateur meaning | (weak) multi-agent-systems | 60 | no | — | no confident answer |
| H3-193 | PASS | neg | perplexed expression synonyms | (weak) grammar-guided-generation | 59 | no | — | no confident answer |
| H3-194 | PASS | neg | training for a triathlon | (weak) supervised-learning | 71 | no | — | no confident answer |
| H3-195 | PASS | neg | attention to detail resume tips | (weak) agent-memory | 61 | no | — | no confident answer |
| H3-196 | PASS | neg | vector illustration of birds | (weak) vector-databases | 63 | no | — | no confident answer |
| H3-197 | PASS | neg | cookie consent banner wording for my shop | (weak) authentication-vs-authorization | 68 | no | — | no confident answer |
| H3-198 | PASS | neg | gradient descent hiking trail name | (weak) backpropagation-and-gradient-descent | 64 | no | — | no confident answer |
| H3-199 | PASS | neg | how to apply for a visa | (weak) integration-permissions | 49 | no | — | no confident answer |
| H3-200 | PASS | neg | best way to learn guitar | (weak) fine-tuning | 47 | no | — | no confident answer |
| H3-201 | PASS | neg | what causes inflation | (weak) speculative-decoding | 40 | no | — | no confident answer |
| H3-202 | PASS | neg | traffic on the m25 right now | (weak) kv-cache | 61 | no | — | no confident answer |
| H3-203 | PASS | neg | cheapest flights to rome in march | (weak) rag-evaluation | 47 | no | — | no confident answer |
| H3-204 | PASS | neg | pasta carbonara authentic recipe | (weak) rag | 30 | no | — | no confident answer |
| H3-205 | PASS | neg | bake a chocolate cake without eggs | (weak) chunking | 40 | no | — | no confident answer |
| H3-206 | PASS | neg | the score of last nights basketball game | (weak) deep-q-networks | 50 | no | — | no confident answer |
| H3-207 | PASS | neg | biggest city in canada | (weak) eu-ai-act | 44 | no | — | no confident answer |
| H3-208 | PASS | neg | how long does it take to boil an egg | (weak) prompt-engineering | 45 | no | — | no confident answer |
| H3-209 | PASS | neg | should i invest in the latest ai company stock | (weak) python-ai-libraries | 53 | no | — | no confident answer |
| H3-210 | PASS | neg | which is the smartest ai right now | (weak) ai-governance | 64 | no | — | no confident answer |
| H3-211 | PASS | neg | write a cover email for a job | (weak) react-chatbot-state | 74 | no | — | no confident answer |
