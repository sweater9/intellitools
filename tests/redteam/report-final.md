# Knowledge red-team report — final

Dataset: `tests/redteam/frozen-queries.json` sha256 `4982137be9b08e5b5635cf7da758e43f51f0580d5acdb740ad27513aaf026ec0`

Total 426 · PASS 419 · WEAK 0 · MISS 0 · FALSE POSITIVE 7
Pass rate 98.4% · False-positive rate 1.6%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 426 · WEAK 0 · MISS 0 · FALSE POSITIVE 0 · pass rate 100.0% · FP rate 0.0%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 3/4

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 43 | 36 | 0 | 0 | 7 | 83.7% |
| neg | 79 | 79 | 0 | 0 | 0 | 100.0% |
| page | 304 | 304 | 0 | 0 | 0 | 100.0% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| acronym | 14 | 14 | 0 | 0 | 0 | 100.0% |
| ambiguous-or-off-topic | 73 | 73 | 0 | 0 | 0 | 100.0% |
| architecture | 5 | 5 | 0 | 0 | 0 | 100.0% |
| beginner | 46 | 46 | 0 | 0 | 0 | 100.0% |
| comparison | 9 | 9 | 0 | 0 | 0 | 100.0% |
| concept | 74 | 74 | 0 | 0 | 0 | 100.0% |
| conversational | 3 | 3 | 0 | 0 | 0 | 100.0% |
| coverage-probe | 39 | 33 | 0 | 0 | 6 | 84.6% |
| expert | 16 | 16 | 0 | 0 | 0 | 100.0% |
| implementation | 28 | 28 | 0 | 0 | 0 | 100.0% |
| integration | 5 | 5 | 0 | 0 | 0 | 100.0% |
| mixed-natural | 25 | 25 | 0 | 0 | 0 | 100.0% |
| security | 20 | 20 | 0 | 0 | 0 | 100.0% |
| tech-selection | 1 | 1 | 0 | 0 | 0 | 100.0% |
| troubleshooting | 14 | 14 | 0 | 0 | 0 | 100.0% |
| typo | 16 | 15 | 0 | 0 | 1 | 93.8% |
| vague | 14 | 14 | 0 | 0 | 0 | 100.0% |
| what-to-use | 24 | 24 | 0 | 0 | 0 | 100.0% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 4 | 4 | 0 | 0 | 0 | 100.0% |
| agent | 18 | 18 | 0 | 0 | 0 | 100.0% |
| ai | 37 | 37 | 0 | 0 | 0 | 100.0% |
| amb | 53 | 53 | 0 | 0 | 0 | 100.0% |
| api | 11 | 11 | 0 | 0 | 0 | 100.0% |
| arch | 6 | 6 | 0 | 0 | 0 | 100.0% |
| cloud | 5 | 5 | 0 | 0 | 0 | 100.0% |
| cv | 6 | 4 | 0 | 0 | 2 | 66.7% |
| data | 2 | 2 | 0 | 0 | 0 | 100.0% |
| db | 9 | 9 | 0 | 0 | 0 | 100.0% |
| dev | 15 | 14 | 0 | 0 | 1 | 93.3% |
| devops | 17 | 15 | 0 | 0 | 2 | 88.2% |
| dl | 10 | 10 | 0 | 0 | 0 | 100.0% |
| embed | 2 | 2 | 0 | 0 | 0 | 100.0% |
| eval | 10 | 10 | 0 | 0 | 0 | 100.0% |
| fw | 9 | 9 | 0 | 0 | 0 | 100.0% |
| gov | 8 | 7 | 0 | 0 | 1 | 87.5% |
| js | 3 | 3 | 0 | 0 | 0 | 100.0% |
| json | 4 | 4 | 0 | 0 | 0 | 100.0% |
| llm | 30 | 30 | 0 | 0 | 0 | 100.0% |
| local | 5 | 5 | 0 | 0 | 0 | 100.0% |
| mcp | 7 | 7 | 0 | 0 | 0 | 100.0% |
| mixed | 25 | 25 | 0 | 0 | 0 | 100.0% |
| ml | 7 | 7 | 0 | 0 | 0 | 100.0% |
| mlops | 8 | 8 | 0 | 0 | 0 | 100.0% |
| mm | 2 | 2 | 0 | 0 | 0 | 100.0% |
| ms | 16 | 16 | 0 | 0 | 0 | 100.0% |
| nextjs | 1 | 1 | 0 | 0 | 0 | 100.0% |
| node | 2 | 2 | 0 | 0 | 0 | 100.0% |
| off | 20 | 20 | 0 | 0 | 0 | 100.0% |
| prompt | 4 | 4 | 0 | 0 | 0 | 100.0% |
| python | 6 | 6 | 0 | 0 | 0 | 100.0% |
| rag | 6 | 6 | 0 | 0 | 0 | 100.0% |
| react | 3 | 3 | 0 | 0 | 0 | 100.0% |
| rl | 4 | 4 | 0 | 0 | 0 | 100.0% |
| robot | 7 | 6 | 0 | 0 | 1 | 85.7% |
| runtime | 9 | 9 | 0 | 0 | 0 | 100.0% |
| safety | 7 | 7 | 0 | 0 | 0 | 100.0% |
| science | 5 | 5 | 0 | 0 | 0 | 100.0% |
| sec | 11 | 11 | 0 | 0 | 0 | 100.0% |
| speech | 4 | 4 | 0 | 0 | 0 | 100.0% |
| ts | 2 | 2 | 0 | 0 | 0 | 100.0% |
| vector | 5 | 5 | 0 | 0 | 0 | 100.0% |
| video | 1 | 1 | 0 | 0 | 0 | 100.0% |

## FALSE POSITIVE
- RT190 [gap/coverage-probe] "how does object detection like yolo work" → object-detection (score 135, solid yes) — expected convolutional-neural-networks|vision-transformers; confident unrelated page: object-detection
- RT191 [gap/coverage-probe] "opencv tutorial for face detection" → object-detection (score 96, solid yes) — expected convolutional-neural-networks; confident unrelated page: object-detection
- RT202 [gap/coverage-probe] "how do i program a robot with ros" → robot-operating-system (score 122, solid yes) — expected embodied-ai; confident unrelated page: robot-operating-system
- RT238 [gap/coverage-probe] "what is gdpr and does it cover ai training data" → gdpr-and-ai (score 144, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: gdpr-and-ai
- RT290 [gap/typo] "kubenetes basics" → kubernetes (score 88, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT296 [gap/coverage-probe] "how do i run a kubernetes cluster" → kubernetes (score 95, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT297 [gap/coverage-probe] "what is a helm chart" → kubernetes (score 76, solid yes) — expected containers|docker; confident unrelated page: kubernetes

## MISS

## WEAK

## Path completeness failures
- RT067 "i want an ai agent that can read gmail" top gmail-for-ai-agents; learn agent-tools, oauth-for-ai-agents, connecting-agents-to-apps, ai-privacy-and-security, function-calling

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RT001 | PASS | page | ai vs machine learning whats the difference | what-is-ai | 98 | yes | — |  |
| RT002 | PASS | page | explain neural nets like im five | neural-networks | 68 | yes | — |  |
| RT003 | PASS | page | how does chatgpt actually work | large-language-models | 105 | yes | — |  |
| RT004 | PASS | page | why do language models make stuff up | ai-hallucinations | 62 | yes | — |  |
| RT005 | PASS | page | wats a token in ai | tokens | 87 | yes | — |  |
| RT006 | PASS | page | how much text can an llm remember in one go | context-windows | 49 | yes | — |  |
| RT007 | PASS | page | what makes a model generative | generative-ai | 70 | yes | — |  |
| RT008 | PASS | page | is deep learning the same as ml | deep-learning | 134 | yes | — |  |
| RT009 | PASS | page | labelled versus unlabelled data in machine learning | unsupervised-learning | 81 | yes | — |  |
| RT010 | PASS | page | how does a neural network adjust itself while training | neural-networks | 67 | yes | — |  |
| RT011 | PASS | page | my classifier is 99 percent on training data and 70 percent on new data | overfitting-and-regularization | 59 | yes | — |  |
| RT012 | PASS | page | reuse imagenet weights for my own photos | transfer-learning | 48 | yes | — |  |
| RT013 | PASS | page | robot dog learning to walk by trial and error | reinforcement-learning | 81 | yes | — |  |
| RT014 | PASS | page | how do image classifiers detect edges and shapes | convolutional-neural-networks | 52 | yes | — |  |
| RT015 | PASS | page | why did transformers replace lstms | transformers | 51 | yes | — |  |
| RT016 | PASS | page | attention is all you need explained simply | transformers | 86 | yes | — |  |
| RT017 | PASS | page | what is a latent space | variational-autoencoders | 80 | yes | — |  |
| RT018 | PASS | page | how do generative models make pictures out of noise | diffusion-models | 75 | yes | — |  |
| RT019 | PASS | page | two networks competing to make fake images | generative-adversarial-networks | 57 | yes | — |  |
| RT020 | PASS | page | which neural network type handles molecules and social networks | graph-neural-networks | 81 | yes | — |  |
| RT021 | PASS | page | why does adam use decoupled weight decay | overfitting-and-regularization | 60 | yes | — |  |
| RT022 | PASS | page | how does ppo clip the policy update | proximal-policy-optimization | 91 | yes | — |  |
| RT023 | PASS | page | bellman optimality equation intuition | markov-decision-processes | 58 | yes | — |  |
| RT024 | PASS | page | why does dqn need a target network | deep-q-networks | 81 | yes | — |  |
| RT025 | PASS | page | hey can you tell me what unsupervised learning even is | unsupervised-learning | 82 | yes | — |  |
| RT026 | PASS | page | sgd vs adam which one | backpropagation-and-gradient-descent | 81 | yes | — |  |
| RT027 | PASS | page | what is a vae used for | variational-autoencoders | 56 | yes | — |  |
| RT028 | PASS | page | gnn use cases | graph-neural-networks | 51 | yes | — |  |
| RT029 | PASS | page | cnn or vit for a small dataset | cnn-vs-vision-transformer | 71 | yes | — |  |
| RT030 | PASS | page | transfomer architecure basics | transformers | 88 | yes | — |  |
| RT031 | PASS | page | reinforcment learning explaned | reinforcement-learning | 90 | yes | — |  |
| RT032 | PASS | page | embedings vs tokens | embeddings | 46 | yes | — |  |
| RT033 | PASS | page | what is a prompt and why does wording matter | prompt-engineering | 70 | yes | — |  |
| RT034 | PASS | page | i need to write a good prompt for summarising legal contracts | prompt-engineering | 84 | yes | ai-prompt-builder |  |
| RT035 | PASS | page | what goes in a system prompt for a customer support bot | system-prompts | 105 | yes | — |  |
| RT036 | PASS | page | the model keeps ignoring my instructions | common-prompting-mistakes | 55 | yes | — |  |
| RT037 | PASS | page | compare my old system prompt with the new one | system-prompts | 71 | yes | prompt-diff |  |
| RT038 | PASS | page | how do reasoning models spend extra tokens before answering | reasoning-models | 148 | yes | — |  |
| RT039 | PASS | page | majority vote across sampled chains of thought | self-consistency | 42 | yes | — |  |
| RT040 | PASS | page | step level verifier for maths solutions | process-reward-model | 72 | yes | — |  |
| RT041 | PASS | page | reward models trained only on final answers | outcome-reward-model | 92 | yes | — |  |
| RT042 | PASS | page | rl with unit test rewards for coding models | reinforcement-learning-for-reasoning | 70 | yes | — |  |
| RT043 | PASS | page | can i read what the model was thinking before it answered | reasoning-transparency | 52 | yes | — |  |
| RT044 | PASS | page | my output is truncated when using a thinking model | reasoning-models | 70 | yes | — |  |
| RT045 | PASS | page | when is a thinking model worth the extra cost | reasoning-models | 73 | yes | — |  |
| RT046 | PASS | page | make the model return json that always matches my schema | constrained-decoding | 62 | yes | — |  |
| RT047 | PASS | page | how do grammars restrict which tokens a model can sample | constrained-decoding | 44 | yes | — |  |
| RT048 | PASS | page | json mode or function calling for extraction | structured-output-methods-compared | 86 | yes | — |  |
| RT049 | PASS | page | what does temperature do | sampling-and-decoding | 28 | yes | — |  |
| RT050 | PASS | page | why is the same prompt giving different answers every time | sampling-and-decoding | 56 | yes | — |  |
| RT051 | PASS | page | what is rag in simple words | rag | 50 | yes | — |  |
| RT052 | PASS | page | design a pipeline that answers questions from our internal wiki | rag | 47 | yes | — |  |
| RT053 | PASS | page | how big should my chunks be | chunking | 74 | yes | — |  |
| RT054 | PASS | page | rag answers sound confident but cite the wrong document | rag | 51 | yes | — |  |
| RT055 | PASS | page | should i fine tune or use retrieval for company docs | rag-vs-fine-tuning | 102 | yes | — |  |
| RT056 | PASS | page | reranking with a cross encoder after bm25 | hybrid-search-and-reranking | 90 | yes | — |  |
| RT057 | PASS | page | multi hop questions over a knowledge graph | graph-rag | 97 | yes | — |  |
| RT058 | PASS | page | how do i measure how similar two documents are numerically | embeddings | 47 | yes | — |  |
| RT059 | PASS | page | how can a computer know two sentences mean the same thing | embeddings | 46 | yes | — |  |
| RT060 | PASS | page | store embeddings in postgres | pgvector | 92 | yes | — |  |
| RT061 | PASS | page | can plain postgres handle semantic search or must i add a vector store | vector-databases | 100 | yes | — |  |
| RT062 | PASS | page | which vector store should i pick for a prototype | choosing-a-vector-store | 117 | yes | — |  |
| RT063 | PASS | page | hnsw vs ivf index tradeoffs | vector-databases | 63 | yes | — |  |
| RT064 | PASS | page | vektor databse basics | vector-databases | 101 | yes | — |  |
| RT065 | PASS | page | what is an ai agent | ai-agents | 95 | yes | — |  |
| RT066 | PASS | page | is a bot that only answers questions already an agent | ai-agent-vs-chatbot | 83 | yes | — |  |
| RT067 | PASS | page | i want an ai agent that can read gmail | gmail-for-ai-agents | 118 | yes | — |  |
| RT068 | PASS | page | let my assistant send calendar invites on my behalf | connecting-agents-to-apps | 48 | yes | — |  |
| RT069 | PASS | page | how do i connect an ai agent to slack and jira | connecting-agents-to-apps | 71 | yes | — |  |
| RT070 | PASS | page | what permissions should an email reading agent have | integration-permissions | 72 | yes | — |  |
| RT071 | PASS | page | can a malicious email hijack my agent | prompt-injection | 54 | yes | — |  |
| RT072 | PASS | page | how do agents decide which tool to call | agent-tools | 81 | yes | — |  |
| RT073 | PASS | page | my agent gets stuck repeating the same step | react-agent-pattern | 56 | yes | — |  |
| RT074 | PASS | page | agent forgets what we decided yesterday | agent-memory | 94 | yes | — |  |
| RT075 | PASS | page | should i use several agents or one | multi-agent-systems | 76 | yes | — |  |
| RT076 | PASS | page | which framework for a production agent | agent-frameworks-compared | 92 | yes | — |  |
| RT077 | PASS | page | langgraph versus crewai | crewai | 86 | yes | — |  |
| RT078 | PASS | page | do i even need langchain | langchain | 71 | yes | — |  |
| RT079 | PASS | page | retrieval where the model decides to search again if results look poor | agentic-rag | 99 | yes | — |  |
| RT080 | PASS | page | what is the react prompting pattern for agents | react-agent-pattern | 102 | yes | — |  |
| RT081 | PASS | page | i need a plan for who does what between agents handling support tickets | multi-agent-systems | 75 | yes | agentic-workflow-generator |  |
| RT082 | PASS | page | how do agent evaluation harnesses score tool trajectories | agent-evaluation | 93 | yes | — |  |
| RT083 | PASS | page | i keep hearing about mcp, what problem does it solve | mcp | 51 | yes | — |  |
| RT084 | PASS | page | why would i build an mcp server | mcp-servers-and-clients | 95 | yes | — |  |
| RT085 | PASS | page | why not just call the api directly instead of mcp | mcp-vs-api | 60 | yes | — |  |
| RT086 | PASS | page | mcp or plain function calling for my app | function-calling-vs-mcp | 89 | yes | — |  |
| RT087 | PASS | page | is it safe to install a random mcp server from github | mcp-security | 100 | yes | — |  |
| RT088 | PASS | page | tool poisoning in mcp | mcp-security | 88 | yes | — |  |
| RT089 | PASS | page | what is a2a | a2a-protocol | 71 | yes | — |  |
| RT090 | PASS | page | are a2a and mcp competitors | a2a-vs-mcp | 118 | yes | — |  |
| RT091 | PASS | page | how would agents from different vendors collaborate | a2a-protocol | 69 | yes | — |  |
| RT092 | PASS | page | where is the agent card published | a2a-protocol | 68 | yes | — |  |
| RT093 | PASS | page | modle context protocal | mcp | 72 | yes | — |  |
| RT094 | PASS | page | how do i call an llm api from python | calling-ai-apis-with-python | 108 | yes | — |  |
| RT095 | PASS | page | build a small rag app in python | rag-with-python | 124 | yes | — |  |
| RT096 | PASS | page | read a csv and clean it before sending to a model | python-data-for-ai | 72 | yes | — |  |
| RT097 | PASS | page | which python libraries do i need for ai work | python-ai-libraries | 121 | yes | — |  |
| RT098 | PASS | page | pip install broke my environment | package-managers | 56 | yes | — |  |
| RT099 | PASS | page | python for machine learning where to begin | python-for-ai | 85 | yes | — |  |
| RT100 | PASS | page | call an ai api from javascript without exposing my key | calling-ai-apis-with-javascript | 107 | yes | — |  |
| RT101 | PASS | page | type the response from my ai endpoint | typescript-api-client-types | 55 | yes | — |  |
| RT102 | PASS | page | stream tokens to the browser as they arrive | streaming-ai-responses | 61 | yes | — |  |
| RT103 | PASS | page | manage chat message state in react | react-chatbot-state | 109 | yes | — |  |
| RT104 | PASS | page | build a chat ui with react | react-ai-interfaces | 99 | yes | — |  |
| RT105 | PASS | page | what is react used for | react | 73 | yes | — |  |
| RT106 | PASS | page | should i use next.js for an ai chat app | nextjs | 76 | yes | — |  |
| RT107 | PASS | page | express server that proxies model requests | express | 78 | yes | — |  |
| RT108 | PASS | page | node js streming response | nodejs | 71 | yes | — |  |
| RT109 | PASS | page | why use typescript instead of javascript | typescript | 66 | yes | — |  |
| RT110 | PASS | page | typescript or javascript for a small tool | typescript | 66 | yes | — |  |
| RT111 | PASS | page | what is an api | what-is-an-api | 54 | yes | — |  |
| RT112 | PASS | page | rest vs graphql which one | rest-vs-graphql | 101 | yes | — |  |
| RT113 | PASS | page | what does restful mean | rest-apis | 46 | yes | — |  |
| RT114 | PASS | page | where should i keep my api keys | api-keys | 124 | yes | — |  |
| RT115 | PASS | page | api key versus oauth token | api-keys | 79 | yes | — |  |
| RT116 | PASS | page | what is json | what-is-json | 39 | yes | — |  |
| RT117 | PASS | page | unexpected token in json at position 0 | json-validation | 79 | yes | json-formatter |  |
| RT118 | PASS | page | validate an api payload against a schema | json-schema | 75 | yes | — |  |
| RT119 | PASS | page | pretty print and validate this json | json-validation | 85 | yes | json-formatter |  |
| RT120 | PASS | page | what is a webhook | webhooks | 59 | yes | — |  |
| RT121 | PASS | page | browser says blocked by cors policy | cors | 81 | yes | — |  |
| RT122 | PASS | page | what is inside a json web token | json-web-tokens | 77 | yes | — |  |
| RT123 | PASS | page | difference between authentication and authorization | authentication-vs-authorization | 117 | yes | — |  |
| RT124 | PASS | page | what is the oauth authorization code flow | oauth | 77 | yes | — |  |
| RT125 | PASS | page | openid connect vs oauth | openid-connect | 131 | yes | — |  |
| RT126 | PASS | page | when to use sql vs nosql | sql-vs-nosql | 95 | yes | — |  |
| RT127 | PASS | page | what is a relational database | sql | 51 | yes | — |  |
| RT128 | PASS | page | how do i join two tables | sql | 54 | yes | — |  |
| RT129 | PASS | page | postgres or mysql for a new project | postgresql | 67 | yes | — |  |
| RT130 | PASS | page | sqlite for a small app | sqlite | 53 | yes | — |  |
| RT131 | PASS | page | what is redis used for | redis | 59 | yes | — |  |
| RT132 | PASS | page | what is an orm | prisma-and-orms | 35 | yes | — |  |
| RT133 | PASS | page | which database should an ai app use | databases-for-ai-apps | 86 | yes | — |  |
| RT134 | PASS | page | store chat history for an assistant | databases-for-ai-apps | 48 | yes | — |  |
| RT135 | PASS | page | what is aws and what are its main services | aws-fundamentals | 43 | yes | — |  |
| RT136 | PASS | page | azure basics for developers | azure-fundamentals | 90 | yes | — |  |
| RT137 | PASS | page | what is gcp | gcp-fundamentals | 29 | yes | — |  |
| RT138 | PASS | page | aws vs azure vs gcp for hosting a model | aws-fundamentals | 44 | yes | — |  |
| RT139 | PASS | page | my s3 bucket is public by mistake | aws-fundamentals | 56 | yes | — |  |
| RT140 | PASS | page | what is docker | docker | 75 | yes | — |  |
| RT141 | PASS | page | container versus virtual machine | containers | 83 | yes | — |  |
| RT142 | PASS | page | what is ci cd | cicd | 54 | yes | — |  |
| RT143 | PASS | page | git basics for beginners | git | 64 | yes | — |  |
| RT144 | PASS | page | git says i have a merge conflict | git | 106 | yes | — |  |
| RT145 | PASS | page | what is github and how is it different from git | github | 80 | yes | — |  |
| RT146 | PASS | page | set up automatic tests on every pull request | github | 53 | yes | — |  |
| RT147 | PASS | page | what are environment variables for | environment-variables | 68 | yes | — |  |
| RT148 | PASS | page | package an app so it runs the same everywhere | docker | 50 | yes | — |  |
| RT149 | PASS | page | npm install fails with dependency errors | package-managers | 76 | yes | — |  |
| RT150 | PASS | page | what is sharepoint | sharepoint | 81 | yes | — |  |
| RT151 | PASS | page | what is spfx | sharepoint-framework | 138 | yes | — |  |
| RT152 | PASS | page | build my first spfx web part | build-spfx-web-part | 172 | yes | — |  |
| RT153 | PASS | page | sharepont framwork webpart | sharepoint-framework | 106 | yes | — |  |
| RT154 | PASS | page | what is microsoft graph | microsoft-graph | 94 | yes | — |  |
| RT155 | PASS | page | read a user's calendar through microsoft graph | microsoft-graph | 95 | yes | — |  |
| RT156 | PASS | page | what is entra id | microsoft-entra-id | 114 | yes | — |  |
| RT157 | PASS | page | what is power automate and power apps | power-platform | 108 | yes | — |  |
| RT158 | PASS | page | build a teams tab or bot | teams-development | 105 | yes | — |  |
| RT159 | PASS | page | what is microsoft 365 | microsoft-365 | 94 | yes | — |  |
| RT160 | PASS | page | let a daemon service call graph without a user | microsoft-graph | 99 | yes | — |  |
| RT161 | PASS | page | spfx or power apps for an intranet form | sharepoint-framework | 142 | yes | — |  |
| RT162 | PASS | page | what is an ai framework | what-is-an-ai-framework | 83 | yes | — |  |
| RT163 | PASS | page | what is hugging face | hugging-face | 94 | yes | — |  |
| RT164 | PASS | page | which sdk should i use to call different models | ai-sdks | 78 | yes | — |  |
| RT165 | PASS | page | what is llamaindex for | llamaindex | 71 | yes | — |  |
| RT166 | PASS | page | langchain or llamaindex for rag | llamaindex | 103 | yes | — |  |
| RT167 | PASS | page | framework where you declare modules and let an optimizer tune the prompts | dspy | 72 | yes | — |  |
| RT168 | PASS | page | microsoft sdk for plugging llms into dotnet apps | semantic-kernel | 58 | yes | — |  |
| RT169 | PASS | page | what is the openai agents sdk | openai-agents-sdk | 141 | yes | — |  |
| RT170 | PASS | page | what is autogen | autogen | 85 | yes | — |  |
| RT171 | PASS | page | easiest way to pull and chat with an open model on my own pc | local-ai | 54 | yes | — |  |
| RT172 | PASS | page | run an llm on my laptop without a gpu | local-ai | 63 | yes | — |  |
| RT173 | PASS | page | serve a model to hundreds of users | model-serving-and-inference | 66 | yes | — |  |
| RT174 | PASS | page | ollama versus vllm | ollama | 92 | yes | — |  |
| RT175 | PASS | page | what is gguf | llama-cpp | 66 | yes | — |  |
| RT176 | PASS | page | what is onnx | onnx-runtime | 73 | yes | — |  |
| RT177 | PASS | page | how do i run a model in the browser | onnx-runtime | 54 | yes | — |  |
| RT178 | PASS | page | why use pytorch | pytorch | 76 | yes | — |  |
| RT179 | PASS | page | cuda out of memory when loading a 13b model | gpus-and-ai-accelerators | 82 | yes | — |  |
| RT180 | PASS | page | can i run ai privately on my own machine | local-ai | 94 | yes | — |  |
| RT181 | PASS | page | local model or cloud api for sensitive documents | local-ai-vs-cloud-ai | 88 | yes | — |  |
| RT182 | PASS | page | are downloadable models the same as open source | open-weights-models | 126 | yes | — |  |
| RT183 | PASS | page | tiny llms that run on a phone | small-language-models | 52 | yes | — |  |
| RT184 | PASS | page | what does 4 bit quantization do | quantization | 91 | yes | — |  |
| RT185 | PASS | page | what is multimodal ai | multimodal-ai | 69 | yes | — |  |
| RT186 | PASS | page | how do models understand images and text together | vision-language-models | 75 | yes | — |  |
| RT187 | PASS | page | what is clip in computer vision | contrastive-learning-clip | 45 | yes | — |  |
| RT188 | PASS | page | extract text from scanned invoices | document-understanding-ai | 55 | yes | — |  |
| RT189 | PASS | page | vision transformer vs resnet | cnn-vs-vision-transformer | 99 | yes | — |  |
| RT190 | FALSE POSITIVE | gap | how does object detection like yolo work | object-detection | 135 | yes | — | confident unrelated page: object-detection |
| RT191 | FALSE POSITIVE | gap | opencv tutorial for face detection | object-detection | 96 | yes | — | confident unrelated page: object-detection |
| RT192 | PASS | page | how does speech to text work | speech-ai | 98 | yes | — |  |
| RT193 | PASS | page | build a voice assistant with an llm | speech-ai | 79 | yes | — |  |
| RT194 | PASS | page | can ai clone my voice | speech-ai | 71 | yes | — |  |
| RT195 | PASS | page | what is whisper | speech-ai | 55 | yes | — |  |
| RT196 | PASS | page | how do text to video models work | video-generation-models | 93 | yes | — |  |
| RT197 | PASS | page | how do robots learn from ai | embodied-ai | 91 | yes | — |  |
| RT198 | PASS | page | what is a vla model | vision-language-action-models | 64 | yes | — |  |
| RT199 | PASS | page | teaching a robot by demonstration | imitation-learning | 51 | yes | — |  |
| RT200 | PASS | page | my policy works in the simulator but not on hardware | sim-to-real-transfer | 57 | yes | — |  |
| RT201 | PASS | page | ai that imagines future states to plan actions | world-models | 53 | yes | — |  |
| RT202 | FALSE POSITIVE | gap | how do i program a robot with ros | robot-operating-system | 122 | yes | — | confident unrelated page: robot-operating-system |
| RT203 | PASS | gap | how do self driving cars work | (weak) self-consistency | 24 | no | — | transparent non-answer |
| RT204 | PASS | page | text hidden in a web page that tells my assistant to misbehave | prompt-injection | 55 | yes | — |  |
| RT205 | PASS | page | ignore previous instructions attack | prompt-injection | 77 | yes | — |  |
| RT206 | PASS | page | is it ok to paste customer data into chatgpt | ai-privacy-and-security | 93 | yes | — |  |
| RT207 | PASS | page | remove secrets from a log before sharing it with an ai | ai-privacy-and-security | 74 | yes | pii-secret-redactor |  |
| RT208 | PASS | page | standard checklist of security risks for generative ai apps | owasp-llm-top-10 | 85 | yes | — |  |
| RT209 | PASS | page | how do i red team my chatbot | red-teaming | 90 | yes | — |  |
| RT210 | PASS | page | how do guardrails stop harmful output | ai-guardrails | 95 | yes | — |  |
| RT211 | PASS | page | how do i sandbox code the model writes | code-execution-sandboxing | 100 | yes | — |  |
| RT212 | PASS | page | can i tell if an image was made by ai | c2pa-content-provenance | 64 | yes | — |  |
| RT213 | PASS | page | what is jailbreaking a model | prompt-injection | 53 | yes | — |  |
| RT214 | PASS | page | least privilege design for tool using agents | agent-tools | 63 | yes | — |  |
| RT215 | PASS | page | how do i know if my ai feature is any good | ai-evaluation | 69 | yes | — |  |
| RT216 | PASS | page | what does a high score on the 57 subject multiple choice benchmark tell me | mmlu | 82 | yes | — |  |
| RT217 | PASS | page | why are leaderboard rankings misleading | benchmarks-and-leaderboards | 68 | yes | — |  |
| RT218 | PASS | page | using one model to grade another | llm-as-a-judge | 54 | yes | — |  |
| RT219 | PASS | page | build a test set for my rag bot | rag-evaluation | 86 | yes | — |  |
| RT220 | PASS | page | which metrics for a classifier with rare positives | evaluation-metrics-for-ai | 64 | yes | — |  |
| RT221 | PASS | page | benchmark where models fix real github issues | swe-bench | 77 | yes | — |  |
| RT222 | PASS | page | check whether each claim is backed by the source text | how-to-reduce-hallucinations | 38 | yes | fact-anchor-checker |  |
| RT223 | PASS | page | how are chatbot elo rankings made | human-preference-evaluation | 79 | yes | — |  |
| RT224 | PASS | page | how do teams keep ml models running reliably after launch | mlops | 52 | yes | — |  |
| RT225 | PASS | page | track experiments and register models | mlflow | 55 | yes | — |  |
| RT226 | PASS | page | my model got worse after three months in production | model-drift-and-monitoring | 90 | yes | — |  |
| RT227 | PASS | page | log prompts and tokens in production | llm-observability | 55 | yes | — |  |
| RT228 | PASS | page | how many gpus do i need to serve a 70b model | gpus-and-ai-accelerators | 86 | yes | — |  |
| RT229 | PASS | page | how to split training across several gpus | distributed-training | 64 | yes | — |  |
| RT230 | PASS | page | cut my llm bill | llm-cost-optimization | 72 | yes | — |  |
| RT231 | PASS | page | what is ray used for | ray | 46 | yes | — |  |
| RT232 | PASS | page | who signs off on ai use inside a company | ai-governance | 98 | yes | — |  |
| RT233 | PASS | page | does the eu ai act apply to my startup | eu-ai-act | 107 | yes | — |  |
| RT234 | PASS | page | what is the nist ai risk framework | nist-ai-rmf | 151 | yes | — |  |
| RT235 | PASS | page | certifiable standard for managing ai in an organisation | iso-iec-42001 | 65 | yes | — |  |
| RT236 | PASS | page | documentation template for a released model | model-cards | 90 | yes | — |  |
| RT237 | PASS | page | are my model's error rates different across demographic groups | ai-bias-and-fairness | 54 | yes | — |  |
| RT238 | FALSE POSITIVE | gap | what is gdpr and does it cover ai training data | gdpr-and-ai | 144 | yes | — | confident unrelated page: gdpr-and-ai |
| RT239 | PASS | gap | ai regulation in the united states | (weak) eu-ai-act | 53 | no | — | transparent non-answer |
| RT240 | PASS | page | what is sycophancy | sycophancy | 81 | yes | — |  |
| RT241 | PASS | page | how is dpo different from rlhf | rlhf | 67 | yes | — |  |
| RT242 | PASS | page | why do chatbots flatter users | sycophancy | 51 | yes | — |  |
| RT243 | PASS | page | what does alignment mean for ai | ai-alignment | 53 | yes | — |  |
| RT244 | PASS | page | reward hacking examples | reward-hacking | 96 | yes | — |  |
| RT245 | PASS | page | ai critiques its own answers using written principles | constitutional-ai-and-rlaif | 85 | yes | — |  |
| RT246 | PASS | page | can we see inside a neural network | mechanistic-interpretability | 52 | yes | — |  |
| RT247 | PASS | page | predict 3d structure from an amino acid sequence | alphafold | 66 | yes | — |  |
| RT248 | PASS | page | neural networks that respect physics equations | physics-informed-neural-networks | 110 | yes | — |  |
| RT249 | PASS | page | can machine learning forecast weather | ai-weather-forecasting | 88 | yes | — |  |
| RT250 | PASS | page | ai for finding new battery materials | ai-materials-discovery | 103 | yes | — |  |
| RT251 | PASS | page | ai in drug discovery | ai-drug-discovery | 114 | yes | — |  |
| RT252 | PASS | page | model with many experts but only a few active per token | mixture-of-experts | 93 | yes | — |  |
| RT253 | PASS | page | what are state space models and mamba | state-space-models | 107 | yes | — |  |
| RT254 | PASS | page | how does a kv cache save compute | kv-cache | 92 | yes | — |  |
| RT255 | PASS | page | what is flash attention | flash-attention | 73 | yes | — |  |
| RT256 | PASS | page | how do transformers know word order | positional-encoding | 46 | yes | — |  |
| RT257 | PASS | page | bert versus gpt style models | encoder-decoder-vs-decoder-only | 93 | yes | — |  |
| RT258 | PASS | page | does making llms bigger improve them predictably | scaling-laws | 52 | yes | — |  |
| RT259 | PASS | page | how are base models turned into chat assistants | instruction-tuning | 71 | yes | — |  |
| RT260 | PASS | page | fine tune a 7b model on a single consumer gpu | lora-and-peft | 73 | yes | — |  |
| RT261 | PASS | page | distilling a big model into a small one | knowledge-distillation | 63 | yes | — |  |
| RT262 | PASS | page | small draft model proposes tokens a big model verifies | speculative-decoding | 62 | yes | — |  |
| RT263 | PASS | page | how does prompt caching reduce cost | prompt-caching | 119 | yes | — |  |
| RT264 | PASS | page | manage what goes into the context window for a long running agent | context-windows | 65 | yes | — |  |
| RT265 | PASS | page | what are open source models like llama | open-weights-models | 131 | yes | — |  |
| RT266 | PASS | page | how do i get started with ai | what-is-ai | 62 | yes | — |  |
| RT267 | PASS | page | tell me about agents | ai-agents | 82 | yes | — |  |
| RT268 | PASS | page | ai security | ai-privacy-and-security | 64 | yes | — |  |
| RT269 | PASS | page | best way to use ai at work | ai-governance | 76 | yes | — |  |
| RT270 | PASS | page | vectors | vector-databases | 46 | yes | — |  |
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
| RT281 | PASS | page | what is hitl in ai workflows | agentic-workflows | 61 | yes | — |  |
| RT282 | PASS | page | what is bleu and rouge | evaluation-metrics-for-ai | 67 | yes | — |  |
| RT283 | PASS | page | asr vs tts | speech-ai | 59 | yes | — |  |
| RT284 | PASS | gap | spa vs ssr | (weak) nextjs | 4 | no | — | transparent non-answer |
| RT285 | PASS | page | crud api example | rest-apis | 52 | yes | — |  |
| RT286 | PASS | gap | sso with saml or oidc | openid-connect | 104 | yes | — | nearby page: openid-connect |
| RT287 | PASS | page | oss vs proprietary models | open-weights-models | 68 | yes | — |  |
| RT288 | PASS | page | dockr container networking | docker | 85 | yes | — |  |
| RT289 | PASS | page | postgress vs mysql | postgresql | 67 | yes | — |  |
| RT290 | FALSE POSITIVE | gap | kubenetes basics | kubernetes | 88 | yes | — | confident unrelated page: kubernetes |
| RT291 | PASS | page | langchian agents | langchain | 76 | yes | — |  |
| RT292 | PASS | page | hugging fase models | hugging-face | 100 | yes | — |  |
| RT293 | PASS | page | fine tunning vs prompting | fine-tuning | 76 | yes | — |  |
| RT294 | PASS | page | halucination in llms | ai-hallucinations | 34 | yes | — |  |
| RT295 | PASS | page | guardrials for llm apps | ai-guardrails | 71 | yes | — |  |
| RT296 | FALSE POSITIVE | gap | how do i run a kubernetes cluster | kubernetes | 95 | yes | — | confident unrelated page: kubernetes |
| RT297 | FALSE POSITIVE | gap | what is a helm chart | kubernetes | 76 | yes | — | confident unrelated page: kubernetes |
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
| RT311 | PASS | gap | data warehouse vs data lake | (weak) gdpr-and-ai | 29 | no | — | transparent non-answer |
| RT312 | PASS | gap | what is federated learning | (weak) deep-learning | 34 | no | — | transparent non-answer |
| RT313 | PASS | gap | differential privacy explained | (weak) ai-privacy-and-security | 15 | no | — | transparent non-answer |
| RT314 | PASS | gap | how does a recommender system work | (weak) system-prompts | 26 | no | — | transparent non-answer |
| RT315 | PASS | gap | time series forecasting with arima | (weak) test-time-compute | 26 | no | — | transparent non-answer |
| RT316 | PASS | gap | what is automl | (weak) none | 0 | no | — | transparent non-answer |
| RT317 | PASS | gap | how do i label training data | (weak) gdpr-and-ai | 42 | no | — | transparent non-answer |
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
| RT328 | PASS | gap | what is a sharepoint site collection | sharepoint | 99 | yes | — | nearby page: sharepoint |
| RT329 | PASS | neg | transformer toy | (weak) transformers | 50 | no | — | no confident answer |
| RT330 | PASS | neg | mamba snake | (weak) state-space-models | 31 | no | — | no confident answer |
| RT331 | PASS | neg | python pet | (weak) python | 46 | no | — | no confident answer |
| RT332 | PASS | neg | react to this message | (weak) react | 54 | no | — | no confident answer |
| RT333 | PASS | neg | docker clothing | (weak) docker | 75 | no | — | no confident answer |
| RT334 | PASS | neg | agent real estate | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| RT335 | PASS | neg | model train hobby | (weak) model-cards | 28 | no | — | no confident answer |
| RT336 | PASS | neg | java coffee beans | (weak) java | 46 | no | — | no confident answer |
| RT337 | PASS | neg | ruby gemstone ring price | (weak) none | 0 | no | — | no confident answer |
| RT338 | PASS | neg | swift taylor concert tickets | (weak) none | 0 | no | — | no confident answer |
| RT339 | PASS | neg | rust remover for bike chains | (weak) rust | 46 | no | — | no confident answer |
| RT340 | PASS | neg | go board game opening strategy | (weak) search-over-reasoning | 4 | no | — | no confident answer |
| RT341 | PASS | neg | kotlin island vacation | (weak) none | 0 | no | — | no confident answer |
| RT342 | PASS | neg | oracle of delphi history | (weak) git | 4 | no | — | no confident answer |
| RT343 | PASS | neg | spark plug gap size | (weak) sim-to-real-transfer | 7 | no | — | no confident answer |
| RT344 | PASS | neg | panda zoo opening hours | (weak) none | 0 | no | — | no confident answer |
| RT345 | PASS | neg | git gud meaning | (weak) git | 54 | no | — | no confident answer |
| RT346 | PASS | neg | node of ranvier function | (weak) nodejs | 27 | no | — | no confident answer |
| RT347 | PASS | neg | cloud seeding rain | (weak) gcp-fundamentals | 23 | no | — | no confident answer |
| RT348 | PASS | neg | azure blue paint colour | (weak) azure-fundamentals | 36 | no | — | no confident answer |
| RT349 | PASS | neg | bert and ernie sesame street | (weak) encoder-decoder-vs-decoder-only | 10 | no | — | no confident answer |
| RT350 | PASS | neg | llama farm wool prices | (weak) llama-cpp | 32 | no | — | no confident answer |
| RT351 | PASS | neg | claude monet water lilies | (weak) none | 0 | no | — | no confident answer |
| RT352 | PASS | neg | gemini star sign compatibility | (weak) openid-connect | 3 | no | — | no confident answer |
| RT353 | PASS | neg | rag doll sewing pattern | (weak) rag | 50 | no | — | no confident answer |
| RT354 | PASS | neg | vector graphics for a logo | (weak) choosing-a-vector-store | 28 | no | — | no confident answer |
| RT355 | PASS | neg | token of appreciation gift ideas | (weak) tokens | 41 | no | — | no confident answer |
| RT356 | PASS | neg | agent smith matrix quotes | (weak) ai-agent-vs-chatbot | 35 | no | — | no confident answer |
| RT357 | PASS | neg | popcorn kernel not popping | (weak) semantic-kernel | 36 | no | — | no confident answer |
| RT358 | PASS | neg | swarm of bees in my garden | (weak) multi-agent-systems | 2 | no | — | no confident answer |
| RT359 | PASS | neg | proxy voting at a shareholder meeting | (weak) self-consistency | 16 | no | — | no confident answer |
| RT360 | PASS | neg | bearer bonds explained | (weak) api-authentication | 6 | no | — | no confident answer |
| RT361 | PASS | neg | oil pipeline construction jobs | (weak) distributed-training | 8 | no | — | no confident answer |
| RT362 | PASS | neg | cookie recipe chocolate chip | (weak) none | 0 | no | — | no confident answer |
| RT363 | PASS | neg | diffusion of heat in metal | (weak) diffusion-models | 34 | no | — | no confident answer |
| RT364 | PASS | neg | attention deficit in adults | (weak) transformers | 34 | no | — | no confident answer |
| RT365 | PASS | neg | neural pathways in the brain after stroke | (weak) physics-informed-neural-networks | 26 | no | — | no confident answer |
| RT366 | PASS | neg | reinforcement learning in child psychology rewards | (weak) reinforcement-learning | 90 | no | — | no confident answer |
| RT367 | PASS | neg | unsupervised learning at home for kids | (weak) unsupervised-learning | 82 | no | — | no confident answer |
| RT368 | PASS | neg | embedding a youtube video in my wordpress site | (weak) embeddings | 44 | no | — | no confident answer |
| RT369 | PASS | neg | vector in physics velocity and force | (weak) choosing-a-vector-store | 28 | no | — | no confident answer |
| RT370 | PASS | neg | distillation of whisky at home | (weak) knowledge-distillation | 60 | no | — | no confident answer |
| RT371 | PASS | neg | dropout rate at university | (weak) overfitting-and-regularization | 55 | no | — | no confident answer |
| RT372 | PASS | neg | tensor in general relativity | (weak) distributed-training | 10 | no | — | no confident answer |
| RT373 | PASS | neg | clip art for presentations | (weak) contrastive-learning-clip | 33 | no | — | no confident answer |
| RT374 | PASS | neg | chain link fence installation | (weak) chain-of-thought | 24 | no | — | no confident answer |
| RT375 | PASS | neg | whisper in my ear lyrics | (weak) speech-ai | 55 | no | — | no confident answer |
| RT376 | PASS | neg | llama drama kids book | (weak) llama-cpp | 32 | no | — | no confident answer |
| RT377 | PASS | neg | mistral wind south of france | (weak) open-weights-models | 4 | no | — | no confident answer |
| RT378 | PASS | neg | falcon heavy launch schedule | (weak) none | 0 | no | — | no confident answer |
| RT379 | PASS | neg | bard of avon poetry | (weak) none | 0 | no | — | no confident answer |
| RT380 | PASS | neg | perplexity about my career choice | (weak) evaluation-metrics-for-ai | 64 | no | — | no confident answer |
| RT381 | PASS | neg | sam altman net worth | (weak) object-detection | 18 | no | — | no confident answer |
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
| RT399 | PASS | neg | summarise this article for me | (weak) gdpr-and-ai | 4 | no | — | no confident answer |
| RT400 | PASS | neg | is it going to rain tomorrow | (weak) transformers-vs-state-space-models | 2 | no | — | no confident answer |
| RT401 | PASS | neg | how do i fix a flat bicycle tyre | (weak) common-prompting-mistakes | 8 | no | — | no confident answer |
| RT402 | PASS | page | use a model to check my own answers before sending them to a user | llm-as-a-judge | 35 | yes | — |  |
| RT403 | PASS | page | how can i make my chatbot cite its sources | rag | 46 | yes | — |  |
| RT404 | PASS | page | why does my assistant lose context in long chats | context-windows | 76 | yes | — |  |
| RT405 | PASS | page | a model that sees my screen and clicks buttons | computer-use-agents | 54 | yes | — |  |
| RT406 | PASS | page | stop the model leaking my system prompt | system-prompts | 106 | yes | — |  |
| RT407 | PASS | page | compare gpt style and bert style models for classification | encoder-decoder-vs-decoder-only | 95 | yes | — |  |
| RT408 | PASS | page | trace every tool call my agent makes | agent-evaluation | 56 | yes | — |  |
| RT409 | PASS | page | keep an ai agent from deleting my files | integration-permissions | 58 | yes | — |  |
| RT410 | PASS | page | how do i give an llm access to my database safely | agent-tools | 41 | yes | — |  |
| RT411 | PASS | page | what is tool calling and how do i implement it | function-calling | 102 | yes | — |  |
| RT412 | PASS | page | how do i let users log in with microsoft to my ai app | microsoft-entra-id | 70 | yes | — |  |
| RT413 | PASS | page | difference between ai assistant copilot and agent | ai-agent-vs-chatbot | 145 | yes | — |  |
| RT414 | PASS | page | how do i chunk pdfs for retrieval | chunking | 100 | yes | — |  |
| RT415 | PASS | page | speed up llm responses without hurting quality | model-serving-and-inference | 48 | yes | — |  |
| RT416 | PASS | page | why does inference get slower with longer prompts | model-serving-and-inference | 61 | yes | — |  |
| RT417 | PASS | page | difference between an embedding model and a chat model | embeddings | 78 | yes | — |  |
| RT418 | PASS | page | what is a good chunk overlap | chunking | 93 | yes | — |  |
| RT419 | PASS | page | how do i evaluate whether retrieval found the right passage | rag-evaluation | 97 | yes | — |  |
| RT420 | PASS | page | safe way to let ai write sql | sql | 44 | yes | — |  |
| RT421 | PASS | page | can i run deepseek or llama privately | local-ai | 54 | yes | — |  |
| RT422 | PASS | page | how do i stop my agent from running up a huge bill | llm-cost-optimization | 46 | yes | — |  |
| RT423 | PASS | page | model says it cannot see my document but i pasted it | context-windows | 47 | yes | — |  |
| RT424 | PASS | page | ai to turn meeting recordings into notes | speech-ai | 58 | yes | — |  |
| RT425 | PASS | page | how do i know the model was not trained on my benchmark | benchmark-contamination | 74 | yes | — |  |
| RT426 | PASS | page | how to get consistent structured data out of messy emails | structured-outputs | 75 | yes | — |  |
