# Analytics & privacy posture

Addresses audit item **AUD-C1** (web analytics / measurement).

## Provider

- **Google Analytics 4 (GA4)**, loaded **consent-gated**.
- Measurement ID is supplied via the `PUBLIC_GA_ID` environment variable
  (e.g. `PUBLIC_GA_ID=G-XXXXXXXXXX`). It is a public client-side id, not a
  secret. When unset, **no analytics and no consent banner render at all**.

## Consent model

- **Nothing loads until the visitor clicks "Accept".** No `gtag.js`, no
  `dataLayer`, no cookies, and no network requests to Google occur before
  consent. This is stricter than Google Consent Mode's "denied" default (which
  still pings Google) — we simply do not inject the script.
- The choice is stored in `localStorage` under `xrack-analytics-consent`
  (`granted` | `denied`). Declining stores `denied` and the banner never
  reappears; no events are ever sent.
- The banner is bilingual (EN/TR) and matches the site's language toggle.

## What is measured (only after consent)

- **Pageviews / unique visitors / sessions** — GA4 default (`config` fires one
  `page_view` per page load; the site is static/MPA so every navigation counts,
  including the `/tr/` language variants).
- **Referrers / sources** — GA4 default acquisition reports.
- **Top pages** — GA4 default pages report.
- **Outbound clicks** — custom event `outbound_click` (`link_url`,
  `link_domain`) for any link to another host (e.g. `xrack.io`).
- **CTA clicks** — custom event `cta_click` (`cta_id: "book_demo"`) for the
  "Book a Demo" links (Calendly).
- **Share clicks** — custom event `share_click` (`method`: X, LinkedIn,
  Bluesky, Hacker News, Reddit, Facebook, WhatsApp, Copy link) from both the
  inline share bar and the mobile share FAB.

## PII posture

- **No PII is collected or sent by us.** We pass no user identifiers, email, or
  form data into analytics. Custom events carry only the clicked URL/host and a
  share method label.
- GA4 does **not** log or store IP addresses; `anonymize_ip: true` is also set
  defensively.
- No cross-site advertising features / Google Signals are enabled by our code.
  If Google Signals is toggled on in the GA property, revisit this document.

## Retention (configure in the GA4 property — not code)

- Set **Admin → Data settings → Data retention → 2 months** (or 14 months) and
  disable "Reset user data on new activity" per policy. GA4's default is 2
  months for event-level data; the aggregated reports above are unaffected by
  this setting.

## Verification checklist

1. Set `PUBLIC_GA_ID` and deploy.
2. Load the site → consent banner appears; **DevTools → Network** shows **no**
   `googletagmanager.com` request yet.
3. Click **Accept** → `gtag/js` loads; GA4 **Realtime** shows the visit.
4. Click a share button, a "Book a Demo" link, and an outbound link → the
   `share_click` / `cta_click` / `outbound_click` events appear in Realtime →
   Events.
5. In a fresh profile, click **Decline** → no `googletagmanager.com` request on
   any page, no cookies set.
