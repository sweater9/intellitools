# Knowledge red-team report — sw-main

Dataset: `tests/redteam/frozen-queries.json` sha256 `4982137be9b08e5b5635cf7da758e43f51f0580d5acdb740ad27513aaf026ec0`

Total 426 · PASS 217 · WEAK 142 · MISS 46 · FALSE POSITIVE 21
Pass rate 50.9% · False-positive rate 4.9%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 221 · WEAK 142 · MISS 46 · FALSE POSITIVE 17 · pass rate 51.9% · FP rate 4.0%
Retrieval on page-kind queries (304): top-1 65.5% · top-3 79.9% · top-5 84.5%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 2/4

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 43 | 36 | 0 | 0 | 7 | 83.7% |
| neg | 79 | 75 | 0 | 0 | 4 | 94.9% |
| page | 304 | 106 | 142 | 46 | 10 | 34.9% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| acronym | 14 | 6 | 6 | 2 | 0 | 42.9% |
| ambiguous-or-off-topic | 73 | 70 | 0 | 0 | 3 | 95.9% |
| architecture | 5 | 1 | 3 | 1 | 0 | 20.0% |
| beginner | 46 | 25 | 12 | 6 | 3 | 54.3% |
| comparison | 9 | 1 | 6 | 2 | 0 | 11.1% |
| concept | 74 | 35 | 29 | 8 | 2 | 47.3% |
| conversational | 3 | 0 | 2 | 1 | 0 | 0.0% |
| coverage-probe | 39 | 32 | 0 | 0 | 7 | 82.1% |
| expert | 16 | 2 | 12 | 0 | 2 | 12.5% |
| implementation | 28 | 9 | 14 | 4 | 1 | 32.1% |
| integration | 5 | 2 | 2 | 1 | 0 | 40.0% |
| mixed-natural | 25 | 2 | 14 | 9 | 0 | 8.0% |
| security | 20 | 6 | 11 | 3 | 0 | 30.0% |
| tech-selection | 1 | 0 | 1 | 0 | 0 | 0.0% |
| troubleshooting | 14 | 2 | 10 | 2 | 0 | 14.3% |
| typo | 16 | 6 | 8 | 1 | 1 | 37.5% |
| vague | 14 | 6 | 5 | 1 | 2 | 42.9% |
| what-to-use | 24 | 12 | 7 | 5 | 0 | 50.0% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 4 | 0 | 3 | 0 | 1 | 0.0% |
| agent | 18 | 4 | 10 | 4 | 0 | 22.2% |
| ai | 37 | 17 | 13 | 3 | 4 | 45.9% |
| amb | 53 | 50 | 0 | 0 | 3 | 94.3% |
| api | 11 | 9 | 1 | 1 | 0 | 81.8% |
| arch | 6 | 3 | 3 | 0 | 0 | 50.0% |
| cloud | 5 | 4 | 1 | 0 | 0 | 80.0% |
| cv | 6 | 1 | 3 | 0 | 2 | 16.7% |
| data | 2 | 2 | 0 | 0 | 0 | 100.0% |
| db | 9 | 6 | 3 | 0 | 0 | 66.7% |
| dev | 15 | 12 | 2 | 0 | 1 | 80.0% |
| devops | 17 | 13 | 3 | 0 | 1 | 76.5% |
| dl | 10 | 4 | 2 | 4 | 0 | 40.0% |
| embed | 2 | 0 | 1 | 1 | 0 | 0.0% |
| eval | 10 | 2 | 5 | 3 | 0 | 20.0% |
| fw | 9 | 6 | 2 | 0 | 1 | 66.7% |
| gov | 8 | 4 | 1 | 2 | 1 | 50.0% |
| js | 3 | 3 | 0 | 0 | 0 | 100.0% |
| json | 4 | 1 | 2 | 0 | 1 | 25.0% |
| llm | 30 | 2 | 22 | 4 | 2 | 6.7% |
| local | 5 | 1 | 3 | 1 | 0 | 20.0% |
| mcp | 7 | 3 | 1 | 3 | 0 | 42.9% |
| mixed | 25 | 2 | 14 | 9 | 0 | 8.0% |
| ml | 7 | 2 | 3 | 2 | 0 | 28.6% |
| mlops | 8 | 1 | 6 | 1 | 0 | 12.5% |
| mm | 2 | 0 | 1 | 0 | 1 | 0.0% |
| ms | 16 | 15 | 1 | 0 | 0 | 93.8% |
| nextjs | 1 | 1 | 0 | 0 | 0 | 100.0% |
| node | 2 | 1 | 1 | 0 | 0 | 50.0% |
| off | 20 | 20 | 0 | 0 | 0 | 100.0% |
| prompt | 4 | 0 | 4 | 0 | 0 | 0.0% |
| python | 6 | 3 | 3 | 0 | 0 | 50.0% |
| rag | 6 | 2 | 2 | 2 | 0 | 33.3% |
| react | 3 | 3 | 0 | 0 | 0 | 100.0% |
| rl | 4 | 0 | 4 | 0 | 0 | 0.0% |
| robot | 7 | 3 | 2 | 1 | 1 | 42.9% |
| runtime | 9 | 2 | 5 | 2 | 0 | 22.2% |
| safety | 7 | 5 | 1 | 1 | 0 | 71.4% |
| science | 5 | 4 | 1 | 0 | 0 | 80.0% |
| sec | 11 | 1 | 7 | 2 | 1 | 9.1% |
| speech | 4 | 1 | 3 | 0 | 0 | 25.0% |
| ts | 2 | 1 | 1 | 0 | 0 | 50.0% |
| vector | 5 | 2 | 2 | 0 | 1 | 40.0% |
| video | 1 | 1 | 0 | 0 | 0 | 100.0% |

## FALSE POSITIVE
- RT041 [page/expert] "reward models trained only on final answers" → process-reward-model (score 87, solid yes) — expected outcome-reward-model; confident wrong page: process-reward-model
- RT046 [page/implementation] "make the model return json that always matches my schema" → json-validation (score 87, solid yes) — expected structured-outputs|constrained-decoding|json-schema; confident wrong page: json-validation
- RT064 [page/typo] "vektor databse basics" → vector-database-vs-traditional-database (score 89, solid yes) — expected vector-databases; confident wrong page: vector-database-vs-traditional-database
- RT089 [page/beginner] "what is a2a" → a2a-vs-mcp (score 93, solid yes) — expected a2a-protocol; confident wrong page: a2a-vs-mcp
- RT116 [page/beginner] "what is json" → json-schema (score 93, solid yes) — expected what-is-json; confident wrong page: json-schema
- RT168 [page/concept] "microsoft sdk for plugging llms into dotnet apps" → ai-sdks (score 87, solid yes) — expected semantic-kernel; confident wrong page: ai-sdks
- RT185 [page/beginner] "what is multimodal ai" → generative-ai (score 85, solid yes) — expected multimodal-ai; confident wrong page: generative-ai
- RT190 [gap/coverage-probe] "how does object detection like yolo work" → object-detection (score 94, solid yes) — expected convolutional-neural-networks|vision-transformers; confident unrelated page: object-detection
- RT191 [gap/coverage-probe] "opencv tutorial for face detection" → object-detection (score 90, solid yes) — expected convolutional-neural-networks; confident unrelated page: object-detection
- RT202 [gap/coverage-probe] "how do i program a robot with ros" → robot-operating-system (score 95, solid yes) — expected embodied-ai; confident unrelated page: robot-operating-system
- RT214 [page/expert] "least privilege design for tool using agents" → mcp-security (score 88, solid yes) — expected integration-permissions|agent-tools|prompt-injection; confident wrong page: mcp-security
- RT235 [page/concept] "certifiable standard for managing ai in an organisation" → ai-governance (score 89, solid yes) — expected iso-iec-42001; confident wrong page: ai-governance
- RT268 [page/vague] "ai security" → ai-governance (score 89, solid yes) — expected ai-privacy-and-security|prompt-injection|owasp-llm-top-10; confident wrong page: ai-governance
- RT273 [neg/vague] "learning" → deep-learning (score 87, solid yes) — expected none; confident answer for out-of-scope query: deep-learning
- RT296 [gap/coverage-probe] "how do i run a kubernetes cluster" → kubernetes (score 88, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT306 [gap/coverage-probe] "vs code extensions for python" → python-ai-libraries (score 88, solid yes) — expected python; confident unrelated page: python-ai-libraries
- RT315 [gap/coverage-probe] "time series forecasting with arima" → ai-weather-forecasting (score 86, solid yes) — expected supervised-learning; confident unrelated page: ai-weather-forecasting
- RT318 [gap/coverage-probe] "what is causal inference" → encoder-decoder-vs-decoder-only (score 90, solid yes) — expected supervised-learning; confident unrelated page: encoder-decoder-vs-decoder-only
- RT332 [neg/ambiguous-or-off-topic] "react to this message" → react-chatbot-state (score 92, solid yes) — expected none; confident answer for out-of-scope query: react-chatbot-state
- RT345 [neg/ambiguous-or-off-topic] "git gud meaning" → git (score 85, solid yes) — expected none; confident answer for out-of-scope query: git
- RT346 [neg/ambiguous-or-off-topic] "node of ranvier function" → nodejs (score 87, solid yes) — expected none; confident answer for out-of-scope query: nodejs

## MISS
- RT003 [page/beginner] "how does chatgpt actually work" → (weak) sycophancy (score 68, solid no) — expected large-language-models|transformers|generative-ai; no accepted page in top 5
- RT009 [page/beginner] "labelled versus unlabelled data in machine learning" → (weak) mongodb (score 35, solid no) — expected supervised-learning|unsupervised-learning; no accepted page in top 5
- RT012 [page/implementation] "reuse imagenet weights for my own photos" → (weak) diffusion-models (score 38, solid no) — expected transfer-learning|convolutional-neural-networks; no accepted page in top 5
- RT016 [page/concept] "attention is all you need explained simply" → (weak) context-windows (score 67, solid no) — expected transformers; no accepted page in top 5
- RT018 [page/concept] "how do generative models make pictures out of noise" → (weak) generative-ai (score 81, solid no) — expected diffusion-models; no accepted page in top 5
- RT019 [page/concept] "two networks competing to make fake images" → (weak) convolutional-neural-networks (score 68, solid no) — expected generative-adversarial-networks; no accepted page in top 5
- RT025 [page/conversational] "hey can you tell me what unsupervised learning even is" → (weak) ai-hallucinations (score 65, solid no) — expected unsupervised-learning; no accepted page in top 5
- RT028 [page/acronym] "gnn use cases" → (weak) microsoft-entra-id (score 43, solid no) — expected graph-neural-networks; no accepted page in top 5
- RT050 [page/troubleshooting] "why is the same prompt giving different answers every time" → (weak) common-prompting-mistakes (score 83, solid no) — expected sampling-and-decoding; no accepted page in top 5
- RT052 [page/architecture] "design a pipeline that answers questions from our internal wiki" → (weak) agentic-rag (score 61, solid no) — expected rag|chunking|embeddings|vector-databases; no accepted page in top 5
- RT053 [page/implementation] "how big should my chunks be" → (weak) rag-with-python (score 61, solid no) — expected chunking; no accepted page in top 5
- RT059 [page/concept] "how can a computer know two sentences mean the same thing" → (weak) system-prompts (score 50, solid no) — expected embeddings; no accepted page in top 5
- RT068 [page/integration] "let my assistant send calendar invites on my behalf" → (weak) authentication-vs-authorization (score 69, solid no) — expected connecting-agents-to-apps|oauth-for-ai-agents|integration-permissions|agent-tools; no accepted page in top 5
- RT074 [page/troubleshooting] "agent forgets what we decided yesterday" → (weak) ai-agents (score 60, solid no) — expected agent-memory|context-windows; no accepted page in top 5
- RT078 [page/what-to-use] "do i even need langchain" → (weak) python-for-ai (score 70, solid no) — expected framework-vs-direct-api|langchain|agent-frameworks-compared; no accepted page in top 5
- RT081 [page/what-to-use] "i need a plan for who does what between agents handling support tickets" → (weak) python-ai-libraries (score 65, solid no) — expected agentic-workflows|multi-agent-systems; no accepted page in top 5
- RT083 [page/beginner] "i keep hearing about mcp, what problem does it solve" → (weak) react-agent-pattern (score 52, solid no) — expected mcp; no accepted page in top 5
- RT085 [page/comparison] "why not just call the api directly instead of mcp" → (weak) function-calling-vs-mcp (score 80, solid no) — expected mcp-vs-api; no accepted page in top 5
- RT087 [page/security] "is it safe to install a random mcp server from github" → (weak) mcp-servers-and-clients (score 83, solid no) — expected mcp-security; no accepted page in top 5
- RT113 [page/beginner] "what does restful mean" → (weak) sycophancy (score 58, solid no) — expected rest-apis; no accepted page in top 5
- RT173 [page/what-to-use] "serve a model to hundreds of users" → (weak) local-ai (score 70, solid no) — expected vllm|model-serving-and-inference|local-runtimes-compared; no accepted page in top 5
- RT177 [page/what-to-use] "how do i run a model in the browser" → (weak) javascript-for-ai (score 76, solid no) — expected onnx-runtime|local-ai; no accepted page in top 5
- RT181 [page/comparison] "local model or cloud api for sensitive documents" → (weak) gcp-fundamentals (score 76, solid no) — expected local-ai-vs-cloud-ai|ai-privacy-and-security; no accepted page in top 5
- RT201 [page/concept] "ai that imagines future states to plan actions" → (weak) ai-agents (score 82, solid no) — expected world-models; no accepted page in top 5
- RT207 [page/security] "remove secrets from a log before sharing it with an ai" → (weak) gmail-for-ai-agents (score 74, solid no) — expected ai-privacy-and-security|llm-observability; no accepted page in top 5
- RT212 [page/security] "can i tell if an image was made by ai" → (weak) video-generation-models (score 60, solid no) — expected c2pa-content-provenance; no accepted page in top 5
- RT215 [page/beginner] "how do i know if my ai feature is any good" → (weak) sycophancy (score 66, solid no) — expected ai-evaluation|llm-benchmarks-vs-task-evals; no accepted page in top 5
- RT219 [page/implementation] "build a test set for my rag bot" → (weak) rag-frameworks (score 56, solid no) — expected rag-evaluation|ai-evaluation; no accepted page in top 5
- RT222 [page/what-to-use] "check whether each claim is backed by the source text" → (weak) agentic-workflows (score 66, solid no) — expected how-to-reduce-hallucinations|ai-hallucinations|rag-evaluation; no accepted page in top 5
- RT227 [page/implementation] "log prompts and tokens in production" → (weak) model-apis (score 62, solid no) — expected llm-observability; no accepted page in top 5
- RT232 [page/beginner] "who signs off on ai use inside a company" → (weak) azure-fundamentals (score 73, solid no) — expected ai-governance; no accepted page in top 5
- RT237 [page/concept] "are my model's error rates different across demographic groups" → (weak) human-preference-evaluation (score 48, solid no) — expected ai-bias-and-fairness; no accepted page in top 5
- RT246 [page/concept] "can we see inside a neural network" → (weak) convolutional-neural-networks (score 72, solid no) — expected mechanistic-interpretability; no accepted page in top 5
- RT259 [page/concept] "how are base models turned into chat assistants" → (weak) multimodal-ai (score 51, solid no) — expected instruction-tuning|rlhf; no accepted page in top 5
- RT266 [page/vague] "how do i get started with ai" → (weak) llm-observability (score 65, solid no) — expected what-is-ai|python-for-ai|large-language-models; no accepted page in top 5
- RT287 [page/acronym] "oss vs proprietary models" → (weak) semantic-kernel (score 62, solid no) — expected open-weights-models; no accepted page in top 5
- RT291 [page/typo] "langchian agents" → (weak) openai-agents-sdk (score 85, solid no) — expected langchain|agent-frameworks-compared; no accepted page in top 5
- RT402 [page/mixed-natural] "use a model to check my own answers before sending them to a user" → (weak) system-prompts (score 63, solid no) — expected ai-guardrails|llm-as-a-judge|how-to-reduce-hallucinations; no accepted page in top 5
- RT405 [page/mixed-natural] "a model that sees my screen and clicks buttons" → (weak) model-apis (score 77, solid no) — expected computer-use-agents; no accepted page in top 5
- RT408 [page/mixed-natural] "trace every tool call my agent makes" → (weak) webhooks (score 64, solid no) — expected llm-observability|agent-evaluation; no accepted page in top 5
- RT412 [page/mixed-natural] "how do i let users log in with microsoft to my ai app" → (weak) microsoft-graph (score 78, solid no) — expected microsoft-entra-id|oauth|openid-connect; no accepted page in top 5
- RT415 [page/mixed-natural] "speed up llm responses without hurting quality" → (weak) llm-cost-optimization (score 44, solid no) — expected speculative-decoding|model-serving-and-inference|kv-cache; no accepted page in top 5
- RT416 [page/mixed-natural] "why does inference get slower with longer prompts" → (weak) thinking-budgets (score 66, solid no) — expected kv-cache|context-windows|model-serving-and-inference; no accepted page in top 5
- RT422 [page/mixed-natural] "how do i stop my agent from running up a huge bill" → (weak) ai-agent-vs-chatbot (score 70, solid no) — expected llm-cost-optimization|react-agent-pattern|agentic-workflows; no accepted page in top 5
- RT423 [page/mixed-natural] "model says it cannot see my document but i pasted it" → (weak) sql-vs-nosql (score 72, solid no) — expected context-windows|tokens; no accepted page in top 5
- RT426 [page/mixed-natural] "how to get consistent structured data out of messy emails" → (weak) generative-ai (score 62, solid no) — expected structured-outputs|document-understanding-ai|constrained-decoding; no accepted page in top 5

## WEAK
- RT001 [page/beginner] "ai vs machine learning whats the difference" → (weak) what-is-ai (score 79, solid no) — expected what-is-ai|deep-learning|supervised-learning; not solid; accepted page in top 5
- RT002 [page/beginner] "explain neural nets like im five" → (weak) deep-learning (score 56, solid no) — expected neural-networks|deep-learning; not solid; accepted page in top 5
- RT004 [page/beginner] "why do language models make stuff up" → (weak) ai-hallucinations (score 65, solid no) — expected ai-hallucinations|how-to-reduce-hallucinations; not solid; accepted page in top 5
- RT005 [page/typo] "wats a token in ai" → (weak) tokens (score 71, solid no) — expected tokens; not solid; accepted page in top 5
- RT006 [page/beginner] "how much text can an llm remember in one go" → (weak) go-language (score 61, solid no) — expected context-windows|tokens; not solid; accepted page in top 5
- RT007 [page/beginner] "what makes a model generative" → (weak) generative-ai (score 83, solid no) — expected generative-ai; not solid; accepted page in top 5
- RT010 [page/concept] "how does a neural network adjust itself while training" → (weak) deep-q-networks (score 73, solid no) — expected backpropagation-and-gradient-descent|neural-networks; not solid; accepted page in top 5
- RT011 [page/troubleshooting] "my classifier is 99 percent on training data and 70 percent on new data" → (weak) neural-networks (score 54, solid no) — expected overfitting-and-regularization; not solid; accepted page in top 5
- RT013 [page/vague] "robot dog learning to walk by trial and error" → (weak) imitation-learning (score 56, solid no) — expected reinforcement-learning|sim-to-real-transfer|embodied-ai; not solid; accepted page in top 5
- RT014 [page/concept] "how do image classifiers detect edges and shapes" → (weak) object-detection (score 65, solid no) — expected convolutional-neural-networks; not solid; accepted page in top 5
- RT015 [page/comparison] "why did transformers replace lstms" → (weak) recurrent-neural-networks (score 74, solid no) — expected transformers|recurrent-neural-networks; not solid; accepted page in top 5
- RT021 [page/expert] "why does adam use decoupled weight decay" → (weak) overfitting-and-regularization (score 75, solid no) — expected backpropagation-and-gradient-descent|overfitting-and-regularization; not solid; accepted page in top 5
- RT022 [page/expert] "how does ppo clip the policy update" → (weak) proximal-policy-optimization (score 82, solid no) — expected proximal-policy-optimization; not solid; accepted page in top 5
- RT023 [page/expert] "bellman optimality equation intuition" → (weak) markov-decision-processes (score 70, solid no) — expected markov-decision-processes; not solid; accepted page in top 5
- RT024 [page/expert] "why does dqn need a target network" → (weak) deep-q-networks (score 75, solid no) — expected deep-q-networks; not solid; accepted page in top 5
- RT026 [page/acronym] "sgd vs adam which one" → (weak) backpropagation-and-gradient-descent (score 78, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- RT030 [page/typo] "transfomer architecure basics" → (weak) transformers (score 74, solid no) — expected transformers; not solid; accepted page in top 5
- RT032 [page/typo] "embedings vs tokens" → (weak) embeddings (score 72, solid no) — expected embeddings|tokens; not solid; accepted page in top 5
- RT033 [page/beginner] "what is a prompt and why does wording matter" → (weak) common-prompting-mistakes (score 81, solid no) — expected prompt-engineering|system-prompts; not solid; accepted page in top 5
- RT034 [page/what-to-use] "i need to write a good prompt for summarising legal contracts" → (weak) prompt-engineering (score 61, solid no) — expected prompt-engineering|common-prompting-mistakes; not solid; accepted page in top 5
- RT035 [page/implementation] "what goes in a system prompt for a customer support bot" → (weak) system-prompts (score 62, solid no) — expected system-prompts|prompt-engineering; not solid; accepted page in top 5
- RT036 [page/troubleshooting] "the model keeps ignoring my instructions" → (weak) common-prompting-mistakes (score 73, solid no) — expected common-prompting-mistakes|system-prompts|prompt-engineering; not solid; accepted page in top 5
- RT037 [page/comparison] "compare my old system prompt with the new one" → (weak) common-prompting-mistakes (score 73, solid no) — expected system-prompts|prompt-engineering; not solid; accepted page in top 5
- RT038 [page/expert] "how do reasoning models spend extra tokens before answering" → (weak) thinking-budgets (score 84, solid no) — expected reasoning-models|test-time-compute; not solid; accepted page in top 5
- RT039 [page/expert] "majority vote across sampled chains of thought" → (weak) self-consistency (score 82, solid no) — expected self-consistency; not solid; accepted page in top 5
- RT040 [page/expert] "step level verifier for maths solutions" → (weak) process-reward-model (score 76, solid no) — expected process-reward-model; not solid; accepted page in top 5
- RT042 [page/expert] "rl with unit test rewards for coding models" → (weak) reinforcement-learning-for-reasoning (score 80, solid no) — expected reinforcement-learning-for-reasoning; not solid; accepted page in top 5
- RT043 [page/conversational] "can i read what the model was thinking before it answered" → (weak) reasoning-transparency (score 76, solid no) — expected reasoning-transparency|reasoning-models; not solid; accepted page in top 5
- RT044 [page/troubleshooting] "my output is truncated when using a thinking model" → (weak) thinking-budgets (score 80, solid no) — expected thinking-budgets|reasoning-models; not solid; accepted page in top 5
- RT045 [page/tech-selection] "when is a thinking model worth the extra cost" → (weak) thinking-budgets (score 77, solid no) — expected reasoning-vs-standard-models|reasoning-models|llm-cost-optimization; not solid; accepted page in top 5
- RT047 [page/expert] "how do grammars restrict which tokens a model can sample" → (weak) gbnf-grammars (score 73, solid no) — expected constrained-decoding|grammar-guided-generation; not solid; accepted page in top 5
- RT049 [page/beginner] "what does temperature do" → (weak) sampling-and-decoding (score 73, solid no) — expected sampling-and-decoding; not solid; accepted page in top 5
- RT051 [page/concept] "what is rag in simple words" → (weak) rag (score 78, solid no) — expected rag; not solid; accepted page in top 5
- RT054 [page/troubleshooting] "rag answers sound confident but cite the wrong document" → (weak) how-to-reduce-hallucinations (score 70, solid no) — expected rag-evaluation|how-to-reduce-hallucinations|hybrid-search-and-reranking|rag; not solid; accepted page in top 5
- RT055 [page/comparison] "should i fine tune or use retrieval for company docs" → (weak) rag-vs-fine-tuning (score 78, solid no) — expected rag-vs-fine-tuning; not solid; accepted page in top 5
- RT058 [page/concept] "how do i measure how similar two documents are numerically" → (weak) embeddings (score 62, solid no) — expected embeddings; not solid; accepted page in top 5
- RT062 [page/what-to-use] "which vector store should i pick for a prototype" → (weak) choosing-a-vector-store (score 82, solid no) — expected choosing-a-vector-store|vector-databases; not solid; accepted page in top 5
- RT063 [page/expert] "hnsw vs ivf index tradeoffs" → (weak) vector-database-vs-traditional-database (score 74, solid no) — expected vector-databases|pgvector; not solid; accepted page in top 5
- RT066 [page/conversational] "is a bot that only answers questions already an agent" → (weak) agent-protocol-landscape (score 62, solid no) — expected ai-agent-vs-chatbot; not solid; accepted page in top 5
- RT069 [page/integration] "how do i connect an ai agent to slack and jira" → (weak) ai-agents (score 58, solid no) — expected connecting-agents-to-apps|agent-tools|mcp; not solid; accepted page in top 5
- RT070 [page/security] "what permissions should an email reading agent have" → (weak) connecting-agents-to-apps (score 76, solid no) — expected integration-permissions|gmail-for-ai-agents|oauth-for-ai-agents; not solid; accepted page in top 5
- RT071 [page/security] "can a malicious email hijack my agent" → (weak) mcp-security (score 82, solid no) — expected prompt-injection|gmail-for-ai-agents; not solid; accepted page in top 5
- RT072 [page/architecture] "how do agents decide which tool to call" → (weak) agent-tools (score 76, solid no) — expected agent-tools|function-calling|react-agent-pattern; not solid; accepted page in top 5
- RT073 [page/troubleshooting] "my agent gets stuck repeating the same step" → (weak) ai-agents (score 69, solid no) — expected react-agent-pattern|agentic-workflows|ai-agents; not solid; accepted page in top 5
- RT075 [page/architecture] "should i use several agents or one" → (weak) ai-agent-vs-chatbot (score 67, solid no) — expected multi-agent-systems|agentic-workflows|ai-agents; not solid; accepted page in top 5
- RT077 [page/comparison] "langgraph versus crewai" → (weak) crewai (score 73, solid no) — expected agent-frameworks-compared|langgraph|crewai; not solid; accepted page in top 5
- RT079 [page/concept] "retrieval where the model decides to search again if results look poor" → (weak) agentic-rag (score 81, solid no) — expected agentic-rag; not solid; accepted page in top 5
- RT082 [page/expert] "how do agent evaluation harnesses score tool trajectories" → (weak) agent-evaluation (score 78, solid no) — expected agent-evaluation; not solid; accepted page in top 5
- RT090 [page/comparison] "are a2a and mcp competitors" → (weak) a2a-vs-mcp (score 81, solid no) — expected a2a-vs-mcp; not solid; accepted page in top 5
- RT091 [page/architecture] "how would agents from different vendors collaborate" → (weak) a2a-protocol (score 78, solid no) — expected a2a-protocol|agent-protocol-landscape; not solid; accepted page in top 5
- RT092 [page/expert] "where is the agent card published" → (weak) agent-protocol-landscape (score 67, solid no) — expected a2a-protocol; not solid; accepted page in top 5
- RT093 [page/typo] "modle context protocal" → (weak) mcp (score 80, solid no) — expected mcp; not solid; accepted page in top 5
- RT096 [page/implementation] "read a csv and clean it before sending to a model" → (weak) python-data-for-ai (score 82, solid no) — expected python-data-for-ai; not solid; accepted page in top 5
- RT098 [page/troubleshooting] "pip install broke my environment" → (weak) package-managers (score 79, solid no) — expected package-managers|python; not solid; accepted page in top 5
- RT099 [page/vague] "python for machine learning where to begin" → (weak) python-for-ai (score 74, solid no) — expected python-for-ai|python; not solid; accepted page in top 5
- RT101 [page/implementation] "type the response from my ai endpoint" → (weak) nodejs-for-ai (score 67, solid no) — expected typescript-api-client-types|typescript-for-ai; not solid; accepted page in top 5
- RT107 [page/implementation] "express server that proxies model requests" → (weak) express (score 84, solid no) — expected nodejs-for-ai|express; not solid; accepted page in top 5
- RT117 [page/troubleshooting] "unexpected token in json at position 0" → (weak) structured-outputs (score 74, solid no) — expected json-validation|what-is-json; not solid; accepted page in top 5
- RT119 [page/what-to-use] "pretty print and validate this json" → json-validation (score 87, solid yes) — expected json-validation|what-is-json; expected tool not offered: json-formatter
- RT122 [page/beginner] "what is inside a json web token" → (weak) what-is-an-api (score 80, solid no) — expected json-web-tokens; not solid; accepted page in top 5
- RT128 [page/implementation] "how do i join two tables" → (weak) sql (score 80, solid no) — expected sql; not solid; accepted page in top 5
- RT132 [page/concept] "what is an orm" → (weak) prisma-and-orms (score 82, solid no) — expected prisma-and-orms; not solid; accepted page in top 5
- RT134 [page/implementation] "store chat history for an assistant" → (weak) react-chatbot-state (score 76, solid no) — expected databases-for-ai-apps|postgresql-for-ai-apps|agent-memory; not solid; accepted page in top 5
- RT139 [page/security] "my s3 bucket is public by mistake" → (weak) aws-fundamentals (score 45, solid no) — expected aws-fundamentals; not solid; accepted page in top 5
- RT143 [page/beginner] "git basics for beginners" → (weak) python-for-ai (score 83, solid no) — expected git; not solid; accepted page in top 5
- RT146 [page/implementation] "set up automatic tests on every pull request" → (weak) ai-agents (score 60, solid no) — expected cicd|github; not solid; accepted page in top 5
- RT148 [page/implementation] "package an app so it runs the same everywhere" → (weak) environment-variables (score 81, solid no) — expected docker|containers; not solid; accepted page in top 5
- RT160 [page/integration] "let a daemon service call graph without a user" → (weak) api-keys (score 84, solid no) — expected microsoft-graph|microsoft-entra-id|oauth; not solid; accepted page in top 5
- RT164 [page/what-to-use] "which sdk should i use to call different models" → (weak) ai-sdks (score 85, solid no) — expected ai-sdks|model-apis|framework-vs-direct-api; not solid; accepted page in top 5
- RT167 [page/concept] "framework where you declare modules and let an optimizer tune the prompts" → (weak) dspy (score 64, solid no) — expected dspy; not solid; accepted page in top 5
- RT171 [page/beginner] "easiest way to pull and chat with an open model on my own pc" → (weak) local-ai-vs-cloud-ai (score 71, solid no) — expected ollama|local-ai; not solid; accepted page in top 5
- RT172 [page/what-to-use] "run an llm on my laptop without a gpu" → (weak) vllm (score 78, solid no) — expected llama-cpp|ollama|local-ai|quantization; not solid; accepted page in top 5
- RT174 [page/comparison] "ollama versus vllm" → (weak) local-runtimes-compared (score 84, solid no) — expected local-runtimes-compared|ollama|vllm; not solid; accepted page in top 5
- RT178 [page/concept] "why use pytorch" → (weak) pytorch (score 57, solid no) — expected pytorch; not solid; accepted page in top 5
- RT179 [page/troubleshooting] "cuda out of memory when loading a 13b model" → (weak) gpus-and-ai-accelerators (score 83, solid no) — expected quantization|gpus-and-ai-accelerators|model-serving-and-inference; not solid; accepted page in top 5
- RT180 [page/beginner] "can i run ai privately on my own machine" → (weak) local-ai (score 50, solid no) — expected local-ai|local-ai-vs-cloud-ai; not solid; accepted page in top 5
- RT182 [page/concept] "are downloadable models the same as open source" → (weak) open-weights-models (score 78, solid no) — expected open-weights-models; not solid; accepted page in top 5
- RT183 [page/concept] "tiny llms that run on a phone" → (weak) small-language-models (score 74, solid no) — expected small-language-models; not solid; accepted page in top 5
- RT186 [page/concept] "how do models understand images and text together" → (weak) vision-language-models (score 84, solid no) — expected vision-language-models|multimodal-ai|contrastive-learning-clip; not solid; accepted page in top 5
- RT187 [page/concept] "what is clip in computer vision" → (weak) vision-language-models (score 82, solid no) — expected contrastive-learning-clip; not solid; accepted page in top 5
- RT188 [page/implementation] "extract text from scanned invoices" → (weak) document-understanding-ai (score 83, solid no) — expected document-understanding-ai; not solid; accepted page in top 5
- RT193 [page/implementation] "build a voice assistant with an llm" → (weak) speech-ai (score 75, solid no) — expected speech-ai|ai-agents; not solid; accepted page in top 5
- RT194 [page/security] "can ai clone my voice" → (weak) speech-ai (score 78, solid no) — expected speech-ai|c2pa-content-provenance; not solid; accepted page in top 5
- RT195 [page/concept] "what is whisper" → (weak) speech-ai (score 57, solid no) — expected speech-ai; not solid; accepted page in top 5
- RT199 [page/concept] "teaching a robot by demonstration" → (weak) imitation-learning (score 57, solid no) — expected imitation-learning; not solid; accepted page in top 5
- RT200 [page/troubleshooting] "my policy works in the simulator but not on hardware" → (weak) sim-to-real-transfer (score 69, solid no) — expected sim-to-real-transfer; not solid; accepted page in top 5
- RT204 [page/security] "text hidden in a web page that tells my assistant to misbehave" → (weak) rag (score 65, solid no) — expected prompt-injection; not solid; accepted page in top 5
- RT206 [page/security] "is it ok to paste customer data into chatgpt" → (weak) oauth-for-ai-agents (score 64, solid no) — expected ai-privacy-and-security; not solid; accepted page in top 5
- RT208 [page/security] "standard checklist of security risks for generative ai apps" → (weak) nist-ai-rmf (score 84, solid no) — expected owasp-llm-top-10; not solid; accepted page in top 5
- RT209 [page/security] "how do i red team my chatbot" → (weak) red-teaming (score 76, solid no) — expected red-teaming; not solid; accepted page in top 5
- RT210 [page/security] "how do guardrails stop harmful output" → (weak) ai-guardrails (score 85, solid no) — expected ai-guardrails; not solid; accepted page in top 5
- RT211 [page/security] "how do i sandbox code the model writes" → (weak) code-execution-sandboxing (score 80, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- RT213 [page/security] "what is jailbreaking a model" → (weak) red-teaming (score 75, solid no) — expected prompt-injection|red-teaming; not solid; accepted page in top 5
- RT216 [page/concept] "what does a high score on the 57 subject multiple choice benchmark tell me" → (weak) mmlu (score 84, solid no) — expected mmlu; not solid; accepted page in top 5
- RT217 [page/concept] "why are leaderboard rankings misleading" → (weak) human-preference-evaluation (score 66, solid no) — expected benchmarks-and-leaderboards|benchmark-contamination; not solid; accepted page in top 5
- RT218 [page/concept] "using one model to grade another" → (weak) gsm8k-and-math-benchmarks (score 60, solid no) — expected llm-as-a-judge; not solid; accepted page in top 5
- RT220 [page/what-to-use] "which metrics for a classifier with rare positives" → (weak) evaluation-metrics-for-ai (score 63, solid no) — expected evaluation-metrics-for-ai; not solid; accepted page in top 5
- RT221 [page/concept] "benchmark where models fix real github issues" → (weak) swe-bench (score 71, solid no) — expected swe-bench; not solid; accepted page in top 5
- RT224 [page/beginner] "how do teams keep ml models running reliably after launch" → (weak) local-ai (score 62, solid no) — expected mlops; not solid; accepted page in top 5
- RT225 [page/implementation] "track experiments and register models" → (weak) mlflow (score 83, solid no) — expected mlflow|mlops; not solid; accepted page in top 5
- RT226 [page/troubleshooting] "my model got worse after three months in production" → (weak) model-drift-and-monitoring (score 66, solid no) — expected model-drift-and-monitoring; not solid; accepted page in top 5
- RT228 [page/what-to-use] "how many gpus do i need to serve a 70b model" → (weak) vllm (score 76, solid no) — expected gpus-and-ai-accelerators|model-serving-and-inference|quantization; not solid; accepted page in top 5
- RT229 [page/concept] "how to split training across several gpus" → (weak) distributed-training (score 83, solid no) — expected distributed-training; not solid; accepted page in top 5
- RT230 [page/implementation] "cut my llm bill" → (weak) llm-cost-optimization (score 62, solid no) — expected llm-cost-optimization|prompt-caching; not solid; accepted page in top 5
- RT236 [page/concept] "documentation template for a released model" → (weak) model-cards (score 63, solid no) — expected model-cards; not solid; accepted page in top 5
- RT242 [page/concept] "why do chatbots flatter users" → (weak) ai-alignment (score 49, solid no) — expected sycophancy|rlhf; not solid; accepted page in top 5
- RT250 [page/concept] "ai for finding new battery materials" → (weak) ai-materials-discovery (score 65, solid no) — expected ai-materials-discovery; not solid; accepted page in top 5
- RT254 [page/concept] "how does a kv cache save compute" → (weak) kv-cache (score 77, solid no) — expected kv-cache; not solid; accepted page in top 5
- RT255 [page/concept] "what is flash attention" → (weak) flash-attention (score 71, solid no) — expected flash-attention; not solid; accepted page in top 5
- RT256 [page/concept] "how do transformers know word order" → (weak) context-windows (score 65, solid no) — expected positional-encoding; not solid; accepted page in top 5
- RT258 [page/concept] "does making llms bigger improve them predictably" → (weak) scaling-laws (score 82, solid no) — expected scaling-laws; not solid; accepted page in top 5
- RT260 [page/implementation] "fine tune a 7b model on a single consumer gpu" → (weak) quantization (score 81, solid no) — expected lora-and-peft|fine-tuning; not solid; accepted page in top 5
- RT261 [page/concept] "distilling a big model into a small one" → (weak) knowledge-distillation (score 57, solid no) — expected knowledge-distillation; not solid; accepted page in top 5
- RT263 [page/concept] "how does prompt caching reduce cost" → (weak) prompt-caching (score 84, solid no) — expected prompt-caching; not solid; accepted page in top 5
- RT264 [page/implementation] "manage what goes into the context window for a long running agent" → (weak) context-engineering (score 69, solid no) — expected context-engineering|context-windows|agent-memory; not solid; accepted page in top 5
- RT265 [page/concept] "what are open source models like llama" → (weak) local-llm-runtimes (score 76, solid no) — expected open-weights-models|local-ai; not solid; accepted page in top 5
- RT267 [page/vague] "tell me about agents" → (weak) ai-agents (score 68, solid no) — expected ai-agents; not solid; accepted page in top 5
- RT269 [page/vague] "best way to use ai at work" → (weak) local-ai (score 62, solid no) — expected ai-privacy-and-security|prompt-engineering|ai-governance; not solid; accepted page in top 5
- RT271 [page/vague] "rag vs" → (weak) rag-frameworks (score 78, solid no) — expected rag-vs-fine-tuning|rag; not solid; accepted page in top 5
- RT278 [page/acronym] "llm rag mcp relationship" → (weak) mcp (score 70, solid no) — expected rag|mcp|large-language-models; not solid; accepted page in top 5
- RT280 [page/acronym] "gpu vs tpu" → (weak) gpus-and-ai-accelerators (score 78, solid no) — expected gpus-and-ai-accelerators; not solid; accepted page in top 5
- RT281 [page/acronym] "what is hitl in ai workflows" → (weak) agentic-workflows (score 78, solid no) — expected agentic-workflows|ai-agents; not solid; accepted page in top 5
- RT283 [page/acronym] "asr vs tts" → (weak) speech-ai (score 51, solid no) — expected speech-ai; not solid; accepted page in top 5
- RT285 [page/acronym] "crud api example" → (weak) what-is-an-api (score 79, solid no) — expected rest-apis|what-is-an-api; not solid; accepted page in top 5
- RT288 [page/typo] "dockr container networking" → (weak) docker (score 85, solid no) — expected docker|containers; not solid; accepted page in top 5
- RT293 [page/typo] "fine tunning vs prompting" → (weak) lora-vs-full-fine-tuning (score 85, solid no) — expected fine-tuning|rag-vs-fine-tuning|prompt-engineering; not solid; accepted page in top 5
- RT294 [page/typo] "halucination in llms" → (weak) ai-hallucinations (score 85, solid no) — expected ai-hallucinations; not solid; accepted page in top 5
- RT295 [page/typo] "guardrials for llm apps" → (weak) ai-guardrails (score 79, solid no) — expected ai-guardrails; not solid; accepted page in top 5
- RT403 [page/mixed-natural] "how can i make my chatbot cite its sources" → (weak) reasoning-transparency (score 66, solid no) — expected rag|how-to-reduce-hallucinations; not solid; accepted page in top 5
- RT404 [page/mixed-natural] "why does my assistant lose context in long chats" → (weak) large-language-models (score 66, solid no) — expected context-windows|agent-memory; not solid; accepted page in top 5
- RT409 [page/mixed-natural] "keep an ai agent from deleting my files" → (weak) gmail-for-ai-agents (score 71, solid no) — expected integration-permissions|code-execution-sandboxing|agent-tools|ai-guardrails; not solid; accepted page in top 5
- RT410 [page/mixed-natural] "how do i give an llm access to my database safely" → (weak) frontend-and-backend (score 63, solid no) — expected agent-tools|integration-permissions|databases-for-ai-apps|function-calling; not solid; accepted page in top 5
- RT411 [page/mixed-natural] "what is tool calling and how do i implement it" → (weak) function-calling (score 68, solid no) — expected function-calling|agent-tools; not solid; accepted page in top 5
- RT413 [page/mixed-natural] "difference between ai assistant copilot and agent" → (weak) ai-agent-vs-chatbot (score 81, solid no) — expected ai-agent-vs-chatbot|ai-agents; not solid; accepted page in top 5
- RT414 [page/mixed-natural] "how do i chunk pdfs for retrieval" → (weak) chunking (score 82, solid no) — expected chunking|document-understanding-ai; not solid; accepted page in top 5
- RT417 [page/mixed-natural] "difference between an embedding model and a chat model" → (weak) encoder-decoder-vs-decoder-only (score 64, solid no) — expected embeddings|encoder-decoder-vs-decoder-only|large-language-models; not solid; accepted page in top 5
- RT418 [page/mixed-natural] "what is a good chunk overlap" → (weak) chunking (score 85, solid no) — expected chunking; not solid; accepted page in top 5
- RT419 [page/mixed-natural] "how do i evaluate whether retrieval found the right passage" → (weak) rag-evaluation (score 81, solid no) — expected rag-evaluation; not solid; accepted page in top 5
- RT420 [page/mixed-natural] "safe way to let ai write sql" → (weak) databases-for-ai-apps (score 71, solid no) — expected sql|agent-tools|code-execution-sandboxing|prompt-injection; not solid; accepted page in top 5
- RT421 [page/mixed-natural] "can i run deepseek or llama privately" → (weak) gbnf-grammars (score 50, solid no) — expected local-ai|open-weights-models|ollama; not solid; accepted page in top 5
- RT424 [page/mixed-natural] "ai to turn meeting recordings into notes" → (weak) react-chatbot-state (score 55, solid no) — expected speech-ai; not solid; accepted page in top 5
- RT425 [page/mixed-natural] "how do i know the model was not trained on my benchmark" → (weak) benchmark-contamination (score 70, solid no) — expected benchmark-contamination; not solid; accepted page in top 5

## Path completeness failures
- RT068 "let my assistant send calendar invites on my behalf" top (weak) authentication-vs-authorization; learn -
- RT070 "what permissions should an email reading agent have" top (weak) connecting-agents-to-apps; learn -

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RT001 | WEAK | page | ai vs machine learning whats the difference | (weak) what-is-ai | 79 | no | — | not solid; accepted page in top 5 |
| RT002 | WEAK | page | explain neural nets like im five | (weak) deep-learning | 56 | no | — | not solid; accepted page in top 5 |
| RT003 | MISS | page | how does chatgpt actually work | (weak) sycophancy | 68 | no | — | no accepted page in top 5 |
| RT004 | WEAK | page | why do language models make stuff up | (weak) ai-hallucinations | 65 | no | — | not solid; accepted page in top 5 |
| RT005 | WEAK | page | wats a token in ai | (weak) tokens | 71 | no | — | not solid; accepted page in top 5 |
| RT006 | WEAK | page | how much text can an llm remember in one go | (weak) go-language | 61 | no | — | not solid; accepted page in top 5 |
| RT007 | WEAK | page | what makes a model generative | (weak) generative-ai | 83 | no | — | not solid; accepted page in top 5 |
| RT008 | PASS | page | is deep learning the same as ml | deep-learning | 89 | yes | — |  |
| RT009 | MISS | page | labelled versus unlabelled data in machine learning | (weak) mongodb | 35 | no | — | no accepted page in top 5 |
| RT010 | WEAK | page | how does a neural network adjust itself while training | (weak) deep-q-networks | 73 | no | — | not solid; accepted page in top 5 |
| RT011 | WEAK | page | my classifier is 99 percent on training data and 70 percent on new data | (weak) neural-networks | 54 | no | — | not solid; accepted page in top 5 |
| RT012 | MISS | page | reuse imagenet weights for my own photos | (weak) diffusion-models | 38 | no | — | no accepted page in top 5 |
| RT013 | WEAK | page | robot dog learning to walk by trial and error | (weak) imitation-learning | 56 | no | — | not solid; accepted page in top 5 |
| RT014 | WEAK | page | how do image classifiers detect edges and shapes | (weak) object-detection | 65 | no | — | not solid; accepted page in top 5 |
| RT015 | WEAK | page | why did transformers replace lstms | (weak) recurrent-neural-networks | 74 | no | — | not solid; accepted page in top 5 |
| RT016 | MISS | page | attention is all you need explained simply | (weak) context-windows | 67 | no | — | no accepted page in top 5 |
| RT017 | PASS | page | what is a latent space | variational-autoencoders | 91 | yes | — |  |
| RT018 | MISS | page | how do generative models make pictures out of noise | (weak) generative-ai | 81 | no | — | no accepted page in top 5 |
| RT019 | MISS | page | two networks competing to make fake images | (weak) convolutional-neural-networks | 68 | no | — | no accepted page in top 5 |
| RT020 | PASS | page | which neural network type handles molecules and social networks | graph-neural-networks | 90 | yes | — |  |
| RT021 | WEAK | page | why does adam use decoupled weight decay | (weak) overfitting-and-regularization | 75 | no | — | not solid; accepted page in top 5 |
| RT022 | WEAK | page | how does ppo clip the policy update | (weak) proximal-policy-optimization | 82 | no | — | not solid; accepted page in top 5 |
| RT023 | WEAK | page | bellman optimality equation intuition | (weak) markov-decision-processes | 70 | no | — | not solid; accepted page in top 5 |
| RT024 | WEAK | page | why does dqn need a target network | (weak) deep-q-networks | 75 | no | — | not solid; accepted page in top 5 |
| RT025 | MISS | page | hey can you tell me what unsupervised learning even is | (weak) ai-hallucinations | 65 | no | — | no accepted page in top 5 |
| RT026 | WEAK | page | sgd vs adam which one | (weak) backpropagation-and-gradient-descent | 78 | no | — | not solid; accepted page in top 5 |
| RT027 | PASS | page | what is a vae used for | variational-autoencoders | 96 | yes | — |  |
| RT028 | MISS | page | gnn use cases | (weak) microsoft-entra-id | 43 | no | — | no accepted page in top 5 |
| RT029 | PASS | page | cnn or vit for a small dataset | cnn-vs-vision-transformer | 92 | yes | — |  |
| RT030 | WEAK | page | transfomer architecure basics | (weak) transformers | 74 | no | — | not solid; accepted page in top 5 |
| RT031 | PASS | page | reinforcment learning explaned | reinforcement-learning | 89 | yes | — |  |
| RT032 | WEAK | page | embedings vs tokens | (weak) embeddings | 72 | no | — | not solid; accepted page in top 5 |
| RT033 | WEAK | page | what is a prompt and why does wording matter | (weak) common-prompting-mistakes | 81 | no | — | not solid; accepted page in top 5 |
| RT034 | WEAK | page | i need to write a good prompt for summarising legal contracts | (weak) prompt-engineering | 61 | no | — | not solid; accepted page in top 5 |
| RT035 | WEAK | page | what goes in a system prompt for a customer support bot | (weak) system-prompts | 62 | no | — | not solid; accepted page in top 5 |
| RT036 | WEAK | page | the model keeps ignoring my instructions | (weak) common-prompting-mistakes | 73 | no | — | not solid; accepted page in top 5 |
| RT037 | WEAK | page | compare my old system prompt with the new one | (weak) common-prompting-mistakes | 73 | no | — | not solid; accepted page in top 5 |
| RT038 | WEAK | page | how do reasoning models spend extra tokens before answering | (weak) thinking-budgets | 84 | no | — | not solid; accepted page in top 5 |
| RT039 | WEAK | page | majority vote across sampled chains of thought | (weak) self-consistency | 82 | no | — | not solid; accepted page in top 5 |
| RT040 | WEAK | page | step level verifier for maths solutions | (weak) process-reward-model | 76 | no | — | not solid; accepted page in top 5 |
| RT041 | FALSE POSITIVE | page | reward models trained only on final answers | process-reward-model | 87 | yes | — | confident wrong page: process-reward-model |
| RT042 | WEAK | page | rl with unit test rewards for coding models | (weak) reinforcement-learning-for-reasoning | 80 | no | — | not solid; accepted page in top 5 |
| RT043 | WEAK | page | can i read what the model was thinking before it answered | (weak) reasoning-transparency | 76 | no | — | not solid; accepted page in top 5 |
| RT044 | WEAK | page | my output is truncated when using a thinking model | (weak) thinking-budgets | 80 | no | — | not solid; accepted page in top 5 |
| RT045 | WEAK | page | when is a thinking model worth the extra cost | (weak) thinking-budgets | 77 | no | — | not solid; accepted page in top 5 |
| RT046 | FALSE POSITIVE | page | make the model return json that always matches my schema | json-validation | 87 | yes | — | confident wrong page: json-validation |
| RT047 | WEAK | page | how do grammars restrict which tokens a model can sample | (weak) gbnf-grammars | 73 | no | — | not solid; accepted page in top 5 |
| RT048 | PASS | page | json mode or function calling for extraction | structured-outputs | 90 | yes | — |  |
| RT049 | WEAK | page | what does temperature do | (weak) sampling-and-decoding | 73 | no | — | not solid; accepted page in top 5 |
| RT050 | MISS | page | why is the same prompt giving different answers every time | (weak) common-prompting-mistakes | 83 | no | — | no accepted page in top 5 |
| RT051 | WEAK | page | what is rag in simple words | (weak) rag | 78 | no | — | not solid; accepted page in top 5 |
| RT052 | MISS | page | design a pipeline that answers questions from our internal wiki | (weak) agentic-rag | 61 | no | — | no accepted page in top 5 |
| RT053 | MISS | page | how big should my chunks be | (weak) rag-with-python | 61 | no | — | no accepted page in top 5 |
| RT054 | WEAK | page | rag answers sound confident but cite the wrong document | (weak) how-to-reduce-hallucinations | 70 | no | — | not solid; accepted page in top 5 |
| RT055 | WEAK | page | should i fine tune or use retrieval for company docs | (weak) rag-vs-fine-tuning | 78 | no | — | not solid; accepted page in top 5 |
| RT056 | PASS | page | reranking with a cross encoder after bm25 | hybrid-search-and-reranking | 85 | yes | — |  |
| RT057 | PASS | page | multi hop questions over a knowledge graph | graph-rag | 86 | yes | — |  |
| RT058 | WEAK | page | how do i measure how similar two documents are numerically | (weak) embeddings | 62 | no | — | not solid; accepted page in top 5 |
| RT059 | MISS | page | how can a computer know two sentences mean the same thing | (weak) system-prompts | 50 | no | — | no accepted page in top 5 |
| RT060 | PASS | page | store embeddings in postgres | pgvector | 96 | yes | — |  |
| RT061 | PASS | page | can plain postgres handle semantic search or must i add a vector store | pgvector | 91 | yes | — |  |
| RT062 | WEAK | page | which vector store should i pick for a prototype | (weak) choosing-a-vector-store | 82 | no | — | not solid; accepted page in top 5 |
| RT063 | WEAK | page | hnsw vs ivf index tradeoffs | (weak) vector-database-vs-traditional-database | 74 | no | — | not solid; accepted page in top 5 |
| RT064 | FALSE POSITIVE | page | vektor databse basics | vector-database-vs-traditional-database | 89 | yes | — | confident wrong page: vector-database-vs-traditional-database |
| RT065 | PASS | page | what is an ai agent | ai-agents | 95 | yes | — |  |
| RT066 | WEAK | page | is a bot that only answers questions already an agent | (weak) agent-protocol-landscape | 62 | no | — | not solid; accepted page in top 5 |
| RT067 | PASS | page | i want an ai agent that can read gmail | gmail-for-ai-agents | 88 | yes | — |  |
| RT068 | MISS | page | let my assistant send calendar invites on my behalf | (weak) authentication-vs-authorization | 69 | no | — | no accepted page in top 5 |
| RT069 | WEAK | page | how do i connect an ai agent to slack and jira | (weak) ai-agents | 58 | no | — | not solid; accepted page in top 5 |
| RT070 | WEAK | page | what permissions should an email reading agent have | (weak) connecting-agents-to-apps | 76 | no | — | not solid; accepted page in top 5 |
| RT071 | WEAK | page | can a malicious email hijack my agent | (weak) mcp-security | 82 | no | — | not solid; accepted page in top 5 |
| RT072 | WEAK | page | how do agents decide which tool to call | (weak) agent-tools | 76 | no | — | not solid; accepted page in top 5 |
| RT073 | WEAK | page | my agent gets stuck repeating the same step | (weak) ai-agents | 69 | no | — | not solid; accepted page in top 5 |
| RT074 | MISS | page | agent forgets what we decided yesterday | (weak) ai-agents | 60 | no | — | no accepted page in top 5 |
| RT075 | WEAK | page | should i use several agents or one | (weak) ai-agent-vs-chatbot | 67 | no | — | not solid; accepted page in top 5 |
| RT076 | PASS | page | which framework for a production agent | choosing-an-agent-framework | 85 | yes | — |  |
| RT077 | WEAK | page | langgraph versus crewai | (weak) crewai | 73 | no | — | not solid; accepted page in top 5 |
| RT078 | MISS | page | do i even need langchain | (weak) python-for-ai | 70 | no | — | no accepted page in top 5 |
| RT079 | WEAK | page | retrieval where the model decides to search again if results look poor | (weak) agentic-rag | 81 | no | — | not solid; accepted page in top 5 |
| RT080 | PASS | page | what is the react prompting pattern for agents | react-agent-pattern | 89 | yes | — |  |
| RT081 | MISS | page | i need a plan for who does what between agents handling support tickets | (weak) python-ai-libraries | 65 | no | — | no accepted page in top 5 |
| RT082 | WEAK | page | how do agent evaluation harnesses score tool trajectories | (weak) agent-evaluation | 78 | no | — | not solid; accepted page in top 5 |
| RT083 | MISS | page | i keep hearing about mcp, what problem does it solve | (weak) react-agent-pattern | 52 | no | — | no accepted page in top 5 |
| RT084 | PASS | page | why would i build an mcp server | mcp-servers-and-clients | 90 | yes | — |  |
| RT085 | MISS | page | why not just call the api directly instead of mcp | (weak) function-calling-vs-mcp | 80 | no | — | no accepted page in top 5 |
| RT086 | PASS | page | mcp or plain function calling for my app | function-calling-vs-mcp | 91 | yes | — |  |
| RT087 | MISS | page | is it safe to install a random mcp server from github | (weak) mcp-servers-and-clients | 83 | no | — | no accepted page in top 5 |
| RT088 | PASS | page | tool poisoning in mcp | mcp-security | 97 | yes | — |  |
| RT089 | FALSE POSITIVE | page | what is a2a | a2a-vs-mcp | 93 | yes | — | confident wrong page: a2a-vs-mcp |
| RT090 | WEAK | page | are a2a and mcp competitors | (weak) a2a-vs-mcp | 81 | no | — | not solid; accepted page in top 5 |
| RT091 | WEAK | page | how would agents from different vendors collaborate | (weak) a2a-protocol | 78 | no | — | not solid; accepted page in top 5 |
| RT092 | WEAK | page | where is the agent card published | (weak) agent-protocol-landscape | 67 | no | — | not solid; accepted page in top 5 |
| RT093 | WEAK | page | modle context protocal | (weak) mcp | 80 | no | — | not solid; accepted page in top 5 |
| RT094 | PASS | page | how do i call an llm api from python | calling-ai-apis-with-python | 96 | yes | — |  |
| RT095 | PASS | page | build a small rag app in python | rag-with-python | 91 | yes | — |  |
| RT096 | WEAK | page | read a csv and clean it before sending to a model | (weak) python-data-for-ai | 82 | no | — | not solid; accepted page in top 5 |
| RT097 | PASS | page | which python libraries do i need for ai work | python-ai-libraries | 96 | yes | — |  |
| RT098 | WEAK | page | pip install broke my environment | (weak) package-managers | 79 | no | — | not solid; accepted page in top 5 |
| RT099 | WEAK | page | python for machine learning where to begin | (weak) python-for-ai | 74 | no | — | not solid; accepted page in top 5 |
| RT100 | PASS | page | call an ai api from javascript without exposing my key | javascript-for-ai | 89 | yes | — |  |
| RT101 | WEAK | page | type the response from my ai endpoint | (weak) nodejs-for-ai | 67 | no | — | not solid; accepted page in top 5 |
| RT102 | PASS | page | stream tokens to the browser as they arrive | streaming-ai-responses | 88 | yes | — |  |
| RT103 | PASS | page | manage chat message state in react | react-chatbot-state | 92 | yes | — |  |
| RT104 | PASS | page | build a chat ui with react | react-ai-interfaces | 93 | yes | — |  |
| RT105 | PASS | page | what is react used for | react | 94 | yes | — |  |
| RT106 | PASS | page | should i use next.js for an ai chat app | nextjs | 88 | yes | — |  |
| RT107 | WEAK | page | express server that proxies model requests | (weak) express | 84 | no | — | not solid; accepted page in top 5 |
| RT108 | PASS | page | node js streming response | nodejs | 98 | yes | — |  |
| RT109 | PASS | page | why use typescript instead of javascript | typescript | 92 | yes | — |  |
| RT110 | PASS | page | typescript or javascript for a small tool | typescript | 94 | yes | — |  |
| RT111 | PASS | page | what is an api | what-is-an-api | 96 | yes | — |  |
| RT112 | PASS | page | rest vs graphql which one | rest-vs-graphql | 92 | yes | — |  |
| RT113 | MISS | page | what does restful mean | (weak) sycophancy | 58 | no | — | no accepted page in top 5 |
| RT114 | PASS | page | where should i keep my api keys | api-keys | 90 | yes | — |  |
| RT115 | PASS | page | api key versus oauth token | api-authentication | 92 | yes | — |  |
| RT116 | FALSE POSITIVE | page | what is json | json-schema | 93 | yes | — | confident wrong page: json-schema |
| RT117 | WEAK | page | unexpected token in json at position 0 | (weak) structured-outputs | 74 | no | — | not solid; accepted page in top 5 |
| RT118 | PASS | page | validate an api payload against a schema | json-validation | 90 | yes | — |  |
| RT119 | WEAK | page | pretty print and validate this json | json-validation | 87 | yes | — | expected tool not offered: json-formatter |
| RT120 | PASS | page | what is a webhook | webhooks | 96 | yes | — |  |
| RT121 | PASS | page | browser says blocked by cors policy | cors | 96 | yes | — |  |
| RT122 | WEAK | page | what is inside a json web token | (weak) what-is-an-api | 80 | no | — | not solid; accepted page in top 5 |
| RT123 | PASS | page | difference between authentication and authorization | authentication-vs-authorization | 97 | yes | — |  |
| RT124 | PASS | page | what is the oauth authorization code flow | oauth | 97 | yes | — |  |
| RT125 | PASS | page | openid connect vs oauth | openid-connect | 97 | yes | — |  |
| RT126 | PASS | page | when to use sql vs nosql | sql-vs-nosql | 97 | yes | — |  |
| RT127 | PASS | page | what is a relational database | postgresql | 94 | yes | — |  |
| RT128 | WEAK | page | how do i join two tables | (weak) sql | 80 | no | — | not solid; accepted page in top 5 |
| RT129 | PASS | page | postgres or mysql for a new project | postgresql | 94 | yes | — |  |
| RT130 | PASS | page | sqlite for a small app | sqlite | 94 | yes | — |  |
| RT131 | PASS | page | what is redis used for | redis | 90 | yes | — |  |
| RT132 | WEAK | page | what is an orm | (weak) prisma-and-orms | 82 | no | — | not solid; accepted page in top 5 |
| RT133 | PASS | page | which database should an ai app use | postgresql-for-ai-apps | 87 | yes | — |  |
| RT134 | WEAK | page | store chat history for an assistant | (weak) react-chatbot-state | 76 | no | — | not solid; accepted page in top 5 |
| RT135 | PASS | page | what is aws and what are its main services | aws-fundamentals | 90 | yes | — |  |
| RT136 | PASS | page | azure basics for developers | azure-fundamentals | 93 | yes | — |  |
| RT137 | PASS | page | what is gcp | gcp-fundamentals | 91 | yes | — |  |
| RT138 | PASS | page | aws vs azure vs gcp for hosting a model | aws-fundamentals | 87 | yes | — |  |
| RT139 | WEAK | page | my s3 bucket is public by mistake | (weak) aws-fundamentals | 45 | no | — | not solid; accepted page in top 5 |
| RT140 | PASS | page | what is docker | docker | 98 | yes | — |  |
| RT141 | PASS | page | container versus virtual machine | containers | 92 | yes | — |  |
| RT142 | PASS | page | what is ci cd | cicd | 97 | yes | — |  |
| RT143 | WEAK | page | git basics for beginners | (weak) python-for-ai | 83 | no | — | not solid; accepted page in top 5 |
| RT144 | PASS | page | git says i have a merge conflict | git | 90 | yes | — |  |
| RT145 | PASS | page | what is github and how is it different from git | git | 93 | yes | — |  |
| RT146 | WEAK | page | set up automatic tests on every pull request | (weak) ai-agents | 60 | no | — | not solid; accepted page in top 5 |
| RT147 | PASS | page | what are environment variables for | environment-variables | 90 | yes | — |  |
| RT148 | WEAK | page | package an app so it runs the same everywhere | (weak) environment-variables | 81 | no | — | not solid; accepted page in top 5 |
| RT149 | PASS | page | npm install fails with dependency errors | package-managers | 85 | yes | — |  |
| RT150 | PASS | page | what is sharepoint | sharepoint | 98 | yes | — |  |
| RT151 | PASS | page | what is spfx | sharepoint-framework | 89 | yes | — |  |
| RT152 | PASS | page | build my first spfx web part | build-spfx-web-part | 97 | yes | — |  |
| RT153 | PASS | page | sharepont framwork webpart | sharepoint-framework | 95 | yes | — |  |
| RT154 | PASS | page | what is microsoft graph | microsoft-graph | 96 | yes | — |  |
| RT155 | PASS | page | read a user's calendar through microsoft graph | microsoft-graph | 94 | yes | — |  |
| RT156 | PASS | page | what is entra id | microsoft-entra-id | 98 | yes | — |  |
| RT157 | PASS | page | what is power automate and power apps | power-platform | 98 | yes | — |  |
| RT158 | PASS | page | build a teams tab or bot | teams-development | 95 | yes | — |  |
| RT159 | PASS | page | what is microsoft 365 | microsoft-365 | 99 | yes | — |  |
| RT160 | WEAK | page | let a daemon service call graph without a user | (weak) api-keys | 84 | no | — | not solid; accepted page in top 5 |
| RT161 | PASS | page | spfx or power apps for an intranet form | sharepoint | 94 | yes | — |  |
| RT162 | PASS | page | what is an ai framework | what-is-an-ai-framework | 97 | yes | — |  |
| RT163 | PASS | page | what is hugging face | hugging-face | 93 | yes | — |  |
| RT164 | WEAK | page | which sdk should i use to call different models | (weak) ai-sdks | 85 | no | — | not solid; accepted page in top 5 |
| RT165 | PASS | page | what is llamaindex for | llamaindex | 91 | yes | — |  |
| RT166 | PASS | page | langchain or llamaindex for rag | rag-frameworks | 94 | yes | — |  |
| RT167 | WEAK | page | framework where you declare modules and let an optimizer tune the prompts | (weak) dspy | 64 | no | — | not solid; accepted page in top 5 |
| RT168 | FALSE POSITIVE | page | microsoft sdk for plugging llms into dotnet apps | ai-sdks | 87 | yes | — | confident wrong page: ai-sdks |
| RT169 | PASS | page | what is the openai agents sdk | openai-agents-sdk | 98 | yes | — |  |
| RT170 | PASS | page | what is autogen | autogen | 94 | yes | — |  |
| RT171 | WEAK | page | easiest way to pull and chat with an open model on my own pc | (weak) local-ai-vs-cloud-ai | 71 | no | — | not solid; accepted page in top 5 |
| RT172 | WEAK | page | run an llm on my laptop without a gpu | (weak) vllm | 78 | no | — | not solid; accepted page in top 5 |
| RT173 | MISS | page | serve a model to hundreds of users | (weak) local-ai | 70 | no | — | no accepted page in top 5 |
| RT174 | WEAK | page | ollama versus vllm | (weak) local-runtimes-compared | 84 | no | — | not solid; accepted page in top 5 |
| RT175 | PASS | page | what is gguf | llama-cpp | 90 | yes | — |  |
| RT176 | PASS | page | what is onnx | onnx-runtime | 90 | yes | — |  |
| RT177 | MISS | page | how do i run a model in the browser | (weak) javascript-for-ai | 76 | no | — | no accepted page in top 5 |
| RT178 | WEAK | page | why use pytorch | (weak) pytorch | 57 | no | — | not solid; accepted page in top 5 |
| RT179 | WEAK | page | cuda out of memory when loading a 13b model | (weak) gpus-and-ai-accelerators | 83 | no | — | not solid; accepted page in top 5 |
| RT180 | WEAK | page | can i run ai privately on my own machine | (weak) local-ai | 50 | no | — | not solid; accepted page in top 5 |
| RT181 | MISS | page | local model or cloud api for sensitive documents | (weak) gcp-fundamentals | 76 | no | — | no accepted page in top 5 |
| RT182 | WEAK | page | are downloadable models the same as open source | (weak) open-weights-models | 78 | no | — | not solid; accepted page in top 5 |
| RT183 | WEAK | page | tiny llms that run on a phone | (weak) small-language-models | 74 | no | — | not solid; accepted page in top 5 |
| RT184 | PASS | page | what does 4 bit quantization do | quantization | 91 | yes | — |  |
| RT185 | FALSE POSITIVE | page | what is multimodal ai | generative-ai | 85 | yes | — | confident wrong page: generative-ai |
| RT186 | WEAK | page | how do models understand images and text together | (weak) vision-language-models | 84 | no | — | not solid; accepted page in top 5 |
| RT187 | WEAK | page | what is clip in computer vision | (weak) vision-language-models | 82 | no | — | not solid; accepted page in top 5 |
| RT188 | WEAK | page | extract text from scanned invoices | (weak) document-understanding-ai | 83 | no | — | not solid; accepted page in top 5 |
| RT189 | PASS | page | vision transformer vs resnet | cnn-vs-vision-transformer | 98 | yes | — |  |
| RT190 | FALSE POSITIVE | gap | how does object detection like yolo work | object-detection | 94 | yes | — | confident unrelated page: object-detection |
| RT191 | FALSE POSITIVE | gap | opencv tutorial for face detection | object-detection | 90 | yes | — | confident unrelated page: object-detection |
| RT192 | PASS | page | how does speech to text work | speech-ai | 91 | yes | — |  |
| RT193 | WEAK | page | build a voice assistant with an llm | (weak) speech-ai | 75 | no | — | not solid; accepted page in top 5 |
| RT194 | WEAK | page | can ai clone my voice | (weak) speech-ai | 78 | no | — | not solid; accepted page in top 5 |
| RT195 | WEAK | page | what is whisper | (weak) speech-ai | 57 | no | — | not solid; accepted page in top 5 |
| RT196 | PASS | page | how do text to video models work | video-generation-models | 91 | yes | — |  |
| RT197 | PASS | page | how do robots learn from ai | embodied-ai | 91 | yes | — |  |
| RT198 | PASS | page | what is a vla model | vision-language-action-models | 91 | yes | — |  |
| RT199 | WEAK | page | teaching a robot by demonstration | (weak) imitation-learning | 57 | no | — | not solid; accepted page in top 5 |
| RT200 | WEAK | page | my policy works in the simulator but not on hardware | (weak) sim-to-real-transfer | 69 | no | — | not solid; accepted page in top 5 |
| RT201 | MISS | page | ai that imagines future states to plan actions | (weak) ai-agents | 82 | no | — | no accepted page in top 5 |
| RT202 | FALSE POSITIVE | gap | how do i program a robot with ros | robot-operating-system | 95 | yes | — | confident unrelated page: robot-operating-system |
| RT203 | PASS | gap | how do self driving cars work | (weak) world-models | 52 | no | — | transparent non-answer |
| RT204 | WEAK | page | text hidden in a web page that tells my assistant to misbehave | (weak) rag | 65 | no | — | not solid; accepted page in top 5 |
| RT205 | PASS | page | ignore previous instructions attack | prompt-injection | 88 | yes | — |  |
| RT206 | WEAK | page | is it ok to paste customer data into chatgpt | (weak) oauth-for-ai-agents | 64 | no | — | not solid; accepted page in top 5 |
| RT207 | MISS | page | remove secrets from a log before sharing it with an ai | (weak) gmail-for-ai-agents | 74 | no | — | no accepted page in top 5 |
| RT208 | WEAK | page | standard checklist of security risks for generative ai apps | (weak) nist-ai-rmf | 84 | no | — | not solid; accepted page in top 5 |
| RT209 | WEAK | page | how do i red team my chatbot | (weak) red-teaming | 76 | no | — | not solid; accepted page in top 5 |
| RT210 | WEAK | page | how do guardrails stop harmful output | (weak) ai-guardrails | 85 | no | — | not solid; accepted page in top 5 |
| RT211 | WEAK | page | how do i sandbox code the model writes | (weak) code-execution-sandboxing | 80 | no | — | not solid; accepted page in top 5 |
| RT212 | MISS | page | can i tell if an image was made by ai | (weak) video-generation-models | 60 | no | — | no accepted page in top 5 |
| RT213 | WEAK | page | what is jailbreaking a model | (weak) red-teaming | 75 | no | — | not solid; accepted page in top 5 |
| RT214 | FALSE POSITIVE | page | least privilege design for tool using agents | mcp-security | 88 | yes | — | confident wrong page: mcp-security |
| RT215 | MISS | page | how do i know if my ai feature is any good | (weak) sycophancy | 66 | no | — | no accepted page in top 5 |
| RT216 | WEAK | page | what does a high score on the 57 subject multiple choice benchmark tell me | (weak) mmlu | 84 | no | — | not solid; accepted page in top 5 |
| RT217 | WEAK | page | why are leaderboard rankings misleading | (weak) human-preference-evaluation | 66 | no | — | not solid; accepted page in top 5 |
| RT218 | WEAK | page | using one model to grade another | (weak) gsm8k-and-math-benchmarks | 60 | no | — | not solid; accepted page in top 5 |
| RT219 | MISS | page | build a test set for my rag bot | (weak) rag-frameworks | 56 | no | — | no accepted page in top 5 |
| RT220 | WEAK | page | which metrics for a classifier with rare positives | (weak) evaluation-metrics-for-ai | 63 | no | — | not solid; accepted page in top 5 |
| RT221 | WEAK | page | benchmark where models fix real github issues | (weak) swe-bench | 71 | no | — | not solid; accepted page in top 5 |
| RT222 | MISS | page | check whether each claim is backed by the source text | (weak) agentic-workflows | 66 | no | — | no accepted page in top 5 |
| RT223 | PASS | page | how are chatbot elo rankings made | human-preference-evaluation | 94 | yes | — |  |
| RT224 | WEAK | page | how do teams keep ml models running reliably after launch | (weak) local-ai | 62 | no | — | not solid; accepted page in top 5 |
| RT225 | WEAK | page | track experiments and register models | (weak) mlflow | 83 | no | — | not solid; accepted page in top 5 |
| RT226 | WEAK | page | my model got worse after three months in production | (weak) model-drift-and-monitoring | 66 | no | — | not solid; accepted page in top 5 |
| RT227 | MISS | page | log prompts and tokens in production | (weak) model-apis | 62 | no | — | no accepted page in top 5 |
| RT228 | WEAK | page | how many gpus do i need to serve a 70b model | (weak) vllm | 76 | no | — | not solid; accepted page in top 5 |
| RT229 | WEAK | page | how to split training across several gpus | (weak) distributed-training | 83 | no | — | not solid; accepted page in top 5 |
| RT230 | WEAK | page | cut my llm bill | (weak) llm-cost-optimization | 62 | no | — | not solid; accepted page in top 5 |
| RT231 | PASS | page | what is ray used for | ray | 94 | yes | — |  |
| RT232 | MISS | page | who signs off on ai use inside a company | (weak) azure-fundamentals | 73 | no | — | no accepted page in top 5 |
| RT233 | PASS | page | does the eu ai act apply to my startup | eu-ai-act | 89 | yes | — |  |
| RT234 | PASS | page | what is the nist ai risk framework | nist-ai-rmf | 98 | yes | — |  |
| RT235 | FALSE POSITIVE | page | certifiable standard for managing ai in an organisation | ai-governance | 89 | yes | — | confident wrong page: ai-governance |
| RT236 | WEAK | page | documentation template for a released model | (weak) model-cards | 63 | no | — | not solid; accepted page in top 5 |
| RT237 | MISS | page | are my model's error rates different across demographic groups | (weak) human-preference-evaluation | 48 | no | — | no accepted page in top 5 |
| RT238 | PASS | gap | what is gdpr and does it cover ai training data | (weak) gdpr-and-ai | 82 | no | — | transparent non-answer |
| RT239 | PASS | gap | ai regulation in the united states | (weak) eu-ai-act | 82 | no | — | transparent non-answer |
| RT240 | PASS | page | what is sycophancy | sycophancy | 92 | yes | — |  |
| RT241 | PASS | page | how is dpo different from rlhf | dpo-vs-rlhf | 96 | yes | — |  |
| RT242 | WEAK | page | why do chatbots flatter users | (weak) ai-alignment | 49 | no | — | not solid; accepted page in top 5 |
| RT243 | PASS | page | what does alignment mean for ai | ai-alignment | 85 | yes | — |  |
| RT244 | PASS | page | reward hacking examples | reward-hacking | 86 | yes | — |  |
| RT245 | PASS | page | ai critiques its own answers using written principles | constitutional-ai-and-rlaif | 86 | yes | — |  |
| RT246 | MISS | page | can we see inside a neural network | (weak) convolutional-neural-networks | 72 | no | — | no accepted page in top 5 |
| RT247 | PASS | page | predict 3d structure from an amino acid sequence | alphafold | 91 | yes | — |  |
| RT248 | PASS | page | neural networks that respect physics equations | physics-informed-neural-networks | 90 | yes | — |  |
| RT249 | PASS | page | can machine learning forecast weather | ai-weather-forecasting | 95 | yes | — |  |
| RT250 | WEAK | page | ai for finding new battery materials | (weak) ai-materials-discovery | 65 | no | — | not solid; accepted page in top 5 |
| RT251 | PASS | page | ai in drug discovery | ai-drug-discovery | 95 | yes | — |  |
| RT252 | PASS | page | model with many experts but only a few active per token | mixture-of-experts | 89 | yes | — |  |
| RT253 | PASS | page | what are state space models and mamba | state-space-models | 97 | yes | — |  |
| RT254 | WEAK | page | how does a kv cache save compute | (weak) kv-cache | 77 | no | — | not solid; accepted page in top 5 |
| RT255 | WEAK | page | what is flash attention | (weak) flash-attention | 71 | no | — | not solid; accepted page in top 5 |
| RT256 | WEAK | page | how do transformers know word order | (weak) context-windows | 65 | no | — | not solid; accepted page in top 5 |
| RT257 | PASS | page | bert versus gpt style models | encoder-decoder-vs-decoder-only | 93 | yes | — |  |
| RT258 | WEAK | page | does making llms bigger improve them predictably | (weak) scaling-laws | 82 | no | — | not solid; accepted page in top 5 |
| RT259 | MISS | page | how are base models turned into chat assistants | (weak) multimodal-ai | 51 | no | — | no accepted page in top 5 |
| RT260 | WEAK | page | fine tune a 7b model on a single consumer gpu | (weak) quantization | 81 | no | — | not solid; accepted page in top 5 |
| RT261 | WEAK | page | distilling a big model into a small one | (weak) knowledge-distillation | 57 | no | — | not solid; accepted page in top 5 |
| RT262 | PASS | page | small draft model proposes tokens a big model verifies | speculative-decoding | 88 | yes | — |  |
| RT263 | WEAK | page | how does prompt caching reduce cost | (weak) prompt-caching | 84 | no | — | not solid; accepted page in top 5 |
| RT264 | WEAK | page | manage what goes into the context window for a long running agent | (weak) context-engineering | 69 | no | — | not solid; accepted page in top 5 |
| RT265 | WEAK | page | what are open source models like llama | (weak) local-llm-runtimes | 76 | no | — | not solid; accepted page in top 5 |
| RT266 | MISS | page | how do i get started with ai | (weak) llm-observability | 65 | no | — | no accepted page in top 5 |
| RT267 | WEAK | page | tell me about agents | (weak) ai-agents | 68 | no | — | not solid; accepted page in top 5 |
| RT268 | FALSE POSITIVE | page | ai security | ai-governance | 89 | yes | — | confident wrong page: ai-governance |
| RT269 | WEAK | page | best way to use ai at work | (weak) local-ai | 62 | no | — | not solid; accepted page in top 5 |
| RT270 | PASS | page | vectors | vector-databases | 91 | yes | — |  |
| RT271 | WEAK | page | rag vs | (weak) rag-frameworks | 78 | no | — | not solid; accepted page in top 5 |
| RT272 | PASS | neg | models | (weak) small-language-models | 76 | no | — | no confident answer |
| RT273 | FALSE POSITIVE | neg | learning | deep-learning | 87 | yes | — | confident answer for out-of-scope query: deep-learning |
| RT274 | PASS | neg | explain it simply please | (weak) how-to-reduce-hallucinations | 74 | no | — | no confident answer |
| RT275 | PASS | neg | best one | (weak) best-of-n-sampling | 80 | no | — | no confident answer |
| RT276 | PASS | neg | help with my code | (weak) system-prompts | 61 | no | — | no confident answer |
| RT277 | PASS | neg | it does not work | (weak) python-ai-libraries | 60 | no | — | no confident answer |
| RT278 | WEAK | page | llm rag mcp relationship | (weak) mcp | 70 | no | — | not solid; accepted page in top 5 |
| RT279 | PASS | gap | what do nlp and nlu mean | (weak) grammar-guided-generation | 59 | no | — | transparent non-answer |
| RT280 | WEAK | page | gpu vs tpu | (weak) gpus-and-ai-accelerators | 78 | no | — | not solid; accepted page in top 5 |
| RT281 | WEAK | page | what is hitl in ai workflows | (weak) agentic-workflows | 78 | no | — | not solid; accepted page in top 5 |
| RT282 | PASS | page | what is bleu and rouge | evaluation-metrics-for-ai | 96 | yes | — |  |
| RT283 | WEAK | page | asr vs tts | (weak) speech-ai | 51 | no | — | not solid; accepted page in top 5 |
| RT284 | PASS | gap | spa vs ssr | (weak) nextjs | 53 | no | — | transparent non-answer |
| RT285 | WEAK | page | crud api example | (weak) what-is-an-api | 79 | no | — | not solid; accepted page in top 5 |
| RT286 | PASS | gap | sso with saml or oidc | openid-connect | 86 | yes | — | nearby page: openid-connect |
| RT287 | MISS | page | oss vs proprietary models | (weak) semantic-kernel | 62 | no | — | no accepted page in top 5 |
| RT288 | WEAK | page | dockr container networking | (weak) docker | 85 | no | — | not solid; accepted page in top 5 |
| RT289 | PASS | page | postgress vs mysql | postgresql | 95 | yes | — |  |
| RT290 | PASS | gap | kubenetes basics | (weak) kubernetes | 85 | no | — | transparent non-answer |
| RT291 | MISS | page | langchian agents | (weak) openai-agents-sdk | 85 | no | — | no accepted page in top 5 |
| RT292 | PASS | page | hugging fase models | hugging-face | 89 | yes | — |  |
| RT293 | WEAK | page | fine tunning vs prompting | (weak) lora-vs-full-fine-tuning | 85 | no | — | not solid; accepted page in top 5 |
| RT294 | WEAK | page | halucination in llms | (weak) ai-hallucinations | 85 | no | — | not solid; accepted page in top 5 |
| RT295 | WEAK | page | guardrials for llm apps | (weak) ai-guardrails | 79 | no | — | not solid; accepted page in top 5 |
| RT296 | FALSE POSITIVE | gap | how do i run a kubernetes cluster | kubernetes | 88 | yes | — | confident unrelated page: kubernetes |
| RT297 | PASS | gap | what is a helm chart | (weak) kubernetes | 79 | no | — | transparent non-answer |
| RT298 | PASS | gap | terraform vs pulumi | (weak) framework-vs-direct-api | 64 | no | — | transparent non-answer |
| RT299 | PASS | gap | how do i configure nginx as a reverse proxy | (weak) streaming-ai-with-nodejs | 63 | no | — | transparent non-answer |
| RT300 | PASS | gap | linux command line cheat sheet | (weak) docker | 53 | no | — | transparent non-answer |
| RT301 | PASS | gap | what is a service mesh | (weak) gcp-fundamentals | 59 | no | — | transparent non-answer |
| RT302 | PASS | gap | prometheus and grafana monitoring | model-drift-and-monitoring | 92 | yes | — | nearby page: model-drift-and-monitoring |
| RT303 | PASS | gap | vue vs angular | (weak) sampling-and-decoding | 54 | no | — | transparent non-answer |
| RT304 | PASS | gap | how do i write unit tests with jest | (weak) humaneval | 71 | no | — | transparent non-answer |
| RT305 | PASS | gap | what is a monorepo | (weak) generative-ai | 55 | no | — | transparent non-answer |
| RT306 | FALSE POSITIVE | gap | vs code extensions for python | python-ai-libraries | 88 | yes | — | confident unrelated page: python-ai-libraries |
| RT307 | PASS | gap | what is graphql federation | (weak) rest-vs-graphql | 32 | no | — | transparent non-answer |
| RT308 | PASS | gap | grpc vs rest | (weak) rest-vs-graphql | 85 | no | — | transparent non-answer |
| RT309 | PASS | gap | how do i set up tls certificates | (weak) authentication-vs-authorization | 45 | no | — | transparent non-answer |
| RT310 | PASS | gap | what is apache kafka | (weak) openai-agents-sdk | 47 | no | — | transparent non-answer |
| RT311 | PASS | gap | data warehouse vs data lake | (weak) gcp-fundamentals | 57 | no | — | transparent non-answer |
| RT312 | PASS | gap | what is federated learning | (weak) deep-q-networks | 36 | no | — | transparent non-answer |
| RT313 | PASS | gap | differential privacy explained | (weak) physics-informed-neural-networks | 68 | no | — | transparent non-answer |
| RT314 | PASS | gap | how does a recommender system work | (weak) structured-outputs | 44 | no | — | transparent non-answer |
| RT315 | FALSE POSITIVE | gap | time series forecasting with arima | ai-weather-forecasting | 86 | yes | — | confident unrelated page: ai-weather-forecasting |
| RT316 | PASS | gap | what is automl | (weak) generative-ai | 55 | no | — | transparent non-answer |
| RT317 | PASS | gap | how do i label training data | (weak) ai-weather-forecasting | 58 | no | — | transparent non-answer |
| RT318 | FALSE POSITIVE | gap | what is causal inference | encoder-decoder-vs-decoder-only | 90 | yes | — | confident unrelated page: encoder-decoder-vs-decoder-only |
| RT319 | PASS | gap | classic keyword weighting before neural embeddings | (weak) embeddings | 68 | no | — | transparent non-answer |
| RT320 | PASS | gap | what is the best ai coding assistant | (weak) ai-agent-vs-chatbot | 76 | no | — | transparent non-answer |
| RT321 | PASS | gap | cursor vs copilot | (weak) html-and-css | 39 | no | — | transparent non-answer |
| RT322 | PASS | gap | what is the current top model on the leaderboard | benchmarks-and-leaderboards | 86 | yes | — | nearby page: benchmarks-and-leaderboards |
| RT323 | PASS | gap | how many parameters does the newest model have | (weak) world-models | 40 | no | — | transparent non-answer |
| RT324 | PASS | gap | when does the next frontier model release | (weak) ai-agents | 59 | no | — | transparent non-answer |
| RT325 | PASS | gap | how do i use azure devops pipelines | (weak) mlops | 69 | no | — | transparent non-answer |
| RT326 | PASS | gap | power bi dashboards | power-platform | 91 | yes | — | nearby page: power-platform |
| RT327 | PASS | gap | how do i migrate sharepoint on premises to online | (weak) sharepoint | 83 | no | — | transparent non-answer |
| RT328 | PASS | gap | what is a sharepoint site collection | sharepoint | 93 | yes | — | nearby page: sharepoint |
| RT329 | PASS | neg | transformer toy | (weak) transformers | 75 | no | — | no confident answer |
| RT330 | PASS | neg | mamba snake | (weak) state-space-models | 59 | no | — | no confident answer |
| RT331 | PASS | neg | python pet | (weak) python | 64 | no | — | no confident answer |
| RT332 | FALSE POSITIVE | neg | react to this message | react-chatbot-state | 92 | yes | — | confident answer for out-of-scope query: react-chatbot-state |
| RT333 | PASS | neg | docker clothing | (weak) docker | 65 | no | — | no confident answer |
| RT334 | PASS | neg | agent real estate | (weak) autogen | 65 | no | — | no confident answer |
| RT335 | PASS | neg | model train hobby | (weak) knowledge-distillation | 47 | no | — | no confident answer |
| RT336 | PASS | neg | java coffee beans | (weak) java | 47 | no | — | no confident answer |
| RT337 | PASS | neg | ruby gemstone ring price | (weak) ray | 38 | no | — | no confident answer |
| RT338 | PASS | neg | swift taylor concert tickets | (weak) ai-agents | 41 | no | — | no confident answer |
| RT339 | PASS | neg | rust remover for bike chains | (weak) rust | 67 | no | — | no confident answer |
| RT340 | PASS | neg | go board game opening strategy | (weak) ai-agents | 50 | no | — | no confident answer |
| RT341 | PASS | neg | kotlin island vacation | (weak) java | 32 | no | — | no confident answer |
| RT342 | PASS | neg | oracle of delphi history | (weak) microsoft-365 | 56 | no | — | no confident answer |
| RT343 | PASS | neg | spark plug gap size | (weak) vision-transformers | 39 | no | — | no confident answer |
| RT344 | PASS | neg | panda zoo opening hours | (weak) package-managers | 38 | no | — | no confident answer |
| RT345 | FALSE POSITIVE | neg | git gud meaning | git | 85 | yes | — | confident answer for out-of-scope query: git |
| RT346 | FALSE POSITIVE | neg | node of ranvier function | nodejs | 87 | yes | — | confident answer for out-of-scope query: nodejs |
| RT347 | PASS | neg | cloud seeding rain | (weak) local-ai-vs-cloud-ai | 47 | no | — | no confident answer |
| RT348 | PASS | neg | azure blue paint colour | (weak) docker | 48 | no | — | no confident answer |
| RT349 | PASS | neg | bert and ernie sesame street | (weak) encoder-decoder-vs-decoder-only | 47 | no | — | no confident answer |
| RT350 | PASS | neg | llama farm wool prices | (weak) local-llm-runtimes | 58 | no | — | no confident answer |
| RT351 | PASS | neg | claude monet water lilies | (weak) transformers | 35 | no | — | no confident answer |
| RT352 | PASS | neg | gemini star sign compatibility | (weak) microsoft-entra-id | 40 | no | — | no confident answer |
| RT353 | PASS | neg | rag doll sewing pattern | (weak) rag-frameworks | 61 | no | — | no confident answer |
| RT354 | PASS | neg | vector graphics for a logo | (weak) choosing-a-vector-store | 65 | no | — | no confident answer |
| RT355 | PASS | neg | token of appreciation gift ideas | (weak) tokens | 45 | no | — | no confident answer |
| RT356 | PASS | neg | agent smith matrix quotes | (weak) ai-agent-vs-chatbot | 43 | no | — | no confident answer |
| RT357 | PASS | neg | popcorn kernel not popping | (weak) semantic-kernel | 41 | no | — | no confident answer |
| RT358 | PASS | neg | swarm of bees in my garden | (weak) openai-agents-sdk | 39 | no | — | no confident answer |
| RT359 | PASS | neg | proxy voting at a shareholder meeting | (weak) self-consistency | 26 | no | — | no confident answer |
| RT360 | PASS | neg | bearer bonds explained | (weak) api-authentication | 44 | no | — | no confident answer |
| RT361 | PASS | neg | oil pipeline construction jobs | (weak) distributed-training | 55 | no | — | no confident answer |
| RT362 | PASS | neg | cookie recipe chocolate chip | (weak) hugging-face | 44 | no | — | no confident answer |
| RT363 | PASS | neg | diffusion of heat in metal | (weak) diffusion-models | 57 | no | — | no confident answer |
| RT364 | PASS | neg | attention deficit in adults | (weak) overfitting-and-regularization | 43 | no | — | no confident answer |
| RT365 | PASS | neg | neural pathways in the brain after stroke | (weak) neural-networks | 63 | no | — | no confident answer |
| RT366 | PASS | neg | reinforcement learning in child psychology rewards | (weak) reinforcement-learning | 81 | no | — | no confident answer |
| RT367 | PASS | neg | unsupervised learning at home for kids | (weak) deep-learning | 51 | no | — | no confident answer |
| RT368 | PASS | neg | embedding a youtube video in my wordpress site | (weak) streaming-ai-responses | 53 | no | — | no confident answer |
| RT369 | PASS | neg | vector in physics velocity and force | (weak) physics-informed-neural-networks | 66 | no | — | no confident answer |
| RT370 | PASS | neg | distillation of whisky at home | (weak) knowledge-distillation | 73 | no | — | no confident answer |
| RT371 | PASS | neg | dropout rate at university | (weak) gsm8k-and-math-benchmarks | 47 | no | — | no confident answer |
| RT372 | PASS | neg | tensor in general relativity | (weak) distributed-training | 81 | no | — | no confident answer |
| RT373 | PASS | neg | clip art for presentations | (weak) vision-language-models | 52 | no | — | no confident answer |
| RT374 | PASS | neg | chain link fence installation | (weak) kubernetes | 38 | no | — | no confident answer |
| RT375 | PASS | neg | whisper in my ear lyrics | (weak) speech-ai | 62 | no | — | no confident answer |
| RT376 | PASS | neg | llama drama kids book | (weak) go-language | 48 | no | — | no confident answer |
| RT377 | PASS | neg | mistral wind south of france | (weak) open-weights-models | 41 | no | — | no confident answer |
| RT378 | PASS | neg | falcon heavy launch schedule | (weak) kubernetes | 50 | no | — | no confident answer |
| RT379 | PASS | neg | bard of avon poetry | (weak) package-managers | 33 | no | — | no confident answer |
| RT380 | PASS | neg | perplexity about my career choice | (weak) evaluation-metrics-for-ai | 72 | no | — | no confident answer |
| RT381 | PASS | neg | sam altman net worth | (weak) object-detection | 38 | no | — | no confident answer |
| RT382 | PASS | neg | best hiking boots under 150 | (weak) open-weights-models | 45 | no | — | no confident answer |
| RT383 | PASS | neg | how to file self assessment tax | (weak) eu-ai-act | 72 | no | — | no confident answer |
| RT384 | PASS | neg | recipe for lasagna | (weak) cnn-vs-vision-transformer | 51 | no | — | no confident answer |
| RT385 | PASS | neg | who invented the telephone | (weak) agent-memory | 40 | no | — | no confident answer |
| RT386 | PASS | neg | translate good morning to french | (weak) rag-vs-fine-tuning | 54 | no | — | no confident answer |
| RT387 | PASS | neg | symptoms of the flu | (weak) red-teaming | 34 | no | — | no confident answer |
| RT388 | PASS | neg | mortgage rates this week | (weak) redis | 46 | no | — | no confident answer |
| RT389 | PASS | neg | plan a 10k race pace strategy | (weak) agent-planning | 60 | no | — | no confident answer |
| RT390 | PASS | neg | football scores tonight | (weak) human-preference-evaluation | 48 | no | — | no confident answer |
| RT391 | PASS | neg | how to repot a succulent | (weak) sycophancy | 54 | no | — | no confident answer |
| RT392 | PASS | neg | nvidia stock forecast | (weak) ai-weather-forecasting | 60 | no | — | no confident answer |
| RT393 | PASS | neg | should i buy bitcoin | (weak) gpus-and-ai-accelerators | 62 | no | — | no confident answer |
| RT394 | PASS | neg | best laptop for students | (weak) local-ai | 38 | no | — | no confident answer |
| RT395 | PASS | neg | how to write a wedding speech | (weak) speech-ai | 54 | no | — | no confident answer |
| RT396 | PASS | neg | write me a poem about the sea | (weak) tokens | 50 | no | — | no confident answer |
| RT397 | PASS | neg | tell me a joke | (weak) ai-hallucinations | 63 | no | — | no confident answer |
| RT398 | PASS | neg | what is the meaning of life | (weak) embeddings | 56 | no | — | no confident answer |
| RT399 | PASS | neg | summarise this article for me | (weak) prompt-engineering | 72 | no | — | no confident answer |
| RT400 | PASS | neg | is it going to rain tomorrow | (weak) java | 50 | no | — | no confident answer |
| RT401 | PASS | neg | how do i fix a flat bicycle tyre | (weak) local-ai | 34 | no | — | no confident answer |
| RT402 | MISS | page | use a model to check my own answers before sending them to a user | (weak) system-prompts | 63 | no | — | no accepted page in top 5 |
| RT403 | WEAK | page | how can i make my chatbot cite its sources | (weak) reasoning-transparency | 66 | no | — | not solid; accepted page in top 5 |
| RT404 | WEAK | page | why does my assistant lose context in long chats | (weak) large-language-models | 66 | no | — | not solid; accepted page in top 5 |
| RT405 | MISS | page | a model that sees my screen and clicks buttons | (weak) model-apis | 77 | no | — | no accepted page in top 5 |
| RT406 | PASS | page | stop the model leaking my system prompt | prompt-injection | 88 | yes | — |  |
| RT407 | PASS | page | compare gpt style and bert style models for classification | encoder-decoder-vs-decoder-only | 85 | yes | — |  |
| RT408 | MISS | page | trace every tool call my agent makes | (weak) webhooks | 64 | no | — | no accepted page in top 5 |
| RT409 | WEAK | page | keep an ai agent from deleting my files | (weak) gmail-for-ai-agents | 71 | no | — | not solid; accepted page in top 5 |
| RT410 | WEAK | page | how do i give an llm access to my database safely | (weak) frontend-and-backend | 63 | no | — | not solid; accepted page in top 5 |
| RT411 | WEAK | page | what is tool calling and how do i implement it | (weak) function-calling | 68 | no | — | not solid; accepted page in top 5 |
| RT412 | MISS | page | how do i let users log in with microsoft to my ai app | (weak) microsoft-graph | 78 | no | — | no accepted page in top 5 |
| RT413 | WEAK | page | difference between ai assistant copilot and agent | (weak) ai-agent-vs-chatbot | 81 | no | — | not solid; accepted page in top 5 |
| RT414 | WEAK | page | how do i chunk pdfs for retrieval | (weak) chunking | 82 | no | — | not solid; accepted page in top 5 |
| RT415 | MISS | page | speed up llm responses without hurting quality | (weak) llm-cost-optimization | 44 | no | — | no accepted page in top 5 |
| RT416 | MISS | page | why does inference get slower with longer prompts | (weak) thinking-budgets | 66 | no | — | no accepted page in top 5 |
| RT417 | WEAK | page | difference between an embedding model and a chat model | (weak) encoder-decoder-vs-decoder-only | 64 | no | — | not solid; accepted page in top 5 |
| RT418 | WEAK | page | what is a good chunk overlap | (weak) chunking | 85 | no | — | not solid; accepted page in top 5 |
| RT419 | WEAK | page | how do i evaluate whether retrieval found the right passage | (weak) rag-evaluation | 81 | no | — | not solid; accepted page in top 5 |
| RT420 | WEAK | page | safe way to let ai write sql | (weak) databases-for-ai-apps | 71 | no | — | not solid; accepted page in top 5 |
| RT421 | WEAK | page | can i run deepseek or llama privately | (weak) gbnf-grammars | 50 | no | — | not solid; accepted page in top 5 |
| RT422 | MISS | page | how do i stop my agent from running up a huge bill | (weak) ai-agent-vs-chatbot | 70 | no | — | no accepted page in top 5 |
| RT423 | MISS | page | model says it cannot see my document but i pasted it | (weak) sql-vs-nosql | 72 | no | — | no accepted page in top 5 |
| RT424 | WEAK | page | ai to turn meeting recordings into notes | (weak) react-chatbot-state | 55 | no | — | not solid; accepted page in top 5 |
| RT425 | WEAK | page | how do i know the model was not trained on my benchmark | (weak) benchmark-contamination | 70 | no | — | not solid; accepted page in top 5 |
| RT426 | MISS | page | how to get consistent structured data out of messy emails | (weak) generative-ai | 62 | no | — | no accepted page in top 5 |
