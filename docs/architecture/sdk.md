# SDK Architecture

## 1. Overview

The primary goal of the SDK is to provide a debugging interface for server applications.

The SDK contains the core debugger logic, domain entities, types, and utilities required to provide runtime debugging capabilities.

## 2. Responsibilities

The SDK is responsible for the core debugging functionality and domain types required by ProbeX.

It is not intended to be a general-purpose collection of utilities or unrelated helpers.

## 3. Architecture

Components of SDK:

- Debugger
- Breakpoint
- Variable
- Snapshot
- File
- Command
- Event

### Debugger

The main orchestrator of the SDK. It manages the debugger lifecycle, coordinates breakpoint handling, processes runtime events, and routes commands and events through the Connector interface.

### Breakpoint

The primary debugging entity representing a location in the application where ProbeX can monitor runtime execution.

A breakpoint contains a file, line, optional conditions, and an internal identifier once created.

### Variable

Represents the runtime value of a variable captured during snapshot collection.

### Snapshot

Represents the runtime state captured when a breakpoint event occurs.

A snapshot contains breakpoint information and collected runtime variables.

### File

Represents a source file loaded by the runtime.

A file contains its name and resolved location.

### Command

A command is an object received from the Connector and handled by the SDK.

It contains a command type, such as `breakpoint.add` or `breakpoint.remove`, and the data required to execute the command.

### Event

An event is an object emitted by the SDK when a relevant runtime or debugger event occurs.

It contains an event type and the data associated with the event.

## 4. Data Flow

- Initialization
- Connector -> Command -> SDK
- V8 Event -> Snapshot -> Event -> Connector
- Error -> Connector
- No active breakpoints → Idle mode
- Idle → Add breakpoint → Active debugging

## 5. State

The SDK keeps runtime state in memory:

- Active and paused breakpoints
- Loaded files

## 6. Public API

Minimal SDK API:

```ts
import debugger from "@probex/sdk";
import connector from "@probex/connector";

debugger.configure({
  connector, // or a custom connector
  // ...
});

debugger.start();
```
