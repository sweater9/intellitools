// Learning paths and the (small) set of existing IntelliTools tools that genuinely relate to Knowledge topics.
export const tools = {
  'ai-prompt-builder': { name: 'AI Prompt Builder', privacy: 'Runs in your browser; your draft is not sent to a server.' },
  'fact-anchor-checker': { name: 'Fact Anchor Checker', privacy: 'Runs in your browser; the text you paste is not sent to a server.' },
  'pii-secret-redactor': { name: 'PII & Secret Redactor', privacy: 'Runs in your browser; the text you paste is not sent to a server.' }
};
export const paths = [
  { title: 'From LLMs to AI agents', blurb: 'The full build-up: how language models work, how to steer them, how they use tools, and how agents are assembled.',
    steps: ['large-language-models', 'tokens', 'context-windows', 'prompt-engineering', 'agent-tools', 'function-calling', 'mcp', 'agent-memory', 'rag', 'ai-agents', 'multi-agent-systems', 'agentic-workflows'] },
  { title: 'Retrieval and grounding (RAG)', blurb: 'How to make a model answer from your own information, and how to tell whether it worked.',
    steps: ['rag', 'embeddings', 'vector-databases', 'chunking', 'context-windows', 'ai-hallucinations', 'ai-evaluation'] },
  { title: 'Using AI safely', blurb: 'Reliability, privacy and security for anyone putting AI into real work.',
    steps: ['ai-hallucinations', 'how-to-reduce-hallucinations', 'ai-privacy-and-security', 'prompt-injection', 'local-ai', 'ai-evaluation'] }
];
