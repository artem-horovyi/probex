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
- Error

```mermaid
NOT DEFINED
```

### Debugger

The main orchestrator of the SDK. It manages the debugger lifecycle, coordinates breakpoint handling, processes runtime events, routes commands through the SDK command router, and sends events through the Connector interface.

#### Configration !!! CONFIG TYPE NOT DEFINED !!!

```ts

interface Config {

}

import debugger from '@probex/sdk';

debugger.configure(config);
```

Using `start()` before `configure()` will throw an error.

Using `configure()` multiple times will keep first config and print warning to the console.

Using `start()` multiple times will throw an error.

### Breakpoint

The primary debugging entity representing a location in the application where ProbeX can monitor runtime execution.

A breakpoint contains a file, line, optional conditions, and an internal identifier once created.

#### Format

```ts
interface Breakpoint {
  file: string; // path to the file
  line: number;
  conditions?: string;
  id: string; // only for already existing breakpints
}
```

#### Conditions !!! NOT DEFINED !!!

This is custom conditions language that allows to define conditional breakpoints and hit it only by successful condition evaluation.

```
req.body.title==="test condition"
```

### Variable

Represents the runtime value of a variable captured during snapshot collection.

#### Supported Data Types

- `string`
- `number`
- `boolean`
- `object`
- `array`
- `null`
- `undefined`

#### Variable Format

Variables are represented as objects with the following properties:

```ts
interface Variable {
  name: string; // name of the variable
  value:
    PrimitiveValue | // for simple values
    Variable[];// used for nested object and array values
  type: "string" | "number" | etc.;
}
```

#### Circular references !!! NOT DEFINED IN DATA TYPE !!!

Circular references are detected by the SDK and represented in the snapshot.

The SDK tracks variables in the current traversal path to detect circular references.
Depth limitations are used as an additional protection against excessively large snapshots.

#### Limitations

- Circular references identifiing and representing in the `Variable` object.
- Depth limitations must control the depth of the snapshot to avoid large snapshots.

### Snapshot

Represents the runtime state captured when a breakpoint event occurs.

A snapshot contains breakpoint information and collected runtime variables.

#### Scopes

This is default scopes that used in popular debuggers like VSCode and others.

- `local`: Variables local to the current function.
- `global`: Variables global to the current module.
- `closure`: Variables from the closure scope.

#### Format

```ts
interface Snapshot {
  breakpoint: Breakpoint;
  local: Variable[];
  global: Variable[];
  closure: Variable[];
}
```

### File

Represents a source file loaded by the runtime.

A file contains its name and resolved location.

### Command

A command is an object received through the Connector's `onCommand` listener and handled by the SDK.

It contains a command type, such as `breakpoint.add` or `breakpoint.remove`, and the data required to execute the command.

#### Command format

```json
{
  "type": "breakpoint.add",
  "data": { ... }
}
```

#### Handling of commands

The Connector invokes the `onCommand` listener when a command is received.

The SDK routes the command by its type to the appropriate handler.

#### Unknown commands

Unknown commands are ignored by the SDK and reported as warnings.

Repeated unknown commands are suppressed to prevent excessive logging.

### Event

An event is an object emitted by the SDK when a relevant runtime or debugger event occurs.

It contains an event type and the data associated with the event.

### Error !!! NOT DEFINED !!!

## 4. Data Flow

- Initialization
- Connector → Command → SDK Router → Handler
- V8 Event → Snapshot → Event → Connector
- Error → Connector
- No active breakpoints → Idle mode
- Idle → Add breakpoint → Active debugging

## 5. State

The SDK keeps runtime state in memory:

- Active and paused breakpoints
- Loaded files

## 6. Public API !!! NOT DEFINED !!!

```ts
import debugger from "@probex/sdk";

debugger.configure(config);
debugger.start();
```
