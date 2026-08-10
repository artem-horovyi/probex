# ProbeX

ProbeX is an open-source runtime debugger for server applications.

It provides a simple way to inspect running applications through a lightweight SDK and connector, helping developers resolve testing and production issues with less effort.

> ⚠️ ProbeX is under active development. APIs and protocols may change before the first stable release.

## Why?

Debugging issues in running applications is often slow and expensive.

Developers frequently have to reproduce problems locally, add temporary logging, redeploy applications or rely on environment-specific tooling. These workflows increase incident resolution time and make debugging more difficult.

ProbeX provides a consistent runtime debugging experience across environments.

## Fast Run

```bash
# Run project in development mode
pnpm install
pnpm dev

# Before commit, build the project
pnpm verify # eslint / prettier / ts
pnpm build # "remove ./dist's for childrens and run builds"

# If you need fix formatting
pnpm verify:fix # eslint / prettier
```

## Features

- Runtime inspection
- Live data snapshots
- Lightweight SDKs
- Headless architecture
- CLI for managing and interacting with applications
- Open connector protocol
- Extensible client architecture

## High level architecture

```mermaid
graph TD
    A(Application)
    B(SDK)
    C(Connector)
    D(Client CLI, UI, etc.)

    A --> B --> C --> D
```

The SDK exposes runtime information from a running application.

The connector provides a transport layer between the application and external clients.

The CLI is the first client implementation built on top of the connector protocol.

The connector protocol is open, allowing custom clients and integrations to be implemented independently.

## Components

### SDK

A lightweight SDK that integrates with your application and exposes runtime debugging capabilities.

### Connector

A transport layer that bridges the runtime and external clients.

### CLI

A command-line interface for setup, manage and interact with applications.

## Installation

### Server

> Documentation coming soon.

### CLI

> Documentation coming soon.

## Development

> Instructions for setting up the repository locally will be added soon.

## Contributing

Contributions, issues, and feature requests are welcome.

## License

MIT
