---
title: Notes from a week of autonomous operation
description: We let the harness run a week of tasks with light supervision and read the traces. Three patterns stood out.
pubDate: 2026-06-24
tags: ["field-notes"]
---

For one week we let the harness take on a backlog of real tasks with only light supervision, then
went back and read every trace. A few patterns were worth writing down.

## Confidence is not competence

The runs that went wrong were rarely the ones the harness flagged as uncertain. They were the
confident ones built on a single unverified assumption. The fix was structural: force a verification
step before any action inherits authority.

## Small gates beat big reviews

A handful of narrow, cheap checks caught more problems than one heavyweight review at the end.
Cognition is easier to keep honest when every stage is accountable for itself.

None of this is theory — it came straight out of the traces. That is the point of making them
first-class.
