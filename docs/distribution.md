# Publishing & distribution

What happens when a post ships, and how to get it in front of people.
Addresses audit item **AUD-L3**.

## Optional automation (webhook on publish)

A GitHub Action (`.github/workflows/notify-publish.yml`) runs on every push to
`main` that **adds** a file under `src/content/blog/`. For each new,
non-draft post it POSTs a JSON payload to a webhook:

```json
{
  "text": "📣 New on the XRack blog: <title>\n<url>",
  "title": "…", "title_tr": "…", "description": "…",
  "url": "https://blog.xrack.io/blog/<slug>/", "tags": "[…]"
}
```

It **no-ops** unless the `DISTRIBUTION_WEBHOOK_URL` repo secret is set, so the
automation is opt-in and never blocks a deploy.

### Enable it

1. Pick a target and copy its inbound webhook URL:
   - **Zapier / Make / n8n** — "Catch Hook", then map to *Post to X*,
     *LinkedIn*, *Buffer*, etc. (recommended: gives real auto-posting/queueing).
   - **Buffer** — via Zapier/Make (Buffer has no public inbound webhook).
   - **Slack / Discord** — an incoming webhook; the `text` field renders as-is
     (team nudge rather than public posting).
2. GitHub → repo **Settings → Secrets and variables → Actions → New secret**:
   `DISTRIBUTION_WEBHOOK_URL = <your webhook>`.
3. Publish a post → the action fires and your automation posts/queues it.

> Note: only file **additions** trigger it (edits and re-deploys don't), so a
> post is announced once.

## Manual checklist (do this on every publish)

Even with automation, a human pass lands better. Post from the brand and,
where natural, the author accounts.

- [ ] **X** — hook + link. Consider a short thread for flagship pieces.
- [ ] **LinkedIn** — company page + author; 2–3 sentence framing, then the link.
- [ ] **Bluesky** — hook + link.
- [ ] **Hacker News** — submit with the exact title; first comment = context
      (only for substantial engineering/research pieces; don't force it).
- [ ] **Reddit** — a relevant subreddit if genuinely on-topic (read the rules).
- [ ] **Turkish reach** — share the `/blog/<slug>/tr/` URL for TR audiences so
      the Turkish card/preview shows.
- [ ] Add UTM tags on posts you want to measure, e.g.
      `?utm_source=linkedin&utm_medium=social&utm_campaign=post-launch`
      (GA4 attributes the source; see docs/analytics.md).
- [ ] Cross-link from the product site / newsletter if relevant.

## Copy templates

**X / Bluesky**
```
<one-line hook that states the idea, not "new blog post">

<url>
```

**LinkedIn**
```
<2–3 sentences: the problem, the claim, why it matters for regulated AI.>

Full piece: <url>
```

**Hacker News**
- Title: the post's exact title (no "Show HN" unless it's a launch).
- First comment: what's new / the strongest claim, in plain text.

## Principles

- Lead with the idea or the strongest claim, not "we published a post."
- One primary link per post; let the OG card (auto-generated, 1200×630) do the
  visual work.
- Space out re-shares; don't blast every channel within the same minute.
