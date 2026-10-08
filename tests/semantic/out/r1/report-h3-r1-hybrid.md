# Knowledge red-team report — h3-r1-hybrid

Dataset: `tests/redteam/frozen-holdout3.json` sha256 `c46fc1bbac641b81ab592df006669547e2fea124568bd4b0d27bd3487766f1b5`

Total 211 · PASS 71 · WEAK 79 · MISS 27 · FALSE POSITIVE 34
Pass rate 33.6% · False-positive rate 16.1%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 71 · WEAK 79 · MISS 27 · FALSE POSITIVE 34 · pass rate 33.6% · FP rate 16.1%
Retrieval on page-kind queries (157): top-1 51.6% · top-3 70.1% · top-5 79.0%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/1

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 16 | 16 | 0 | 0 | 0 | 100.0% |
| neg | 38 | 32 | 0 | 0 | 6 | 84.2% |
| page | 157 | 23 | 79 | 27 | 28 | 14.6% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| ambiguous-or-off-topic | 37 | 32 | 0 | 0 | 5 | 86.5% |
| architecture | 2 | 0 | 2 | 0 | 0 | 0.0% |
| beginner | 11 | 2 | 6 | 2 | 1 | 18.2% |
| concept | 83 | 10 | 41 | 17 | 15 | 12.0% |
| coverage-probe | 14 | 14 | 0 | 0 | 0 | 100.0% |
| implementation | 20 | 3 | 8 | 3 | 6 | 15.0% |
| integration | 4 | 0 | 2 | 2 | 0 | 0.0% |
| security | 11 | 1 | 5 | 2 | 3 | 9.1% |
| troubleshooting | 6 | 0 | 5 | 1 | 0 | 0.0% |
| typo | 10 | 4 | 4 | 0 | 2 | 40.0% |
| vague | 6 | 3 | 2 | 0 | 1 | 50.0% |
| what-to-use | 7 | 2 | 4 | 0 | 1 | 28.6% |

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
| js | 1 | 0 | 0 | 1 | 0 | 0.0% |
| llm | 11 | 0 | 7 | 3 | 1 | 0.0% |
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
| sec | 7 | 0 | 4 | 1 | 2 | 0.0% |
| struct | 3 | 1 | 1 | 0 | 1 | 33.3% |
| ts | 1 | 0 | 1 | 0 | 0 | 0.0% |

## FALSE POSITIVE
- H3-018 [page/concept] "memory cost of storing past attention states while generating" → transformers (score 62.07080634228573, solid yes) — expected kv-cache; confident wrong page: transformers
- H3-021 [page/concept] "a more efficient sequence layer than attention for very long inputs" → transformers (score 61.80397850621998, solid yes) — expected state-space-models; confident wrong page: transformers
- H3-026 [page/concept] "smaller model copying a larger one" → quantization (score 64.10765104596346, solid yes) — expected knowledge-distillation; confident wrong page: quantization
- H3-036 [page/implementation] "get typed objects back from an llm call" → large-language-models (score 27, solid yes) — expected structured-outputs|constrained-decoding; confident wrong page: large-language-models
- H3-046 [page/implementation] "use my existing postgres for similarity search" → vector-databases (score 78.49784928874365, solid yes) — expected pgvector|postgresql-for-ai-apps; confident wrong page: vector-databases
- H3-049 [page/implementation] "measuring whether my retrieval is any good" → ai-evaluation (score 56.833733641268, solid yes) — expected rag-evaluation; confident wrong page: ai-evaluation
- H3-059 [page/what-to-use] "pick a library for building agent loops" → react-agent-pattern (score 59.7520236716727, solid yes) — expected agent-frameworks-compared|choosing-an-agent-framework; confident wrong page: react-agent-pattern
- H3-061 [page/concept] "building a server that offers tools to ai apps" → agent-tools (score 52.43528277685209, solid yes) — expected mcp-servers-and-clients; confident wrong page: agent-tools
- H3-064 [page/implementation] "send a prompt to a hosted model with the python sdk" → python (score 68.28702503268985, solid yes) — expected calling-ai-apis-with-python; confident wrong page: python
- H3-065 [page/implementation] "prepare tabular data for an llm in python" → python (score 55.13527690873467, solid yes) — expected python-data-for-ai; confident wrong page: python
- H3-072 [page/security] "where do i put credentials so they do not leak into git" → git (score 61.01198965348824, solid yes) — expected environment-variables|api-keys; confident wrong page: git
- H3-074 [page/concept] "signed tokens that carry claims" → tokens (score 34, solid yes) — expected json-web-tokens; confident wrong page: tokens
- H3-090 [page/concept] "managing many containers across machines" → containers (score 107.93685011125443, solid yes) — expected kubernetes; confident wrong page: containers
- H3-092 [page/implementation] "custom client side components for modern sharepoint pages" → sharepoint (score 78.14367060811354, solid yes) — expected sharepoint-framework|build-spfx-web-part; confident wrong page: sharepoint
- H3-097 [page/beginner] "libraries that help assemble llm apps" → large-language-models (score 27, solid yes) — expected what-is-an-ai-framework|ai-sdks; confident wrong page: large-language-models
- H3-098 [page/concept] "the hub where people share pretrained models" → transfer-learning (score 72.42854805474568, solid yes) — expected hugging-face; confident wrong page: transfer-learning
- H3-099 [page/concept] "run open models offline on my machine" → open-weights-models (score 120.644064302864, solid yes) — expected local-ai|ollama|llama-cpp; confident wrong page: open-weights-models
- H3-103 [page/concept] "which deep learning library is most widely used for research" → deep-learning (score 110.3869604753791, solid yes) — expected pytorch; confident wrong page: deep-learning
- H3-110 [page/concept] "policy that maps pictures and words to motor commands" → reinforcement-learning (score 21, solid yes) — expected vision-language-action-models; confident wrong page: reinforcement-learning
- H3-116 [page/security] "probing my own assistant for weaknesses before launch" → mechanistic-interpretability (score 44.06763743560401, solid yes) — expected red-teaming; confident wrong page: mechanistic-interpretability
- H3-120 [page/security] "top vulnerabilities for generative ai applications" → generative-ai (score 85.88954923296328, solid yes) — expected owasp-llm-top-10; confident wrong page: generative-ai
- H3-124 [page/concept] "how do i test my llm application end to end" → large-language-models (score 27, solid yes) — expected ai-evaluation; confident wrong page: large-language-models
- H3-125 [page/concept] "is a coding benchmark of real repository bugs useful" → humaneval (score 170.16904838302528, solid yes) — expected swe-bench; confident wrong page: humaneval
- H3-126 [page/concept] "operational discipline for machine learning teams" → what-is-ai (score 68.27716396701602, solid yes) — expected mlops; confident wrong page: what-is-ai
- H3-133 [page/concept] "company policy for using generative ai" → generative-ai (score 88.8516509209725, solid yes) — expected ai-governance; confident wrong page: generative-ai
- H3-139 [page/concept] "tuning on pairs of preferred and dispreferred answers without a reward model" → rlhf (score 65.90699755247178, solid yes) — expected dpo|preference-optimization; confident wrong page: rlhf
- H3-151 [page/typo] "vecotr search in postgress" → postgresql (score 78.84553548588246, solid yes) — expected pgvector|vector-databases; confident wrong page: postgresql
- H3-152 [page/typo] "multimodel ai basics" → what-is-ai (score 76.61588532017304, solid yes) — expected multimodal-ai|vision-language-models; confident wrong page: what-is-ai
- H3-159 [neg/vague] "something with tokens" → tokens (score 74.56783035207614, solid yes) — expected none; confident answer for out-of-scope query: tokens
- H3-175 [neg/ambiguous-or-off-topic] "transformer cosplay costume" → transformers (score 57.10941786470883, solid yes) — expected none; confident answer for out-of-scope query: transformers
- H3-177 [neg/ambiguous-or-off-topic] "python regius ball care" → python (score 57.781668484134315, solid yes) — expected none; confident answer for out-of-scope query: python
- H3-182 [neg/ambiguous-or-off-topic] "java island travel tips" → java (score 57.49515506048824, solid yes) — expected none; confident answer for out-of-scope query: java
- H3-195 [neg/ambiguous-or-off-topic] "attention to detail resume tips" → transformers (score 34, solid yes) — expected none; confident answer for out-of-scope query: transformers
- H3-198 [neg/ambiguous-or-off-topic] "gradient descent hiking trail name" → backpropagation-and-gradient-descent (score 119.42559159563675, solid yes) — expected none; confident answer for out-of-scope query: backpropagation-and-gradient-descent

## MISS
- H3-004 [page/beginner] "is there a cap on how many words i can paste into the assistant" → (weak) ai-agent-vs-chatbot (score 40.99253236166573, solid no) — expected context-windows|tokens; no accepted page in top 5
- H3-005 [page/concept] "teaching software with examples that already have answers" → (weak) what-is-ai (score 50.56940832684131, solid no) — expected supervised-learning; no accepted page in top 5
- H3-006 [page/concept] "software that discovers groups by itself in raw data" → (weak) gdpr-and-ai (score 29, solid no) — expected unsupervised-learning; no accepted page in top 5
- H3-009 [page/troubleshooting] "accuracy looks perfect in my notebook but tanks after deployment" → (weak) instruction-tuning (score 34.86428067295954, solid no) — expected overfitting-and-regularization|model-drift-and-monitoring; no accepted page in top 5
- H3-019 [page/concept] "how does a model keep track of where each word sits in the sentence" → (weak) context-windows (score 50.583465107007115, solid no) — expected positional-encoding; no accepted page in top 5
- H3-020 [page/concept] "architectures with many specialised subnetworks" → (weak) deep-learning (score 31.594796053569013, solid no) — expected mixture-of-experts; no accepted page in top 5
- H3-022 [page/concept] "what does it mean to train longer on more text" → (weak) large-language-models (score 40.10609213879454, solid no) — expected scaling-laws; no accepted page in top 5
- H3-027 [page/concept] "guess several words ahead and verify them" → (weak) how-to-reduce-hallucinations (score 70.31934223421732, solid no) — expected speculative-decoding; no accepted page in top 5
- H3-034 [page/concept] "privacy of a model's inner deliberation" → (weak) reasoning-models (score 62.80279494475073, solid no) — expected reasoning-transparency; no accepted page in top 5
- H3-040 [page/implementation] "setting the personality and rules for an assistant" → (weak) ai-agent-vs-chatbot (score 40.67120815937575, solid no) — expected system-prompts; no accepted page in top 5
- H3-042 [page/implementation] "let a model answer from the files on my drive" → (weak) model-cards (score 28, solid no) — expected rag; no accepted page in top 5
- H3-050 [page/integration] "assistant that can look through my mailbox and summarise it" → (weak) ai-agent-vs-chatbot (score 25.55877158568552, solid no) — expected gmail-for-ai-agents|connecting-agents-to-apps; no accepted page in top 5
- H3-051 [page/integration] "let a bot create tickets in our issue tracker" → (weak) github (score 24.044511569667126, solid no) — expected connecting-agents-to-apps|agent-tools|function-calling; no accepted page in top 5
- H3-056 [page/concept] "giving a model the ability to run functions" → (weak) ai-agent-vs-chatbot (score 58.10373096228377, solid no) — expected function-calling|agent-tools; no accepted page in top 5
- H3-066 [page/implementation] "browser app talking to a model through my own backend" → (weak) frontend-and-backend (score 49.97199279133194, solid no) — expected calling-ai-apis-with-javascript|nodejs-for-ai|api-keys; no accepted page in top 5
- H3-071 [page/concept] "querying exactly the fields i need from an api" → (weak) api-keys (score 53.10733876598452, solid no) — expected graphql|rest-vs-graphql; no accepted page in top 5
- H3-073 [page/security] "login with google or microsoft for my web app" → (weak) microsoft-graph (score 58.74701963861658, solid no) — expected openid-connect|oauth; no accepted page in top 5
- H3-081 [page/concept] "mapping database rows to objects in code" → (weak) vector-database-vs-traditional-database (score 64.7146438265071, solid no) — expected prisma-and-orms; no accepted page in top 5
- H3-086 [page/beginner] "wrap my app so it runs identically on any server" → (weak) nextjs (score 31.140606018606576, solid no) — expected docker|containers; no accepted page in top 5
- H3-108 [page/concept] "locating and naming objects in photos" → (weak) c2pa-content-provenance (score 24.63279593728937, solid no) — expected object-detection; no accepted page in top 5
- H3-117 [page/security] "runtime checks on what the model is allowed to say" → (weak) model-cards (score 47.870988441243554, solid no) — expected ai-guardrails; no accepted page in top 5
- H3-122 [page/concept] "have a stronger model score weaker model answers" → (weak) process-reward-model (score 44.02598029166742, solid no) — expected llm-as-a-judge; no accepted page in top 5
- H3-127 [page/concept] "detect that live data no longer looks like training data" → (weak) benchmark-contamination (score 43.46901830715, solid no) — expected model-drift-and-monitoring; no accepted page in top 5
- H3-128 [page/concept] "record every prompt response and cost in production" → (weak) prompt-caching (score 60.87887736459024, solid no) — expected llm-observability; no accepted page in top 5
- H3-132 [page/concept] "logging runs and comparing model versions" → (weak) model-drift-and-monitoring (score 48.58824876088559, solid no) — expected mlflow; no accepted page in top 5
- H3-137 [page/concept] "do models treat different groups unequally" → (weak) reasoning-models (score 42.092475991274426, solid no) — expected ai-bias-and-fairness; no accepted page in top 5
- H3-142 [page/concept] "making models follow human values" → (weak) reasoning-models (score 53.57730812552066, solid no) — expected ai-alignment; no accepted page in top 5

## WEAK
- H3-002 [page/beginner] "why does my chat assistant sometimes confidently say wrong things" → (weak) common-prompting-mistakes (score 46.889413445392755, solid no) — expected ai-hallucinations|how-to-reduce-hallucinations; not solid; accepted page in top 5
- H3-003 [page/beginner] "what are the little chunks of text a model reads called" → (weak) chunking (score 46.770145664223946, solid no) — expected tokens; not solid; accepted page in top 5
- H3-007 [page/concept] "stacked layers of simple math units that learn patterns" → (weak) gsm8k-and-math-benchmarks (score 44.42252960118723, solid no) — expected neural-networks|deep-learning; not solid; accepted page in top 5
- H3-008 [page/concept] "how the error signal flows backwards through the layers" → (weak) positional-encoding (score 39.53487876844548, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- H3-010 [page/troubleshooting] "my network outputs nan after a few steps" → (weak) neural-networks (score 39.41949814606964, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- H3-011 [page/implementation] "take a model trained on millions of photos and adapt it to x-rays" → (weak) multimodal-ai (score 57.46658617272677, solid no) — expected transfer-learning; not solid; accepted page in top 5
- H3-015 [page/concept] "noise to picture generators" → (weak) diffusion-models (score 48.3105170432093, solid no) — expected diffusion-models; not solid; accepted page in top 5
- H3-017 [page/concept] "networks for data that is linked together like friendships" → (weak) graph-neural-networks (score 79.94450899567997, solid no) — expected graph-neural-networks; not solid; accepted page in top 5
- H3-023 [page/concept] "making the assistant polite and instruction following after pretraining" → (weak) instruction-tuning (score 86.56218699886333, solid no) — expected instruction-tuning|rlhf; not solid; accepted page in top 5
- H3-024 [page/what-to-use] "cheaper way to specialise a big model than retraining everything" → (weak) quantization (score 46.130716809089705, solid no) — expected lora-and-peft|lora-vs-full-fine-tuning; not solid; accepted page in top 5
- H3-025 [page/what-to-use] "make a model fit on a small graphics card" → (weak) model-cards (score 81.04403196261765, solid no) — expected quantization|gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-028 [page/concept] "compact models for edge devices" → (weak) small-language-models (score 100.38391051497508, solid no) — expected small-language-models; not solid; accepted page in top 5
- H3-029 [page/concept] "can i legally use downloadable model weights in a product" → (weak) open-weights-models (score 95.7834719656408, solid no) — expected open-weights-models; not solid; accepted page in top 5
- H3-030 [page/concept] "letting a model deliberate longer for harder questions" → (weak) reasoning-vs-standard-models (score 54.163872248320544, solid no) — expected test-time-compute|reasoning-models; not solid; accepted page in top 5
- H3-031 [page/concept] "sample a bunch of solutions and go with the consensus" → (weak) self-consistency (score 54.94340837217101, solid no) — expected self-consistency; not solid; accepted page in top 5
- H3-032 [page/concept] "a scorer that checks each intermediate step" → (weak) process-reward-model (score 65.83939786118123, solid no) — expected process-reward-model; not solid; accepted page in top 5
- H3-033 [page/concept] "training with rewards that come from automatic checkers" → (weak) reinforcement-learning-for-reasoning (score 64.94654617572635, solid no) — expected reinforcement-learning-for-reasoning; not solid; accepted page in top 5
- H3-035 [page/concept] "should i pick a deliberating model or a quick one" → (weak) process-reward-model (score 54.20704406371045, solid no) — expected reasoning-vs-standard-models|reasoning-models; not solid; accepted page in top 5
- H3-038 [page/concept] "how do sampling knobs shape the text a model writes" → (weak) sampling-and-decoding (score 77.06000437725979, solid no) — expected sampling-and-decoding; not solid; accepted page in top 5
- H3-039 [page/implementation] "how do i word my request so the answer comes out right" → (weak) rag (score 23.334608303015333, solid no) — expected prompt-engineering|common-prompting-mistakes; not solid; accepted page in top 5
- H3-041 [page/troubleshooting] "why do my prompts work on some inputs and fail on others" → (weak) common-prompting-mistakes (score 83.85336906756567, solid no) — expected common-prompting-mistakes|prompt-engineering|ai-evaluation; not solid; accepted page in top 5
- H3-043 [page/implementation] "splitting large documents sensibly before indexing" → (weak) chunking (score 128.05536368738305, solid no) — expected chunking; not solid; accepted page in top 5
- H3-044 [page/concept] "numbers that capture the meaning of a sentence" → (weak) embeddings (score 102.55381967957959, solid no) — expected embeddings; not solid; accepted page in top 5
- H3-047 [page/troubleshooting] "good documents indexed but answers still miss the point" → (weak) chunking (score 38.77501692307375, solid no) — expected rag-evaluation|hybrid-search-and-reranking|chunking; not solid; accepted page in top 5
- H3-048 [page/concept] "retrieval that follows links between concepts" → (weak) agentic-rag (score 84.2211334098157, solid no) — expected graph-rag; not solid; accepted page in top 5
- H3-052 [page/integration] "which scopes does an assistant need to read my calendar" → (weak) authentication-vs-authorization (score 25.3417940096024, solid no) — expected oauth-for-ai-agents|integration-permissions|connecting-agents-to-apps; not solid; accepted page in top 5
- H3-053 [page/security] "what could go wrong if an assistant can send emails by itself" → (weak) ai-agent-vs-chatbot (score 25.934900261978044, solid no) — expected integration-permissions|prompt-injection|gmail-for-ai-agents; not solid; accepted page in top 5
- H3-054 [page/concept] "software that plans acts and checks its own progress" → (weak) agent-planning (score 81.48298392989038, solid no) — expected ai-agents|react-agent-pattern|agent-planning; not solid; accepted page in top 5
- H3-055 [page/architecture] "how to coordinate a researcher agent and a writer agent" → (weak) multi-agent-systems (score 133.2746241258555, solid no) — expected multi-agent-systems|agentic-workflows; not solid; accepted page in top 5
- H3-057 [page/architecture] "keeping a long conversation history manageable for an agent" → (weak) ai-agent-vs-chatbot (score 94.33419830235667, solid no) — expected agent-memory|context-windows|context-engineering; not solid; accepted page in top 5
- H3-058 [page/troubleshooting] "my assistant calls the wrong tool half the time" → (weak) ai-agent-vs-chatbot (score 42.313933339636144, solid no) — expected agent-tools|function-calling|agent-evaluation; not solid; accepted page in top 5
- H3-060 [page/concept] "protocol that lets assistants plug into external services" → (weak) mcp (score 65.21514427318954, solid no) — expected mcp; not solid; accepted page in top 5
- H3-063 [page/concept] "protocol for agents built by different companies to cooperate" → (weak) agent-protocol-landscape (score 128.89314963642045, solid no) — expected a2a-protocol|agent-protocol-landscape; not solid; accepted page in top 5
- H3-067 [page/implementation] "make my api client type safe" → (weak) typescript-api-client-types (score 79.61922629931401, solid no) — expected typescript-api-client-types|typescript-for-ai; not solid; accepted page in top 5
- H3-068 [page/implementation] "ui components for a chat assistant" → (weak) react-ai-interfaces (score 57.44601691540521, solid no) — expected react-ai-interfaces|react-chatbot-state; not solid; accepted page in top 5
- H3-070 [page/concept] "how do two programs talk over http" → (weak) model-apis (score 23.266462053652045, solid no) — expected what-is-an-api|rest-apis; not solid; accepted page in top 5
- H3-075 [page/concept] "why does my browser refuse the response from another domain" → (weak) cors (score 31.98339519468801, solid no) — expected cors; not solid; accepted page in top 5
- H3-078 [page/what-to-use] "document store or relational tables for flexible records" → (weak) sql-vs-nosql (score 53.986802359284226, solid no) — expected sql-vs-nosql|mongodb; not solid; accepted page in top 5
- H3-080 [page/concept] "in memory key value store" → (weak) redis (score 65.59319385464946, solid no) — expected redis; not solid; accepted page in top 5
- H3-083 [page/beginner] "microsoft cloud basics for a developer" → (weak) microsoft-365 (score 61.6035585707658, solid no) — expected azure-fundamentals; not solid; accepted page in top 5
- H3-084 [page/beginner] "googles cloud platform overview" → (weak) gcp-fundamentals (score 72.14982820397694, solid no) — expected gcp-fundamentals; not solid; accepted page in top 5
- H3-085 [page/what-to-use] "which cloud gives gpus for model hosting" → (weak) gcp-fundamentals (score 60.018579429286284, solid no) — expected aws-fundamentals|azure-fundamentals|gcp-fundamentals|gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-087 [page/beginner] "keep track of changes to my code and collaborate" → (weak) code-execution-sandboxing (score 39.039181442549165, solid no) — expected git|github; not solid; accepted page in top 5
- H3-088 [page/implementation] "run checks automatically whenever i push" → (weak) cicd (score 22.69350074820208, solid no) — expected cicd|github; not solid; accepted page in top 5
- H3-089 [page/troubleshooting] "my deployment keeps crashing and restarting in the cluster" → (weak) kubernetes (score 153.88336499921607, solid no) — expected kubernetes|containers; not solid; accepted page in top 5
- H3-091 [page/beginner] "team intranet platform from microsoft" → (weak) microsoft-365 (score 64.27437263312427, solid no) — expected sharepoint; not solid; accepted page in top 5
- H3-093 [page/integration] "fetch mail and files from a users microsoft account" → (weak) microsoft-graph (score 60.69958058475266, solid no) — expected microsoft-graph; not solid; accepted page in top 5
- H3-094 [page/concept] "microsofts identity platform for sign in and permissions" → (weak) power-platform (score 41.33321654676715, solid no) — expected microsoft-entra-id; not solid; accepted page in top 5
- H3-095 [page/implementation] "automate approvals without writing code" → (weak) code-execution-sandboxing (score 41.21204348270056, solid no) — expected power-platform; not solid; accepted page in top 5
- H3-096 [page/implementation] "build an app that lives inside microsoft teams" → (weak) teams-development (score 96.2105402151198, solid no) — expected teams-development; not solid; accepted page in top 5
- H3-101 [page/concept] "quantized model format for cpu inference" → (weak) model-serving-and-inference (score 104.32784151382839, solid no) — expected llama-cpp|quantization; not solid; accepted page in top 5
- H3-102 [page/concept] "portable inference format for many platforms" → (weak) model-serving-and-inference (score 82.17610623699404, solid no) — expected onnx-runtime; not solid; accepted page in top 5
- H3-104 [page/concept] "model that reads pictures and answers questions about them" → (weak) vision-language-models (score 79.42481792803665, solid no) — expected vision-language-models; not solid; accepted page in top 5
- H3-105 [page/concept] "turn recorded speech into text" → (weak) speech-ai (score 95.71243507095598, solid no) — expected speech-ai; not solid; accepted page in top 5
- H3-106 [page/concept] "pull fields from scanned forms" → (weak) document-understanding-ai (score 70.55739216934961, solid no) — expected document-understanding-ai; not solid; accepted page in top 5
- H3-107 [page/concept] "generating clips from a text description" → (weak) contrastive-learning-clip (score 78.57653156036774, solid no) — expected video-generation-models; not solid; accepted page in top 5
- H3-109 [page/concept] "software layer that connects sensors and motors in a robot" → (weak) robot-operating-system (score 95.72278599368212, solid no) — expected robot-operating-system|embodied-ai; not solid; accepted page in top 5
- H3-111 [page/concept] "teach manipulation by copying human operators" → (weak) physics-informed-neural-networks (score 29.98080697590436, solid no) — expected imitation-learning; not solid; accepted page in top 5
- H3-112 [page/concept] "transferring skills from a physics simulator to a real machine" → (weak) sim-to-real-transfer (score 60.43990863103394, solid no) — expected sim-to-real-transfer; not solid; accepted page in top 5
- H3-114 [page/security] "attack where crafted text overrides my assistants rules" → (weak) prompt-injection (score 116.88340055025826, solid no) — expected prompt-injection; not solid; accepted page in top 5
- H3-115 [page/security] "what personal data should never go into a public chatbot" → (weak) gdpr-and-ai (score 42.48413052320997, solid no) — expected ai-privacy-and-security|gdpr-and-ai; not solid; accepted page in top 5
- H3-118 [page/security] "running untrusted generated scripts without risking my machine" → (weak) code-execution-sandboxing (score 64.54824666565835, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- H3-119 [page/security] "labelling content as machine made" → (weak) c2pa-content-provenance (score 65.3543031528147, solid no) — expected c2pa-content-provenance; not solid; accepted page in top 5
- H3-129 [page/concept] "reduce what i pay per request to a hosted model" → (weak) llm-cost-optimization (score 62.405650449112485, solid no) — expected llm-cost-optimization|prompt-caching; not solid; accepted page in top 5
- H3-130 [page/concept] "split a big training job across accelerators" → (weak) distributed-training (score 63.77767915509662, solid no) — expected distributed-training; not solid; accepted page in top 5
- H3-131 [page/concept] "choose accelerators for inference" → (weak) model-serving-and-inference (score 73.20994194982708, solid no) — expected gpus-and-ai-accelerators; not solid; accepted page in top 5
- H3-134 [page/concept] "european law classing ai by risk level" → (weak) eu-ai-act (score 111.81388448996361, solid no) — expected eu-ai-act; not solid; accepted page in top 5
- H3-135 [page/concept] "us government framework for managing ai risk" → (weak) nist-ai-rmf (score 125.73884790303438, solid no) — expected nist-ai-rmf; not solid; accepted page in top 5
- H3-138 [page/concept] "how do i document what my model can and cannot do" → (weak) ai-evaluation (score 35.22710848671179, solid no) — expected model-cards; not solid; accepted page in top 5
- H3-140 [page/concept] "models agreeing with whatever the user says" → (weak) sycophancy (score 71.2534773901059, solid no) — expected sycophancy; not solid; accepted page in top 5
- H3-141 [page/concept] "exploiting a flawed scoring rule" → (weak) reward-hacking (score 53.03554916014064, solid no) — expected reward-hacking; not solid; accepted page in top 5
- H3-143 [page/concept] "ml systems that predict how proteins fold" → (weak) alphafold (score 48.477826404486635, solid no) — expected alphafold; not solid; accepted page in top 5
- H3-144 [page/concept] "neural nets as fast stand ins for physics simulations" → (weak) physics-informed-neural-networks (score 80.75567933119311, solid no) — expected physics-informed-neural-networks|ai-for-science; not solid; accepted page in top 5
- H3-145 [page/typo] "kuberntes pods keep restarting" → (weak) kubernetes (score 134.95735245611073, solid no) — expected kubernetes; not solid; accepted page in top 5
- H3-147 [page/typo] "retreival augmented generaton" → (weak) rag (score 154.3579970495228, solid no) — expected rag; not solid; accepted page in top 5
- H3-149 [page/typo] "chain of thougth prompting" → (weak) chain-of-thought (score 123.41476569352939, solid no) — expected chain-of-thought; not solid; accepted page in top 5
- H3-150 [page/typo] "reasonning models explained" → (weak) reasoning-models (score 51.62225325418262, solid no) — expected reasoning-models; not solid; accepted page in top 5
- H3-156 [page/vague] "prompts" → (weak) system-prompts (score 132.01612477709028, solid no) — expected prompt-engineering; not solid; accepted page in top 5
- H3-160 [page/vague] "safety" → (weak) ai-alignment (score 35.66806768185536, solid no) — expected ai-alignment|ai-privacy-and-security|prompt-injection|ai-guardrails; not solid; accepted page in top 5

## Path completeness failures
- H3-050 "assistant that can look through my mailbox and summarise it" top (weak) ai-agent-vs-chatbot; learn -

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| H3-001 | PASS | page | im new here, what even is artificial intelligence | what-is-ai | 113.74337684296921 | yes | — |  |
| H3-002 | WEAK | page | why does my chat assistant sometimes confidently say wrong things | (weak) common-prompting-mistakes | 46.889413445392755 | no | — | not solid; accepted page in top 5 |
| H3-003 | WEAK | page | what are the little chunks of text a model reads called | (weak) chunking | 46.770145664223946 | no | — | not solid; accepted page in top 5 |
| H3-004 | MISS | page | is there a cap on how many words i can paste into the assistant | (weak) ai-agent-vs-chatbot | 40.99253236166573 | no | — | no accepted page in top 5 |
| H3-005 | MISS | page | teaching software with examples that already have answers | (weak) what-is-ai | 50.56940832684131 | no | — | no accepted page in top 5 |
| H3-006 | MISS | page | software that discovers groups by itself in raw data | (weak) gdpr-and-ai | 29 | no | — | no accepted page in top 5 |
| H3-007 | WEAK | page | stacked layers of simple math units that learn patterns | (weak) gsm8k-and-math-benchmarks | 44.42252960118723 | no | — | not solid; accepted page in top 5 |
| H3-008 | WEAK | page | how the error signal flows backwards through the layers | (weak) positional-encoding | 39.53487876844548 | no | — | not solid; accepted page in top 5 |
| H3-009 | MISS | page | accuracy looks perfect in my notebook but tanks after deployment | (weak) instruction-tuning | 34.86428067295954 | no | — | no accepted page in top 5 |
| H3-010 | WEAK | page | my network outputs nan after a few steps | (weak) neural-networks | 39.41949814606964 | no | — | not solid; accepted page in top 5 |
| H3-011 | WEAK | page | take a model trained on millions of photos and adapt it to x-rays | (weak) multimodal-ai | 57.46658617272677 | no | — | not solid; accepted page in top 5 |
| H3-012 | PASS | page | software learns a policy by being scored on outcomes | reinforcement-learning | 39.34987297889785 | yes | — |  |
| H3-013 | PASS | page | why convolutions suit pictures | convolutional-neural-networks | 54.98158114913099 | yes | — |  |
| H3-014 | PASS | page | self attention versus recurrence for sequences | transformers | 50 | yes | — |  |
| H3-015 | WEAK | page | noise to picture generators | (weak) diffusion-models | 48.3105170432093 | no | — | not solid; accepted page in top 5 |
| H3-016 | PASS | page | autoencoder with a probabilistic bottleneck | variational-autoencoders | 76.5043317183583 | yes | — |  |
| H3-017 | WEAK | page | networks for data that is linked together like friendships | (weak) graph-neural-networks | 79.94450899567997 | no | — | not solid; accepted page in top 5 |
| H3-018 | FALSE POSITIVE | page | memory cost of storing past attention states while generating | transformers | 62.07080634228573 | yes | — | confident wrong page: transformers |
| H3-019 | MISS | page | how does a model keep track of where each word sits in the sentence | (weak) context-windows | 50.583465107007115 | no | — | no accepted page in top 5 |
| H3-020 | MISS | page | architectures with many specialised subnetworks | (weak) deep-learning | 31.594796053569013 | no | — | no accepted page in top 5 |
| H3-021 | FALSE POSITIVE | page | a more efficient sequence layer than attention for very long inputs | transformers | 61.80397850621998 | yes | — | confident wrong page: transformers |
| H3-022 | MISS | page | what does it mean to train longer on more text | (weak) large-language-models | 40.10609213879454 | no | — | no accepted page in top 5 |
| H3-023 | WEAK | page | making the assistant polite and instruction following after pretraining | (weak) instruction-tuning | 86.56218699886333 | no | — | not solid; accepted page in top 5 |
| H3-024 | WEAK | page | cheaper way to specialise a big model than retraining everything | (weak) quantization | 46.130716809089705 | no | — | not solid; accepted page in top 5 |
| H3-025 | WEAK | page | make a model fit on a small graphics card | (weak) model-cards | 81.04403196261765 | no | — | not solid; accepted page in top 5 |
| H3-026 | FALSE POSITIVE | page | smaller model copying a larger one | quantization | 64.10765104596346 | yes | — | confident wrong page: quantization |
| H3-027 | MISS | page | guess several words ahead and verify them | (weak) how-to-reduce-hallucinations | 70.31934223421732 | no | — | no accepted page in top 5 |
| H3-028 | WEAK | page | compact models for edge devices | (weak) small-language-models | 100.38391051497508 | no | — | not solid; accepted page in top 5 |
| H3-029 | WEAK | page | can i legally use downloadable model weights in a product | (weak) open-weights-models | 95.7834719656408 | no | — | not solid; accepted page in top 5 |
| H3-030 | WEAK | page | letting a model deliberate longer for harder questions | (weak) reasoning-vs-standard-models | 54.163872248320544 | no | — | not solid; accepted page in top 5 |
| H3-031 | WEAK | page | sample a bunch of solutions and go with the consensus | (weak) self-consistency | 54.94340837217101 | no | — | not solid; accepted page in top 5 |
| H3-032 | WEAK | page | a scorer that checks each intermediate step | (weak) process-reward-model | 65.83939786118123 | no | — | not solid; accepted page in top 5 |
| H3-033 | WEAK | page | training with rewards that come from automatic checkers | (weak) reinforcement-learning-for-reasoning | 64.94654617572635 | no | — | not solid; accepted page in top 5 |
| H3-034 | MISS | page | privacy of a model's inner deliberation | (weak) reasoning-models | 62.80279494475073 | no | — | no accepted page in top 5 |
| H3-035 | WEAK | page | should i pick a deliberating model or a quick one | (weak) process-reward-model | 54.20704406371045 | no | — | not solid; accepted page in top 5 |
| H3-036 | FALSE POSITIVE | page | get typed objects back from an llm call | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H3-037 | PASS | page | force an llm to stay inside a json schema | json-schema | 114.92226617583876 | yes | — |  |
| H3-038 | WEAK | page | how do sampling knobs shape the text a model writes | (weak) sampling-and-decoding | 77.06000437725979 | no | — | not solid; accepted page in top 5 |
| H3-039 | WEAK | page | how do i word my request so the answer comes out right | (weak) rag | 23.334608303015333 | no | — | not solid; accepted page in top 5 |
| H3-040 | MISS | page | setting the personality and rules for an assistant | (weak) ai-agent-vs-chatbot | 40.67120815937575 | no | — | no accepted page in top 5 |
| H3-041 | WEAK | page | why do my prompts work on some inputs and fail on others | (weak) common-prompting-mistakes | 83.85336906756567 | no | — | not solid; accepted page in top 5 |
| H3-042 | MISS | page | let a model answer from the files on my drive | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| H3-043 | WEAK | page | splitting large documents sensibly before indexing | (weak) chunking | 128.05536368738305 | no | — | not solid; accepted page in top 5 |
| H3-044 | WEAK | page | numbers that capture the meaning of a sentence | (weak) embeddings | 102.55381967957959 | no | — | not solid; accepted page in top 5 |
| H3-045 | PASS | page | a database built for finding nearest vectors | vector-databases | 83.7426311786621 | yes | — |  |
| H3-046 | FALSE POSITIVE | page | use my existing postgres for similarity search | vector-databases | 78.49784928874365 | yes | — | confident wrong page: vector-databases |
| H3-047 | WEAK | page | good documents indexed but answers still miss the point | (weak) chunking | 38.77501692307375 | no | — | not solid; accepted page in top 5 |
| H3-048 | WEAK | page | retrieval that follows links between concepts | (weak) agentic-rag | 84.2211334098157 | no | — | not solid; accepted page in top 5 |
| H3-049 | FALSE POSITIVE | page | measuring whether my retrieval is any good | ai-evaluation | 56.833733641268 | yes | — | confident wrong page: ai-evaluation |
| H3-050 | MISS | page | assistant that can look through my mailbox and summarise it | (weak) ai-agent-vs-chatbot | 25.55877158568552 | no | — | no accepted page in top 5 |
| H3-051 | MISS | page | let a bot create tickets in our issue tracker | (weak) github | 24.044511569667126 | no | — | no accepted page in top 5 |
| H3-052 | WEAK | page | which scopes does an assistant need to read my calendar | (weak) authentication-vs-authorization | 25.3417940096024 | no | — | not solid; accepted page in top 5 |
| H3-053 | WEAK | page | what could go wrong if an assistant can send emails by itself | (weak) ai-agent-vs-chatbot | 25.934900261978044 | no | — | not solid; accepted page in top 5 |
| H3-054 | WEAK | page | software that plans acts and checks its own progress | (weak) agent-planning | 81.48298392989038 | no | — | not solid; accepted page in top 5 |
| H3-055 | WEAK | page | how to coordinate a researcher agent and a writer agent | (weak) multi-agent-systems | 133.2746241258555 | no | — | not solid; accepted page in top 5 |
| H3-056 | MISS | page | giving a model the ability to run functions | (weak) ai-agent-vs-chatbot | 58.10373096228377 | no | — | no accepted page in top 5 |
| H3-057 | WEAK | page | keeping a long conversation history manageable for an agent | (weak) ai-agent-vs-chatbot | 94.33419830235667 | no | — | not solid; accepted page in top 5 |
| H3-058 | WEAK | page | my assistant calls the wrong tool half the time | (weak) ai-agent-vs-chatbot | 42.313933339636144 | no | — | not solid; accepted page in top 5 |
| H3-059 | FALSE POSITIVE | page | pick a library for building agent loops | react-agent-pattern | 59.7520236716727 | yes | — | confident wrong page: react-agent-pattern |
| H3-060 | WEAK | page | protocol that lets assistants plug into external services | (weak) mcp | 65.21514427318954 | no | — | not solid; accepted page in top 5 |
| H3-061 | FALSE POSITIVE | page | building a server that offers tools to ai apps | agent-tools | 52.43528277685209 | yes | — | confident wrong page: agent-tools |
| H3-062 | PASS | page | could a connected tool server steal my data | mcp-security | 63.21219393086722 | yes | — |  |
| H3-063 | WEAK | page | protocol for agents built by different companies to cooperate | (weak) agent-protocol-landscape | 128.89314963642045 | no | — | not solid; accepted page in top 5 |
| H3-064 | FALSE POSITIVE | page | send a prompt to a hosted model with the python sdk | python | 68.28702503268985 | yes | — | confident wrong page: python |
| H3-065 | FALSE POSITIVE | page | prepare tabular data for an llm in python | python | 55.13527690873467 | yes | — | confident wrong page: python |
| H3-066 | MISS | page | browser app talking to a model through my own backend | (weak) frontend-and-backend | 49.97199279133194 | no | — | no accepted page in top 5 |
| H3-067 | WEAK | page | make my api client type safe | (weak) typescript-api-client-types | 79.61922629931401 | no | — | not solid; accepted page in top 5 |
| H3-068 | WEAK | page | ui components for a chat assistant | (weak) react-ai-interfaces | 57.44601691540521 | no | — | not solid; accepted page in top 5 |
| H3-069 | PASS | page | run a model proxy on express | express | 62.33118967697354 | yes | — |  |
| H3-070 | WEAK | page | how do two programs talk over http | (weak) model-apis | 23.266462053652045 | no | — | not solid; accepted page in top 5 |
| H3-071 | MISS | page | querying exactly the fields i need from an api | (weak) api-keys | 53.10733876598452 | no | — | no accepted page in top 5 |
| H3-072 | FALSE POSITIVE | page | where do i put credentials so they do not leak into git | git | 61.01198965348824 | yes | — | confident wrong page: git |
| H3-073 | MISS | page | login with google or microsoft for my web app | (weak) microsoft-graph | 58.74701963861658 | no | — | no accepted page in top 5 |
| H3-074 | FALSE POSITIVE | page | signed tokens that carry claims | tokens | 34 | yes | — | confident wrong page: tokens |
| H3-075 | WEAK | page | why does my browser refuse the response from another domain | (weak) cors | 31.98339519468801 | no | — | not solid; accepted page in top 5 |
| H3-076 | PASS | page | server calls me when something happens | webhooks | 46.40841832988665 | yes | — |  |
| H3-077 | PASS | page | structured query language for relational data | sql | 89.34607973720277 | yes | — |  |
| H3-078 | WEAK | page | document store or relational tables for flexible records | (weak) sql-vs-nosql | 53.986802359284226 | no | — | not solid; accepted page in top 5 |
| H3-079 | PASS | page | lightweight embedded database | sqlite | 70.0918416617319 | yes | — |  |
| H3-080 | WEAK | page | in memory key value store | (weak) redis | 65.59319385464946 | no | — | not solid; accepted page in top 5 |
| H3-081 | MISS | page | mapping database rows to objects in code | (weak) vector-database-vs-traditional-database | 64.7146438265071 | no | — | no accepted page in top 5 |
| H3-082 | PASS | page | what can i host on amazon web services | aws-fundamentals | 54.164888030483425 | yes | — |  |
| H3-083 | WEAK | page | microsoft cloud basics for a developer | (weak) microsoft-365 | 61.6035585707658 | no | — | not solid; accepted page in top 5 |
| H3-084 | WEAK | page | googles cloud platform overview | (weak) gcp-fundamentals | 72.14982820397694 | no | — | not solid; accepted page in top 5 |
| H3-085 | WEAK | page | which cloud gives gpus for model hosting | (weak) gcp-fundamentals | 60.018579429286284 | no | — | not solid; accepted page in top 5 |
| H3-086 | MISS | page | wrap my app so it runs identically on any server | (weak) nextjs | 31.140606018606576 | no | — | no accepted page in top 5 |
| H3-087 | WEAK | page | keep track of changes to my code and collaborate | (weak) code-execution-sandboxing | 39.039181442549165 | no | — | not solid; accepted page in top 5 |
| H3-088 | WEAK | page | run checks automatically whenever i push | (weak) cicd | 22.69350074820208 | no | — | not solid; accepted page in top 5 |
| H3-089 | WEAK | page | my deployment keeps crashing and restarting in the cluster | (weak) kubernetes | 153.88336499921607 | no | — | not solid; accepted page in top 5 |
| H3-090 | FALSE POSITIVE | page | managing many containers across machines | containers | 107.93685011125443 | yes | — | confident wrong page: containers |
| H3-091 | WEAK | page | team intranet platform from microsoft | (weak) microsoft-365 | 64.27437263312427 | no | — | not solid; accepted page in top 5 |
| H3-092 | FALSE POSITIVE | page | custom client side components for modern sharepoint pages | sharepoint | 78.14367060811354 | yes | — | confident wrong page: sharepoint |
| H3-093 | WEAK | page | fetch mail and files from a users microsoft account | (weak) microsoft-graph | 60.69958058475266 | no | — | not solid; accepted page in top 5 |
| H3-094 | WEAK | page | microsofts identity platform for sign in and permissions | (weak) power-platform | 41.33321654676715 | no | — | not solid; accepted page in top 5 |
| H3-095 | WEAK | page | automate approvals without writing code | (weak) code-execution-sandboxing | 41.21204348270056 | no | — | not solid; accepted page in top 5 |
| H3-096 | WEAK | page | build an app that lives inside microsoft teams | (weak) teams-development | 96.2105402151198 | no | — | not solid; accepted page in top 5 |
| H3-097 | FALSE POSITIVE | page | libraries that help assemble llm apps | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H3-098 | FALSE POSITIVE | page | the hub where people share pretrained models | transfer-learning | 72.42854805474568 | yes | — | confident wrong page: transfer-learning |
| H3-099 | FALSE POSITIVE | page | run open models offline on my machine | open-weights-models | 120.644064302864 | yes | — | confident wrong page: open-weights-models |
| H3-100 | PASS | page | serving engine with continuous batching | vllm | 101.21917502566576 | yes | — |  |
| H3-101 | WEAK | page | quantized model format for cpu inference | (weak) model-serving-and-inference | 104.32784151382839 | no | — | not solid; accepted page in top 5 |
| H3-102 | WEAK | page | portable inference format for many platforms | (weak) model-serving-and-inference | 82.17610623699404 | no | — | not solid; accepted page in top 5 |
| H3-103 | FALSE POSITIVE | page | which deep learning library is most widely used for research | deep-learning | 110.3869604753791 | yes | — | confident wrong page: deep-learning |
| H3-104 | WEAK | page | model that reads pictures and answers questions about them | (weak) vision-language-models | 79.42481792803665 | no | — | not solid; accepted page in top 5 |
| H3-105 | WEAK | page | turn recorded speech into text | (weak) speech-ai | 95.71243507095598 | no | — | not solid; accepted page in top 5 |
| H3-106 | WEAK | page | pull fields from scanned forms | (weak) document-understanding-ai | 70.55739216934961 | no | — | not solid; accepted page in top 5 |
| H3-107 | WEAK | page | generating clips from a text description | (weak) contrastive-learning-clip | 78.57653156036774 | no | — | not solid; accepted page in top 5 |
| H3-108 | MISS | page | locating and naming objects in photos | (weak) c2pa-content-provenance | 24.63279593728937 | no | — | no accepted page in top 5 |
| H3-109 | WEAK | page | software layer that connects sensors and motors in a robot | (weak) robot-operating-system | 95.72278599368212 | no | — | not solid; accepted page in top 5 |
| H3-110 | FALSE POSITIVE | page | policy that maps pictures and words to motor commands | reinforcement-learning | 21 | yes | — | confident wrong page: reinforcement-learning |
| H3-111 | WEAK | page | teach manipulation by copying human operators | (weak) physics-informed-neural-networks | 29.98080697590436 | no | — | not solid; accepted page in top 5 |
| H3-112 | WEAK | page | transferring skills from a physics simulator to a real machine | (weak) sim-to-real-transfer | 60.43990863103394 | no | — | not solid; accepted page in top 5 |
| H3-113 | PASS | page | a learned simulator used for planning | world-models | 66.81375691022612 | yes | — |  |
| H3-114 | WEAK | page | attack where crafted text overrides my assistants rules | (weak) prompt-injection | 116.88340055025826 | no | — | not solid; accepted page in top 5 |
| H3-115 | WEAK | page | what personal data should never go into a public chatbot | (weak) gdpr-and-ai | 42.48413052320997 | no | — | not solid; accepted page in top 5 |
| H3-116 | FALSE POSITIVE | page | probing my own assistant for weaknesses before launch | mechanistic-interpretability | 44.06763743560401 | yes | — | confident wrong page: mechanistic-interpretability |
| H3-117 | MISS | page | runtime checks on what the model is allowed to say | (weak) model-cards | 47.870988441243554 | no | — | no accepted page in top 5 |
| H3-118 | WEAK | page | running untrusted generated scripts without risking my machine | (weak) code-execution-sandboxing | 64.54824666565835 | no | — | not solid; accepted page in top 5 |
| H3-119 | WEAK | page | labelling content as machine made | (weak) c2pa-content-provenance | 65.3543031528147 | no | — | not solid; accepted page in top 5 |
| H3-120 | FALSE POSITIVE | page | top vulnerabilities for generative ai applications | generative-ai | 85.88954923296328 | yes | — | confident wrong page: generative-ai |
| H3-121 | PASS | page | are the scores on public model rankings reliable | benchmarks-and-leaderboards | 72.61381819582427 | yes | — |  |
| H3-122 | MISS | page | have a stronger model score weaker model answers | (weak) process-reward-model | 44.02598029166742 | no | — | no accepted page in top 5 |
| H3-123 | PASS | page | which numbers describe a classifier on imbalanced data | evaluation-metrics-for-ai | 49.76046514517884 | yes | — |  |
| H3-124 | FALSE POSITIVE | page | how do i test my llm application end to end | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| H3-125 | FALSE POSITIVE | page | is a coding benchmark of real repository bugs useful | humaneval | 170.16904838302528 | yes | — | confident wrong page: humaneval |
| H3-126 | FALSE POSITIVE | page | operational discipline for machine learning teams | what-is-ai | 68.27716396701602 | yes | — | confident wrong page: what-is-ai |
| H3-127 | MISS | page | detect that live data no longer looks like training data | (weak) benchmark-contamination | 43.46901830715 | no | — | no accepted page in top 5 |
| H3-128 | MISS | page | record every prompt response and cost in production | (weak) prompt-caching | 60.87887736459024 | no | — | no accepted page in top 5 |
| H3-129 | WEAK | page | reduce what i pay per request to a hosted model | (weak) llm-cost-optimization | 62.405650449112485 | no | — | not solid; accepted page in top 5 |
| H3-130 | WEAK | page | split a big training job across accelerators | (weak) distributed-training | 63.77767915509662 | no | — | not solid; accepted page in top 5 |
| H3-131 | WEAK | page | choose accelerators for inference | (weak) model-serving-and-inference | 73.20994194982708 | no | — | not solid; accepted page in top 5 |
| H3-132 | MISS | page | logging runs and comparing model versions | (weak) model-drift-and-monitoring | 48.58824876088559 | no | — | no accepted page in top 5 |
| H3-133 | FALSE POSITIVE | page | company policy for using generative ai | generative-ai | 88.8516509209725 | yes | — | confident wrong page: generative-ai |
| H3-134 | WEAK | page | european law classing ai by risk level | (weak) eu-ai-act | 111.81388448996361 | no | — | not solid; accepted page in top 5 |
| H3-135 | WEAK | page | us government framework for managing ai risk | (weak) nist-ai-rmf | 125.73884790303438 | no | — | not solid; accepted page in top 5 |
| H3-136 | PASS | page | auditable management system standard for ai | iso-iec-42001 | 104.59630274040276 | yes | — |  |
| H3-137 | MISS | page | do models treat different groups unequally | (weak) reasoning-models | 42.092475991274426 | no | — | no accepted page in top 5 |
| H3-138 | WEAK | page | how do i document what my model can and cannot do | (weak) ai-evaluation | 35.22710848671179 | no | — | not solid; accepted page in top 5 |
| H3-139 | FALSE POSITIVE | page | tuning on pairs of preferred and dispreferred answers without a reward model | rlhf | 65.90699755247178 | yes | — | confident wrong page: rlhf |
| H3-140 | WEAK | page | models agreeing with whatever the user says | (weak) sycophancy | 71.2534773901059 | no | — | not solid; accepted page in top 5 |
| H3-141 | WEAK | page | exploiting a flawed scoring rule | (weak) reward-hacking | 53.03554916014064 | no | — | not solid; accepted page in top 5 |
| H3-142 | MISS | page | making models follow human values | (weak) reasoning-models | 53.57730812552066 | no | — | no accepted page in top 5 |
| H3-143 | WEAK | page | ml systems that predict how proteins fold | (weak) alphafold | 48.477826404486635 | no | — | not solid; accepted page in top 5 |
| H3-144 | WEAK | page | neural nets as fast stand ins for physics simulations | (weak) physics-informed-neural-networks | 80.75567933119311 | no | — | not solid; accepted page in top 5 |
| H3-145 | WEAK | page | kuberntes pods keep restarting | (weak) kubernetes | 134.95735245611073 | no | — | not solid; accepted page in top 5 |
| H3-146 | PASS | page | doker compose networking | docker | 102.80433951922929 | yes | — |  |
| H3-147 | WEAK | page | retreival augmented generaton | (weak) rag | 154.3579970495228 | no | — | not solid; accepted page in top 5 |
| H3-148 | PASS | page | embeding model choise | embeddings | 91.29682129321742 | yes | — |  |
| H3-149 | WEAK | page | chain of thougth prompting | (weak) chain-of-thought | 123.41476569352939 | no | — | not solid; accepted page in top 5 |
| H3-150 | WEAK | page | reasonning models explained | (weak) reasoning-models | 51.62225325418262 | no | — | not solid; accepted page in top 5 |
| H3-151 | FALSE POSITIVE | page | vecotr search in postgress | postgresql | 78.84553548588246 | yes | — | confident wrong page: postgresql |
| H3-152 | FALSE POSITIVE | page | multimodel ai basics | what-is-ai | 76.61588532017304 | yes | — | confident wrong page: what-is-ai |
| H3-153 | PASS | page | llama indxe vs langchan | langchain | 78.60887682101885 | yes | — |  |
| H3-154 | PASS | page | agentc workflows | agentic-workflows | 67.86137818095095 | yes | — |  |
| H3-155 | PASS | neg | ai | (weak) ai-governance | 100.94861689859621 | no | — | no confident answer |
| H3-156 | WEAK | page | prompts | (weak) system-prompts | 132.01612477709028 | no | — | not solid; accepted page in top 5 |
| H3-157 | PASS | page | embeddings and stuff | embeddings | 55.0380450538953 | yes | — |  |
| H3-158 | PASS | gap | devops | (weak) mlops | 141.3333776290826 | no | — | transparent non-answer |
| H3-159 | FALSE POSITIVE | neg | something with tokens | tokens | 74.56783035207614 | yes | — | confident answer for out-of-scope query: tokens |
| H3-160 | WEAK | page | safety | (weak) ai-alignment | 35.66806768185536 | no | — | not solid; accepted page in top 5 |
| H3-161 | PASS | gap | ansible vs chef | (weak) ai-agent-vs-chatbot | 62.78671616912652 | no | — | transparent non-answer |
| H3-162 | PASS | gap | ssh key setup | (weak) api-keys | 43.46185241146654 | no | — | transparent non-answer |
| H3-163 | PASS | gap | how do i debounce a function | (weak) function-calling | 134.20360588216232 | no | — | transparent non-answer |
| H3-164 | PASS | gap | python decorators explained | python | 63.1699797959449 | yes | — | nearby page: python |
| H3-165 | PASS | gap | how to write a regex for emails | (weak) prompt-engineering | 29.289641542426097 | no | — | transparent non-answer |
| H3-166 | PASS | gap | svelte vs react | react | 66.39758099000701 | yes | — | nearby page: react |
| H3-167 | PASS | gap | how do i build a recommendation engine | (weak) build-spfx-web-part | 36.25511374739564 | no | — | transparent non-answer |
| H3-168 | PASS | gap | speech synthesis voices that sound human | (weak) speech-ai | 98.54797821136016 | no | — | transparent non-answer |
| H3-169 | PASS | gap | which gpu to buy this year | gpus-and-ai-accelerators | 74.85288013572288 | yes | — | nearby page: gpus-and-ai-accelerators |
| H3-170 | PASS | gap | tensorflow lite for microcontrollers | (weak) neural-networks | 57.65557122236086 | no | — | transparent non-answer |
| H3-171 | PASS | gap | what is jax | (weak) physics-informed-neural-networks | 59.31714504113174 | no | — | transparent non-answer |
| H3-172 | PASS | gap | what does the nobel prize in chemistry have to do with ai | (weak) ai-drug-discovery | 92.02723205282969 | no | — | transparent non-answer |
| H3-173 | PASS | gap | what is azure openai service pricing | azure-fundamentals | 52.206950547977456 | yes | — | nearby page: azure-fundamentals |
| H3-174 | PASS | gap | how to build a power bi report | power-platform | 65.45900523309635 | yes | — | nearby page: power-platform |
| H3-175 | FALSE POSITIVE | neg | transformer cosplay costume | transformers | 57.10941786470883 | yes | — | confident answer for out-of-scope query: transformers |
| H3-176 | PASS | neg | mamba mentality tshirt | (weak) state-space-models | 68.9433548190764 | no | — | no confident answer |
| H3-177 | FALSE POSITIVE | neg | python regius ball care | python | 57.781668484134315 | yes | — | confident answer for out-of-scope query: python |
| H3-178 | PASS | gap | react native vs flutter | react | 66.06873577412294 | yes | — | nearby page: react |
| H3-179 | PASS | neg | docker pants waterproof | (weak) docker | 92.62420919810134 | no | — | no confident answer |
| H3-180 | PASS | neg | estate agent fees when selling a flat | (weak) local-ai-vs-cloud-ai | 36.718267804201076 | no | — | no confident answer |
| H3-181 | PASS | neg | scale model train layouts | (weak) encoder-decoder-vs-decoder-only | 37.309519052135016 | no | — | no confident answer |
| H3-182 | FALSE POSITIVE | neg | java island travel tips | java | 57.49515506048824 | yes | — | confident answer for out-of-scope query: java |
| H3-183 | PASS | neg | go kart racing near me | (weak) open-weights-models | 40.13908216962461 | no | — | no confident answer |
| H3-184 | PASS | neg | spring break destinations | (weak) java | 45.60242415091924 | no | — | no confident answer |
| H3-185 | PASS | neg | swift bird migration | (weak) system-prompts | 57.362362204677865 | no | — | no confident answer |
| H3-186 | PASS | neg | gemini constellation stars | (weak) transformers-vs-state-space-models | 48.25941330445588 | no | — | no confident answer |
| H3-187 | PASS | neg | falcon bird of prey training | (weak) search-over-reasoning | 39.327763616018025 | no | — | no confident answer |
| H3-188 | PASS | neg | bert lahr wizard of oz | (weak) encoder-decoder-vs-decoder-only | 89.01101228696444 | no | — | no confident answer |
| H3-189 | PASS | neg | llama trekking in peru | (weak) llama-cpp | 115.82013553100184 | no | — | no confident answer |
| H3-190 | PASS | neg | claude debussy piano pieces | (weak) instruction-tuning | 68.21784270418848 | no | — | no confident answer |
| H3-191 | PASS | neg | mistral breeze sailing | (weak) open-weights-models | 54.99743033544372 | no | — | no confident answer |
| H3-192 | PASS | neg | agent provocateur meaning | (weak) multi-agent-systems | 115.36109420051321 | no | — | no confident answer |
| H3-193 | PASS | neg | perplexed expression synonyms | (weak) grammar-guided-generation | 79.64466950043006 | no | — | no confident answer |
| H3-194 | PASS | neg | training for a triathlon | (weak) fine-tuning | 36.20438474235485 | no | — | no confident answer |
| H3-195 | FALSE POSITIVE | neg | attention to detail resume tips | transformers | 34 | yes | — | confident answer for out-of-scope query: transformers |
| H3-196 | PASS | neg | vector illustration of birds | (weak) vector-database-vs-traditional-database | 125.89913565535407 | no | — | no confident answer |
| H3-197 | PASS | neg | cookie consent banner wording for my shop | (weak) oauth | 16.24490571937828 | no | — | no confident answer |
| H3-198 | FALSE POSITIVE | neg | gradient descent hiking trail name | backpropagation-and-gradient-descent | 119.42559159563675 | yes | — | confident answer for out-of-scope query: backpropagation-and-gradient-descent |
| H3-199 | PASS | neg | how to apply for a visa | (weak) integration-permissions | 65.1282483802686 | no | — | no confident answer |
| H3-200 | PASS | neg | best way to learn guitar | (weak) fine-tuning | 54.33105857356675 | no | — | no confident answer |
| H3-201 | PASS | neg | what causes inflation | (weak) speculative-decoding | 40.81077521693422 | no | — | no confident answer |
| H3-202 | PASS | neg | traffic on the m25 right now | (weak) kv-cache | 32.858080190564564 | no | — | no confident answer |
| H3-203 | PASS | neg | cheapest flights to rome in march | (weak) rag-evaluation | 70.43488511918586 | no | — | no confident answer |
| H3-204 | PASS | neg | pasta carbonara authentic recipe | (weak) rag | 39.30999475937631 | no | — | no confident answer |
| H3-205 | PASS | neg | bake a chocolate cake without eggs | (weak) chunking | 58.54744819672117 | no | — | no confident answer |
| H3-206 | PASS | neg | the score of last nights basketball game | (weak) deep-q-networks | 56.69199066475441 | no | — | no confident answer |
| H3-207 | PASS | neg | biggest city in canada | (weak) eu-ai-act | 46.04338670038798 | no | — | no confident answer |
| H3-208 | PASS | neg | how long does it take to boil an egg | (weak) prompt-engineering | 52.5473951303733 | no | — | no confident answer |
| H3-209 | PASS | neg | should i invest in the latest ai company stock | (weak) ai-governance | 68.35418756834642 | no | — | no confident answer |
| H3-210 | PASS | neg | which is the smartest ai right now | (weak) ai-governance | 110.51791861024896 | no | — | no confident answer |
| H3-211 | PASS | neg | write a cover email for a job | (weak) prompt-engineering | 14 | no | — | no confident answer |
