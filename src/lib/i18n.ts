import { marked } from "marked";

// localStorage key the browser uses to remember the last chosen language.
export const LANG_KEY = "xrack-blog-lang";

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
