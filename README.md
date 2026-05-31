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
git clone <your-repository-url>
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
