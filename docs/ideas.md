# Ideas

This document contains ideas that may become part of Probex in the future.

Ideas in this document are intentionally not commitments.
They may change, be redesigned, or be discarded.

---

# CLI interface

### Problem

- users must do manually any actions
- users must inspect runtime state manually
- users doesen't have a GUI

### Idea

Allow users to open web UI or setup some debugging tools with CLI by running simple commands.

# AI Runtime Assistant

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
