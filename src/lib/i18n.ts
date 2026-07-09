import { Marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

export const LANG_KEY = "xrack-blog-lang";

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

const TR_MARKER = /\n<!--\s*tr\s*-->\s*\n/i;

export function renderBilingual(body: string): {
  enHtml: string;
  trHtml: string;
  bilingual: boolean;
} {
  const [en, ...rest] = body.split(TR_MARKER);
  const bilingual = rest.length > 0;
  const tr = bilingual ? rest.join("\n") : (en ?? "");
  return {
    enHtml: marked.parse(en ?? "", { async: false }),
    trHtml: marked.parse(tr, { async: false }),
    bilingual,
  };
}

export function enWordCount(body: string): number {
  const en = body.split(TR_MARKER)[0] ?? body;
  return en.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(body: string): number {
  return Math.max(1, Math.round(enWordCount(body) / 200));
}
