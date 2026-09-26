import { readFileSync, existsSync } from "node:fs";

const html = readFileSync("index.html", "utf8");
const tools = readFileSync("tools.js", "utf8");
const v2 = readFileSync("v2-tools.js", "utf8");
const sw = readFileSync("sw.js", "utf8");
const expectedTools = [
  "ai-prompt-builder", "pii-secret-redactor", "curl-code-sanitizer", "fact-anchor-checker",
  "invoice-studio", "image-studio", "color-studio", "converter-studio",
  "habit-journal", "focus-timer", "writing-studio", "password-studio",
  "pdf-studio", "signature-studio", "qr-studio", "budget-studio"
];
const requiredFiles = [
  "index.html", "tools.js", "v2-tools.js", "v2.css", "manifest.webmanifest",
  "assets/icon.svg", "vendor/pdf-lib.min.js", "vendor/qrcode.min.js",
  "vendor/jsqr.min.js", "sw.js", "CNAME", "THIRD_PARTY_NOTICES.md"
];

const failures = [];
for (const file of requiredFiles) if (!existsSync(file)) failures.push(`Missing file: ${file}`);
for (const id of expectedTools) {
  const source = id === "ai-prompt-builder" ? tools : v2;
  if (!source.includes(`["${id}"`)) failures.push(`Missing tool: ${id}`);
}
for (const script of ["vendor/pdf-lib.min.js", "vendor/qrcode.min.js", "vendor/jsqr.min.js", "tools.js", "v2-tools.js"]) {
  if (!html.includes(`src="${script}"`)) failures.push(`index.html does not load ${script}`);
}
for (const asset of ["index.html", "v2.css", "tools.js", "v2-tools.js", "manifest.webmanifest"]) {
  if (!sw.includes(`./${asset}`)) failures.push(`Offline cache is missing ${asset}`);
}
if (!html.includes("IntelliTools") || html.includes("IntelliTools.online") || !html.includes("Less switching.") || !html.includes("Version 2.0")) failures.push("current IntelliTools product identity is missing or stale");
if (!html.includes("ca-pub-6129942955275199")) failures.push("AdSense publisher script is missing");
if (!html.includes("privacy.html") || !html.includes("terms.html") || !html.includes("contact.html")) failures.push("legal/footer links are missing");
if (!v2.includes("function redactSensitiveText") || !v2.includes("function sanitizeCurlText") || !v2.includes("function factAnchorCheck")) failures.push("new V2 safety/evidence logic is missing");
for (const marker of ["discoveryShelf","DISCOVERY_RECENT_KEY","DISCOVERY_FAV_KEY","function rememberTool","function toggleFavorite","e.metaKey||e.ctrlKey"]) {
  const source = marker === "discoveryShelf" ? html : v2;
  if (!source.includes(marker)) failures.push(`Discovery feature missing: ${marker}`);
}
if (readFileSync("CNAME", "utf8").trim() !== "intellitools.online") failures.push("CNAME does not match intellitools.online");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Smoke checks passed: ${expectedTools.length} v2 workspaces, ${requiredFiles.length} required files.`);
