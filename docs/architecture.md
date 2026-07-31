# ProbeX Architecture

This document describes the high-level architecture of ProbeX and the responsibilities of its core components.

## Diagram

```mermaid
graph LR
    App(Target Application)
    SDK(Debugger SDK)
    CN(Connector)
    CLI(CLI Interface)
    INT(Custom Interface)

    App -- Integrated ---> SDK
    SDK -- Openned Connection ---> CN
    CN -- Connected ---> CLI
    CN -- Connected ---> INT
```

## Components

### Target Application

Target Application is the server application that integrates the ProbeX debugger.

### SDK

SDK is the debugger SDK that provides the interface for the debugger to interact with the target application runtime.

### Connector

Connector is the component that establishes a connection between the debugger and the interfaces.

### CLI

CLI is the command-line interface that allows the user to interact with the debugger (Connecting, Managing Setup, Managing Migrations, etc.).

### Custom Interface

Custom Interface is the user managed interface that allows the user to interact with the debugger.

Possible interfaces:
- Custom CLI
- Web UI
- Prostman or similar
- Other WebSocket-based interfaces

## Relationships

### SDK

```mermaid
graph LR
    SDK(Debugger SDK)
    CN(Connector)
    APP(Target Application)
    INT(Server Debugger Infrastructure)

    APP -- Integrates with ---> SDK
    SDK -- Communicates with ---> CN
    SDK -- Communicates with ---> INT
```

### Connector

```mermaid
graph LR
    SDK(Debugger SDK)
    CN(Connector)
    CLI(CLI Interface)
    INT(Custom Interface)

    CN -- Communicates with ---> SDK
    CN -- Communicates with ---> CLI
    CN -- Communicates with ---> INT
```

### CLI

```mermaid
graph LR
    CLI(CLI Interface)
    APP(Target Application)
    CN(Connector)
    U(User)

    CLI -- Communicates with ---> CN
    CLI -- Configures SDK in ---> APP
    CLI -- Presents information to ---> U
```

### Custom Interface

```mermaid
graph LR
    CI(Custom Interface)
    CN(Connector)
    USR(User)

    CI -- Communicates with ---> CN
    CI -- Presents information to ---> USR
```

## Flows

`Interface`: this is  CLI or custom interface.

### Setup

```mermaid
sequenceDiagram
  User ->> Application: Install SDK
  User ->> Application: Integrate Debugger
  User ->> Environment: Configure Environment
  User ->> Application: Configure Debugger
  User ->> Application: Launch Application
```

### Connect Debugger

```mermaid
sequenceDiagram
  User ->> Interface: Configure Connection
  Interface ->> Connector: Connect
  Connector ->> SDK: Establish Session
  SDK -->> Connector: Connected
  Connector -->> Interface: Connected
  Interface -->> User: Connected
```

### Execute Command

```mermaid
sequenceDiagram
  User ->> Interface: Execute Command
  Interface ->> Connector: Execute Command
  Connector ->> SDK: Execute Command
  SDK ->> Server: Apply Command
  Server -->> SDK: Command Result
  SDK -->> Connector: Command Executed
  Connector -->> Interface: Command Executed
  Interface -->> User: Command Executed
```

### Runtime Event

```mermaid
sequenceDiagram
  Application ->> SDK: Runtime Event
  SDK ->> Connector: Runtime Event
  Connector ->> Interface: Runtime Event
  Interface ->> User: Runtime Event
```
