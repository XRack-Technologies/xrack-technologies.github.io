# Contributor & style guide

How to write and ship a post on the XRack blog. Addresses audit item **AUD-M10**.

## Add a post

1. Create `src/content/blog/<slug>.md`. The file name is the URL slug
   (`/blog/<slug>/`), so keep it short, lowercase, hyphenated, and stable.
2. Fill the frontmatter (below) and write the body in Markdown.
3. Run `npm run dev` to preview, `npm run build` to verify. Open a PR.

## Frontmatter reference

```yaml
---
title: The English Title                # required
title_tr: Türkçe Başlık                 # optional; enables the Turkish URL/meta
description: One-sentence summary.       # required; ~150–160 chars, no line breaks
description_tr: Tek cümlelik özet.       # optional
pubDate: 2026-07-08                      # required (YYYY-MM-DD)
updatedDate: 2026-07-20                  # optional; shows as "modified"
cover: /covers/foo.jpg                   # optional; else a branded card is auto-generated
series: The Justification Series         # optional; groups posts (exact string match)
seriesOrder: 1                           # optional; ordering within the series
tags: ["vision"]                         # 1–3 from the taxonomy below; first = primary
keywords: ["ai governance", "kvkk"]      # optional; SEO keywords, EN + TR mixed is fine
author: Vincent E. Dogan Dursun - CEO & Co-Founder   # must resolve to src/lib/authors.ts
draft: false                             # true = excluded from build
---
```

## Bilingual authoring

- The site is bilingual on one source file. Split the body with a single
  `<!-- tr -->` marker: everything before it is English, everything after is
  Turkish.
  ```markdown
  English body…

  <!-- tr -->

  Türkçe gövde…
  ```
- Set `title_tr` / `description_tr` for localized metadata. When any Turkish
  content exists, the post also gets a dedicated `/blog/<slug>/tr/` URL with
  Turkish `og:*`/`hreflang` — do **not** create a separate file for Turkish.
- Keep the EN and TR structure parallel (same headings, same order) so the
  table of contents and section anchors line up.

## Taxonomy (tags)

Use only these tags (defined in `src/lib/site.ts` → `NAV`). The **first** tag is
the primary category (shown as the pill and in the breadcrumb):

- `engineering` · `field-notes` · `research` · `security` · `vision`

Adding a new category means adding it to `NAV` first — don't invent one-off
tags per post (that's the topic-sprawl this guide exists to prevent).

## Series

Group related posts with `series` (an exact display string) and `seriesOrder`
(1, 2, 3…). A series navigation box then appears on each part linking the whole
arc. Posts without `series` are unaffected.

## Voice & style

- **No em dashes (—).** Use commas, colons, parentheses, or split the sentence.
  (This is enforced by convention; keep it out of both EN and TR.)
- Sentence-case headings (`## Why it exists`, not Title Case).
- Prefer concrete, technical claims over marketing adjectives. Show the
  mechanism.
- Keep the brand tagline intact when quoting it: *"The model proposes, the
  runtime executes, the ledger proves."*
- Body headings start at `##` (H2); the H1 is the post title, rendered
  automatically. H2/H3 feed the auto table of contents.
- Author must be a registered profile in `src/lib/authors.ts` (bylines link to
  it and drive Person JSON-LD). Add new authors there first.

## Pre-publish checklist

- [ ] `title` + `description` set; `description` reads well as a search snippet.
- [ ] Turkish added (`title_tr`, `description_tr`, `<!-- tr -->` body) or the
      post is intentionally EN-only.
- [ ] 1–3 tags from the taxonomy; primary tag first.
- [ ] No em dashes anywhere.
- [ ] `author` resolves to a profile in `authors.ts`.
- [ ] `series` / `seriesOrder` set if the post belongs to a series.
- [ ] `npm run build` passes and the post renders in both languages.
