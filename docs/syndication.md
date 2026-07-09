# Syndication & canonical cross-posting

Addresses audit item **AUD-L2** (syndication / canonical cross-posting
strategy). Related: [`seo.md`](./seo.md) (canonical + hreflang), [`campaigns.md`](./campaigns.md)
(UTM tagging), [`editorial-calendar.md`](./editorial-calendar.md).

Production host: **https://blog.xrack.io**

## Why

Third-party platforms — dev.to, Medium, Hashnode, LinkedIn — have their own
built-in audiences we will never reach by publishing only on our own domain.
Republishing there extends reach. The risk is **duplicate content**: two copies
of the same article competing in search, splitting signals, and sometimes the
copy on the high-authority platform outranking our own page.

The fix is `rel=canonical`. When a republished copy declares the blog URL as its
canonical, search engines consolidate ranking signals onto **our** page and
treat the copy as a syndication of it. We get the third-party audience *and* keep
the SEO equity on `blog.xrack.io`.

## The golden rule

**Publish on the blog first. Syndicate second. Always point canonical back to
the blog.**

1. Publish the post on `blog.xrack.io` and let it get indexed first (confirm
   with `site:blog.xrack.io/blog/<slug>` in Google, or Search Console →
   URL Inspection). `rel=canonical` is a *hint*, not a directive — being the
   first indexed copy reinforces it.
2. Copy the body from the source Markdown in `src/content/blog/<slug>.md`. Do
   **not** scrape it from the RSS feed — the feed carries the description only,
   not the full body (see AUD-L6).
3. On the third-party platform, set the canonical URL to the **exact** blog URL,
   including the language segment and trailing slash:
   - English: `https://blog.xrack.io/blog/<slug>`
   - Turkish: `https://blog.xrack.io/blog/<slug>/tr/`

   Each language version of a post is self-canonical on our site (the `<link
   rel="canonical">` in `Base.astro` points at the current page, with `hreflang`
   alternates linking EN↔TR). Syndicate a language to the URL of **that same
   language** — never point a Turkish repost at the English canonical.

## Per-platform steps

### dev.to

Supports canonical natively. Two ways:

- **Frontmatter** — paste the article with a `canonical_url` in the dev.to
  Markdown front matter:
  ```markdown
  ---
  title: The Justification Problem
  published: true
  canonical_url: https://blog.xrack.io/blog/the-justification-problem
  tags: ai, epistemics, engineering
  ---
  ```
- **Editor** — the "..." / post settings expose a **Canonical URL** field; paste
  the blog URL there.

### Medium

Do **not** copy-paste into a new Medium story — that creates an uncanonicalized
duplicate. Use Medium's **Import a story** tool
(`https://medium.com/p/import`): paste the blog post URL and Medium imports the
content and sets `rel=canonical` back to the original automatically. Verify the
canonical afterward (see checklist).

### Hashnode

Post settings → **SEO / Advanced → "Original Article URL (Canonical URL)"**.
Paste the blog URL before publishing.

### LinkedIn Articles

LinkedIn does **not** support canonical tags. Do not republish the full text
there — a full duplicate with no canonical is the worst case. Instead:

- Post a **teaser**: the hook / first paragraph plus a "Read the full piece →"
  link back to the blog, **or**
- A short original framing (2–3 sentences of why it matters) + the link.

Same applies to any platform lacking a canonical field (most Substack imports,
X long-posts, etc.): link back, don't duplicate wholesale.

## UTM tagging for syndicated links

Every link *back to the blog* from a syndicated copy is a link we control, so
tag it per [`campaigns.md`](./campaigns.md). Use `utm_medium=referral` and the
platform as the source:

```
https://blog.xrack.io/blog/<slug>?utm_source=devto&utm_medium=referral&utm_campaign=<slug>
https://blog.xrack.io/blog/<slug>?utm_source=medium&utm_medium=referral&utm_campaign=<slug>
https://blog.xrack.io/blog/<slug>?utm_source=hashnode&utm_medium=referral&utm_campaign=<slug>
```

Note: put the UTMs on the **in-body "read the original" link**, not on the
canonical URL itself. A canonical must be the clean, parameter-free URL —
tagging it would point canonical at a different (query-string) URL and break the
consolidation.

## Workflow checklist

Per post, after it is live and indexed on the blog:

1. [ ] Blog post published and indexed (`site:` search or Search Console).
2. [ ] Body copied from `src/content/blog/<slug>.md` (full text, not RSS).
3. [ ] dev.to: `canonical_url` set to the blog URL, published.
4. [ ] Medium: imported via the Import tool (auto-canonical), verified.
5. [ ] Hashnode: canonical URL field set, published.
6. [ ] LinkedIn: teaser + link back only (no full duplicate).
7. [ ] "Read the original" link in each copy carries the referral UTM.
8. [ ] Turkish version, if syndicated, points canonical at the `/tr/` URL.
9. [ ] Logged in [`editorial-calendar.md`](./editorial-calendar.md) so we don't
       double-syndicate.

## Verifying canonical took effect

On the published third-party copy, view source (or `curl -s <url> | grep
canonical`) and confirm:

```html
<link rel="canonical" href="https://blog.xrack.io/blog/<slug>"/>
```

The `href` must be the blog URL, not the platform's own URL. If it points at the
platform, the canonical was not applied — fix it before promoting the copy.
