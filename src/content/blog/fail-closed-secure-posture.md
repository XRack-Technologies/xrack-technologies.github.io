---
title: "Fail closed: what a secure posture actually means"
description: Every gate defaults to denial. Why that is the only defensible starting point for an autonomous system.
pubDate: 2026-07-07
tags: ["security"]
---

An autonomous system that fails open is a liability waiting for its trigger. XRack takes the opposite
stance: **every gate defaults to denial**, and access is granted only when an explicit, scoped grant
says so.

## Denial as the default

Authentication failures, missing scopes, and unverifiable identities all resolve the same way — the
action does not happen. There is no ambiguous middle state that quietly lets work through.

## Grants are scoped and expiring

Authority is never ambient. A grant names the owner, the resource, and a lifetime, and it is swept
the moment it expires. What an agent could do yesterday says nothing about what it can do today.

> Secure by default is the only default worth shipping.
