# Search engine registration (AUD-H2)

Production host: **https://blog.xrack.io**

## Already in place (code)

- **Sitemap** generated at build: `https://blog.xrack.io/sitemap-index.xml`
  (→ `sitemap-0.xml`), via `@astrojs/sitemap`.
- **robots.txt** (`public/robots.txt`) references the sitemap:
  `Sitemap: https://blog.xrack.io/sitemap-index.xml` — live.
- **Verification meta tags** are wired and render only when their env vars are
  set (see below): `google-site-verification` and `msvalidate.01`.
- Per-language URLs + reciprocal `hreflang` (AUD-H1) so both EN and TR are
  crawlable.

## Google Search Console

Recommended: **Domain property** (covers http/https + all subdomains, verified
once via DNS).

1. GSC → Add property → **Domain** → enter `xrack.io`.
2. Add the given `TXT` record to the `xrack.io` DNS zone → Verify.
   - This one record also covers `blog.xrack.io`.

Alternative (this subdomain only), **HTML tag** method — no DNS needed:

1. GSC → Add property → **URL prefix** → `https://blog.xrack.io/`.
2. Choose **HTML tag**, copy the `content` value from the `<meta>` it shows.
3. Set `PUBLIC_GOOGLE_VERIFICATION=<that value>` in the deploy env and deploy.
4. Back in GSC → **Verify**.

Then: GSC → **Sitemaps** → submit `sitemap-index.xml`.

## Bing Webmaster Tools

Easiest: **Import from Google Search Console** (one click once GSC is verified).

Manual alternative, **HTML meta tag** method:

1. Bing Webmaster → Add site `https://blog.xrack.io/`.
2. Copy the `msvalidate.01` content value.
3. Set `PUBLIC_BING_VERIFICATION=<that value>` in the deploy env and deploy.
4. Bing → **Verify**. Then submit `https://blog.xrack.io/sitemap-index.xml`.

## Setting the env vars

For GitHub Actions (the current deploy), add the values to the workflow's build
step env, or as repo variables, e.g. in `.github/workflows/deploy.yml`:

```yaml
      - name: Build with Astro
        uses: withastro/action@v3
        with:
          package-manager: npm
        env:
          PUBLIC_GOOGLE_VERIFICATION: ${{ vars.PUBLIC_GOOGLE_VERIFICATION }}
          PUBLIC_BING_VERIFICATION: ${{ vars.PUBLIC_BING_VERIFICATION }}
```

(Domain/DNS verification needs no env var and is the more robust choice.)

## `meta keywords` — removed (AUD-L1)

**Decision: removed.** The `<meta name="keywords">` tag no longer renders
(`src/layouts/Base.astro`). Google has ignored it for over a decade and Bing
treats it, at best, as a weak spam signal — so it carried zero ranking upside
while risking a false sense of "SEO done." The `keywords` prop plumbing in
`Base.astro` was dropped with it.

**What we kept:** the per-post `keywords` frontmatter field
(`src/content.config.ts`) still populates `keywords` in the **JSON-LD
`BlogPosting`** structured data (`src/pages/blog/[...slug].astro`). That is the
legitimate, machine-readable home for topical terms — no author-facing change,
nothing to re-tag.

**Expectation on the record:** rankings come from **content quality + on-page
structure (headings, internal links) + structured data** (Organization /
WebSite / BlogPosting / Breadcrumb JSON-LD) — not from meta keywords. Do not
reintroduce the tag.

## Verification checklist

1. `curl -s https://blog.xrack.io/ | grep -E "google-site-verification|msvalidate"`
   shows the tag(s) after deploy.
2. GSC + Bing both show the property as **Verified**.
3. Sitemap submitted; **Coverage/Pages** and **Performance** reports populate
   over the following days.
4. `curl -s https://blog.xrack.io/blog/<any-post>/ | grep -c 'name="keywords"'`
   returns **0**; the same page's JSON-LD still contains a `"keywords"` field
   (`grep -o '"keywords":"[^"]*"'`).
