# Knowledge red-team report — h3-baseline

Dataset: `tests/redteam/frozen-holdout3.json` sha256 `c46fc1bbac641b81ab592df006669547e2fea124568bd4b0d27bd3487766f1b5`

Total 211 · PASS 60 · WEAK 57 · MISS 62 · FALSE POSITIVE 32
Pass rate 28.4% · False-positive rate 15.2%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/1

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 16 | 16 | 0 | 0 | 0 | 100.0% |
| neg | 38 | 30 | 0 | 0 | 8 | 78.9% |
| page | 157 | 14 | 57 | 62 | 24 | 8.9% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 37 | 30 | 0 | 0 | 7 | 81.1% |
| architecture | 2 | 0 | 2 | 0 | 0 | 0.0% |
| beginner | 11 | 2 | 2 | 6 | 1 | 18.2% |
| concept | 83 | 7 | 28 | 35 | 13 | 8.4% |
| coverage-probe | 14 | 14 | 0 | 0 | 0 | 100.0% |
| implementation | 20 | 2 | 8 | 5 | 5 | 10.0% |
| integration | 4 | 0 | 1 | 3 | 0 | 0.0% |
| security | 11 | 0 | 4 | 5 | 2 | 0.0% |
| troubleshooting | 6 | 0 | 3 | 3 | 0 | 0.0% |
| typo | 10 | 0 | 5 | 3 | 2 | 0.0% |
| vague | 6 | 3 | 2 | 0 | 1 | 50.0% |
| what-to-use | 7 | 2 | 2 | 2 | 1 | 28.6% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 1 | 0 | 1 | 0 | 0 | 0.0% |
| agent | 10 | 0 | 4 | 5 | 1 | 0.0% |
| ai | 19 | 9 | 6 | 2 | 2 | 47.4% |
| amb | 24 | 17 | 0 | 0 | 7 | 70.8% |
| api | 7 | 1 | 2 | 2 | 2 | 14.3% |
| arch | 4 | 0 | 0 | 2 | 2 | 0.0% |
| cloud | 4 | 1 | 2 | 1 | 0 | 25.0% |
| cv | 1 | 0 | 0 | 1 | 0 | 0.0% |
| db | 5 | 2 | 2 | 1 | 0 | 40.0% |
| dev | 8 | 5 | 1 | 1 | 1 | 62.5% |
| devops | 7 | 2 | 0 | 4 | 1 | 28.6% |
| dl | 9 | 2 | 3 | 4 | 0 | 22.2% |
| eval | 5 | 1 | 0 | 2 | 2 | 20.0% |
| fw | 2 | 0 | 0 | 0 | 2 | 0.0% |
| gov | 6 | 0 | 4 | 1 | 1 | 0.0% |
| js | 1 | 0 | 0 | 1 | 0 | 0.0% |
| llm | 11 | 0 | 5 | 6 | 0 | 0.0% |
| mcp | 3 | 0 | 2 | 0 | 1 | 0.0% |
| ml | 3 | 0 | 0 | 3 | 0 | 0.0% |
| mlops | 7 | 0 | 2 | 4 | 1 | 0.0% |
| mm | 4 | 0 | 2 | 2 | 0 | 0.0% |
| ms | 8 | 2 | 3 | 2 | 1 | 25.0% |
| node | 1 | 1 | 0 | 0 | 0 | 100.0% |
| off | 13 | 13 | 0 | 0 | 0 | 100.0% |
| prompt | 3 | 0 | 2 | 1 | 0 | 0.0% |
| python | 2 | 0 | 0 | 0 | 2 | 0.0% |
| rag | 8 | 0 | 5 | 2 | 1 | 0.0% |
| react | 1 | 0 | 1 | 0 | 0 | 0.0% |
| reason | 6 | 0 | 2 | 4 | 0 | 0.0% |
| rl | 1 | 1 | 0 | 0 | 0 | 100.0% |
| robot | 5 | 1 | 2 | 1 | 1 | 20.0% |
| runtime | 5 | 1 | 0 | 3 | 1 | 20.0% |
| safety | 4 | 0 | 1 | 2 | 1 | 0.0% |
| science | 2 | 0 | 1 | 1 | 0 | 0.0% |
| sec | 7 | 0 | 3 | 3 | 1 | 0.0% |
| struct | 3 | 1 | 0 | 1 | 1 | 33.3% |
| ts | 1 | 0 | 1 | 0 | 0 | 0.0% |

## FALSE POSITIVE
- H3-018 [page/concept] "memory cost of storing past attention states while generating" → transformers (score 34, solid yes) — expected kv-cache; confident wrong page: transformers
- H3-021 [page/concept] "a more efficient sequence layer than attention for very long inputs" → transformers (score 34, solid yes) — expected state-space-models; confident wrong page: transformers
- H3-036 [page/implementation] "get typed objects back from an llm call" → large-language-models (score 27, solid yes) — expected structured-outputs|constrained-decoding; confident wrong page: large-language-models
- H3-046 [page/implementation] "use my existing postgres for similarity search" → postgresql (score 67, solid yes) — expected pgvector|postgresql-for-ai-apps; confident wrong page: postgresql
- H3-059 [page/what-to-use] "pick a library for building agent loops" → react-agent-pattern (score 58, solid yes) — expected agent-frameworks-compared|choosing-an-agent-framework; confident wrong page: react-agent-pattern
- H3-061 [page/concept] "building a server that offers tools to ai apps" → agent-tools (score 47, solid yes) — expected mcp-servers-and-clients; confident wrong page: agent-tools
- H3-064 [page/implementation] "send a prompt to a hosted model with the python sdk" → python (score 46, solid yes) — expected calling-ai-apis-with-python; confident wrong page: python
- H3-065 [page/implementation] "prepare tabular data for an llm in python" → python (score 47, solid yes) — expected python-data-for-ai; confident wrong page: python
- H3-072 [page/security] "where do i put credentials so they do not leak into git" → git (score 54, solid yes) — expected environment-variables|api-keys; confident wrong page: git
- H3-074 [page/concept] "signed tokens that carry claims" → tokens (score 34, solid yes) — expected json-web-tokens; confident wrong page: tokens
- H3-090 [page/concept] "managing many containers across machines" → containers (score 32, solid yes) — expected kubernetes; confident wrong page: containers
- H3-092 [page/implementation] "custom client side components for modern sharepoint pages" → sharepoint (score 70, solid yes) — expected sharepoint-framework|build-spfx-web-part; confident wrong page: sharepoint
- H3-097 [page/beginner] "libraries that help assemble llm apps" → large-language-models (score 27, solid yes) — expected what-is-an-ai-framework|ai-sdks; confident wrong page: large-language-models
- H3-098 [page/concept] "the hub where people share pretrained models" → transfer-learning (score 27, solid yes) — expected hugging-face; confident wrong page: transfer-learning
- H3-103 [page/concept] "which deep learning library is most widely used for research" → deep-learning (score 100, solid yes) — expected pytorch; confident wrong page: deep-learning
- H3-110 [page/concept] "policy that maps pictures and words to motor commands" → reinforcement-learning (score 21, solid yes) — expected vision-language-action-models; confident wrong page: reinforcement-learning
- H3-120 [page/security] "top vulnerabilities for generative ai applications" → generative-ai (score 52, solid yes) — expected owasp-llm-top-10; confident wrong page: generative-ai
- H3-124 [page/concept] "how do i test my llm application end to end" → large-language-models (score 27, solid yes) — expected ai-evaluation; confident wrong page: large-language-models
- H3-125 [page/concept] "is a coding benchmark of real repository bugs useful" → benchmarks-and-leaderboards (score 34, solid yes) — expected swe-bench; confident wrong page: benchmarks-and-leaderboards
- H3-126 [page/concept] "operational discipline for machine learning teams" → what-is-ai (score 28, solid yes) — expected mlops; confident wrong page: what-is-ai
- H3-133 [page/concept] "company policy for using generative ai" → generative-ai (score 52, solid yes) — expected ai-governance; confident wrong page: generative-ai
- H3-139 [page/concept] "tuning on pairs of preferred and dispreferred answers without a reward model" → rlhf (score 32, solid yes) — expected dpo|preference-optimization; confident wrong page: rlhf
- H3-151 [page/typo] "vecotr search in postgress" → postgresql (score 24, solid yes) — expected pgvector|vector-databases; confident wrong page: postgresql
- H3-152 [page/typo] "multimodel ai basics" → what-is-ai (score 66, solid yes) — expected multimodal-ai|vision-language-models; confident wrong page: what-is-ai
- H3-159 [neg/vague] "something with tokens" → tokens (score 34, solid yes) — expected none; confident answer for out-of-scope query: tokens
- H3-175 [neg/ambiguous-or-off-topic] "transformer cosplay costume" → transformers (score 50, solid yes) — expected none; confident answer for out-of-scope query: transformers
- H3-176 [neg/ambiguous-or-off-topic] "mamba mentality tshirt" → state-space-models (score 31, solid yes) — expected none; confident answer for out-of-scope query: state-space-models
- H3-177 [neg/ambiguous-or-off-topic] "python regius ball care" → python (score 46, solid yes) — expected none; confident answer for out-of-scope query: python
- H3-179 [neg/ambiguous-or-off-topic] "docker pants waterproof" → docker (score 75, solid yes) — expected none; confident answer for out-of-scope query: docker
- H3-182 [neg/ambiguous-or-off-topic] "java island travel tips" → java (score 46, solid yes) — expected none; confident answer for out-of-scope query: java
- H3-195 [neg/ambiguous-or-off-topic] "attention to detail resume tips" → transformers (score 34, solid yes) — expected none; confident answer for out-of-scope query: transformers
- H3-198 [neg/ambiguous-or-off-topic] "gradient descent hiking trail name" → backpropagation-and-gradient-descent (score 80, solid yes) — expected none; confident answer for out-of-scope query: backpropagation-and-gradient-descent

## MISS
- H3-003 [page/beginner] "what are the little chunks of text a model reads called" → (weak) chunking (score 30, solid no) — expected tokens; no accepted page in top 5
- H3-004 [page/beginner] "is there a cap on how many words i can paste into the assistant" → (weak) ai-agent-vs-chatbot (score 18, solid no) — expected context-windows|tokens; no accepted page in top 5
- H3-005 [page/concept] "teaching software with examples that already have answers" → (weak) swe-bench (score 8, solid no) — expected supervised-learning; no accepted page in top 5
- H3-006 [page/concept] "software that discovers groups by itself in raw data" → (weak) ai-privacy-and-security (score 23, solid no) — expected unsupervised-learning; no accepted page in top 5
- H3-008 [page/concept] "how the error signal flows backwards through the layers" → (weak) agent-protocol-landscape (score 5, solid no) — expected backpropagation-and-gradient-descent; no accepted page in top 5
- H3-009 [page/troubleshooting] "accuracy looks perfect in my notebook but tanks after deployment" → (weak) evaluation-metrics-for-ai (score 9, solid no) — expected overfitting-and-regularization|model-drift-and-monitoring; no accepted page in top 5
- H3-010 [page/troubleshooting] "my network outputs nan after a few steps" → (weak) structured-outputs (score 14, solid no) — expected backpropagation-and-gradient-descent; no accepted page in top 5
- H3-011 [page/implementation] "take a model trained on millions of photos and adapt it to x-rays" → (weak) model-cards (score 28, solid no) — expected transfer-learning; no accepted page in top 5
- H3-013 [page/concept] "why convolutions suit pictures" → (weak) small-language-models (score 2, solid no) — expected convolutional-neural-networks; no accepted page in top 5
- H3-019 [page/concept] "how does a model keep track of where each word sits in the sentence" → (weak) model-cards (score 28, solid no) — expected positional-encoding; no accepted page in top 5
- H3-020 [page/concept] "architectures with many specialised subnetworks" → (weak) diffusion-models (score 2, solid no) — expected mixture-of-experts; no accepted page in top 5
- H3-022 [page/concept] "what does it mean to train longer on more text" → (weak) multimodal-ai (score 12, solid no) — expected scaling-laws; no accepted page in top 5
- H3-024 [page/what-to-use] "cheaper way to specialise a big model than retraining everything" → (weak) model-cards (score 28, solid no) — expected lora-and-peft|lora-vs-full-fine-tuning; no accepted page in top 5
- H3-025 [page/what-to-use] "make a model fit on a small graphics card" → (weak) model-cards (score 48, solid no) — expected quantization|gpus-and-ai-accelerators; no accepted page in top 5
- H3-026 [page/concept] "smaller model copying a larger one" → (weak) model-apis (score 30, solid no) — expected knowledge-distillation; no accepted page in top 5
- H3-030 [page/concept] "letting a model deliberate longer for harder questions" → (weak) model-cards (score 28, solid no) — expected test-time-compute|reasoning-models; no accepted page in top 5
- H3-031 [page/concept] "sample a bunch of solutions and go with the consensus" → (weak) best-of-n-sampling (score 2, solid no) — expected self-consistency; no accepted page in top 5
- H3-034 [page/concept] "privacy of a model's inner deliberation" → (weak) reasoning-models (score 44, solid no) — expected reasoning-transparency; no accepted page in top 5
- H3-035 [page/concept] "should i pick a deliberating model or a quick one" → (weak) model-apis (score 30, solid no) — expected reasoning-vs-standard-models|reasoning-models; no accepted page in top 5
- H3-038 [page/concept] "how do sampling knobs shape the text a model writes" → (weak) large-language-models (score 28, solid no) — expected sampling-and-decoding; no accepted page in top 5
- H3-039 [page/implementation] "how do i word my request so the answer comes out right" → (weak) gsm8k-and-math-benchmarks (score 11, solid no) — expected prompt-engineering|common-prompting-mistakes; no accepted page in top 5
- H3-042 [page/implementation] "let a model answer from the files on my drive" → (weak) model-cards (score 28, solid no) — expected rag; no accepted page in top 5
- H3-048 [page/concept] "retrieval that follows links between concepts" → (weak) agentic-rag (score 44, solid no) — expected graph-rag; no accepted page in top 5
- H3-050 [page/integration] "assistant that can look through my mailbox and summarise it" → (weak) ai-agent-vs-chatbot (score 18, solid no) — expected gmail-for-ai-agents|connecting-agents-to-apps; no accepted page in top 5
- H3-051 [page/integration] "let a bot create tickets in our issue tracker" → (weak) teams-development (score 6, solid no) — expected connecting-agents-to-apps|agent-tools|function-calling; no accepted page in top 5
- H3-052 [page/integration] "which scopes does an assistant need to read my calendar" → (weak) ai-agent-vs-chatbot (score 18, solid no) — expected oauth-for-ai-agents|integration-permissions|connecting-agents-to-apps; no accepted page in top 5
- H3-053 [page/security] "what could go wrong if an assistant can send emails by itself" → (weak) ai-agent-vs-chatbot (score 18, solid no) — expected integration-permissions|prompt-injection|gmail-for-ai-agents; no accepted page in top 5
- H3-056 [page/concept] "giving a model the ability to run functions" → (weak) model-cards (score 28, solid no) — expected function-calling|agent-tools; no accepted page in top 5
- H3-066 [page/implementation] "browser app talking to a model through my own backend" → (weak) model-cards (score 28, solid no) — expected calling-ai-apis-with-javascript|nodejs-for-ai|api-keys; no accepted page in top 5
- H3-071 [page/concept] "querying exactly the fields i need from an api" → (weak) api-keys (score 34, solid no) — expected graphql|rest-vs-graphql; no accepted page in top 5
- H3-073 [page/security] "login with google or microsoft for my web app" → (weak) build-spfx-web-part (score 39, solid no) — expected openid-connect|oauth; no accepted page in top 5
- H3-081 [page/concept] "mapping database rows to objects in code" → (weak) code-execution-sandboxing (score 34, solid no) — expected prisma-and-orms; no accepted page in top 5
- H3-083 [page/beginner] "microsoft cloud basics for a developer" → (weak) microsoft-graph (score 32, solid no) — expected azure-fundamentals; no accepted page in top 5
- H3-086 [page/beginner] "wrap my app so it runs identically on any server" → (weak) mcp-servers-and-clients (score 12, solid no) — expected docker|containers; no accepted page in top 5
- H3-087 [page/beginner] "keep track of changes to my code and collaborate" → (weak) code-execution-sandboxing (score 34, solid no) — expected git|github; no accepted page in top 5
- H3-088 [page/implementation] "run checks automatically whenever i push" → (weak) llama-cpp (score 8, solid no) — expected cicd|github; no accepted page in top 5
- H3-089 [page/troubleshooting] "my deployment keeps crashing and restarting in the cluster" → (weak) mlops (score 7, solid no) — expected kubernetes|containers; no accepted page in top 5
- H3-091 [page/beginner] "team intranet platform from microsoft" → (weak) microsoft-graph (score 32, solid no) — expected sharepoint; no accepted page in top 5
- H3-094 [page/concept] "microsofts identity platform for sign in and permissions" → (weak) integration-permissions (score 25, solid no) — expected microsoft-entra-id; no accepted page in top 5
- H3-099 [page/concept] "run open models offline on my machine" → (weak) open-weights-models (score 62, solid no) — expected local-ai|ollama|llama-cpp; no accepted page in top 5
- H3-101 [page/concept] "quantized model format for cpu inference" → (weak) model-serving-and-inference (score 45, solid no) — expected llama-cpp|quantization; no accepted page in top 5
- H3-102 [page/concept] "portable inference format for many platforms" → (weak) model-serving-and-inference (score 25, solid no) — expected onnx-runtime; no accepted page in top 5
- H3-104 [page/concept] "model that reads pictures and answers questions about them" → (weak) model-cards (score 28, solid no) — expected vision-language-models; no accepted page in top 5
- H3-106 [page/concept] "pull fields from scanned forms" → (weak) github (score 7, solid no) — expected document-understanding-ai; no accepted page in top 5
- H3-108 [page/concept] "locating and naming objects in photos" → (weak) what-is-json (score 7, solid no) — expected object-detection; no accepted page in top 5
- H3-111 [page/concept] "teach manipulation by copying human operators" → (weak) human-preference-evaluation (score 18, solid no) — expected imitation-learning; no accepted page in top 5
- H3-114 [page/security] "attack where crafted text overrides my assistants rules" → (weak) speech-ai (score 12, solid no) — expected prompt-injection; no accepted page in top 5
- H3-116 [page/security] "probing my own assistant for weaknesses before launch" → (weak) ai-agent-vs-chatbot (score 19, solid no) — expected red-teaming; no accepted page in top 5
- H3-117 [page/security] "runtime checks on what the model is allowed to say" → (weak) model-cards (score 28, solid no) — expected ai-guardrails; no accepted page in top 5
- H3-122 [page/concept] "have a stronger model score weaker model answers" → (weak) model-cards (score 28, solid no) — expected llm-as-a-judge; no accepted page in top 5
- H3-123 [page/concept] "which numbers describe a classifier on imbalanced data" → (weak) ai-privacy-and-security (score 23, solid no) — expected evaluation-metrics-for-ai; no accepted page in top 5
- H3-127 [page/concept] "detect that live data no longer looks like training data" → (weak) ai-privacy-and-security (score 27, solid no) — expected model-drift-and-monitoring; no accepted page in top 5
- H3-128 [page/concept] "record every prompt response and cost in production" → (weak) prompt-caching (score 31, solid no) — expected llm-observability; no accepted page in top 5
- H3-129 [page/concept] "reduce what i pay per request to a hosted model" → (weak) model-cards (score 28, solid no) — expected llm-cost-optimization|prompt-caching; no accepted page in top 5
- H3-132 [page/concept] "logging runs and comparing model versions" → (weak) model-cards (score 28, solid no) — expected mlflow; no accepted page in top 5
- H3-137 [page/concept] "do models treat different groups unequally" → (weak) reasoning-models (score 42, solid no) — expected ai-bias-and-fairness; no accepted page in top 5
- H3-140 [page/concept] "models agreeing with whatever the user says" → (weak) reasoning-models (score 40, solid no) — expected sycophancy; no accepted page in top 5
- H3-142 [page/concept] "making models follow human values" → (weak) reasoning-models (score 40, solid no) — expected ai-alignment; no accepted page in top 5
- H3-143 [page/concept] "ml systems that predict how proteins fold" → (weak) multi-agent-systems (score 17, solid no) — expected alphafold; no accepted page in top 5
- H3-145 [page/typo] "kuberntes pods keep restarting" → (weak) none (score 0, solid no) — expected kubernetes; no accepted page in top 5
- H3-148 [page/typo] "embeding model choise" → (weak) model-cards (score 28, solid no) — expected embeddings; no accepted page in top 5
- H3-153 [page/typo] "llama indxe vs langchan" → (weak) llama-cpp (score 32, solid no) — expected llamaindex|langchain|rag-frameworks; no accepted page in top 5

## WEAK
- H3-002 [page/beginner] "why does my chat assistant sometimes confidently say wrong things" → (weak) ai-agent-vs-chatbot (score 18, solid no) — expected ai-hallucinations|how-to-reduce-hallucinations; not solid; accepted page in top 5
- H3-007 [page/concept] "stacked layers of simple math units that learn patterns" → (weak) gsm8k-and-math-benchmarks (score 26, solid no) — expected neural-networks|deep-learning; not solid; accepted page in top 5
- H3-015 [page/concept] "noise to picture generators" → (weak) diffusion-models (score 5, solid no) — expected diffusion-models; not solid; accepted page in top 5
- H3-017 [page/concept] "networks for data that is linked together like friendships" → (weak) ai-privacy-and-security (score 23, solid no) — expected graph-neural-networks; not solid; accepted page in top 5
- H3-023 [page/concept] "making the assistant polite and instruction following after pretraining" → (weak) instruction-tuning (score 22, solid no) — expected instruction-tuning|rlhf; not solid; accepted page in top 5
- H3-027 [page/concept] "guess several words ahead and verify them" → (weak) common-prompting-mistakes (score 6, solid no) — expected speculative-decoding; not solid; accepted page in top 5
- H3-028 [page/concept] "compact models for edge devices" → (weak) small-language-models (score 47, solid no) — expected small-language-models; not solid; accepted page in top 5
- H3-029 [page/concept] "can i legally use downloadable model weights in a product" → (weak) model-cards (score 28, solid no) — expected open-weights-models; not solid; accepted page in top 5
- H3-032 [page/concept] "a scorer that checks each intermediate step" → (weak) chain-of-thought (score 22, solid no) — expected process-reward-model; not solid; accepted page in top 5
- H3-033 [page/concept] "training with rewards that come from automatic checkers" → (weak) reinforcement-learning-for-reasoning (score 17, solid no) — expected reinforcement-learning-for-reasoning; not solid; accepted page in top 5
- H3-040 [page/implementation] "setting the personality and rules for an assistant" → (weak) ai-agent-vs-chatbot (score 18, solid no) — expected system-prompts; not solid; accepted page in top 5
- H3-041 [page/troubleshooting] "why do my prompts work on some inputs and fail on others" → (weak) prompt-engineering (score 34, solid no) — expected common-prompting-mistakes|prompt-engineering|ai-evaluation; not solid; accepted page in top 5
- H3-043 [page/implementation] "splitting large documents sensibly before indexing" → (weak) document-understanding-ai (score 26, solid no) — expected chunking; not solid; accepted page in top 5
- H3-044 [page/concept] "numbers that capture the meaning of a sentence" → (weak) embeddings (score 10, solid no) — expected embeddings; not solid; accepted page in top 5
- H3-045 [page/implementation] "a database built for finding nearest vectors" → (weak) vector-database-vs-traditional-database (score 60, solid no) — expected vector-databases; not solid; accepted page in top 5
- H3-047 [page/troubleshooting] "good documents indexed but answers still miss the point" → (weak) document-understanding-ai (score 26, solid no) — expected rag-evaluation|hybrid-search-and-reranking|chunking; not solid; accepted page in top 5
- H3-049 [page/implementation] "measuring whether my retrieval is any good" → (weak) agentic-rag (score 44, solid no) — expected rag-evaluation; not solid; accepted page in top 5
- H3-054 [page/concept] "software that plans acts and checks its own progress" → (weak) local-ai (score 10, solid no) — expected ai-agents|react-agent-pattern|agent-planning; not solid; accepted page in top 5
- H3-055 [page/architecture] "how to coordinate a researcher agent and a writer agent" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected multi-agent-systems|agentic-workflows; not solid; accepted page in top 5
- H3-057 [page/architecture] "keeping a long conversation history manageable for an agent" → (weak) ai-agent-vs-chatbot (score 39, solid no) — expected agent-memory|context-windows|context-engineering; not solid; accepted page in top 5
- H3-058 [page/troubleshooting] "my assistant calls the wrong tool half the time" → (weak) test-time-compute (score 26, solid no) — expected agent-tools|function-calling|agent-evaluation; not solid; accepted page in top 5
- H3-060 [page/concept] "protocol that lets assistants plug into external services" → (weak) mcp (score 22, solid no) — expected mcp; not solid; accepted page in top 5
- H3-062 [page/security] "could a connected tool server steal my data" → (weak) ai-privacy-and-security (score 23, solid no) — expected mcp-security; not solid; accepted page in top 5
- H3-063 [page/concept] "protocol for agents built by different companies to cooperate" → (weak) agent-protocol-landscape (score 46, solid no) — expected a2a-protocol|agent-protocol-landscape; not solid; accepted page in top 5
- H3-067 [page/implementation] "make my api client type safe" → (weak) typescript-api-client-types (score 54, solid no) — expected typescript-api-client-types|typescript-for-ai; not solid; accepted page in top 5
- H3-068 [page/implementation] "ui components for a chat assistant" → (weak) streaming-ai-responses (score 23, solid no) — expected react-ai-interfaces|react-chatbot-state; not solid; accepted page in top 5
- H3-070 [page/concept] "how do two programs talk over http" → (weak) calling-ai-apis-with-python (score 7, solid no) — expected what-is-an-api|rest-apis; not solid; accepted page in top 5
- H3-075 [page/concept] "why does my browser refuse the response from another domain" → (weak) computer-use-agents (score 14, solid no) — expected cors; not solid; accepted page in top 5
- H3-078 [page/what-to-use] "document store or relational tables for flexible records" → (weak) document-understanding-ai (score 24, solid no) — expected sql-vs-nosql|mongodb; not solid; accepted page in top 5
- H3-080 [page/concept] "in memory key value store" → (weak) agent-memory (score 38, solid no) — expected redis; not solid; accepted page in top 5
- H3-084 [page/beginner] "googles cloud platform overview" → (weak) gcp-fundamentals (score 25, solid no) — expected gcp-fundamentals; not solid; accepted page in top 5
- H3-085 [page/what-to-use] "which cloud gives gpus for model hosting" → (weak) gpus-and-ai-accelerators (score 28, solid no) — expected aws-fundamentals|azure-fundamentals|gcp-fundamentals|gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-093 [page/integration] "fetch mail and files from a users microsoft account" → (weak) microsoft-graph (score 35, solid no) — expected microsoft-graph; not solid; accepted page in top 5
- H3-095 [page/implementation] "automate approvals without writing code" → (weak) code-execution-sandboxing (score 34, solid no) — expected power-platform; not solid; accepted page in top 5
- H3-096 [page/implementation] "build an app that lives inside microsoft teams" → (weak) teams-development (score 67, solid no) — expected teams-development; not solid; accepted page in top 5
- H3-105 [page/concept] "turn recorded speech into text" → (weak) speech-ai (score 33, solid no) — expected speech-ai; not solid; accepted page in top 5
- H3-107 [page/concept] "generating clips from a text description" → (weak) contrastive-learning-clip (score 11, solid no) — expected video-generation-models; not solid; accepted page in top 5
- H3-109 [page/concept] "software layer that connects sensors and motors in a robot" → (weak) vision-language-action-models (score 9, solid no) — expected robot-operating-system|embodied-ai; not solid; accepted page in top 5
- H3-112 [page/concept] "transferring skills from a physics simulator to a real machine" → (weak) physics-informed-neural-networks (score 25, solid no) — expected sim-to-real-transfer; not solid; accepted page in top 5
- H3-115 [page/security] "what personal data should never go into a public chatbot" → (weak) ai-agent-vs-chatbot (score 27, solid no) — expected ai-privacy-and-security|gdpr-and-ai; not solid; accepted page in top 5
- H3-118 [page/security] "running untrusted generated scripts without risking my machine" → (weak) code-execution-sandboxing (score 15, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- H3-119 [page/security] "labelling content as machine made" → (weak) c2pa-content-provenance (score 27, solid no) — expected c2pa-content-provenance; not solid; accepted page in top 5
- H3-130 [page/concept] "split a big training job across accelerators" → (weak) distributed-training (score 15, solid no) — expected distributed-training; not solid; accepted page in top 5
- H3-131 [page/concept] "choose accelerators for inference" → (weak) model-serving-and-inference (score 25, solid no) — expected gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-134 [page/concept] "european law classing ai by risk level" → (weak) ai-governance (score 56, solid no) — expected eu-ai-act; not solid; accepted page in top 5
- H3-135 [page/concept] "us government framework for managing ai risk" → (weak) nist-ai-rmf (score 66, solid no) — expected nist-ai-rmf; not solid; accepted page in top 5
- H3-136 [page/concept] "auditable management system standard for ai" → (weak) ai-governance (score 52, solid no) — expected iso-iec-42001; not solid; accepted page in top 5
- H3-138 [page/concept] "how do i document what my model can and cannot do" → (weak) model-cards (score 28, solid no) — expected model-cards; not solid; accepted page in top 5
- H3-141 [page/concept] "exploiting a flawed scoring rule" → (weak) process-reward-model (score 4, solid no) — expected reward-hacking; not solid; accepted page in top 5
- H3-144 [page/concept] "neural nets as fast stand ins for physics simulations" → (weak) physics-informed-neural-networks (score 49, solid no) — expected physics-informed-neural-networks|ai-for-science; not solid; accepted page in top 5
- H3-146 [page/typo] "doker compose networking" → (weak) docker (score 6, solid no) — expected docker|containers; not solid; accepted page in top 5
- H3-147 [page/typo] "retreival augmented generaton" → (weak) rag (score 11, solid no) — expected rag; not solid; accepted page in top 5
- H3-149 [page/typo] "chain of thougth prompting" → (weak) chain-of-thought (score 39, solid no) — expected chain-of-thought; not solid; accepted page in top 5
- H3-150 [page/typo] "reasonning models explained" → (weak) reasoning-models (score 40, solid no) — expected reasoning-models; not solid; accepted page in top 5
- H3-154 [page/typo] "agentc workflows" → (weak) agentic-workflows (score 13, solid no) — expected agentic-workflows; not solid; accepted page in top 5
- H3-156 [page/vague] "prompts" → (weak) prompt-engineering (score 34, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- H3-160 [page/vague] "safety" → (weak) ai-alignment (score 8, solid no) — expected ai-alignment|ai-privacy-and-security|prompt-injection|ai-guardrails; not solid; accepted page in top 5

## Path completeness failures
- H3-050 "assistant that can look through my mailbox and summarise it" top (weak) ai-agent-vs-chatbot; learn -

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H3-001 | PASS | page | im new here, what even is artificial intelligence | what-is-ai | 30 | yes | — |  |
| H3-002 | WEAK | page | why does my chat assistant sometimes confidently say wrong things | (weak) ai-agent-vs-chatbot | 18 | no | — | not solid; accepted page in top 5 |
| H3-003 | MISS | page | what are the little chunks of text a model reads called | (weak) chunking | 30 | no | — | no accepted page in top 5 |
| H3-004 | MISS | page | is there a cap on how many words i can paste into the assistant | (weak) ai-agent-vs-chatbot | 18 | no | — | no accepted page in top 5 |
| H3-005 | MISS | page | teaching software with examples that already have answers | (weak) swe-bench | 8 | no | — | no accepted page in top 5 |
| H3-006 | MISS | page | software that discovers groups by itself in raw data | (weak) ai-privacy-and-security | 23 | no | — | no accepted page in top 5 |
| H3-007 | WEAK | page | stacked layers of simple math units that learn patterns | (weak) gsm8k-and-math-benchmarks | 26 | no | — | not solid; accepted page in top 5 |
| H3-008 | MISS | page | how the error signal flows backwards through the layers | (weak) agent-protocol-landscape | 5 | no | — | no accepted page in top 5 |
| H3-009 | MISS | page | accuracy looks perfect in my notebook but tanks after deployment | (weak) evaluation-metrics-for-ai | 9 | no | — | no accepted page in top 5 |
| H3-010 | MISS | page | my network outputs nan after a few steps | (weak) structured-outputs | 14 | no | — | no accepted page in top 5 |
| H3-011 | MISS | page | take a model trained on millions of photos and adapt it to x-rays | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-012 | PASS | page | software learns a policy by being scored on outcomes | reinforcement-learning | 21 | yes | — |  |
| H3-013 | MISS | page | why convolutions suit pictures | (weak) small-language-models | 2 | no | — | no accepted page in top 5 |
| H3-014 | PASS | page | self attention versus recurrence for sequences | transformers | 50 | yes | — |  |
| H3-015 | WEAK | page | noise to picture generators | (weak) diffusion-models | 5 | no | — | not solid; accepted page in top 5 |
| H3-016 | PASS | page | autoencoder with a probabilistic bottleneck | variational-autoencoders | 62 | yes | — |  |
| H3-017 | WEAK | page | networks for data that is linked together like friendships | (weak) ai-privacy-and-security | 23 | no | — | not solid; accepted page in top 5 |
| H3-018 | FALSE POSITIVE | page | memory cost of storing past attention states while generating | transformers | 34 | yes | — | confident wrong page: transformers |
| H3-019 | MISS | page | how does a model keep track of where each word sits in the sentence | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-020 | MISS | page | architectures with many specialised subnetworks | (weak) diffusion-models | 2 | no | — | no accepted page in top 5 |
| H3-021 | FALSE POSITIVE | page | a more efficient sequence layer than attention for very long inputs | transformers | 34 | yes | — | confident wrong page: transformers |
| H3-022 | MISS | page | what does it mean to train longer on more text | (weak) multimodal-ai | 12 | no | — | no accepted page in top 5 |
| H3-023 | WEAK | page | making the assistant polite and instruction following after pretraining | (weak) instruction-tuning | 22 | no | — | not solid; accepted page in top 5 |
| H3-024 | MISS | page | cheaper way to specialise a big model than retraining everything | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-025 | MISS | page | make a model fit on a small graphics card | (weak) model-cards | 48 | no | — | no accepted page in top 5 |
| H3-026 | MISS | page | smaller model copying a larger one | (weak) model-apis | 30 | no | — | no accepted page in top 5 |
| H3-027 | WEAK | page | guess several words ahead and verify them | (weak) common-prompting-mistakes | 6 | no | — | not solid; accepted page in top 5 |
| H3-028 | WEAK | page | compact models for edge devices | (weak) small-language-models | 47 | no | — | not solid; accepted page in top 5 |
| H3-029 | WEAK | page | can i legally use downloadable model weights in a product | (weak) model-cards | 28 | no | — | not solid; accepted page in top 5 |
| H3-030 | MISS | page | letting a model deliberate longer for harder questions | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-031 | MISS | page | sample a bunch of solutions and go with the consensus | (weak) best-of-n-sampling | 2 | no | — | no accepted page in top 5 |
| H3-032 | WEAK | page | a scorer that checks each intermediate step | (weak) chain-of-thought | 22 | no | — | not solid; accepted page in top 5 |
| H3-033 | WEAK | page | training with rewards that come from automatic checkers | (weak) reinforcement-learning-for-reasoning | 17 | no | — | not solid; accepted page in top 5 |
| H3-034 | MISS | page | privacy of a model's inner deliberation | (weak) reasoning-models | 44 | no | — | no accepted page in top 5 |
| H3-035 | MISS | page | should i pick a deliberating model or a quick one | (weak) model-apis | 30 | no | — | no accepted page in top 5 |
| H3-036 | FALSE POSITIVE | page | get typed objects back from an llm call | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H3-037 | PASS | page | force an llm to stay inside a json schema | json-schema | 104 | yes | — |  |
| H3-038 | MISS | page | how do sampling knobs shape the text a model writes | (weak) large-language-models | 28 | no | — | no accepted page in top 5 |
| H3-039 | MISS | page | how do i word my request so the answer comes out right | (weak) gsm8k-and-math-benchmarks | 11 | no | — | no accepted page in top 5 |
| H3-040 | WEAK | page | setting the personality and rules for an assistant | (weak) ai-agent-vs-chatbot | 18 | no | — | not solid; accepted page in top 5 |
| H3-041 | WEAK | page | why do my prompts work on some inputs and fail on others | (weak) prompt-engineering | 34 | no | — | not solid; accepted page in top 5 |
| H3-042 | MISS | page | let a model answer from the files on my drive | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-043 | WEAK | page | splitting large documents sensibly before indexing | (weak) document-understanding-ai | 26 | no | — | not solid; accepted page in top 5 |
| H3-044 | WEAK | page | numbers that capture the meaning of a sentence | (weak) embeddings | 10 | no | — | not solid; accepted page in top 5 |
| H3-045 | WEAK | page | a database built for finding nearest vectors | (weak) vector-database-vs-traditional-database | 60 | no | — | not solid; accepted page in top 5 |
| H3-046 | FALSE POSITIVE | page | use my existing postgres for similarity search | postgresql | 67 | yes | — | confident wrong page: postgresql |
| H3-047 | WEAK | page | good documents indexed but answers still miss the point | (weak) document-understanding-ai | 26 | no | — | not solid; accepted page in top 5 |
| H3-048 | MISS | page | retrieval that follows links between concepts | (weak) agentic-rag | 44 | no | — | no accepted page in top 5 |
| H3-049 | WEAK | page | measuring whether my retrieval is any good | (weak) agentic-rag | 44 | no | — | not solid; accepted page in top 5 |
| H3-050 | MISS | page | assistant that can look through my mailbox and summarise it | (weak) ai-agent-vs-chatbot | 18 | no | — | no accepted page in top 5 |
| H3-051 | MISS | page | let a bot create tickets in our issue tracker | (weak) teams-development | 6 | no | — | no accepted page in top 5 |
| H3-052 | MISS | page | which scopes does an assistant need to read my calendar | (weak) ai-agent-vs-chatbot | 18 | no | — | no accepted page in top 5 |
| H3-053 | MISS | page | what could go wrong if an assistant can send emails by itself | (weak) ai-agent-vs-chatbot | 18 | no | — | no accepted page in top 5 |
| H3-054 | WEAK | page | software that plans acts and checks its own progress | (weak) local-ai | 10 | no | — | not solid; accepted page in top 5 |
| H3-055 | WEAK | page | how to coordinate a researcher agent and a writer agent | (weak) ai-agent-vs-chatbot | 35 | no | — | not solid; accepted page in top 5 |
| H3-056 | MISS | page | giving a model the ability to run functions | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-057 | WEAK | page | keeping a long conversation history manageable for an agent | (weak) ai-agent-vs-chatbot | 39 | no | — | not solid; accepted page in top 5 |
| H3-058 | WEAK | page | my assistant calls the wrong tool half the time | (weak) test-time-compute | 26 | no | — | not solid; accepted page in top 5 |
| H3-059 | FALSE POSITIVE | page | pick a library for building agent loops | react-agent-pattern | 58 | yes | — | confident wrong page: react-agent-pattern |
| H3-060 | WEAK | page | protocol that lets assistants plug into external services | (weak) mcp | 22 | no | — | not solid; accepted page in top 5 |
| H3-061 | FALSE POSITIVE | page | building a server that offers tools to ai apps | agent-tools | 47 | yes | — | confident wrong page: agent-tools |
| H3-062 | WEAK | page | could a connected tool server steal my data | (weak) ai-privacy-and-security | 23 | no | — | not solid; accepted page in top 5 |
| H3-063 | WEAK | page | protocol for agents built by different companies to cooperate | (weak) agent-protocol-landscape | 46 | no | — | not solid; accepted page in top 5 |
| H3-064 | FALSE POSITIVE | page | send a prompt to a hosted model with the python sdk | python | 46 | yes | — | confident wrong page: python |
| H3-065 | FALSE POSITIVE | page | prepare tabular data for an llm in python | python | 47 | yes | — | confident wrong page: python |
| H3-066 | MISS | page | browser app talking to a model through my own backend | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-067 | WEAK | page | make my api client type safe | (weak) typescript-api-client-types | 54 | no | — | not solid; accepted page in top 5 |
| H3-068 | WEAK | page | ui components for a chat assistant | (weak) streaming-ai-responses | 23 | no | — | not solid; accepted page in top 5 |
| H3-069 | PASS | page | run a model proxy on express | express | 52 | yes | — |  |
| H3-070 | WEAK | page | how do two programs talk over http | (weak) calling-ai-apis-with-python | 7 | no | — | not solid; accepted page in top 5 |
| H3-071 | MISS | page | querying exactly the fields i need from an api | (weak) api-keys | 34 | no | — | no accepted page in top 5 |
| H3-072 | FALSE POSITIVE | page | where do i put credentials so they do not leak into git | git | 54 | yes | — | confident wrong page: git |
| H3-073 | MISS | page | login with google or microsoft for my web app | (weak) build-spfx-web-part | 39 | no | — | no accepted page in top 5 |
| H3-074 | FALSE POSITIVE | page | signed tokens that carry claims | tokens | 34 | yes | — | confident wrong page: tokens |
| H3-075 | WEAK | page | why does my browser refuse the response from another domain | (weak) computer-use-agents | 14 | no | — | not solid; accepted page in top 5 |
| H3-076 | PASS | page | server calls me when something happens | webhooks | 32 | yes | — |  |
| H3-077 | PASS | page | structured query language for relational data | sql | 31 | yes | — |  |
| H3-078 | WEAK | page | document store or relational tables for flexible records | (weak) document-understanding-ai | 24 | no | — | not solid; accepted page in top 5 |
| H3-079 | PASS | page | lightweight embedded database | sqlite | 27 | yes | — |  |
| H3-080 | WEAK | page | in memory key value store | (weak) agent-memory | 38 | no | — | not solid; accepted page in top 5 |
| H3-081 | MISS | page | mapping database rows to objects in code | (weak) code-execution-sandboxing | 34 | no | — | no accepted page in top 5 |
| H3-082 | PASS | page | what can i host on amazon web services | aws-fundamentals | 26 | yes | — |  |
| H3-083 | MISS | page | microsoft cloud basics for a developer | (weak) microsoft-graph | 32 | no | — | no accepted page in top 5 |
| H3-084 | WEAK | page | googles cloud platform overview | (weak) gcp-fundamentals | 25 | no | — | not solid; accepted page in top 5 |
| H3-085 | WEAK | page | which cloud gives gpus for model hosting | (weak) gpus-and-ai-accelerators | 28 | no | — | not solid; accepted page in top 5 |
| H3-086 | MISS | page | wrap my app so it runs identically on any server | (weak) mcp-servers-and-clients | 12 | no | — | no accepted page in top 5 |
| H3-087 | MISS | page | keep track of changes to my code and collaborate | (weak) code-execution-sandboxing | 34 | no | — | no accepted page in top 5 |
| H3-088 | MISS | page | run checks automatically whenever i push | (weak) llama-cpp | 8 | no | — | no accepted page in top 5 |
| H3-089 | MISS | page | my deployment keeps crashing and restarting in the cluster | (weak) mlops | 7 | no | — | no accepted page in top 5 |
| H3-090 | FALSE POSITIVE | page | managing many containers across machines | containers | 32 | yes | — | confident wrong page: containers |
| H3-091 | MISS | page | team intranet platform from microsoft | (weak) microsoft-graph | 32 | no | — | no accepted page in top 5 |
| H3-092 | FALSE POSITIVE | page | custom client side components for modern sharepoint pages | sharepoint | 70 | yes | — | confident wrong page: sharepoint |
| H3-093 | WEAK | page | fetch mail and files from a users microsoft account | (weak) microsoft-graph | 35 | no | — | not solid; accepted page in top 5 |
| H3-094 | MISS | page | microsofts identity platform for sign in and permissions | (weak) integration-permissions | 25 | no | — | no accepted page in top 5 |
| H3-095 | WEAK | page | automate approvals without writing code | (weak) code-execution-sandboxing | 34 | no | — | not solid; accepted page in top 5 |
| H3-096 | WEAK | page | build an app that lives inside microsoft teams | (weak) teams-development | 67 | no | — | not solid; accepted page in top 5 |
| H3-097 | FALSE POSITIVE | page | libraries that help assemble llm apps | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H3-098 | FALSE POSITIVE | page | the hub where people share pretrained models | transfer-learning | 27 | yes | — | confident wrong page: transfer-learning |
| H3-099 | MISS | page | run open models offline on my machine | (weak) open-weights-models | 62 | no | — | no accepted page in top 5 |
| H3-100 | PASS | page | serving engine with continuous batching | vllm | 66 | yes | — |  |
| H3-101 | MISS | page | quantized model format for cpu inference | (weak) model-serving-and-inference | 45 | no | — | no accepted page in top 5 |
| H3-102 | MISS | page | portable inference format for many platforms | (weak) model-serving-and-inference | 25 | no | — | no accepted page in top 5 |
| H3-103 | FALSE POSITIVE | page | which deep learning library is most widely used for research | deep-learning | 100 | yes | — | confident wrong page: deep-learning |
| H3-104 | MISS | page | model that reads pictures and answers questions about them | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-105 | WEAK | page | turn recorded speech into text | (weak) speech-ai | 33 | no | — | not solid; accepted page in top 5 |
| H3-106 | MISS | page | pull fields from scanned forms | (weak) github | 7 | no | — | no accepted page in top 5 |
| H3-107 | WEAK | page | generating clips from a text description | (weak) contrastive-learning-clip | 11 | no | — | not solid; accepted page in top 5 |
| H3-108 | MISS | page | locating and naming objects in photos | (weak) what-is-json | 7 | no | — | no accepted page in top 5 |
| H3-109 | WEAK | page | software layer that connects sensors and motors in a robot | (weak) vision-language-action-models | 9 | no | — | not solid; accepted page in top 5 |
| H3-110 | FALSE POSITIVE | page | policy that maps pictures and words to motor commands | reinforcement-learning | 21 | yes | — | confident wrong page: reinforcement-learning |
| H3-111 | MISS | page | teach manipulation by copying human operators | (weak) human-preference-evaluation | 18 | no | — | no accepted page in top 5 |
| H3-112 | WEAK | page | transferring skills from a physics simulator to a real machine | (weak) physics-informed-neural-networks | 25 | no | — | not solid; accepted page in top 5 |
| H3-113 | PASS | page | a learned simulator used for planning | world-models | 58 | yes | — |  |
| H3-114 | MISS | page | attack where crafted text overrides my assistants rules | (weak) speech-ai | 12 | no | — | no accepted page in top 5 |
| H3-115 | WEAK | page | what personal data should never go into a public chatbot | (weak) ai-agent-vs-chatbot | 27 | no | — | not solid; accepted page in top 5 |
| H3-116 | MISS | page | probing my own assistant for weaknesses before launch | (weak) ai-agent-vs-chatbot | 19 | no | — | no accepted page in top 5 |
| H3-117 | MISS | page | runtime checks on what the model is allowed to say | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-118 | WEAK | page | running untrusted generated scripts without risking my machine | (weak) code-execution-sandboxing | 15 | no | — | not solid; accepted page in top 5 |
| H3-119 | WEAK | page | labelling content as machine made | (weak) c2pa-content-provenance | 27 | no | — | not solid; accepted page in top 5 |
| H3-120 | FALSE POSITIVE | page | top vulnerabilities for generative ai applications | generative-ai | 52 | yes | — | confident wrong page: generative-ai |
| H3-121 | PASS | page | are the scores on public model rankings reliable | benchmarks-and-leaderboards | 29 | yes | — |  |
| H3-122 | MISS | page | have a stronger model score weaker model answers | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-123 | MISS | page | which numbers describe a classifier on imbalanced data | (weak) ai-privacy-and-security | 23 | no | — | no accepted page in top 5 |
| H3-124 | FALSE POSITIVE | page | how do i test my llm application end to end | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H3-125 | FALSE POSITIVE | page | is a coding benchmark of real repository bugs useful | benchmarks-and-leaderboards | 34 | yes | — | confident wrong page: benchmarks-and-leaderboards |
| H3-126 | FALSE POSITIVE | page | operational discipline for machine learning teams | what-is-ai | 28 | yes | — | confident wrong page: what-is-ai |
| H3-127 | MISS | page | detect that live data no longer looks like training data | (weak) ai-privacy-and-security | 27 | no | — | no accepted page in top 5 |
| H3-128 | MISS | page | record every prompt response and cost in production | (weak) prompt-caching | 31 | no | — | no accepted page in top 5 |
| H3-129 | MISS | page | reduce what i pay per request to a hosted model | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-130 | WEAK | page | split a big training job across accelerators | (weak) distributed-training | 15 | no | — | not solid; accepted page in top 5 |
| H3-131 | WEAK | page | choose accelerators for inference | (weak) model-serving-and-inference | 25 | no | — | not solid; accepted page in top 5 |
| H3-132 | MISS | page | logging runs and comparing model versions | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-133 | FALSE POSITIVE | page | company policy for using generative ai | generative-ai | 52 | yes | — | confident wrong page: generative-ai |
| H3-134 | WEAK | page | european law classing ai by risk level | (weak) ai-governance | 56 | no | — | not solid; accepted page in top 5 |
| H3-135 | WEAK | page | us government framework for managing ai risk | (weak) nist-ai-rmf | 66 | no | — | not solid; accepted page in top 5 |
| H3-136 | WEAK | page | auditable management system standard for ai | (weak) ai-governance | 52 | no | — | not solid; accepted page in top 5 |
| H3-137 | MISS | page | do models treat different groups unequally | (weak) reasoning-models | 42 | no | — | no accepted page in top 5 |
| H3-138 | WEAK | page | how do i document what my model can and cannot do | (weak) model-cards | 28 | no | — | not solid; accepted page in top 5 |
| H3-139 | FALSE POSITIVE | page | tuning on pairs of preferred and dispreferred answers without a reward model | rlhf | 32 | yes | — | confident wrong page: rlhf |
| H3-140 | MISS | page | models agreeing with whatever the user says | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| H3-141 | WEAK | page | exploiting a flawed scoring rule | (weak) process-reward-model | 4 | no | — | not solid; accepted page in top 5 |
| H3-142 | MISS | page | making models follow human values | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| H3-143 | MISS | page | ml systems that predict how proteins fold | (weak) multi-agent-systems | 17 | no | — | no accepted page in top 5 |
| H3-144 | WEAK | page | neural nets as fast stand ins for physics simulations | (weak) physics-informed-neural-networks | 49 | no | — | not solid; accepted page in top 5 |
| H3-145 | MISS | page | kuberntes pods keep restarting | (weak) none | 0 | no | — | no accepted page in top 5 |
| H3-146 | WEAK | page | doker compose networking | (weak) docker | 6 | no | — | not solid; accepted page in top 5 |
| H3-147 | WEAK | page | retreival augmented generaton | (weak) rag | 11 | no | — | not solid; accepted page in top 5 |
| H3-148 | MISS | page | embeding model choise | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-149 | WEAK | page | chain of thougth prompting | (weak) chain-of-thought | 39 | no | — | not solid; accepted page in top 5 |
| H3-150 | WEAK | page | reasonning models explained | (weak) reasoning-models | 40 | no | — | not solid; accepted page in top 5 |
| H3-151 | FALSE POSITIVE | page | vecotr search in postgress | postgresql | 24 | yes | — | confident wrong page: postgresql |
| H3-152 | FALSE POSITIVE | page | multimodel ai basics | what-is-ai | 66 | yes | — | confident wrong page: what-is-ai |
| H3-153 | MISS | page | llama indxe vs langchan | (weak) llama-cpp | 32 | no | — | no accepted page in top 5 |
| H3-154 | WEAK | page | agentc workflows | (weak) agentic-workflows | 13 | no | — | not solid; accepted page in top 5 |
| H3-155 | PASS | neg | ai | (weak) ai-governance | 50 | no | — | no confident answer |
| H3-156 | WEAK | page | prompts | (weak) prompt-engineering | 34 | no | — | not solid; accepted page in top 5 |
| H3-157 | PASS | page | embeddings and stuff | embeddings | 46 | yes | — |  |
| H3-158 | PASS | gap | devops | (weak) mlops | 2 | no | — | transparent non-answer |
| H3-159 | FALSE POSITIVE | neg | something with tokens | tokens | 34 | yes | — | confident answer for out-of-scope query: tokens |
| H3-160 | WEAK | page | safety | (weak) ai-alignment | 8 | no | — | not solid; accepted page in top 5 |
| H3-161 | PASS | gap | ansible vs chef | (weak) none | 0 | no | — | transparent non-answer |
| H3-162 | PASS | gap | ssh key setup | (weak) api-keys | 21 | no | — | transparent non-answer |
| H3-163 | PASS | gap | how do i debounce a function | (weak) function-calling | 24 | no | — | transparent non-answer |
| H3-164 | PASS | gap | python decorators explained | python | 46 | yes | — | nearby page: python |
| H3-165 | PASS | gap | how to write a regex for emails | (weak) grammar-guided-generation | 14 | no | — | transparent non-answer |
| H3-166 | PASS | gap | svelte vs react | react | 54 | yes | — | nearby page: react |
| H3-167 | PASS | gap | how do i build a recommendation engine | (weak) build-spfx-web-part | 20 | no | — | transparent non-answer |
| H3-168 | PASS | gap | speech synthesis voices that sound human | (weak) speech-ai | 22 | no | — | transparent non-answer |
| H3-169 | PASS | gap | which gpu to buy this year | gpus-and-ai-accelerators | 46 | yes | — | nearby page: gpus-and-ai-accelerators |
| H3-170 | PASS | gap | tensorflow lite for microcontrollers | (weak) pytorch | 8 | no | — | transparent non-answer |
| H3-171 | PASS | gap | what is jax | (weak) ai-for-science | 4 | no | — | transparent non-answer |
| H3-172 | PASS | gap | what does the nobel prize in chemistry have to do with ai | (weak) ai-governance | 50 | no | — | transparent non-answer |
| H3-173 | PASS | gap | what is azure openai service pricing | azure-fundamentals | 44 | yes | — | nearby page: azure-fundamentals |
| H3-174 | PASS | gap | how to build a power bi report | power-platform | 46 | yes | — | nearby page: power-platform |
| H3-175 | FALSE POSITIVE | neg | transformer cosplay costume | transformers | 50 | yes | — | confident answer for out-of-scope query: transformers |
| H3-176 | FALSE POSITIVE | neg | mamba mentality tshirt | state-space-models | 31 | yes | — | confident answer for out-of-scope query: state-space-models |
| H3-177 | FALSE POSITIVE | neg | python regius ball care | python | 46 | yes | — | confident answer for out-of-scope query: python |
| H3-178 | PASS | gap | react native vs flutter | react | 54 | yes | — | nearby page: react |
| H3-179 | FALSE POSITIVE | neg | docker pants waterproof | docker | 75 | yes | — | confident answer for out-of-scope query: docker |
| H3-180 | PASS | neg | estate agent fees when selling a flat | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| H3-181 | PASS | neg | scale model train layouts | (weak) model-cards | 28 | no | — | no confident answer |
| H3-182 | FALSE POSITIVE | neg | java island travel tips | java | 46 | yes | — | confident answer for out-of-scope query: java |
| H3-183 | PASS | neg | go kart racing near me | (weak) none | 0 | no | — | no confident answer |
| H3-184 | PASS | neg | spring break destinations | (weak) java | 4 | no | — | no confident answer |
| H3-185 | PASS | neg | swift bird migration | (weak) prisma-and-orms | 4 | no | — | no confident answer |
| H3-186 | PASS | neg | gemini constellation stars | (weak) none | 0 | no | — | no confident answer |
| H3-187 | PASS | neg | falcon bird of prey training | (weak) distributed-training | 13 | no | — | no confident answer |
| H3-188 | PASS | neg | bert lahr wizard of oz | (weak) encoder-decoder-vs-decoder-only | 10 | no | — | no confident answer |
| H3-189 | PASS | neg | llama trekking in peru | (weak) llama-cpp | 32 | no | — | no confident answer |
| H3-190 | PASS | neg | claude debussy piano pieces | (weak) chunking | 1 | no | — | no confident answer |
| H3-191 | PASS | neg | mistral breeze sailing | (weak) open-weights-models | 4 | no | — | no confident answer |
| H3-192 | PASS | neg | agent provocateur meaning | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| H3-193 | PASS | neg | perplexed expression synonyms | (weak) langchain | 2 | no | — | no confident answer |
| H3-194 | PASS | neg | training for a triathlon | (weak) distributed-training | 13 | no | — | no confident answer |
| H3-195 | FALSE POSITIVE | neg | attention to detail resume tips | transformers | 34 | yes | — | confident answer for out-of-scope query: transformers |
| H3-196 | PASS | neg | vector illustration of birds | (weak) choosing-a-vector-store | 28 | no | — | no confident answer |
| H3-197 | PASS | neg | cookie consent banner wording for my shop | (weak) oauth | 4 | no | — | no confident answer |
| H3-198 | FALSE POSITIVE | neg | gradient descent hiking trail name | backpropagation-and-gradient-descent | 80 | yes | — | confident answer for out-of-scope query: backpropagation-and-gradient-descent |
| H3-199 | PASS | neg | how to apply for a visa | (weak) ai-governance | 2 | no | — | no confident answer |
| H3-200 | PASS | neg | best way to learn guitar | (weak) best-of-n-sampling | 28 | no | — | no confident answer |
| H3-201 | PASS | neg | what causes inflation | (weak) none | 0 | no | — | no confident answer |
| H3-202 | PASS | neg | traffic on the m25 right now | (weak) benchmarks-and-leaderboards | 4 | no | — | no confident answer |
| H3-203 | PASS | neg | cheapest flights to rome in march | (weak) none | 0 | no | — | no confident answer |
| H3-204 | PASS | neg | pasta carbonara authentic recipe | (weak) none | 0 | no | — | no confident answer |
| H3-205 | PASS | neg | bake a chocolate cake without eggs | (weak) calling-ai-apis-with-python | 2 | no | — | no confident answer |
| H3-206 | PASS | neg | the score of last nights basketball game | (weak) evaluation-metrics-for-ai | 12 | no | — | no confident answer |
| H3-207 | PASS | neg | biggest city in canada | (weak) owasp-llm-top-10 | 2 | no | — | no confident answer |
| H3-208 | PASS | neg | how long does it take to boil an egg | (weak) agent-memory | 8 | no | — | no confident answer |
| H3-209 | PASS | neg | should i invest in the latest ai company stock | (weak) ai-governance | 52 | no | — | no confident answer |
| H3-210 | PASS | neg | which is the smartest ai right now | (weak) ai-governance | 50 | no | — | no confident answer |
| H3-211 | PASS | neg | write a cover email for a job | (weak) prompt-engineering | 14 | no | — | no confident answer |
