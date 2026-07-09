# Comments & community (AUD-H3)

## Mechanism

**Giscus** — comments backed by **GitHub Discussions**. Chosen because it fits a
static site (no server/DB), is free, sets no tracking cookies, and reuses
GitHub identity (no new account for commenters). Rendered by
`src/components/Comments.astro` on every post.

- **Privacy:** the giscus client (`giscus.app/client.js`) loads **only when the
  reader scrolls near the comments** (IntersectionObserver, ~400px pre-load), so
  no third-party JS runs otherwise. Commenting requires the reader to authorize
  the giscus GitHub app themselves; we set no cookies.
- **One thread per post:** `data-mapping="specific"` with the post slug as the
  term, so the EN (`/blog/slug/`) and TR (`/blog/slug/tr/`) URLs share a single
  discussion instead of splitting comments by language.
- **Theme/lang:** `transparent_dark` theme; `data-lang` follows the reader's
  language (post pages reload on the EN/TR toggle, so giscus re-inits correctly).
- **Fallback:** when Giscus env vars are unset, posts render a "Comments"
  section with **Discuss on X** and **Email the author** links instead — so
  there is always an engagement affordance.

## Setup

1. Make the discussions repo **public** and enable **Settings → Discussions**.
2. Install the **giscus app** (https://github.com/apps/giscus) on that repo.
3. Open **https://giscus.app**, enter the repo, pick a Discussions **category**
   (e.g. "General" or a dedicated "Comments" category with the "Announcements"
   type so only maintainers open threads), mapping = **specific** (already set
   in code via the term).
4. Copy the generated `data-repo-id` and `data-category-id`.
5. Set the deploy env (see `.env.example`):
   - `PUBLIC_GISCUS_REPO=owner/repo`
   - `PUBLIC_GISCUS_REPO_ID=...`
   - `PUBLIC_GISCUS_CATEGORY=General`
   - `PUBLIC_GISCUS_CATEGORY_ID=...`
   For GitHub Actions, add them under the build step `env:` (as repo variables),
   like the analytics/SEO vars.
6. Deploy → the comment box appears; before that, the discussion-links fallback
   is shown.

## Moderation policy

- **Who can comment:** anyone with a GitHub account who authorizes the giscus app.
- **Standard:** on-topic, respectful, no spam, self-promotion, harassment, hate
  speech, or disclosure of others' private information.
- **Enforcement:** repo maintainers may edit, hide, delete, or lock any comment
  or discussion, and block repeat offenders, using GitHub Discussions moderation
  tools. Comments are subject to
  [GitHub's Community Guidelines](https://docs.github.com/site-policy/github-terms/github-community-guidelines).
- **Reporting:** flag abuse via GitHub's report feature or email
  `dogandursun@xrack.io`.
- **Data:** comment content lives in GitHub Discussions on our repo; identity
  and auth are handled by GitHub. We store nothing extra and set no cookies.

## Verification checklist

1. With env unset: a post shows the "Comments" section with X + email links; no
   `giscus.app` request in the Network tab.
2. With env set + deployed: scrolling to the comments loads `giscus.app`; a
   signed-in GitHub user can post; the comment appears as a Discussion in the repo.
3. Opening the EN and TR URL of the same post shows the **same** thread.
