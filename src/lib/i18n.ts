import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

// localStorage key the browser uses to remember the last chosen language.
export const LANG_KEY = "xrack-blog-lang";

// Markdown engine with build-time syntax highlighting (output is static HTML +
// CSS classes; no highlighter ships to the browser).
const marked = new Marked(
  markedHighlight({
    emptyLangClass: "hljs",
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  }),
);
marked.setOptions({ gfm: true, breaks: false });

// A single post body holds both languages, split by an HTML comment marker:
//
//   English markdown...
//
//   <!-- tr -->
//
//   Türkçe markdown...
//
// If the marker is absent, the Turkish version falls back to the English one.
const TR_MARKER = /\n<!--\s*tr\s*-->\s*\n/i;

export function renderBilingual(body: string): { enHtml: string; trHtml: string } {
  const [en, ...rest] = body.split(TR_MARKER);
  const tr = rest.length ? rest.join("\n") : en;
  return {
    enHtml: marked.parse(en ?? "", { async: false }),
    trHtml: marked.parse(tr ?? "", { async: false }),
  };
}

/** Estimated reading time in minutes (based on the English body, ~200 wpm). */
export function readingMinutes(body: string): number {
  const en = body.split(TR_MARKER)[0] ?? body;
  const words = en.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
