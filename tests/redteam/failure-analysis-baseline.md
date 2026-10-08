# Failure analysis — baseline

Causes are assigned by rule from each result (see tests/redteam/analyze.mjs) and are probable, not proven. A query is counted once.

| Cause | Count |
| --- | --- |
| Missing synonym / paraphrase intent (right page not surfaced) | 42 |
| Overly broad keyword / generic hub page outranks specific page | 37 |
| Right page ranked first but un-anchored (missing synonym/intent/concept) | 32 |
| Misspelling / unknown vocabulary (no spelling tolerance) | 25 |
| Ambiguous term / missing negative-context protection | 18 |
| Missing comparison route | 6 |
| Tool recommendation not offered (expected tool exists) | 6 |
| Wrong ranking (unrelated page anchored) | 2 |
| Missing acronym | 2 |
| Missing troubleshooting route | 1 |
| Missing architecture route | 1 |
| Genuine Knowledge coverage gap (confident unrelated answer) | 1 |

## Missing synonym / paraphrase intent (right page not surfaced) (42)
- RT002 [WEAK] "explain neural nets like im five" → (weak) physics-informed-neural-networks (expected neural-networks|deep-learning)
- RT004 [MISS] "why do language models make stuff up" → (weak) small-language-models (expected ai-hallucinations|how-to-reduce-hallucinations)
- RT007 [WEAK] "what makes a model generative" → (weak) model-cards (expected generative-ai)
- RT012 [MISS] "reuse imagenet weights for my own photos" → (weak) open-weights-models (expected transfer-learning|convolutional-neural-networks)
- RT013 [WEAK] "robot dog learning to walk by trial and error" → (weak) deep-learning (expected reinforcement-learning|sim-to-real-transfer|embodied-ai)
- RT014 [MISS] "how do image classifiers detect edges and shapes" → (weak) contrastive-learning-clip (expected convolutional-neural-networks)
- RT018 [WEAK] "how do generative models make pictures out of noise" → (weak) reasoning-models (expected diffusion-models)
- RT041 [WEAK] "reward models trained only on final answers" → (weak) process-reward-model (expected outcome-reward-model)
- RT071 [MISS] "can a malicious email hijack my agent" → (weak) ai-agent-vs-chatbot (expected prompt-injection|gmail-for-ai-agents)
- RT096 [WEAK] "read a csv and clean it before sending to a model" → (weak) model-cards (expected python-data-for-ai)
- RT101 [MISS] "type the response from my ai endpoint" → (weak) ai-governance (expected typescript-api-client-types|typescript-for-ai)
- RT113 [MISS] "what does restful mean" → (weak) open-weights-models (expected rest-apis)
- RT127 [WEAK] "what is a relational database" → (weak) vector-database-vs-traditional-database (expected sql|postgresql|databases-for-ai-apps)
- RT133 [WEAK] "which database should an ai app use" → (weak) ai-governance (expected databases-for-ai-apps|postgresql-for-ai-apps|choosing-a-vector-store)
- RT134 [MISS] "store chat history for an assistant" → (weak) choosing-a-vector-store (expected databases-for-ai-apps|postgresql-for-ai-apps|agent-memory)
- RT148 [MISS] "package an app so it runs the same everywhere" → (weak) package-managers (expected docker|containers)
- RT164 [WEAK] "which sdk should i use to call different models" → (weak) reasoning-models (expected ai-sdks|model-apis|framework-vs-direct-api)
- RT177 [MISS] "how do i run a model in the browser" → (weak) model-cards (expected onnx-runtime|local-ai)
- RT186 [MISS] "how do models understand images and text together" → (weak) reasoning-models (expected vision-language-models|multimodal-ai|contrastive-learning-clip)
- RT197 [WEAK] "how do robots learn from ai" → (weak) ai-governance (expected embodied-ai|imitation-learning|reinforcement-learning)
- RT204 [MISS] "text hidden in a web page that tells my assistant to misbehave" → (weak) build-spfx-web-part (expected prompt-injection)
- RT212 [MISS] "can i tell if an image was made by ai" → (weak) ai-governance (expected c2pa-content-provenance)
- RT213 [MISS] "what is jailbreaking a model" → (weak) model-cards (expected prompt-injection|red-teaming)
- RT215 [MISS] "how do i know if my ai feature is any good" → (weak) ai-governance (expected ai-evaluation|llm-benchmarks-vs-task-evals)
- RT218 [MISS] "using one model to grade another" → (weak) model-apis (expected llm-as-a-judge)
- RT224 [MISS] "how do teams keep ml models running reliably after launch" → (weak) small-language-models (expected mlops)
- RT235 [MISS] "certifiable standard for managing ai in an organisation" → (weak) ai-governance (expected iso-iec-42001)
- RT237 [MISS] "are my model's error rates different across demographic groups" → (weak) reasoning-models (expected ai-bias-and-fairness)
- RT245 [WEAK] "ai critiques its own answers using written principles" → (weak) ai-governance (expected constitutional-ai-and-rlaif)
- RT259 [WEAK] "how are base models turned into chat assistants" → (weak) reasoning-models (expected instruction-tuning|rlhf)
- RT261 [MISS] "distilling a big model into a small one" → (weak) small-language-models (expected knowledge-distillation)
- RT266 [MISS] "how do i get started with ai" → (weak) ai-governance (expected what-is-ai|python-for-ai|large-language-models)
- RT267 [MISS] "tell me about agents" → (weak) openai-agents-sdk (expected ai-agents)
- RT270 [WEAK] "vectors" → (weak) choosing-a-vector-store (expected embeddings|vector-databases)
- RT292 [WEAK] "hugging fase models" → (weak) reasoning-models (expected hugging-face)
- RT402 [MISS] "use a model to check my own answers before sending them to a user" → (weak) model-cards (expected ai-guardrails|llm-as-a-judge|how-to-reduce-hallucinations)
- RT403 [MISS] "how can i make my chatbot cite its sources" → (weak) ai-agent-vs-chatbot (expected rag|how-to-reduce-hallucinations)
- RT404 [WEAK] "why does my assistant lose context in long chats" → (weak) context-engineering (expected context-windows|agent-memory)
- RT405 [MISS] "a model that sees my screen and clicks buttons" → (weak) model-cards (expected computer-use-agents)
- RT412 [MISS] "how do i let users log in with microsoft to my ai app" → (weak) ai-governance (expected microsoft-entra-id|oauth|openid-connect)
- RT416 [WEAK] "why does inference get slower with longer prompts" → (weak) prompt-engineering (expected kv-cache|context-windows|model-serving-and-inference)
- RT422 [MISS] "how do i stop my agent from running up a huge bill" → (weak) ai-agent-vs-chatbot (expected llm-cost-optimization|react-agent-pattern|agentic-workflows)

## Overly broad keyword / generic hub page outranks specific page (37)
- RT006 [FALSE POSITIVE] "how much text can an llm remember in one go" → large-language-models (expected context-windows|tokens)
- RT009 [FALSE POSITIVE] "labelled versus unlabelled data in machine learning" → what-is-ai (expected supervised-learning|unsupervised-learning)
- RT020 [FALSE POSITIVE] "which neural network type handles molecules and social networks" → neural-networks (expected graph-neural-networks)
- RT042 [FALSE POSITIVE] "rl with unit test rewards for coding models" → reinforcement-learning (expected reinforcement-learning-for-reasoning)
- RT047 [FALSE POSITIVE] "how do grammars restrict which tokens a model can sample" → tokens (expected constrained-decoding|grammar-guided-generation)
- RT060 [FALSE POSITIVE] "store embeddings in postgres" → postgresql (expected pgvector|postgresql-for-ai-apps|vector-databases)
- RT065 [FALSE POSITIVE] "what is an ai agent" → ai-agent-vs-chatbot (expected ai-agents)
- RT067 [FALSE POSITIVE] "i want an ai agent that can read gmail" → ai-agent-vs-chatbot (expected gmail-for-ai-agents|connecting-agents-to-apps|oauth-for-ai-agents)
- RT069 [FALSE POSITIVE] "how do i connect an ai agent to slack and jira" → ai-agent-vs-chatbot (expected connecting-agents-to-apps|agent-tools|mcp)
- RT076 [FALSE POSITIVE] "which framework for a production agent" → ai-agents (expected agent-frameworks-compared|choosing-an-agent-framework|langgraph)
- RT087 [FALSE POSITIVE] "is it safe to install a random mcp server from github" → mcp (expected mcp-security)
- RT094 [FALSE POSITIVE] "how do i call an llm api from python" → python (expected calling-ai-apis-with-python|python-for-ai)
- RT095 [FALSE POSITIVE] "build a small rag app in python" → rag (expected rag-with-python|python-ai-libraries)
- RT097 [FALSE POSITIVE] "which python libraries do i need for ai work" → python (expected python-ai-libraries|python-for-ai)
- RT100 [FALSE POSITIVE] "call an ai api from javascript without exposing my key" → javascript (expected calling-ai-apis-with-javascript|javascript-for-ai|nodejs-for-ai)
- RT102 [FALSE POSITIVE] "stream tokens to the browser as they arrive" → tokens (expected streaming-ai-responses|streaming-ai-with-nodejs)
- RT103 [FALSE POSITIVE] "manage chat message state in react" → react (expected react-chatbot-state|react-ai-interfaces)
- RT168 [FALSE POSITIVE] "microsoft sdk for plugging llms into dotnet apps" → large-language-models (expected semantic-kernel)
- RT183 [FALSE POSITIVE] "tiny llms that run on a phone" → large-language-models (expected small-language-models)
- RT200 [FALSE POSITIVE] "my policy works in the simulator but not on hardware" → reinforcement-learning (expected sim-to-real-transfer)
- RT208 [FALSE POSITIVE] "standard checklist of security risks for generative ai apps" → generative-ai (expected owasp-llm-top-10)
- RT216 [FALSE POSITIVE] "what does a high score on the 57 subject multiple choice benchmark tell me" → benchmarks-and-leaderboards (expected mmlu)
- RT219 [FALSE POSITIVE] "build a test set for my rag bot" → rag (expected rag-evaluation|ai-evaluation)
- RT221 [FALSE POSITIVE] "benchmark where models fix real github issues" → github (expected swe-bench)
- RT230 [FALSE POSITIVE] "cut my llm bill" → large-language-models (expected llm-cost-optimization|prompt-caching)
- RT246 [FALSE POSITIVE] "can we see inside a neural network" → neural-networks (expected mechanistic-interpretability)
- RT248 [FALSE POSITIVE] "neural networks that respect physics equations" → neural-networks (expected physics-informed-neural-networks)
- RT249 [FALSE POSITIVE] "can machine learning forecast weather" → what-is-ai (expected ai-weather-forecasting)
- RT258 [FALSE POSITIVE] "does making llms bigger improve them predictably" → large-language-models (expected scaling-laws)
- RT260 [FALSE POSITIVE] "fine tune a 7b model on a single consumer gpu" → gpus-and-ai-accelerators (expected lora-and-peft|fine-tuning)
- RT294 [FALSE POSITIVE] "halucination in llms" → large-language-models (expected ai-hallucinations)
- RT295 [FALSE POSITIVE] "guardrials for llm apps" → large-language-models (expected ai-guardrails)
- RT409 [FALSE POSITIVE] "keep an ai agent from deleting my files" → ai-agent-vs-chatbot (expected integration-permissions|code-execution-sandboxing|agent-tools)
- RT410 [FALSE POSITIVE] "how do i give an llm access to my database safely" → large-language-models (expected agent-tools|integration-permissions|databases-for-ai-apps)
- RT415 [FALSE POSITIVE] "speed up llm responses without hurting quality" → large-language-models (expected speculative-decoding|model-serving-and-inference|kv-cache)
- RT419 [FALSE POSITIVE] "how do i evaluate whether retrieval found the right passage" → ai-evaluation (expected rag-evaluation)
- RT425 [FALSE POSITIVE] "how do i know the model was not trained on my benchmark" → benchmarks-and-leaderboards (expected benchmark-contamination)

## Right page ranked first but un-anchored (missing synonym/intent/concept) (32)
- RT003 [WEAK] "how does chatgpt actually work" → (weak) large-language-models (expected large-language-models|transformers|generative-ai)
- RT023 [WEAK] "bellman optimality equation intuition" → (weak) markov-decision-processes (expected markov-decision-processes)
- RT033 [WEAK] "what is a prompt and why does wording matter" → (weak) system-prompts (expected prompt-engineering|system-prompts)
- RT040 [WEAK] "step level verifier for maths solutions" → (weak) process-reward-model (expected process-reward-model)
- RT046 [WEAK] "make the model return json that always matches my schema" → (weak) json-schema (expected structured-outputs|constrained-decoding|json-schema)
- RT053 [WEAK] "how big should my chunks be" → (weak) chunking (expected chunking)
- RT057 [WEAK] "multi hop questions over a knowledge graph" → (weak) graph-rag (expected graph-rag|agentic-rag)
- RT066 [WEAK] "is a bot that only answers questions already an agent" → (weak) ai-agent-vs-chatbot (expected ai-agent-vs-chatbot)
- RT072 [WEAK] "how do agents decide which tool to call" → (weak) agent-tools (expected agent-tools|function-calling|react-agent-pattern)
- RT074 [WEAK] "agent forgets what we decided yesterday" → (weak) agent-memory (expected agent-memory|context-windows)
- RT079 [WEAK] "retrieval where the model decides to search again if results look poor" → (weak) agentic-rag (expected agentic-rag)
- RT118 [WEAK] "validate an api payload against a schema" → (weak) json-schema (expected json-validation|json-schema)
- RT128 [WEAK] "how do i join two tables" → (weak) sql (expected sql)
- RT136 [WEAK] "azure basics for developers" → (weak) azure-fundamentals (expected azure-fundamentals)
- RT141 [WEAK] "container versus virtual machine" → (weak) containers (expected containers|docker)
- RT153 [WEAK] "sharepont framwork webpart" → (weak) sharepoint-framework (expected sharepoint-framework|build-spfx-web-part|sharepoint)
- RT173 [WEAK] "serve a model to hundreds of users" → (weak) model-serving-and-inference (expected vllm|model-serving-and-inference|local-runtimes-compared)
- RT182 [WEAK] "are downloadable models the same as open source" → (weak) open-weights-models (expected open-weights-models)
- RT214 [WEAK] "least privilege design for tool using agents" → (weak) agent-tools (expected integration-permissions|agent-tools|prompt-injection)
- RT220 [WEAK] "which metrics for a classifier with rare positives" → (weak) evaluation-metrics-for-ai (expected evaluation-metrics-for-ai)
- RT223 [WEAK] "how are chatbot elo rankings made" → (weak) human-preference-evaluation (expected human-preference-evaluation)
- RT232 [WEAK] "who signs off on ai use inside a company" → (weak) ai-governance (expected ai-governance)
- RT236 [WEAK] "documentation template for a released model" → (weak) model-cards (expected model-cards)
- RT247 [WEAK] "predict 3d structure from an amino acid sequence" → (weak) alphafold (expected alphafold)
- RT250 [WEAK] "ai for finding new battery materials" → (weak) ai-materials-discovery (expected ai-materials-discovery)
- RT265 [WEAK] "what are open source models like llama" → (weak) open-weights-models (expected open-weights-models|local-ai)
- RT269 [WEAK] "best way to use ai at work" → (weak) ai-governance (expected ai-privacy-and-security|prompt-engineering|ai-governance)
- RT288 [WEAK] "dockr container networking" → (weak) containers (expected docker|containers)
- RT293 [WEAK] "fine tunning vs prompting" → (weak) rag-vs-fine-tuning (expected fine-tuning|rag-vs-fine-tuning|prompt-engineering)
- RT413 [WEAK] "difference between ai assistant copilot and agent" → (weak) ai-agent-vs-chatbot (expected ai-agent-vs-chatbot|ai-agents)
- RT414 [WEAK] "how do i chunk pdfs for retrieval" → (weak) chunking (expected chunking|document-understanding-ai)
- RT426 [WEAK] "how to get consistent structured data out of messy emails" → (weak) structured-outputs (expected structured-outputs|document-understanding-ai|constrained-decoding)

## Misspelling / unknown vocabulary (no spelling tolerance) (25)
- RT011 [MISS] "my classifier is 99 percent on training data and 70 percent on new data" → (weak) ai-privacy-and-security (expected overfitting-and-regularization)
- RT019 [WEAK] "two networks competing to make fake images" → (weak) convolutional-neural-networks (expected generative-adversarial-networks)
- RT030 [MISS] "transfomer architecure basics" → (weak) power-platform (expected transformers)
- RT031 [WEAK] "reinforcment learning explaned" → (weak) deep-learning (expected reinforcement-learning)
- RT043 [MISS] "can i read what the model was thinking before it answered" → (weak) model-cards (expected reasoning-transparency|reasoning-models)
- RT058 [MISS] "how do i measure how similar two documents are numerically" → (weak) document-understanding-ai (expected embeddings)
- RT059 [MISS] "how can a computer know two sentences mean the same thing" → (weak) computer-use-agents (expected embeddings)
- RT064 [MISS] "vektor databse basics" → (weak) power-platform (expected vector-databases)
- RT068 [MISS] "let my assistant send calendar invites on my behalf" → (weak) ai-agent-vs-chatbot (expected connecting-agents-to-apps|oauth-for-ai-agents|integration-permissions)
- RT070 [WEAK] "what permissions should an email reading agent have" → (weak) ai-agent-vs-chatbot (expected integration-permissions|gmail-for-ai-agents|oauth-for-ai-agents)
- RT073 [MISS] "my agent gets stuck repeating the same step" → (weak) ai-agent-vs-chatbot (expected react-agent-pattern|agentic-workflows|ai-agents)
- RT091 [WEAK] "how would agents from different vendors collaborate" → (weak) openai-agents-sdk (expected a2a-protocol|agent-protocol-landscape)
- RT093 [WEAK] "modle context protocal" → (weak) context-engineering (expected mcp)
- RT098 [WEAK] "pip install broke my environment" → (weak) environment-variables (expected package-managers|python)
- RT171 [MISS] "easiest way to pull and chat with an open model on my own pc" → (weak) open-weights-models (expected ollama|local-ai)
- RT180 [WEAK] "can i run ai privately on my own machine" → (weak) ai-governance (expected local-ai|local-ai-vs-cloud-ai)
- RT188 [WEAK] "extract text from scanned invoices" → (weak) contrastive-learning-clip (expected document-understanding-ai)
- RT194 [MISS] "can ai clone my voice" → (weak) ai-governance (expected speech-ai|c2pa-content-provenance)
- RT201 [MISS] "ai that imagines future states to plan actions" → (weak) ai-governance (expected world-models)
- RT242 [WEAK] "why do chatbots flatter users" → (weak) ai-alignment (expected sycophancy|rlhf)
- RT291 [WEAK] "langchian agents" → (weak) openai-agents-sdk (expected langchain|agent-frameworks-compared)
- RT408 [WEAK] "trace every tool call my agent makes" → (weak) ai-agent-vs-chatbot (expected llm-observability|agent-evaluation)
- RT421 [WEAK] "can i run deepseek or llama privately" → (weak) llama-cpp (expected local-ai|open-weights-models|ollama)
- RT423 [MISS] "model says it cannot see my document but i pasted it" → (weak) model-cards (expected context-windows|tokens)
- RT424 [MISS] "ai to turn meeting recordings into notes" → (weak) ai-governance (expected speech-ai)

## Ambiguous term / missing negative-context protection (18)
- RT329 [FALSE POSITIVE] "transformer toy" → transformers
- RT331 [FALSE POSITIVE] "python pet" → python
- RT332 [FALSE POSITIVE] "react to this message" → react
- RT333 [FALSE POSITIVE] "docker clothing" → docker
- RT336 [FALSE POSITIVE] "java coffee beans" → java
- RT339 [FALSE POSITIVE] "rust remover for bike chains" → rust
- RT345 [FALSE POSITIVE] "git gud meaning" → git
- RT353 [FALSE POSITIVE] "rag doll sewing pattern" → rag
- RT355 [FALSE POSITIVE] "token of appreciation gift ideas" → tokens
- RT364 [FALSE POSITIVE] "attention deficit in adults" → transformers
- RT366 [FALSE POSITIVE] "reinforcement learning in child psychology rewards" → reinforcement-learning
- RT367 [FALSE POSITIVE] "unsupervised learning at home for kids" → unsupervised-learning
- RT368 [FALSE POSITIVE] "embedding a youtube video in my wordpress site" → embeddings
- RT370 [FALSE POSITIVE] "distillation of whisky at home" → knowledge-distillation
- RT371 [FALSE POSITIVE] "dropout rate at university" → overfitting-and-regularization
- RT373 [FALSE POSITIVE] "clip art for presentations" → contrastive-learning-clip
- RT375 [FALSE POSITIVE] "whisper in my ear lyrics" → speech-ai
- RT380 [FALSE POSITIVE] "perplexity about my career choice" → evaluation-metrics-for-ai

## Missing comparison route (6)
- RT015 [WEAK] "why did transformers replace lstms" → (weak) vision-transformers (expected transformers|recurrent-neural-networks)
- RT075 [WEAK] "should i use several agents or one" → (weak) openai-agents-sdk (expected multi-agent-systems|agentic-workflows|ai-agents)
- RT181 [WEAK] "local model or cloud api for sensitive documents" → (weak) model-apis (expected local-ai-vs-cloud-ai|ai-privacy-and-security)
- RT257 [MISS] "bert versus gpt style models" → (weak) small-language-models (expected encoder-decoder-vs-decoder-only)
- RT287 [MISS] "oss vs proprietary models" → (weak) reasoning-models (expected open-weights-models)
- RT407 [MISS] "compare gpt style and bert style models for classification" → (weak) small-language-models (expected encoder-decoder-vs-decoder-only)

## Tool recommendation not offered (expected tool exists) (6)
- RT034 [WEAK] "i need to write a good prompt for summarising legal contracts" → (weak) prompt-engineering (expected prompt-engineering|common-prompting-mistakes)
- RT037 [WEAK] "compare my old system prompt with the new one" → system-prompts (expected system-prompts|prompt-engineering)
- RT081 [WEAK] "i need a plan for who does what between agents handling support tickets" → (weak) agent-planning (expected agentic-workflows|multi-agent-systems)
- RT117 [FALSE POSITIVE] "unexpected token in json at position 0" → tokens (expected json-validation|what-is-json)
- RT119 [WEAK] "pretty print and validate this json" → (weak) json-validation (expected json-validation|what-is-json)
- RT222 [MISS] "check whether each claim is backed by the source text" → (weak) open-weights-models (expected how-to-reduce-hallucinations|ai-hallucinations|rag-evaluation)

## Wrong ranking (unrelated page anchored) (2)
- RT050 [FALSE POSITIVE] "why is the same prompt giving different answers every time" → common-prompting-mistakes (expected sampling-and-decoding)
- RT167 [FALSE POSITIVE] "framework where you declare modules and let an optimizer tune the prompts" → backpropagation-and-gradient-descent (expected dspy)

## Missing acronym (2)
- RT281 [MISS] "what is hitl in ai workflows" → (weak) ai-governance (expected agentic-workflows|ai-agents)
- RT285 [WEAK] "crud api example" → (weak) api-keys (expected rest-apis|what-is-an-api)

## Missing troubleshooting route (1)
- RT036 [MISS] "the model keeps ignoring my instructions" → (weak) model-cards (expected common-prompting-mistakes|system-prompts|prompt-engineering)

## Missing architecture route (1)
- RT052 [MISS] "design a pipeline that answers questions from our internal wiki" → (weak) distributed-training (expected rag|chunking|embeddings)

## Genuine Knowledge coverage gap (confident unrelated answer) (1)
- RT297 [FALSE POSITIVE] "what is a helm chart" → benchmarks-and-leaderboards (expected containers|docker)
