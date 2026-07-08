# XRack Blog

The XRack blog — a static [Astro](https://astro.build) site hosted on GitHub Pages, styled to
match the [xrack.io](https://xrack.io) landing page. Fully independent of the main product repo.

**Live:** https://xrack-technologies.github.io/

## Writing a post

1. Add a Markdown file under `src/content/blog/`, e.g. `my-post.md`:

   ```markdown
   ---
   title: My post title
   description: One-line summary shown on cards and in search results.
   pubDate: 2026-07-10
   tags: ["engineering"]        # first tag is shown as the card category
   # draft: true                # optional — hide from the site
   ---

   Write the body in Markdown.
   ```

2. Commit and push to `main`.
3. GitHub Actions builds and deploys automatically (~1 min). That's it — no database, no server.

The filename becomes the URL slug (`my-post.md` → `/blog/my-post`).

## Categories

Navigation categories live in `src/lib/site.ts` (`NAV`). Any tag you use in a post automatically
gets a page at `/tags/<tag>`. Add a tag to `NAV` to feature it in the header.

## Local preview

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
npm run preview    # serve the built site
```

## Design

Brand tokens, fonts, and components live in `src/styles/global.css` and `src/layouts/Base.astro`,
mirroring the landing page (warm-rust palette, Bricolage / Geist / JetBrains Mono, dark glass).

## Deployment / custom domain

Hosted via GitHub Pages (`.github/workflows/deploy.yml`). This is the org site repo
(`xrack-technologies.github.io`), so it serves at the root: `https://xrack-technologies.github.io/`
with `base: "/"` in `astro.config.mjs`. In the repo settings, set
**Settings → Pages → Source → GitHub Actions**.

- Custom domain (`blog.xrack.io` or `xrack.io/blog`): can be added later via Pages settings + DNS
  (a subpath like `xrack.io/blog` needs a reverse proxy in front of the main domain; a subdomain
  like `blog.xrack.io` is just a DNS CNAME).
