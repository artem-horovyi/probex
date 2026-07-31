# ProbeX Vision

This document outlines the vision and principles of the ProbeX project.

## Problem

Debugging incidents is often difficult, slow, and expensive.

Existing debugging workflows often require reproducing issues locally, adding temporary logging, or repeatedly redeploying applications.

Logging is valuable, but it only provides historical information and only where logging has been added in advance. Missing logs often require code changes and additional deployments before an issue can be investigated.

Commercial runtime debugging solutions exist, but they are often expensive, proprietary, or difficult to adopt for smaller teams and open-source projects.

## Vision

Runtime debugging should be as accessible and commonplace as logging is today.

Engineers should be able to debug runtime issues without needing to rely on closed infrastructures or proprietary solutions.

ProbeX aims to provide a simple, open-source runtime debugging solution that is easy to adopt for any team.

## Principles

- Runtime-first
- Headless
- Lightweight
- Extensible
- Open
- Production-ready

## Non-Goals

- an observability platform
- an APM solution
- a logging system
- a monitoring service
- a profiler
- a security or auditing tool
