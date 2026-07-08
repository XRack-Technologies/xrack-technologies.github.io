---
title: How we measure whether an agent is reliable
description: Reliability is not accuracy. An agent can be right most of the time and still be untrustworthy if you can't predict when it fails.
pubDate: 2026-06-27
tags: ["research"]
---

Accuracy is the wrong headline metric for an agent. A system that is right ninety percent of the
time is useless if you cannot tell which ten percent to distrust. What we care about is
**calibrated reliability**.

## Predictable failure over rare failure

We score a run not only on whether it succeeded, but on whether its own confidence tracked reality.
An agent that says "I am unsure" right before it fails is far more useful than one that fails
silently.

## Replay as ground truth

Because every cycle is reproducible, we can replay a decision under changed inputs and watch where
the outcome flips. That sensitivity map is our real reliability signal.
