# Failure analysis — h2-baseline

Causes are assigned by rule from each result (see tests/redteam/analyze.mjs) and are probable, not proven. A query is counted once.

| Cause | Count |
| --- | --- |
| Missing synonym / paraphrase intent (right page not surfaced) | 27 |
| Right page ranked first but un-anchored (missing synonym/intent/concept) | 21 |
| Overly broad keyword / generic hub page outranks specific page | 9 |
| Misspelling / unknown vocabulary (no spelling tolerance) | 8 |
| Wrong ranking (unrelated page anchored) | 7 |
| Missing troubleshooting route | 3 |
| Ambiguous term / missing negative-context protection | 3 |
| Wrong ranking among sibling pages | 2 |
| Missing comparison route | 1 |
| Tool recommendation not offered (expected tool exists) | 1 |
| Genuine Knowledge coverage gap (confident unrelated answer) | 1 |

## Missing synonym / paraphrase intent (right page not surfaced) (27)
- H2-002 [WEAK] "how do machines learn from examples" → (weak) prompt-engineering (expected supervised-learning|what-is-ai|neural-networks)
- H2-003 [MISS] "why does the ai sometimes just invent a source that does not exist" → (weak) ai-governance (expected ai-hallucinations|how-to-reduce-hallucinations)
- H2-004 [MISS] "whats the limit on how long my conversation with an ai can be" → (weak) ai-governance (expected context-windows|tokens)
- H2-005 [MISS] "how do text predictors turn a prompt into a paragraph" → (weak) system-prompts (expected large-language-models|sampling-and-decoding)
- H2-019 [MISS] "how do labs pick model size and dataset size for a training budget" → (weak) model-cards (expected scaling-laws)
- H2-022 [WEAK] "generate many candidates and keep the highest scoring one" → (weak) rag-frameworks (expected best-of-n-sampling)
- H2-024 [WEAK] "force the output to follow a regular expression" → (weak) structured-outputs (expected constrained-decoding|grammar-guided-generation)
- H2-027 [MISS] "how should i structure instructions so the model follows them" → (weak) model-cards (expected prompt-engineering|system-prompts)
- H2-030 [MISS] "my pdf is too long for the model what do i do" → (weak) model-cards (expected chunking|rag|context-windows)
- H2-035 [WEAK] "relationships between entities across many documents" → (weak) document-understanding-ai (expected graph-rag)
- H2-039 [MISS] "give an agent access to our crm" → (weak) ai-agent-vs-chatbot (expected connecting-agents-to-apps|agent-tools|integration-permissions)
- H2-040 [MISS] "how do i prevent the assistant from sending emails without asking" → (weak) ai-agent-vs-chatbot (expected integration-permissions|ai-guardrails|agent-tools)
- H2-041 [MISS] "hidden instructions inside a pdf the agent reads" → (weak) ai-agent-vs-chatbot (expected prompt-injection)
- H2-046 [MISS] "microsoft stack agent sdk" → (weak) openai-agents-sdk (expected semantic-kernel|agent-frameworks-compared)
- H2-047 [MISS] "state machine style framework with checkpoints" → (weak) choosing-an-agent-framework (expected langgraph)
- H2-052 [WEAK] "what can go wrong with third party tool servers" → (weak) function-calling (expected mcp-security)
- H2-053 [MISS] "how do independent agents discover each other" → (weak) openai-agents-sdk (expected a2a-protocol)
- H2-083 [MISS] "export a model for cross platform inference" → (weak) model-serving-and-inference (expected onnx-runtime)
- H2-084 [MISS] "why is my local model so slow" → (weak) model-cards (expected quantization|llama-cpp|gpus-and-ai-accelerators)
- H2-088 [MISS] "automatic captions for video" → (weak) video-generation-models (expected speech-ai)
- H2-090 [WEAK] "policies conditioned on camera images and instructions" → (weak) system-prompts (expected vision-language-action-models)
- H2-091 [WEAK] "planning inside a learned model of the environment" → (weak) model-cards (expected world-models)
- H2-095 [MISS] "filtering unsafe model outputs" → (weak) model-cards (expected ai-guardrails)
- H2-098 [WEAK] "grading answers with a rubric and a strong model" → (weak) model-cards (expected llm-as-a-judge)
- H2-108 [MISS] "training a chatbot on thumbs up and thumbs down data" → (weak) ai-agent-vs-chatbot (expected rlhf|preference-optimization)
- H2-110 [MISS] "model optimises the metric instead of the goal" → (weak) model-cards (expected reward-hacking)
- H2-112 [MISS] "learning the solution operator of a pde" → (weak) deep-learning (expected physics-informed-neural-networks)

## Right page ranked first but un-anchored (missing synonym/intent/concept) (21)
- H2-006 [WEAK] "why are deep networks called deep" → (weak) deep-learning (expected deep-learning|neural-networks)
- H2-007 [WEAK] "why do we need activation functions" → (weak) neural-networks (expected neural-networks)
- H2-012 [WEAK] "why are images split into patches for transformers" → (weak) vision-transformers (expected vision-transformers)
- H2-021 [WEAK] "a verifier that rates each line of a proof" → (weak) process-reward-model (expected process-reward-model)
- H2-023 [WEAK] "search tree of partial solutions for puzzles" → (weak) search-over-reasoning (expected search-over-reasoning)
- H2-028 [WEAK] "examples in the prompt to show the format i want" → (weak) prompt-engineering (expected prompt-engineering)
- H2-029 [WEAK] "answers are generic and vague" → (weak) common-prompting-mistakes (expected common-prompting-mistakes|prompt-engineering)
- H2-042 [WEAK] "how does an assistant remember my preferences between sessions" → (weak) agent-memory (expected agent-memory)
- H2-043 [WEAK] "planner and worker agents" → (weak) multi-agent-systems (expected multi-agent-systems|agent-planning|agentic-workflows)
- H2-044 [WEAK] "break a big goal into subtasks automatically" → (weak) agent-planning (expected agent-planning)
- H2-057 [WEAK] "generic types for api responses" → (weak) typescript-api-client-types (expected typescript-api-client-types|typescript)
- H2-058 [WEAK] "fetch with streaming response body" → (weak) streaming-ai-responses (expected streaming-ai-responses|javascript-for-ai)
- H2-061 [WEAK] "http methods get post put delete" → (weak) rest-apis (expected rest-apis|what-is-an-api)
- H2-062 [WEAK] "should the browser hold my secret key" → (weak) api-keys (expected api-keys|environment-variables)
- H2-069 [WEAK] "what does aws lambda do" → (weak) aws-fundamentals (expected aws-fundamentals)
- H2-070 [WEAK] "what are azure resource groups" → (weak) azure-fundamentals (expected azure-fundamentals)
- H2-072 [WEAK] "difference between an image and a container" → (weak) containers (expected docker|containers)
- H2-085 [WEAK] "is a local model as good as a cloud one" → (weak) local-ai-vs-cloud-ai (expected local-ai-vs-cloud-ai|local-ai)
- H2-089 [WEAK] "why is robotics harder than chatbots" → (weak) embodied-ai (expected embodied-ai)
- H2-096 [WEAK] "signed provenance on generated images" → (weak) c2pa-content-provenance (expected c2pa-content-provenance)
- H2-099 [WEAK] "precision recall and f1 explained" → (weak) evaluation-metrics-for-ai (expected evaluation-metrics-for-ai)

## Overly broad keyword / generic hub page outranks specific page (9)
- H2-014 [FALSE POSITIVE] "constant memory sequence model that avoids quadratic attention" → transformers (expected state-space-models)
- H2-045 [FALSE POSITIVE] "an llm that calls a calculator or search engine" → large-language-models (expected function-calling|agent-tools)
- H2-048 [FALSE POSITIVE] "role based crew of agents in python" → python (expected crewai)
- H2-050 [FALSE POSITIVE] "how does a client talk to an mcp server" → mcp (expected mcp-servers-and-clients)
- H2-054 [FALSE POSITIVE] "python tutorial for calling models" → python (expected calling-ai-apis-with-python|python-for-ai)
- H2-055 [FALSE POSITIVE] "pandas dataframe to feed an llm" → large-language-models (expected python-data-for-ai)
- H2-059 [FALSE POSITIVE] "show tokens as they stream into a chat component" → tokens (expected react-chatbot-state|react-ai-interfaces|streaming-ai-responses)
- H2-063 [FALSE POSITIVE] "refresh tokens and access tokens" → tokens (expected oauth|json-web-tokens)
- H2-102 [FALSE POSITIVE] "how to reduce tokens and cost in production" → tokens (expected llm-cost-optimization|prompt-caching)

## Misspelling / unknown vocabulary (no spelling tolerance) (8)
- H2-011 [MISS] "agent receives reward only at the end of an episode" → (weak) ai-agent-vs-chatbot (expected reinforcement-learning|markov-decision-processes)
- H2-020 [MISS] "what is the point of letting a model think longer before it replies" → (weak) model-cards (expected test-time-compute|reasoning-models)
- H2-037 [MISS] "can my bot book meetings in outlook" → (weak) teams-development (expected connecting-agents-to-apps|microsoft-graph|oauth-for-ai-agents)
- H2-038 [MISS] "agent reads my inbox and drafts replies" → (weak) ai-agent-vs-chatbot (expected gmail-for-ai-agents|connecting-agents-to-apps|agent-tools)
- H2-065 [MISS] "what is a primary key and a foreign key" → (weak) api-keys (expected sql)
- H2-086 [MISS] "reading text inside photos" → (weak) contrastive-learning-clip (expected document-understanding-ai|vision-language-models)
- H2-094 [MISS] "testing a model for jailbreaks before release" → (weak) model-cards (expected red-teaming)
- H2-107 [WEAK] "can a model be audited for fairness" → (weak) model-cards (expected ai-bias-and-fairness)

## Wrong ranking (unrelated page anchored) (7)
- H2-013 [FALSE POSITIVE] "sparse routing to a few feed forward experts" → agentic-workflows (expected mixture-of-experts)
- H2-025 [FALSE POSITIVE] "llama.cpp grammar file for json" → llama-cpp (expected gbnf-grammars|constrained-decoding)
- H2-031 [FALSE POSITIVE] "combine keyword and vector search" → vector-databases (expected hybrid-search-and-reranking)
- H2-068 [FALSE POSITIVE] "embeddings and relational data in one database" → embeddings (expected pgvector|postgresql-for-ai-apps)
- H2-087 [FALSE POSITIVE] "image and text embeddings in one space" → embeddings (expected contrastive-learning-clip)
- H2-109 [FALSE POSITIVE] "loss function over chosen and rejected completions" → backpropagation-and-gradient-descent (expected dpo)
- H2-111 [FALSE POSITIVE] "protein folding with deep learning" → deep-learning (expected alphafold)

## Missing troubleshooting route (3)
- H2-008 [MISS] "gradients vanish in my recurrent model" → (weak) model-cards (expected recurrent-neural-networks|backpropagation-and-gradient-descent)
- H2-009 [WEAK] "training loss goes down but validation loss goes up" → (weak) backpropagation-and-gradient-descent (expected overfitting-and-regularization)
- H2-036 [MISS] "retriever misses exact product codes" → (weak) flash-attention (expected hybrid-search-and-reranking|embeddings)

## Ambiguous term / missing negative-context protection (3)
- H2-124 [FALSE POSITIVE] "rag and bone man tour dates" → rag
- H2-125 [FALSE POSITIVE] "git hub of the community garden" → git
- H2-134 [FALSE POSITIVE] "redis cluster of hotels" → redis

## Wrong ranking among sibling pages (2)
- H2-026 [FALSE POSITIVE] "python library for guided generation with pydantic models" → constrained-decoding (expected outlines|structured-outputs)
- H2-049 [FALSE POSITIVE] "standard way to expose tools to any ai client" → agent-tools (expected mcp|mcp-servers-and-clients)

## Missing comparison route (1)
- H2-018 [MISS] "adapter training or updating every weight" → (weak) distributed-training (expected lora-vs-full-fine-tuning|lora-and-peft)

## Tool recommendation not offered (expected tool exists) (1)
- H2-093 [MISS] "what do i need to redact before using a third party model" → (weak) model-cards (expected ai-privacy-and-security)

## Genuine Knowledge coverage gap (confident unrelated answer) (1)
- H2-118 [FALSE POSITIVE] "gdpr right to erasure and machine learning" → what-is-ai (expected ai-privacy-and-security|ai-governance)
