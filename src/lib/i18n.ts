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

export interface TocItem {
  id: string;
  text: string;
  depth: number;
}

export function extractHeadings(
  html: string,
  idPrefix = "",
): { html: string; toc: TocItem[] } {
  const toc: TocItem[] = [];
  const seen = new Map<string, number>();
  const slugify = (s: string) => {
    const base =
      s
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, "-")
        .replace(/^-+|-+$/g, "") || "section";
    const n = seen.get(base) ?? 0;
    seen.set(base, n + 1);
    return idPrefix + (n ? `${base}-${n}` : base);
  };
  const out = html.replace(
    /<h([23])>([\s\S]*?)<\/h\1>/g,
    (_m, lvl: string, inner: string) => {
      const text = inner.replace(/<[^>]+>/g, "").trim();
      const id = slugify(text);
      toc.push({ id, text, depth: Number(lvl) });
      return `<h${lvl} id="${id}">${inner}</h${lvl}>`;
    },
  );
  return { html: out, toc };
}

export function enWordCount(body: string): number {
  const en = body.split(TR_MARKER)[0] ?? body;
  return en.replace(/<[^>]+>/g, " ").trim().split(/\s+/).filter(Boolean).length;
}

export function readingMinutes(body: string): number {
  return Math.max(1, Math.round(enWordCount(body) / 200));
}
