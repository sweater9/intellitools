// Browser wrapper. Loads the local index and lexicon, then renders searchKnowledge.
import { searchKnowledge } from "./search-core.mjs";

const form = document.querySelector("#kn-search-form");
const input = document.querySelector("#kn-q");
const status = document.querySelector("#kn-search-status");
const results = document.querySelector("#kn-search-results");
if (!form || !input || !results) throw new Error("Knowledge search markup missing");

let index = null;
let lexicon = null;
let timer = 0;

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function pageHref(page) {
  return page.id + ".html";
}

function toolHref(url) {
  if (!url) return "../index.html";
  if (/^(https?:|\/|\.\.)/.test(url)) return url;
  return "../" + url;
}

function section(kicker, title) {
  const block = el("section", "kn-result-block");
  block.append(el("p", "kn-kicker", kicker));
  if (title) block.append(el("h2", null, title));
  return block;
}

function render(query) {
  results.replaceChildren();
  if (!index || !lexicon) {
    status.textContent = "Search is still loading.";
    return;
  }
  const q = query.trim();
  if (!q) {
    status.textContent = "";
    return;
  }
  const found = searchKnowledge(index, lexicon, q);
  if (found.gap) {
    const note = el("p", "kn-gap");
    note.textContent = found.gap.message;
    results.append(note);
  }
  if (!found.solid) {
    const block = section("Answer / guide", "We don't have a solid guide for this yet.");
    const p = el("p");
    p.textContent = found.weak.length
      ? "The closest pages are listed separately. They are not a confident match, so they are not shown as the answer."
      : "Nothing in the Knowledge guides scored as a real match.";
    block.append(p);
    results.append(block);
    if (found.weak.length) {
      const weak = section("Closest pages", "Weak matches");
      const list = el("ul", "kn-linklist");
      for (const row of found.weak) {
        const li = el("li");
        const a = el("a");
        a.href = pageHref(row.page);
        a.textContent = row.page.title;
        li.append(a);
        list.append(li);
      }
      weak.append(list);
      results.append(weak);
    }
    status.textContent = "No solid guide for \u201c" + q + "\u201d.";
    return;
  }

  const page = found.answer.page;
  const answer = section("Answer / guide", page.title);
  const summary = el("p", "kn-answer");
  summary.textContent = page.summary;
  answer.append(summary);
  if (page.headings && page.headings.length) {
    const cover = el("p", "kn-cover");
    cover.textContent = "This guide covers: " + page.headings.join(", ") + ".";
    answer.append(cover);
  }
  const more = el("p");
  const link = el("a", "kn-read");
  link.href = pageHref(page);
  link.textContent = "Read the guide";
  more.append(link);
  answer.append(more);
  results.append(answer);

  if (found.need.length) {
    const need = section("What you'll need", null);
    const list = el("ul", "kn-need");
    for (const item of found.need) {
      const li = el("li");
      li.append(el("strong", null, item.name));
      li.append(document.createTextNode(" "));
      li.append(el("span", null, item.kind));
      list.append(li);
    }
    need.append(list);
    results.append(need);
  }

  if (found.learnMore.length) {
    const learn = section("Learn more", null);
    const list = el("ul", "kn-linklist");
    for (const row of found.learnMore) {
      const li = el("li");
      const a = el("a");
      a.href = pageHref(row.page);
      a.textContent = row.page.title;
      const small = el("small");
      small.textContent = row.page.question || "";
      li.append(a, small);
      list.append(li);
    }
    learn.append(list);
    results.append(learn);
  }

  if (found.tools.length) {
    const tools = section("Use IntelliTools", null);
    for (const tool of found.tools) {
      const card = el("div", "kn-toolpick");
      const a = el("a");
      a.href = toolHref(tool.url);
      a.textContent = tool.name;
      card.append(a);
      card.append(el("p", null, tool.reason));
      tools.append(card);
    }
    results.append(tools);
  }

  const extra = found.gap ? " Coverage note shown." : "";
  const toolNote = found.tools.length ? " Tool suggested: " + found.tools.map((t) => t.name).join(", ") + "." : "";
  status.textContent = "Guide: " + page.title + "." + toolNote + extra;
}

async function load() {
  const [indexRes, lexiconRes] = await Promise.all([
    fetch("search-index.json"),
    fetch("search-lexicon.json")
  ]);
  if (!indexRes.ok || !lexiconRes.ok) {
    status.textContent = "Search files could not be loaded.";
    return;
  }
  index = await indexRes.json();
  lexicon = await lexiconRes.json();
  const params = new URLSearchParams(location.search);
  const initial = params.get("q") || "";
  if (initial) {
    input.value = initial;
    render(initial);
  }
}

input.addEventListener("input", () => {
  window.clearTimeout(timer);
  timer = window.setTimeout(() => render(input.value), 200);
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
  window.clearTimeout(timer);
  const q = input.value.trim();
  const url = new URL(location.href);
  if (q) url.searchParams.set("q", q);
  else url.searchParams.delete("q");
  history.replaceState(null, "", url);
  render(q);
});

load();
