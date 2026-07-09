# Editorial calendar

Single source of truth for what's planned, in progress, and shipped. Keep it in
the repo (PR alongside the post) so planning is versioned. See
[style-guide.md](./style-guide.md) for how to write a post.

**Status legend:** 💡 Idea · ✍️ Drafting · 👀 Review · 📅 Scheduled · ✅ Published

| Status | Target date | Title (EN) | Primary tag | Series | Author | Notes |
|--------|-------------|------------|-------------|--------|--------|-------|
| ✅ Published | 2026-07-08 | The Justification Problem | vision | — | Vincent E. Dogan Dursun | Flagship; bilingual |
| 💡 Idea | 2026-08 | The immutable ledger, end to end | engineering | — | — | How evidence is recorded and replayed |
| 💡 Idea | 2026-08 | Fail-closed by default | security | — | — | Why the safe state is the starting state |
| 💡 Idea | 2026-09 | Bring your own LLM: the sovereignty case | research | — | — | Data residency + KVKK/GDPR angle |
| 💡 Idea | 2026-09 | The four planes, explained | vision | The Four Planes | — | Series kickoff (Harness/Grid/Federation/Embodiment) |

## How to use

- Add a row when an idea is captured; move its status left→right as it
  progresses. Delete or archive rows that are dropped.
- One primary tag per post (from the taxonomy in the style guide). If several
  posts form an arc, give them a shared **Series** name and number them.
- Target dates can be a month (`2026-08`) until scheduled, then a full date.
- When a post ships, set status ✅ and match the date to the post's `pubDate`.

## Cadence & balance (guideline)

- Aim to rotate across categories rather than clustering one; the tag filter on
  the home page makes imbalance obvious.
- Long-form flagship pieces (>15 min) benefit from a series; short field notes
  can stand alone.
