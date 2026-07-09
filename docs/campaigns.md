# Campaign & UTM tracking convention

Addresses audit item **AUD-M9** (campaign/UTM tracking convention). Depends on
**AUD-C1** (analytics), which is now in place: GA4, loaded consent-gated — see
[`analytics.md`](./analytics.md).

Production host: **https://blog.xrack.io**

## Why

GA4 already reports organic sources and referrers. UTM parameters exist so that
traffic **we deliberately send** — from the newsletter, our own social posts, PR
placements, ads — is separable in GA4's *Traffic acquisition* reports instead of
collapsing into generic `referral` / `(direct)` buckets. Without a shared
scheme, two people tag the same newsletter `newsletter` and `email-blast` and
the data can never be compared.

## How GA4 reads UTMs

GA4 parses five URL parameters into dimensions automatically — no code change:

| Parameter      | GA4 dimension            | Required | Purpose                              |
| -------------- | ------------------------ | -------- | ------------------------------------ |
| `utm_source`   | Session source           | **yes**  | Where the click came from            |
| `utm_medium`   | Session medium           | **yes**  | The channel type                     |
| `utm_campaign` | Session campaign         | **yes**  | The named initiative                 |
| `utm_content`  | Session manual ad content| no       | Distinguish variants of one campaign |
| `utm_term`     | Session manual term      | no       | Keyword (paid search only)           |

`utm_medium` is what drives GA4's **default channel grouping** (e.g. `email` →
Email, `social` → Organic/Paid Social, `cpc` → Paid Search). Use the reserved
mediums below or GA4 will file the traffic under "Unassigned".

## Rules

1. **Lowercase, hyphen-separated, ASCII.** `utm_campaign=q3-launch`, never
   `Q3_Launch` or `Q3 Launch`. GA4 dimensions are case-sensitive, so
   `Newsletter` and `newsletter` become two rows.
2. **Use the controlled vocabulary** for `source` and `medium` (below). Invent
   new `campaign` names freely, but keep them descriptive and dated where it
   helps: `2026-07-runtime-launch`.
3. **Tag only links we control and place.** Newsletter links, our own posts on
   X/LinkedIn, PR/guest placements, ads.
4. **Never tag internal links** (blog → blog). A UTM on an internal link starts
   a new session and destroys attribution. Internal navigation uses `href()`
   with no query string — keep it that way.
5. **Do not add UTMs to the reader share buttons.** The share bar / share FAB
   (`Share.astro`, `ShareFab.astro`) let *readers* repost our URLs; self-tagging
   those would misattribute organic word-of-mouth as our own campaign. GA4
   captures those as Organic Social via referrer, which is correct.
6. **All five params on one link, in order** `source → medium → campaign`; add
   `content`/`term` only when you need them. A link with `campaign` but no
   `medium` is a broken tag.

## Controlled vocabulary

### `utm_medium` (reserved — pick one)

| Value      | Use for                                             |
| ---------- | --------------------------------------------------- |
| `email`    | Newsletter, transactional/announcement email        |
| `social`   | Organic posts we publish on social                   |
| `paid-social` | Boosted/paid social posts                         |
| `cpc`      | Paid search                                          |
| `pr`       | Earned media, guest posts, interviews, podcast notes |
| `referral` | Partner sites, sponsorships, link-in-bio            |
| `qr`       | Print/QR codes (events, slides, decks)              |

### `utm_source` (extend as needed, lowercase)

`newsletter`, `x`, `linkedin`, `bluesky`, `hackernews`, `reddit`, `github`,
`producthunt`, `calendly`, plus the specific outlet for PR (e.g.
`techcrunch`, `zdnet-tr`).

## Examples

Newsletter issue linking to a post:

```
https://blog.xrack.io/blog/the-justification-problem/?utm_source=newsletter&utm_medium=email&utm_campaign=2026-07-issue-01
```

Our own LinkedIn post announcing the same piece, EN and TR variants:

```
https://blog.xrack.io/blog/the-justification-problem/?utm_source=linkedin&utm_medium=social&utm_campaign=runtime-launch&utm_content=en
https://blog.xrack.io/tr/blog/the-justification-problem/?utm_source=linkedin&utm_medium=social&utm_campaign=runtime-launch&utm_content=tr
```

A PR placement pointing at the press kit:

```
https://blog.xrack.io/press/?utm_source=techcrunch&utm_medium=pr&utm_campaign=seed-announcement
```

> Note on outbound: the "Book a Demo" CTA (Calendly) and links to `xrack.io`
> leave this site. Tag *those* only if the destination's own analytics needs to
> attribute the click — they are irrelevant to this blog's GA4 property. This
> blog fires its own `cta_click` / `outbound_click` events for them already
> (see [`analytics.md`](./analytics.md)).

## Reading it in GA4

- **Reports → Acquisition → Traffic acquisition**, then set the primary
  dimension to **Session source / medium** or **Session campaign**.
- Add a **comparison** or filter on Session medium (`email`, `social`, `pr`) to
  split newsletter vs social vs PR traffic — the AUD-M9 acceptance goal.
- **Explore → Free form** with Session campaign + `utm_content` breaks a single
  campaign down by variant (e.g. `en` vs `tr`).

## Verification checklist

1. Build a tagged link with the naming rules above (or Google's *Campaign URL
   Builder*).
2. Accept the consent banner, open the tagged URL, and confirm in **GA4 →
   Realtime → View user snapshot** (or Traffic acquisition) that the visit shows
   the expected source / medium / campaign — not `(direct)` / `Unassigned`.
3. Confirm an **internal** link click does **not** start a new campaign session
   (source/medium stays as the original acquisition).
4. Confirm the reader **share buttons** produce plain, un-tagged blog URLs.
