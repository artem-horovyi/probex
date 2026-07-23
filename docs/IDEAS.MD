# Ideas

This document contains ideas that may become part of Probex in the future.

Ideas in this document are intentionally not commitments.
They may change, be redesigned, or be discarded.

---

## AI Runtime Assistant

### Problem

Modern AI assistants cannot inspect a live application's runtime state.

### Idea

Allow AI agents (Claude Code, Codex, ChatGPT, etc.) to connect to a running application through Probex and inspect runtime information using a secure API.

Possible capabilities:

- inspect variables
- list active breakpoints
- create snapshots
- analyze stack traces
- explain runtime state
