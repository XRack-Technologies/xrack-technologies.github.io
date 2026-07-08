---
title: Why every decision carries its own evidence
description: An agent that cannot show its work cannot be trusted with authority. How the evidence chain keeps cognition auditable.
pubDate: 2026-07-04
tags: ["engineering"]
---

Most frameworks treat a decision as a side effect — a log line, if you are lucky. XRack treats it as
a **first-class artifact**: every action is bound to the reasoning, the inputs, and the verification
that produced it.

## The shape of a claim

A claim records what was believed, why, and how confident the harness was, then links forward to
whatever depended on it. When a step fails verification, you walk backward to the exact belief that
led you astray.

> Cognition you can trust is cognition that shows its work.

## Reproducible by construction

Because claims are immutable and content-addressed, two runs over the same evidence produce the same
chain. That is what makes the grid reproducible rather than merely repeatable.
