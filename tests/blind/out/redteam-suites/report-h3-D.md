# Knowledge red-team report — h3-D

Dataset: `tests/redteam/frozen-holdout3.json` sha256 `c46fc1bbac641b81ab592df006669547e2fea124568bd4b0d27bd3487766f1b5`

Total 211 · PASS 71 · WEAK 80 · MISS 27 · FALSE POSITIVE 33
Pass rate 33.6% · False-positive rate 15.6%
Retrieval on page-kind queries (157): top-1 52.2% · top-3 70.7% · top-5 77.7%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/1

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 16 | 16 | 0 | 0 | 0 | 100.0% |
| neg | 38 | 32 | 0 | 0 | 6 | 84.2% |
| page | 157 | 23 | 80 | 27 | 27 | 14.6% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 37 | 32 | 0 | 0 | 5 | 86.5% |
| architecture | 2 | 0 | 2 | 0 | 0 | 0.0% |
| beginner | 11 | 2 | 6 | 2 | 1 | 18.2% |
| concept | 83 | 10 | 41 | 17 | 15 | 12.0% |
| coverage-probe | 14 | 14 | 0 | 0 | 0 | 100.0% |
| implementation | 20 | 3 | 9 | 2 | 6 | 15.0% |
| integration | 4 | 0 | 2 | 2 | 0 | 0.0% |
| security | 11 | 1 | 6 | 2 | 2 | 9.1% |
| troubleshooting | 6 | 0 | 5 | 1 | 0 | 0.0% |
| typo | 10 | 4 | 4 | 0 | 2 | 40.0% |
| vague | 6 | 3 | 2 | 0 | 1 | 50.0% |
| what-to-use | 7 | 2 | 3 | 1 | 1 | 28.6% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 1 | 0 | 1 | 0 | 0 | 0.0% |
| agent | 10 | 0 | 6 | 3 | 1 | 0.0% |
| ai | 19 | 12 | 5 | 0 | 2 | 63.2% |
| amb | 24 | 19 | 0 | 0 | 5 | 79.2% |
| api | 7 | 1 | 2 | 2 | 2 | 14.3% |
| arch | 4 | 0 | 0 | 2 | 2 | 0.0% |
| cloud | 4 | 1 | 3 | 0 | 0 | 25.0% |
| cv | 1 | 0 | 0 | 1 | 0 | 0.0% |
| db | 5 | 2 | 2 | 1 | 0 | 40.0% |
| dev | 8 | 6 | 1 | 0 | 1 | 75.0% |
| devops | 7 | 2 | 3 | 1 | 1 | 28.6% |
| dl | 9 | 3 | 6 | 0 | 0 | 33.3% |
| eval | 5 | 2 | 0 | 1 | 2 | 40.0% |
| fw | 2 | 0 | 0 | 0 | 2 | 0.0% |
| gov | 6 | 1 | 3 | 1 | 1 | 16.7% |
| js | 1 | 0 | 1 | 0 | 0 | 0.0% |
| llm | 11 | 0 | 6 | 4 | 1 | 0.0% |
| mcp | 3 | 1 | 1 | 0 | 1 | 33.3% |
| ml | 3 | 0 | 0 | 3 | 0 | 0.0% |
| mlops | 7 | 0 | 3 | 3 | 1 | 0.0% |
| mm | 4 | 0 | 4 | 0 | 0 | 0.0% |
| ms | 8 | 2 | 5 | 0 | 1 | 25.0% |
| node | 1 | 1 | 0 | 0 | 0 | 100.0% |
| off | 13 | 13 | 0 | 0 | 0 | 100.0% |
| prompt | 3 | 0 | 2 | 1 | 0 | 0.0% |
| python | 2 | 0 | 0 | 0 | 2 | 0.0% |
| rag | 8 | 1 | 4 | 1 | 2 | 12.5% |
| react | 1 | 0 | 1 | 0 | 0 | 0.0% |
| reason | 6 | 0 | 5 | 1 | 0 | 0.0% |
| rl | 1 | 1 | 0 | 0 | 0 | 100.0% |
| robot | 5 | 1 | 3 | 0 | 1 | 20.0% |
| runtime | 5 | 1 | 2 | 0 | 2 | 20.0% |
| safety | 4 | 0 | 2 | 1 | 1 | 0.0% |
| science | 2 | 0 | 2 | 0 | 0 | 0.0% |
| sec | 7 | 0 | 5 | 1 | 1 | 0.0% |
| struct | 3 | 1 | 1 | 0 | 1 | 33.3% |
| ts | 1 | 0 | 1 | 0 | 0 | 0.0% |

## FALSE POSITIVE
- H3-018 [page/concept] "memory cost of storing past attention states while generating" → transformers (score 62.772568582285835, solid yes) — expected kv-cache; confident wrong page: transformers
- H3-021 [page/concept] "a more efficient sequence layer than attention for very long inputs" → transformers (score 58.41091206185139, solid yes) — expected state-space-models; confident wrong page: transformers
- H3-026 [page/concept] "smaller model copying a larger one" → quantization (score 54, solid yes) — expected knowledge-distillation; confident wrong page: quantization
- H3-036 [page/implementation] "get typed objects back from an llm call" → large-language-models (score 27, solid yes) — expected structured-outputs|constrained-decoding; confident wrong page: large-language-models
- H3-046 [page/implementation] "use my existing postgres for similarity search" → vector-databases (score 69, solid yes) — expected pgvector|postgresql-for-ai-apps; confident wrong page: vector-databases
- H3-049 [page/implementation] "measuring whether my retrieval is any good" → ai-evaluation (score 50, solid yes) — expected rag-evaluation; confident wrong page: ai-evaluation
- H3-059 [page/what-to-use] "pick a library for building agent loops" → react-agent-pattern (score 58, solid yes) — expected agent-frameworks-compared|choosing-an-agent-framework; confident wrong page: react-agent-pattern
- H3-061 [page/concept] "building a server that offers tools to ai apps" → agent-tools (score 52.946103647858116, solid yes) — expected mcp-servers-and-clients; confident wrong page: agent-tools
- H3-064 [page/implementation] "send a prompt to a hosted model with the python sdk" → python (score 64.60671610874391, solid yes) — expected calling-ai-apis-with-python; confident wrong page: python
- H3-065 [page/implementation] "prepare tabular data for an llm in python" → python (score 47, solid yes) — expected python-data-for-ai; confident wrong page: python
- H3-072 [page/security] "where do i put credentials so they do not leak into git" → git (score 54, solid yes) — expected environment-variables|api-keys; confident wrong page: git
- H3-074 [page/concept] "signed tokens that carry claims" → tokens (score 34, solid yes) — expected json-web-tokens; confident wrong page: tokens
- H3-090 [page/concept] "managing many containers across machines" → containers (score 103.37068790680613, solid yes) — expected kubernetes; confident wrong page: containers
- H3-092 [page/implementation] "custom client side components for modern sharepoint pages" → sharepoint (score 70, solid yes) — expected sharepoint-framework|build-spfx-web-part; confident wrong page: sharepoint
- H3-097 [page/beginner] "libraries that help assemble llm apps" → large-language-models (score 27, solid yes) — expected what-is-an-ai-framework|ai-sdks; confident wrong page: large-language-models
- H3-098 [page/concept] "the hub where people share pretrained models" → transfer-learning (score 71.3899809935192, solid yes) — expected hugging-face; confident wrong page: transfer-learning
- H3-099 [page/concept] "run open models offline on my machine" → open-weights-models (score 108, solid yes) — expected local-ai|ollama|llama-cpp; confident wrong page: open-weights-models
- H3-103 [page/concept] "which deep learning library is most widely used for research" → deep-learning (score 100, solid yes) — expected pytorch; confident wrong page: deep-learning
- H3-110 [page/concept] "policy that maps pictures and words to motor commands" → reinforcement-learning (score 21, solid yes) — expected vision-language-action-models; confident wrong page: reinforcement-learning
- H3-120 [page/security] "top vulnerabilities for generative ai applications" → generative-ai (score 79.62366038876276, solid yes) — expected owasp-llm-top-10; confident wrong page: generative-ai
- H3-124 [page/concept] "how do i test my llm application end to end" → large-language-models (score 27, solid yes) — expected ai-evaluation; confident wrong page: large-language-models
- H3-125 [page/concept] "is a coding benchmark of real repository bugs useful" → humaneval (score 171.03395713022164, solid yes) — expected swe-bench; confident wrong page: humaneval
- H3-126 [page/concept] "operational discipline for machine learning teams" → what-is-ai (score 62.8645216219944, solid yes) — expected mlops; confident wrong page: what-is-ai
- H3-133 [page/concept] "company policy for using generative ai" → generative-ai (score 85.47344584672936, solid yes) — expected ai-governance; confident wrong page: generative-ai
- H3-139 [page/concept] "tuning on pairs of preferred and dispreferred answers without a reward model" → rlhf (score 61.52010609755037, solid yes) — expected dpo|preference-optimization; confident wrong page: rlhf
- H3-151 [page/typo] "vecotr search in postgress" → postgresql (score 67, solid yes) — expected pgvector|vector-databases; confident wrong page: postgresql
- H3-152 [page/typo] "multimodel ai basics" → what-is-ai (score 66, solid yes) — expected multimodal-ai|vision-language-models; confident wrong page: what-is-ai
- H3-159 [neg/vague] "something with tokens" → tokens (score 67.63355962943285, solid yes) — expected none; confident answer for out-of-scope query: tokens
- H3-175 [neg/ambiguous-or-off-topic] "transformer cosplay costume" → transformers (score 50, solid yes) — expected none; confident answer for out-of-scope query: transformers
- H3-177 [neg/ambiguous-or-off-topic] "python regius ball care" → python (score 46, solid yes) — expected none; confident answer for out-of-scope query: python
- H3-182 [neg/ambiguous-or-off-topic] "java island travel tips" → java (score 46, solid yes) — expected none; confident answer for out-of-scope query: java
- H3-195 [neg/ambiguous-or-off-topic] "attention to detail resume tips" → transformers (score 34, solid yes) — expected none; confident answer for out-of-scope query: transformers
- H3-198 [neg/ambiguous-or-off-topic] "gradient descent hiking trail name" → backpropagation-and-gradient-descent (score 102, solid yes) — expected none; confident answer for out-of-scope query: backpropagation-and-gradient-descent

## MISS
- H3-004 [page/beginner] "is there a cap on how many words i can paste into the assistant" → (weak) ai-agent-vs-chatbot (score 38.59391932632728, solid no) — expected context-windows|tokens; no accepted page in top 5
- H3-005 [page/concept] "teaching software with examples that already have answers" → (weak) what-is-ai (score 48.55263230741713, solid no) — expected supervised-learning; no accepted page in top 5
- H3-006 [page/concept] "software that discovers groups by itself in raw data" → (weak) gdpr-and-ai (score 29, solid no) — expected unsupervised-learning; no accepted page in top 5
- H3-009 [page/troubleshooting] "accuracy looks perfect in my notebook but tanks after deployment" → (weak) prm-vs-orm (score 26.454327806326635, solid no) — expected overfitting-and-regularization|model-drift-and-monitoring; no accepted page in top 5
- H3-019 [page/concept] "how does a model keep track of where each word sits in the sentence" → (weak) context-windows (score 48.049985815068254, solid no) — expected positional-encoding; no accepted page in top 5
- H3-020 [page/concept] "architectures with many specialised subnetworks" → (weak) deep-learning (score 26.184968378270774, solid no) — expected mixture-of-experts; no accepted page in top 5
- H3-022 [page/concept] "what does it mean to train longer on more text" → (weak) large-language-models (score 37.157506299951706, solid no) — expected scaling-laws; no accepted page in top 5
- H3-025 [page/what-to-use] "make a model fit on a small graphics card" → (weak) small-language-models (score 79.30268620002244, solid no) — expected quantization|gpus-and-ai-accelerators; no accepted page in top 5
- H3-027 [page/concept] "guess several words ahead and verify them" → (weak) how-to-reduce-hallucinations (score 69.42510006748573, solid no) — expected speculative-decoding; no accepted page in top 5
- H3-034 [page/concept] "privacy of a model's inner deliberation" → (weak) reasoning-models (score 46.89595318739731, solid no) — expected reasoning-transparency; no accepted page in top 5
- H3-039 [page/implementation] "how do i word my request so the answer comes out right" → (weak) rag (score 25.905495316240803, solid no) — expected prompt-engineering|common-prompting-mistakes; no accepted page in top 5
- H3-042 [page/implementation] "let a model answer from the files on my drive" → (weak) model-cards (score 28, solid no) — expected rag; no accepted page in top 5
- H3-050 [page/integration] "assistant that can look through my mailbox and summarise it" → (weak) ai-agent-vs-chatbot (score 26.055185782580466, solid no) — expected gmail-for-ai-agents|connecting-agents-to-apps; no accepted page in top 5
- H3-051 [page/integration] "let a bot create tickets in our issue tracker" → (weak) github (score 20.486054826381885, solid no) — expected connecting-agents-to-apps|agent-tools|function-calling; no accepted page in top 5
- H3-056 [page/concept] "giving a model the ability to run functions" → (weak) ai-agent-vs-chatbot (score 57.000822915261466, solid no) — expected function-calling|agent-tools; no accepted page in top 5
- H3-071 [page/concept] "querying exactly the fields i need from an api" → (weak) api-keys (score 49.66675498160268, solid no) — expected graphql|rest-vs-graphql; no accepted page in top 5
- H3-073 [page/security] "login with google or microsoft for my web app" → (weak) microsoft-graph (score 55.92706592862666, solid no) — expected openid-connect|oauth; no accepted page in top 5
- H3-081 [page/concept] "mapping database rows to objects in code" → (weak) vector-database-vs-traditional-database (score 64.46364402459159, solid no) — expected prisma-and-orms; no accepted page in top 5
- H3-086 [page/beginner] "wrap my app so it runs identically on any server" → (weak) nextjs (score 29.421918970455895, solid no) — expected docker|containers; no accepted page in top 5
- H3-108 [page/concept] "locating and naming objects in photos" → (weak) pgvector (score 11.221902695957294, solid no) — expected object-detection; no accepted page in top 5
- H3-117 [page/security] "runtime checks on what the model is allowed to say" → (weak) model-cards (score 45.703462262017446, solid no) — expected ai-guardrails; no accepted page in top 5
- H3-122 [page/concept] "have a stronger model score weaker model answers" → (weak) process-reward-model (score 42.11436957921413, solid no) — expected llm-as-a-judge; no accepted page in top 5
- H3-127 [page/concept] "detect that live data no longer looks like training data" → (weak) benchmark-contamination (score 44.42918332560356, solid no) — expected model-drift-and-monitoring; no accepted page in top 5
- H3-128 [page/concept] "record every prompt response and cost in production" → (weak) prompt-caching (score 59.84496105222141, solid no) — expected llm-observability; no accepted page in top 5
- H3-132 [page/concept] "logging runs and comparing model versions" → (weak) model-drift-and-monitoring (score 45.365982740837836, solid no) — expected mlflow; no accepted page in top 5
- H3-137 [page/concept] "do models treat different groups unequally" → (weak) reasoning-models (score 42, solid no) — expected ai-bias-and-fairness; no accepted page in top 5
- H3-142 [page/concept] "making models follow human values" → (weak) reasoning-models (score 53.57909681338643, solid no) — expected ai-alignment; no accepted page in top 5

## WEAK
- H3-002 [page/beginner] "why does my chat assistant sometimes confidently say wrong things" → (weak) common-prompting-mistakes (score 46.49803438533883, solid no) — expected ai-hallucinations|how-to-reduce-hallucinations; not solid; accepted page in top 5
- H3-003 [page/beginner] "what are the little chunks of text a model reads called" → (weak) chunking (score 45.784795211013, solid no) — expected tokens; not solid; accepted page in top 5
- H3-007 [page/concept] "stacked layers of simple math units that learn patterns" → (weak) deep-learning (score 38.525845464277275, solid no) — expected neural-networks|deep-learning; not solid; accepted page in top 5
- H3-008 [page/concept] "how the error signal flows backwards through the layers" → (weak) positional-encoding (score 49.30724321020377, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- H3-010 [page/troubleshooting] "my network outputs nan after a few steps" → (weak) neural-networks (score 34.88243777346502, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- H3-011 [page/implementation] "take a model trained on millions of photos and adapt it to x-rays" → (weak) transfer-learning (score 52.78878159210287, solid no) — expected transfer-learning; not solid; accepted page in top 5
- H3-015 [page/concept] "noise to picture generators" → (weak) diffusion-models (score 44.04757911021325, solid no) — expected diffusion-models; not solid; accepted page in top 5
- H3-017 [page/concept] "networks for data that is linked together like friendships" → (weak) graph-neural-networks (score 78.65453013985663, solid no) — expected graph-neural-networks; not solid; accepted page in top 5
- H3-023 [page/concept] "making the assistant polite and instruction following after pretraining" → (weak) instruction-tuning (score 73.47128099434269, solid no) — expected instruction-tuning|rlhf; not solid; accepted page in top 5
- H3-024 [page/what-to-use] "cheaper way to specialise a big model than retraining everything" → (weak) knowledge-distillation (score 47.17632128246976, solid no) — expected lora-and-peft|lora-vs-full-fine-tuning; not solid; accepted page in top 5
- H3-028 [page/concept] "compact models for edge devices" → (weak) small-language-models (score 100.58264609095525, solid no) — expected small-language-models; not solid; accepted page in top 5
- H3-029 [page/concept] "can i legally use downloadable model weights in a product" → (weak) open-weights-models (score 90.68503960593874, solid no) — expected open-weights-models; not solid; accepted page in top 5
- H3-030 [page/concept] "letting a model deliberate longer for harder questions" → (weak) reasoning-vs-standard-models (score 50.73540390688301, solid no) — expected test-time-compute|reasoning-models; not solid; accepted page in top 5
- H3-031 [page/concept] "sample a bunch of solutions and go with the consensus" → (weak) gsm8k-and-math-benchmarks (score 52.302487376241935, solid no) — expected self-consistency; not solid; accepted page in top 5
- H3-032 [page/concept] "a scorer that checks each intermediate step" → (weak) process-reward-model (score 61.87521347420097, solid no) — expected process-reward-model; not solid; accepted page in top 5
- H3-033 [page/concept] "training with rewards that come from automatic checkers" → (weak) reinforcement-learning-for-reasoning (score 59.297180551743, solid no) — expected reinforcement-learning-for-reasoning; not solid; accepted page in top 5
- H3-035 [page/concept] "should i pick a deliberating model or a quick one" → (weak) process-reward-model (score 51.909736237478896, solid no) — expected reasoning-vs-standard-models|reasoning-models; not solid; accepted page in top 5
- H3-038 [page/concept] "how do sampling knobs shape the text a model writes" → (weak) sampling-and-decoding (score 66.31133602347921, solid no) — expected sampling-and-decoding; not solid; accepted page in top 5
- H3-040 [page/implementation] "setting the personality and rules for an assistant" → (weak) ai-agent-vs-chatbot (score 48.11444548499664, solid no) — expected system-prompts; not solid; accepted page in top 5
- H3-041 [page/troubleshooting] "why do my prompts work on some inputs and fail on others" → (weak) common-prompting-mistakes (score 83.89324421609011, solid no) — expected common-prompting-mistakes|prompt-engineering|ai-evaluation; not solid; accepted page in top 5
- H3-043 [page/implementation] "splitting large documents sensibly before indexing" → (weak) chunking (score 132.51398319640344, solid no) — expected chunking; not solid; accepted page in top 5
- H3-044 [page/concept] "numbers that capture the meaning of a sentence" → (weak) embeddings (score 98.23986660784753, solid no) — expected embeddings; not solid; accepted page in top 5
- H3-047 [page/troubleshooting] "good documents indexed but answers still miss the point" → (weak) chunking (score 37.35264297195339, solid no) — expected rag-evaluation|hybrid-search-and-reranking|chunking; not solid; accepted page in top 5
- H3-048 [page/concept] "retrieval that follows links between concepts" → (weak) agentic-rag (score 82.42876200643025, solid no) — expected graph-rag; not solid; accepted page in top 5
- H3-052 [page/integration] "which scopes does an assistant need to read my calendar" → (weak) authentication-vs-authorization (score 25.516738066585592, solid no) — expected oauth-for-ai-agents|integration-permissions|connecting-agents-to-apps; not solid; accepted page in top 5
- H3-053 [page/security] "what could go wrong if an assistant can send emails by itself" → (weak) ai-agent-vs-chatbot (score 24.96081723391524, solid no) — expected integration-permissions|prompt-injection|gmail-for-ai-agents; not solid; accepted page in top 5
- H3-054 [page/concept] "software that plans acts and checks its own progress" → (weak) agent-planning (score 77.46122145165117, solid no) — expected ai-agents|react-agent-pattern|agent-planning; not solid; accepted page in top 5
- H3-055 [page/architecture] "how to coordinate a researcher agent and a writer agent" → (weak) multi-agent-systems (score 130.50877523032912, solid no) — expected multi-agent-systems|agentic-workflows; not solid; accepted page in top 5
- H3-057 [page/architecture] "keeping a long conversation history manageable for an agent" → (weak) ai-agent-vs-chatbot (score 93.34107817433741, solid no) — expected agent-memory|context-windows|context-engineering; not solid; accepted page in top 5
- H3-058 [page/troubleshooting] "my assistant calls the wrong tool half the time" → (weak) ai-agent-vs-chatbot (score 38.200147993729274, solid no) — expected agent-tools|function-calling|agent-evaluation; not solid; accepted page in top 5
- H3-060 [page/concept] "protocol that lets assistants plug into external services" → (weak) mcp (score 57.7016436032023, solid no) — expected mcp; not solid; accepted page in top 5
- H3-063 [page/concept] "protocol for agents built by different companies to cooperate" → (weak) agent-protocol-landscape (score 126.11110102873045, solid no) — expected a2a-protocol|agent-protocol-landscape; not solid; accepted page in top 5
- H3-066 [page/implementation] "browser app talking to a model through my own backend" → (weak) frontend-and-backend (score 47.2524784111188, solid no) — expected calling-ai-apis-with-javascript|nodejs-for-ai|api-keys; not solid; accepted page in top 5
- H3-067 [page/implementation] "make my api client type safe" → (weak) typescript-api-client-types (score 77.2990574092926, solid no) — expected typescript-api-client-types|typescript-for-ai; not solid; accepted page in top 5
- H3-068 [page/implementation] "ui components for a chat assistant" → (weak) react-ai-interfaces (score 53.36905803591842, solid no) — expected react-ai-interfaces|react-chatbot-state; not solid; accepted page in top 5
- H3-070 [page/concept] "how do two programs talk over http" → (weak) websockets (score 21.60631063135543, solid no) — expected what-is-an-api|rest-apis; not solid; accepted page in top 5
- H3-075 [page/concept] "why does my browser refuse the response from another domain" → (weak) cors (score 32.31195957964546, solid no) — expected cors; not solid; accepted page in top 5
- H3-078 [page/what-to-use] "document store or relational tables for flexible records" → (weak) sql-vs-nosql (score 49.86455612670963, solid no) — expected sql-vs-nosql|mongodb; not solid; accepted page in top 5
- H3-080 [page/concept] "in memory key value store" → (weak) redis (score 60.876041738906935, solid no) — expected redis; not solid; accepted page in top 5
- H3-083 [page/beginner] "microsoft cloud basics for a developer" → (weak) microsoft-365 (score 57.981830260012856, solid no) — expected azure-fundamentals; not solid; accepted page in top 5
- H3-084 [page/beginner] "googles cloud platform overview" → (weak) gcp-fundamentals (score 66.98376469936079, solid no) — expected gcp-fundamentals; not solid; accepted page in top 5
- H3-085 [page/what-to-use] "which cloud gives gpus for model hosting" → (weak) gcp-fundamentals (score 55.904652515288404, solid no) — expected aws-fundamentals|azure-fundamentals|gcp-fundamentals|gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-087 [page/beginner] "keep track of changes to my code and collaborate" → (weak) code-execution-sandboxing (score 40.651304612365, solid no) — expected git|github; not solid; accepted page in top 5
- H3-088 [page/implementation] "run checks automatically whenever i push" → (weak) cicd (score 21.86345228918017, solid no) — expected cicd|github; not solid; accepted page in top 5
- H3-089 [page/troubleshooting] "my deployment keeps crashing and restarting in the cluster" → (weak) kubernetes (score 141.08106805647674, solid no) — expected kubernetes|containers; not solid; accepted page in top 5
- H3-091 [page/beginner] "team intranet platform from microsoft" → (weak) microsoft-365 (score 60.83109476077001, solid no) — expected sharepoint; not solid; accepted page in top 5
- H3-093 [page/integration] "fetch mail and files from a users microsoft account" → (weak) microsoft-graph (score 58.16253471821132, solid no) — expected microsoft-graph; not solid; accepted page in top 5
- H3-094 [page/concept] "microsofts identity platform for sign in and permissions" → (weak) power-platform (score 38.62257994538294, solid no) — expected microsoft-entra-id; not solid; accepted page in top 5
- H3-095 [page/implementation] "automate approvals without writing code" → (weak) code-execution-sandboxing (score 44.98311176061591, solid no) — expected power-platform; not solid; accepted page in top 5
- H3-096 [page/implementation] "build an app that lives inside microsoft teams" → (weak) teams-development (score 92.84926465212364, solid no) — expected teams-development; not solid; accepted page in top 5
- H3-101 [page/concept] "quantized model format for cpu inference" → (weak) model-serving-and-inference (score 99.79929914357757, solid no) — expected llama-cpp|quantization; not solid; accepted page in top 5
- H3-102 [page/concept] "portable inference format for many platforms" → (weak) model-serving-and-inference (score 75.78403392195139, solid no) — expected onnx-runtime; not solid; accepted page in top 5
- H3-104 [page/concept] "model that reads pictures and answers questions about them" → (weak) vision-language-models (score 54.00937146300413, solid no) — expected vision-language-models; not solid; accepted page in top 5
- H3-105 [page/concept] "turn recorded speech into text" → (weak) speech-ai (score 80.99512065642378, solid no) — expected speech-ai; not solid; accepted page in top 5
- H3-106 [page/concept] "pull fields from scanned forms" → (weak) document-understanding-ai (score 55.75369594807628, solid no) — expected document-understanding-ai; not solid; accepted page in top 5
- H3-107 [page/concept] "generating clips from a text description" → (weak) vision-language-models (score 76.47992554770052, solid no) — expected video-generation-models; not solid; accepted page in top 5
- H3-109 [page/concept] "software layer that connects sensors and motors in a robot" → (weak) robot-operating-system (score 88.49073171021432, solid no) — expected robot-operating-system|embodied-ai; not solid; accepted page in top 5
- H3-111 [page/concept] "teach manipulation by copying human operators" → (weak) physics-informed-neural-networks (score 23.53090390417519, solid no) — expected imitation-learning; not solid; accepted page in top 5
- H3-112 [page/concept] "transferring skills from a physics simulator to a real machine" → (weak) sim-to-real-transfer (score 55.23062477540955, solid no) — expected sim-to-real-transfer; not solid; accepted page in top 5
- H3-114 [page/security] "attack where crafted text overrides my assistants rules" → (weak) prompt-injection (score 108.58079185597352, solid no) — expected prompt-injection; not solid; accepted page in top 5
- H3-115 [page/security] "what personal data should never go into a public chatbot" → (weak) gdpr-and-ai (score 47.719513657244605, solid no) — expected ai-privacy-and-security|gdpr-and-ai; not solid; accepted page in top 5
- H3-116 [page/security] "probing my own assistant for weaknesses before launch" → (weak) red-teaming (score 54.39047268587569, solid no) — expected red-teaming; not solid; accepted page in top 5
- H3-118 [page/security] "running untrusted generated scripts without risking my machine" → (weak) code-execution-sandboxing (score 71.34521144836047, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- H3-119 [page/security] "labelling content as machine made" → (weak) c2pa-content-provenance (score 60.308097818329955, solid no) — expected c2pa-content-provenance; not solid; accepted page in top 5
- H3-129 [page/concept] "reduce what i pay per request to a hosted model" → (weak) llm-cost-optimization (score 59.87831005854973, solid no) — expected llm-cost-optimization|prompt-caching; not solid; accepted page in top 5
- H3-130 [page/concept] "split a big training job across accelerators" → (weak) distributed-training (score 59.42138149280845, solid no) — expected distributed-training; not solid; accepted page in top 5
- H3-131 [page/concept] "choose accelerators for inference" → (weak) model-serving-and-inference (score 73.28824821387595, solid no) — expected gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-134 [page/concept] "european law classing ai by risk level" → (weak) eu-ai-act (score 107.36993772924463, solid no) — expected eu-ai-act; not solid; accepted page in top 5
- H3-135 [page/concept] "us government framework for managing ai risk" → (weak) nist-ai-rmf (score 123.35098362294725, solid no) — expected nist-ai-rmf; not solid; accepted page in top 5
- H3-138 [page/concept] "how do i document what my model can and cannot do" → (weak) model-cards (score 45.946470523061706, solid no) — expected model-cards; not solid; accepted page in top 5
- H3-140 [page/concept] "models agreeing with whatever the user says" → (weak) sycophancy (score 64.69061828835714, solid no) — expected sycophancy; not solid; accepted page in top 5
- H3-141 [page/concept] "exploiting a flawed scoring rule" → (weak) reward-hacking (score 47.61854430580925, solid no) — expected reward-hacking; not solid; accepted page in top 5
- H3-143 [page/concept] "ml systems that predict how proteins fold" → (weak) alphafold (score 43.561313545061566, solid no) — expected alphafold; not solid; accepted page in top 5
- H3-144 [page/concept] "neural nets as fast stand ins for physics simulations" → (weak) physics-informed-neural-networks (score 73.05750889693631, solid no) — expected physics-informed-neural-networks|ai-for-science; not solid; accepted page in top 5
- H3-145 [page/typo] "kuberntes pods keep restarting" → (weak) kubernetes (score 111.15737486177792, solid no) — expected kubernetes; not solid; accepted page in top 5
- H3-147 [page/typo] "retreival augmented generaton" → (weak) rag (score 151.83084322909718, solid no) — expected rag; not solid; accepted page in top 5
- H3-149 [page/typo] "chain of thougth prompting" → (weak) chain-of-thought (score 114.54004419115077, solid no) — expected chain-of-thought; not solid; accepted page in top 5
- H3-150 [page/typo] "reasonning models explained" → (weak) reasoning-models (score 51.77619257857691, solid no) — expected reasoning-models; not solid; accepted page in top 5
- H3-156 [page/vague] "prompts" → (weak) system-prompts (score 135.6824277090042, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- H3-160 [page/vague] "safety" → (weak) ai-alignment (score 31.962090187689263, solid no) — expected ai-alignment|ai-privacy-and-security|prompt-injection|ai-guardrails; not solid; accepted page in top 5

## Path completeness failures
- H3-050 "assistant that can look through my mailbox and summarise it" top (weak) ai-agent-vs-chatbot; learn -

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H3-001 | PASS | page | im new here, what even is artificial intelligence | what-is-ai | 93.8767423370911 | yes | — |  |
| H3-002 | WEAK | page | why does my chat assistant sometimes confidently say wrong things | (weak) common-prompting-mistakes | 46.49803438533883 | no | — | not solid; accepted page in top 5 |
| H3-003 | WEAK | page | what are the little chunks of text a model reads called | (weak) chunking | 45.784795211013 | no | — | not solid; accepted page in top 5 |
| H3-004 | MISS | page | is there a cap on how many words i can paste into the assistant | (weak) ai-agent-vs-chatbot | 38.59391932632728 | no | — | no accepted page in top 5 |
| H3-005 | MISS | page | teaching software with examples that already have answers | (weak) what-is-ai | 48.55263230741713 | no | — | no accepted page in top 5 |
| H3-006 | MISS | page | software that discovers groups by itself in raw data | (weak) gdpr-and-ai | 29 | no | — | no accepted page in top 5 |
| H3-007 | WEAK | page | stacked layers of simple math units that learn patterns | (weak) deep-learning | 38.525845464277275 | no | — | not solid; accepted page in top 5 |
| H3-008 | WEAK | page | how the error signal flows backwards through the layers | (weak) positional-encoding | 49.30724321020377 | no | — | not solid; accepted page in top 5 |
| H3-009 | MISS | page | accuracy looks perfect in my notebook but tanks after deployment | (weak) prm-vs-orm | 26.454327806326635 | no | — | no accepted page in top 5 |
| H3-010 | WEAK | page | my network outputs nan after a few steps | (weak) neural-networks | 34.88243777346502 | no | — | not solid; accepted page in top 5 |
| H3-011 | WEAK | page | take a model trained on millions of photos and adapt it to x-rays | (weak) transfer-learning | 52.78878159210287 | no | — | not solid; accepted page in top 5 |
| H3-012 | PASS | page | software learns a policy by being scored on outcomes | reinforcement-learning | 36.46853709649231 | yes | — |  |
| H3-013 | PASS | page | why convolutions suit pictures | convolutional-neural-networks | 46 | yes | — |  |
| H3-014 | PASS | page | self attention versus recurrence for sequences | transformers | 50 | yes | — |  |
| H3-015 | WEAK | page | noise to picture generators | (weak) diffusion-models | 44.04757911021325 | no | — | not solid; accepted page in top 5 |
| H3-016 | PASS | page | autoencoder with a probabilistic bottleneck | variational-autoencoders | 62 | yes | — |  |
| H3-017 | WEAK | page | networks for data that is linked together like friendships | (weak) graph-neural-networks | 78.65453013985663 | no | — | not solid; accepted page in top 5 |
| H3-018 | FALSE POSITIVE | page | memory cost of storing past attention states while generating | transformers | 62.772568582285835 | yes | — | confident wrong page: transformers |
| H3-019 | MISS | page | how does a model keep track of where each word sits in the sentence | (weak) context-windows | 48.049985815068254 | no | — | no accepted page in top 5 |
| H3-020 | MISS | page | architectures with many specialised subnetworks | (weak) deep-learning | 26.184968378270774 | no | — | no accepted page in top 5 |
| H3-021 | FALSE POSITIVE | page | a more efficient sequence layer than attention for very long inputs | transformers | 58.41091206185139 | yes | — | confident wrong page: transformers |
| H3-022 | MISS | page | what does it mean to train longer on more text | (weak) large-language-models | 37.157506299951706 | no | — | no accepted page in top 5 |
| H3-023 | WEAK | page | making the assistant polite and instruction following after pretraining | (weak) instruction-tuning | 73.47128099434269 | no | — | not solid; accepted page in top 5 |
| H3-024 | WEAK | page | cheaper way to specialise a big model than retraining everything | (weak) knowledge-distillation | 47.17632128246976 | no | — | not solid; accepted page in top 5 |
| H3-025 | MISS | page | make a model fit on a small graphics card | (weak) small-language-models | 79.30268620002244 | no | — | no accepted page in top 5 |
| H3-026 | FALSE POSITIVE | page | smaller model copying a larger one | quantization | 54 | yes | — | confident wrong page: quantization |
| H3-027 | MISS | page | guess several words ahead and verify them | (weak) how-to-reduce-hallucinations | 69.42510006748573 | no | — | no accepted page in top 5 |
| H3-028 | WEAK | page | compact models for edge devices | (weak) small-language-models | 100.58264609095525 | no | — | not solid; accepted page in top 5 |
| H3-029 | WEAK | page | can i legally use downloadable model weights in a product | (weak) open-weights-models | 90.68503960593874 | no | — | not solid; accepted page in top 5 |
| H3-030 | WEAK | page | letting a model deliberate longer for harder questions | (weak) reasoning-vs-standard-models | 50.73540390688301 | no | — | not solid; accepted page in top 5 |
| H3-031 | WEAK | page | sample a bunch of solutions and go with the consensus | (weak) gsm8k-and-math-benchmarks | 52.302487376241935 | no | — | not solid; accepted page in top 5 |
| H3-032 | WEAK | page | a scorer that checks each intermediate step | (weak) process-reward-model | 61.87521347420097 | no | — | not solid; accepted page in top 5 |
| H3-033 | WEAK | page | training with rewards that come from automatic checkers | (weak) reinforcement-learning-for-reasoning | 59.297180551743 | no | — | not solid; accepted page in top 5 |
| H3-034 | MISS | page | privacy of a model's inner deliberation | (weak) reasoning-models | 46.89595318739731 | no | — | no accepted page in top 5 |
| H3-035 | WEAK | page | should i pick a deliberating model or a quick one | (weak) process-reward-model | 51.909736237478896 | no | — | not solid; accepted page in top 5 |
| H3-036 | FALSE POSITIVE | page | get typed objects back from an llm call | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H3-037 | PASS | page | force an llm to stay inside a json schema | json-schema | 104 | yes | — |  |
| H3-038 | WEAK | page | how do sampling knobs shape the text a model writes | (weak) sampling-and-decoding | 66.31133602347921 | no | — | not solid; accepted page in top 5 |
| H3-039 | MISS | page | how do i word my request so the answer comes out right | (weak) rag | 25.905495316240803 | no | — | no accepted page in top 5 |
| H3-040 | WEAK | page | setting the personality and rules for an assistant | (weak) ai-agent-vs-chatbot | 48.11444548499664 | no | — | not solid; accepted page in top 5 |
| H3-041 | WEAK | page | why do my prompts work on some inputs and fail on others | (weak) common-prompting-mistakes | 83.89324421609011 | no | — | not solid; accepted page in top 5 |
| H3-042 | MISS | page | let a model answer from the files on my drive | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-043 | WEAK | page | splitting large documents sensibly before indexing | (weak) chunking | 132.51398319640344 | no | — | not solid; accepted page in top 5 |
| H3-044 | WEAK | page | numbers that capture the meaning of a sentence | (weak) embeddings | 98.23986660784753 | no | — | not solid; accepted page in top 5 |
| H3-045 | PASS | page | a database built for finding nearest vectors | vector-databases | 66 | yes | — |  |
| H3-046 | FALSE POSITIVE | page | use my existing postgres for similarity search | vector-databases | 69 | yes | — | confident wrong page: vector-databases |
| H3-047 | WEAK | page | good documents indexed but answers still miss the point | (weak) chunking | 37.35264297195339 | no | — | not solid; accepted page in top 5 |
| H3-048 | WEAK | page | retrieval that follows links between concepts | (weak) agentic-rag | 82.42876200643025 | no | — | not solid; accepted page in top 5 |
| H3-049 | FALSE POSITIVE | page | measuring whether my retrieval is any good | ai-evaluation | 50 | yes | — | confident wrong page: ai-evaluation |
| H3-050 | MISS | page | assistant that can look through my mailbox and summarise it | (weak) ai-agent-vs-chatbot | 26.055185782580466 | no | — | no accepted page in top 5 |
| H3-051 | MISS | page | let a bot create tickets in our issue tracker | (weak) github | 20.486054826381885 | no | — | no accepted page in top 5 |
| H3-052 | WEAK | page | which scopes does an assistant need to read my calendar | (weak) authentication-vs-authorization | 25.516738066585592 | no | — | not solid; accepted page in top 5 |
| H3-053 | WEAK | page | what could go wrong if an assistant can send emails by itself | (weak) ai-agent-vs-chatbot | 24.96081723391524 | no | — | not solid; accepted page in top 5 |
| H3-054 | WEAK | page | software that plans acts and checks its own progress | (weak) agent-planning | 77.46122145165117 | no | — | not solid; accepted page in top 5 |
| H3-055 | WEAK | page | how to coordinate a researcher agent and a writer agent | (weak) multi-agent-systems | 130.50877523032912 | no | — | not solid; accepted page in top 5 |
| H3-056 | MISS | page | giving a model the ability to run functions | (weak) ai-agent-vs-chatbot | 57.000822915261466 | no | — | no accepted page in top 5 |
| H3-057 | WEAK | page | keeping a long conversation history manageable for an agent | (weak) ai-agent-vs-chatbot | 93.34107817433741 | no | — | not solid; accepted page in top 5 |
| H3-058 | WEAK | page | my assistant calls the wrong tool half the time | (weak) ai-agent-vs-chatbot | 38.200147993729274 | no | — | not solid; accepted page in top 5 |
| H3-059 | FALSE POSITIVE | page | pick a library for building agent loops | react-agent-pattern | 58 | yes | — | confident wrong page: react-agent-pattern |
| H3-060 | WEAK | page | protocol that lets assistants plug into external services | (weak) mcp | 57.7016436032023 | no | — | not solid; accepted page in top 5 |
| H3-061 | FALSE POSITIVE | page | building a server that offers tools to ai apps | agent-tools | 52.946103647858116 | yes | — | confident wrong page: agent-tools |
| H3-062 | PASS | page | could a connected tool server steal my data | mcp-security | 62 | yes | — |  |
| H3-063 | WEAK | page | protocol for agents built by different companies to cooperate | (weak) agent-protocol-landscape | 126.11110102873045 | no | — | not solid; accepted page in top 5 |
| H3-064 | FALSE POSITIVE | page | send a prompt to a hosted model with the python sdk | python | 64.60671610874391 | yes | — | confident wrong page: python |
| H3-065 | FALSE POSITIVE | page | prepare tabular data for an llm in python | python | 47 | yes | — | confident wrong page: python |
| H3-066 | WEAK | page | browser app talking to a model through my own backend | (weak) frontend-and-backend | 47.2524784111188 | no | — | not solid; accepted page in top 5 |
| H3-067 | WEAK | page | make my api client type safe | (weak) typescript-api-client-types | 77.2990574092926 | no | — | not solid; accepted page in top 5 |
| H3-068 | WEAK | page | ui components for a chat assistant | (weak) react-ai-interfaces | 53.36905803591842 | no | — | not solid; accepted page in top 5 |
| H3-069 | PASS | page | run a model proxy on express | express | 52 | yes | — |  |
| H3-070 | WEAK | page | how do two programs talk over http | (weak) websockets | 21.60631063135543 | no | — | not solid; accepted page in top 5 |
| H3-071 | MISS | page | querying exactly the fields i need from an api | (weak) api-keys | 49.66675498160268 | no | — | no accepted page in top 5 |
| H3-072 | FALSE POSITIVE | page | where do i put credentials so they do not leak into git | git | 54 | yes | — | confident wrong page: git |
| H3-073 | MISS | page | login with google or microsoft for my web app | (weak) microsoft-graph | 55.92706592862666 | no | — | no accepted page in top 5 |
| H3-074 | FALSE POSITIVE | page | signed tokens that carry claims | tokens | 34 | yes | — | confident wrong page: tokens |
| H3-075 | WEAK | page | why does my browser refuse the response from another domain | (weak) cors | 32.31195957964546 | no | — | not solid; accepted page in top 5 |
| H3-076 | PASS | page | server calls me when something happens | webhooks | 49.60263102901875 | yes | — |  |
| H3-077 | PASS | page | structured query language for relational data | sql | 77 | yes | — |  |
| H3-078 | WEAK | page | document store or relational tables for flexible records | (weak) sql-vs-nosql | 49.86455612670963 | no | — | not solid; accepted page in top 5 |
| H3-079 | PASS | page | lightweight embedded database | sqlite | 65.1533269312441 | yes | — |  |
| H3-080 | WEAK | page | in memory key value store | (weak) redis | 60.876041738906935 | no | — | not solid; accepted page in top 5 |
| H3-081 | MISS | page | mapping database rows to objects in code | (weak) vector-database-vs-traditional-database | 64.46364402459159 | no | — | no accepted page in top 5 |
| H3-082 | PASS | page | what can i host on amazon web services | aws-fundamentals | 50.00767812768484 | yes | — |  |
| H3-083 | WEAK | page | microsoft cloud basics for a developer | (weak) microsoft-365 | 57.981830260012856 | no | — | not solid; accepted page in top 5 |
| H3-084 | WEAK | page | googles cloud platform overview | (weak) gcp-fundamentals | 66.98376469936079 | no | — | not solid; accepted page in top 5 |
| H3-085 | WEAK | page | which cloud gives gpus for model hosting | (weak) gcp-fundamentals | 55.904652515288404 | no | — | not solid; accepted page in top 5 |
| H3-086 | MISS | page | wrap my app so it runs identically on any server | (weak) nextjs | 29.421918970455895 | no | — | no accepted page in top 5 |
| H3-087 | WEAK | page | keep track of changes to my code and collaborate | (weak) code-execution-sandboxing | 40.651304612365 | no | — | not solid; accepted page in top 5 |
| H3-088 | WEAK | page | run checks automatically whenever i push | (weak) cicd | 21.86345228918017 | no | — | not solid; accepted page in top 5 |
| H3-089 | WEAK | page | my deployment keeps crashing and restarting in the cluster | (weak) kubernetes | 141.08106805647674 | no | — | not solid; accepted page in top 5 |
| H3-090 | FALSE POSITIVE | page | managing many containers across machines | containers | 103.37068790680613 | yes | — | confident wrong page: containers |
| H3-091 | WEAK | page | team intranet platform from microsoft | (weak) microsoft-365 | 60.83109476077001 | no | — | not solid; accepted page in top 5 |
| H3-092 | FALSE POSITIVE | page | custom client side components for modern sharepoint pages | sharepoint | 70 | yes | — | confident wrong page: sharepoint |
| H3-093 | WEAK | page | fetch mail and files from a users microsoft account | (weak) microsoft-graph | 58.16253471821132 | no | — | not solid; accepted page in top 5 |
| H3-094 | WEAK | page | microsofts identity platform for sign in and permissions | (weak) power-platform | 38.62257994538294 | no | — | not solid; accepted page in top 5 |
| H3-095 | WEAK | page | automate approvals without writing code | (weak) code-execution-sandboxing | 44.98311176061591 | no | — | not solid; accepted page in top 5 |
| H3-096 | WEAK | page | build an app that lives inside microsoft teams | (weak) teams-development | 92.84926465212364 | no | — | not solid; accepted page in top 5 |
| H3-097 | FALSE POSITIVE | page | libraries that help assemble llm apps | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H3-098 | FALSE POSITIVE | page | the hub where people share pretrained models | transfer-learning | 71.3899809935192 | yes | — | confident wrong page: transfer-learning |
| H3-099 | FALSE POSITIVE | page | run open models offline on my machine | open-weights-models | 108 | yes | — | confident wrong page: open-weights-models |
| H3-100 | PASS | page | serving engine with continuous batching | vllm | 82 | yes | — |  |
| H3-101 | WEAK | page | quantized model format for cpu inference | (weak) model-serving-and-inference | 99.79929914357757 | no | — | not solid; accepted page in top 5 |
| H3-102 | WEAK | page | portable inference format for many platforms | (weak) model-serving-and-inference | 75.78403392195139 | no | — | not solid; accepted page in top 5 |
| H3-103 | FALSE POSITIVE | page | which deep learning library is most widely used for research | deep-learning | 100 | yes | — | confident wrong page: deep-learning |
| H3-104 | WEAK | page | model that reads pictures and answers questions about them | (weak) vision-language-models | 54.00937146300413 | no | — | not solid; accepted page in top 5 |
| H3-105 | WEAK | page | turn recorded speech into text | (weak) speech-ai | 80.99512065642378 | no | — | not solid; accepted page in top 5 |
| H3-106 | WEAK | page | pull fields from scanned forms | (weak) document-understanding-ai | 55.75369594807628 | no | — | not solid; accepted page in top 5 |
| H3-107 | WEAK | page | generating clips from a text description | (weak) vision-language-models | 76.47992554770052 | no | — | not solid; accepted page in top 5 |
| H3-108 | MISS | page | locating and naming objects in photos | (weak) pgvector | 11.221902695957294 | no | — | no accepted page in top 5 |
| H3-109 | WEAK | page | software layer that connects sensors and motors in a robot | (weak) robot-operating-system | 88.49073171021432 | no | — | not solid; accepted page in top 5 |
| H3-110 | FALSE POSITIVE | page | policy that maps pictures and words to motor commands | reinforcement-learning | 21 | yes | — | confident wrong page: reinforcement-learning |
| H3-111 | WEAK | page | teach manipulation by copying human operators | (weak) physics-informed-neural-networks | 23.53090390417519 | no | — | not solid; accepted page in top 5 |
| H3-112 | WEAK | page | transferring skills from a physics simulator to a real machine | (weak) sim-to-real-transfer | 55.23062477540955 | no | — | not solid; accepted page in top 5 |
| H3-113 | PASS | page | a learned simulator used for planning | world-models | 58 | yes | — |  |
| H3-114 | WEAK | page | attack where crafted text overrides my assistants rules | (weak) prompt-injection | 108.58079185597352 | no | — | not solid; accepted page in top 5 |
| H3-115 | WEAK | page | what personal data should never go into a public chatbot | (weak) gdpr-and-ai | 47.719513657244605 | no | — | not solid; accepted page in top 5 |
| H3-116 | WEAK | page | probing my own assistant for weaknesses before launch | (weak) red-teaming | 54.39047268587569 | no | — | not solid; accepted page in top 5 |
| H3-117 | MISS | page | runtime checks on what the model is allowed to say | (weak) model-cards | 45.703462262017446 | no | — | no accepted page in top 5 |
| H3-118 | WEAK | page | running untrusted generated scripts without risking my machine | (weak) code-execution-sandboxing | 71.34521144836047 | no | — | not solid; accepted page in top 5 |
| H3-119 | WEAK | page | labelling content as machine made | (weak) c2pa-content-provenance | 60.308097818329955 | no | — | not solid; accepted page in top 5 |
| H3-120 | FALSE POSITIVE | page | top vulnerabilities for generative ai applications | generative-ai | 79.62366038876276 | yes | — | confident wrong page: generative-ai |
| H3-121 | PASS | page | are the scores on public model rankings reliable | benchmarks-and-leaderboards | 68.34198885038234 | yes | — |  |
| H3-122 | MISS | page | have a stronger model score weaker model answers | (weak) process-reward-model | 42.11436957921413 | no | — | no accepted page in top 5 |
| H3-123 | PASS | page | which numbers describe a classifier on imbalanced data | evaluation-metrics-for-ai | 46 | yes | — |  |
| H3-124 | FALSE POSITIVE | page | how do i test my llm application end to end | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H3-125 | FALSE POSITIVE | page | is a coding benchmark of real repository bugs useful | humaneval | 171.03395713022164 | yes | — | confident wrong page: humaneval |
| H3-126 | FALSE POSITIVE | page | operational discipline for machine learning teams | what-is-ai | 62.8645216219944 | yes | — | confident wrong page: what-is-ai |
| H3-127 | MISS | page | detect that live data no longer looks like training data | (weak) benchmark-contamination | 44.42918332560356 | no | — | no accepted page in top 5 |
| H3-128 | MISS | page | record every prompt response and cost in production | (weak) prompt-caching | 59.84496105222141 | no | — | no accepted page in top 5 |
| H3-129 | WEAK | page | reduce what i pay per request to a hosted model | (weak) llm-cost-optimization | 59.87831005854973 | no | — | not solid; accepted page in top 5 |
| H3-130 | WEAK | page | split a big training job across accelerators | (weak) distributed-training | 59.42138149280845 | no | — | not solid; accepted page in top 5 |
| H3-131 | WEAK | page | choose accelerators for inference | (weak) model-serving-and-inference | 73.28824821387595 | no | — | not solid; accepted page in top 5 |
| H3-132 | MISS | page | logging runs and comparing model versions | (weak) model-drift-and-monitoring | 45.365982740837836 | no | — | no accepted page in top 5 |
| H3-133 | FALSE POSITIVE | page | company policy for using generative ai | generative-ai | 85.47344584672936 | yes | — | confident wrong page: generative-ai |
| H3-134 | WEAK | page | european law classing ai by risk level | (weak) eu-ai-act | 107.36993772924463 | no | — | not solid; accepted page in top 5 |
| H3-135 | WEAK | page | us government framework for managing ai risk | (weak) nist-ai-rmf | 123.35098362294725 | no | — | not solid; accepted page in top 5 |
| H3-136 | PASS | page | auditable management system standard for ai | iso-iec-42001 | 93 | yes | — |  |
| H3-137 | MISS | page | do models treat different groups unequally | (weak) reasoning-models | 42 | no | — | no accepted page in top 5 |
| H3-138 | WEAK | page | how do i document what my model can and cannot do | (weak) model-cards | 45.946470523061706 | no | — | not solid; accepted page in top 5 |
| H3-139 | FALSE POSITIVE | page | tuning on pairs of preferred and dispreferred answers without a reward model | rlhf | 61.52010609755037 | yes | — | confident wrong page: rlhf |
| H3-140 | WEAK | page | models agreeing with whatever the user says | (weak) sycophancy | 64.69061828835714 | no | — | not solid; accepted page in top 5 |
| H3-141 | WEAK | page | exploiting a flawed scoring rule | (weak) reward-hacking | 47.61854430580925 | no | — | not solid; accepted page in top 5 |
| H3-142 | MISS | page | making models follow human values | (weak) reasoning-models | 53.57909681338643 | no | — | no accepted page in top 5 |
| H3-143 | WEAK | page | ml systems that predict how proteins fold | (weak) alphafold | 43.561313545061566 | no | — | not solid; accepted page in top 5 |
| H3-144 | WEAK | page | neural nets as fast stand ins for physics simulations | (weak) physics-informed-neural-networks | 73.05750889693631 | no | — | not solid; accepted page in top 5 |
| H3-145 | WEAK | page | kuberntes pods keep restarting | (weak) kubernetes | 111.15737486177792 | no | — | not solid; accepted page in top 5 |
| H3-146 | PASS | page | doker compose networking | docker | 79 | yes | — |  |
| H3-147 | WEAK | page | retreival augmented generaton | (weak) rag | 151.83084322909718 | no | — | not solid; accepted page in top 5 |
| H3-148 | PASS | page | embeding model choise | embeddings | 78 | yes | — |  |
| H3-149 | WEAK | page | chain of thougth prompting | (weak) chain-of-thought | 114.54004419115077 | no | — | not solid; accepted page in top 5 |
| H3-150 | WEAK | page | reasonning models explained | (weak) reasoning-models | 51.77619257857691 | no | — | not solid; accepted page in top 5 |
| H3-151 | FALSE POSITIVE | page | vecotr search in postgress | postgresql | 67 | yes | — | confident wrong page: postgresql |
| H3-152 | FALSE POSITIVE | page | multimodel ai basics | what-is-ai | 66 | yes | — | confident wrong page: what-is-ai |
| H3-153 | PASS | page | llama indxe vs langchan | langchain | 71 | yes | — |  |
| H3-154 | PASS | page | agentc workflows | agentic-workflows | 47 | yes | — |  |
| H3-155 | PASS | neg | ai | (weak) ai-governance | 102.6549856780106 | no | — | no confident answer |
| H3-156 | WEAK | page | prompts | (weak) system-prompts | 135.6824277090042 | no | — | not solid; accepted page in top 5 |
| H3-157 | PASS | page | embeddings and stuff | embeddings | 46 | yes | — |  |
| H3-158 | PASS | gap | devops | (weak) mlops | 122.85090295888864 | no | — | transparent non-answer |
| H3-159 | FALSE POSITIVE | neg | something with tokens | tokens | 67.63355962943285 | yes | — | confident answer for out-of-scope query: tokens |
| H3-160 | WEAK | page | safety | (weak) ai-alignment | 31.962090187689263 | no | — | not solid; accepted page in top 5 |
| H3-161 | PASS | gap | ansible vs chef | (weak) framework-vs-direct-api | 54.80961502609667 | no | — | transparent non-answer |
| H3-162 | PASS | gap | ssh key setup | (weak) api-keys | 41.77740667607119 | no | — | transparent non-answer |
| H3-163 | PASS | gap | how do i debounce a function | (weak) function-calling | 122.28736166139136 | no | — | transparent non-answer |
| H3-164 | PASS | gap | python decorators explained | python | 46 | yes | — | nearby page: python |
| H3-165 | PASS | gap | how to write a regex for emails | (weak) large-language-models | 31.54244996686904 | no | — | transparent non-answer |
| H3-166 | PASS | gap | svelte vs react | react | 54 | yes | — | nearby page: react |
| H3-167 | PASS | gap | how do i build a recommendation engine | (weak) build-spfx-web-part | 33.349861152239484 | no | — | transparent non-answer |
| H3-168 | PASS | gap | speech synthesis voices that sound human | (weak) speech-ai | 81.70198726293873 | no | — | transparent non-answer |
| H3-169 | PASS | gap | which gpu to buy this year | gpus-and-ai-accelerators | 68 | yes | — | nearby page: gpus-and-ai-accelerators |
| H3-170 | PASS | gap | tensorflow lite for microcontrollers | (weak) neural-networks | 61.129004874936406 | no | — | transparent non-answer |
| H3-171 | PASS | gap | what is jax | (weak) neural-networks | 56.10237919515909 | no | — | transparent non-answer |
| H3-172 | PASS | gap | what does the nobel prize in chemistry have to do with ai | (weak) ai-drug-discovery | 88.22836338746103 | no | — | transparent non-answer |
| H3-173 | PASS | gap | what is azure openai service pricing | azure-fundamentals | 44 | yes | — | nearby page: azure-fundamentals |
| H3-174 | PASS | gap | how to build a power bi report | power-platform | 46 | yes | — | nearby page: power-platform |
| H3-175 | FALSE POSITIVE | neg | transformer cosplay costume | transformers | 50 | yes | — | confident answer for out-of-scope query: transformers |
| H3-176 | PASS | neg | mamba mentality tshirt | (weak) state-space-models | 110.2429307124643 | no | — | no confident answer |
| H3-177 | FALSE POSITIVE | neg | python regius ball care | python | 46 | yes | — | confident answer for out-of-scope query: python |
| H3-178 | PASS | gap | react native vs flutter | react | 54 | yes | — | nearby page: react |
| H3-179 | PASS | neg | docker pants waterproof | (weak) docker | 75 | no | — | no confident answer |
| H3-180 | PASS | neg | estate agent fees when selling a flat | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| H3-181 | PASS | neg | scale model train layouts | (weak) distributed-training | 35.25587360777847 | no | — | no confident answer |
| H3-182 | FALSE POSITIVE | neg | java island travel tips | java | 46 | yes | — | confident answer for out-of-scope query: java |
| H3-183 | PASS | neg | go kart racing near me | (weak) world-models | 34.027251278586384 | no | — | no confident answer |
| H3-184 | PASS | neg | spring break destinations | (weak) autogen | 42.10754690988264 | no | — | no confident answer |
| H3-185 | PASS | neg | swift bird migration | (weak) prisma-and-orms | 56.354119714345025 | no | — | no confident answer |
| H3-186 | PASS | neg | gemini constellation stars | (weak) ray | 51.9430002028724 | no | — | no confident answer |
| H3-187 | PASS | neg | falcon bird of prey training | (weak) world-models | 35.72988152965031 | no | — | no confident answer |
| H3-188 | PASS | neg | bert lahr wizard of oz | (weak) encoder-decoder-vs-decoder-only | 121.96662432906604 | no | — | no confident answer |
| H3-189 | PASS | neg | llama trekking in peru | (weak) llama-cpp | 115.49385509324111 | no | — | no confident answer |
| H3-190 | PASS | neg | claude debussy piano pieces | (weak) multimodal-ai | 43.41883532641849 | no | — | no confident answer |
| H3-191 | PASS | neg | mistral breeze sailing | (weak) rag-vs-fine-tuning | 38.12415572945011 | no | — | no confident answer |
| H3-192 | PASS | neg | agent provocateur meaning | (weak) multi-agent-systems | 110.86350935664267 | no | — | no confident answer |
| H3-193 | PASS | neg | perplexed expression synonyms | (weak) grammar-guided-generation | 72.65667174226752 | no | — | no confident answer |
| H3-194 | PASS | neg | training for a triathlon | (weak) fine-tuning | 32.807334652161494 | no | — | no confident answer |
| H3-195 | FALSE POSITIVE | neg | attention to detail resume tips | transformers | 34 | yes | — | confident answer for out-of-scope query: transformers |
| H3-196 | PASS | neg | vector illustration of birds | (weak) vector-databases | 125.58121528673234 | no | — | no confident answer |
| H3-197 | PASS | neg | cookie consent banner wording for my shop | (weak) authentication-vs-authorization | 17.836031688961956 | no | — | no confident answer |
| H3-198 | FALSE POSITIVE | neg | gradient descent hiking trail name | backpropagation-and-gradient-descent | 102 | yes | — | confident answer for out-of-scope query: backpropagation-and-gradient-descent |
| H3-199 | PASS | neg | how to apply for a visa | (weak) gdpr-and-ai | 58.4833602412008 | no | — | no confident answer |
| H3-200 | PASS | neg | best way to learn guitar | (weak) instruction-tuning | 50.53047046084911 | no | — | no confident answer |
| H3-201 | PASS | neg | what causes inflation | (weak) llm-cost-optimization | 34.31675491200829 | no | — | no confident answer |
| H3-202 | PASS | neg | traffic on the m25 right now | (weak) kv-cache | 33.410979842653134 | no | — | no confident answer |
| H3-203 | PASS | neg | cheapest flights to rome in march | (weak) rag-evaluation | 90.45384294387351 | no | — | no confident answer |
| H3-204 | PASS | neg | pasta carbonara authentic recipe | (weak) cnn-vs-vision-transformer | 90.67875059083718 | no | — | no confident answer |
| H3-205 | PASS | neg | bake a chocolate cake without eggs | (weak) unsupervised-learning | 36.488833280312576 | no | — | no confident answer |
| H3-206 | PASS | neg | the score of last nights basketball game | (weak) deep-q-networks | 51.140949635876304 | no | — | no confident answer |
| H3-207 | PASS | neg | biggest city in canada | (weak) eu-ai-act | 50.0048372396706 | no | — | no confident answer |
| H3-208 | PASS | neg | how long does it take to boil an egg | (weak) react-agent-pattern | 44.391080687014515 | no | — | no confident answer |
| H3-209 | PASS | neg | should i invest in the latest ai company stock | (weak) ai-governance | 65.344433168571 | no | — | no confident answer |
| H3-210 | PASS | neg | which is the smartest ai right now | (weak) ai-governance | 112.75035790999516 | no | — | no confident answer |
| H3-211 | PASS | neg | write a cover email for a job | (weak) react-chatbot-state | 14.74379394237172 | no | — | no confident answer |
