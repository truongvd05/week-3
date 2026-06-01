# KB CLI

A simple CLI tool for querying a Knowledge Base API, built with Node.js and TypeScript.

---

## Features

- Ask questions via CLI command
- HTTP API integration with Axios
- Dynamic post selection based on question length
- Loading spinner with Ora
- Verbose mode for full response details
- Error handling with meaningful messages
- Unit testing with Vitest
- 100% test coverage

---

## Tech Stack

- Node.js
- TypeScript
- Commander
- Axios
- Ora
- Vitest

---

## Installation

```bash
git clone https://github.com/truongvd05/week-3
cd week-3
npm install
```

---

## Run

```bash
npm run dev ask "What is TypeScript?"
```

With verbose output:

```bash
npm run dev -- ask "What is TypeScript?" --verbose
```

With JSON output:

```bash
npm run dev ask "What is TypeScript?" --json
```

---

## Testing

Run tests:

```bash
npm test
```

Run tests with coverage:

```bash
npm run test:coverage
```

---

### Coverage Report

| File              | % Stmts   | % Branch   | % Funcs   | % Lines   | Uncovered Line #s |
| ----------------- | --------- | ---------- | --------- | --------- | ----------------- |
| All files         | 100       | 100        | 100       | 100       |
| commands          | 100       | 100        | 100       | 100       |
| ask.command.ts    | 100       | 100        | 100       | 100       |
| services          | 100       | 100        | 100       | 100       |
| kb.service.ts     | 100       | 100        | 100       | 100       |
| ----------------- | --------- | ---------- | --------- | --------- | ----              |

---

## Tested Scenarios

CLI Command (ask.command.ts)
Prints question and answer on successful requests
Supports JSON output mode (--json)
Supports verbose output mode (--verbose)
Passes arguments correctly to the service layer
Handles API failures and exits gracefully

## Service Layer (kb.service.ts)

Handles successful API responses
Generates dynamic post IDs based on question length
Handles API errors correctly
Validates malformed API responses

Result: 9 tests passing with 100% coverage across statements, branches, functions, and lines.

---

## Project Structure

```
src/
├── commands/
│   └── ask.command.ts        # CLI command definition
├── services/
│   └── kb.service.ts         # API logic
├── tests/
│   └── kb.test.ts            # Unit tests (kb.service)
│   └── ask.command.test.ts   # Unit tests (ask.command)
└── cli.ts                    # Entry point
```

---

## Scripts

```json
"scripts": {
  "dev": "ts-node src/cli.ts",
  "test": "vitest run",
  "test:coverage": "vitest run --coverage"
}
```

---

## Author

Trường
