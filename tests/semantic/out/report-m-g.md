# Knowledge red-team report — m-g

Dataset: `tests/redteam/frozen-queries.json` sha256 `4982137be9b08e5b5635cf7da758e43f51f0580d5acdb740ad27513aaf026ec0`

Total 426 · PASS 410 · WEAK 0 · MISS 0 · FALSE POSITIVE 16
Pass rate 96.2% · False-positive rate 3.8%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 417 · WEAK 0 · MISS 0 · FALSE POSITIVE 9 · pass rate 97.9% · FP rate 2.1%
Retrieval on page-kind queries (304): top-1 99.0% · top-3 100.0% · top-5 100.0%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 3/4

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 43 | 34 | 0 | 0 | 9 | 79.1% |
| neg | 79 | 75 | 0 | 0 | 4 | 94.9% |
| page | 304 | 301 | 0 | 0 | 3 | 99.0% |

| style | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| acronym | 14 | 14 | 0 | 0 | 0 | 100.0% |
| ambiguous-or-off-topic | 73 | 70 | 0 | 0 | 3 | 95.9% |
| architecture | 5 | 5 | 0 | 0 | 0 | 100.0% |
| beginner | 46 | 46 | 0 | 0 | 0 | 100.0% |
| comparison | 9 | 9 | 0 | 0 | 0 | 100.0% |
| concept | 74 | 74 | 0 | 0 | 0 | 100.0% |
| conversational | 3 | 3 | 0 | 0 | 0 | 100.0% |
| coverage-probe | 39 | 31 | 0 | 0 | 8 | 79.5% |
| expert | 16 | 16 | 0 | 0 | 0 | 100.0% |
| implementation | 28 | 28 | 0 | 0 | 0 | 100.0% |
| integration | 5 | 5 | 0 | 0 | 0 | 100.0% |
| mixed-natural | 25 | 23 | 0 | 0 | 2 | 92.0% |
| security | 20 | 20 | 0 | 0 | 0 | 100.0% |
| tech-selection | 1 | 0 | 0 | 0 | 1 | 0.0% |
| troubleshooting | 14 | 14 | 0 | 0 | 0 | 100.0% |
| typo | 16 | 15 | 0 | 0 | 1 | 93.8% |
| vague | 14 | 13 | 0 | 0 | 1 | 92.9% |
| what-to-use | 24 | 24 | 0 | 0 | 0 | 100.0% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 4 | 4 | 0 | 0 | 0 | 100.0% |
| agent | 18 | 18 | 0 | 0 | 0 | 100.0% |
| ai | 37 | 35 | 0 | 0 | 2 | 94.6% |
| amb | 53 | 52 | 0 | 0 | 1 | 98.1% |
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
| gov | 8 | 6 | 0 | 0 | 2 | 75.0% |
| js | 3 | 3 | 0 | 0 | 0 | 100.0% |
| json | 4 | 4 | 0 | 0 | 0 | 100.0% |
| llm | 30 | 29 | 0 | 0 | 1 | 96.7% |
| local | 5 | 5 | 0 | 0 | 0 | 100.0% |
| mcp | 7 | 7 | 0 | 0 | 0 | 100.0% |
| mixed | 25 | 23 | 0 | 0 | 2 | 92.0% |
| ml | 7 | 7 | 0 | 0 | 0 | 100.0% |
| mlops | 8 | 8 | 0 | 0 | 0 | 100.0% |
| mm | 2 | 2 | 0 | 0 | 0 | 100.0% |
| ms | 16 | 16 | 0 | 0 | 0 | 100.0% |
| nextjs | 1 | 1 | 0 | 0 | 0 | 100.0% |
| node | 2 | 2 | 0 | 0 | 0 | 100.0% |
| off | 20 | 18 | 0 | 0 | 2 | 90.0% |
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
- RT045 [page/tech-selection] "when is a thinking model worth the extra cost" → thinking-budgets (score 82.22096415356462, solid yes) — expected reasoning-vs-standard-models|reasoning-models|llm-cost-optimization; confident wrong page: thinking-budgets
- RT190 [gap/coverage-probe] "how does object detection like yolo work" → object-detection (score 168.76666742152247, solid yes) — expected convolutional-neural-networks|vision-transformers; confident unrelated page: object-detection
- RT191 [gap/coverage-probe] "opencv tutorial for face detection" → object-detection (score 121.97031847966439, solid yes) — expected convolutional-neural-networks; confident unrelated page: object-detection
- RT202 [gap/coverage-probe] "how do i program a robot with ros" → robot-operating-system (score 153.72403715492652, solid yes) — expected embodied-ai; confident unrelated page: robot-operating-system
- RT238 [gap/coverage-probe] "what is gdpr and does it cover ai training data" → gdpr-and-ai (score 160.09851807098738, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: gdpr-and-ai
- RT239 [gap/coverage-probe] "ai regulation in the united states" → eu-ai-act (score 140.48273137184827, solid yes) — expected ai-governance|nist-ai-rmf; confident unrelated page: eu-ai-act
- RT275 [neg/vague] "best one" → best-of-n-sampling (score 115.39898299959744, solid yes) — expected none; confident answer for out-of-scope query: best-of-n-sampling
- RT290 [gap/typo] "kubenetes basics" → kubernetes (score 113.11925276663, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT296 [gap/coverage-probe] "how do i run a kubernetes cluster" → kubernetes (score 119.55517296477026, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT297 [gap/coverage-probe] "what is a helm chart" → kubernetes (score 115.5081829078714, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT318 [gap/coverage-probe] "what is causal inference" → encoder-decoder-vs-decoder-only (score 74.32389947212685, solid yes) — expected supervised-learning; confident unrelated page: encoder-decoder-vs-decoder-only
- RT381 [neg/ambiguous-or-off-topic] "sam altman net worth" → object-detection (score 72.62854641621388, solid yes) — expected none; confident answer for out-of-scope query: object-detection
- RT382 [neg/ambiguous-or-off-topic] "best hiking boots under 150" → open-weights-models (score 94.03222955905375, solid yes) — expected none; confident answer for out-of-scope query: open-weights-models
- RT392 [neg/ambiguous-or-off-topic] "nvidia stock forecast" → ai-weather-forecasting (score 94.95167047734512, solid yes) — expected none; confident answer for out-of-scope query: ai-weather-forecasting
- RT421 [page/mixed-natural] "can i run deepseek or llama privately" → gbnf-grammars (score 34.94168715763619, solid yes) — expected local-ai|open-weights-models|ollama; confident wrong page: gbnf-grammars
- RT422 [page/mixed-natural] "how do i stop my agent from running up a huge bill" → integration-permissions (score 48.04540324735, solid yes) — expected llm-cost-optimization|react-agent-pattern|agentic-workflows; confident wrong page: integration-permissions

## MISS

## WEAK

## Path completeness failures
- RT067 "i want an ai agent that can read gmail" top gmail-for-ai-agents; learn agent-tools, oauth-for-ai-agents, connecting-agents-to-apps, ai-privacy-and-security, function-calling

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RT001 | PASS | page | ai vs machine learning whats the difference | what-is-ai | 105.61096911011899 | yes | — |  |
| RT002 | PASS | page | explain neural nets like im five | neural-networks | 82.45482159657118 | yes | — |  |
| RT003 | PASS | page | how does chatgpt actually work | large-language-models | 109.52540600846368 | yes | — |  |
| RT004 | PASS | page | why do language models make stuff up | ai-hallucinations | 73.64336314773384 | yes | — |  |
| RT005 | PASS | page | wats a token in ai | tokens | 103.13523400840911 | yes | — |  |
| RT006 | PASS | page | how much text can an llm remember in one go | context-windows | 54.02198446628175 | yes | — |  |
| RT007 | PASS | page | what makes a model generative | generative-ai | 77.84887531205291 | yes | — |  |
| RT008 | PASS | page | is deep learning the same as ml | deep-learning | 144.33852593684676 | yes | — |  |
| RT009 | PASS | page | labelled versus unlabelled data in machine learning | unsupervised-learning | 81.80083453245078 | yes | — |  |
| RT010 | PASS | page | how does a neural network adjust itself while training | neural-networks | 75.36864411145686 | yes | — |  |
| RT011 | PASS | page | my classifier is 99 percent on training data and 70 percent on new data | overfitting-and-regularization | 64.99247725538137 | yes | — |  |
| RT012 | PASS | page | reuse imagenet weights for my own photos | transfer-learning | 50.94543034576593 | yes | — |  |
| RT013 | PASS | page | robot dog learning to walk by trial and error | reinforcement-learning | 83.1785693264925 | yes | — |  |
| RT014 | PASS | page | how do image classifiers detect edges and shapes | convolutional-neural-networks | 63.8156460843164 | yes | — |  |
| RT015 | PASS | page | why did transformers replace lstms | transformers | 62.910713926148645 | yes | — |  |
| RT016 | PASS | page | attention is all you need explained simply | transformers | 91.88829296521908 | yes | — |  |
| RT017 | PASS | page | what is a latent space | variational-autoencoders | 92.80274026985015 | yes | — |  |
| RT018 | PASS | page | how do generative models make pictures out of noise | diffusion-models | 80.87795312281848 | yes | — |  |
| RT019 | PASS | page | two networks competing to make fake images | generative-adversarial-networks | 61.73092204061563 | yes | — |  |
| RT020 | PASS | page | which neural network type handles molecules and social networks | graph-neural-networks | 92.0930586855911 | yes | — |  |
| RT021 | PASS | page | why does adam use decoupled weight decay | overfitting-and-regularization | 69.24665281139589 | yes | — |  |
| RT022 | PASS | page | how does ppo clip the policy update | proximal-policy-optimization | 105.43320583413518 | yes | — |  |
| RT023 | PASS | page | bellman optimality equation intuition | markov-decision-processes | 70.72690218271893 | yes | — |  |
| RT024 | PASS | page | why does dqn need a target network | deep-q-networks | 97.36408761710892 | yes | — |  |
| RT025 | PASS | page | hey can you tell me what unsupervised learning even is | unsupervised-learning | 82 | yes | — |  |
| RT026 | PASS | page | sgd vs adam which one | backpropagation-and-gradient-descent | 98.38965603371052 | yes | — |  |
| RT027 | PASS | page | what is a vae used for | variational-autoencoders | 80.84943612266355 | yes | — |  |
| RT028 | PASS | page | gnn use cases | graph-neural-networks | 51 | yes | — |  |
| RT029 | PASS | page | cnn or vit for a small dataset | cnn-vs-vision-transformer | 87.32569075446253 | yes | — |  |
| RT030 | PASS | page | transfomer architecure basics | transformers | 100.44045843728586 | yes | — |  |
| RT031 | PASS | page | reinforcment learning explaned | reinforcement-learning | 95.46575053556366 | yes | — |  |
| RT032 | PASS | page | embedings vs tokens | embeddings | 56.03890095127236 | yes | — |  |
| RT033 | PASS | page | what is a prompt and why does wording matter | prompt-engineering | 83.46264404525871 | yes | — |  |
| RT034 | PASS | page | i need to write a good prompt for summarising legal contracts | prompt-engineering | 94.92886403297581 | yes | ai-prompt-builder |  |
| RT035 | PASS | page | what goes in a system prompt for a customer support bot | system-prompts | 109.88301037541463 | yes | — |  |
| RT036 | PASS | page | the model keeps ignoring my instructions | common-prompting-mistakes | 65.34148300534142 | yes | — |  |
| RT037 | PASS | page | compare my old system prompt with the new one | system-prompts | 78.15764406059414 | yes | prompt-diff |  |
| RT038 | PASS | page | how do reasoning models spend extra tokens before answering | reasoning-models | 157.8664765247133 | yes | — |  |
| RT039 | PASS | page | majority vote across sampled chains of thought | self-consistency | 52.70828518401055 | yes | — |  |
| RT040 | PASS | page | step level verifier for maths solutions | process-reward-model | 82.44496183709269 | yes | — |  |
| RT041 | PASS | page | reward models trained only on final answers | outcome-reward-model | 98.34183283009432 | yes | — |  |
| RT042 | PASS | page | rl with unit test rewards for coding models | reinforcement-learning-for-reasoning | 76.83170485767184 | yes | — |  |
| RT043 | PASS | page | can i read what the model was thinking before it answered | reasoning-transparency | 65.25623825170554 | yes | — |  |
| RT044 | PASS | page | my output is truncated when using a thinking model | reasoning-models | 77.68202158680717 | yes | — |  |
| RT045 | FALSE POSITIVE | page | when is a thinking model worth the extra cost | thinking-budgets | 82.22096415356462 | yes | — | confident wrong page: thinking-budgets |
| RT046 | PASS | page | make the model return json that always matches my schema | constrained-decoding | 71.15747953663018 | yes | — |  |
| RT047 | PASS | page | how do grammars restrict which tokens a model can sample | constrained-decoding | 61.817343285162636 | yes | — |  |
| RT048 | PASS | page | json mode or function calling for extraction | structured-output-methods-compared | 101.21429202823073 | yes | — |  |
| RT049 | PASS | page | what does temperature do | sampling-and-decoding | 114.77391283619424 | yes | — |  |
| RT050 | PASS | page | why is the same prompt giving different answers every time | sampling-and-decoding | 56 | yes | — |  |
| RT051 | PASS | page | what is rag in simple words | rag | 66.24928287797333 | yes | — |  |
| RT052 | PASS | page | design a pipeline that answers questions from our internal wiki | rag | 53.11244716167424 | yes | — |  |
| RT053 | PASS | page | how big should my chunks be | chunking | 76.5056218836895 | yes | — |  |
| RT054 | PASS | page | rag answers sound confident but cite the wrong document | rag | 58.88079029712521 | yes | — |  |
| RT055 | PASS | page | should i fine tune or use retrieval for company docs | rag-vs-fine-tuning | 123.31569099846656 | yes | — |  |
| RT056 | PASS | page | reranking with a cross encoder after bm25 | hybrid-search-and-reranking | 112.03342212856201 | yes | — |  |
| RT057 | PASS | page | multi hop questions over a knowledge graph | graph-rag | 125.74035392048646 | yes | — |  |
| RT058 | PASS | page | how do i measure how similar two documents are numerically | embeddings | 55.47065784357498 | yes | — |  |
| RT059 | PASS | page | how can a computer know two sentences mean the same thing | embeddings | 46.14857788893143 | yes | — |  |
| RT060 | PASS | page | store embeddings in postgres | pgvector | 102.74863447492932 | yes | — |  |
| RT061 | PASS | page | can plain postgres handle semantic search or must i add a vector store | vector-databases | 106.39423356750075 | yes | — |  |
| RT062 | PASS | page | which vector store should i pick for a prototype | choosing-a-vector-store | 126.55621018192534 | yes | — |  |
| RT063 | PASS | page | hnsw vs ivf index tradeoffs | vector-databases | 75.39992728403207 | yes | — |  |
| RT064 | PASS | page | vektor databse basics | vector-databases | 110.60243759582868 | yes | — |  |
| RT065 | PASS | page | what is an ai agent | ai-agents | 110.0069703090812 | yes | — |  |
| RT066 | PASS | page | is a bot that only answers questions already an agent | ai-agent-vs-chatbot | 88.06017305461218 | yes | — |  |
| RT067 | PASS | page | i want an ai agent that can read gmail | gmail-for-ai-agents | 126.70126633889545 | yes | — |  |
| RT068 | PASS | page | let my assistant send calendar invites on my behalf | connecting-agents-to-apps | 50.755925156251536 | yes | — |  |
| RT069 | PASS | page | how do i connect an ai agent to slack and jira | connecting-agents-to-apps | 78.26655562393331 | yes | — |  |
| RT070 | PASS | page | what permissions should an email reading agent have | integration-permissions | 76.28923708074541 | yes | — |  |
| RT071 | PASS | page | can a malicious email hijack my agent | prompt-injection | 59.570017466710254 | yes | — |  |
| RT072 | PASS | page | how do agents decide which tool to call | agent-tools | 88.31893652301487 | yes | — |  |
| RT073 | PASS | page | my agent gets stuck repeating the same step | react-agent-pattern | 60.04691117280294 | yes | — |  |
| RT074 | PASS | page | agent forgets what we decided yesterday | agent-memory | 100.4620812867913 | yes | — |  |
| RT075 | PASS | page | should i use several agents or one | multi-agent-systems | 82.04824887650257 | yes | — |  |
| RT076 | PASS | page | which framework for a production agent | agent-frameworks-compared | 105.6073695352051 | yes | — |  |
| RT077 | PASS | page | langgraph versus crewai | crewai | 102.34217982323314 | yes | — |  |
| RT078 | PASS | page | do i even need langchain | langchain | 74.20992325073286 | yes | — |  |
| RT079 | PASS | page | retrieval where the model decides to search again if results look poor | agentic-rag | 110.17781506362869 | yes | — |  |
| RT080 | PASS | page | what is the react prompting pattern for agents | react-agent-pattern | 120.70183377473035 | yes | — |  |
| RT081 | PASS | page | i need a plan for who does what between agents handling support tickets | multi-agent-systems | 76.06911806498357 | yes | agentic-workflow-generator |  |
| RT082 | PASS | page | how do agent evaluation harnesses score tool trajectories | agent-evaluation | 102.60916098739096 | yes | — |  |
| RT083 | PASS | page | i keep hearing about mcp, what problem does it solve | mcp | 51.057863505993936 | yes | — |  |
| RT084 | PASS | page | why would i build an mcp server | mcp-servers-and-clients | 102.41475026729775 | yes | — |  |
| RT085 | PASS | page | why not just call the api directly instead of mcp | mcp-vs-api | 65.62839124517217 | yes | — |  |
| RT086 | PASS | page | mcp or plain function calling for my app | function-calling-vs-mcp | 95.8840627857813 | yes | — |  |
| RT087 | PASS | page | is it safe to install a random mcp server from github | mcp-security | 103.47635543315445 | yes | — |  |
| RT088 | PASS | page | tool poisoning in mcp | mcp-security | 107.23072102901314 | yes | — |  |
| RT089 | PASS | page | what is a2a | a2a-protocol | 90.47774320106414 | yes | — |  |
| RT090 | PASS | page | are a2a and mcp competitors | a2a-vs-mcp | 136.64945034846954 | yes | — |  |
| RT091 | PASS | page | how would agents from different vendors collaborate | a2a-protocol | 84.71998965793694 | yes | — |  |
| RT092 | PASS | page | where is the agent card published | a2a-protocol | 78.38626028335759 | yes | — |  |
| RT093 | PASS | page | modle context protocal | mcp | 91.29227893658562 | yes | — |  |
| RT094 | PASS | page | how do i call an llm api from python | calling-ai-apis-with-python | 117.13191168583938 | yes | — |  |
| RT095 | PASS | page | build a small rag app in python | rag-with-python | 132.7546146129983 | yes | — |  |
| RT096 | PASS | page | read a csv and clean it before sending to a model | python-data-for-ai | 83.41780323547981 | yes | — |  |
| RT097 | PASS | page | which python libraries do i need for ai work | python-ai-libraries | 134.0477865877209 | yes | — |  |
| RT098 | PASS | page | pip install broke my environment | package-managers | 63.25780052115 | yes | — |  |
| RT099 | PASS | page | python for machine learning where to begin | python-for-ai | 102.7500010579615 | yes | — |  |
| RT100 | PASS | page | call an ai api from javascript without exposing my key | calling-ai-apis-with-javascript | 112.15847980107924 | yes | — |  |
| RT101 | PASS | page | type the response from my ai endpoint | typescript-api-client-types | 59.04434882105952 | yes | — |  |
| RT102 | PASS | page | stream tokens to the browser as they arrive | streaming-ai-responses | 67.16178350655144 | yes | — |  |
| RT103 | PASS | page | manage chat message state in react | react-chatbot-state | 123.46061712597017 | yes | — |  |
| RT104 | PASS | page | build a chat ui with react | react-ai-interfaces | 107.43207292072948 | yes | — |  |
| RT105 | PASS | page | what is react used for | react | 94.26422507967327 | yes | — |  |
| RT106 | PASS | page | should i use next.js for an ai chat app | nextjs | 81.95154833778088 | yes | — |  |
| RT107 | PASS | page | express server that proxies model requests | express | 84.42419333676395 | yes | — |  |
| RT108 | PASS | page | node js streming response | nodejs | 80.66640838129797 | yes | — |  |
| RT109 | PASS | page | why use typescript instead of javascript | typescript | 73.84570119345388 | yes | — |  |
| RT110 | PASS | page | typescript or javascript for a small tool | typescript | 73.09465887256303 | yes | — |  |
| RT111 | PASS | page | what is an api | what-is-an-api | 62.110757196460014 | yes | — |  |
| RT112 | PASS | page | rest vs graphql which one | rest-vs-graphql | 118.09353385198263 | yes | — |  |
| RT113 | PASS | page | what does restful mean | rest-apis | 46 | yes | — |  |
| RT114 | PASS | page | where should i keep my api keys | api-keys | 130.1570580840576 | yes | — |  |
| RT115 | PASS | page | api key versus oauth token | api-keys | 85.10213016549596 | yes | — |  |
| RT116 | PASS | page | what is json | what-is-json | 104.02388296767404 | yes | — |  |
| RT117 | PASS | page | unexpected token in json at position 0 | json-validation | 90.6406988450277 | yes | json-formatter |  |
| RT118 | PASS | page | validate an api payload against a schema | json-schema | 84.84460720421006 | yes | — |  |
| RT119 | PASS | page | pretty print and validate this json | json-validation | 96.70061823764301 | yes | json-formatter |  |
| RT120 | PASS | page | what is a webhook | webhooks | 76.5574088450527 | yes | — |  |
| RT121 | PASS | page | browser says blocked by cors policy | cors | 103.84768306985342 | yes | — |  |
| RT122 | PASS | page | what is inside a json web token | json-web-tokens | 80.4698888045742 | yes | — |  |
| RT123 | PASS | page | difference between authentication and authorization | authentication-vs-authorization | 132.93328329725387 | yes | — |  |
| RT124 | PASS | page | what is the oauth authorization code flow | oauth | 87.4712776641494 | yes | — |  |
| RT125 | PASS | page | openid connect vs oauth | openid-connect | 141.74330915120024 | yes | — |  |
| RT126 | PASS | page | when to use sql vs nosql | sql-vs-nosql | 106.65390067315673 | yes | — |  |
| RT127 | PASS | page | what is a relational database | sql | 60.902370857275756 | yes | — |  |
| RT128 | PASS | page | how do i join two tables | sql | 60.570500712637724 | yes | — |  |
| RT129 | PASS | page | postgres or mysql for a new project | postgresql | 76.96893557659848 | yes | — |  |
| RT130 | PASS | page | sqlite for a small app | sqlite | 60.67956163527771 | yes | — |  |
| RT131 | PASS | page | what is redis used for | redis | 82.7039069281735 | yes | — |  |
| RT132 | PASS | page | what is an orm | prisma-and-orms | 156.66682793075364 | yes | — |  |
| RT133 | PASS | page | which database should an ai app use | databases-for-ai-apps | 90.81524977164662 | yes | — |  |
| RT134 | PASS | page | store chat history for an assistant | databases-for-ai-apps | 51.13844819780254 | yes | — |  |
| RT135 | PASS | page | what is aws and what are its main services | aws-fundamentals | 54.85429827673692 | yes | — |  |
| RT136 | PASS | page | azure basics for developers | azure-fundamentals | 98.70452800095387 | yes | — |  |
| RT137 | PASS | page | what is gcp | gcp-fundamentals | 124.10841461009974 | yes | — |  |
| RT138 | PASS | page | aws vs azure vs gcp for hosting a model | aws-fundamentals | 53.53537738530248 | yes | — |  |
| RT139 | PASS | page | my s3 bucket is public by mistake | aws-fundamentals | 62.923318598964165 | yes | — |  |
| RT140 | PASS | page | what is docker | docker | 102.81746750991636 | yes | — |  |
| RT141 | PASS | page | container versus virtual machine | containers | 99.80629274401386 | yes | — |  |
| RT142 | PASS | page | what is ci cd | cicd | 76.79057014110103 | yes | — |  |
| RT143 | PASS | page | git basics for beginners | git | 75.6506834706667 | yes | — |  |
| RT144 | PASS | page | git says i have a merge conflict | git | 119.69800045774227 | yes | — |  |
| RT145 | PASS | page | what is github and how is it different from git | github | 98.36338685832172 | yes | — |  |
| RT146 | PASS | page | set up automatic tests on every pull request | github | 56.07505893858444 | yes | — |  |
| RT147 | PASS | page | what are environment variables for | environment-variables | 90.96528810201843 | yes | — |  |
| RT148 | PASS | page | package an app so it runs the same everywhere | docker | 52.721254440927304 | yes | — |  |
| RT149 | PASS | page | npm install fails with dependency errors | package-managers | 89.29174645540333 | yes | — |  |
| RT150 | PASS | page | what is sharepoint | sharepoint | 91.57480747820247 | yes | — |  |
| RT151 | PASS | page | what is spfx | sharepoint-framework | 146.3613153737243 | yes | — |  |
| RT152 | PASS | page | build my first spfx web part | build-spfx-web-part | 180.01777286280713 | yes | — |  |
| RT153 | PASS | page | sharepont framwork webpart | sharepoint-framework | 115.32531619298297 | yes | — |  |
| RT154 | PASS | page | what is microsoft graph | microsoft-graph | 104.00165040129804 | yes | — |  |
| RT155 | PASS | page | read a user's calendar through microsoft graph | microsoft-graph | 101.71104598754117 | yes | — |  |
| RT156 | PASS | page | what is entra id | microsoft-entra-id | 124.32023070321608 | yes | — |  |
| RT157 | PASS | page | what is power automate and power apps | power-platform | 121.34618800987474 | yes | — |  |
| RT158 | PASS | page | build a teams tab or bot | teams-development | 116.97240725139731 | yes | — |  |
| RT159 | PASS | page | what is microsoft 365 | microsoft-365 | 102.9682331446214 | yes | — |  |
| RT160 | PASS | page | let a daemon service call graph without a user | microsoft-graph | 103.09924650873782 | yes | — |  |
| RT161 | PASS | page | spfx or power apps for an intranet form | sharepoint-framework | 148.12126636829544 | yes | — |  |
| RT162 | PASS | page | what is an ai framework | what-is-an-ai-framework | 99.04086069459319 | yes | — |  |
| RT163 | PASS | page | what is hugging face | hugging-face | 114.95322500938498 | yes | — |  |
| RT164 | PASS | page | which sdk should i use to call different models | ai-sdks | 87.13147069923538 | yes | — |  |
| RT165 | PASS | page | what is llamaindex for | llamaindex | 87.89475715050574 | yes | — |  |
| RT166 | PASS | page | langchain or llamaindex for rag | llamaindex | 118.95241429673601 | yes | — |  |
| RT167 | PASS | page | framework where you declare modules and let an optimizer tune the prompts | dspy | 84.57617279801796 | yes | — |  |
| RT168 | PASS | page | microsoft sdk for plugging llms into dotnet apps | semantic-kernel | 61.75294563752409 | yes | — |  |
| RT169 | PASS | page | what is the openai agents sdk | openai-agents-sdk | 153.01027617829456 | yes | — |  |
| RT170 | PASS | page | what is autogen | autogen | 103.8612255630555 | yes | — |  |
| RT171 | PASS | page | easiest way to pull and chat with an open model on my own pc | local-ai | 57.84144621255318 | yes | — |  |
| RT172 | PASS | page | run an llm on my laptop without a gpu | local-ai | 75.32879234576498 | yes | — |  |
| RT173 | PASS | page | serve a model to hundreds of users | model-serving-and-inference | 68.96393389214555 | yes | — |  |
| RT174 | PASS | page | ollama versus vllm | ollama | 103.54706059012946 | yes | — |  |
| RT175 | PASS | page | what is gguf | llama-cpp | 84.4480417839734 | yes | — |  |
| RT176 | PASS | page | what is onnx | onnx-runtime | 88.42965877972449 | yes | — |  |
| RT177 | PASS | page | how do i run a model in the browser | onnx-runtime | 56.48678249876041 | yes | — |  |
| RT178 | PASS | page | why use pytorch | pytorch | 90.9382047970154 | yes | — |  |
| RT179 | PASS | page | cuda out of memory when loading a 13b model | gpus-and-ai-accelerators | 98.45529913091771 | yes | — |  |
| RT180 | PASS | page | can i run ai privately on my own machine | local-ai | 107.14724392398986 | yes | — |  |
| RT181 | PASS | page | local model or cloud api for sensitive documents | local-ai-vs-cloud-ai | 88 | yes | — |  |
| RT182 | PASS | page | are downloadable models the same as open source | open-weights-models | 140.77236563574877 | yes | — |  |
| RT183 | PASS | page | tiny llms that run on a phone | small-language-models | 65.20607509134723 | yes | — |  |
| RT184 | PASS | page | what does 4 bit quantization do | quantization | 103.19796636927273 | yes | — |  |
| RT185 | PASS | page | what is multimodal ai | multimodal-ai | 78.35613296948381 | yes | — |  |
| RT186 | PASS | page | how do models understand images and text together | vision-language-models | 84.10755855046777 | yes | — |  |
| RT187 | PASS | page | what is clip in computer vision | contrastive-learning-clip | 57.48831079652558 | yes | — |  |
| RT188 | PASS | page | extract text from scanned invoices | document-understanding-ai | 72.89025679369175 | yes | — |  |
| RT189 | PASS | page | vision transformer vs resnet | cnn-vs-vision-transformer | 115.57795729718757 | yes | — |  |
| RT190 | FALSE POSITIVE | gap | how does object detection like yolo work | object-detection | 168.76666742152247 | yes | — | confident unrelated page: object-detection |
| RT191 | FALSE POSITIVE | gap | opencv tutorial for face detection | object-detection | 121.97031847966439 | yes | — | confident unrelated page: object-detection |
| RT192 | PASS | page | how does speech to text work | speech-ai | 126.35560849415859 | yes | — |  |
| RT193 | PASS | page | build a voice assistant with an llm | speech-ai | 103.2920627826542 | yes | — |  |
| RT194 | PASS | page | can ai clone my voice | speech-ai | 91.20359284851799 | yes | — |  |
| RT195 | PASS | page | what is whisper | speech-ai | 80.40558182704852 | yes | — |  |
| RT196 | PASS | page | how do text to video models work | video-generation-models | 108.25469659910124 | yes | — |  |
| RT197 | PASS | page | how do robots learn from ai | embodied-ai | 102.10301781083226 | yes | — |  |
| RT198 | PASS | page | what is a vla model | vision-language-action-models | 77.43972240823297 | yes | — |  |
| RT199 | PASS | page | teaching a robot by demonstration | imitation-learning | 63.318728238530724 | yes | — |  |
| RT200 | PASS | page | my policy works in the simulator but not on hardware | sim-to-real-transfer | 70.88138033090378 | yes | — |  |
| RT201 | PASS | page | ai that imagines future states to plan actions | world-models | 60.50322262940783 | yes | — |  |
| RT202 | FALSE POSITIVE | gap | how do i program a robot with ros | robot-operating-system | 153.72403715492652 | yes | — | confident unrelated page: robot-operating-system |
| RT203 | PASS | gap | how do self driving cars work | (weak) open-weights-models | 32.02363930172986 | no | — | transparent non-answer |
| RT204 | PASS | page | text hidden in a web page that tells my assistant to misbehave | prompt-injection | 58.06690797232682 | yes | — |  |
| RT205 | PASS | page | ignore previous instructions attack | prompt-injection | 94.54909895616296 | yes | — |  |
| RT206 | PASS | page | is it ok to paste customer data into chatgpt | ai-privacy-and-security | 97.31024342447247 | yes | — |  |
| RT207 | PASS | page | remove secrets from a log before sharing it with an ai | ai-privacy-and-security | 77.06142152624933 | yes | pii-secret-redactor |  |
| RT208 | PASS | page | standard checklist of security risks for generative ai apps | owasp-llm-top-10 | 94.66269797219952 | yes | — |  |
| RT209 | PASS | page | how do i red team my chatbot | red-teaming | 107.58603863970876 | yes | — |  |
| RT210 | PASS | page | how do guardrails stop harmful output | ai-guardrails | 118.92508414544085 | yes | — |  |
| RT211 | PASS | page | how do i sandbox code the model writes | code-execution-sandboxing | 113.04775743937753 | yes | — |  |
| RT212 | PASS | page | can i tell if an image was made by ai | c2pa-content-provenance | 70.78640409022886 | yes | — |  |
| RT213 | PASS | page | what is jailbreaking a model | prompt-injection | 64.44302590489833 | yes | — |  |
| RT214 | PASS | page | least privilege design for tool using agents | agent-tools | 71.67108360066325 | yes | — |  |
| RT215 | PASS | page | how do i know if my ai feature is any good | ai-evaluation | 73.94978666983305 | yes | — |  |
| RT216 | PASS | page | what does a high score on the 57 subject multiple choice benchmark tell me | mmlu | 93.32936234505462 | yes | — |  |
| RT217 | PASS | page | why are leaderboard rankings misleading | benchmarks-and-leaderboards | 80.47250129501984 | yes | — |  |
| RT218 | PASS | page | using one model to grade another | llm-as-a-judge | 64.70081849389724 | yes | — |  |
| RT219 | PASS | page | build a test set for my rag bot | rag-evaluation | 91.53188488165496 | yes | — |  |
| RT220 | PASS | page | which metrics for a classifier with rare positives | evaluation-metrics-for-ai | 71.65878458939666 | yes | — |  |
| RT221 | PASS | page | benchmark where models fix real github issues | swe-bench | 103.82062020592345 | yes | — |  |
| RT222 | PASS | page | check whether each claim is backed by the source text | how-to-reduce-hallucinations | 67.10642384237713 | yes | fact-anchor-checker |  |
| RT223 | PASS | page | how are chatbot elo rankings made | human-preference-evaluation | 97.59385497054662 | yes | — |  |
| RT224 | PASS | page | how do teams keep ml models running reliably after launch | mlops | 62.37956516771831 | yes | — |  |
| RT225 | PASS | page | track experiments and register models | mlflow | 72.44637513756224 | yes | — |  |
| RT226 | PASS | page | my model got worse after three months in production | model-drift-and-monitoring | 98.71549606381474 | yes | — |  |
| RT227 | PASS | page | log prompts and tokens in production | llm-observability | 55.23134487482915 | yes | — |  |
| RT228 | PASS | page | how many gpus do i need to serve a 70b model | gpus-and-ai-accelerators | 96.94901530049155 | yes | — |  |
| RT229 | PASS | page | how to split training across several gpus | distributed-training | 73.9452445734323 | yes | — |  |
| RT230 | PASS | page | cut my llm bill | llm-cost-optimization | 85.2232218769734 | yes | — |  |
| RT231 | PASS | page | what is ray used for | ray | 194.67127787250888 | yes | — |  |
| RT232 | PASS | page | who signs off on ai use inside a company | ai-governance | 98 | yes | — |  |
| RT233 | PASS | page | does the eu ai act apply to my startup | eu-ai-act | 124.41553315742027 | yes | — |  |
| RT234 | PASS | page | what is the nist ai risk framework | nist-ai-rmf | 165.01729486052733 | yes | — |  |
| RT235 | PASS | page | certifiable standard for managing ai in an organisation | iso-iec-42001 | 78.95820855867791 | yes | — |  |
| RT236 | PASS | page | documentation template for a released model | model-cards | 95.18853293877615 | yes | — |  |
| RT237 | PASS | page | are my model's error rates different across demographic groups | ai-bias-and-fairness | 57.596160012354616 | yes | — |  |
| RT238 | FALSE POSITIVE | gap | what is gdpr and does it cover ai training data | gdpr-and-ai | 160.09851807098738 | yes | — | confident unrelated page: gdpr-and-ai |
| RT239 | FALSE POSITIVE | gap | ai regulation in the united states | eu-ai-act | 140.48273137184827 | yes | — | confident unrelated page: eu-ai-act |
| RT240 | PASS | page | what is sycophancy | sycophancy | 95.37014396074133 | yes | — |  |
| RT241 | PASS | page | how is dpo different from rlhf | rlhf | 79.6694102732413 | yes | — |  |
| RT242 | PASS | page | why do chatbots flatter users | sycophancy | 70.43096235948943 | yes | — |  |
| RT243 | PASS | page | what does alignment mean for ai | ai-alignment | 65.17130235652283 | yes | — |  |
| RT244 | PASS | page | reward hacking examples | reward-hacking | 105.30257722916703 | yes | — |  |
| RT245 | PASS | page | ai critiques its own answers using written principles | constitutional-ai-and-rlaif | 99.29965341429471 | yes | — |  |
| RT246 | PASS | page | can we see inside a neural network | mechanistic-interpretability | 59.23323484729454 | yes | — |  |
| RT247 | PASS | page | predict 3d structure from an amino acid sequence | alphafold | 77.77185939845324 | yes | — |  |
| RT248 | PASS | page | neural networks that respect physics equations | physics-informed-neural-networks | 118.87278371953613 | yes | — |  |
| RT249 | PASS | page | can machine learning forecast weather | ai-weather-forecasting | 101.4505182187507 | yes | — |  |
| RT250 | PASS | page | ai for finding new battery materials | ai-materials-discovery | 117.67099099821357 | yes | — |  |
| RT251 | PASS | page | ai in drug discovery | ai-drug-discovery | 126.1399402858254 | yes | — |  |
| RT252 | PASS | page | model with many experts but only a few active per token | mixture-of-experts | 114.80505010666414 | yes | — |  |
| RT253 | PASS | page | what are state space models and mamba | state-space-models | 120.93807501533055 | yes | — |  |
| RT254 | PASS | page | how does a kv cache save compute | kv-cache | 109.75721208020266 | yes | — |  |
| RT255 | PASS | page | what is flash attention | flash-attention | 94.26433350758549 | yes | — |  |
| RT256 | PASS | page | how do transformers know word order | positional-encoding | 53.79495495451652 | yes | — |  |
| RT257 | PASS | page | bert versus gpt style models | encoder-decoder-vs-decoder-only | 109.0245501324013 | yes | — |  |
| RT258 | PASS | page | does making llms bigger improve them predictably | scaling-laws | 58.85229145472215 | yes | — |  |
| RT259 | PASS | page | how are base models turned into chat assistants | instruction-tuning | 72.68736324841531 | yes | — |  |
| RT260 | PASS | page | fine tune a 7b model on a single consumer gpu | lora-and-peft | 83.33334284740684 | yes | — |  |
| RT261 | PASS | page | distilling a big model into a small one | knowledge-distillation | 76.61780072312003 | yes | — |  |
| RT262 | PASS | page | small draft model proposes tokens a big model verifies | speculative-decoding | 83.26208085651194 | yes | — |  |
| RT263 | PASS | page | how does prompt caching reduce cost | prompt-caching | 139.34390535167805 | yes | — |  |
| RT264 | PASS | page | manage what goes into the context window for a long running agent | context-windows | 76.53116149514265 | yes | — |  |
| RT265 | PASS | page | what are open source models like llama | open-weights-models | 147.3151663913871 | yes | — |  |
| RT266 | PASS | page | how do i get started with ai | what-is-ai | 63.08487876819961 | yes | — |  |
| RT267 | PASS | page | tell me about agents | ai-agents | 88.94052983548981 | yes | — |  |
| RT268 | PASS | page | ai security | ai-privacy-and-security | 73.84639056413906 | yes | — |  |
| RT269 | PASS | page | best way to use ai at work | ai-governance | 83.82049884577351 | yes | — |  |
| RT270 | PASS | page | vectors | vector-databases | 65.82037016422656 | yes | — |  |
| RT271 | PASS | page | rag vs | rag | 61.43100426398662 | yes | — |  |
| RT272 | PASS | neg | models | (weak) small-language-models | 64.3655831244534 | no | — | no confident answer |
| RT273 | PASS | neg | learning | (weak) deep-learning | 61.00499524560924 | no | — | no confident answer |
| RT274 | PASS | neg | explain it simply please | (weak) reasoning-transparency | 38.20443735757177 | no | — | no confident answer |
| RT275 | FALSE POSITIVE | neg | best one | best-of-n-sampling | 115.39898299959744 | yes | — | confident answer for out-of-scope query: best-of-n-sampling |
| RT276 | PASS | neg | help with my code | (weak) code-execution-sandboxing | 55.36967326767471 | no | — | no confident answer |
| RT277 | PASS | neg | it does not work | (weak) python-ai-libraries | 28.927527627029367 | no | — | no confident answer |
| RT278 | PASS | page | llm rag mcp relationship | mcp | 62.13484735067478 | yes | — |  |
| RT279 | PASS | gap | what do nlp and nlu mean | (weak) open-weights-models | 4 | no | — | transparent non-answer |
| RT280 | PASS | page | gpu vs tpu | gpus-and-ai-accelerators | 77.02159469906441 | yes | — |  |
| RT281 | PASS | page | what is hitl in ai workflows | agentic-workflows | 69.05241097487468 | yes | — |  |
| RT282 | PASS | page | what is bleu and rouge | evaluation-metrics-for-ai | 82.34811670265321 | yes | — |  |
| RT283 | PASS | page | asr vs tts | speech-ai | 65.6256899294615 | yes | — |  |
| RT284 | PASS | gap | spa vs ssr | (weak) nextjs | 61.09108381994371 | no | — | transparent non-answer |
| RT285 | PASS | page | crud api example | rest-apis | 55.92535236435725 | yes | — |  |
| RT286 | PASS | gap | sso with saml or oidc | openid-connect | 110.41077370437944 | yes | — | nearby page: openid-connect |
| RT287 | PASS | page | oss vs proprietary models | open-weights-models | 68 | yes | — |  |
| RT288 | PASS | page | dockr container networking | docker | 98.13737951005574 | yes | — |  |
| RT289 | PASS | page | postgress vs mysql | postgresql | 77.39624517814646 | yes | — |  |
| RT290 | FALSE POSITIVE | gap | kubenetes basics | kubernetes | 113.11925276663 | yes | — | confident unrelated page: kubernetes |
| RT291 | PASS | page | langchian agents | langchain | 82.03919993671494 | yes | — |  |
| RT292 | PASS | page | hugging fase models | hugging-face | 113.35664949956666 | yes | — |  |
| RT293 | PASS | page | fine tunning vs prompting | fine-tuning | 90.59726264306967 | yes | — |  |
| RT294 | PASS | page | halucination in llms | ai-hallucinations | 87.84796239042277 | yes | — |  |
| RT295 | PASS | page | guardrials for llm apps | ai-guardrails | 83.1598659882508 | yes | — |  |
| RT296 | FALSE POSITIVE | gap | how do i run a kubernetes cluster | kubernetes | 119.55517296477026 | yes | — | confident unrelated page: kubernetes |
| RT297 | FALSE POSITIVE | gap | what is a helm chart | kubernetes | 115.5081829078714 | yes | — | confident unrelated page: kubernetes |
| RT298 | PASS | gap | terraform vs pulumi | (weak) framework-vs-direct-api | 32.45731394909144 | no | — | transparent non-answer |
| RT299 | PASS | gap | how do i configure nginx as a reverse proxy | (weak) streaming-ai-with-nodejs | 41.00410266505092 | no | — | transparent non-answer |
| RT300 | PASS | gap | linux command line cheat sheet | (weak) containers | 29.487621588400994 | no | — | transparent non-answer |
| RT301 | PASS | gap | what is a service mesh | (weak) gcp-fundamentals | 66.34123721396304 | no | — | transparent non-answer |
| RT302 | PASS | gap | prometheus and grafana monitoring | model-drift-and-monitoring | 103.33517964521255 | yes | — | nearby page: model-drift-and-monitoring |
| RT303 | PASS | gap | vue vs angular | (weak) sampling-and-decoding | 33.064738618306954 | no | — | transparent non-answer |
| RT304 | PASS | gap | how do i write unit tests with jest | (weak) humaneval | 60.790263623568045 | no | — | transparent non-answer |
| RT305 | PASS | gap | what is a monorepo | (weak) generative-ai | 55.2594673283016 | no | — | transparent non-answer |
| RT306 | PASS | gap | vs code extensions for python | python | 50.86551833226974 | yes | — | nearby page: python |
| RT307 | PASS | gap | what is graphql federation | graphql | 67.55997084765389 | yes | — | nearby page: graphql |
| RT308 | PASS | gap | grpc vs rest | (weak) rest-vs-graphql | 77.42322644972381 | no | — | transparent non-answer |
| RT309 | PASS | gap | how do i set up tls certificates | (weak) authentication-vs-authorization | 44.67687779527719 | no | — | transparent non-answer |
| RT310 | PASS | gap | what is apache kafka | (weak) openai-agents-sdk | 41.15799471974547 | no | — | transparent non-answer |
| RT311 | PASS | gap | data warehouse vs data lake | (weak) gcp-fundamentals | 51.56528404032119 | no | — | transparent non-answer |
| RT312 | PASS | gap | what is federated learning | (weak) deep-learning | 56.43773852916556 | no | — | transparent non-answer |
| RT313 | PASS | gap | differential privacy explained | (weak) physics-informed-neural-networks | 25.186076972803267 | no | — | transparent non-answer |
| RT314 | PASS | gap | how does a recommender system work | (weak) structured-outputs | 49.99773956834645 | no | — | transparent non-answer |
| RT315 | PASS | gap | time series forecasting with arima | (weak) ai-weather-forecasting | 49.698102909380324 | no | — | transparent non-answer |
| RT316 | PASS | gap | what is automl | (weak) generative-ai | 55.2594673283016 | no | — | transparent non-answer |
| RT317 | PASS | gap | how do i label training data | (weak) gdpr-and-ai | 42.3504801597598 | no | — | transparent non-answer |
| RT318 | FALSE POSITIVE | gap | what is causal inference | encoder-decoder-vs-decoder-only | 74.32389947212685 | yes | — | confident unrelated page: encoder-decoder-vs-decoder-only |
| RT319 | PASS | gap | classic keyword weighting before neural embeddings | embeddings | 55.157603802279546 | yes | — | nearby page: embeddings |
| RT320 | PASS | gap | what is the best ai coding assistant | (weak) ai-agent-vs-chatbot | 127.57541395262467 | no | — | transparent non-answer |
| RT321 | PASS | gap | cursor vs copilot | (weak) html-and-css | 32.744820115656644 | no | — | transparent non-answer |
| RT322 | PASS | gap | what is the current top model on the leaderboard | benchmarks-and-leaderboards | 62.33874038843946 | yes | — | nearby page: benchmarks-and-leaderboards |
| RT323 | PASS | gap | how many parameters does the newest model have | (weak) world-models | 90.00135967241731 | no | — | transparent non-answer |
| RT324 | PASS | gap | when does the next frontier model release | (weak) model-cards | 60.760901415064446 | no | — | transparent non-answer |
| RT325 | PASS | gap | how do i use azure devops pipelines | (weak) azure-fundamentals | 73.22431398714659 | no | — | transparent non-answer |
| RT326 | PASS | gap | power bi dashboards | power-platform | 64.3556742288084 | yes | — | nearby page: power-platform |
| RT327 | PASS | gap | how do i migrate sharepoint on premises to online | sharepoint | 78.21296126216505 | yes | — | nearby page: sharepoint |
| RT328 | PASS | gap | what is a sharepoint site collection | sharepoint | 110.25472593714602 | yes | — | nearby page: sharepoint |
| RT329 | PASS | neg | transformer toy | (weak) transformers | 66.6915192813233 | no | — | no confident answer |
| RT330 | PASS | neg | mamba snake | (weak) state-space-models | 108.57039228076053 | no | — | no confident answer |
| RT331 | PASS | neg | python pet | (weak) python | 61.32130876721412 | no | — | no confident answer |
| RT332 | PASS | neg | react to this message | (weak) react | 63.66573077288575 | no | — | no confident answer |
| RT333 | PASS | neg | docker clothing | (weak) docker | 97.79059261826804 | no | — | no confident answer |
| RT334 | PASS | neg | agent real estate | (weak) agent-protocol-landscape | 56.664635660269 | no | — | no confident answer |
| RT335 | PASS | neg | model train hobby | (weak) world-models | 52.75581778701377 | no | — | no confident answer |
| RT336 | PASS | neg | java coffee beans | (weak) java | 55.45738039478688 | no | — | no confident answer |
| RT337 | PASS | neg | ruby gemstone ring price | (weak) ray | 41.38702989648135 | no | — | no confident answer |
| RT338 | PASS | neg | swift taylor concert tickets | (weak) ai-agents | 40.99929676332539 | no | — | no confident answer |
| RT339 | PASS | neg | rust remover for bike chains | (weak) rust | 68.03756505277298 | no | — | no confident answer |
| RT340 | PASS | neg | go board game opening strategy | (weak) ai-agents | 54.36295407743774 | no | — | no confident answer |
| RT341 | PASS | neg | kotlin island vacation | (weak) java | 71.83589389811497 | no | — | no confident answer |
| RT342 | PASS | neg | oracle of delphi history | (weak) microsoft-365 | 52.02594648002305 | no | — | no confident answer |
| RT343 | PASS | neg | spark plug gap size | (weak) vision-transformers | 49.53884372552046 | no | — | no confident answer |
| RT344 | PASS | neg | panda zoo opening hours | (weak) package-managers | 50.86440731163083 | no | — | no confident answer |
| RT345 | PASS | neg | git gud meaning | (weak) git | 73.8951116178431 | no | — | no confident answer |
| RT346 | PASS | neg | node of ranvier function | (weak) nodejs | 72.71211666737838 | no | — | no confident answer |
| RT347 | PASS | neg | cloud seeding rain | (weak) local-ai-vs-cloud-ai | 99.61829270257077 | no | — | no confident answer |
| RT348 | PASS | neg | azure blue paint colour | (weak) azure-fundamentals | 65.92297476217743 | no | — | no confident answer |
| RT349 | PASS | neg | bert and ernie sesame street | (weak) encoder-decoder-vs-decoder-only | 103.41665149949337 | no | — | no confident answer |
| RT350 | PASS | neg | llama farm wool prices | (weak) llama-cpp | 106.71336566876317 | no | — | no confident answer |
| RT351 | PASS | neg | claude monet water lilies | (weak) transformers | 100.85889059632865 | no | — | no confident answer |
| RT352 | PASS | neg | gemini star sign compatibility | (weak) openid-connect | 35.50981993028741 | no | — | no confident answer |
| RT353 | PASS | neg | rag doll sewing pattern | (weak) rag | 64.71516376199381 | no | — | no confident answer |
| RT354 | PASS | neg | vector graphics for a logo | (weak) choosing-a-vector-store | 74.10754497174231 | no | — | no confident answer |
| RT355 | PASS | neg | token of appreciation gift ideas | (weak) tokens | 59.252309539581574 | no | — | no confident answer |
| RT356 | PASS | neg | agent smith matrix quotes | (weak) ai-agent-vs-chatbot | 92.06285981074107 | no | — | no confident answer |
| RT357 | PASS | neg | popcorn kernel not popping | (weak) semantic-kernel | 74.15082804079827 | no | — | no confident answer |
| RT358 | PASS | neg | swarm of bees in my garden | (weak) openai-agents-sdk | 63.71705820380501 | no | — | no confident answer |
| RT359 | PASS | neg | proxy voting at a shareholder meeting | (weak) self-consistency | 59.709031888621254 | no | — | no confident answer |
| RT360 | PASS | neg | bearer bonds explained | (weak) api-authentication | 53.06816762689178 | no | — | no confident answer |
| RT361 | PASS | neg | oil pipeline construction jobs | (weak) distributed-training | 71.00239603384381 | no | — | no confident answer |
| RT362 | PASS | neg | cookie recipe chocolate chip | (weak) hugging-face | 30.81277411477254 | no | — | no confident answer |
| RT363 | PASS | neg | diffusion of heat in metal | (weak) diffusion-models | 85.27037834082617 | no | — | no confident answer |
| RT364 | PASS | neg | attention deficit in adults | (weak) transformers | 34 | no | — | no confident answer |
| RT365 | PASS | neg | neural pathways in the brain after stroke | (weak) neural-networks | 66.82189025823581 | no | — | no confident answer |
| RT366 | PASS | neg | reinforcement learning in child psychology rewards | (weak) reinforcement-learning | 95.84973114951259 | no | — | no confident answer |
| RT367 | PASS | neg | unsupervised learning at home for kids | (weak) unsupervised-learning | 91.98356221419755 | no | — | no confident answer |
| RT368 | PASS | neg | embedding a youtube video in my wordpress site | (weak) video-generation-models | 44.01207123258756 | no | — | no confident answer |
| RT369 | PASS | neg | vector in physics velocity and force | (weak) physics-informed-neural-networks | 60.61713899248149 | no | — | no confident answer |
| RT370 | PASS | neg | distillation of whisky at home | (weak) knowledge-distillation | 78.03451965617089 | no | — | no confident answer |
| RT371 | PASS | neg | dropout rate at university | (weak) overfitting-and-regularization | 63.36833937351665 | no | — | no confident answer |
| RT372 | PASS | neg | tensor in general relativity | (weak) distributed-training | 84.74991271850143 | no | — | no confident answer |
| RT373 | PASS | neg | clip art for presentations | (weak) contrastive-learning-clip | 91.43867276268226 | no | — | no confident answer |
| RT374 | PASS | neg | chain link fence installation | (weak) kubernetes | 65.89643699962096 | no | — | no confident answer |
| RT375 | PASS | neg | whisper in my ear lyrics | (weak) speech-ai | 77.59985935198571 | no | — | no confident answer |
| RT376 | PASS | neg | llama drama kids book | (weak) go-language | 43.28212751032544 | no | — | no confident answer |
| RT377 | PASS | neg | mistral wind south of france | (weak) open-weights-models | 47.055973034865424 | no | — | no confident answer |
| RT378 | PASS | neg | falcon heavy launch schedule | (weak) kubernetes | 58.75729352452463 | no | — | no confident answer |
| RT379 | PASS | neg | bard of avon poetry | (weak) package-managers | 52.94976146135265 | no | — | no confident answer |
| RT380 | PASS | neg | perplexity about my career choice | (weak) evaluation-metrics-for-ai | 73.9680022111649 | no | — | no confident answer |
| RT381 | FALSE POSITIVE | neg | sam altman net worth | object-detection | 72.62854641621388 | yes | — | confident answer for out-of-scope query: object-detection |
| RT382 | FALSE POSITIVE | neg | best hiking boots under 150 | open-weights-models | 94.03222955905375 | yes | — | confident answer for out-of-scope query: open-weights-models |
| RT383 | PASS | neg | how to file self assessment tax | (weak) eu-ai-act | 84.24820652623251 | no | — | no confident answer |
| RT384 | PASS | neg | recipe for lasagna | (weak) cnn-vs-vision-transformer | 105.94742810843167 | no | — | no confident answer |
| RT385 | PASS | neg | who invented the telephone | (weak) agent-memory | 46.462497646338655 | no | — | no confident answer |
| RT386 | PASS | neg | translate good morning to french | (weak) rag-vs-fine-tuning | 49.36170261641885 | no | — | no confident answer |
| RT387 | PASS | neg | symptoms of the flu | (weak) red-teaming | 26.995288912657557 | no | — | no confident answer |
| RT388 | PASS | neg | mortgage rates this week | (weak) redis | 52.53138403158606 | no | — | no confident answer |
| RT389 | PASS | neg | plan a 10k race pace strategy | (weak) agent-planning | 53.559582905446575 | no | — | no confident answer |
| RT390 | PASS | neg | football scores tonight | (weak) human-preference-evaluation | 60.38357512556118 | no | — | no confident answer |
| RT391 | PASS | neg | how to repot a succulent | (weak) sycophancy | 44.77359080745859 | no | — | no confident answer |
| RT392 | FALSE POSITIVE | neg | nvidia stock forecast | ai-weather-forecasting | 94.95167047734512 | yes | — | confident answer for out-of-scope query: ai-weather-forecasting |
| RT393 | PASS | neg | should i buy bitcoin | (weak) gpus-and-ai-accelerators | 49.53837471888072 | no | — | no confident answer |
| RT394 | PASS | neg | best laptop for students | (weak) best-of-n-sampling | 60.87134322023175 | no | — | no confident answer |
| RT395 | PASS | neg | how to write a wedding speech | (weak) speech-ai | 85.37476818929977 | no | — | no confident answer |
| RT396 | PASS | neg | write me a poem about the sea | (weak) tokens | 69.04286622581532 | no | — | no confident answer |
| RT397 | PASS | neg | tell me a joke | (weak) ai-hallucinations | 58.572350241454316 | no | — | no confident answer |
| RT398 | PASS | neg | what is the meaning of life | (weak) embeddings | 50.6491815438879 | no | — | no confident answer |
| RT399 | PASS | neg | summarise this article for me | (weak) prompt-engineering | 107.9743495360994 | no | — | no confident answer |
| RT400 | PASS | neg | is it going to rain tomorrow | (weak) java | 40.766304561442745 | no | — | no confident answer |
| RT401 | PASS | neg | how do i fix a flat bicycle tyre | (weak) local-ai | 52.23461541027482 | no | — | no confident answer |
| RT402 | PASS | page | use a model to check my own answers before sending them to a user | llm-as-a-judge | 35 | yes | — |  |
| RT403 | PASS | page | how can i make my chatbot cite its sources | rag | 48.31529155415072 | yes | — |  |
| RT404 | PASS | page | why does my assistant lose context in long chats | context-windows | 81.83647778707223 | yes | — |  |
| RT405 | PASS | page | a model that sees my screen and clicks buttons | computer-use-agents | 54 | yes | — |  |
| RT406 | PASS | page | stop the model leaking my system prompt | system-prompts | 122.49587274167946 | yes | — |  |
| RT407 | PASS | page | compare gpt style and bert style models for classification | encoder-decoder-vs-decoder-only | 105.19593459269267 | yes | — |  |
| RT408 | PASS | page | trace every tool call my agent makes | agent-evaluation | 57.38092654078191 | yes | — |  |
| RT409 | PASS | page | keep an ai agent from deleting my files | integration-permissions | 59.84964219540608 | yes | — |  |
| RT410 | PASS | page | how do i give an llm access to my database safely | agent-tools | 45.536122816652096 | yes | — |  |
| RT411 | PASS | page | what is tool calling and how do i implement it | function-calling | 109.50408126883067 | yes | — |  |
| RT412 | PASS | page | how do i let users log in with microsoft to my ai app | microsoft-entra-id | 73.39247500855897 | yes | — |  |
| RT413 | PASS | page | difference between ai assistant copilot and agent | ai-agent-vs-chatbot | 166.7062058473511 | yes | — |  |
| RT414 | PASS | page | how do i chunk pdfs for retrieval | chunking | 115.71776398102244 | yes | — |  |
| RT415 | PASS | page | speed up llm responses without hurting quality | model-serving-and-inference | 50.184822316056234 | yes | — |  |
| RT416 | PASS | page | why does inference get slower with longer prompts | model-serving-and-inference | 64.69320822153563 | yes | — |  |
| RT417 | PASS | page | difference between an embedding model and a chat model | embeddings | 81.75823865373313 | yes | — |  |
| RT418 | PASS | page | what is a good chunk overlap | chunking | 114.70851360150353 | yes | — |  |
| RT419 | PASS | page | how do i evaluate whether retrieval found the right passage | rag-evaluation | 111.53726546041258 | yes | — |  |
| RT420 | PASS | page | safe way to let ai write sql | sql | 69.66857000082724 | yes | — |  |
| RT421 | FALSE POSITIVE | page | can i run deepseek or llama privately | gbnf-grammars | 34.94168715763619 | yes | — | confident wrong page: gbnf-grammars |
| RT422 | FALSE POSITIVE | page | how do i stop my agent from running up a huge bill | integration-permissions | 48.04540324735 | yes | — | confident wrong page: integration-permissions |
| RT423 | PASS | page | model says it cannot see my document but i pasted it | context-windows | 47.55153730959604 | yes | — |  |
| RT424 | PASS | page | ai to turn meeting recordings into notes | speech-ai | 62.569786365013634 | yes | — |  |
| RT425 | PASS | page | how do i know the model was not trained on my benchmark | benchmark-contamination | 81.81705018132168 | yes | — |  |
| RT426 | PASS | page | how to get consistent structured data out of messy emails | structured-outputs | 75 | yes | — |  |
