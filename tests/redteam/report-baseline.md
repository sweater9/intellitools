# Knowledge red-team report — baseline

Dataset: `tests/redteam/frozen-queries.json` sha256 `4982137be9b08e5b5635cf7da758e43f51f0580d5acdb740ad27513aaf026ec0`

Total 426 · PASS 253 · WEAK 68 · MISS 46 · FALSE POSITIVE 59
Pass rate 59.4% · False-positive rate 13.8%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 0/4

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 43 | 42 | 0 | 0 | 1 | 97.7% |
| neg | 79 | 61 | 0 | 0 | 18 | 77.2% |
| page | 304 | 150 | 68 | 46 | 40 | 49.3% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| acronym | 14 | 11 | 1 | 2 | 0 | 78.6% |
| ambiguous-or-off-topic | 73 | 55 | 0 | 0 | 18 | 75.3% |
| architecture | 5 | 0 | 3 | 1 | 1 | 0.0% |
| beginner | 46 | 28 | 9 | 5 | 4 | 60.9% |
| comparison | 9 | 6 | 3 | 0 | 0 | 66.7% |
| concept | 74 | 42 | 13 | 10 | 9 | 56.8% |
| conversational | 3 | 1 | 1 | 1 | 0 | 33.3% |
| coverage-probe | 39 | 38 | 0 | 0 | 1 | 97.4% |
| expert | 16 | 9 | 5 | 0 | 2 | 56.3% |
| implementation | 28 | 10 | 6 | 4 | 8 | 35.7% |
| integration | 5 | 2 | 0 | 1 | 2 | 40.0% |
| mixed-natural | 25 | 5 | 7 | 8 | 5 | 20.0% |
| security | 20 | 12 | 1 | 5 | 2 | 60.0% |
| tech-selection | 1 | 1 | 0 | 0 | 0 | 100.0% |
| troubleshooting | 14 | 6 | 2 | 3 | 3 | 42.9% |
| typo | 16 | 5 | 7 | 2 | 2 | 31.3% |
| vague | 14 | 9 | 3 | 2 | 0 | 64.3% |
| what-to-use | 24 | 13 | 7 | 2 | 2 | 54.2% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 4 | 3 | 1 | 0 | 0 | 75.0% |
| agent | 18 | 4 | 7 | 3 | 4 | 22.2% |
| ai | 37 | 24 | 7 | 4 | 2 | 64.9% |
| amb | 53 | 35 | 0 | 0 | 18 | 66.0% |
| api | 11 | 10 | 0 | 1 | 0 | 90.9% |
| arch | 6 | 5 | 0 | 1 | 0 | 83.3% |
| cloud | 5 | 4 | 1 | 0 | 0 | 80.0% |
| cv | 6 | 4 | 1 | 1 | 0 | 66.7% |
| data | 2 | 2 | 0 | 0 | 0 | 100.0% |
| db | 9 | 5 | 3 | 1 | 0 | 55.6% |
| dev | 15 | 13 | 2 | 0 | 0 | 86.7% |
| devops | 17 | 14 | 1 | 1 | 1 | 82.4% |
| dl | 10 | 5 | 3 | 1 | 1 | 50.0% |
| embed | 2 | 0 | 0 | 2 | 0 | 0.0% |
| eval | 10 | 2 | 2 | 3 | 3 | 20.0% |
| fw | 9 | 6 | 1 | 0 | 2 | 66.7% |
| gov | 8 | 4 | 2 | 2 | 0 | 50.0% |
| js | 3 | 1 | 0 | 0 | 2 | 33.3% |
| json | 4 | 1 | 2 | 0 | 1 | 25.0% |
| llm | 30 | 13 | 7 | 4 | 6 | 43.3% |
| local | 5 | 1 | 3 | 0 | 1 | 20.0% |
| mcp | 7 | 5 | 1 | 0 | 1 | 71.4% |
| mixed | 25 | 5 | 7 | 8 | 5 | 20.0% |
| ml | 7 | 4 | 1 | 1 | 1 | 57.1% |
| mlops | 8 | 6 | 0 | 1 | 1 | 75.0% |
| mm | 2 | 1 | 0 | 1 | 0 | 50.0% |
| ms | 16 | 15 | 1 | 0 | 0 | 93.8% |
| nextjs | 1 | 1 | 0 | 0 | 0 | 100.0% |
| node | 2 | 2 | 0 | 0 | 0 | 100.0% |
| off | 20 | 20 | 0 | 0 | 0 | 100.0% |
| prompt | 4 | 1 | 2 | 1 | 0 | 25.0% |
| python | 6 | 1 | 2 | 0 | 3 | 16.7% |
| rag | 6 | 3 | 2 | 1 | 0 | 50.0% |
| react | 3 | 2 | 0 | 0 | 1 | 66.7% |
| rl | 4 | 2 | 2 | 0 | 0 | 50.0% |
| robot | 7 | 4 | 1 | 1 | 1 | 57.1% |
| runtime | 9 | 6 | 1 | 2 | 0 | 66.7% |
| safety | 7 | 4 | 2 | 0 | 1 | 57.1% |
| science | 5 | 1 | 2 | 0 | 2 | 20.0% |
| sec | 11 | 6 | 1 | 3 | 1 | 54.5% |
| speech | 4 | 3 | 0 | 1 | 0 | 75.0% |
| ts | 2 | 1 | 0 | 1 | 0 | 50.0% |
| vector | 5 | 3 | 0 | 1 | 1 | 60.0% |
| video | 1 | 1 | 0 | 0 | 0 | 100.0% |

## FALSE POSITIVE
- RT006 [page/beginner] "how much text can an llm remember in one go" → large-language-models (score 32, solid yes) — expected context-windows|tokens; confident wrong page: large-language-models
- RT009 [page/beginner] "labelled versus unlabelled data in machine learning" → what-is-ai (score 28, solid yes) — expected supervised-learning|unsupervised-learning; confident wrong page: what-is-ai
- RT020 [page/architecture] "which neural network type handles molecules and social networks" → neural-networks (score 68, solid yes) — expected graph-neural-networks; confident wrong page: neural-networks
- RT042 [page/expert] "rl with unit test rewards for coding models" → reinforcement-learning (score 23, solid yes) — expected reinforcement-learning-for-reasoning; confident wrong page: reinforcement-learning
- RT047 [page/expert] "how do grammars restrict which tokens a model can sample" → tokens (score 34, solid yes) — expected constrained-decoding|grammar-guided-generation; confident wrong page: tokens
- RT050 [page/troubleshooting] "why is the same prompt giving different answers every time" → common-prompting-mistakes (score 55, solid yes) — expected sampling-and-decoding; confident wrong page: common-prompting-mistakes
- RT060 [page/implementation] "store embeddings in postgres" → postgresql (score 67, solid yes) — expected pgvector|postgresql-for-ai-apps|vector-databases; confident wrong page: postgresql
- RT065 [page/beginner] "what is an ai agent" → ai-agent-vs-chatbot (score 58, solid yes) — expected ai-agents; confident wrong page: ai-agent-vs-chatbot
- RT067 [page/integration] "i want an ai agent that can read gmail" → ai-agent-vs-chatbot (score 58, solid yes) — expected gmail-for-ai-agents|connecting-agents-to-apps|oauth-for-ai-agents; confident wrong page: ai-agent-vs-chatbot
- RT069 [page/integration] "how do i connect an ai agent to slack and jira" → ai-agent-vs-chatbot (score 58, solid yes) — expected connecting-agents-to-apps|agent-tools|mcp; confident wrong page: ai-agent-vs-chatbot
- RT076 [page/what-to-use] "which framework for a production agent" → ai-agents (score 29, solid yes) — expected agent-frameworks-compared|choosing-an-agent-framework|langgraph; confident wrong page: ai-agents
- RT087 [page/security] "is it safe to install a random mcp server from github" → mcp (score 55, solid yes) — expected mcp-security; confident wrong page: mcp
- RT094 [page/beginner] "how do i call an llm api from python" → python (score 46, solid yes) — expected calling-ai-apis-with-python|python-for-ai; confident wrong page: python
- RT095 [page/implementation] "build a small rag app in python" → rag (score 50, solid yes) — expected rag-with-python|python-ai-libraries; confident wrong page: rag
- RT097 [page/what-to-use] "which python libraries do i need for ai work" → python (score 48, solid yes) — expected python-ai-libraries|python-for-ai; confident wrong page: python
- RT100 [page/implementation] "call an ai api from javascript without exposing my key" → javascript (score 55, solid yes) — expected calling-ai-apis-with-javascript|javascript-for-ai|nodejs-for-ai|api-keys; confident wrong page: javascript
- RT102 [page/implementation] "stream tokens to the browser as they arrive" → tokens (score 34, solid yes) — expected streaming-ai-responses|streaming-ai-with-nodejs; confident wrong page: tokens
- RT103 [page/implementation] "manage chat message state in react" → react (score 60, solid yes) — expected react-chatbot-state|react-ai-interfaces; confident wrong page: react
- RT117 [page/troubleshooting] "unexpected token in json at position 0" → tokens (score 41, solid yes) — expected json-validation|what-is-json; confident wrong page: tokens
- RT167 [page/concept] "framework where you declare modules and let an optimizer tune the prompts" → backpropagation-and-gradient-descent (score 23, solid yes) — expected dspy; confident wrong page: backpropagation-and-gradient-descent
- RT168 [page/concept] "microsoft sdk for plugging llms into dotnet apps" → large-language-models (score 29, solid yes) — expected semantic-kernel; confident wrong page: large-language-models
- RT183 [page/concept] "tiny llms that run on a phone" → large-language-models (score 29, solid yes) — expected small-language-models; confident wrong page: large-language-models
- RT200 [page/troubleshooting] "my policy works in the simulator but not on hardware" → reinforcement-learning (score 21, solid yes) — expected sim-to-real-transfer; confident wrong page: reinforcement-learning
- RT208 [page/security] "standard checklist of security risks for generative ai apps" → generative-ai (score 52, solid yes) — expected owasp-llm-top-10; confident wrong page: generative-ai
- RT216 [page/concept] "what does a high score on the 57 subject multiple choice benchmark tell me" → benchmarks-and-leaderboards (score 33, solid yes) — expected mmlu; confident wrong page: benchmarks-and-leaderboards
- RT219 [page/implementation] "build a test set for my rag bot" → rag (score 50, solid yes) — expected rag-evaluation|ai-evaluation; confident wrong page: rag
- RT221 [page/concept] "benchmark where models fix real github issues" → github (score 54, solid yes) — expected swe-bench; confident wrong page: github
- RT230 [page/implementation] "cut my llm bill" → large-language-models (score 27, solid yes) — expected llm-cost-optimization|prompt-caching; confident wrong page: large-language-models
- RT246 [page/concept] "can we see inside a neural network" → neural-networks (score 57, solid yes) — expected mechanistic-interpretability; confident wrong page: neural-networks
- RT248 [page/concept] "neural networks that respect physics equations" → neural-networks (score 71, solid yes) — expected physics-informed-neural-networks; confident wrong page: neural-networks
- RT249 [page/concept] "can machine learning forecast weather" → what-is-ai (score 28, solid yes) — expected ai-weather-forecasting; confident wrong page: what-is-ai
- RT258 [page/concept] "does making llms bigger improve them predictably" → large-language-models (score 29, solid yes) — expected scaling-laws; confident wrong page: large-language-models
- RT260 [page/implementation] "fine tune a 7b model on a single consumer gpu" → gpus-and-ai-accelerators (score 46, solid yes) — expected lora-and-peft|fine-tuning; confident wrong page: gpus-and-ai-accelerators
- RT294 [page/typo] "halucination in llms" → large-language-models (score 29, solid yes) — expected ai-hallucinations; confident wrong page: large-language-models
- RT295 [page/typo] "guardrials for llm apps" → large-language-models (score 27, solid yes) — expected ai-guardrails; confident wrong page: large-language-models
- RT297 [gap/coverage-probe] "what is a helm chart" → benchmarks-and-leaderboards (score 21, solid yes) — expected containers|docker; confident unrelated page: benchmarks-and-leaderboards
- RT329 [neg/ambiguous-or-off-topic] "transformer toy" → transformers (score 50, solid yes) — expected none; confident answer for out-of-scope query: transformers
- RT331 [neg/ambiguous-or-off-topic] "python pet" → python (score 46, solid yes) — expected none; confident answer for out-of-scope query: python
- RT332 [neg/ambiguous-or-off-topic] "react to this message" → react (score 54, solid yes) — expected none; confident answer for out-of-scope query: react
- RT333 [neg/ambiguous-or-off-topic] "docker clothing" → docker (score 75, solid yes) — expected none; confident answer for out-of-scope query: docker
- RT336 [neg/ambiguous-or-off-topic] "java coffee beans" → java (score 46, solid yes) — expected none; confident answer for out-of-scope query: java
- RT339 [neg/ambiguous-or-off-topic] "rust remover for bike chains" → rust (score 46, solid yes) — expected none; confident answer for out-of-scope query: rust
- RT345 [neg/ambiguous-or-off-topic] "git gud meaning" → git (score 54, solid yes) — expected none; confident answer for out-of-scope query: git
- RT353 [neg/ambiguous-or-off-topic] "rag doll sewing pattern" → rag (score 50, solid yes) — expected none; confident answer for out-of-scope query: rag
- RT355 [neg/ambiguous-or-off-topic] "token of appreciation gift ideas" → tokens (score 41, solid yes) — expected none; confident answer for out-of-scope query: tokens
- RT364 [neg/ambiguous-or-off-topic] "attention deficit in adults" → transformers (score 34, solid yes) — expected none; confident answer for out-of-scope query: transformers
- RT366 [neg/ambiguous-or-off-topic] "reinforcement learning in child psychology rewards" → reinforcement-learning (score 90, solid yes) — expected none; confident answer for out-of-scope query: reinforcement-learning
- RT367 [neg/ambiguous-or-off-topic] "unsupervised learning at home for kids" → unsupervised-learning (score 82, solid yes) — expected none; confident answer for out-of-scope query: unsupervised-learning
- RT368 [neg/ambiguous-or-off-topic] "embedding a youtube video in my wordpress site" → embeddings (score 44, solid yes) — expected none; confident answer for out-of-scope query: embeddings
- RT370 [neg/ambiguous-or-off-topic] "distillation of whisky at home" → knowledge-distillation (score 60, solid yes) — expected none; confident answer for out-of-scope query: knowledge-distillation
- RT371 [neg/ambiguous-or-off-topic] "dropout rate at university" → overfitting-and-regularization (score 55, solid yes) — expected none; confident answer for out-of-scope query: overfitting-and-regularization
- RT373 [neg/ambiguous-or-off-topic] "clip art for presentations" → contrastive-learning-clip (score 33, solid yes) — expected none; confident answer for out-of-scope query: contrastive-learning-clip
- RT375 [neg/ambiguous-or-off-topic] "whisper in my ear lyrics" → speech-ai (score 55, solid yes) — expected none; confident answer for out-of-scope query: speech-ai
- RT380 [neg/ambiguous-or-off-topic] "perplexity about my career choice" → evaluation-metrics-for-ai (score 64, solid yes) — expected none; confident answer for out-of-scope query: evaluation-metrics-for-ai
- RT409 [page/mixed-natural] "keep an ai agent from deleting my files" → ai-agent-vs-chatbot (score 58, solid yes) — expected integration-permissions|code-execution-sandboxing|agent-tools|ai-guardrails; confident wrong page: ai-agent-vs-chatbot
- RT410 [page/mixed-natural] "how do i give an llm access to my database safely" → large-language-models (score 27, solid yes) — expected agent-tools|integration-permissions|databases-for-ai-apps|function-calling; confident wrong page: large-language-models
- RT415 [page/mixed-natural] "speed up llm responses without hurting quality" → large-language-models (score 27, solid yes) — expected speculative-decoding|model-serving-and-inference|kv-cache; confident wrong page: large-language-models
- RT419 [page/mixed-natural] "how do i evaluate whether retrieval found the right passage" → ai-evaluation (score 56, solid yes) — expected rag-evaluation; confident wrong page: ai-evaluation
- RT425 [page/mixed-natural] "how do i know the model was not trained on my benchmark" → benchmarks-and-leaderboards (score 44, solid yes) — expected benchmark-contamination; confident wrong page: benchmarks-and-leaderboards

## MISS
- RT004 [page/beginner] "why do language models make stuff up" → (weak) small-language-models (score 62, solid no) — expected ai-hallucinations|how-to-reduce-hallucinations; no accepted page in top 5
- RT011 [page/troubleshooting] "my classifier is 99 percent on training data and 70 percent on new data" → (weak) ai-privacy-and-security (score 27, solid no) — expected overfitting-and-regularization; no accepted page in top 5
- RT012 [page/implementation] "reuse imagenet weights for my own photos" → (weak) open-weights-models (score 22, solid no) — expected transfer-learning|convolutional-neural-networks; no accepted page in top 5
- RT014 [page/concept] "how do image classifiers detect edges and shapes" → (weak) contrastive-learning-clip (score 17, solid no) — expected convolutional-neural-networks; no accepted page in top 5
- RT030 [page/typo] "transfomer architecure basics" → (weak) power-platform (score 6, solid no) — expected transformers; no accepted page in top 5
- RT036 [page/troubleshooting] "the model keeps ignoring my instructions" → (weak) model-cards (score 28, solid no) — expected common-prompting-mistakes|system-prompts|prompt-engineering; no accepted page in top 5
- RT043 [page/conversational] "can i read what the model was thinking before it answered" → (weak) model-cards (score 28, solid no) — expected reasoning-transparency|reasoning-models; no accepted page in top 5
- RT052 [page/architecture] "design a pipeline that answers questions from our internal wiki" → (weak) distributed-training (score 8, solid no) — expected rag|chunking|embeddings|vector-databases; no accepted page in top 5
- RT058 [page/concept] "how do i measure how similar two documents are numerically" → (weak) document-understanding-ai (score 26, solid no) — expected embeddings; no accepted page in top 5
- RT059 [page/concept] "how can a computer know two sentences mean the same thing" → (weak) computer-use-agents (score 28, solid no) — expected embeddings; no accepted page in top 5
- RT064 [page/typo] "vektor databse basics" → (weak) power-platform (score 6, solid no) — expected vector-databases; no accepted page in top 5
- RT068 [page/integration] "let my assistant send calendar invites on my behalf" → (weak) ai-agent-vs-chatbot (score 18, solid no) — expected connecting-agents-to-apps|oauth-for-ai-agents|integration-permissions|agent-tools; no accepted page in top 5
- RT071 [page/security] "can a malicious email hijack my agent" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected prompt-injection|gmail-for-ai-agents; no accepted page in top 5
- RT073 [page/troubleshooting] "my agent gets stuck repeating the same step" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected react-agent-pattern|agentic-workflows|ai-agents; no accepted page in top 5
- RT101 [page/implementation] "type the response from my ai endpoint" → (weak) ai-governance (score 50, solid no) — expected typescript-api-client-types|typescript-for-ai; no accepted page in top 5
- RT113 [page/beginner] "what does restful mean" → (weak) open-weights-models (score 4, solid no) — expected rest-apis; no accepted page in top 5
- RT134 [page/implementation] "store chat history for an assistant" → (weak) choosing-a-vector-store (score 20, solid no) — expected databases-for-ai-apps|postgresql-for-ai-apps|agent-memory; no accepted page in top 5
- RT148 [page/implementation] "package an app so it runs the same everywhere" → (weak) package-managers (score 20, solid no) — expected docker|containers; no accepted page in top 5
- RT171 [page/beginner] "easiest way to pull and chat with an open model on my own pc" → (weak) open-weights-models (score 42, solid no) — expected ollama|local-ai; no accepted page in top 5
- RT177 [page/what-to-use] "how do i run a model in the browser" → (weak) model-cards (score 28, solid no) — expected onnx-runtime|local-ai; no accepted page in top 5
- RT186 [page/concept] "how do models understand images and text together" → (weak) reasoning-models (score 40, solid no) — expected vision-language-models|multimodal-ai|contrastive-learning-clip; no accepted page in top 5
- RT194 [page/security] "can ai clone my voice" → (weak) ai-governance (score 50, solid no) — expected speech-ai|c2pa-content-provenance; no accepted page in top 5
- RT201 [page/concept] "ai that imagines future states to plan actions" → (weak) ai-governance (score 50, solid no) — expected world-models; no accepted page in top 5
- RT204 [page/security] "text hidden in a web page that tells my assistant to misbehave" → (weak) build-spfx-web-part (score 30, solid no) — expected prompt-injection; no accepted page in top 5
- RT212 [page/security] "can i tell if an image was made by ai" → (weak) ai-governance (score 50, solid no) — expected c2pa-content-provenance; no accepted page in top 5
- RT213 [page/security] "what is jailbreaking a model" → (weak) model-cards (score 28, solid no) — expected prompt-injection|red-teaming; no accepted page in top 5
- RT215 [page/beginner] "how do i know if my ai feature is any good" → (weak) ai-governance (score 50, solid no) — expected ai-evaluation|llm-benchmarks-vs-task-evals; no accepted page in top 5
- RT218 [page/concept] "using one model to grade another" → (weak) model-apis (score 30, solid no) — expected llm-as-a-judge; no accepted page in top 5
- RT222 [page/what-to-use] "check whether each claim is backed by the source text" → (weak) open-weights-models (score 17, solid no) — expected how-to-reduce-hallucinations|ai-hallucinations|rag-evaluation; no accepted page in top 5
- RT224 [page/beginner] "how do teams keep ml models running reliably after launch" → (weak) small-language-models (score 41, solid no) — expected mlops; no accepted page in top 5
- RT235 [page/concept] "certifiable standard for managing ai in an organisation" → (weak) ai-governance (score 51, solid no) — expected iso-iec-42001; no accepted page in top 5
- RT237 [page/concept] "are my model's error rates different across demographic groups" → (weak) reasoning-models (score 42, solid no) — expected ai-bias-and-fairness; no accepted page in top 5
- RT257 [page/concept] "bert versus gpt style models" → (weak) small-language-models (score 70, solid no) — expected encoder-decoder-vs-decoder-only; no accepted page in top 5
- RT261 [page/concept] "distilling a big model into a small one" → (weak) small-language-models (score 32, solid no) — expected knowledge-distillation; no accepted page in top 5
- RT266 [page/vague] "how do i get started with ai" → (weak) ai-governance (score 50, solid no) — expected what-is-ai|python-for-ai|large-language-models; no accepted page in top 5
- RT267 [page/vague] "tell me about agents" → (weak) openai-agents-sdk (score 36, solid no) — expected ai-agents; no accepted page in top 5
- RT281 [page/acronym] "what is hitl in ai workflows" → (weak) ai-governance (score 50, solid no) — expected agentic-workflows|ai-agents; no accepted page in top 5
- RT287 [page/acronym] "oss vs proprietary models" → (weak) reasoning-models (score 40, solid no) — expected open-weights-models; no accepted page in top 5
- RT402 [page/mixed-natural] "use a model to check my own answers before sending them to a user" → (weak) model-cards (score 28, solid no) — expected ai-guardrails|llm-as-a-judge|how-to-reduce-hallucinations; no accepted page in top 5
- RT403 [page/mixed-natural] "how can i make my chatbot cite its sources" → (weak) ai-agent-vs-chatbot (score 27, solid no) — expected rag|how-to-reduce-hallucinations; no accepted page in top 5
- RT405 [page/mixed-natural] "a model that sees my screen and clicks buttons" → (weak) model-cards (score 28, solid no) — expected computer-use-agents; no accepted page in top 5
- RT407 [page/mixed-natural] "compare gpt style and bert style models for classification" → (weak) small-language-models (score 70, solid no) — expected encoder-decoder-vs-decoder-only; no accepted page in top 5
- RT412 [page/mixed-natural] "how do i let users log in with microsoft to my ai app" → (weak) ai-governance (score 50, solid no) — expected microsoft-entra-id|oauth|openid-connect; no accepted page in top 5
- RT422 [page/mixed-natural] "how do i stop my agent from running up a huge bill" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected llm-cost-optimization|react-agent-pattern|agentic-workflows; no accepted page in top 5
- RT423 [page/mixed-natural] "model says it cannot see my document but i pasted it" → (weak) model-cards (score 28, solid no) — expected context-windows|tokens; no accepted page in top 5
- RT424 [page/mixed-natural] "ai to turn meeting recordings into notes" → (weak) ai-governance (score 50, solid no) — expected speech-ai; no accepted page in top 5

## WEAK
- RT002 [page/beginner] "explain neural nets like im five" → (weak) physics-informed-neural-networks (score 26, solid no) — expected neural-networks|deep-learning; not solid; accepted page in top 5
- RT003 [page/beginner] "how does chatgpt actually work" → (weak) large-language-models (score 59, solid no) — expected large-language-models|transformers|generative-ai; not solid; accepted page in top 5
- RT007 [page/beginner] "what makes a model generative" → (weak) model-cards (score 28, solid no) — expected generative-ai; not solid; accepted page in top 5
- RT013 [page/vague] "robot dog learning to walk by trial and error" → (weak) deep-learning (score 34, solid no) — expected reinforcement-learning|sim-to-real-transfer|embodied-ai; not solid; accepted page in top 5
- RT015 [page/comparison] "why did transformers replace lstms" → (weak) vision-transformers (score 20, solid no) — expected transformers|recurrent-neural-networks; not solid; accepted page in top 5
- RT018 [page/concept] "how do generative models make pictures out of noise" → (weak) reasoning-models (score 40, solid no) — expected diffusion-models; not solid; accepted page in top 5
- RT019 [page/concept] "two networks competing to make fake images" → (weak) convolutional-neural-networks (score 12, solid no) — expected generative-adversarial-networks; not solid; accepted page in top 5
- RT023 [page/expert] "bellman optimality equation intuition" → (weak) markov-decision-processes (score 12, solid no) — expected markov-decision-processes; not solid; accepted page in top 5
- RT031 [page/typo] "reinforcment learning explaned" → (weak) deep-learning (score 34, solid no) — expected reinforcement-learning; not solid; accepted page in top 5
- RT033 [page/beginner] "what is a prompt and why does wording matter" → (weak) system-prompts (score 25, solid no) — expected prompt-engineering|system-prompts; not solid; accepted page in top 5
- RT034 [page/what-to-use] "i need to write a good prompt for summarising legal contracts" → (weak) prompt-engineering (score 38, solid no) — expected prompt-engineering|common-prompting-mistakes; not solid; accepted page in top 5
- RT037 [page/comparison] "compare my old system prompt with the new one" → system-prompts (score 71, solid yes) — expected system-prompts|prompt-engineering; expected tool not offered: prompt-diff
- RT040 [page/expert] "step level verifier for maths solutions" → (weak) process-reward-model (score 24, solid no) — expected process-reward-model; not solid; accepted page in top 5
- RT041 [page/expert] "reward models trained only on final answers" → (weak) process-reward-model (score 46, solid no) — expected outcome-reward-model; not solid; accepted page in top 5
- RT046 [page/implementation] "make the model return json that always matches my schema" → (weak) json-schema (score 60, solid no) — expected structured-outputs|constrained-decoding|json-schema; not solid; accepted page in top 5
- RT053 [page/implementation] "how big should my chunks be" → (weak) chunking (score 26, solid no) — expected chunking; not solid; accepted page in top 5
- RT057 [page/expert] "multi hop questions over a knowledge graph" → (weak) graph-rag (score 55, solid no) — expected graph-rag|agentic-rag; not solid; accepted page in top 5
- RT066 [page/conversational] "is a bot that only answers questions already an agent" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected ai-agent-vs-chatbot; not solid; accepted page in top 5
- RT070 [page/security] "what permissions should an email reading agent have" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected integration-permissions|gmail-for-ai-agents|oauth-for-ai-agents; not solid; accepted page in top 5
- RT072 [page/architecture] "how do agents decide which tool to call" → (weak) agent-tools (score 43, solid no) — expected agent-tools|function-calling|react-agent-pattern; not solid; accepted page in top 5
- RT074 [page/troubleshooting] "agent forgets what we decided yesterday" → (weak) agent-memory (score 48, solid no) — expected agent-memory|context-windows; not solid; accepted page in top 5
- RT075 [page/architecture] "should i use several agents or one" → (weak) openai-agents-sdk (score 36, solid no) — expected multi-agent-systems|agentic-workflows|ai-agents; not solid; accepted page in top 5
- RT079 [page/concept] "retrieval where the model decides to search again if results look poor" → (weak) agentic-rag (score 49, solid no) — expected agentic-rag; not solid; accepted page in top 5
- RT081 [page/what-to-use] "i need a plan for who does what between agents handling support tickets" → (weak) agent-planning (score 39, solid no) — expected agentic-workflows|multi-agent-systems; not solid; accepted page in top 5
- RT091 [page/architecture] "how would agents from different vendors collaborate" → (weak) openai-agents-sdk (score 36, solid no) — expected a2a-protocol|agent-protocol-landscape; not solid; accepted page in top 5
- RT093 [page/typo] "modle context protocal" → (weak) context-engineering (score 42, solid no) — expected mcp; not solid; accepted page in top 5
- RT096 [page/implementation] "read a csv and clean it before sending to a model" → (weak) model-cards (score 28, solid no) — expected python-data-for-ai; not solid; accepted page in top 5
- RT098 [page/troubleshooting] "pip install broke my environment" → (weak) environment-variables (score 24, solid no) — expected package-managers|python; not solid; accepted page in top 5
- RT118 [page/implementation] "validate an api payload against a schema" → (weak) json-schema (score 41, solid no) — expected json-validation|json-schema; not solid; accepted page in top 5
- RT119 [page/what-to-use] "pretty print and validate this json" → (weak) json-validation (score 45, solid no) — expected json-validation|what-is-json; not solid; accepted page in top 5
- RT127 [page/beginner] "what is a relational database" → (weak) vector-database-vs-traditional-database (score 38, solid no) — expected sql|postgresql|databases-for-ai-apps; not solid; accepted page in top 5
- RT128 [page/implementation] "how do i join two tables" → (weak) sql (score 8, solid no) — expected sql; not solid; accepted page in top 5
- RT133 [page/what-to-use] "which database should an ai app use" → (weak) ai-governance (score 50, solid no) — expected databases-for-ai-apps|postgresql-for-ai-apps|choosing-a-vector-store; not solid; accepted page in top 5
- RT136 [page/beginner] "azure basics for developers" → (weak) azure-fundamentals (score 44, solid no) — expected azure-fundamentals; not solid; accepted page in top 5
- RT141 [page/concept] "container versus virtual machine" → (weak) containers (score 37, solid no) — expected containers|docker; not solid; accepted page in top 5
- RT153 [page/typo] "sharepont framwork webpart" → (weak) sharepoint-framework (score 2, solid no) — expected sharepoint-framework|build-spfx-web-part|sharepoint; not solid; accepted page in top 5
- RT164 [page/what-to-use] "which sdk should i use to call different models" → (weak) reasoning-models (score 42, solid no) — expected ai-sdks|model-apis|framework-vs-direct-api; not solid; accepted page in top 5
- RT173 [page/what-to-use] "serve a model to hundreds of users" → (weak) model-serving-and-inference (score 30, solid no) — expected vllm|model-serving-and-inference|local-runtimes-compared; not solid; accepted page in top 5
- RT180 [page/beginner] "can i run ai privately on my own machine" → (weak) ai-governance (score 50, solid no) — expected local-ai|local-ai-vs-cloud-ai; not solid; accepted page in top 5
- RT181 [page/comparison] "local model or cloud api for sensitive documents" → (weak) model-apis (score 49, solid no) — expected local-ai-vs-cloud-ai|ai-privacy-and-security; not solid; accepted page in top 5
- RT182 [page/concept] "are downloadable models the same as open source" → (weak) open-weights-models (score 80, solid no) — expected open-weights-models; not solid; accepted page in top 5
- RT188 [page/implementation] "extract text from scanned invoices" → (weak) contrastive-learning-clip (score 11, solid no) — expected document-understanding-ai; not solid; accepted page in top 5
- RT197 [page/beginner] "how do robots learn from ai" → (weak) ai-governance (score 50, solid no) — expected embodied-ai|imitation-learning|reinforcement-learning; not solid; accepted page in top 5
- RT214 [page/expert] "least privilege design for tool using agents" → (weak) agent-tools (score 45, solid no) — expected integration-permissions|agent-tools|prompt-injection; not solid; accepted page in top 5
- RT220 [page/what-to-use] "which metrics for a classifier with rare positives" → (weak) evaluation-metrics-for-ai (score 18, solid no) — expected evaluation-metrics-for-ai; not solid; accepted page in top 5
- RT223 [page/concept] "how are chatbot elo rankings made" → (weak) human-preference-evaluation (score 33, solid no) — expected human-preference-evaluation; not solid; accepted page in top 5
- RT232 [page/beginner] "who signs off on ai use inside a company" → (weak) ai-governance (score 52, solid no) — expected ai-governance; not solid; accepted page in top 5
- RT236 [page/concept] "documentation template for a released model" → (weak) model-cards (score 44, solid no) — expected model-cards; not solid; accepted page in top 5
- RT242 [page/concept] "why do chatbots flatter users" → (weak) ai-alignment (score 3, solid no) — expected sycophancy|rlhf; not solid; accepted page in top 5
- RT245 [page/concept] "ai critiques its own answers using written principles" → (weak) ai-governance (score 50, solid no) — expected constitutional-ai-and-rlaif; not solid; accepted page in top 5
- RT247 [page/concept] "predict 3d structure from an amino acid sequence" → (weak) alphafold (score 16, solid no) — expected alphafold; not solid; accepted page in top 5
- RT250 [page/concept] "ai for finding new battery materials" → (weak) ai-materials-discovery (score 55, solid no) — expected ai-materials-discovery; not solid; accepted page in top 5
- RT259 [page/concept] "how are base models turned into chat assistants" → (weak) reasoning-models (score 40, solid no) — expected instruction-tuning|rlhf; not solid; accepted page in top 5
- RT265 [page/concept] "what are open source models like llama" → (weak) open-weights-models (score 85, solid no) — expected open-weights-models|local-ai; not solid; accepted page in top 5
- RT269 [page/vague] "best way to use ai at work" → (weak) ai-governance (score 50, solid no) — expected ai-privacy-and-security|prompt-engineering|ai-governance; not solid; accepted page in top 5
- RT270 [page/vague] "vectors" → (weak) choosing-a-vector-store (score 28, solid no) — expected embeddings|vector-databases; not solid; accepted page in top 5
- RT285 [page/acronym] "crud api example" → (weak) api-keys (score 34, solid no) — expected rest-apis|what-is-an-api; not solid; accepted page in top 5
- RT288 [page/typo] "dockr container networking" → (weak) containers (score 21, solid no) — expected docker|containers; not solid; accepted page in top 5
- RT291 [page/typo] "langchian agents" → (weak) openai-agents-sdk (score 36, solid no) — expected langchain|agent-frameworks-compared; not solid; accepted page in top 5
- RT292 [page/typo] "hugging fase models" → (weak) reasoning-models (score 44, solid no) — expected hugging-face; not solid; accepted page in top 5
- RT293 [page/typo] "fine tunning vs prompting" → (weak) rag-vs-fine-tuning (score 30, solid no) — expected fine-tuning|rag-vs-fine-tuning|prompt-engineering; not solid; accepted page in top 5
- RT404 [page/mixed-natural] "why does my assistant lose context in long chats" → (weak) context-engineering (score 44, solid no) — expected context-windows|agent-memory; not solid; accepted page in top 5
- RT408 [page/mixed-natural] "trace every tool call my agent makes" → (weak) ai-agent-vs-chatbot (score 35, solid no) — expected llm-observability|agent-evaluation; not solid; accepted page in top 5
- RT413 [page/mixed-natural] "difference between ai assistant copilot and agent" → (weak) ai-agent-vs-chatbot (score 97, solid no) — expected ai-agent-vs-chatbot|ai-agents; not solid; accepted page in top 5
- RT414 [page/mixed-natural] "how do i chunk pdfs for retrieval" → (weak) chunking (score 52, solid no) — expected chunking|document-understanding-ai; not solid; accepted page in top 5
- RT416 [page/mixed-natural] "why does inference get slower with longer prompts" → (weak) prompt-engineering (score 34, solid no) — expected kv-cache|context-windows|model-serving-and-inference; not solid; accepted page in top 5
- RT421 [page/mixed-natural] "can i run deepseek or llama privately" → (weak) llama-cpp (score 40, solid no) — expected local-ai|open-weights-models|ollama; not solid; accepted page in top 5
- RT426 [page/mixed-natural] "how to get consistent structured data out of messy emails" → (weak) structured-outputs (score 35, solid no) — expected structured-outputs|document-understanding-ai|constrained-decoding; not solid; accepted page in top 5

## Path completeness failures
- RT067 "i want an ai agent that can read gmail" top ai-agent-vs-chatbot; learn agent-tools, ai-agents, multi-agent-systems, function-calling, agentic-workflows
- RT068 "let my assistant send calendar invites on my behalf" top (weak) ai-agent-vs-chatbot; learn -
- RT069 "how do i connect an ai agent to slack and jira" top ai-agent-vs-chatbot; learn ai-agents, multi-agent-systems, agent-tools, agentic-workflows, function-calling
- RT070 "what permissions should an email reading agent have" top (weak) ai-agent-vs-chatbot; learn -

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RT001 | PASS | page | ai vs machine learning whats the difference | what-is-ai | 52 | yes | — |  |
| RT002 | WEAK | page | explain neural nets like im five | (weak) physics-informed-neural-networks | 26 | no | — | not solid; accepted page in top 5 |
| RT003 | WEAK | page | how does chatgpt actually work | (weak) large-language-models | 59 | no | — | not solid; accepted page in top 5 |
| RT004 | MISS | page | why do language models make stuff up | (weak) small-language-models | 62 | no | — | no accepted page in top 5 |
| RT005 | PASS | page | wats a token in ai | tokens | 51 | yes | — |  |
| RT006 | FALSE POSITIVE | page | how much text can an llm remember in one go | large-language-models | 32 | yes | — | confident wrong page: large-language-models |
| RT007 | WEAK | page | what makes a model generative | (weak) model-cards | 28 | no | — | not solid; accepted page in top 5 |
| RT008 | PASS | page | is deep learning the same as ml | deep-learning | 100 | yes | — |  |
| RT009 | FALSE POSITIVE | page | labelled versus unlabelled data in machine learning | what-is-ai | 28 | yes | — | confident wrong page: what-is-ai |
| RT010 | PASS | page | how does a neural network adjust itself while training | neural-networks | 57 | yes | — |  |
| RT011 | MISS | page | my classifier is 99 percent on training data and 70 percent on new data | (weak) ai-privacy-and-security | 27 | no | — | no accepted page in top 5 |
| RT012 | MISS | page | reuse imagenet weights for my own photos | (weak) open-weights-models | 22 | no | — | no accepted page in top 5 |
| RT013 | WEAK | page | robot dog learning to walk by trial and error | (weak) deep-learning | 34 | no | — | not solid; accepted page in top 5 |
| RT014 | MISS | page | how do image classifiers detect edges and shapes | (weak) contrastive-learning-clip | 17 | no | — | no accepted page in top 5 |
| RT015 | WEAK | page | why did transformers replace lstms | (weak) vision-transformers | 20 | no | — | not solid; accepted page in top 5 |
| RT016 | PASS | page | attention is all you need explained simply | transformers | 40 | yes | — |  |
| RT017 | PASS | page | what is a latent space | variational-autoencoders | 58 | yes | — |  |
| RT018 | WEAK | page | how do generative models make pictures out of noise | (weak) reasoning-models | 40 | no | — | not solid; accepted page in top 5 |
| RT019 | WEAK | page | two networks competing to make fake images | (weak) convolutional-neural-networks | 12 | no | — | not solid; accepted page in top 5 |
| RT020 | FALSE POSITIVE | page | which neural network type handles molecules and social networks | neural-networks | 68 | yes | — | confident wrong page: neural-networks |
| RT021 | PASS | page | why does adam use decoupled weight decay | overfitting-and-regularization | 60 | yes | — |  |
| RT022 | PASS | page | how does ppo clip the policy update | proximal-policy-optimization | 45 | yes | — |  |
| RT023 | WEAK | page | bellman optimality equation intuition | (weak) markov-decision-processes | 12 | no | — | not solid; accepted page in top 5 |
| RT024 | PASS | page | why does dqn need a target network | deep-q-networks | 59 | yes | — |  |
| RT025 | PASS | page | hey can you tell me what unsupervised learning even is | unsupervised-learning | 82 | yes | — |  |
| RT026 | PASS | page | sgd vs adam which one | backpropagation-and-gradient-descent | 59 | yes | — |  |
| RT027 | PASS | page | what is a vae used for | variational-autoencoders | 56 | yes | — |  |
| RT028 | PASS | page | gnn use cases | graph-neural-networks | 51 | yes | — |  |
| RT029 | PASS | page | cnn or vit for a small dataset | cnn-vs-vision-transformer | 71 | yes | — |  |
| RT030 | MISS | page | transfomer architecure basics | (weak) power-platform | 6 | no | — | no accepted page in top 5 |
| RT031 | WEAK | page | reinforcment learning explaned | (weak) deep-learning | 34 | no | — | not solid; accepted page in top 5 |
| RT032 | PASS | page | embedings vs tokens | tokens | 34 | yes | — |  |
| RT033 | WEAK | page | what is a prompt and why does wording matter | (weak) system-prompts | 25 | no | — | not solid; accepted page in top 5 |
| RT034 | WEAK | page | i need to write a good prompt for summarising legal contracts | (weak) prompt-engineering | 38 | no | — | not solid; accepted page in top 5 |
| RT035 | PASS | page | what goes in a system prompt for a customer support bot | system-prompts | 71 | yes | — |  |
| RT036 | MISS | page | the model keeps ignoring my instructions | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| RT037 | WEAK | page | compare my old system prompt with the new one | system-prompts | 71 | yes | — | expected tool not offered: prompt-diff |
| RT038 | PASS | page | how do reasoning models spend extra tokens before answering | reasoning-models | 122 | yes | — |  |
| RT039 | PASS | page | majority vote across sampled chains of thought | self-consistency | 42 | yes | — |  |
| RT040 | WEAK | page | step level verifier for maths solutions | (weak) process-reward-model | 24 | no | — | not solid; accepted page in top 5 |
| RT041 | WEAK | page | reward models trained only on final answers | (weak) process-reward-model | 46 | no | — | not solid; accepted page in top 5 |
| RT042 | FALSE POSITIVE | page | rl with unit test rewards for coding models | reinforcement-learning | 23 | yes | — | confident wrong page: reinforcement-learning |
| RT043 | MISS | page | can i read what the model was thinking before it answered | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| RT044 | PASS | page | my output is truncated when using a thinking model | reasoning-models | 44 | yes | — |  |
| RT045 | PASS | page | when is a thinking model worth the extra cost | reasoning-models | 47 | yes | — |  |
| RT046 | WEAK | page | make the model return json that always matches my schema | (weak) json-schema | 60 | no | — | not solid; accepted page in top 5 |
| RT047 | FALSE POSITIVE | page | how do grammars restrict which tokens a model can sample | tokens | 34 | yes | — | confident wrong page: tokens |
| RT048 | PASS | page | json mode or function calling for extraction | structured-output-methods-compared | 86 | yes | — |  |
| RT049 | PASS | page | what does temperature do | sampling-and-decoding | 28 | yes | — |  |
| RT050 | FALSE POSITIVE | page | why is the same prompt giving different answers every time | common-prompting-mistakes | 55 | yes | — | confident wrong page: common-prompting-mistakes |
| RT051 | PASS | page | what is rag in simple words | rag | 50 | yes | — |  |
| RT052 | MISS | page | design a pipeline that answers questions from our internal wiki | (weak) distributed-training | 8 | no | — | no accepted page in top 5 |
| RT053 | WEAK | page | how big should my chunks be | (weak) chunking | 26 | no | — | not solid; accepted page in top 5 |
| RT054 | PASS | page | rag answers sound confident but cite the wrong document | rag | 51 | yes | — |  |
| RT055 | PASS | page | should i fine tune or use retrieval for company docs | rag-vs-fine-tuning | 102 | yes | — |  |
| RT056 | PASS | page | reranking with a cross encoder after bm25 | hybrid-search-and-reranking | 68 | yes | — |  |
| RT057 | WEAK | page | multi hop questions over a knowledge graph | (weak) graph-rag | 55 | no | — | not solid; accepted page in top 5 |
| RT058 | MISS | page | how do i measure how similar two documents are numerically | (weak) document-understanding-ai | 26 | no | — | no accepted page in top 5 |
| RT059 | MISS | page | how can a computer know two sentences mean the same thing | (weak) computer-use-agents | 28 | no | — | no accepted page in top 5 |
| RT060 | FALSE POSITIVE | page | store embeddings in postgres | postgresql | 67 | yes | — | confident wrong page: postgresql |
| RT061 | PASS | page | can plain postgres handle semantic search or must i add a vector store | vector-databases | 78 | yes | — |  |
| RT062 | PASS | page | which vector store should i pick for a prototype | choosing-a-vector-store | 95 | yes | — |  |
| RT063 | PASS | page | hnsw vs ivf index tradeoffs | vector-databases | 21 | yes | — |  |
| RT064 | MISS | page | vektor databse basics | (weak) power-platform | 6 | no | — | no accepted page in top 5 |
| RT065 | FALSE POSITIVE | page | what is an ai agent | ai-agent-vs-chatbot | 58 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| RT066 | WEAK | page | is a bot that only answers questions already an agent | (weak) ai-agent-vs-chatbot | 35 | no | — | not solid; accepted page in top 5 |
| RT067 | FALSE POSITIVE | page | i want an ai agent that can read gmail | ai-agent-vs-chatbot | 58 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| RT068 | MISS | page | let my assistant send calendar invites on my behalf | (weak) ai-agent-vs-chatbot | 18 | no | — | no accepted page in top 5 |
| RT069 | FALSE POSITIVE | page | how do i connect an ai agent to slack and jira | ai-agent-vs-chatbot | 58 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| RT070 | WEAK | page | what permissions should an email reading agent have | (weak) ai-agent-vs-chatbot | 35 | no | — | not solid; accepted page in top 5 |
| RT071 | MISS | page | can a malicious email hijack my agent | (weak) ai-agent-vs-chatbot | 35 | no | — | no accepted page in top 5 |
| RT072 | WEAK | page | how do agents decide which tool to call | (weak) agent-tools | 43 | no | — | not solid; accepted page in top 5 |
| RT073 | MISS | page | my agent gets stuck repeating the same step | (weak) ai-agent-vs-chatbot | 35 | no | — | no accepted page in top 5 |
| RT074 | WEAK | page | agent forgets what we decided yesterday | (weak) agent-memory | 48 | no | — | not solid; accepted page in top 5 |
| RT075 | WEAK | page | should i use several agents or one | (weak) openai-agents-sdk | 36 | no | — | not solid; accepted page in top 5 |
| RT076 | FALSE POSITIVE | page | which framework for a production agent | ai-agents | 29 | yes | — | confident wrong page: ai-agents |
| RT077 | PASS | page | langgraph versus crewai | crewai | 86 | yes | — |  |
| RT078 | PASS | page | do i even need langchain | langchain | 71 | yes | — |  |
| RT079 | WEAK | page | retrieval where the model decides to search again if results look poor | (weak) agentic-rag | 49 | no | — | not solid; accepted page in top 5 |
| RT080 | PASS | page | what is the react prompting pattern for agents | react-agent-pattern | 102 | yes | — |  |
| RT081 | WEAK | page | i need a plan for who does what between agents handling support tickets | (weak) agent-planning | 39 | no | — | not solid; accepted page in top 5 |
| RT082 | PASS | page | how do agent evaluation harnesses score tool trajectories | agent-evaluation | 93 | yes | — |  |
| RT083 | PASS | page | i keep hearing about mcp, what problem does it solve | mcp | 51 | yes | — |  |
| RT084 | PASS | page | why would i build an mcp server | mcp | 55 | yes | — |  |
| RT085 | PASS | page | why not just call the api directly instead of mcp | mcp-vs-api | 60 | yes | — |  |
| RT086 | PASS | page | mcp or plain function calling for my app | function-calling-vs-mcp | 89 | yes | — |  |
| RT087 | FALSE POSITIVE | page | is it safe to install a random mcp server from github | mcp | 55 | yes | — | confident wrong page: mcp |
| RT088 | PASS | page | tool poisoning in mcp | mcp-security | 88 | yes | — |  |
| RT089 | PASS | page | what is a2a | a2a-protocol | 71 | yes | — |  |
| RT090 | PASS | page | are a2a and mcp competitors | a2a-vs-mcp | 118 | yes | — |  |
| RT091 | WEAK | page | how would agents from different vendors collaborate | (weak) openai-agents-sdk | 36 | no | — | not solid; accepted page in top 5 |
| RT092 | PASS | page | where is the agent card published | a2a-protocol | 68 | yes | — |  |
| RT093 | WEAK | page | modle context protocal | (weak) context-engineering | 42 | no | — | not solid; accepted page in top 5 |
| RT094 | FALSE POSITIVE | page | how do i call an llm api from python | python | 46 | yes | — | confident wrong page: python |
| RT095 | FALSE POSITIVE | page | build a small rag app in python | rag | 50 | yes | — | confident wrong page: rag |
| RT096 | WEAK | page | read a csv and clean it before sending to a model | (weak) model-cards | 28 | no | — | not solid; accepted page in top 5 |
| RT097 | FALSE POSITIVE | page | which python libraries do i need for ai work | python | 48 | yes | — | confident wrong page: python |
| RT098 | WEAK | page | pip install broke my environment | (weak) environment-variables | 24 | no | — | not solid; accepted page in top 5 |
| RT099 | PASS | page | python for machine learning where to begin | python | 46 | yes | — |  |
| RT100 | FALSE POSITIVE | page | call an ai api from javascript without exposing my key | javascript | 55 | yes | — | confident wrong page: javascript |
| RT101 | MISS | page | type the response from my ai endpoint | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| RT102 | FALSE POSITIVE | page | stream tokens to the browser as they arrive | tokens | 34 | yes | — | confident wrong page: tokens |
| RT103 | FALSE POSITIVE | page | manage chat message state in react | react | 60 | yes | — | confident wrong page: react |
| RT104 | PASS | page | build a chat ui with react | react-ai-interfaces | 61 | yes | — |  |
| RT105 | PASS | page | what is react used for | react | 73 | yes | — |  |
| RT106 | PASS | page | should i use next.js for an ai chat app | nextjs | 76 | yes | — |  |
| RT107 | PASS | page | express server that proxies model requests | express | 52 | yes | — |  |
| RT108 | PASS | page | node js streming response | nodejs | 71 | yes | — |  |
| RT109 | PASS | page | why use typescript instead of javascript | typescript | 66 | yes | — |  |
| RT110 | PASS | page | typescript or javascript for a small tool | typescript | 66 | yes | — |  |
| RT111 | PASS | page | what is an api | what-is-an-api | 54 | yes | — |  |
| RT112 | PASS | page | rest vs graphql which one | rest-vs-graphql | 101 | yes | — |  |
| RT113 | MISS | page | what does restful mean | (weak) open-weights-models | 4 | no | — | no accepted page in top 5 |
| RT114 | PASS | page | where should i keep my api keys | api-keys | 90 | yes | — |  |
| RT115 | PASS | page | api key versus oauth token | api-keys | 79 | yes | — |  |
| RT116 | PASS | page | what is json | what-is-json | 39 | yes | — |  |
| RT117 | FALSE POSITIVE | page | unexpected token in json at position 0 | tokens | 41 | yes | — | confident wrong page: tokens |
| RT118 | WEAK | page | validate an api payload against a schema | (weak) json-schema | 41 | no | — | not solid; accepted page in top 5 |
| RT119 | WEAK | page | pretty print and validate this json | (weak) json-validation | 45 | no | — | not solid; accepted page in top 5 |
| RT120 | PASS | page | what is a webhook | webhooks | 59 | yes | — |  |
| RT121 | PASS | page | browser says blocked by cors policy | cors | 81 | yes | — |  |
| RT122 | PASS | page | what is inside a json web token | json-web-tokens | 77 | yes | — |  |
| RT123 | PASS | page | difference between authentication and authorization | authentication-vs-authorization | 117 | yes | — |  |
| RT124 | PASS | page | what is the oauth authorization code flow | oauth | 77 | yes | — |  |
| RT125 | PASS | page | openid connect vs oauth | openid-connect | 131 | yes | — |  |
| RT126 | PASS | page | when to use sql vs nosql | sql-vs-nosql | 95 | yes | — |  |
| RT127 | WEAK | page | what is a relational database | (weak) vector-database-vs-traditional-database | 38 | no | — | not solid; accepted page in top 5 |
| RT128 | WEAK | page | how do i join two tables | (weak) sql | 8 | no | — | not solid; accepted page in top 5 |
| RT129 | PASS | page | postgres or mysql for a new project | postgresql | 67 | yes | — |  |
| RT130 | PASS | page | sqlite for a small app | sqlite | 53 | yes | — |  |
| RT131 | PASS | page | what is redis used for | redis | 59 | yes | — |  |
| RT132 | PASS | page | what is an orm | prisma-and-orms | 35 | yes | — |  |
| RT133 | WEAK | page | which database should an ai app use | (weak) ai-governance | 50 | no | — | not solid; accepted page in top 5 |
| RT134 | MISS | page | store chat history for an assistant | (weak) choosing-a-vector-store | 20 | no | — | no accepted page in top 5 |
| RT135 | PASS | page | what is aws and what are its main services | aws-fundamentals | 43 | yes | — |  |
| RT136 | WEAK | page | azure basics for developers | (weak) azure-fundamentals | 44 | no | — | not solid; accepted page in top 5 |
| RT137 | PASS | page | what is gcp | gcp-fundamentals | 29 | yes | — |  |
| RT138 | PASS | page | aws vs azure vs gcp for hosting a model | aws-fundamentals | 44 | yes | — |  |
| RT139 | PASS | page | my s3 bucket is public by mistake | aws-fundamentals | 22 | yes | — |  |
| RT140 | PASS | page | what is docker | docker | 75 | yes | — |  |
| RT141 | WEAK | page | container versus virtual machine | (weak) containers | 37 | no | — | not solid; accepted page in top 5 |
| RT142 | PASS | page | what is ci cd | cicd | 54 | yes | — |  |
| RT143 | PASS | page | git basics for beginners | git | 64 | yes | — |  |
| RT144 | PASS | page | git says i have a merge conflict | git | 60 | yes | — |  |
| RT145 | PASS | page | what is github and how is it different from git | github | 80 | yes | — |  |
| RT146 | PASS | page | set up automatic tests on every pull request | github | 27 | yes | — |  |
| RT147 | PASS | page | what are environment variables for | environment-variables | 68 | yes | — |  |
| RT148 | MISS | page | package an app so it runs the same everywhere | (weak) package-managers | 20 | no | — | no accepted page in top 5 |
| RT149 | PASS | page | npm install fails with dependency errors | package-managers | 30 | yes | — |  |
| RT150 | PASS | page | what is sharepoint | sharepoint | 81 | yes | — |  |
| RT151 | PASS | page | what is spfx | sharepoint-framework | 138 | yes | — |  |
| RT152 | PASS | page | build my first spfx web part | build-spfx-web-part | 172 | yes | — |  |
| RT153 | WEAK | page | sharepont framwork webpart | (weak) sharepoint-framework | 2 | no | — | not solid; accepted page in top 5 |
| RT154 | PASS | page | what is microsoft graph | microsoft-graph | 94 | yes | — |  |
| RT155 | PASS | page | read a user's calendar through microsoft graph | microsoft-graph | 95 | yes | — |  |
| RT156 | PASS | page | what is entra id | microsoft-entra-id | 96 | yes | — |  |
| RT157 | PASS | page | what is power automate and power apps | power-platform | 80 | yes | — |  |
| RT158 | PASS | page | build a teams tab or bot | teams-development | 59 | yes | — |  |
| RT159 | PASS | page | what is microsoft 365 | microsoft-365 | 94 | yes | — |  |
| RT160 | PASS | page | let a daemon service call graph without a user | microsoft-graph | 63 | yes | — |  |
| RT161 | PASS | page | spfx or power apps for an intranet form | sharepoint-framework | 140 | yes | — |  |
| RT162 | PASS | page | what is an ai framework | what-is-an-ai-framework | 83 | yes | — |  |
| RT163 | PASS | page | what is hugging face | hugging-face | 94 | yes | — |  |
| RT164 | WEAK | page | which sdk should i use to call different models | (weak) reasoning-models | 42 | no | — | not solid; accepted page in top 5 |
| RT165 | PASS | page | what is llamaindex for | llamaindex | 71 | yes | — |  |
| RT166 | PASS | page | langchain or llamaindex for rag | llamaindex | 103 | yes | — |  |
| RT167 | FALSE POSITIVE | page | framework where you declare modules and let an optimizer tune the prompts | backpropagation-and-gradient-descent | 23 | yes | — | confident wrong page: backpropagation-and-gradient-descent |
| RT168 | FALSE POSITIVE | page | microsoft sdk for plugging llms into dotnet apps | large-language-models | 29 | yes | — | confident wrong page: large-language-models |
| RT169 | PASS | page | what is the openai agents sdk | openai-agents-sdk | 141 | yes | — |  |
| RT170 | PASS | page | what is autogen | autogen | 85 | yes | — |  |
| RT171 | MISS | page | easiest way to pull and chat with an open model on my own pc | (weak) open-weights-models | 42 | no | — | no accepted page in top 5 |
| RT172 | PASS | page | run an llm on my laptop without a gpu | local-ai | 63 | yes | — |  |
| RT173 | WEAK | page | serve a model to hundreds of users | (weak) model-serving-and-inference | 30 | no | — | not solid; accepted page in top 5 |
| RT174 | PASS | page | ollama versus vllm | ollama | 92 | yes | — |  |
| RT175 | PASS | page | what is gguf | llama-cpp | 66 | yes | — |  |
| RT176 | PASS | page | what is onnx | onnx-runtime | 73 | yes | — |  |
| RT177 | MISS | page | how do i run a model in the browser | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| RT178 | PASS | page | why use pytorch | pytorch | 76 | yes | — |  |
| RT179 | PASS | page | cuda out of memory when loading a 13b model | gpus-and-ai-accelerators | 82 | yes | — |  |
| RT180 | WEAK | page | can i run ai privately on my own machine | (weak) ai-governance | 50 | no | — | not solid; accepted page in top 5 |
| RT181 | WEAK | page | local model or cloud api for sensitive documents | (weak) model-apis | 49 | no | — | not solid; accepted page in top 5 |
| RT182 | WEAK | page | are downloadable models the same as open source | (weak) open-weights-models | 80 | no | — | not solid; accepted page in top 5 |
| RT183 | FALSE POSITIVE | page | tiny llms that run on a phone | large-language-models | 29 | yes | — | confident wrong page: large-language-models |
| RT184 | PASS | page | what does 4 bit quantization do | quantization | 69 | yes | — |  |
| RT185 | PASS | page | what is multimodal ai | multimodal-ai | 69 | yes | — |  |
| RT186 | MISS | page | how do models understand images and text together | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| RT187 | PASS | page | what is clip in computer vision | contrastive-learning-clip | 45 | yes | — |  |
| RT188 | WEAK | page | extract text from scanned invoices | (weak) contrastive-learning-clip | 11 | no | — | not solid; accepted page in top 5 |
| RT189 | PASS | page | vision transformer vs resnet | vision-transformers | 73 | yes | — |  |
| RT190 | PASS | gap | how does object detection like yolo work | (weak) ai-weather-forecasting | 6 | no | — | transparent non-answer |
| RT191 | PASS | gap | opencv tutorial for face detection | (weak) hugging-face | 30 | no | — | transparent non-answer |
| RT192 | PASS | page | how does speech to text work | speech-ai | 76 | yes | — |  |
| RT193 | PASS | page | build a voice assistant with an llm | speech-ai | 57 | yes | — |  |
| RT194 | MISS | page | can ai clone my voice | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| RT195 | PASS | page | what is whisper | speech-ai | 55 | yes | — |  |
| RT196 | PASS | page | how do text to video models work | video-generation-models | 93 | yes | — |  |
| RT197 | WEAK | page | how do robots learn from ai | (weak) ai-governance | 50 | no | — | not solid; accepted page in top 5 |
| RT198 | PASS | page | what is a vla model | vision-language-action-models | 64 | yes | — |  |
| RT199 | PASS | page | teaching a robot by demonstration | imitation-learning | 51 | yes | — |  |
| RT200 | FALSE POSITIVE | page | my policy works in the simulator but not on hardware | reinforcement-learning | 21 | yes | — | confident wrong page: reinforcement-learning |
| RT201 | MISS | page | ai that imagines future states to plan actions | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| RT202 | PASS | gap | how do i program a robot with ros | (weak) embodied-ai | 10 | no | — | transparent non-answer |
| RT203 | PASS | gap | how do self driving cars work | (weak) self-consistency | 24 | no | — | transparent non-answer |
| RT204 | MISS | page | text hidden in a web page that tells my assistant to misbehave | (weak) build-spfx-web-part | 30 | no | — | no accepted page in top 5 |
| RT205 | PASS | page | ignore previous instructions attack | prompt-injection | 25 | yes | — |  |
| RT206 | PASS | page | is it ok to paste customer data into chatgpt | ai-privacy-and-security | 67 | yes | — |  |
| RT207 | PASS | page | remove secrets from a log before sharing it with an ai | ai-privacy-and-security | 74 | yes | pii-secret-redactor |  |
| RT208 | FALSE POSITIVE | page | standard checklist of security risks for generative ai apps | generative-ai | 52 | yes | — | confident wrong page: generative-ai |
| RT209 | PASS | page | how do i red team my chatbot | red-teaming | 68 | yes | — |  |
| RT210 | PASS | page | how do guardrails stop harmful output | ai-guardrails | 73 | yes | — |  |
| RT211 | PASS | page | how do i sandbox code the model writes | code-execution-sandboxing | 100 | yes | — |  |
| RT212 | MISS | page | can i tell if an image was made by ai | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| RT213 | MISS | page | what is jailbreaking a model | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| RT214 | WEAK | page | least privilege design for tool using agents | (weak) agent-tools | 45 | no | — | not solid; accepted page in top 5 |
| RT215 | MISS | page | how do i know if my ai feature is any good | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| RT216 | FALSE POSITIVE | page | what does a high score on the 57 subject multiple choice benchmark tell me | benchmarks-and-leaderboards | 33 | yes | — | confident wrong page: benchmarks-and-leaderboards |
| RT217 | PASS | page | why are leaderboard rankings misleading | benchmarks-and-leaderboards | 38 | yes | — |  |
| RT218 | MISS | page | using one model to grade another | (weak) model-apis | 30 | no | — | no accepted page in top 5 |
| RT219 | FALSE POSITIVE | page | build a test set for my rag bot | rag | 50 | yes | — | confident wrong page: rag |
| RT220 | WEAK | page | which metrics for a classifier with rare positives | (weak) evaluation-metrics-for-ai | 18 | no | — | not solid; accepted page in top 5 |
| RT221 | FALSE POSITIVE | page | benchmark where models fix real github issues | github | 54 | yes | — | confident wrong page: github |
| RT222 | MISS | page | check whether each claim is backed by the source text | (weak) open-weights-models | 17 | no | — | no accepted page in top 5 |
| RT223 | WEAK | page | how are chatbot elo rankings made | (weak) human-preference-evaluation | 33 | no | — | not solid; accepted page in top 5 |
| RT224 | MISS | page | how do teams keep ml models running reliably after launch | (weak) small-language-models | 41 | no | — | no accepted page in top 5 |
| RT225 | PASS | page | track experiments and register models | mlflow | 55 | yes | — |  |
| RT226 | PASS | page | my model got worse after three months in production | model-drift-and-monitoring | 76 | yes | — |  |
| RT227 | PASS | page | log prompts and tokens in production | llm-observability | 55 | yes | — |  |
| RT228 | PASS | page | how many gpus do i need to serve a 70b model | gpus-and-ai-accelerators | 64 | yes | — |  |
| RT229 | PASS | page | how to split training across several gpus | distributed-training | 64 | yes | — |  |
| RT230 | FALSE POSITIVE | page | cut my llm bill | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| RT231 | PASS | page | what is ray used for | ray | 46 | yes | — |  |
| RT232 | WEAK | page | who signs off on ai use inside a company | (weak) ai-governance | 52 | no | — | not solid; accepted page in top 5 |
| RT233 | PASS | page | does the eu ai act apply to my startup | eu-ai-act | 107 | yes | — |  |
| RT234 | PASS | page | what is the nist ai risk framework | nist-ai-rmf | 151 | yes | — |  |
| RT235 | MISS | page | certifiable standard for managing ai in an organisation | (weak) ai-governance | 51 | no | — | no accepted page in top 5 |
| RT236 | WEAK | page | documentation template for a released model | (weak) model-cards | 44 | no | — | not solid; accepted page in top 5 |
| RT237 | MISS | page | are my model's error rates different across demographic groups | (weak) reasoning-models | 42 | no | — | no accepted page in top 5 |
| RT238 | PASS | gap | what is gdpr and does it cover ai training data | (weak) ai-privacy-and-security | 59 | no | — | transparent non-answer |
| RT239 | PASS | gap | ai regulation in the united states | (weak) eu-ai-act | 53 | no | — | transparent non-answer |
| RT240 | PASS | page | what is sycophancy | sycophancy | 81 | yes | — |  |
| RT241 | PASS | page | how is dpo different from rlhf | rlhf | 67 | yes | — |  |
| RT242 | WEAK | page | why do chatbots flatter users | (weak) ai-alignment | 3 | no | — | not solid; accepted page in top 5 |
| RT243 | PASS | page | what does alignment mean for ai | ai-alignment | 53 | yes | — |  |
| RT244 | PASS | page | reward hacking examples | reward-hacking | 96 | yes | — |  |
| RT245 | WEAK | page | ai critiques its own answers using written principles | (weak) ai-governance | 50 | no | — | not solid; accepted page in top 5 |
| RT246 | FALSE POSITIVE | page | can we see inside a neural network | neural-networks | 57 | yes | — | confident wrong page: neural-networks |
| RT247 | WEAK | page | predict 3d structure from an amino acid sequence | (weak) alphafold | 16 | no | — | not solid; accepted page in top 5 |
| RT248 | FALSE POSITIVE | page | neural networks that respect physics equations | neural-networks | 71 | yes | — | confident wrong page: neural-networks |
| RT249 | FALSE POSITIVE | page | can machine learning forecast weather | what-is-ai | 28 | yes | — | confident wrong page: what-is-ai |
| RT250 | WEAK | page | ai for finding new battery materials | (weak) ai-materials-discovery | 55 | no | — | not solid; accepted page in top 5 |
| RT251 | PASS | page | ai in drug discovery | ai-drug-discovery | 114 | yes | — |  |
| RT252 | PASS | page | model with many experts but only a few active per token | mixture-of-experts | 79 | yes | — |  |
| RT253 | PASS | page | what are state space models and mamba | state-space-models | 107 | yes | — |  |
| RT254 | PASS | page | how does a kv cache save compute | kv-cache | 78 | yes | — |  |
| RT255 | PASS | page | what is flash attention | flash-attention | 73 | yes | — |  |
| RT256 | PASS | page | how do transformers know word order | positional-encoding | 46 | yes | — |  |
| RT257 | MISS | page | bert versus gpt style models | (weak) small-language-models | 70 | no | — | no accepted page in top 5 |
| RT258 | FALSE POSITIVE | page | does making llms bigger improve them predictably | large-language-models | 29 | yes | — | confident wrong page: large-language-models |
| RT259 | WEAK | page | how are base models turned into chat assistants | (weak) reasoning-models | 40 | no | — | not solid; accepted page in top 5 |
| RT260 | FALSE POSITIVE | page | fine tune a 7b model on a single consumer gpu | gpus-and-ai-accelerators | 46 | yes | — | confident wrong page: gpus-and-ai-accelerators |
| RT261 | MISS | page | distilling a big model into a small one | (weak) small-language-models | 32 | no | — | no accepted page in top 5 |
| RT262 | PASS | page | small draft model proposes tokens a big model verifies | speculative-decoding | 62 | yes | — |  |
| RT263 | PASS | page | how does prompt caching reduce cost | prompt-caching | 119 | yes | — |  |
| RT264 | PASS | page | manage what goes into the context window for a long running agent | context-windows | 65 | yes | — |  |
| RT265 | WEAK | page | what are open source models like llama | (weak) open-weights-models | 85 | no | — | not solid; accepted page in top 5 |
| RT266 | MISS | page | how do i get started with ai | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| RT267 | MISS | page | tell me about agents | (weak) openai-agents-sdk | 36 | no | — | no accepted page in top 5 |
| RT268 | PASS | page | ai security | ai-privacy-and-security | 64 | yes | — |  |
| RT269 | WEAK | page | best way to use ai at work | (weak) ai-governance | 50 | no | — | not solid; accepted page in top 5 |
| RT270 | WEAK | page | vectors | (weak) choosing-a-vector-store | 28 | no | — | not solid; accepted page in top 5 |
| RT271 | PASS | page | rag vs | rag | 50 | yes | — |  |
| RT272 | PASS | neg | models | (weak) reasoning-models | 40 | no | — | no confident answer |
| RT273 | PASS | neg | learning | (weak) deep-learning | 34 | no | — | no confident answer |
| RT274 | PASS | neg | explain it simply please | (weak) reasoning-transparency | 2 | no | — | no confident answer |
| RT275 | PASS | neg | best one | (weak) best-of-n-sampling | 29 | no | — | no confident answer |
| RT276 | PASS | neg | help with my code | (weak) code-execution-sandboxing | 34 | no | — | no confident answer |
| RT277 | PASS | neg | it does not work | (weak) ai-weather-forecasting | 6 | no | — | no confident answer |
| RT278 | PASS | page | llm rag mcp relationship | mcp | 51 | yes | — |  |
| RT279 | PASS | gap | what do nlp and nlu mean | (weak) open-weights-models | 4 | no | — | transparent non-answer |
| RT280 | PASS | page | gpu vs tpu | gpus-and-ai-accelerators | 65 | yes | — |  |
| RT281 | MISS | page | what is hitl in ai workflows | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| RT282 | PASS | page | what is bleu and rouge | evaluation-metrics-for-ai | 67 | yes | — |  |
| RT283 | PASS | page | asr vs tts | speech-ai | 59 | yes | — |  |
| RT284 | PASS | gap | spa vs ssr | (weak) nextjs | 4 | no | — | transparent non-answer |
| RT285 | WEAK | page | crud api example | (weak) api-keys | 34 | no | — | not solid; accepted page in top 5 |
| RT286 | PASS | gap | sso with saml or oidc | openid-connect | 104 | yes | — | nearby page: openid-connect |
| RT287 | MISS | page | oss vs proprietary models | (weak) reasoning-models | 40 | no | — | no accepted page in top 5 |
| RT288 | WEAK | page | dockr container networking | (weak) containers | 21 | no | — | not solid; accepted page in top 5 |
| RT289 | PASS | page | postgress vs mysql | mysql | 58 | yes | — |  |
| RT290 | PASS | gap | kubenetes basics | (weak) power-platform | 6 | no | — | transparent non-answer |
| RT291 | WEAK | page | langchian agents | (weak) openai-agents-sdk | 36 | no | — | not solid; accepted page in top 5 |
| RT292 | WEAK | page | hugging fase models | (weak) reasoning-models | 44 | no | — | not solid; accepted page in top 5 |
| RT293 | WEAK | page | fine tunning vs prompting | (weak) rag-vs-fine-tuning | 30 | no | — | not solid; accepted page in top 5 |
| RT294 | FALSE POSITIVE | page | halucination in llms | large-language-models | 29 | yes | — | confident wrong page: large-language-models |
| RT295 | FALSE POSITIVE | page | guardrials for llm apps | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| RT296 | PASS | gap | how do i run a kubernetes cluster | (weak) llama-cpp | 8 | no | — | transparent non-answer |
| RT297 | FALSE POSITIVE | gap | what is a helm chart | benchmarks-and-leaderboards | 21 | yes | — | confident unrelated page: benchmarks-and-leaderboards |
| RT298 | PASS | gap | terraform vs pulumi | (weak) none | 0 | no | — | transparent non-answer |
| RT299 | PASS | gap | how do i configure nginx as a reverse proxy | (weak) nodejs-for-ai | 6 | no | — | transparent non-answer |
| RT300 | PASS | gap | linux command line cheat sheet | (weak) containers | 2 | no | — | transparent non-answer |
| RT301 | PASS | gap | what is a service mesh | (weak) azure-fundamentals | 7 | no | — | transparent non-answer |
| RT302 | PASS | gap | prometheus and grafana monitoring | (weak) model-drift-and-monitoring | 28 | no | — | transparent non-answer |
| RT303 | PASS | gap | vue vs angular | (weak) none | 0 | no | — | transparent non-answer |
| RT304 | PASS | gap | how do i write unit tests with jest | (weak) prompt-engineering | 14 | no | — | transparent non-answer |
| RT305 | PASS | gap | what is a monorepo | (weak) none | 0 | no | — | transparent non-answer |
| RT306 | PASS | gap | vs code extensions for python | python | 46 | yes | — | nearby page: python |
| RT307 | PASS | gap | what is graphql federation | graphql | 59 | yes | — | nearby page: graphql |
| RT308 | PASS | gap | grpc vs rest | (weak) rest-vs-graphql | 30 | no | — | transparent non-answer |
| RT309 | PASS | gap | how do i set up tls certificates | (weak) benchmark-contamination | 6 | no | — | transparent non-answer |
| RT310 | PASS | gap | what is apache kafka | (weak) none | 0 | no | — | transparent non-answer |
| RT311 | PASS | gap | data warehouse vs data lake | (weak) ai-privacy-and-security | 23 | no | — | transparent non-answer |
| RT312 | PASS | gap | what is federated learning | (weak) deep-learning | 34 | no | — | transparent non-answer |
| RT313 | PASS | gap | differential privacy explained | (weak) ai-privacy-and-security | 15 | no | — | transparent non-answer |
| RT314 | PASS | gap | how does a recommender system work | (weak) system-prompts | 26 | no | — | transparent non-answer |
| RT315 | PASS | gap | time series forecasting with arima | (weak) test-time-compute | 26 | no | — | transparent non-answer |
| RT316 | PASS | gap | what is automl | (weak) none | 0 | no | — | transparent non-answer |
| RT317 | PASS | gap | how do i label training data | (weak) ai-privacy-and-security | 27 | no | — | transparent non-answer |
| RT318 | PASS | gap | what is causal inference | (weak) model-serving-and-inference | 25 | no | — | transparent non-answer |
| RT319 | PASS | gap | classic keyword weighting before neural embeddings | embeddings | 46 | yes | — | nearby page: embeddings |
| RT320 | PASS | gap | what is the best ai coding assistant | (weak) ai-governance | 50 | no | — | transparent non-answer |
| RT321 | PASS | gap | cursor vs copilot | (weak) ai-agent-vs-chatbot | 6 | no | — | transparent non-answer |
| RT322 | PASS | gap | what is the current top model on the leaderboard | benchmarks-and-leaderboards | 47 | yes | — | nearby page: benchmarks-and-leaderboards |
| RT323 | PASS | gap | how many parameters does the newest model have | (weak) model-cards | 28 | no | — | transparent non-answer |
| RT324 | PASS | gap | when does the next frontier model release | (weak) model-cards | 28 | no | — | transparent non-answer |
| RT325 | PASS | gap | how do i use azure devops pipelines | (weak) azure-fundamentals | 36 | no | — | transparent non-answer |
| RT326 | PASS | gap | power bi dashboards | power-platform | 46 | yes | — | nearby page: power-platform |
| RT327 | PASS | gap | how do i migrate sharepoint on premises to online | sharepoint | 71 | yes | — | nearby page: sharepoint |
| RT328 | PASS | gap | what is a sharepoint site collection | sharepoint | 71 | yes | — | nearby page: sharepoint |
| RT329 | FALSE POSITIVE | neg | transformer toy | transformers | 50 | yes | — | confident answer for out-of-scope query: transformers |
| RT330 | PASS | neg | mamba snake | (weak) state-space-models | 31 | no | — | no confident answer |
| RT331 | FALSE POSITIVE | neg | python pet | python | 46 | yes | — | confident answer for out-of-scope query: python |
| RT332 | FALSE POSITIVE | neg | react to this message | react | 54 | yes | — | confident answer for out-of-scope query: react |
| RT333 | FALSE POSITIVE | neg | docker clothing | docker | 75 | yes | — | confident answer for out-of-scope query: docker |
| RT334 | PASS | neg | agent real estate | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| RT335 | PASS | neg | model train hobby | (weak) model-cards | 28 | no | — | no confident answer |
| RT336 | FALSE POSITIVE | neg | java coffee beans | java | 46 | yes | — | confident answer for out-of-scope query: java |
| RT337 | PASS | neg | ruby gemstone ring price | (weak) none | 0 | no | — | no confident answer |
| RT338 | PASS | neg | swift taylor concert tickets | (weak) none | 0 | no | — | no confident answer |
| RT339 | FALSE POSITIVE | neg | rust remover for bike chains | rust | 46 | yes | — | confident answer for out-of-scope query: rust |
| RT340 | PASS | neg | go board game opening strategy | (weak) search-over-reasoning | 4 | no | — | no confident answer |
| RT341 | PASS | neg | kotlin island vacation | (weak) none | 0 | no | — | no confident answer |
| RT342 | PASS | neg | oracle of delphi history | (weak) git | 4 | no | — | no confident answer |
| RT343 | PASS | neg | spark plug gap size | (weak) sim-to-real-transfer | 7 | no | — | no confident answer |
| RT344 | PASS | neg | panda zoo opening hours | (weak) none | 0 | no | — | no confident answer |
| RT345 | FALSE POSITIVE | neg | git gud meaning | git | 54 | yes | — | confident answer for out-of-scope query: git |
| RT346 | PASS | neg | node of ranvier function | (weak) nodejs | 27 | no | — | no confident answer |
| RT347 | PASS | neg | cloud seeding rain | (weak) gcp-fundamentals | 23 | no | — | no confident answer |
| RT348 | PASS | neg | azure blue paint colour | (weak) azure-fundamentals | 36 | no | — | no confident answer |
| RT349 | PASS | neg | bert and ernie sesame street | (weak) encoder-decoder-vs-decoder-only | 10 | no | — | no confident answer |
| RT350 | PASS | neg | llama farm wool prices | (weak) llama-cpp | 32 | no | — | no confident answer |
| RT351 | PASS | neg | claude monet water lilies | (weak) none | 0 | no | — | no confident answer |
| RT352 | PASS | neg | gemini star sign compatibility | (weak) openid-connect | 3 | no | — | no confident answer |
| RT353 | FALSE POSITIVE | neg | rag doll sewing pattern | rag | 50 | yes | — | confident answer for out-of-scope query: rag |
| RT354 | PASS | neg | vector graphics for a logo | (weak) choosing-a-vector-store | 28 | no | — | no confident answer |
| RT355 | FALSE POSITIVE | neg | token of appreciation gift ideas | tokens | 41 | yes | — | confident answer for out-of-scope query: tokens |
| RT356 | PASS | neg | agent smith matrix quotes | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| RT357 | PASS | neg | popcorn kernel not popping | (weak) semantic-kernel | 36 | no | — | no confident answer |
| RT358 | PASS | neg | swarm of bees in my garden | (weak) multi-agent-systems | 2 | no | — | no confident answer |
| RT359 | PASS | neg | proxy voting at a shareholder meeting | (weak) self-consistency | 16 | no | — | no confident answer |
| RT360 | PASS | neg | bearer bonds explained | (weak) api-authentication | 6 | no | — | no confident answer |
| RT361 | PASS | neg | oil pipeline construction jobs | (weak) distributed-training | 8 | no | — | no confident answer |
| RT362 | PASS | neg | cookie recipe chocolate chip | (weak) none | 0 | no | — | no confident answer |
| RT363 | PASS | neg | diffusion of heat in metal | (weak) diffusion-models | 34 | no | — | no confident answer |
| RT364 | FALSE POSITIVE | neg | attention deficit in adults | transformers | 34 | yes | — | confident answer for out-of-scope query: transformers |
| RT365 | PASS | neg | neural pathways in the brain after stroke | (weak) physics-informed-neural-networks | 26 | no | — | no confident answer |
| RT366 | FALSE POSITIVE | neg | reinforcement learning in child psychology rewards | reinforcement-learning | 90 | yes | — | confident answer for out-of-scope query: reinforcement-learning |
| RT367 | FALSE POSITIVE | neg | unsupervised learning at home for kids | unsupervised-learning | 82 | yes | — | confident answer for out-of-scope query: unsupervised-learning |
| RT368 | FALSE POSITIVE | neg | embedding a youtube video in my wordpress site | embeddings | 44 | yes | — | confident answer for out-of-scope query: embeddings |
| RT369 | PASS | neg | vector in physics velocity and force | (weak) choosing-a-vector-store | 28 | no | — | no confident answer |
| RT370 | FALSE POSITIVE | neg | distillation of whisky at home | knowledge-distillation | 60 | yes | — | confident answer for out-of-scope query: knowledge-distillation |
| RT371 | FALSE POSITIVE | neg | dropout rate at university | overfitting-and-regularization | 55 | yes | — | confident answer for out-of-scope query: overfitting-and-regularization |
| RT372 | PASS | neg | tensor in general relativity | (weak) distributed-training | 10 | no | — | no confident answer |
| RT373 | FALSE POSITIVE | neg | clip art for presentations | contrastive-learning-clip | 33 | yes | — | confident answer for out-of-scope query: contrastive-learning-clip |
| RT374 | PASS | neg | chain link fence installation | (weak) chain-of-thought | 24 | no | — | no confident answer |
| RT375 | FALSE POSITIVE | neg | whisper in my ear lyrics | speech-ai | 55 | yes | — | confident answer for out-of-scope query: speech-ai |
| RT376 | PASS | neg | llama drama kids book | (weak) llama-cpp | 32 | no | — | no confident answer |
| RT377 | PASS | neg | mistral wind south of france | (weak) open-weights-models | 4 | no | — | no confident answer |
| RT378 | PASS | neg | falcon heavy launch schedule | (weak) none | 0 | no | — | no confident answer |
| RT379 | PASS | neg | bard of avon poetry | (weak) none | 0 | no | — | no confident answer |
| RT380 | FALSE POSITIVE | neg | perplexity about my career choice | evaluation-metrics-for-ai | 64 | yes | — | confident answer for out-of-scope query: evaluation-metrics-for-ai |
| RT381 | PASS | neg | sam altman net worth | (weak) csharp | 7 | no | — | no confident answer |
| RT382 | PASS | neg | best hiking boots under 150 | (weak) best-of-n-sampling | 28 | no | — | no confident answer |
| RT383 | PASS | neg | how to file self assessment tax | (weak) self-consistency | 22 | no | — | no confident answer |
| RT384 | PASS | neg | recipe for lasagna | (weak) none | 0 | no | — | no confident answer |
| RT385 | PASS | neg | who invented the telephone | (weak) none | 0 | no | — | no confident answer |
| RT386 | PASS | neg | translate good morning to french | (weak) ai-evaluation | 5 | no | — | no confident answer |
| RT387 | PASS | neg | symptoms of the flu | (weak) none | 0 | no | — | no confident answer |
| RT388 | PASS | neg | mortgage rates this week | (weak) best-of-n-sampling | 1 | no | — | no confident answer |
| RT389 | PASS | neg | plan a 10k race pace strategy | (weak) agent-planning | 15 | no | — | no confident answer |
| RT390 | PASS | neg | football scores tonight | (weak) benchmarks-and-leaderboards | 6 | no | — | no confident answer |
| RT391 | PASS | neg | how to repot a succulent | (weak) none | 0 | no | — | no confident answer |
| RT392 | PASS | neg | nvidia stock forecast | (weak) ai-weather-forecasting | 6 | no | — | no confident answer |
| RT393 | PASS | neg | should i buy bitcoin | (weak) none | 0 | no | — | no confident answer |
| RT394 | PASS | neg | best laptop for students | (weak) best-of-n-sampling | 28 | no | — | no confident answer |
| RT395 | PASS | neg | how to write a wedding speech | (weak) speech-ai | 22 | no | — | no confident answer |
| RT396 | PASS | neg | write me a poem about the sea | (weak) prompt-engineering | 14 | no | — | no confident answer |
| RT397 | PASS | neg | tell me a joke | (weak) video-generation-models | 2 | no | — | no confident answer |
| RT398 | PASS | neg | what is the meaning of life | (weak) embeddings | 5 | no | — | no confident answer |
| RT399 | PASS | neg | summarise this article for me | (weak) large-language-models | 1 | no | — | no confident answer |
| RT400 | PASS | neg | is it going to rain tomorrow | (weak) transformers-vs-state-space-models | 2 | no | — | no confident answer |
| RT401 | PASS | neg | how do i fix a flat bicycle tyre | (weak) common-prompting-mistakes | 8 | no | — | no confident answer |
| RT402 | MISS | page | use a model to check my own answers before sending them to a user | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| RT403 | MISS | page | how can i make my chatbot cite its sources | (weak) ai-agent-vs-chatbot | 27 | no | — | no accepted page in top 5 |
| RT404 | WEAK | page | why does my assistant lose context in long chats | (weak) context-engineering | 44 | no | — | not solid; accepted page in top 5 |
| RT405 | MISS | page | a model that sees my screen and clicks buttons | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| RT406 | PASS | page | stop the model leaking my system prompt | system-prompts | 72 | yes | — |  |
| RT407 | MISS | page | compare gpt style and bert style models for classification | (weak) small-language-models | 70 | no | — | no accepted page in top 5 |
| RT408 | WEAK | page | trace every tool call my agent makes | (weak) ai-agent-vs-chatbot | 35 | no | — | not solid; accepted page in top 5 |
| RT409 | FALSE POSITIVE | page | keep an ai agent from deleting my files | ai-agent-vs-chatbot | 58 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| RT410 | FALSE POSITIVE | page | how do i give an llm access to my database safely | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| RT411 | PASS | page | what is tool calling and how do i implement it | function-calling | 74 | yes | — |  |
| RT412 | MISS | page | how do i let users log in with microsoft to my ai app | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| RT413 | WEAK | page | difference between ai assistant copilot and agent | (weak) ai-agent-vs-chatbot | 97 | no | — | not solid; accepted page in top 5 |
| RT414 | WEAK | page | how do i chunk pdfs for retrieval | (weak) chunking | 52 | no | — | not solid; accepted page in top 5 |
| RT415 | FALSE POSITIVE | page | speed up llm responses without hurting quality | large-language-models | 27 | yes | — | confident wrong page: large-language-models |
| RT416 | WEAK | page | why does inference get slower with longer prompts | (weak) prompt-engineering | 34 | no | — | not solid; accepted page in top 5 |
| RT417 | PASS | page | difference between an embedding model and a chat model | embeddings | 44 | yes | — |  |
| RT418 | PASS | page | what is a good chunk overlap | chunking | 45 | yes | — |  |
| RT419 | FALSE POSITIVE | page | how do i evaluate whether retrieval found the right passage | ai-evaluation | 56 | yes | — | confident wrong page: ai-evaluation |
| RT420 | PASS | page | safe way to let ai write sql | sql | 44 | yes | — |  |
| RT421 | WEAK | page | can i run deepseek or llama privately | (weak) llama-cpp | 40 | no | — | not solid; accepted page in top 5 |
| RT422 | MISS | page | how do i stop my agent from running up a huge bill | (weak) ai-agent-vs-chatbot | 35 | no | — | no accepted page in top 5 |
| RT423 | MISS | page | model says it cannot see my document but i pasted it | (weak) model-cards | 28 | no | — | no accepted page in top 5 |
| RT424 | MISS | page | ai to turn meeting recordings into notes | (weak) ai-governance | 50 | no | — | no accepted page in top 5 |
| RT425 | FALSE POSITIVE | page | how do i know the model was not trained on my benchmark | benchmarks-and-leaderboards | 44 | yes | — | confident wrong page: benchmarks-and-leaderboards |
| RT426 | WEAK | page | how to get consistent structured data out of messy emails | (weak) structured-outputs | 35 | no | — | not solid; accepted page in top 5 |
