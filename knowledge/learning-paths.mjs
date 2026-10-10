// V4 learning-path recommendations. Local-only, deterministic and no account required.
export const LEVELS = ["beginner", "intermediate", "advanced"];
export const PATHS = {
  "AI fundamentals": {
    beginner: ["what-is-ai", "generative-ai", "large-language-models", "prompt-engineering"],
    intermediate: ["transformers", "tokens", "context-windows", "embeddings"],
    advanced: ["rag", "fine-tuning", "ai-evaluation", "how-to-reduce-hallucinations"]
  },
  "Build AI agents": {
    beginner: ["large-language-models", "prompt-engineering", "ai-agents", "agent-tools"],
    intermediate: ["function-calling", "mcp", "agent-memory", "agentic-workflows"],
    advanced: ["multi-agent-systems", "rag", "ai-evaluation", "agentic-workflows"]
  },
  "Learn programming": {
    beginner: ["python", "javascript", "git", "github"],
    intermediate: ["python-for-ai", "typescript", "nodejs", "react"],
    advanced: ["calling-ai-apis-with-python", "api-design", "docker", "cloud-computing"]
  }
};
export function recommendPath(topic, level, pages) {
  if (!Object.hasOwn(PATHS, topic) || !LEVELS.includes(level)) return [];
  const lookup = new Map(pages.map(p => [p.id, p]));
  return PATHS[topic][level].filter(id => lookup.has(id)).map(id => lookup.get(id));
}
