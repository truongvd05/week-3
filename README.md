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
- Full test coverage with Vitest

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
npm run dev ask "What is TypeScript?" --verbose
```

---

## Testing

```bash
npm test
```

---

## Project Structure

src/
├── commands/
│ └── ask.command.ts # CLI command definition
├── services/
│ └── kb.service.ts # API logic
├── tests/
│ └── kb.test.ts # Unit tests
└── cli.ts # Entry point

## Scripts

```json
"scripts": {
  "dev": "ts-node src/cli.ts",
  "test": "vitest run"
}
```

---

## Author

Trường
