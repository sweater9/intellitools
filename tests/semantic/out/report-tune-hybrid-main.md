# Knowledge red-team report — tune-hybrid-main

Dataset: `tests/redteam/frozen-queries.json` sha256 `4982137be9b08e5b5635cf7da758e43f51f0580d5acdb740ad27513aaf026ec0`

Total 426 · PASS 416 · WEAK 0 · MISS 0 · FALSE POSITIVE 10
Pass rate 97.7% · False-positive rate 2.3%
With 13 documented coverage-gap amendments (queries whose topic now has a dedicated page): PASS 423 · WEAK 0 · MISS 0 · FALSE POSITIVE 3 · pass rate 99.3% · FP rate 0.7%
Retrieval on page-kind queries (304): top-1 98.4% · top-3 100.0% · top-5 100.0%
Multi-hop path completeness (answer + learn-more + top results contain every expected stepping-stone page): 2/4

| kind | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| gap | 43 | 36 | 0 | 0 | 7 | 83.7% |
| neg | 79 | 79 | 0 | 0 | 0 | 100.0% |
| page | 304 | 301 | 0 | 0 | 3 | 99.0% |

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
| integration | 5 | 4 | 0 | 0 | 1 | 80.0% |
| mixed-natural | 25 | 24 | 0 | 0 | 1 | 96.0% |
| security | 20 | 20 | 0 | 0 | 0 | 100.0% |
| tech-selection | 1 | 0 | 0 | 0 | 1 | 0.0% |
| troubleshooting | 14 | 14 | 0 | 0 | 0 | 100.0% |
| typo | 16 | 15 | 0 | 0 | 1 | 93.8% |
| vague | 14 | 14 | 0 | 0 | 0 | 100.0% |
| what-to-use | 24 | 24 | 0 | 0 | 0 | 100.0% |

| topic | n | PASS | WEAK | MISS | FP | pass rate |
| --- | --- | --- | --- | --- | --- | --- |
| a2a | 4 | 4 | 0 | 0 | 0 | 100.0% |
| agent | 18 | 17 | 0 | 0 | 1 | 94.4% |
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
| llm | 30 | 29 | 0 | 0 | 1 | 96.7% |
| local | 5 | 5 | 0 | 0 | 0 | 100.0% |
| mcp | 7 | 7 | 0 | 0 | 0 | 100.0% |
| mixed | 25 | 24 | 0 | 0 | 1 | 96.0% |
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
- RT045 [page/tech-selection] "when is a thinking model worth the extra cost" → thinking-budgets (score 79.2781583640519, solid yes) — expected reasoning-vs-standard-models|reasoning-models|llm-cost-optimization; confident wrong page: thinking-budgets
- RT069 [page/integration] "how do i connect an ai agent to slack and jira" → ai-agents (score 72.89840778240584, solid yes) — expected connecting-agents-to-apps|agent-tools|mcp; confident wrong page: ai-agents
- RT190 [gap/coverage-probe] "how does object detection like yolo work" → object-detection (score 178.92034534927245, solid yes) — expected convolutional-neural-networks|vision-transformers; confident unrelated page: object-detection
- RT191 [gap/coverage-probe] "opencv tutorial for face detection" → object-detection (score 123.9383335607765, solid yes) — expected convolutional-neural-networks; confident unrelated page: object-detection
- RT202 [gap/coverage-probe] "how do i program a robot with ros" → robot-operating-system (score 157.34670551681918, solid yes) — expected embodied-ai; confident unrelated page: robot-operating-system
- RT238 [gap/coverage-probe] "what is gdpr and does it cover ai training data" → gdpr-and-ai (score 165.1839571492219, solid yes) — expected ai-privacy-and-security|ai-governance; confident unrelated page: gdpr-and-ai
- RT290 [gap/typo] "kubenetes basics" → kubernetes (score 109.25339407067452, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT296 [gap/coverage-probe] "how do i run a kubernetes cluster" → kubernetes (score 118.66238340505659, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT297 [gap/coverage-probe] "what is a helm chart" → kubernetes (score 103.73237083907605, solid yes) — expected containers|docker; confident unrelated page: kubernetes
- RT409 [page/mixed-natural] "keep an ai agent from deleting my files" → ai-agent-vs-chatbot (score 58, solid yes) — expected integration-permissions|code-execution-sandboxing|agent-tools|ai-guardrails; confident wrong page: ai-agent-vs-chatbot

## MISS

## WEAK

## Path completeness failures
- RT067 "i want an ai agent that can read gmail" top gmail-for-ai-agents; learn agent-tools, oauth-for-ai-agents, connecting-agents-to-apps, ai-privacy-and-security, function-calling
- RT069 "how do i connect an ai agent to slack and jira" top ai-agents; learn ai-agent-vs-chatbot, agent-tools, function-calling, agent-memory, multi-agent-systems

## All results
| id | class | kind | query | top | score | solid | tool | notes |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| RT001 | PASS | page | ai vs machine learning whats the difference | what-is-ai | 109.40767675677458 | yes | — |  |
| RT002 | PASS | page | explain neural nets like im five | neural-networks | 81.22819791487794 | yes | — |  |
| RT003 | PASS | page | how does chatgpt actually work | large-language-models | 110.2584922346671 | yes | — |  |
| RT004 | PASS | page | why do language models make stuff up | ai-hallucinations | 62.66526754348422 | yes | — |  |
| RT005 | PASS | page | wats a token in ai | tokens | 114.24256172784744 | yes | — |  |
| RT006 | PASS | page | how much text can an llm remember in one go | context-windows | 49 | yes | — |  |
| RT007 | PASS | page | what makes a model generative | generative-ai | 78.34285413020332 | yes | — |  |
| RT008 | PASS | page | is deep learning the same as ml | deep-learning | 156.9521637185165 | yes | — |  |
| RT009 | PASS | page | labelled versus unlabelled data in machine learning | unsupervised-learning | 81 | yes | — |  |
| RT010 | PASS | page | how does a neural network adjust itself while training | neural-networks | 78.252099282056 | yes | — |  |
| RT011 | PASS | page | my classifier is 99 percent on training data and 70 percent on new data | overfitting-and-regularization | 67.39030178753458 | yes | — |  |
| RT012 | PASS | page | reuse imagenet weights for my own photos | transfer-learning | 48.02756552557368 | yes | — |  |
| RT013 | PASS | page | robot dog learning to walk by trial and error | reinforcement-learning | 81 | yes | — |  |
| RT014 | PASS | page | how do image classifiers detect edges and shapes | convolutional-neural-networks | 65.1672939841077 | yes | — |  |
| RT015 | PASS | page | why did transformers replace lstms | transformers | 62.57755032423479 | yes | — |  |
| RT016 | PASS | page | attention is all you need explained simply | transformers | 86 | yes | — |  |
| RT017 | PASS | page | what is a latent space | variational-autoencoders | 97.36002998641088 | yes | — |  |
| RT018 | PASS | page | how do generative models make pictures out of noise | diffusion-models | 75.4059812582792 | yes | — |  |
| RT019 | PASS | page | two networks competing to make fake images | generative-adversarial-networks | 57 | yes | — |  |
| RT020 | PASS | page | which neural network type handles molecules and social networks | graph-neural-networks | 96.26894564845084 | yes | — |  |
| RT021 | PASS | page | why does adam use decoupled weight decay | overfitting-and-regularization | 68.08920034578034 | yes | — |  |
| RT022 | PASS | page | how does ppo clip the policy update | proximal-policy-optimization | 119.85550907123437 | yes | — |  |
| RT023 | PASS | page | bellman optimality equation intuition | markov-decision-processes | 65.93158474841745 | yes | — |  |
| RT024 | PASS | page | why does dqn need a target network | deep-q-networks | 88.84407015573036 | yes | — |  |
| RT025 | PASS | page | hey can you tell me what unsupervised learning even is | unsupervised-learning | 82 | yes | — |  |
| RT026 | PASS | page | sgd vs adam which one | backpropagation-and-gradient-descent | 90.128501810522 | yes | — |  |
| RT027 | PASS | page | what is a vae used for | variational-autoencoders | 89.63174179553982 | yes | — |  |
| RT028 | PASS | page | gnn use cases | graph-neural-networks | 51 | yes | — |  |
| RT029 | PASS | page | cnn or vit for a small dataset | cnn-vs-vision-transformer | 95.56021714700852 | yes | — |  |
| RT030 | PASS | page | transfomer architecure basics | transformers | 92.89541903233328 | yes | — |  |
| RT031 | PASS | page | reinforcment learning explaned | reinforcement-learning | 95.9545540144912 | yes | — |  |
| RT032 | PASS | page | embedings vs tokens | embeddings | 59.34995250824776 | yes | — |  |
| RT033 | PASS | page | what is a prompt and why does wording matter | prompt-engineering | 78.34759771799675 | yes | — |  |
| RT034 | PASS | page | i need to write a good prompt for summarising legal contracts | prompt-engineering | 89.18896561457808 | yes | ai-prompt-builder |  |
| RT035 | PASS | page | what goes in a system prompt for a customer support bot | system-prompts | 114.07027884824802 | yes | — |  |
| RT036 | PASS | page | the model keeps ignoring my instructions | common-prompting-mistakes | 65.08745096541546 | yes | — |  |
| RT037 | PASS | page | compare my old system prompt with the new one | system-prompts | 71 | yes | prompt-diff |  |
| RT038 | PASS | page | how do reasoning models spend extra tokens before answering | reasoning-models | 154.385418157226 | yes | — |  |
| RT039 | PASS | page | majority vote across sampled chains of thought | self-consistency | 59.64530602993381 | yes | — |  |
| RT040 | PASS | page | step level verifier for maths solutions | process-reward-model | 87.16285410731926 | yes | — |  |
| RT041 | PASS | page | reward models trained only on final answers | outcome-reward-model | 100.89467402936081 | yes | — |  |
| RT042 | PASS | page | rl with unit test rewards for coding models | reinforcement-learning-for-reasoning | 75.00009582150008 | yes | — |  |
| RT043 | PASS | page | can i read what the model was thinking before it answered | reasoning-transparency | 55.139277538477586 | yes | — |  |
| RT044 | PASS | page | my output is truncated when using a thinking model | reasoning-models | 73.68617466973363 | yes | — |  |
| RT045 | FALSE POSITIVE | page | when is a thinking model worth the extra cost | thinking-budgets | 79.2781583640519 | yes | — | confident wrong page: thinking-budgets |
| RT046 | PASS | page | make the model return json that always matches my schema | constrained-decoding | 71.63794688146822 | yes | — |  |
| RT047 | PASS | page | how do grammars restrict which tokens a model can sample | constrained-decoding | 61.07269323274334 | yes | — |  |
| RT048 | PASS | page | json mode or function calling for extraction | structured-output-methods-compared | 98.48716086257139 | yes | — |  |
| RT049 | PASS | page | what does temperature do | sampling-and-decoding | 41.12624086289013 | yes | — |  |
| RT050 | PASS | page | why is the same prompt giving different answers every time | sampling-and-decoding | 56 | yes | — |  |
| RT051 | PASS | page | what is rag in simple words | rag | 56.15451626142726 | yes | — |  |
| RT052 | PASS | page | design a pipeline that answers questions from our internal wiki | rag | 59.073001473343986 | yes | — |  |
| RT053 | PASS | page | how big should my chunks be | chunking | 74.58912131726757 | yes | — |  |
| RT054 | PASS | page | rag answers sound confident but cite the wrong document | rag | 55.345987196024645 | yes | — |  |
| RT055 | PASS | page | should i fine tune or use retrieval for company docs | rag-vs-fine-tuning | 124.8429405804954 | yes | — |  |
| RT056 | PASS | page | reranking with a cross encoder after bm25 | hybrid-search-and-reranking | 118.36229281260873 | yes | — |  |
| RT057 | PASS | page | multi hop questions over a knowledge graph | graph-rag | 122.26148023253603 | yes | — |  |
| RT058 | PASS | page | how do i measure how similar two documents are numerically | embeddings | 47 | yes | — |  |
| RT059 | PASS | page | how can a computer know two sentences mean the same thing | embeddings | 46 | yes | — |  |
| RT060 | PASS | page | store embeddings in postgres | pgvector | 104.5707032291382 | yes | — |  |
| RT061 | PASS | page | can plain postgres handle semantic search or must i add a vector store | vector-databases | 101.5035265258537 | yes | — |  |
| RT062 | PASS | page | which vector store should i pick for a prototype | choosing-a-vector-store | 127.78512714794208 | yes | — |  |
| RT063 | PASS | page | hnsw vs ivf index tradeoffs | vector-databases | 69.98654349034449 | yes | — |  |
| RT064 | PASS | page | vektor databse basics | vector-databases | 111.48491450356174 | yes | — |  |
| RT065 | PASS | page | what is an ai agent | ai-agents | 119.96307870383426 | yes | — |  |
| RT066 | PASS | page | is a bot that only answers questions already an agent | ai-agent-vs-chatbot | 88.56909623340779 | yes | — |  |
| RT067 | PASS | page | i want an ai agent that can read gmail | gmail-for-ai-agents | 124.41139825963945 | yes | — |  |
| RT068 | PASS | page | let my assistant send calendar invites on my behalf | connecting-agents-to-apps | 48 | yes | — |  |
| RT069 | FALSE POSITIVE | page | how do i connect an ai agent to slack and jira | ai-agents | 72.89840778240584 | yes | — | confident wrong page: ai-agents |
| RT070 | PASS | page | what permissions should an email reading agent have | integration-permissions | 72 | yes | — |  |
| RT071 | PASS | page | can a malicious email hijack my agent | prompt-injection | 54.30834505965257 | yes | — |  |
| RT072 | PASS | page | how do agents decide which tool to call | agent-tools | 81 | yes | — |  |
| RT073 | PASS | page | my agent gets stuck repeating the same step | react-agent-pattern | 56 | yes | — |  |
| RT074 | PASS | page | agent forgets what we decided yesterday | agent-memory | 95.9442376430355 | yes | — |  |
| RT075 | PASS | page | should i use several agents or one | multi-agent-systems | 83.4261871193817 | yes | — |  |
| RT076 | PASS | page | which framework for a production agent | agent-frameworks-compared | 114.069738871169 | yes | — |  |
| RT077 | PASS | page | langgraph versus crewai | crewai | 95.1895459441857 | yes | — |  |
| RT078 | PASS | page | do i even need langchain | langchain | 71 | yes | — |  |
| RT079 | PASS | page | retrieval where the model decides to search again if results look poor | agentic-rag | 102.47455347172804 | yes | — |  |
| RT080 | PASS | page | what is the react prompting pattern for agents | react-agent-pattern | 121.49961435170678 | yes | — |  |
| RT081 | PASS | page | i need a plan for who does what between agents handling support tickets | multi-agent-systems | 76.5509976747627 | yes | agentic-workflow-generator |  |
| RT082 | PASS | page | how do agent evaluation harnesses score tool trajectories | agent-evaluation | 107.77173196597185 | yes | — |  |
| RT083 | PASS | page | i keep hearing about mcp, what problem does it solve | mcp | 51 | yes | — |  |
| RT084 | PASS | page | why would i build an mcp server | mcp-servers-and-clients | 101.96372119620307 | yes | — |  |
| RT085 | PASS | page | why not just call the api directly instead of mcp | mcp-vs-api | 63.47834733205244 | yes | — |  |
| RT086 | PASS | page | mcp or plain function calling for my app | function-calling-vs-mcp | 96.21941698450581 | yes | — |  |
| RT087 | PASS | page | is it safe to install a random mcp server from github | mcp-security | 100.22481032115309 | yes | — |  |
| RT088 | PASS | page | tool poisoning in mcp | mcp-security | 122.5540280149848 | yes | — |  |
| RT089 | PASS | page | what is a2a | a2a-protocol | 104.37144215926338 | yes | — |  |
| RT090 | PASS | page | are a2a and mcp competitors | a2a-vs-mcp | 144.5030823202398 | yes | — |  |
| RT091 | PASS | page | how would agents from different vendors collaborate | a2a-protocol | 87.070453070053 | yes | — |  |
| RT092 | PASS | page | where is the agent card published | a2a-protocol | 76.96591038094554 | yes | — |  |
| RT093 | PASS | page | modle context protocal | mcp | 85.84755827184352 | yes | — |  |
| RT094 | PASS | page | how do i call an llm api from python | calling-ai-apis-with-python | 124.89697423982346 | yes | — |  |
| RT095 | PASS | page | build a small rag app in python | rag-with-python | 134.59148473432793 | yes | — |  |
| RT096 | PASS | page | read a csv and clean it before sending to a model | python-data-for-ai | 76.2331533012962 | yes | — |  |
| RT097 | PASS | page | which python libraries do i need for ai work | python-ai-libraries | 142.2761782810055 | yes | — |  |
| RT098 | PASS | page | pip install broke my environment | package-managers | 58.74892539309339 | yes | — |  |
| RT099 | PASS | page | python for machine learning where to begin | python-for-ai | 101.64054071646802 | yes | — |  |
| RT100 | PASS | page | call an ai api from javascript without exposing my key | calling-ai-apis-with-javascript | 109.18261905085195 | yes | — |  |
| RT101 | PASS | page | type the response from my ai endpoint | typescript-api-client-types | 55 | yes | — |  |
| RT102 | PASS | page | stream tokens to the browser as they arrive | streaming-ai-responses | 65.27589588874429 | yes | — |  |
| RT103 | PASS | page | manage chat message state in react | react-chatbot-state | 131.426278071531 | yes | — |  |
| RT104 | PASS | page | build a chat ui with react | react-ai-interfaces | 116.96942227016261 | yes | — |  |
| RT105 | PASS | page | what is react used for | react | 105.17920374875155 | yes | — |  |
| RT106 | PASS | page | should i use next.js for an ai chat app | nextjs | 83.81748682148412 | yes | — |  |
| RT107 | PASS | page | express server that proxies model requests | express | 79.67493521903761 | yes | — |  |
| RT108 | PASS | page | node js streming response | nodejs | 89.8690347002277 | yes | — |  |
| RT109 | PASS | page | why use typescript instead of javascript | typescript | 75.56865338193583 | yes | — |  |
| RT110 | PASS | page | typescript or javascript for a small tool | typescript | 71.41321109782085 | yes | — |  |
| RT111 | PASS | page | what is an api | what-is-an-api | 71.54323796091154 | yes | — |  |
| RT112 | PASS | page | rest vs graphql which one | rest-vs-graphql | 127.08519284866185 | yes | — |  |
| RT113 | PASS | page | what does restful mean | rest-apis | 46 | yes | — |  |
| RT114 | PASS | page | where should i keep my api keys | api-keys | 125.41059058751961 | yes | — |  |
| RT115 | PASS | page | api key versus oauth token | api-keys | 81.04159070983297 | yes | — |  |
| RT116 | PASS | page | what is json | what-is-json | 58.109786967999014 | yes | — |  |
| RT117 | PASS | page | unexpected token in json at position 0 | json-validation | 86.46881681072708 | yes | json-formatter |  |
| RT118 | PASS | page | validate an api payload against a schema | json-schema | 88.14802721149866 | yes | — |  |
| RT119 | PASS | page | pretty print and validate this json | json-validation | 102.61769124646759 | yes | json-formatter |  |
| RT120 | PASS | page | what is a webhook | webhooks | 70.1165152510536 | yes | — |  |
| RT121 | PASS | page | browser says blocked by cors policy | cors | 112.36963642765598 | yes | — |  |
| RT122 | PASS | page | what is inside a json web token | json-web-tokens | 77.00652434649479 | yes | — |  |
| RT123 | PASS | page | difference between authentication and authorization | authentication-vs-authorization | 147.85575933943088 | yes | — |  |
| RT124 | PASS | page | what is the oauth authorization code flow | oauth | 96.22791789820742 | yes | — |  |
| RT125 | PASS | page | openid connect vs oauth | openid-connect | 144.54789411175005 | yes | — |  |
| RT126 | PASS | page | when to use sql vs nosql | sql-vs-nosql | 108.12095059330218 | yes | — |  |
| RT127 | PASS | page | what is a relational database | sql | 61.38786966000228 | yes | — |  |
| RT128 | PASS | page | how do i join two tables | sql | 58.146228395992814 | yes | — |  |
| RT129 | PASS | page | postgres or mysql for a new project | postgresql | 74.6642373578754 | yes | — |  |
| RT130 | PASS | page | sqlite for a small app | sqlite | 59.57124110826434 | yes | — |  |
| RT131 | PASS | page | what is redis used for | redis | 64.8257832307539 | yes | — |  |
| RT132 | PASS | page | what is an orm | prisma-and-orms | 63.77110601867288 | yes | — |  |
| RT133 | PASS | page | which database should an ai app use | databases-for-ai-apps | 88.56611377442019 | yes | — |  |
| RT134 | PASS | page | store chat history for an assistant | databases-for-ai-apps | 48 | yes | — |  |
| RT135 | PASS | page | what is aws and what are its main services | aws-fundamentals | 59.47912443125284 | yes | — |  |
| RT136 | PASS | page | azure basics for developers | azure-fundamentals | 99.54939948397119 | yes | — |  |
| RT137 | PASS | page | what is gcp | gcp-fundamentals | 58.14416905490221 | yes | — |  |
| RT138 | PASS | page | aws vs azure vs gcp for hosting a model | aws-fundamentals | 50.891849911156164 | yes | — |  |
| RT139 | PASS | page | my s3 bucket is public by mistake | aws-fundamentals | 56 | yes | — |  |
| RT140 | PASS | page | what is docker | docker | 136.4221426847916 | yes | — |  |
| RT141 | PASS | page | container versus virtual machine | containers | 103.8268878739805 | yes | — |  |
| RT142 | PASS | page | what is ci cd | cicd | 82.76532951169274 | yes | — |  |
| RT143 | PASS | page | git basics for beginners | git | 82.17885301080065 | yes | — |  |
| RT144 | PASS | page | git says i have a merge conflict | git | 118.1090597619708 | yes | — |  |
| RT145 | PASS | page | what is github and how is it different from git | github | 106.85396704250795 | yes | — |  |
| RT146 | PASS | page | set up automatic tests on every pull request | cicd | 53.355676130745564 | yes | — |  |
| RT147 | PASS | page | what are environment variables for | environment-variables | 90.65938622560401 | yes | — |  |
| RT148 | PASS | page | package an app so it runs the same everywhere | docker | 50 | yes | — |  |
| RT149 | PASS | page | npm install fails with dependency errors | package-managers | 103.93707718380603 | yes | — |  |
| RT150 | PASS | page | what is sharepoint | sharepoint | 98.10949550067245 | yes | — |  |
| RT151 | PASS | page | what is spfx | sharepoint-framework | 138 | yes | — |  |
| RT152 | PASS | page | build my first spfx web part | build-spfx-web-part | 181.89110559649419 | yes | — |  |
| RT153 | PASS | page | sharepont framwork webpart | sharepoint-framework | 121.6481263254202 | yes | — |  |
| RT154 | PASS | page | what is microsoft graph | microsoft-graph | 113.66910395547714 | yes | — |  |
| RT155 | PASS | page | read a user's calendar through microsoft graph | microsoft-graph | 102.21321565441531 | yes | — |  |
| RT156 | PASS | page | what is entra id | microsoft-entra-id | 135.55216546787005 | yes | — |  |
| RT157 | PASS | page | what is power automate and power apps | power-platform | 126.30488322397633 | yes | — |  |
| RT158 | PASS | page | build a teams tab or bot | teams-development | 126.97888670039428 | yes | — |  |
| RT159 | PASS | page | what is microsoft 365 | microsoft-365 | 108.5312729161124 | yes | — |  |
| RT160 | PASS | page | let a daemon service call graph without a user | microsoft-graph | 100.60127421718376 | yes | — |  |
| RT161 | PASS | page | spfx or power apps for an intranet form | sharepoint-framework | 144.50513772182757 | yes | — |  |
| RT162 | PASS | page | what is an ai framework | what-is-an-ai-framework | 104.89124925178234 | yes | — |  |
| RT163 | PASS | page | what is hugging face | hugging-face | 118.38956567121686 | yes | — |  |
| RT164 | PASS | page | which sdk should i use to call different models | ai-sdks | 86.3327656634458 | yes | — |  |
| RT165 | PASS | page | what is llamaindex for | llamaindex | 71 | yes | — |  |
| RT166 | PASS | page | langchain or llamaindex for rag | llamaindex | 117.70866167862451 | yes | — |  |
| RT167 | PASS | page | framework where you declare modules and let an optimizer tune the prompts | dspy | 88.8201427300813 | yes | — |  |
| RT168 | PASS | page | microsoft sdk for plugging llms into dotnet apps | semantic-kernel | 58.725567382604105 | yes | — |  |
| RT169 | PASS | page | what is the openai agents sdk | openai-agents-sdk | 158.80425859341725 | yes | — |  |
| RT170 | PASS | page | what is autogen | autogen | 106.63524946936019 | yes | — |  |
| RT171 | PASS | page | easiest way to pull and chat with an open model on my own pc | local-ai | 54.28949853475584 | yes | — |  |
| RT172 | PASS | page | run an llm on my laptop without a gpu | local-ai | 72.17098463737099 | yes | — |  |
| RT173 | PASS | page | serve a model to hundreds of users | model-serving-and-inference | 66 | yes | — |  |
| RT174 | PASS | page | ollama versus vllm | ollama | 101.21877694422855 | yes | — |  |
| RT175 | PASS | page | what is gguf | llama-cpp | 78.85744869788809 | yes | — |  |
| RT176 | PASS | page | what is onnx | onnx-runtime | 74.8645425902801 | yes | — |  |
| RT177 | PASS | page | how do i run a model in the browser | onnx-runtime | 62.35689399296671 | yes | — |  |
| RT178 | PASS | page | why use pytorch | pytorch | 76 | yes | — |  |
| RT179 | PASS | page | cuda out of memory when loading a 13b model | gpus-and-ai-accelerators | 95.58346902727227 | yes | — |  |
| RT180 | PASS | page | can i run ai privately on my own machine | local-ai | 104.08528059034133 | yes | — |  |
| RT181 | PASS | page | local model or cloud api for sensitive documents | local-ai-vs-cloud-ai | 88 | yes | — |  |
| RT182 | PASS | page | are downloadable models the same as open source | open-weights-models | 154.01117100297117 | yes | — |  |
| RT183 | PASS | page | tiny llms that run on a phone | small-language-models | 52 | yes | — |  |
| RT184 | PASS | page | what does 4 bit quantization do | quantization | 104.60306757567693 | yes | — |  |
| RT185 | PASS | page | what is multimodal ai | multimodal-ai | 79.20260785008757 | yes | — |  |
| RT186 | PASS | page | how do models understand images and text together | vision-language-models | 92.0566343248182 | yes | — |  |
| RT187 | PASS | page | what is clip in computer vision | contrastive-learning-clip | 58.98341451351547 | yes | — |  |
| RT188 | PASS | page | extract text from scanned invoices | document-understanding-ai | 67.64666123304751 | yes | — |  |
| RT189 | PASS | page | vision transformer vs resnet | cnn-vs-vision-transformer | 123.92227760077618 | yes | — |  |
| RT190 | FALSE POSITIVE | gap | how does object detection like yolo work | object-detection | 178.92034534927245 | yes | — | confident unrelated page: object-detection |
| RT191 | FALSE POSITIVE | gap | opencv tutorial for face detection | object-detection | 123.9383335607765 | yes | — | confident unrelated page: object-detection |
| RT192 | PASS | page | how does speech to text work | speech-ai | 126.29747834129515 | yes | — |  |
| RT193 | PASS | page | build a voice assistant with an llm | speech-ai | 97.36535211899168 | yes | — |  |
| RT194 | PASS | page | can ai clone my voice | speech-ai | 76.58906422780568 | yes | — |  |
| RT195 | PASS | page | what is whisper | speech-ai | 69.02681246826988 | yes | — |  |
| RT196 | PASS | page | how do text to video models work | video-generation-models | 115.25515944310939 | yes | — |  |
| RT197 | PASS | page | how do robots learn from ai | embodied-ai | 106.13747872306637 | yes | — |  |
| RT198 | PASS | page | what is a vla model | vision-language-action-models | 87.71121139548578 | yes | — |  |
| RT199 | PASS | page | teaching a robot by demonstration | imitation-learning | 58.225514325564596 | yes | — |  |
| RT200 | PASS | page | my policy works in the simulator but not on hardware | sim-to-real-transfer | 67.38622231940016 | yes | — |  |
| RT201 | PASS | page | ai that imagines future states to plan actions | world-models | 53 | yes | — |  |
| RT202 | FALSE POSITIVE | gap | how do i program a robot with ros | robot-operating-system | 157.34670551681918 | yes | — | confident unrelated page: robot-operating-system |
| RT203 | PASS | gap | how do self driving cars work | (weak) self-consistency | 24 | no | — | transparent non-answer |
| RT204 | PASS | page | text hidden in a web page that tells my assistant to misbehave | prompt-injection | 57.31191615510966 | yes | — |  |
| RT205 | PASS | page | ignore previous instructions attack | prompt-injection | 90.95769771394936 | yes | — |  |
| RT206 | PASS | page | is it ok to paste customer data into chatgpt | ai-privacy-and-security | 93 | yes | — |  |
| RT207 | PASS | page | remove secrets from a log before sharing it with an ai | ai-privacy-and-security | 74 | yes | pii-secret-redactor |  |
| RT208 | PASS | page | standard checklist of security risks for generative ai apps | owasp-llm-top-10 | 93.4914715359068 | yes | — |  |
| RT209 | PASS | page | how do i red team my chatbot | red-teaming | 97.45980332962716 | yes | — |  |
| RT210 | PASS | page | how do guardrails stop harmful output | ai-guardrails | 116.71247560055708 | yes | — |  |
| RT211 | PASS | page | how do i sandbox code the model writes | code-execution-sandboxing | 110.54131851722153 | yes | — |  |
| RT212 | PASS | page | can i tell if an image was made by ai | c2pa-content-provenance | 64 | yes | — |  |
| RT213 | PASS | page | what is jailbreaking a model | prompt-injection | 53 | yes | — |  |
| RT214 | PASS | page | least privilege design for tool using agents | agent-tools | 79.23269445581806 | yes | — |  |
| RT215 | PASS | page | how do i know if my ai feature is any good | ai-evaluation | 69 | yes | — |  |
| RT216 | PASS | page | what does a high score on the 57 subject multiple choice benchmark tell me | mmlu | 93.60291666588208 | yes | — |  |
| RT217 | PASS | page | why are leaderboard rankings misleading | benchmarks-and-leaderboards | 91.61860846903649 | yes | — |  |
| RT218 | PASS | page | using one model to grade another | llm-as-a-judge | 54 | yes | — |  |
| RT219 | PASS | page | build a test set for my rag bot | rag-evaluation | 86 | yes | — |  |
| RT220 | PASS | page | which metrics for a classifier with rare positives | evaluation-metrics-for-ai | 73.75990895490865 | yes | — |  |
| RT221 | PASS | page | benchmark where models fix real github issues | swe-bench | 88.36477080184156 | yes | — |  |
| RT222 | PASS | page | check whether each claim is backed by the source text | how-to-reduce-hallucinations | 42.1307000260301 | yes | fact-anchor-checker |  |
| RT223 | PASS | page | how are chatbot elo rankings made | human-preference-evaluation | 106.81289922607777 | yes | — |  |
| RT224 | PASS | page | how do teams keep ml models running reliably after launch | mlops | 57.45926272171314 | yes | — |  |
| RT225 | PASS | page | track experiments and register models | mlflow | 74.7858276336659 | yes | — |  |
| RT226 | PASS | page | my model got worse after three months in production | model-drift-and-monitoring | 95.4264269935454 | yes | — |  |
| RT227 | PASS | page | log prompts and tokens in production | llm-observability | 55 | yes | — |  |
| RT228 | PASS | page | how many gpus do i need to serve a 70b model | gpus-and-ai-accelerators | 91.7596308249392 | yes | — |  |
| RT229 | PASS | page | how to split training across several gpus | distributed-training | 72.13862231695592 | yes | — |  |
| RT230 | PASS | page | cut my llm bill | llm-cost-optimization | 82.24859620929445 | yes | — |  |
| RT231 | PASS | page | what is ray used for | ray | 81.07315917400389 | yes | — |  |
| RT232 | PASS | page | who signs off on ai use inside a company | ai-governance | 98 | yes | — |  |
| RT233 | PASS | page | does the eu ai act apply to my startup | eu-ai-act | 125.80467485368237 | yes | — |  |
| RT234 | PASS | page | what is the nist ai risk framework | nist-ai-rmf | 167.123387945479 | yes | — |  |
| RT235 | PASS | page | certifiable standard for managing ai in an organisation | iso-iec-42001 | 81.30140263390959 | yes | — |  |
| RT236 | PASS | page | documentation template for a released model | model-cards | 111.38099059885376 | yes | — |  |
| RT237 | PASS | page | are my model's error rates different across demographic groups | ai-bias-and-fairness | 54 | yes | — |  |
| RT238 | FALSE POSITIVE | gap | what is gdpr and does it cover ai training data | gdpr-and-ai | 165.1839571492219 | yes | — | confident unrelated page: gdpr-and-ai |
| RT239 | PASS | gap | ai regulation in the united states | (weak) eu-ai-act | 77.39235851170245 | no | — | transparent non-answer |
| RT240 | PASS | page | what is sycophancy | sycophancy | 97.25816916827861 | yes | — |  |
| RT241 | PASS | page | how is dpo different from rlhf | rlhf | 78.3539250503043 | yes | — |  |
| RT242 | PASS | page | why do chatbots flatter users | sycophancy | 72.30956005210845 | yes | — |  |
| RT243 | PASS | page | what does alignment mean for ai | ai-alignment | 73.35852096236624 | yes | — |  |
| RT244 | PASS | page | reward hacking examples | reward-hacking | 119.97116099238255 | yes | — |  |
| RT245 | PASS | page | ai critiques its own answers using written principles | constitutional-ai-and-rlaif | 102.91601404327301 | yes | — |  |
| RT246 | PASS | page | can we see inside a neural network | mechanistic-interpretability | 61.71798926017787 | yes | — |  |
| RT247 | PASS | page | predict 3d structure from an amino acid sequence | alphafold | 80.38540303395504 | yes | — |  |
| RT248 | PASS | page | neural networks that respect physics equations | physics-informed-neural-networks | 117.50711762267454 | yes | — |  |
| RT249 | PASS | page | can machine learning forecast weather | ai-weather-forecasting | 114.69095178452412 | yes | — |  |
| RT250 | PASS | page | ai for finding new battery materials | ai-materials-discovery | 125.71762377937144 | yes | — |  |
| RT251 | PASS | page | ai in drug discovery | ai-drug-discovery | 134.2170088511213 | yes | — |  |
| RT252 | PASS | page | model with many experts but only a few active per token | mixture-of-experts | 107.83365611766659 | yes | — |  |
| RT253 | PASS | page | what are state space models and mamba | state-space-models | 131.36174135705835 | yes | — |  |
| RT254 | PASS | page | how does a kv cache save compute | kv-cache | 103.45060399343315 | yes | — |  |
| RT255 | PASS | page | what is flash attention | flash-attention | 104.01678571442496 | yes | — |  |
| RT256 | PASS | page | how do transformers know word order | positional-encoding | 46 | yes | — |  |
| RT257 | PASS | page | bert versus gpt style models | encoder-decoder-vs-decoder-only | 109.33951847796145 | yes | — |  |
| RT258 | PASS | page | does making llms bigger improve them predictably | scaling-laws | 57.38151393896419 | yes | — |  |
| RT259 | PASS | page | how are base models turned into chat assistants | instruction-tuning | 71.69587038545023 | yes | — |  |
| RT260 | PASS | page | fine tune a 7b model on a single consumer gpu | lora-and-peft | 82.13422902306442 | yes | — |  |
| RT261 | PASS | page | distilling a big model into a small one | knowledge-distillation | 69.71994822556385 | yes | — |  |
| RT262 | PASS | page | small draft model proposes tokens a big model verifies | speculative-decoding | 102.78908107787052 | yes | — |  |
| RT263 | PASS | page | how does prompt caching reduce cost | prompt-caching | 137.70650999593016 | yes | — |  |
| RT264 | PASS | page | manage what goes into the context window for a long running agent | context-windows | 65.39953633886205 | yes | — |  |
| RT265 | PASS | page | what are open source models like llama | open-weights-models | 154.25837140192664 | yes | — |  |
| RT266 | PASS | page | how do i get started with ai | what-is-ai | 67.55780361680911 | yes | — |  |
| RT267 | PASS | page | tell me about agents | ai-agents | 85.13343099063934 | yes | — |  |
| RT268 | PASS | page | ai security | ai-privacy-and-security | 70.15732324249618 | yes | — |  |
| RT269 | PASS | page | best way to use ai at work | ai-governance | 80.66541160678585 | yes | — |  |
| RT270 | PASS | page | vectors | embeddings | 62.93762165978961 | yes | — |  |
| RT271 | PASS | page | rag vs | rag | 55.40580630170146 | yes | — |  |
| RT272 | PASS | neg | models | (weak) small-language-models | 46.95518581606146 | no | — | no confident answer |
| RT273 | PASS | neg | learning | (weak) deep-learning | 39.63790249379591 | no | — | no confident answer |
| RT274 | PASS | neg | explain it simply please | (weak) ai-evaluation | 8.842668915101527 | no | — | no confident answer |
| RT275 | PASS | neg | best one | (weak) best-of-n-sampling | 44.65837084874482 | no | — | no confident answer |
| RT276 | PASS | neg | help with my code | (weak) code-execution-sandboxing | 34 | no | — | no confident answer |
| RT277 | PASS | neg | it does not work | (weak) ai-agents | 11.140245403753214 | no | — | no confident answer |
| RT278 | PASS | page | llm rag mcp relationship | mcp | 66.63269725117036 | yes | — |  |
| RT279 | PASS | gap | what do nlp and nlu mean | (weak) alphafold | 10.942280792392467 | no | — | transparent non-answer |
| RT280 | PASS | page | gpu vs tpu | gpus-and-ai-accelerators | 73.8872366966079 | yes | — |  |
| RT281 | PASS | page | what is hitl in ai workflows | agentic-workflows | 61 | yes | — |  |
| RT282 | PASS | page | what is bleu and rouge | evaluation-metrics-for-ai | 84.97592372626106 | yes | — |  |
| RT283 | PASS | page | asr vs tts | speech-ai | 59 | yes | — |  |
| RT284 | PASS | gap | spa vs ssr | (weak) nextjs | 19.867782469622334 | no | — | transparent non-answer |
| RT285 | PASS | page | crud api example | rest-apis | 52 | yes | — |  |
| RT286 | PASS | gap | sso with saml or oidc | openid-connect | 108.62521332238077 | yes | — | nearby page: openid-connect |
| RT287 | PASS | page | oss vs proprietary models | open-weights-models | 68 | yes | — |  |
| RT288 | PASS | page | dockr container networking | docker | 94.74275506736195 | yes | — |  |
| RT289 | PASS | page | postgress vs mysql | postgresql | 76.22139358206094 | yes | — |  |
| RT290 | FALSE POSITIVE | gap | kubenetes basics | kubernetes | 109.25339407067452 | yes | — | confident unrelated page: kubernetes |
| RT291 | PASS | page | langchian agents | langchain | 76 | yes | — |  |
| RT292 | PASS | page | hugging fase models | hugging-face | 125.58037629062083 | yes | — |  |
| RT293 | PASS | page | fine tunning vs prompting | rag-vs-fine-tuning | 88.13285514632075 | yes | — |  |
| RT294 | PASS | page | halucination in llms | ai-hallucinations | 37.658825637002806 | yes | — |  |
| RT295 | PASS | page | guardrials for llm apps | ai-guardrails | 86.68244521607036 | yes | — |  |
| RT296 | FALSE POSITIVE | gap | how do i run a kubernetes cluster | kubernetes | 118.66238340505659 | yes | — | confident unrelated page: kubernetes |
| RT297 | FALSE POSITIVE | gap | what is a helm chart | kubernetes | 103.73237083907605 | yes | — | confident unrelated page: kubernetes |
| RT298 | PASS | gap | terraform vs pulumi | (weak) framework-vs-direct-api | 13.604714085534084 | no | — | transparent non-answer |
| RT299 | PASS | gap | how do i configure nginx as a reverse proxy | (weak) streaming-ai-with-nodejs | 16.811066101310264 | no | — | transparent non-answer |
| RT300 | PASS | gap | linux command line cheat sheet | (weak) containers | 2 | no | — | transparent non-answer |
| RT301 | PASS | gap | what is a service mesh | (weak) azure-fundamentals | 11.134929906484937 | no | — | transparent non-answer |
| RT302 | PASS | gap | prometheus and grafana monitoring | (weak) model-drift-and-monitoring | 44.49825939200474 | no | — | transparent non-answer |
| RT303 | PASS | gap | vue vs angular | (weak) agent-protocol-landscape | 9.79680384169178 | no | — | transparent non-answer |
| RT304 | PASS | gap | how do i write unit tests with jest | (weak) humaneval | 15.672881748853177 | no | — | transparent non-answer |
| RT305 | PASS | gap | what is a monorepo | (weak) how-to-reduce-hallucinations | 4.787447708240671 | no | — | transparent non-answer |
| RT306 | PASS | gap | vs code extensions for python | python | 49.063716364961316 | yes | — | nearby page: python |
| RT307 | PASS | gap | what is graphql federation | graphql | 59 | yes | — | nearby page: graphql |
| RT308 | PASS | gap | grpc vs rest | (weak) rest-vs-graphql | 53.50042372309518 | no | — | transparent non-answer |
| RT309 | PASS | gap | how do i set up tls certificates | (weak) webhooks | 9.1825722713453 | no | — | transparent non-answer |
| RT310 | PASS | gap | what is apache kafka | (weak) java | 5.685573381816074 | no | — | transparent non-answer |
| RT311 | PASS | gap | data warehouse vs data lake | (weak) gdpr-and-ai | 29 | no | — | transparent non-answer |
| RT312 | PASS | gap | what is federated learning | (weak) deep-learning | 42.034048738097184 | no | — | transparent non-answer |
| RT313 | PASS | gap | differential privacy explained | (weak) ai-privacy-and-security | 15 | no | — | transparent non-answer |
| RT314 | PASS | gap | how does a recommender system work | (weak) system-prompts | 26 | no | — | transparent non-answer |
| RT315 | PASS | gap | time series forecasting with arima | (weak) test-time-compute | 26 | no | — | transparent non-answer |
| RT316 | PASS | gap | what is automl | (weak) how-to-reduce-hallucinations | 4.787447708240671 | no | — | transparent non-answer |
| RT317 | PASS | gap | how do i label training data | (weak) gdpr-and-ai | 47.32798949391491 | no | — | transparent non-answer |
| RT318 | PASS | gap | what is causal inference | (weak) test-time-compute | 25.102951580674453 | no | — | transparent non-answer |
| RT319 | PASS | gap | classic keyword weighting before neural embeddings | embeddings | 57.1138292001011 | yes | — | nearby page: embeddings |
| RT320 | PASS | gap | what is the best ai coding assistant | (weak) ai-governance | 57.89310642080136 | no | — | transparent non-answer |
| RT321 | PASS | gap | cursor vs copilot | (weak) onnx-runtime | 6.163962955806981 | no | — | transparent non-answer |
| RT322 | PASS | gap | what is the current top model on the leaderboard | benchmarks-and-leaderboards | 73.91504598227962 | yes | — | nearby page: benchmarks-and-leaderboards |
| RT323 | PASS | gap | how many parameters does the newest model have | (weak) world-models | 37.164701523479835 | no | — | transparent non-answer |
| RT324 | PASS | gap | when does the next frontier model release | (weak) model-cards | 30.468579743891766 | no | — | transparent non-answer |
| RT325 | PASS | gap | how do i use azure devops pipelines | (weak) azure-fundamentals | 50.10081895829186 | no | — | transparent non-answer |
| RT326 | PASS | gap | power bi dashboards | power-platform | 68.43760367860303 | yes | — | nearby page: power-platform |
| RT327 | PASS | gap | how do i migrate sharepoint on premises to online | sharepoint | 77.33012772105126 | yes | — | nearby page: sharepoint |
| RT328 | PASS | gap | what is a sharepoint site collection | sharepoint | 119.81906431115885 | yes | — | nearby page: sharepoint |
| RT329 | PASS | neg | transformer toy | (weak) transformers | 63.36204008852026 | no | — | no confident answer |
| RT330 | PASS | neg | mamba snake | (weak) state-space-models | 57.46452290311885 | no | — | no confident answer |
| RT331 | PASS | neg | python pet | (weak) python | 67.39827720076707 | no | — | no confident answer |
| RT332 | PASS | neg | react to this message | (weak) react | 70.28778791862744 | no | — | no confident answer |
| RT333 | PASS | neg | docker clothing | (weak) docker | 111.97837468208809 | no | — | no confident answer |
| RT334 | PASS | neg | agent real estate | (weak) ai-agent-vs-chatbot | 39.031900846889194 | no | — | no confident answer |
| RT335 | PASS | neg | model train hobby | (weak) world-models | 29.370034892097244 | no | — | no confident answer |
| RT336 | PASS | neg | java coffee beans | (weak) java | 55.679430051372506 | no | — | no confident answer |
| RT337 | PASS | neg | ruby gemstone ring price | (weak) langgraph | 6.9549738938160255 | no | — | no confident answer |
| RT338 | PASS | neg | swift taylor concert tickets | (weak) autogen | 4.232031055699603 | no | — | no confident answer |
| RT339 | PASS | neg | rust remover for bike chains | (weak) rust | 69.35908856872184 | no | — | no confident answer |
| RT340 | PASS | neg | go board game opening strategy | (weak) ai-agents | 7.52768796891397 | no | — | no confident answer |
| RT341 | PASS | neg | kotlin island vacation | (weak) java | 14.839527386422748 | no | — | no confident answer |
| RT342 | PASS | neg | oracle of delphi history | (weak) microsoft-365 | 16.967688706189637 | no | — | no confident answer |
| RT343 | PASS | neg | spark plug gap size | (weak) vision-transformers | 13.587859403852072 | no | — | no confident answer |
| RT344 | PASS | neg | panda zoo opening hours | (weak) local-ai-vs-cloud-ai | 14.411371305572928 | no | — | no confident answer |
| RT345 | PASS | neg | git gud meaning | (weak) git | 81.69171934116373 | no | — | no confident answer |
| RT346 | PASS | neg | node of ranvier function | (weak) nodejs | 40.956478145389084 | no | — | no confident answer |
| RT347 | PASS | neg | cloud seeding rain | (weak) gcp-fundamentals | 45.16164559892239 | no | — | no confident answer |
| RT348 | PASS | neg | azure blue paint colour | (weak) azure-fundamentals | 39.00568709666356 | no | — | no confident answer |
| RT349 | PASS | neg | bert and ernie sesame street | (weak) encoder-decoder-vs-decoder-only | 20.94183213379067 | no | — | no confident answer |
| RT350 | PASS | neg | llama farm wool prices | (weak) llama-cpp | 49.20497324237483 | no | — | no confident answer |
| RT351 | PASS | neg | claude monet water lilies | (weak) transformers | 12.37418724945497 | no | — | no confident answer |
| RT352 | PASS | neg | gemini star sign compatibility | (weak) openid-connect | 7.704757887308344 | no | — | no confident answer |
| RT353 | PASS | neg | rag doll sewing pattern | (weak) rag | 64.99656871603705 | no | — | no confident answer |
| RT354 | PASS | neg | vector graphics for a logo | (weak) choosing-a-vector-store | 37.28494674128096 | no | — | no confident answer |
| RT355 | PASS | neg | token of appreciation gift ideas | (weak) tokens | 66.06316039617903 | no | — | no confident answer |
| RT356 | PASS | neg | agent smith matrix quotes | (weak) ai-agent-vs-chatbot | 55.247413954591956 | no | — | no confident answer |
| RT357 | PASS | neg | popcorn kernel not popping | (weak) semantic-kernel | 39.69738932926228 | no | — | no confident answer |
| RT358 | PASS | neg | swarm of bees in my garden | (weak) hugging-face | 6.04320333632935 | no | — | no confident answer |
| RT359 | PASS | neg | proxy voting at a shareholder meeting | (weak) autogen | 25.75289729856555 | no | — | no confident answer |
| RT360 | PASS | neg | bearer bonds explained | (weak) json-web-tokens | 17.85119539146882 | no | — | no confident answer |
| RT361 | PASS | neg | oil pipeline construction jobs | (weak) mlops | 12.271507898905398 | no | — | no confident answer |
| RT362 | PASS | neg | cookie recipe chocolate chip | (weak) choosing-a-vector-store | 7.567611514588535 | no | — | no confident answer |
| RT363 | PASS | neg | diffusion of heat in metal | (weak) diffusion-models | 46.03051168020136 | no | — | no confident answer |
| RT364 | PASS | neg | attention deficit in adults | (weak) transformers | 34 | no | — | no confident answer |
| RT365 | PASS | neg | neural pathways in the brain after stroke | (weak) physics-informed-neural-networks | 32.29089372539508 | no | — | no confident answer |
| RT366 | PASS | neg | reinforcement learning in child psychology rewards | (weak) reinforcement-learning | 97.15532685472341 | no | — | no confident answer |
| RT367 | PASS | neg | unsupervised learning at home for kids | (weak) unsupervised-learning | 93.90582667215743 | no | — | no confident answer |
| RT368 | PASS | neg | embedding a youtube video in my wordpress site | (weak) embeddings | 44 | no | — | no confident answer |
| RT369 | PASS | neg | vector in physics velocity and force | (weak) choosing-a-vector-store | 28 | no | — | no confident answer |
| RT370 | PASS | neg | distillation of whisky at home | (weak) knowledge-distillation | 81.82058075086783 | no | — | no confident answer |
| RT371 | PASS | neg | dropout rate at university | (weak) overfitting-and-regularization | 60.848030866792044 | no | — | no confident answer |
| RT372 | PASS | neg | tensor in general relativity | (weak) distributed-training | 16.526857648103185 | no | — | no confident answer |
| RT373 | PASS | neg | clip art for presentations | (weak) contrastive-learning-clip | 50.73377810429699 | no | — | no confident answer |
| RT374 | PASS | neg | chain link fence installation | (weak) chain-of-thought | 24 | no | — | no confident answer |
| RT375 | PASS | neg | whisper in my ear lyrics | (weak) speech-ai | 72.85585161417683 | no | — | no confident answer |
| RT376 | PASS | neg | llama drama kids book | (weak) llama-cpp | 32 | no | — | no confident answer |
| RT377 | PASS | neg | mistral wind south of france | (weak) open-weights-models | 9.590560033585286 | no | — | no confident answer |
| RT378 | PASS | neg | falcon heavy launch schedule | (weak) onnx-runtime | 14.872813090365229 | no | — | no confident answer |
| RT379 | PASS | neg | bard of avon poetry | (weak) multimodal-ai | 16.04647155314378 | no | — | no confident answer |
| RT380 | PASS | neg | perplexity about my career choice | (weak) evaluation-metrics-for-ai | 68.17147149126626 | no | — | no confident answer |
| RT381 | PASS | neg | sam altman net worth | (weak) object-detection | 18 | no | — | no confident answer |
| RT382 | PASS | neg | best hiking boots under 150 | (weak) best-of-n-sampling | 28 | no | — | no confident answer |
| RT383 | PASS | neg | how to file self assessment tax | (weak) self-consistency | 22 | no | — | no confident answer |
| RT384 | PASS | neg | recipe for lasagna | (weak) cnn-vs-vision-transformer | 18.192157040794747 | no | — | no confident answer |
| RT385 | PASS | neg | who invented the telephone | (weak) rag | 14.440531197418007 | no | — | no confident answer |
| RT386 | PASS | neg | translate good morning to french | (weak) rag-vs-fine-tuning | 8.235086982192792 | no | — | no confident answer |
| RT387 | PASS | neg | symptoms of the flu | (weak) how-to-reduce-hallucinations | 3.2877256935624066 | no | — | no confident answer |
| RT388 | PASS | neg | mortgage rates this week | (weak) prompt-caching | 11.831962378775724 | no | — | no confident answer |
| RT389 | PASS | neg | plan a 10k race pace strategy | (weak) agent-planning | 22.32099905534099 | no | — | no confident answer |
| RT390 | PASS | neg | football scores tonight | (weak) benchmarks-and-leaderboards | 16.198032207535384 | no | — | no confident answer |
| RT391 | PASS | neg | how to repot a succulent | (weak) ai-evaluation | 7.437956475540948 | no | — | no confident answer |
| RT392 | PASS | neg | nvidia stock forecast | (weak) ai-weather-forecasting | 16.436411219010722 | no | — | no confident answer |
| RT393 | PASS | neg | should i buy bitcoin | (weak) benchmark-contamination | 5.992791738091157 | no | — | no confident answer |
| RT394 | PASS | neg | best laptop for students | (weak) best-of-n-sampling | 32.72138090339642 | no | — | no confident answer |
| RT395 | PASS | neg | how to write a wedding speech | (weak) speech-ai | 30.04391985483417 | no | — | no confident answer |
| RT396 | PASS | neg | write me a poem about the sea | (weak) prompt-engineering | 14.416807236452035 | no | — | no confident answer |
| RT397 | PASS | neg | tell me a joke | (weak) sycophancy | 12.303820007387216 | no | — | no confident answer |
| RT398 | PASS | neg | what is the meaning of life | (weak) what-is-ai | 10.023182931673627 | no | — | no confident answer |
| RT399 | PASS | neg | summarise this article for me | (weak) prompt-engineering | 32.11120838704507 | no | — | no confident answer |
| RT400 | PASS | neg | is it going to rain tomorrow | (weak) java | 4.4390697046563865 | no | — | no confident answer |
| RT401 | PASS | neg | how do i fix a flat bicycle tyre | (weak) common-prompting-mistakes | 8 | no | — | no confident answer |
| RT402 | PASS | page | use a model to check my own answers before sending them to a user | llm-as-a-judge | 35 | yes | — |  |
| RT403 | PASS | page | how can i make my chatbot cite its sources | rag | 56.2815338145939 | yes | — |  |
| RT404 | PASS | page | why does my assistant lose context in long chats | context-windows | 76 | yes | — |  |
| RT405 | PASS | page | a model that sees my screen and clicks buttons | computer-use-agents | 54 | yes | — |  |
| RT406 | PASS | page | stop the model leaking my system prompt | system-prompts | 119.20702926568924 | yes | — |  |
| RT407 | PASS | page | compare gpt style and bert style models for classification | encoder-decoder-vs-decoder-only | 103.87674210087448 | yes | — |  |
| RT408 | PASS | page | trace every tool call my agent makes | agent-evaluation | 56 | yes | — |  |
| RT409 | FALSE POSITIVE | page | keep an ai agent from deleting my files | ai-agent-vs-chatbot | 58 | yes | — | confident wrong page: ai-agent-vs-chatbot |
| RT410 | PASS | page | how do i give an llm access to my database safely | agent-tools | 41 | yes | — |  |
| RT411 | PASS | page | what is tool calling and how do i implement it | function-calling | 102.88627128608785 | yes | — |  |
| RT412 | PASS | page | how do i let users log in with microsoft to my ai app | microsoft-entra-id | 70.31920803892399 | yes | — |  |
| RT413 | PASS | page | difference between ai assistant copilot and agent | ai-agent-vs-chatbot | 179.174321458286 | yes | — |  |
| RT414 | PASS | page | how do i chunk pdfs for retrieval | chunking | 115.41662157043886 | yes | — |  |
| RT415 | PASS | page | speed up llm responses without hurting quality | model-serving-and-inference | 50.850751223109164 | yes | — |  |
| RT416 | PASS | page | why does inference get slower with longer prompts | model-serving-and-inference | 61 | yes | — |  |
| RT417 | PASS | page | difference between an embedding model and a chat model | embeddings | 78.51112250842837 | yes | — |  |
| RT418 | PASS | page | what is a good chunk overlap | chunking | 108.55593437283778 | yes | — |  |
| RT419 | PASS | page | how do i evaluate whether retrieval found the right passage | rag-evaluation | 107.31607771560618 | yes | — |  |
| RT420 | PASS | page | safe way to let ai write sql | sql | 44 | yes | — |  |
| RT421 | PASS | page | can i run deepseek or llama privately | local-ai | 70.64684016037745 | yes | — |  |
| RT422 | PASS | page | how do i stop my agent from running up a huge bill | llm-cost-optimization | 46 | yes | — |  |
| RT423 | PASS | page | model says it cannot see my document but i pasted it | context-windows | 48.07080485924425 | yes | — |  |
| RT424 | PASS | page | ai to turn meeting recordings into notes | speech-ai | 59.233761620261134 | yes | — |  |
| RT425 | PASS | page | how do i know the model was not trained on my benchmark | benchmark-contamination | 77.95474165269142 | yes | — |  |
| RT426 | PASS | page | how to get consistent structured data out of messy emails | structured-outputs | 75 | yes | — |  |
