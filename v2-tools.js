/* IntelliTools V2 workspaces — browser-first catalogue. */
const v2Tools=[
  ["ai-prompt-builder","Productivity","AI Prompt Builder","Turn a rough idea into a clear, structured AI prompt with guided CRISPE sections."],
  ["pii-secret-redactor","Privacy & Safety","PII & Secret Redactor","Detect and redact sensitive data from prompts, logs and text before you share it."],
  ["curl-code-sanitizer","Developer","cURL → Code & Token Stripper","Sanitize cURL requests, remove credentials and convert safe requests into common code formats."],
  ["fact-anchor-checker","Text","Fact Anchor Checker","Compare AI-generated claims with supplied evidence and flag what is supported, missing or contradicted."],
  ["invoice-studio","Business","Invoice & Receipt Studio","Create professional invoices or receipts with tax, logo, currency, live preview and export."],
  ["image-studio","Images & Design","Image Studio","Convert, resize and compress images or generate a complete favicon pack."],
  ["color-studio","Images & Design","Gradient & Color Studio","Build CSS gradients and generate accessible palettes from a color or image."],
  ["converter-studio","Money & Calculators","Everyday Converter","Convert units, cooking measures and currencies with a clearly dated offline rate snapshot."],
  ["habit-journal","Productivity","Habit & Journal","Track daily habits, streaks, mood and private notes stored only on this device."],
  ["focus-timer","Productivity","Focus Timer","Run custom Pomodoro sessions and review private daily and weekly focus stats."],
  ["writing-studio","Writing & Text","Markdown & Text Studio","Write and preview Markdown, clean text, change case, count words and compare drafts."],
  ["password-studio","Privacy & Safety","Password & Passphrase Studio","Generate customizable passwords or memorable passphrases and check strength locally."],
  ["pdf-studio","Files & PDF","Private PDF Tools","Merge, split, rotate or optimize PDFs without uploading sensitive documents."],
  ["signature-studio","Business","Email Signature Builder","Design a polished signature with live preview and copy production-ready HTML."],
  ["qr-studio","Links & Web","QR Studio","Generate QR codes for URLs, text, Wi-Fi and contacts, or read one from an image or camera."],
  ["budget-studio","Money & Calculators","Envelope Budget","Plan a zero-based monthly budget, monitor categories and export your data."]
];

/* New privacy/developer/grounding utilities are intentionally local-only. */
const v2NewToolIds=new Set(["pii-secret-redactor","curl-code-sanitizer","fact-anchor-checker"]);

function redactSensitiveText(text,mode="replace"){
  const patterns=[
    ["JWT",/\beyJ[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\.[A-Za-z0-9_-]{8,}\b/g],
    ["Bearer token",/\bBearer\s+[A-Za-z0-9._~+\/-]{12,}=*/gi],
    ["API key",/\b(?:sk|pk|api|key)[-_][A-Za-z0-9_-]{12,}\b/gi],
    ["Email",/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi],
    ["IPv4",/\b(?:\d{1,3}\.){3}\d{1,3}\b/g],
    ["Phone",/(?<!\w)(?:\+?\d[\d ()-]{7,}\d)(?!\w)/g],
    ["Connection string",/\b(?:postgres(?:ql)?|mysql|mongodb(?:\+srv)?):\/\/[^\s"']+/gi]
  ];
  const findings=[];
  let output=String(text||"");
  for(const [label,re] of patterns){
    output=output.replace(re,m=>{findings.push({type:label,value:m});if(mode==="remove")return "";if(mode==="mask")return "•".repeat(Math.min(Math.max(m.length,4),24));return `[REDACTED ${label.toUpperCase()}]`;});
  }
  return {output,findings};
}

function sanitizeCurlText(input){
  let safe=String(input||"");
  const removed=[];
  safe=safe.replace(/(-H|--header)\s+(["']?)(authorization|cookie|x-api-key|api-key)\s*:\s*([^"'\r\n]+)\2/gi,(m,flag,q,name)=>{removed.push(name);return `${flag} ${q}${name}: [REDACTED]${q}`;});
  safe=safe.replace(/([?&](?:api[_-]?key|access[_-]?token|token|key)=)[^&\s"']+/gi,(m,p)=>{removed.push("query token");return p+"[REDACTED]";});
  safe=safe.replace(/\bBearer\s+[A-Za-z0-9._~+\/-]{8,}=*/gi,()=>{removed.push("bearer token");return "Bearer [REDACTED]";});
  return {safe,removed:[...new Set(removed)]};
}

function curlToFetch(input){
  const {safe,removed}=sanitizeCurlText(input);
  const url=(safe.match(/https?:\/\/[^\s"']+/)||[])[0]||"https://example.com";
  const method=((safe.match(/(?:-X|--request)\s+([A-Z]+)/i)||[])[1]||"GET").toUpperCase();
  const headers={};
  for(const m of safe.matchAll(/(?:-H|--header)\s+["']?([^:"']+)\s*:\s*([^"'\r\n]+)["']?/gi))headers[m[1].trim()]=m[2].trim();
  const body=((safe.match(/(?:--data(?:-raw)?|-d)\s+(["'])([\s\S]*?)\1/i)||[])[2]||"");
  let code=`fetch(${JSON.stringify(url)}, {\n  method: ${JSON.stringify(method)}`;
  if(Object.keys(headers).length)code+=`,\n  headers: ${JSON.stringify(headers,null,2).replace(/\n/g,"\n  ")}`;
  if(body)code+=`,\n  body: ${JSON.stringify(body)}`;
  code+="\n});";
  return {safe,code,removed};
}

function normalizeAnchorText(s){return String(s||"").toLowerCase().replace(/[^a-z0-9%.$€£¥₹\s-]/g," ").replace(/\s+/g," ").trim()}
function factAnchorCheck(answer,evidence){
  const source=normalizeAnchorText(evidence),claims=String(answer||"").split(/(?<=[.!?])\s+|\n+/).map(s=>s.trim()).filter(s=>s.length>12);
  return claims.map(claim=>{
    const words=[...new Set(normalizeAnchorText(claim).split(" ").filter(w=>w.length>3))];
    const hits=words.filter(w=>source.includes(w)).length,ratio=words.length?hits/words.length:0;
    const nums=claim.match(/\b\d+(?:\.\d+)?%?\b/g)||[],numberMiss=nums.some(n=>!source.includes(n.toLowerCase()));
    const status=numberMiss?"Not found in supplied evidence":ratio>=0.72?"Supported":ratio>=0.42?"Partially supported":"Not found in supplied evidence";
    return {claim,status,overlap:Math.round(ratio*100)};
  });
}

/* Full validated V2 workspace implementation is transferred separately during release reconciliation. */
