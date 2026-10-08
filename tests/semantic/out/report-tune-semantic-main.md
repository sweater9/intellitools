# Knowledge red-team report — tune-semantic-main

Dataset: `tests/redteam/frozen-queries.json` sha256 `4982137be9b08e5b5635cf7da758e43f51f0580d5acdb740ad27513aaf026ec0`

Total 426 · PASS 223 · WEAK 10 · MISS 7 · FALSE POSITIVE 186
Pass rate 52.3% · False-positive rate 43.7%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 230 · WEAK 10 · MISS 7 · FALSE POSITIVE 179 · pass rate 54.0% · FP rate 42.0%
Retrieval on page-kind queries (304): top-1 56.9% · top-3 71.4% · top-5 77.3%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 1/4

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 43 | 22 | 0 | 0 | 21 | 51.2% |
| neg | 79 | 33 | 0 | 0 | 46 | 41.8% |
| page | 304 | 168 | 10 | 7 | 119 | 55.3% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| acronym | 14 | 8 | 1 | 1 | 4 | 57.1% |
| ambiguous-or-off-topic | 73 | 33 | 0 | 0 | 40 | 45.2% |
| architecture | 5 | 3 | 0 | 1 | 1 | 60.0% |
| beginner | 46 | 31 | 1 | 1 | 13 | 67.4% |
| comparison | 9 | 5 | 0 | 0 | 4 | 55.6% |
| concept | 74 | 47 | 3 | 0 | 24 | 63.5% |
| conversational | 3 | 0 | 0 | 0 | 3 | 0.0% |
| coverage-probe | 39 | 19 | 0 | 0 | 20 | 48.7% |
| expert | 16 | 10 | 0 | 0 | 6 | 62.5% |
| implementation | 28 | 16 | 0 | 2 | 10 | 57.1% |
| integration | 5 | 2 | 0 | 0 | 3 | 40.0% |
| mixed-natural | 25 | 8 | 1 | 0 | 16 | 32.0% |
| security | 20 | 9 | 2 | 1 | 8 | 45.0% |
| tech-selection | 1 | 0 | 0 | 0 | 1 | 0.0% |
| troubleshooting | 14 | 5 | 0 | 0 | 9 | 35.7% |
| typo | 16 | 11 | 0 | 0 | 5 | 68.8% |
| vague | 14 | 2 | 0 | 0 | 12 | 14.3% |
| what-to-use | 24 | 14 | 2 | 1 | 7 | 58.3% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 4 | 3 | 0 | 0 | 1 | 75.0% |
| agent | 18 | 7 | 0 | 0 | 11 | 38.9% |
| ai | 37 | 16 | 1 | 0 | 20 | 43.2% |
| amb | 53 | 26 | 0 | 0 | 27 | 49.1% |
| api | 11 | 9 | 0 | 0 | 2 | 81.8% |
| arch | 6 | 4 | 1 | 0 | 1 | 66.7% |
| cloud | 5 | 4 | 0 | 1 | 0 | 80.0% |
| cv | 6 | 3 | 0 | 0 | 3 | 50.0% |
| data | 2 | 2 | 0 | 0 | 0 | 100.0% |
| db | 9 | 8 | 0 | 0 | 1 | 88.9% |
| dev | 15 | 7 | 0 | 0 | 8 | 46.7% |
| devops | 17 | 12 | 0 | 0 | 5 | 70.6% |
| dl | 10 | 5 | 0 | 2 | 3 | 50.0% |
| embed | 2 | 0 | 0 | 0 | 2 | 0.0% |
| eval | 10 | 5 | 1 | 0 | 4 | 50.0% |
| fw | 9 | 6 | 0 | 0 | 3 | 66.7% |
| gov | 8 | 3 | 0 | 0 | 5 | 37.5% |
| js | 3 | 2 | 0 | 0 | 1 | 66.7% |
| json | 4 | 2 | 1 | 0 | 1 | 50.0% |
| llm | 30 | 12 | 0 | 0 | 18 | 40.0% |
| local | 5 | 3 | 0 | 0 | 2 | 60.0% |
| mcp | 7 | 3 | 0 | 0 | 4 | 42.9% |
| mixed | 25 | 8 | 1 | 0 | 16 | 32.0% |
| ml | 7 | 3 | 1 | 1 | 2 | 42.9% |
| mlops | 8 | 3 | 0 | 1 | 4 | 37.5% |
| mm | 2 | 2 | 0 | 0 | 0 | 100.0% |
| ms | 16 | 14 | 0 | 0 | 2 | 87.5% |
| nextjs | 1 | 1 | 0 | 0 | 0 | 100.0% |
| node | 2 | 1 | 0 | 0 | 1 | 50.0% |
| off | 20 | 7 | 0 | 0 | 13 | 35.0% |
| prompt | 4 | 2 | 1 | 0 | 1 | 50.0% |
| python | 6 | 6 | 0 | 0 | 0 | 100.0% |
| rag | 6 | 3 | 0 | 1 | 2 | 50.0% |
| react | 3 | 3 | 0 | 0 | 0 | 100.0% |
| rl | 4 | 3 | 0 | 0 | 1 | 75.0% |
| robot | 7 | 2 | 0 | 0 | 5 | 28.6% |
| runtime | 9 | 3 | 0 | 0 | 6 | 33.3% |
| safety | 7 | 6 | 0 | 0 | 1 | 85.7% |
| science | 5 | 5 | 0 | 0 | 0 | 100.0% |
| sec | 11 | 4 | 2 | 0 | 5 | 36.4% |
| speech | 4 | 2 | 1 | 0 | 1 | 50.0% |
| ts | 2 | 1 | 0 | 1 | 0 | 50.0% |
| vector | 5 | 2 | 0 | 0 | 3 | 40.0% |
| video | 1 | 0 | 0 | 0 | 1 | 0.0% |

## FALSE POSITIVE
- RT004 [page/beginner] "why do language models make stuff up" → sycophancy (score 65, solid yes) — expected ai-hallucinations|how-to-reduce-hallucinations; confident wrong page: sycophancy
- RT006 [page/beginner] "how much text can an llm remember in one go" → common-prompting-mistakes (score 72, solid yes) — expected context-windows|tokens; confident wrong page: common-prompting-mistakes
- RT011 [page/troubleshooting] "my classifier is 99 percent on training data and 70 percent on new data" → neural-networks (score 58, solid yes) — expected overfitting-and-regularization; confident wrong page: neural-networks
- RT013 [page/vague] "robot dog learning to walk by trial and error" → imitation-learning (score 63, solid yes) — expected reinforcement-learning|sim-to-real-transfer|embodied-ai; confident wrong page: imitation-learning
- RT016 [page/concept] "attention is all you need explained simply" → system-prompts (score 77, solid yes) — expected transformers; confident wrong page: system-prompts
- RT018 [page/concept] "how do generative models make pictures out of noise" → generative-ai (score 67, solid yes) — expected diffusion-models; confident wrong page: generative-ai
- RT019 [page/concept] "two networks competing to make fake images" → convolutional-neural-networks (score 59, solid yes) — expected generative-adversarial-networks; confident wrong page: convolutional-neural-networks
- RT025 [page/conversational] "hey can you tell me what unsupervised learning even is" → sycophancy (score 73, solid yes) — expected unsupervised-learning; confident wrong page: sycophancy
- RT029 [page/acronym] "cnn or vit for a small dataset" → vision-transformers (score 68, solid yes) — expected cnn-vs-vision-transformer|convolutional-neural-networks|transfer-learning; confident wrong page: vision-transformers
- RT033 [page/beginner] "what is a prompt and why does wording matter" → common-prompting-mistakes (score 78, solid yes) — expected prompt-engineering|system-prompts; confident wrong page: common-prompting-mistakes
- RT037 [page/comparison] "compare my old system prompt with the new one" → large-language-models (score 69, solid yes) — expected system-prompts|prompt-engineering; confident wrong page: large-language-models
- RT038 [page/expert] "how do reasoning models spend extra tokens before answering" → thinking-budgets (score 66, solid yes) — expected reasoning-models|test-time-compute; confident wrong page: thinking-budgets
- RT041 [page/expert] "reward models trained only on final answers" → best-of-n-sampling (score 72, solid yes) — expected outcome-reward-model; confident wrong page: best-of-n-sampling
- RT042 [page/expert] "rl with unit test rewards for coding models" → dpo-vs-rlhf (score 58, solid yes) — expected reinforcement-learning-for-reasoning; confident wrong page: dpo-vs-rlhf
- RT043 [page/conversational] "can i read what the model was thinking before it answered" → common-prompting-mistakes (score 67, solid yes) — expected reasoning-transparency|reasoning-models; confident wrong page: common-prompting-mistakes
- RT044 [page/troubleshooting] "my output is truncated when using a thinking model" → quantization (score 62, solid yes) — expected thinking-budgets|reasoning-models; confident wrong page: quantization
- RT045 [page/tech-selection] "when is a thinking model worth the extra cost" → thinking-budgets (score 66, solid yes) — expected reasoning-vs-standard-models|reasoning-models|llm-cost-optimization; confident wrong page: thinking-budgets
- RT047 [page/expert] "how do grammars restrict which tokens a model can sample" → gbnf-grammars (score 58, solid yes) — expected constrained-decoding|grammar-guided-generation; confident wrong page: gbnf-grammars
- RT050 [page/troubleshooting] "why is the same prompt giving different answers every time" → system-prompts (score 77, solid yes) — expected sampling-and-decoding; confident wrong page: system-prompts
- RT051 [page/concept] "what is rag in simple words" → agentic-rag (score 69, solid yes) — expected rag; confident wrong page: agentic-rag
- RT053 [page/implementation] "how big should my chunks be" → python (score 71, solid yes) — expected chunking; confident wrong page: python
- RT054 [page/troubleshooting] "rag answers sound confident but cite the wrong document" → common-prompting-mistakes (score 63, solid yes) — expected rag-evaluation|how-to-reduce-hallucinations|hybrid-search-and-reranking|rag; confident wrong page: common-prompting-mistakes
- RT058 [page/concept] "how do i measure how similar two documents are numerically" → how-to-reduce-hallucinations (score 65, solid yes) — expected embeddings; confident wrong page: how-to-reduce-hallucinations
- RT059 [page/concept] "how can a computer know two sentences mean the same thing" → how-to-reduce-hallucinations (score 71, solid yes) — expected embeddings; confident wrong page: how-to-reduce-hallucinations
- RT062 [page/what-to-use] "which vector store should i pick for a prototype" → postgresql-for-ai-apps (score 65, solid yes) — expected choosing-a-vector-store|vector-databases; confident wrong page: postgresql-for-ai-apps
- RT063 [page/expert] "hnsw vs ivf index tradeoffs" → vector-database-vs-traditional-database (score 67, solid yes) — expected vector-databases|pgvector; confident wrong page: vector-database-vs-traditional-database
- RT064 [page/typo] "vektor databse basics" → pgvector (score 78, solid yes) — expected vector-databases; confident wrong page: pgvector
- RT066 [page/conversational] "is a bot that only answers questions already an agent" → agent-protocol-landscape (score 65, solid yes) — expected ai-agent-vs-chatbot; confident wrong page: agent-protocol-landscape
- RT068 [page/integration] "let my assistant send calendar invites on my behalf" → authentication-vs-authorization (score 71, solid yes) — expected connecting-agents-to-apps|oauth-for-ai-agents|integration-permissions|agent-tools; confident wrong page: authentication-vs-authorization
- RT069 [page/integration] "how do i connect an ai agent to slack and jira" → ai-agents (score 71, solid yes) — expected connecting-agents-to-apps|agent-tools|mcp; confident wrong page: ai-agents
- RT070 [page/security] "what permissions should an email reading agent have" → authentication-vs-authorization (score 73, solid yes) — expected integration-permissions|gmail-for-ai-agents|oauth-for-ai-agents; confident wrong page: authentication-vs-authorization
- RT073 [page/troubleshooting] "my agent gets stuck repeating the same step" → webhooks (score 74, solid yes) — expected react-agent-pattern|agentic-workflows|ai-agents; confident wrong page: webhooks
- RT074 [page/troubleshooting] "agent forgets what we decided yesterday" → how-to-reduce-hallucinations (score 70, solid yes) — expected agent-memory|context-windows; confident wrong page: how-to-reduce-hallucinations
- RT075 [page/architecture] "should i use several agents or one" → context-engineering (score 67, solid yes) — expected multi-agent-systems|agentic-workflows|ai-agents; confident wrong page: context-engineering
- RT077 [page/comparison] "langgraph versus crewai" → ai-agent-vs-chatbot (score 58, solid yes) — expected agent-frameworks-compared|langgraph|crewai; confident wrong page: ai-agent-vs-chatbot
- RT078 [page/what-to-use] "do i even need langchain" → ai-evaluation (score 68, solid yes) — expected framework-vs-direct-api|langchain|agent-frameworks-compared; confident wrong page: ai-evaluation
- RT079 [page/concept] "retrieval where the model decides to search again if results look poor" → large-language-models (score 64, solid yes) — expected agentic-rag; confident wrong page: large-language-models
- RT081 [page/what-to-use] "i need a plan for who does what between agents handling support tickets" → ai-agent-vs-chatbot (score 73, solid yes) — expected agentic-workflows|multi-agent-systems; confident wrong page: ai-agent-vs-chatbot
- RT083 [page/beginner] "i keep hearing about mcp, what problem does it solve" → chain-of-thought (score 61, solid yes) — expected mcp; confident wrong page: chain-of-thought
- RT085 [page/comparison] "why not just call the api directly instead of mcp" → mcp (score 71, solid yes) — expected mcp-vs-api; confident wrong page: mcp
- RT087 [page/security] "is it safe to install a random mcp server from github" → mcp-servers-and-clients (score 74, solid yes) — expected mcp-security; confident wrong page: mcp-servers-and-clients
- RT092 [page/expert] "where is the agent card published" → autogen (score 61, solid yes) — expected a2a-protocol; confident wrong page: autogen
- RT093 [page/typo] "modle context protocal" → a2a-vs-mcp (score 77, solid yes) — expected mcp; confident wrong page: a2a-vs-mcp
- RT100 [page/implementation] "call an ai api from javascript without exposing my key" → what-is-an-api (score 71, solid yes) — expected calling-ai-apis-with-javascript|javascript-for-ai|nodejs-for-ai|api-keys; confident wrong page: what-is-an-api
- RT107 [page/implementation] "express server that proxies model requests" → mcp-servers-and-clients (score 74, solid yes) — expected nodejs-for-ai|express; confident wrong page: mcp-servers-and-clients
- RT113 [page/beginner] "what does restful mean" → how-to-reduce-hallucinations (score 69, solid yes) — expected rest-apis; confident wrong page: how-to-reduce-hallucinations
- RT117 [page/troubleshooting] "unexpected token in json at position 0" → tokens (score 67, solid yes) — expected json-validation|what-is-json; confident wrong page: tokens
- RT122 [page/beginner] "what is inside a json web token" → openid-connect (score 72, solid yes) — expected json-web-tokens; confident wrong page: openid-connect
- RT134 [page/implementation] "store chat history for an assistant" → teams-development (score 61, solid yes) — expected databases-for-ai-apps|postgresql-for-ai-apps|agent-memory; confident wrong page: teams-development
- RT143 [page/beginner] "git basics for beginners" → python-for-ai (score 67, solid yes) — expected git; confident wrong page: python-for-ai
- RT148 [page/implementation] "package an app so it runs the same everywhere" → power-platform (score 76, solid yes) — expected docker|containers; confident wrong page: power-platform
- RT151 [page/beginner] "what is spfx" → rest-vs-graphql (score 64, solid yes) — expected sharepoint-framework; confident wrong page: rest-vs-graphql
- RT160 [page/integration] "let a daemon service call graph without a user" → connecting-agents-to-apps (score 77, solid yes) — expected microsoft-graph|microsoft-entra-id|oauth; confident wrong page: connecting-agents-to-apps
- RT164 [page/what-to-use] "which sdk should i use to call different models" → ollama (score 55, solid yes) — expected ai-sdks|model-apis|framework-vs-direct-api; confident wrong page: ollama
- RT165 [page/beginner] "what is llamaindex for" → graph-rag (score 60, solid yes) — expected llamaindex; confident wrong page: graph-rag
- RT168 [page/concept] "microsoft sdk for plugging llms into dotnet apps" → ai-sdks (score 81, solid yes) — expected semantic-kernel; confident wrong page: ai-sdks
- RT171 [page/beginner] "easiest way to pull and chat with an open model on my own pc" → go-language (score 66, solid yes) — expected ollama|local-ai; confident wrong page: go-language
- RT172 [page/what-to-use] "run an llm on my laptop without a gpu" → vllm (score 65, solid yes) — expected llama-cpp|ollama|local-ai|quantization; confident wrong page: vllm
- RT173 [page/what-to-use] "serve a model to hundreds of users" → local-ai (score 60, solid yes) — expected vllm|model-serving-and-inference|local-runtimes-compared; confident wrong page: local-ai
- RT176 [page/concept] "what is onnx" → world-models (score 62, solid yes) — expected onnx-runtime; confident wrong page: world-models
- RT178 [page/concept] "why use pytorch" → ai-evaluation (score 63, solid yes) — expected pytorch; confident wrong page: ai-evaluation
- RT179 [page/troubleshooting] "cuda out of memory when loading a 13b model" → vllm (score 77, solid yes) — expected quantization|gpus-and-ai-accelerators|model-serving-and-inference; confident wrong page: vllm
- RT181 [page/comparison] "local model or cloud api for sensitive documents" → gcp-fundamentals (score 61, solid yes) — expected local-ai-vs-cloud-ai|ai-privacy-and-security; confident wrong page: gcp-fundamentals
- RT183 [page/concept] "tiny llms that run on a phone" → local-ai (score 66, solid yes) — expected small-language-models; confident wrong page: local-ai
- RT187 [page/concept] "what is clip in computer vision" → video-generation-models (score 73, solid yes) — expected contrastive-learning-clip; confident wrong page: video-generation-models
- RT190 [gap/coverage-probe] "how does object detection like yolo work" → object-detection (score 76, solid yes) — expected convolutional-neural-networks|vision-transformers; confident unrelated page: object-detection
- RT191 [gap/coverage-probe] "opencv tutorial for face detection" → object-detection (score 71, solid yes) — expected convolutional-neural-networks; confident unrelated page: object-detection
- RT194 [page/security] "can ai clone my voice" → video-generation-models (score 69, solid yes) — expected speech-ai|c2pa-content-provenance; confident wrong page: video-generation-models
- RT196 [page/concept] "how do text to video models work" → multimodal-ai (score 78, solid yes) — expected video-generation-models|diffusion-models; confident wrong page: multimodal-ai
- RT199 [page/concept] "teaching a robot by demonstration" → embodied-ai (score 62, solid yes) — expected imitation-learning; confident wrong page: embodied-ai
- RT200 [page/troubleshooting] "my policy works in the simulator but not on hardware" → local-ai (score 58, solid yes) — expected sim-to-real-transfer; confident wrong page: local-ai
- RT201 [page/concept] "ai that imagines future states to plan actions" → ai-agents (score 78, solid yes) — expected world-models; confident wrong page: ai-agents
- RT202 [gap/coverage-probe] "how do i program a robot with ros" → robot-operating-system (score 84, solid yes) — expected embodied-ai; confident unrelated page: robot-operating-system
- RT203 [gap/coverage-probe] "how do self driving cars work" → reinforcement-learning-for-reasoning (score 57, solid yes) — expected embodied-ai|convolutional-neural-networks; confident unrelated page: reinforcement-learning-for-reasoning
- RT204 [page/security] "text hidden in a web page that tells my assistant to misbehave" → rag (score 66, solid yes) — expected prompt-injection; confident wrong page: rag
- RT206 [page/security] "is it ok to paste customer data into chatgpt" → choosing-a-vector-store (score 57, solid yes) — expected ai-privacy-and-security; confident wrong page: choosing-a-vector-store
- RT207 [page/security] "remove secrets from a log before sharing it with an ai" → api-authentication (score 66, solid yes) — expected ai-privacy-and-security|llm-observability; confident wrong page: api-authentication
- RT208 [page/security] "standard checklist of security risks for generative ai apps" → nist-ai-rmf (score 77, solid yes) — expected owasp-llm-top-10; confident wrong page: nist-ai-rmf
- RT212 [page/security] "can i tell if an image was made by ai" → video-generation-models (score 69, solid yes) — expected c2pa-content-provenance; confident wrong page: video-generation-models
- RT215 [page/beginner] "how do i know if my ai feature is any good" → sycophancy (score 75, solid yes) — expected ai-evaluation|llm-benchmarks-vs-task-evals; confident wrong page: sycophancy
- RT218 [page/concept] "using one model to grade another" → knowledge-distillation (score 65, solid yes) — expected llm-as-a-judge; confident wrong page: knowledge-distillation
- RT219 [page/implementation] "build a test set for my rag bot" → package-managers (score 60, solid yes) — expected rag-evaluation|ai-evaluation; confident wrong page: package-managers
- RT222 [page/what-to-use] "check whether each claim is backed by the source text" → multi-agent-systems (score 65, solid yes) — expected how-to-reduce-hallucinations|ai-hallucinations|rag-evaluation; confident wrong page: multi-agent-systems
- RT224 [page/beginner] "how do teams keep ml models running reliably after launch" → reinforcement-learning-for-reasoning (score 56, solid yes) — expected mlops; confident wrong page: reinforcement-learning-for-reasoning
- RT227 [page/implementation] "log prompts and tokens in production" → prompt-caching (score 57, solid yes) — expected llm-observability; confident wrong page: prompt-caching
- RT229 [page/concept] "how to split training across several gpus" → mixture-of-experts (score 58, solid yes) — expected distributed-training; confident wrong page: mixture-of-experts
- RT230 [page/implementation] "cut my llm bill" → llm-observability (score 58, solid yes) — expected llm-cost-optimization|prompt-caching; confident wrong page: llm-observability
- RT232 [page/beginner] "who signs off on ai use inside a company" → llm-observability (score 70, solid yes) — expected ai-governance; confident wrong page: llm-observability
- RT235 [page/concept] "certifiable standard for managing ai in an organisation" → nist-ai-rmf (score 78, solid yes) — expected iso-iec-42001; confident wrong page: nist-ai-rmf
- RT237 [page/concept] "are my model's error rates different across demographic groups" → mmlu (score 62, solid yes) — expected ai-bias-and-fairness; confident wrong page: mmlu
- RT238 [gap/coverage-probe] "what is gdpr and does it cover ai training data" → gdpr-and-ai (score 75, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: gdpr-and-ai
- RT239 [gap/coverage-probe] "ai regulation in the united states" → eu-ai-act (score 83, solid yes) — expected ai-governance|nist-ai-rmf; confident unrelated page: eu-ai-act
- RT246 [page/concept] "can we see inside a neural network" → graph-neural-networks (score 60, solid yes) — expected mechanistic-interpretability; confident wrong page: graph-neural-networks
- RT256 [page/concept] "how do transformers know word order" → recurrent-neural-networks (score 58, solid yes) — expected positional-encoding; confident wrong page: recurrent-neural-networks
- RT258 [page/concept] "does making llms bigger improve them predictably" → fine-tuning (score 68, solid yes) — expected scaling-laws; confident wrong page: fine-tuning
- RT259 [page/concept] "how are base models turned into chat assistants" → hugging-face (score 58, solid yes) — expected instruction-tuning|rlhf; confident wrong page: hugging-face
- RT260 [page/implementation] "fine tune a 7b model on a single consumer gpu" → quantization (score 68, solid yes) — expected lora-and-peft|fine-tuning; confident wrong page: quantization
- RT261 [page/concept] "distilling a big model into a small one" → small-language-models (score 59, solid yes) — expected knowledge-distillation; confident wrong page: small-language-models
- RT264 [page/implementation] "manage what goes into the context window for a long running agent" → multi-agent-systems (score 71, solid yes) — expected context-engineering|context-windows|agent-memory; confident wrong page: multi-agent-systems
- RT266 [page/vague] "how do i get started with ai" → llm-observability (score 71, solid yes) — expected what-is-ai|python-for-ai|large-language-models; confident wrong page: llm-observability
- RT267 [page/vague] "tell me about agents" → what-is-ai (score 73, solid yes) — expected ai-agents; confident wrong page: what-is-ai
- RT268 [page/vague] "ai security" → ai-governance (score 84, solid yes) — expected ai-privacy-and-security|prompt-injection|owasp-llm-top-10; confident wrong page: ai-governance
- RT269 [page/vague] "best way to use ai at work" → llm-observability (score 69, solid yes) — expected ai-privacy-and-security|prompt-engineering|ai-governance; confident wrong page: llm-observability
- RT271 [page/vague] "rag vs" → rag-frameworks (score 64, solid yes) — expected rag-vs-fine-tuning|rag; confident wrong page: rag-frameworks
- RT272 [neg/vague] "models" → small-language-models (score 73, solid yes) — expected none; confident answer for out-of-scope query: small-language-models
- RT273 [neg/vague] "learning" → supervised-learning (score 75, solid yes) — expected none; confident answer for out-of-scope query: supervised-learning
- RT274 [neg/vague] "explain it simply please" → ai-evaluation (score 79, solid yes) — expected none; confident answer for out-of-scope query: ai-evaluation
- RT275 [neg/vague] "best one" → best-of-n-sampling (score 74, solid yes) — expected none; confident answer for out-of-scope query: best-of-n-sampling
- RT276 [neg/vague] "help with my code" → go-language (score 61, solid yes) — expected none; confident answer for out-of-scope query: go-language
- RT277 [neg/vague] "it does not work" → ai-agents (score 71, solid yes) — expected none; confident answer for out-of-scope query: ai-agents
- RT281 [page/acronym] "what is hitl in ai workflows" → generative-ai (score 72, solid yes) — expected agentic-workflows|ai-agents; confident wrong page: generative-ai
- RT283 [page/acronym] "asr vs tts" → framework-vs-direct-api (score 58, solid yes) — expected speech-ai; confident wrong page: framework-vs-direct-api
- RT287 [page/acronym] "oss vs proprietary models" → onnx-runtime (score 69, solid yes) — expected open-weights-models; confident wrong page: onnx-runtime
- RT290 [gap/typo] "kubenetes basics" → kubernetes (score 59, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT291 [page/typo] "langchian agents" → openai-agents-sdk (score 79, solid yes) — expected langchain|agent-frameworks-compared; confident wrong page: openai-agents-sdk
- RT294 [page/typo] "halucination in llms" → ai-bias-and-fairness (score 64, solid yes) — expected ai-hallucinations; confident wrong page: ai-bias-and-fairness
- RT296 [gap/coverage-probe] "how do i run a kubernetes cluster" → kubernetes (score 78, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT297 [gap/coverage-probe] "what is a helm chart" → kubernetes (score 56, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT300 [gap/coverage-probe] "linux command line cheat sheet" → java (score 55, solid yes) — expected git; confident unrelated page: java
- RT303 [gap/coverage-probe] "vue vs angular" → agent-protocol-landscape (score 65, solid yes) — expected react|frontend-and-backend; confident unrelated page: agent-protocol-landscape
- RT304 [gap/coverage-probe] "how do i write unit tests with jest" → benchmark-contamination (score 62, solid yes) — expected javascript|typescript; confident unrelated page: benchmark-contamination
- RT305 [gap/coverage-probe] "what is a monorepo" → how-to-reduce-hallucinations (score 66, solid yes) — expected git|package-managers; confident unrelated page: how-to-reduce-hallucinations
- RT306 [gap/coverage-probe] "vs code extensions for python" → calling-ai-apis-with-python (score 78, solid yes) — expected python; confident unrelated page: calling-ai-apis-with-python
- RT308 [gap/coverage-probe] "grpc vs rest" → rest-vs-graphql (score 81, solid yes) — expected rest-apis|what-is-an-api; confident unrelated page: rest-vs-graphql
- RT315 [gap/coverage-probe] "time series forecasting with arima" → ai-weather-forecasting (score 73, solid yes) — expected supervised-learning; confident unrelated page: ai-weather-forecasting
- RT316 [gap/coverage-probe] "what is automl" → how-to-reduce-hallucinations (score 66, solid yes) — expected supervised-learning|mlops; confident unrelated page: how-to-reduce-hallucinations
- RT318 [gap/coverage-probe] "what is causal inference" → test-time-compute (score 64, solid yes) — expected supervised-learning; confident unrelated page: test-time-compute
- RT320 [gap/coverage-probe] "what is the best ai coding assistant" → ai-agent-vs-chatbot (score 72, solid yes) — expected swe-bench|agent-evaluation; confident unrelated page: ai-agent-vs-chatbot
- RT323 [gap/coverage-probe] "how many parameters does the newest model have" → world-models (score 58, solid yes) — expected large-language-models; confident unrelated page: world-models
- RT324 [gap/coverage-probe] "when does the next frontier model release" → ai-agents (score 62, solid yes) — expected none; confident unrelated page: ai-agents
- RT329 [neg/ambiguous-or-off-topic] "transformer toy" → transformers (score 60, solid yes) — expected none; confident answer for out-of-scope query: transformers
- RT330 [neg/ambiguous-or-off-topic] "mamba snake" → state-space-models (score 60, solid yes) — expected none; confident answer for out-of-scope query: state-space-models
- RT331 [neg/ambiguous-or-off-topic] "python pet" → python (score 73, solid yes) — expected none; confident answer for out-of-scope query: python
- RT332 [neg/ambiguous-or-off-topic] "react to this message" → react-chatbot-state (score 83, solid yes) — expected none; confident answer for out-of-scope query: react-chatbot-state
- RT333 [neg/ambiguous-or-off-topic] "docker clothing" → docker (score 72, solid yes) — expected none; confident answer for out-of-scope query: docker
- RT334 [neg/ambiguous-or-off-topic] "agent real estate" → autogen (score 59, solid yes) — expected none; confident answer for out-of-scope query: autogen
- RT335 [neg/ambiguous-or-off-topic] "model train hobby" → world-models (score 57, solid yes) — expected none; confident answer for out-of-scope query: world-models
- RT339 [neg/ambiguous-or-off-topic] "rust remover for bike chains" → rust (score 67, solid yes) — expected none; confident answer for out-of-scope query: rust
- RT340 [neg/ambiguous-or-off-topic] "go board game opening strategy" → ai-agents (score 64, solid yes) — expected none; confident answer for out-of-scope query: ai-agents
- RT342 [neg/ambiguous-or-off-topic] "oracle of delphi history" → microsoft-365 (score 60, solid yes) — expected none; confident answer for out-of-scope query: microsoft-365
- RT345 [neg/ambiguous-or-off-topic] "git gud meaning" → git (score 80, solid yes) — expected none; confident answer for out-of-scope query: git
- RT346 [neg/ambiguous-or-off-topic] "node of ranvier function" → nodejs (score 75, solid yes) — expected none; confident answer for out-of-scope query: nodejs
- RT353 [neg/ambiguous-or-off-topic] "rag doll sewing pattern" → agentic-rag (score 68, solid yes) — expected none; confident answer for out-of-scope query: agentic-rag
- RT354 [neg/ambiguous-or-off-topic] "vector graphics for a logo" → choosing-a-vector-store (score 68, solid yes) — expected none; confident answer for out-of-scope query: choosing-a-vector-store
- RT355 [neg/ambiguous-or-off-topic] "token of appreciation gift ideas" → tokens (score 60, solid yes) — expected none; confident answer for out-of-scope query: tokens
- RT363 [neg/ambiguous-or-off-topic] "diffusion of heat in metal" → diffusion-models (score 63, solid yes) — expected none; confident answer for out-of-scope query: diffusion-models
- RT365 [neg/ambiguous-or-off-topic] "neural pathways in the brain after stroke" → neural-networks (score 62, solid yes) — expected none; confident answer for out-of-scope query: neural-networks
- RT366 [neg/ambiguous-or-off-topic] "reinforcement learning in child psychology rewards" → reinforcement-learning (score 79, solid yes) — expected none; confident answer for out-of-scope query: reinforcement-learning
- RT367 [neg/ambiguous-or-off-topic] "unsupervised learning at home for kids" → supervised-learning (score 55, solid yes) — expected none; confident answer for out-of-scope query: supervised-learning
- RT368 [neg/ambiguous-or-off-topic] "embedding a youtube video in my wordpress site" → streaming-ai-with-nodejs (score 59, solid yes) — expected none; confident answer for out-of-scope query: streaming-ai-with-nodejs
- RT369 [neg/ambiguous-or-off-topic] "vector in physics velocity and force" → distributed-training (score 62, solid yes) — expected none; confident answer for out-of-scope query: distributed-training
- RT370 [neg/ambiguous-or-off-topic] "distillation of whisky at home" → knowledge-distillation (score 62, solid yes) — expected none; confident answer for out-of-scope query: knowledge-distillation
- RT372 [neg/ambiguous-or-off-topic] "tensor in general relativity" → markov-decision-processes (score 57, solid yes) — expected none; confident answer for out-of-scope query: markov-decision-processes
- RT373 [neg/ambiguous-or-off-topic] "clip art for presentations" → vision-language-models (score 59, solid yes) — expected none; confident answer for out-of-scope query: vision-language-models
- RT375 [neg/ambiguous-or-off-topic] "whisper in my ear lyrics" → speech-ai (score 61, solid yes) — expected none; confident answer for out-of-scope query: speech-ai
- RT378 [neg/ambiguous-or-off-topic] "falcon heavy launch schedule" → onnx-runtime (score 56, solid yes) — expected none; confident answer for out-of-scope query: onnx-runtime
- RT380 [neg/ambiguous-or-off-topic] "perplexity about my career choice" → human-preference-evaluation (score 63, solid yes) — expected none; confident answer for out-of-scope query: human-preference-evaluation
- RT383 [neg/ambiguous-or-off-topic] "how to file self assessment tax" → ai-governance (score 60, solid yes) — expected none; confident answer for out-of-scope query: ai-governance
- RT386 [neg/ambiguous-or-off-topic] "translate good morning to french" → rag-vs-fine-tuning (score 60, solid yes) — expected none; confident answer for out-of-scope query: rag-vs-fine-tuning
- RT388 [neg/ambiguous-or-off-topic] "mortgage rates this week" → prompt-caching (score 55, solid yes) — expected none; confident answer for out-of-scope query: prompt-caching
- RT389 [neg/ambiguous-or-off-topic] "plan a 10k race pace strategy" → agent-planning (score 61, solid yes) — expected none; confident answer for out-of-scope query: agent-planning
- RT390 [neg/ambiguous-or-off-topic] "football scores tonight" → deep-q-networks (score 62, solid yes) — expected none; confident answer for out-of-scope query: deep-q-networks
- RT391 [neg/ambiguous-or-off-topic] "how to repot a succulent" → ai-evaluation (score 75, solid yes) — expected none; confident answer for out-of-scope query: ai-evaluation
- RT393 [neg/ambiguous-or-off-topic] "should i buy bitcoin" → benchmark-contamination (score 67, solid yes) — expected none; confident answer for out-of-scope query: benchmark-contamination
- RT395 [neg/ambiguous-or-off-topic] "how to write a wedding speech" → speech-ai (score 60, solid yes) — expected none; confident answer for out-of-scope query: speech-ai
- RT396 [neg/ambiguous-or-off-topic] "write me a poem about the sea" → rust (score 57, solid yes) — expected none; confident answer for out-of-scope query: rust
- RT397 [neg/ambiguous-or-off-topic] "tell me a joke" → sycophancy (score 76, solid yes) — expected none; confident answer for out-of-scope query: sycophancy
- RT398 [neg/ambiguous-or-off-topic] "what is the meaning of life" → what-is-ai (score 64, solid yes) — expected none; confident answer for out-of-scope query: what-is-ai
- RT399 [neg/ambiguous-or-off-topic] "summarise this article for me" → prompt-engineering (score 70, solid yes) — expected none; confident answer for out-of-scope query: prompt-engineering
- RT400 [neg/ambiguous-or-off-topic] "is it going to rain tomorrow" → java (score 64, solid yes) — expected none; confident answer for out-of-scope query: java
- RT402 [page/mixed-natural] "use a model to check my own answers before sending them to a user" → agentic-rag (score 73, solid yes) — expected ai-guardrails|llm-as-a-judge|how-to-reduce-hallucinations; confident wrong page: agentic-rag
- RT404 [page/mixed-natural] "why does my assistant lose context in long chats" → common-prompting-mistakes (score 73, solid yes) — expected context-windows|agent-memory; confident wrong page: common-prompting-mistakes
- RT405 [page/mixed-natural] "a model that sees my screen and clicks buttons" → typescript-api-client-types (score 57, solid yes) — expected computer-use-agents; confident wrong page: typescript-api-client-types
- RT408 [page/mixed-natural] "trace every tool call my agent makes" → ai-agent-vs-chatbot (score 67, solid yes) — expected llm-observability|agent-evaluation; confident wrong page: ai-agent-vs-chatbot
- RT409 [page/mixed-natural] "keep an ai agent from deleting my files" → prisma-and-orms (score 63, solid yes) — expected integration-permissions|code-execution-sandboxing|agent-tools|ai-guardrails; confident wrong page: prisma-and-orms
- RT410 [page/mixed-natural] "how do i give an llm access to my database safely" → llm-observability (score 60, solid yes) — expected agent-tools|integration-permissions|databases-for-ai-apps|function-calling; confident wrong page: llm-observability
- RT411 [page/mixed-natural] "what is tool calling and how do i implement it" → framework-vs-direct-api (score 73, solid yes) — expected function-calling|agent-tools; confident wrong page: framework-vs-direct-api
- RT412 [page/mixed-natural] "how do i let users log in with microsoft to my ai app" → nodejs-for-ai (score 71, solid yes) — expected microsoft-entra-id|oauth|openid-connect; confident wrong page: nodejs-for-ai
- RT416 [page/mixed-natural] "why does inference get slower with longer prompts" → common-prompting-mistakes (score 68, solid yes) — expected kv-cache|context-windows|model-serving-and-inference; confident wrong page: common-prompting-mistakes
- RT420 [page/mixed-natural] "safe way to let ai write sql" → git (score 62, solid yes) — expected sql|agent-tools|code-execution-sandboxing|prompt-injection; confident wrong page: git
- RT421 [page/mixed-natural] "can i run deepseek or llama privately" → gbnf-grammars (score 57, solid yes) — expected local-ai|open-weights-models|ollama; confident wrong page: gbnf-grammars
- RT422 [page/mixed-natural] "how do i stop my agent from running up a huge bill" → ai-agent-vs-chatbot (score 77, solid yes) — expected llm-cost-optimization|react-agent-pattern|agentic-workflows; confident wrong page: ai-agent-vs-chatbot
- RT423 [page/mixed-natural] "model says it cannot see my document but i pasted it" → sql-vs-nosql (score 68, solid yes) — expected context-windows|tokens; confident wrong page: sql-vs-nosql
- RT424 [page/mixed-natural] "ai to turn meeting recordings into notes" → git (score 55, solid yes) — expected speech-ai; confident wrong page: git
- RT425 [page/mixed-natural] "how do i know the model was not trained on my benchmark" → llm-benchmarks-vs-task-evals (score 68, solid yes) — expected benchmark-contamination; confident wrong page: llm-benchmarks-vs-task-evals
- RT426 [page/mixed-natural] "how to get consistent structured data out of messy emails" → embeddings (score 57, solid yes) — expected structured-outputs|document-understanding-ai|constrained-decoding; confident wrong page: embeddings

## MISS
- RT009 [page/beginner] "labelled versus unlabelled data in machine learning" → (weak) sql-vs-nosql (score 41, solid no) — expected supervised-learning|unsupervised-learning; no accepted page in top 5
- RT012 [page/implementation] "reuse imagenet weights for my own photos" → (weak) contrastive-learning-clip (score 40, solid no) — expected transfer-learning|convolutional-neural-networks; no accepted page in top 5
- RT028 [page/acronym] "gnn use cases" → (weak) code-execution-sandboxing (score 44, solid no) — expected graph-neural-networks; no accepted page in top 5
- RT052 [page/architecture] "design a pipeline that answers questions from our internal wiki" → (weak) api-authentication (score 41, solid no) — expected rag|chunking|embeddings|vector-databases; no accepted page in top 5
- RT101 [page/implementation] "type the response from my ai endpoint" → (weak) what-is-ai (score 55, solid no) — expected typescript-api-client-types|typescript-for-ai; no accepted page in top 5
- RT139 [page/security] "my s3 bucket is public by mistake" → (weak) environment-variables (score 51, solid no) — expected aws-fundamentals; no accepted page in top 5
- RT228 [page/what-to-use] "how many gpus do i need to serve a 70b model" → (weak) flash-attention (score 53, solid no) — expected gpus-and-ai-accelerators|model-serving-and-inference|quantization; no accepted page in top 5

## WEAK
- RT002 [page/beginner] "explain neural nets like im five" → (weak) deep-learning (score 54, solid no) — expected neural-networks|deep-learning; not solid; accepted page in top 5
- RT026 [page/acronym] "sgd vs adam which one" → (weak) csharp (score 53, solid no) — expected backpropagation-and-gradient-descent; not solid; accepted page in top 5
- RT034 [page/what-to-use] "i need to write a good prompt for summarising legal contracts" → (weak) reasoning-transparency (score 54, solid no) — expected prompt-engineering|common-prompting-mistakes; not solid; accepted page in top 5
- RT119 [page/what-to-use] "pretty print and validate this json" → json-validation (score 77, solid yes) — expected json-validation|what-is-json; expected tool not offered: json-formatter
- RT195 [page/concept] "what is whisper" → (weak) speech-ai (score 54, solid no) — expected speech-ai; not solid; accepted page in top 5
- RT211 [page/security] "how do i sandbox code the model writes" → (weak) code-execution-sandboxing (score 54, solid no) — expected code-execution-sandboxing; not solid; accepted page in top 5
- RT213 [page/security] "what is jailbreaking a model" → (weak) world-models (score 48, solid no) — expected prompt-injection|red-teaming; not solid; accepted page in top 5
- RT221 [page/concept] "benchmark where models fix real github issues" → (weak) benchmarks-and-leaderboards (score 43, solid no) — expected swe-bench; not solid; accepted page in top 5
- RT254 [page/concept] "how does a kv cache save compute" → (weak) kv-cache (score 53, solid no) — expected kv-cache; not solid; accepted page in top 5
- RT415 [page/mixed-natural] "speed up llm responses without hurting quality" → (weak) llm-cost-optimization (score 50, solid no) — expected speculative-decoding|model-serving-and-inference|kv-cache; not solid; accepted page in top 5

## Path completeness failures
- RT068 "let my assistant send calendar invites on my behalf" top authentication-vs-authorization; learn oauth, openid-connect, api-keys, json-web-tokens, frontend-and-backend
- RT069 "how do i connect an ai agent to slack and jira" top ai-agents; learn ai-agent-vs-chatbot, agent-tools, function-calling, agent-memory, multi-agent-systems
- RT070 "what permissions should an email reading agent have" top authentication-vs-authorization; learn oauth, openid-connect, api-keys, json-web-tokens, frontend-and-backend

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RT001 | PASS | page | ai vs machine learning whats the difference | what-is-ai | 73 | yes | — |  |
| RT002 | WEAK | page | explain neural nets like im five | (weak) deep-learning | 54 | no | — | not solid; accepted page in top 5 |
| RT003 | PASS | page | how does chatgpt actually work | large-language-models | 73 | yes | — |  |
| RT004 | FALSE POSITIVE | page | why do language models make stuff up | sycophancy | 65 | yes | — | confident wrong page: sycophancy |
| RT005 | PASS | page | wats a token in ai | tokens | 73 | yes | — |  |
| RT006 | FALSE POSITIVE | page | how much text can an llm remember in one go | common-prompting-mistakes | 72 | yes | — | confident wrong page: common-prompting-mistakes |
| RT007 | PASS | page | what makes a model generative | generative-ai | 71 | yes | — |  |
| RT008 | PASS | page | is deep learning the same as ml | deep-learning | 77 | yes | — |  |
| RT009 | MISS | page | labelled versus unlabelled data in machine learning | (weak) sql-vs-nosql | 41 | no | — | no accepted page in top 5 |
| RT010 | PASS | page | how does a neural network adjust itself while training | backpropagation-and-gradient-descent | 63 | yes | — |  |
| RT011 | FALSE POSITIVE | page | my classifier is 99 percent on training data and 70 percent on new data | neural-networks | 58 | yes | — | confident wrong page: neural-networks |
| RT012 | MISS | page | reuse imagenet weights for my own photos | (weak) contrastive-learning-clip | 40 | no | — | no accepted page in top 5 |
| RT013 | FALSE POSITIVE | page | robot dog learning to walk by trial and error | imitation-learning | 63 | yes | — | confident wrong page: imitation-learning |
| RT014 | PASS | page | how do image classifiers detect edges and shapes | convolutional-neural-networks | 58 | yes | — |  |
| RT015 | PASS | page | why did transformers replace lstms | recurrent-neural-networks | 69 | yes | — |  |
| RT016 | FALSE POSITIVE | page | attention is all you need explained simply | system-prompts | 77 | yes | — | confident wrong page: system-prompts |
| RT017 | PASS | page | what is a latent space | variational-autoencoders | 75 | yes | — |  |
| RT018 | FALSE POSITIVE | page | how do generative models make pictures out of noise | generative-ai | 67 | yes | — | confident wrong page: generative-ai |
| RT019 | FALSE POSITIVE | page | two networks competing to make fake images | convolutional-neural-networks | 59 | yes | — | confident wrong page: convolutional-neural-networks |
| RT020 | PASS | page | which neural network type handles molecules and social networks | graph-neural-networks | 79 | yes | — |  |
| RT021 | PASS | page | why does adam use decoupled weight decay | backpropagation-and-gradient-descent | 57 | yes | — |  |
| RT022 | PASS | page | how does ppo clip the policy update | proximal-policy-optimization | 56 | yes | — |  |
| RT023 | PASS | page | bellman optimality equation intuition | markov-decision-processes | 68 | yes | — |  |
| RT024 | PASS | page | why does dqn need a target network | deep-q-networks | 59 | yes | — |  |
| RT025 | FALSE POSITIVE | page | hey can you tell me what unsupervised learning even is | sycophancy | 73 | yes | — | confident wrong page: sycophancy |
| RT026 | WEAK | page | sgd vs adam which one | (weak) csharp | 53 | no | — | not solid; accepted page in top 5 |
| RT027 | PASS | page | what is a vae used for | variational-autoencoders | 78 | yes | — |  |
| RT028 | MISS | page | gnn use cases | (weak) code-execution-sandboxing | 44 | no | — | no accepted page in top 5 |
| RT029 | FALSE POSITIVE | page | cnn or vit for a small dataset | vision-transformers | 68 | yes | — | confident wrong page: vision-transformers |
| RT030 | PASS | page | transfomer architecure basics | transformers | 57 | yes | — |  |
| RT031 | PASS | page | reinforcment learning explaned | reinforcement-learning | 75 | yes | — |  |
| RT032 | PASS | page | embedings vs tokens | embeddings | 66 | yes | — |  |
| RT033 | FALSE POSITIVE | page | what is a prompt and why does wording matter | common-prompting-mistakes | 78 | yes | — | confident wrong page: common-prompting-mistakes |
| RT034 | WEAK | page | i need to write a good prompt for summarising legal contracts | (weak) reasoning-transparency | 54 | no | — | not solid; accepted page in top 5 |
| RT035 | PASS | page | what goes in a system prompt for a customer support bot | system-prompts | 59 | yes | — |  |
| RT036 | PASS | page | the model keeps ignoring my instructions | common-prompting-mistakes | 59 | yes | — |  |
| RT037 | FALSE POSITIVE | page | compare my old system prompt with the new one | large-language-models | 69 | yes | — | confident wrong page: large-language-models |
| RT038 | FALSE POSITIVE | page | how do reasoning models spend extra tokens before answering | thinking-budgets | 66 | yes | — | confident wrong page: thinking-budgets |
| RT039 | PASS | page | majority vote across sampled chains of thought | self-consistency | 67 | yes | — |  |
| RT040 | PASS | page | step level verifier for maths solutions | process-reward-model | 66 | yes | — |  |
| RT041 | FALSE POSITIVE | page | reward models trained only on final answers | best-of-n-sampling | 72 | yes | — | confident wrong page: best-of-n-sampling |
| RT042 | FALSE POSITIVE | page | rl with unit test rewards for coding models | dpo-vs-rlhf | 58 | yes | — | confident wrong page: dpo-vs-rlhf |
| RT043 | FALSE POSITIVE | page | can i read what the model was thinking before it answered | common-prompting-mistakes | 67 | yes | — | confident wrong page: common-prompting-mistakes |
| RT044 | FALSE POSITIVE | page | my output is truncated when using a thinking model | quantization | 62 | yes | — | confident wrong page: quantization |
| RT045 | FALSE POSITIVE | page | when is a thinking model worth the extra cost | thinking-budgets | 66 | yes | — | confident wrong page: thinking-budgets |
| RT046 | PASS | page | make the model return json that always matches my schema | json-schema | 59 | yes | — |  |
| RT047 | FALSE POSITIVE | page | how do grammars restrict which tokens a model can sample | gbnf-grammars | 58 | yes | — | confident wrong page: gbnf-grammars |
| RT048 | PASS | page | json mode or function calling for extraction | structured-outputs | 80 | yes | — |  |
| RT049 | PASS | page | what does temperature do | sampling-and-decoding | 63 | yes | — |  |
| RT050 | FALSE POSITIVE | page | why is the same prompt giving different answers every time | system-prompts | 77 | yes | — | confident wrong page: system-prompts |
| RT051 | FALSE POSITIVE | page | what is rag in simple words | agentic-rag | 69 | yes | — | confident wrong page: agentic-rag |
| RT052 | MISS | page | design a pipeline that answers questions from our internal wiki | (weak) api-authentication | 41 | no | — | no accepted page in top 5 |
| RT053 | FALSE POSITIVE | page | how big should my chunks be | python | 71 | yes | — | confident wrong page: python |
| RT054 | FALSE POSITIVE | page | rag answers sound confident but cite the wrong document | common-prompting-mistakes | 63 | yes | — | confident wrong page: common-prompting-mistakes |
| RT055 | PASS | page | should i fine tune or use retrieval for company docs | rag-vs-fine-tuning | 64 | yes | — |  |
| RT056 | PASS | page | reranking with a cross encoder after bm25 | hybrid-search-and-reranking | 67 | yes | — |  |
| RT057 | PASS | page | multi hop questions over a knowledge graph | graph-rag | 62 | yes | — |  |
| RT058 | FALSE POSITIVE | page | how do i measure how similar two documents are numerically | how-to-reduce-hallucinations | 65 | yes | — | confident wrong page: how-to-reduce-hallucinations |
| RT059 | FALSE POSITIVE | page | how can a computer know two sentences mean the same thing | how-to-reduce-hallucinations | 71 | yes | — | confident wrong page: how-to-reduce-hallucinations |
| RT060 | PASS | page | store embeddings in postgres | pgvector | 87 | yes | — |  |
| RT061 | PASS | page | can plain postgres handle semantic search or must i add a vector store | pgvector | 81 | yes | — |  |
| RT062 | FALSE POSITIVE | page | which vector store should i pick for a prototype | postgresql-for-ai-apps | 65 | yes | — | confident wrong page: postgresql-for-ai-apps |
| RT063 | FALSE POSITIVE | page | hnsw vs ivf index tradeoffs | vector-database-vs-traditional-database | 67 | yes | — | confident wrong page: vector-database-vs-traditional-database |
| RT064 | FALSE POSITIVE | page | vektor databse basics | pgvector | 78 | yes | — | confident wrong page: pgvector |
| RT065 | PASS | page | what is an ai agent | ai-agents | 89 | yes | — |  |
| RT066 | FALSE POSITIVE | page | is a bot that only answers questions already an agent | agent-protocol-landscape | 65 | yes | — | confident wrong page: agent-protocol-landscape |
| RT067 | PASS | page | i want an ai agent that can read gmail | gmail-for-ai-agents | 75 | yes | — |  |
| RT068 | FALSE POSITIVE | page | let my assistant send calendar invites on my behalf | authentication-vs-authorization | 71 | yes | — | confident wrong page: authentication-vs-authorization |
| RT069 | FALSE POSITIVE | page | how do i connect an ai agent to slack and jira | ai-agents | 71 | yes | — | confident wrong page: ai-agents |
| RT070 | FALSE POSITIVE | page | what permissions should an email reading agent have | authentication-vs-authorization | 73 | yes | — | confident wrong page: authentication-vs-authorization |
| RT071 | PASS | page | can a malicious email hijack my agent | gmail-for-ai-agents | 67 | yes | — |  |
| RT072 | PASS | page | how do agents decide which tool to call | react-agent-pattern | 69 | yes | — |  |
| RT073 | FALSE POSITIVE | page | my agent gets stuck repeating the same step | webhooks | 74 | yes | — | confident wrong page: webhooks |
| RT074 | FALSE POSITIVE | page | agent forgets what we decided yesterday | how-to-reduce-hallucinations | 70 | yes | — | confident wrong page: how-to-reduce-hallucinations |
| RT075 | FALSE POSITIVE | page | should i use several agents or one | context-engineering | 67 | yes | — | confident wrong page: context-engineering |
| RT076 | PASS | page | which framework for a production agent | choosing-an-agent-framework | 75 | yes | — |  |
| RT077 | FALSE POSITIVE | page | langgraph versus crewai | ai-agent-vs-chatbot | 58 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| RT078 | FALSE POSITIVE | page | do i even need langchain | ai-evaluation | 68 | yes | — | confident wrong page: ai-evaluation |
| RT079 | FALSE POSITIVE | page | retrieval where the model decides to search again if results look poor | large-language-models | 64 | yes | — | confident wrong page: large-language-models |
| RT080 | PASS | page | what is the react prompting pattern for agents | react-agent-pattern | 75 | yes | — |  |
| RT081 | FALSE POSITIVE | page | i need a plan for who does what between agents handling support tickets | ai-agent-vs-chatbot | 73 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| RT082 | PASS | page | how do agent evaluation harnesses score tool trajectories | agent-evaluation | 73 | yes | — |  |
| RT083 | FALSE POSITIVE | page | i keep hearing about mcp, what problem does it solve | chain-of-thought | 61 | yes | — | confident wrong page: chain-of-thought |
| RT084 | PASS | page | why would i build an mcp server | mcp-servers-and-clients | 80 | yes | — |  |
| RT085 | FALSE POSITIVE | page | why not just call the api directly instead of mcp | mcp | 71 | yes | — | confident wrong page: mcp |
| RT086 | PASS | page | mcp or plain function calling for my app | function-calling-vs-mcp | 78 | yes | — |  |
| RT087 | FALSE POSITIVE | page | is it safe to install a random mcp server from github | mcp-servers-and-clients | 74 | yes | — | confident wrong page: mcp-servers-and-clients |
| RT088 | PASS | page | tool poisoning in mcp | mcp-security | 86 | yes | — |  |
| RT089 | PASS | page | what is a2a | a2a-protocol | 80 | yes | — |  |
| RT090 | PASS | page | are a2a and mcp competitors | a2a-vs-mcp | 83 | yes | — |  |
| RT091 | PASS | page | how would agents from different vendors collaborate | a2a-protocol | 63 | yes | — |  |
| RT092 | FALSE POSITIVE | page | where is the agent card published | autogen | 61 | yes | — | confident wrong page: autogen |
| RT093 | FALSE POSITIVE | page | modle context protocal | a2a-vs-mcp | 77 | yes | — | confident wrong page: a2a-vs-mcp |
| RT094 | PASS | page | how do i call an llm api from python | calling-ai-apis-with-python | 89 | yes | — |  |
| RT095 | PASS | page | build a small rag app in python | rag-with-python | 87 | yes | — |  |
| RT096 | PASS | page | read a csv and clean it before sending to a model | python-data-for-ai | 62 | yes | — |  |
| RT097 | PASS | page | which python libraries do i need for ai work | python-ai-libraries | 84 | yes | — |  |
| RT098 | PASS | page | pip install broke my environment | package-managers | 62 | yes | — |  |
| RT099 | PASS | page | python for machine learning where to begin | python-for-ai | 62 | yes | — |  |
| RT100 | FALSE POSITIVE | page | call an ai api from javascript without exposing my key | what-is-an-api | 71 | yes | — | confident wrong page: what-is-an-api |
| RT101 | MISS | page | type the response from my ai endpoint | (weak) what-is-ai | 55 | no | — | no accepted page in top 5 |
| RT102 | PASS | page | stream tokens to the browser as they arrive | streaming-ai-responses | 74 | yes | — |  |
| RT103 | PASS | page | manage chat message state in react | react-chatbot-state | 87 | yes | — |  |
| RT104 | PASS | page | build a chat ui with react | react-ai-interfaces | 87 | yes | — |  |
| RT105 | PASS | page | what is react used for | react | 86 | yes | — |  |
| RT106 | PASS | page | should i use next.js for an ai chat app | nextjs | 81 | yes | — |  |
| RT107 | FALSE POSITIVE | page | express server that proxies model requests | mcp-servers-and-clients | 74 | yes | — | confident wrong page: mcp-servers-and-clients |
| RT108 | PASS | page | node js streming response | nodejs | 91 | yes | — |  |
| RT109 | PASS | page | why use typescript instead of javascript | typescript | 80 | yes | — |  |
| RT110 | PASS | page | typescript or javascript for a small tool | typescript | 82 | yes | — |  |
| RT111 | PASS | page | what is an api | what-is-an-api | 91 | yes | — |  |
| RT112 | PASS | page | rest vs graphql which one | rest-vs-graphql | 83 | yes | — |  |
| RT113 | FALSE POSITIVE | page | what does restful mean | how-to-reduce-hallucinations | 69 | yes | — | confident wrong page: how-to-reduce-hallucinations |
| RT114 | PASS | page | where should i keep my api keys | api-keys | 67 | yes | — |  |
| RT115 | PASS | page | api key versus oauth token | oauth | 81 | yes | — |  |
| RT116 | PASS | page | what is json | what-is-json | 88 | yes | — |  |
| RT117 | FALSE POSITIVE | page | unexpected token in json at position 0 | tokens | 67 | yes | — | confident wrong page: tokens |
| RT118 | PASS | page | validate an api payload against a schema | json-schema | 83 | yes | — |  |
| RT119 | WEAK | page | pretty print and validate this json | json-validation | 77 | yes | — | expected tool not offered: json-formatter |
| RT120 | PASS | page | what is a webhook | webhooks | 84 | yes | — |  |
| RT121 | PASS | page | browser says blocked by cors policy | cors | 83 | yes | — |  |
| RT122 | FALSE POSITIVE | page | what is inside a json web token | openid-connect | 72 | yes | — | confident wrong page: openid-connect |
| RT123 | PASS | page | difference between authentication and authorization | authentication-vs-authorization | 90 | yes | — |  |
| RT124 | PASS | page | what is the oauth authorization code flow | oauth | 91 | yes | — |  |
| RT125 | PASS | page | openid connect vs oauth | openid-connect | 91 | yes | — |  |
| RT126 | PASS | page | when to use sql vs nosql | sql-vs-nosql | 92 | yes | — |  |
| RT127 | PASS | page | what is a relational database | postgresql | 86 | yes | — |  |
| RT128 | PASS | page | how do i join two tables | sql | 68 | yes | — |  |
| RT129 | PASS | page | postgres or mysql for a new project | postgresql | 85 | yes | — |  |
| RT130 | PASS | page | sqlite for a small app | sqlite | 87 | yes | — |  |
| RT131 | PASS | page | what is redis used for | redis | 63 | yes | — |  |
| RT132 | PASS | page | what is an orm | prisma-and-orms | 73 | yes | — |  |
| RT133 | PASS | page | which database should an ai app use | postgresql-for-ai-apps | 82 | yes | — |  |
| RT134 | FALSE POSITIVE | page | store chat history for an assistant | teams-development | 61 | yes | — | confident wrong page: teams-development |
| RT135 | PASS | page | what is aws and what are its main services | aws-fundamentals | 65 | yes | — |  |
| RT136 | PASS | page | azure basics for developers | azure-fundamentals | 77 | yes | — |  |
| RT137 | PASS | page | what is gcp | gcp-fundamentals | 67 | yes | — |  |
| RT138 | PASS | page | aws vs azure vs gcp for hosting a model | aws-fundamentals | 69 | yes | — |  |
| RT139 | MISS | page | my s3 bucket is public by mistake | (weak) environment-variables | 51 | no | — | no accepted page in top 5 |
| RT140 | PASS | page | what is docker | docker | 93 | yes | — |  |
| RT141 | PASS | page | container versus virtual machine | containers | 85 | yes | — |  |
| RT142 | PASS | page | what is ci cd | cicd | 89 | yes | — |  |
| RT143 | FALSE POSITIVE | page | git basics for beginners | python-for-ai | 67 | yes | — | confident wrong page: python-for-ai |
| RT144 | PASS | page | git says i have a merge conflict | git | 71 | yes | — |  |
| RT145 | PASS | page | what is github and how is it different from git | git | 84 | yes | — |  |
| RT146 | PASS | page | set up automatic tests on every pull request | cicd | 67 | yes | — |  |
| RT147 | PASS | page | what are environment variables for | environment-variables | 68 | yes | — |  |
| RT148 | FALSE POSITIVE | page | package an app so it runs the same everywhere | power-platform | 76 | yes | — | confident wrong page: power-platform |
| RT149 | PASS | page | npm install fails with dependency errors | package-managers | 61 | yes | — |  |
| RT150 | PASS | page | what is sharepoint | sharepoint | 93 | yes | — |  |
| RT151 | FALSE POSITIVE | page | what is spfx | rest-vs-graphql | 64 | yes | — | confident wrong page: rest-vs-graphql |
| RT152 | PASS | page | build my first spfx web part | build-spfx-web-part | 84 | yes | — |  |
| RT153 | PASS | page | sharepont framwork webpart | sharepoint-framework | 94 | yes | — |  |
| RT154 | PASS | page | what is microsoft graph | microsoft-graph | 91 | yes | — |  |
| RT155 | PASS | page | read a user's calendar through microsoft graph | microsoft-graph | 81 | yes | — |  |
| RT156 | PASS | page | what is entra id | microsoft-entra-id | 88 | yes | — |  |
| RT157 | PASS | page | what is power automate and power apps | power-platform | 85 | yes | — |  |
| RT158 | PASS | page | build a teams tab or bot | teams-development | 83 | yes | — |  |
| RT159 | PASS | page | what is microsoft 365 | microsoft-365 | 94 | yes | — |  |
| RT160 | FALSE POSITIVE | page | let a daemon service call graph without a user | connecting-agents-to-apps | 77 | yes | — | confident wrong page: connecting-agents-to-apps |
| RT161 | PASS | page | spfx or power apps for an intranet form | power-platform | 82 | yes | — |  |
| RT162 | PASS | page | what is an ai framework | what-is-an-ai-framework | 91 | yes | — |  |
| RT163 | PASS | page | what is hugging face | hugging-face | 76 | yes | — |  |
| RT164 | FALSE POSITIVE | page | which sdk should i use to call different models | ollama | 55 | yes | — | confident wrong page: ollama |
| RT165 | FALSE POSITIVE | page | what is llamaindex for | graph-rag | 60 | yes | — | confident wrong page: graph-rag |
| RT166 | PASS | page | langchain or llamaindex for rag | rag-frameworks | 89 | yes | — |  |
| RT167 | PASS | page | framework where you declare modules and let an optimizer tune the prompts | dspy | 65 | yes | — |  |
| RT168 | FALSE POSITIVE | page | microsoft sdk for plugging llms into dotnet apps | ai-sdks | 81 | yes | — | confident wrong page: ai-sdks |
| RT169 | PASS | page | what is the openai agents sdk | openai-agents-sdk | 94 | yes | — |  |
| RT170 | PASS | page | what is autogen | autogen | 82 | yes | — |  |
| RT171 | FALSE POSITIVE | page | easiest way to pull and chat with an open model on my own pc | go-language | 66 | yes | — | confident wrong page: go-language |
| RT172 | FALSE POSITIVE | page | run an llm on my laptop without a gpu | vllm | 65 | yes | — | confident wrong page: vllm |
| RT173 | FALSE POSITIVE | page | serve a model to hundreds of users | local-ai | 60 | yes | — | confident wrong page: local-ai |
| RT174 | PASS | page | ollama versus vllm | local-runtimes-compared | 64 | yes | — |  |
| RT175 | PASS | page | what is gguf | llama-cpp | 60 | yes | — |  |
| RT176 | FALSE POSITIVE | page | what is onnx | world-models | 62 | yes | — | confident wrong page: world-models |
| RT177 | PASS | page | how do i run a model in the browser | onnx-runtime | 63 | yes | — |  |
| RT178 | FALSE POSITIVE | page | why use pytorch | ai-evaluation | 63 | yes | — | confident wrong page: ai-evaluation |
| RT179 | FALSE POSITIVE | page | cuda out of memory when loading a 13b model | vllm | 77 | yes | — | confident wrong page: vllm |
| RT180 | PASS | page | can i run ai privately on my own machine | local-ai | 67 | yes | — |  |
| RT181 | FALSE POSITIVE | page | local model or cloud api for sensitive documents | gcp-fundamentals | 61 | yes | — | confident wrong page: gcp-fundamentals |
| RT182 | PASS | page | are downloadable models the same as open source | open-weights-models | 71 | yes | — |  |
| RT183 | FALSE POSITIVE | page | tiny llms that run on a phone | local-ai | 66 | yes | — | confident wrong page: local-ai |
| RT184 | PASS | page | what does 4 bit quantization do | quantization | 72 | yes | — |  |
| RT185 | PASS | page | what is multimodal ai | multimodal-ai | 74 | yes | — |  |
| RT186 | PASS | page | how do models understand images and text together | vision-language-models | 75 | yes | — |  |
| RT187 | FALSE POSITIVE | page | what is clip in computer vision | video-generation-models | 73 | yes | — | confident wrong page: video-generation-models |
| RT188 | PASS | page | extract text from scanned invoices | document-understanding-ai | 69 | yes | — |  |
| RT189 | PASS | page | vision transformer vs resnet | cnn-vs-vision-transformer | 94 | yes | — |  |
| RT190 | FALSE POSITIVE | gap | how does object detection like yolo work | object-detection | 76 | yes | — | confident unrelated page: object-detection |
| RT191 | FALSE POSITIVE | gap | opencv tutorial for face detection | object-detection | 71 | yes | — | confident unrelated page: object-detection |
| RT192 | PASS | page | how does speech to text work | speech-ai | 81 | yes | — |  |
| RT193 | PASS | page | build a voice assistant with an llm | speech-ai | 58 | yes | — |  |
| RT194 | FALSE POSITIVE | page | can ai clone my voice | video-generation-models | 69 | yes | — | confident wrong page: video-generation-models |
| RT195 | WEAK | page | what is whisper | (weak) speech-ai | 54 | no | — | not solid; accepted page in top 5 |
| RT196 | FALSE POSITIVE | page | how do text to video models work | multimodal-ai | 78 | yes | — | confident wrong page: multimodal-ai |
| RT197 | PASS | page | how do robots learn from ai | embodied-ai | 84 | yes | — |  |
| RT198 | PASS | page | what is a vla model | vision-language-action-models | 74 | yes | — |  |
| RT199 | FALSE POSITIVE | page | teaching a robot by demonstration | embodied-ai | 62 | yes | — | confident wrong page: embodied-ai |
| RT200 | FALSE POSITIVE | page | my policy works in the simulator but not on hardware | local-ai | 58 | yes | — | confident wrong page: local-ai |
| RT201 | FALSE POSITIVE | page | ai that imagines future states to plan actions | ai-agents | 78 | yes | — | confident wrong page: ai-agents |
| RT202 | FALSE POSITIVE | gap | how do i program a robot with ros | robot-operating-system | 84 | yes | — | confident unrelated page: robot-operating-system |
| RT203 | FALSE POSITIVE | gap | how do self driving cars work | reinforcement-learning-for-reasoning | 57 | yes | — | confident unrelated page: reinforcement-learning-for-reasoning |
| RT204 | FALSE POSITIVE | page | text hidden in a web page that tells my assistant to misbehave | rag | 66 | yes | — | confident wrong page: rag |
| RT205 | PASS | page | ignore previous instructions attack | prompt-injection | 71 | yes | — |  |
| RT206 | FALSE POSITIVE | page | is it ok to paste customer data into chatgpt | choosing-a-vector-store | 57 | yes | — | confident wrong page: choosing-a-vector-store |
| RT207 | FALSE POSITIVE | page | remove secrets from a log before sharing it with an ai | api-authentication | 66 | yes | — | confident wrong page: api-authentication |
| RT208 | FALSE POSITIVE | page | standard checklist of security risks for generative ai apps | nist-ai-rmf | 77 | yes | — | confident wrong page: nist-ai-rmf |
| RT209 | PASS | page | how do i red team my chatbot | red-teaming | 74 | yes | — |  |
| RT210 | PASS | page | how do guardrails stop harmful output | ai-guardrails | 68 | yes | — |  |
| RT211 | WEAK | page | how do i sandbox code the model writes | (weak) code-execution-sandboxing | 54 | no | — | not solid; accepted page in top 5 |
| RT212 | FALSE POSITIVE | page | can i tell if an image was made by ai | video-generation-models | 69 | yes | — | confident wrong page: video-generation-models |
| RT213 | WEAK | page | what is jailbreaking a model | (weak) world-models | 48 | no | — | not solid; accepted page in top 5 |
| RT214 | PASS | page | least privilege design for tool using agents | agent-tools | 63 | yes | — |  |
| RT215 | FALSE POSITIVE | page | how do i know if my ai feature is any good | sycophancy | 75 | yes | — | confident wrong page: sycophancy |
| RT216 | PASS | page | what does a high score on the 57 subject multiple choice benchmark tell me | mmlu | 84 | yes | — |  |
| RT217 | PASS | page | why are leaderboard rankings misleading | benchmarks-and-leaderboards | 65 | yes | — |  |
| RT218 | FALSE POSITIVE | page | using one model to grade another | knowledge-distillation | 65 | yes | — | confident wrong page: knowledge-distillation |
| RT219 | FALSE POSITIVE | page | build a test set for my rag bot | package-managers | 60 | yes | — | confident wrong page: package-managers |
| RT220 | PASS | page | which metrics for a classifier with rare positives | evaluation-metrics-for-ai | 64 | yes | — |  |
| RT221 | WEAK | page | benchmark where models fix real github issues | (weak) benchmarks-and-leaderboards | 43 | no | — | not solid; accepted page in top 5 |
| RT222 | FALSE POSITIVE | page | check whether each claim is backed by the source text | multi-agent-systems | 65 | yes | — | confident wrong page: multi-agent-systems |
| RT223 | PASS | page | how are chatbot elo rankings made | human-preference-evaluation | 80 | yes | — |  |
| RT224 | FALSE POSITIVE | page | how do teams keep ml models running reliably after launch | reinforcement-learning-for-reasoning | 56 | yes | — | confident wrong page: reinforcement-learning-for-reasoning |
| RT225 | PASS | page | track experiments and register models | mlflow | 68 | yes | — |  |
| RT226 | PASS | page | my model got worse after three months in production | model-drift-and-monitoring | 71 | yes | — |  |
| RT227 | FALSE POSITIVE | page | log prompts and tokens in production | prompt-caching | 57 | yes | — | confident wrong page: prompt-caching |
| RT228 | MISS | page | how many gpus do i need to serve a 70b model | (weak) flash-attention | 53 | no | — | no accepted page in top 5 |
| RT229 | FALSE POSITIVE | page | how to split training across several gpus | mixture-of-experts | 58 | yes | — | confident wrong page: mixture-of-experts |
| RT230 | FALSE POSITIVE | page | cut my llm bill | llm-observability | 58 | yes | — | confident wrong page: llm-observability |
| RT231 | PASS | page | what is ray used for | ray | 79 | yes | — |  |
| RT232 | FALSE POSITIVE | page | who signs off on ai use inside a company | llm-observability | 70 | yes | — | confident wrong page: llm-observability |
| RT233 | PASS | page | does the eu ai act apply to my startup | eu-ai-act | 79 | yes | — |  |
| RT234 | PASS | page | what is the nist ai risk framework | nist-ai-rmf | 91 | yes | — |  |
| RT235 | FALSE POSITIVE | page | certifiable standard for managing ai in an organisation | nist-ai-rmf | 78 | yes | — | confident wrong page: nist-ai-rmf |
| RT236 | PASS | page | documentation template for a released model | model-cards | 67 | yes | — |  |
| RT237 | FALSE POSITIVE | page | are my model's error rates different across demographic groups | mmlu | 62 | yes | — | confident wrong page: mmlu |
| RT238 | FALSE POSITIVE | gap | what is gdpr and does it cover ai training data | gdpr-and-ai | 75 | yes | — | confident unrelated page: gdpr-and-ai |
| RT239 | FALSE POSITIVE | gap | ai regulation in the united states | eu-ai-act | 83 | yes | — | confident unrelated page: eu-ai-act |
| RT240 | PASS | page | what is sycophancy | sycophancy | 75 | yes | — |  |
| RT241 | PASS | page | how is dpo different from rlhf | dpo | 81 | yes | — |  |
| RT242 | PASS | page | why do chatbots flatter users | sycophancy | 59 | yes | — |  |
| RT243 | PASS | page | what does alignment mean for ai | ai-alignment | 74 | yes | — |  |
| RT244 | PASS | page | reward hacking examples | reward-hacking | 72 | yes | — |  |
| RT245 | PASS | page | ai critiques its own answers using written principles | constitutional-ai-and-rlaif | 77 | yes | — |  |
| RT246 | FALSE POSITIVE | page | can we see inside a neural network | graph-neural-networks | 60 | yes | — | confident wrong page: graph-neural-networks |
| RT247 | PASS | page | predict 3d structure from an amino acid sequence | alphafold | 82 | yes | — |  |
| RT248 | PASS | page | neural networks that respect physics equations | physics-informed-neural-networks | 88 | yes | — |  |
| RT249 | PASS | page | can machine learning forecast weather | ai-weather-forecasting | 87 | yes | — |  |
| RT250 | PASS | page | ai for finding new battery materials | ai-materials-discovery | 63 | yes | — |  |
| RT251 | PASS | page | ai in drug discovery | ai-drug-discovery | 84 | yes | — |  |
| RT252 | PASS | page | model with many experts but only a few active per token | mixture-of-experts | 71 | yes | — |  |
| RT253 | PASS | page | what are state space models and mamba | state-space-models | 87 | yes | — |  |
| RT254 | WEAK | page | how does a kv cache save compute | (weak) kv-cache | 53 | no | — | not solid; accepted page in top 5 |
| RT255 | PASS | page | what is flash attention | flash-attention | 70 | yes | — |  |
| RT256 | FALSE POSITIVE | page | how do transformers know word order | recurrent-neural-networks | 58 | yes | — | confident wrong page: recurrent-neural-networks |
| RT257 | PASS | page | bert versus gpt style models | encoder-decoder-vs-decoder-only | 78 | yes | — |  |
| RT258 | FALSE POSITIVE | page | does making llms bigger improve them predictably | fine-tuning | 68 | yes | — | confident wrong page: fine-tuning |
| RT259 | FALSE POSITIVE | page | how are base models turned into chat assistants | hugging-face | 58 | yes | — | confident wrong page: hugging-face |
| RT260 | FALSE POSITIVE | page | fine tune a 7b model on a single consumer gpu | quantization | 68 | yes | — | confident wrong page: quantization |
| RT261 | FALSE POSITIVE | page | distilling a big model into a small one | small-language-models | 59 | yes | — | confident wrong page: small-language-models |
| RT262 | PASS | page | small draft model proposes tokens a big model verifies | speculative-decoding | 76 | yes | — |  |
| RT263 | PASS | page | how does prompt caching reduce cost | prompt-caching | 72 | yes | — |  |
| RT264 | FALSE POSITIVE | page | manage what goes into the context window for a long running agent | multi-agent-systems | 71 | yes | — | confident wrong page: multi-agent-systems |
| RT265 | PASS | page | what are open source models like llama | open-weights-models | 63 | yes | — |  |
| RT266 | FALSE POSITIVE | page | how do i get started with ai | llm-observability | 71 | yes | — | confident wrong page: llm-observability |
| RT267 | FALSE POSITIVE | page | tell me about agents | what-is-ai | 73 | yes | — | confident wrong page: what-is-ai |
| RT268 | FALSE POSITIVE | page | ai security | ai-governance | 84 | yes | — | confident wrong page: ai-governance |
| RT269 | FALSE POSITIVE | page | best way to use ai at work | llm-observability | 69 | yes | — | confident wrong page: llm-observability |
| RT270 | PASS | page | vectors | embeddings | 70 | yes | — |  |
| RT271 | FALSE POSITIVE | page | rag vs | rag-frameworks | 64 | yes | — | confident wrong page: rag-frameworks |
| RT272 | FALSE POSITIVE | neg | models | small-language-models | 73 | yes | — | confident answer for out-of-scope query: small-language-models |
| RT273 | FALSE POSITIVE | neg | learning | supervised-learning | 75 | yes | — | confident answer for out-of-scope query: supervised-learning |
| RT274 | FALSE POSITIVE | neg | explain it simply please | ai-evaluation | 79 | yes | — | confident answer for out-of-scope query: ai-evaluation |
| RT275 | FALSE POSITIVE | neg | best one | best-of-n-sampling | 74 | yes | — | confident answer for out-of-scope query: best-of-n-sampling |
| RT276 | FALSE POSITIVE | neg | help with my code | go-language | 61 | yes | — | confident answer for out-of-scope query: go-language |
| RT277 | FALSE POSITIVE | neg | it does not work | ai-agents | 71 | yes | — | confident answer for out-of-scope query: ai-agents |
| RT278 | PASS | page | llm rag mcp relationship | mcp | 69 | yes | — |  |
| RT279 | PASS | gap | what do nlp and nlu mean | (weak) alphafold | 50 | no | — | transparent non-answer |
| RT280 | PASS | page | gpu vs tpu | gpus-and-ai-accelerators | 74 | yes | — |  |
| RT281 | FALSE POSITIVE | page | what is hitl in ai workflows | generative-ai | 72 | yes | — | confident wrong page: generative-ai |
| RT282 | PASS | page | what is bleu and rouge | evaluation-metrics-for-ai | 64 | yes | — |  |
| RT283 | FALSE POSITIVE | page | asr vs tts | framework-vs-direct-api | 58 | yes | — | confident wrong page: framework-vs-direct-api |
| RT284 | PASS | gap | spa vs ssr | nextjs | 61 | yes | — | nearby page: nextjs |
| RT285 | PASS | page | crud api example | what-is-an-api | 67 | yes | — |  |
| RT286 | PASS | gap | sso with saml or oidc | oauth | 70 | yes | — | nearby page: oauth |
| RT287 | FALSE POSITIVE | page | oss vs proprietary models | onnx-runtime | 69 | yes | — | confident wrong page: onnx-runtime |
| RT288 | PASS | page | dockr container networking | containers | 74 | yes | — |  |
| RT289 | PASS | page | postgress vs mysql | postgresql | 88 | yes | — |  |
| RT290 | FALSE POSITIVE | gap | kubenetes basics | kubernetes | 59 | yes | — | confident unrelated page: kubernetes |
| RT291 | FALSE POSITIVE | page | langchian agents | openai-agents-sdk | 79 | yes | — | confident wrong page: openai-agents-sdk |
| RT292 | PASS | page | hugging fase models | hugging-face | 80 | yes | — |  |
| RT293 | PASS | page | fine tunning vs prompting | rag-vs-fine-tuning | 70 | yes | — |  |
| RT294 | FALSE POSITIVE | page | halucination in llms | ai-bias-and-fairness | 64 | yes | — | confident wrong page: ai-bias-and-fairness |
| RT295 | PASS | page | guardrials for llm apps | ai-guardrails | 72 | yes | — |  |
| RT296 | FALSE POSITIVE | gap | how do i run a kubernetes cluster | kubernetes | 78 | yes | — | confident unrelated page: kubernetes |
| RT297 | FALSE POSITIVE | gap | what is a helm chart | kubernetes | 56 | yes | — | confident unrelated page: kubernetes |
| RT298 | PASS | gap | terraform vs pulumi | (weak) framework-vs-direct-api | 55 | no | — | transparent non-answer |
| RT299 | PASS | gap | how do i configure nginx as a reverse proxy | (weak) streaming-ai-with-nodejs | 49 | no | — | transparent non-answer |
| RT300 | FALSE POSITIVE | gap | linux command line cheat sheet | java | 55 | yes | — | confident unrelated page: java |
| RT301 | PASS | gap | what is a service mesh | (weak) hugging-face | 52 | no | — | transparent non-answer |
| RT302 | PASS | gap | prometheus and grafana monitoring | model-drift-and-monitoring | 70 | yes | — | nearby page: model-drift-and-monitoring |
| RT303 | FALSE POSITIVE | gap | vue vs angular | agent-protocol-landscape | 65 | yes | — | confident unrelated page: agent-protocol-landscape |
| RT304 | FALSE POSITIVE | gap | how do i write unit tests with jest | benchmark-contamination | 62 | yes | — | confident unrelated page: benchmark-contamination |
| RT305 | FALSE POSITIVE | gap | what is a monorepo | how-to-reduce-hallucinations | 66 | yes | — | confident unrelated page: how-to-reduce-hallucinations |
| RT306 | FALSE POSITIVE | gap | vs code extensions for python | calling-ai-apis-with-python | 78 | yes | — | confident unrelated page: calling-ai-apis-with-python |
| RT307 | PASS | gap | what is graphql federation | (weak) gdpr-and-ai | 48 | no | — | transparent non-answer |
| RT308 | FALSE POSITIVE | gap | grpc vs rest | rest-vs-graphql | 81 | yes | — | confident unrelated page: rest-vs-graphql |
| RT309 | PASS | gap | how do i set up tls certificates | (weak) webhooks | 49 | no | — | transparent non-answer |
| RT310 | PASS | gap | what is apache kafka | (weak) java | 38 | no | — | transparent non-answer |
| RT311 | PASS | gap | data warehouse vs data lake | (weak) aws-fundamentals | 54 | no | — | transparent non-answer |
| RT312 | PASS | gap | what is federated learning | (weak) deep-q-networks | 46 | no | — | transparent non-answer |
| RT313 | PASS | gap | differential privacy explained | (weak) markov-decision-processes | 48 | no | — | transparent non-answer |
| RT314 | PASS | gap | how does a recommender system work | (weak) agentic-workflows | 41 | no | — | transparent non-answer |
| RT315 | FALSE POSITIVE | gap | time series forecasting with arima | ai-weather-forecasting | 73 | yes | — | confident unrelated page: ai-weather-forecasting |
| RT316 | FALSE POSITIVE | gap | what is automl | how-to-reduce-hallucinations | 66 | yes | — | confident unrelated page: how-to-reduce-hallucinations |
| RT317 | PASS | gap | how do i label training data | (weak) gdpr-and-ai | 40 | no | — | transparent non-answer |
| RT318 | FALSE POSITIVE | gap | what is causal inference | test-time-compute | 64 | yes | — | confident unrelated page: test-time-compute |
| RT319 | PASS | gap | classic keyword weighting before neural embeddings | embeddings | 68 | yes | — | nearby page: embeddings |
| RT320 | FALSE POSITIVE | gap | what is the best ai coding assistant | ai-agent-vs-chatbot | 72 | yes | — | confident unrelated page: ai-agent-vs-chatbot |
| RT321 | PASS | gap | cursor vs copilot | (weak) onnx-runtime | 49 | no | — | transparent non-answer |
| RT322 | PASS | gap | what is the current top model on the leaderboard | benchmarks-and-leaderboards | 69 | yes | — | nearby page: benchmarks-and-leaderboards |
| RT323 | FALSE POSITIVE | gap | how many parameters does the newest model have | world-models | 58 | yes | — | confident unrelated page: world-models |
| RT324 | FALSE POSITIVE | gap | when does the next frontier model release | ai-agents | 62 | yes | — | confident unrelated page: ai-agents |
| RT325 | PASS | gap | how do i use azure devops pipelines | azure-fundamentals | 59 | yes | — | nearby page: azure-fundamentals |
| RT326 | PASS | gap | power bi dashboards | power-platform | 74 | yes | — | nearby page: power-platform |
| RT327 | PASS | gap | how do i migrate sharepoint on premises to online | sharepoint | 68 | yes | — | nearby page: sharepoint |
| RT328 | PASS | gap | what is a sharepoint site collection | sharepoint | 87 | yes | — | nearby page: sharepoint |
| RT329 | FALSE POSITIVE | neg | transformer toy | transformers | 60 | yes | — | confident answer for out-of-scope query: transformers |
| RT330 | FALSE POSITIVE | neg | mamba snake | state-space-models | 60 | yes | — | confident answer for out-of-scope query: state-space-models |
| RT331 | FALSE POSITIVE | neg | python pet | python | 73 | yes | — | confident answer for out-of-scope query: python |
| RT332 | FALSE POSITIVE | neg | react to this message | react-chatbot-state | 83 | yes | — | confident answer for out-of-scope query: react-chatbot-state |
| RT333 | FALSE POSITIVE | neg | docker clothing | docker | 72 | yes | — | confident answer for out-of-scope query: docker |
| RT334 | FALSE POSITIVE | neg | agent real estate | autogen | 59 | yes | — | confident answer for out-of-scope query: autogen |
| RT335 | FALSE POSITIVE | neg | model train hobby | world-models | 57 | yes | — | confident answer for out-of-scope query: world-models |
| RT336 | PASS | neg | java coffee beans | (weak) java | 52 | no | — | no confident answer |
| RT337 | PASS | neg | ruby gemstone ring price | (weak) langgraph | 41 | no | — | no confident answer |
| RT338 | PASS | neg | swift taylor concert tickets | (weak) autogen | 48 | no | — | no confident answer |
| RT339 | FALSE POSITIVE | neg | rust remover for bike chains | rust | 67 | yes | — | confident answer for out-of-scope query: rust |
| RT340 | FALSE POSITIVE | neg | go board game opening strategy | ai-agents | 64 | yes | — | confident answer for out-of-scope query: ai-agents |
| RT341 | PASS | neg | kotlin island vacation | (weak) java | 39 | no | — | no confident answer |
| RT342 | FALSE POSITIVE | neg | oracle of delphi history | microsoft-365 | 60 | yes | — | confident answer for out-of-scope query: microsoft-365 |
| RT343 | PASS | neg | spark plug gap size | (weak) vision-transformers | 54 | no | — | no confident answer |
| RT344 | PASS | neg | panda zoo opening hours | (weak) local-ai-vs-cloud-ai | 49 | no | — | no confident answer |
| RT345 | FALSE POSITIVE | neg | git gud meaning | git | 80 | yes | — | confident answer for out-of-scope query: git |
| RT346 | FALSE POSITIVE | neg | node of ranvier function | nodejs | 75 | yes | — | confident answer for out-of-scope query: nodejs |
| RT347 | PASS | neg | cloud seeding rain | (weak) gcp-fundamentals | 54 | no | — | no confident answer |
| RT348 | PASS | neg | azure blue paint colour | (weak) convolutional-neural-networks | 51 | no | — | no confident answer |
| RT349 | PASS | neg | bert and ernie sesame street | (weak) encoder-decoder-vs-decoder-only | 41 | no | — | no confident answer |
| RT350 | PASS | neg | llama farm wool prices | (weak) llama-cpp | 50 | no | — | no confident answer |
| RT351 | PASS | neg | claude monet water lilies | (weak) transformers | 35 | no | — | no confident answer |
| RT352 | PASS | neg | gemini star sign compatibility | (weak) microsoft-entra-id | 40 | no | — | no confident answer |
| RT353 | FALSE POSITIVE | neg | rag doll sewing pattern | agentic-rag | 68 | yes | — | confident answer for out-of-scope query: agentic-rag |
| RT354 | FALSE POSITIVE | neg | vector graphics for a logo | choosing-a-vector-store | 68 | yes | — | confident answer for out-of-scope query: choosing-a-vector-store |
| RT355 | FALSE POSITIVE | neg | token of appreciation gift ideas | tokens | 60 | yes | — | confident answer for out-of-scope query: tokens |
| RT356 | PASS | neg | agent smith matrix quotes | (weak) ai-agent-vs-chatbot | 51 | no | — | no confident answer |
| RT357 | PASS | neg | popcorn kernel not popping | (weak) semantic-kernel | 45 | no | — | no confident answer |
| RT358 | PASS | neg | swarm of bees in my garden | (weak) hugging-face | 37 | no | — | no confident answer |
| RT359 | PASS | neg | proxy voting at a shareholder meeting | (weak) autogen | 49 | no | — | no confident answer |
| RT360 | PASS | neg | bearer bonds explained | (weak) json-web-tokens | 37 | no | — | no confident answer |
| RT361 | PASS | neg | oil pipeline construction jobs | (weak) rag-evaluation | 46 | no | — | no confident answer |
| RT362 | PASS | neg | cookie recipe chocolate chip | (weak) choosing-a-vector-store | 50 | no | — | no confident answer |
| RT363 | FALSE POSITIVE | neg | diffusion of heat in metal | diffusion-models | 63 | yes | — | confident answer for out-of-scope query: diffusion-models |
| RT364 | PASS | neg | attention deficit in adults | (weak) overfitting-and-regularization | 51 | no | — | no confident answer |
| RT365 | FALSE POSITIVE | neg | neural pathways in the brain after stroke | neural-networks | 62 | yes | — | confident answer for out-of-scope query: neural-networks |
| RT366 | FALSE POSITIVE | neg | reinforcement learning in child psychology rewards | reinforcement-learning | 79 | yes | — | confident answer for out-of-scope query: reinforcement-learning |
| RT367 | FALSE POSITIVE | neg | unsupervised learning at home for kids | supervised-learning | 55 | yes | — | confident answer for out-of-scope query: supervised-learning |
| RT368 | FALSE POSITIVE | neg | embedding a youtube video in my wordpress site | streaming-ai-with-nodejs | 59 | yes | — | confident answer for out-of-scope query: streaming-ai-with-nodejs |
| RT369 | FALSE POSITIVE | neg | vector in physics velocity and force | distributed-training | 62 | yes | — | confident answer for out-of-scope query: distributed-training |
| RT370 | FALSE POSITIVE | neg | distillation of whisky at home | knowledge-distillation | 62 | yes | — | confident answer for out-of-scope query: knowledge-distillation |
| RT371 | PASS | neg | dropout rate at university | (weak) gsm8k-and-math-benchmarks | 54 | no | — | no confident answer |
| RT372 | FALSE POSITIVE | neg | tensor in general relativity | markov-decision-processes | 57 | yes | — | confident answer for out-of-scope query: markov-decision-processes |
| RT373 | FALSE POSITIVE | neg | clip art for presentations | vision-language-models | 59 | yes | — | confident answer for out-of-scope query: vision-language-models |
| RT374 | PASS | neg | chain link fence installation | (weak) kubernetes | 45 | no | — | no confident answer |
| RT375 | FALSE POSITIVE | neg | whisper in my ear lyrics | speech-ai | 61 | yes | — | confident answer for out-of-scope query: speech-ai |
| RT376 | PASS | neg | llama drama kids book | (weak) ollama | 51 | no | — | no confident answer |
| RT377 | PASS | neg | mistral wind south of france | (weak) open-weights-models | 44 | no | — | no confident answer |
| RT378 | FALSE POSITIVE | neg | falcon heavy launch schedule | onnx-runtime | 56 | yes | — | confident answer for out-of-scope query: onnx-runtime |
| RT379 | PASS | neg | bard of avon poetry | (weak) multimodal-ai | 41 | no | — | no confident answer |
| RT380 | FALSE POSITIVE | neg | perplexity about my career choice | human-preference-evaluation | 63 | yes | — | confident answer for out-of-scope query: human-preference-evaluation |
| RT381 | PASS | neg | sam altman net worth | (weak) ai-agent-vs-chatbot | 46 | no | — | no confident answer |
| RT382 | PASS | neg | best hiking boots under 150 | (weak) llama-cpp | 51 | no | — | no confident answer |
| RT383 | FALSE POSITIVE | neg | how to file self assessment tax | ai-governance | 60 | yes | — | confident answer for out-of-scope query: ai-governance |
| RT384 | PASS | neg | recipe for lasagna | (weak) cnn-vs-vision-transformer | 52 | no | — | no confident answer |
| RT385 | PASS | neg | who invented the telephone | (weak) rag | 45 | no | — | no confident answer |
| RT386 | FALSE POSITIVE | neg | translate good morning to french | rag-vs-fine-tuning | 60 | yes | — | confident answer for out-of-scope query: rag-vs-fine-tuning |
| RT387 | PASS | neg | symptoms of the flu | (weak) how-to-reduce-hallucinations | 40 | no | — | no confident answer |
| RT388 | FALSE POSITIVE | neg | mortgage rates this week | prompt-caching | 55 | yes | — | confident answer for out-of-scope query: prompt-caching |
| RT389 | FALSE POSITIVE | neg | plan a 10k race pace strategy | agent-planning | 61 | yes | — | confident answer for out-of-scope query: agent-planning |
| RT390 | FALSE POSITIVE | neg | football scores tonight | deep-q-networks | 62 | yes | — | confident answer for out-of-scope query: deep-q-networks |
| RT391 | FALSE POSITIVE | neg | how to repot a succulent | ai-evaluation | 75 | yes | — | confident answer for out-of-scope query: ai-evaluation |
| RT392 | PASS | neg | nvidia stock forecast | (weak) ai-weather-forecasting | 46 | no | — | no confident answer |
| RT393 | FALSE POSITIVE | neg | should i buy bitcoin | benchmark-contamination | 67 | yes | — | confident answer for out-of-scope query: benchmark-contamination |
| RT394 | PASS | neg | best laptop for students | (weak) local-ai | 52 | no | — | no confident answer |
| RT395 | FALSE POSITIVE | neg | how to write a wedding speech | speech-ai | 60 | yes | — | confident answer for out-of-scope query: speech-ai |
| RT396 | FALSE POSITIVE | neg | write me a poem about the sea | rust | 57 | yes | — | confident answer for out-of-scope query: rust |
| RT397 | FALSE POSITIVE | neg | tell me a joke | sycophancy | 76 | yes | — | confident answer for out-of-scope query: sycophancy |
| RT398 | FALSE POSITIVE | neg | what is the meaning of life | what-is-ai | 64 | yes | — | confident answer for out-of-scope query: what-is-ai |
| RT399 | FALSE POSITIVE | neg | summarise this article for me | prompt-engineering | 70 | yes | — | confident answer for out-of-scope query: prompt-engineering |
| RT400 | FALSE POSITIVE | neg | is it going to rain tomorrow | java | 64 | yes | — | confident answer for out-of-scope query: java |
| RT401 | PASS | neg | how do i fix a flat bicycle tyre | (weak) go-language | 43 | no | — | no confident answer |
| RT402 | FALSE POSITIVE | page | use a model to check my own answers before sending them to a user | agentic-rag | 73 | yes | — | confident wrong page: agentic-rag |
| RT403 | PASS | page | how can i make my chatbot cite its sources | rag | 70 | yes | — |  |
| RT404 | FALSE POSITIVE | page | why does my assistant lose context in long chats | common-prompting-mistakes | 73 | yes | — | confident wrong page: common-prompting-mistakes |
| RT405 | FALSE POSITIVE | page | a model that sees my screen and clicks buttons | typescript-api-client-types | 57 | yes | — | confident wrong page: typescript-api-client-types |
| RT406 | PASS | page | stop the model leaking my system prompt | prompt-injection | 73 | yes | — |  |
| RT407 | PASS | page | compare gpt style and bert style models for classification | encoder-decoder-vs-decoder-only | 67 | yes | — |  |
| RT408 | FALSE POSITIVE | page | trace every tool call my agent makes | ai-agent-vs-chatbot | 67 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| RT409 | FALSE POSITIVE | page | keep an ai agent from deleting my files | prisma-and-orms | 63 | yes | — | confident wrong page: prisma-and-orms |
| RT410 | FALSE POSITIVE | page | how do i give an llm access to my database safely | llm-observability | 60 | yes | — | confident wrong page: llm-observability |
| RT411 | FALSE POSITIVE | page | what is tool calling and how do i implement it | framework-vs-direct-api | 73 | yes | — | confident wrong page: framework-vs-direct-api |
| RT412 | FALSE POSITIVE | page | how do i let users log in with microsoft to my ai app | nodejs-for-ai | 71 | yes | — | confident wrong page: nodejs-for-ai |
| RT413 | PASS | page | difference between ai assistant copilot and agent | ai-agent-vs-chatbot | 85 | yes | — |  |
| RT414 | PASS | page | how do i chunk pdfs for retrieval | chunking | 71 | yes | — |  |
| RT415 | WEAK | page | speed up llm responses without hurting quality | (weak) llm-cost-optimization | 50 | no | — | not solid; accepted page in top 5 |
| RT416 | FALSE POSITIVE | page | why does inference get slower with longer prompts | common-prompting-mistakes | 68 | yes | — | confident wrong page: common-prompting-mistakes |
| RT417 | PASS | page | difference between an embedding model and a chat model | encoder-decoder-vs-decoder-only | 68 | yes | — |  |
| RT418 | PASS | page | what is a good chunk overlap | chunking | 62 | yes | — |  |
| RT419 | PASS | page | how do i evaluate whether retrieval found the right passage | rag-evaluation | 65 | yes | — |  |
| RT420 | FALSE POSITIVE | page | safe way to let ai write sql | git | 62 | yes | — | confident wrong page: git |
| RT421 | FALSE POSITIVE | page | can i run deepseek or llama privately | gbnf-grammars | 57 | yes | — | confident wrong page: gbnf-grammars |
| RT422 | FALSE POSITIVE | page | how do i stop my agent from running up a huge bill | ai-agent-vs-chatbot | 77 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| RT423 | FALSE POSITIVE | page | model says it cannot see my document but i pasted it | sql-vs-nosql | 68 | yes | — | confident wrong page: sql-vs-nosql |
| RT424 | FALSE POSITIVE | page | ai to turn meeting recordings into notes | git | 55 | yes | — | confident wrong page: git |
| RT425 | FALSE POSITIVE | page | how do i know the model was not trained on my benchmark | llm-benchmarks-vs-task-evals | 68 | yes | — | confident wrong page: llm-benchmarks-vs-task-evals |
| RT426 | FALSE POSITIVE | page | how to get consistent structured data out of messy emails | embeddings | 57 | yes | — | confident wrong page: embeddings |
