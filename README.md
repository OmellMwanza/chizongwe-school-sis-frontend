# Chizongwe School SIS Frontend

This repository contains the frontend site for the Chizongwe School Student Information System. It is a frontend-only project: the user interface is built as a React single-page application, and no custom backend API endpoints are required for the current site.

## Ownership

This project rightfully belongs to Omell, the owner and maintainer of this repository.

## Tech Stack

- React 18
- TypeScript
- Vite
- React Router 6
- TailwindCSS 3
- Radix UI components
- Lucide React icons
- Vitest

The project was generated from a full-stack starter template, so some Express server files and build scripts may still exist. For this project, treat the application as a frontend site unless a future feature explicitly requires server-side logic.

## Requirements

Before running the project, make sure you have:

- Node.js installed
- npm installed

You can confirm they are available by running:

```bash
node --version
npm --version
```

## Getting Started

Install the project dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

After the server starts, open the local URL shown in your terminal. The default Vite development URL is usually:

```text
http://localhost:5173
```

## Available Scripts

### Run the development server

```bash
npm run dev
```

Starts the Vite development server for local frontend development.

### Build for production

```bash
npm run build
```

Creates a production build of the frontend application.

### Preview or start the production build

```bash
npm run start
```

Runs the built production application using the included server wrapper from the starter template.

### Run TypeScript checks

```bash
npm run typecheck
```

Checks the project for TypeScript errors.

### Run tests

```bash
npm test
```

Runs the Vitest test suite.

### Format the code

```bash
npm run format.fix
```

Formats the project files using Prettier.

## Project Structure

```text
client/
  App.tsx              React app entry and route setup
  global.css           TailwindCSS theme and global styles
  pages/               Page-level route components
  components/ui/       Reusable UI components

shared/
  api.ts               Shared types from the starter template

server/
  index.ts             Starter server wrapper
  routes/              Starter API route examples
```

## Frontend Routing

Routes are configured in:

```text
client/App.tsx
```

Page components live in:

```text
client/pages/
```

To add a new page:

1. Create a new component in `client/pages/`.
2. Import it in `client/App.tsx`.
3. Add a new `<Route />` above the catch-all `*` route.

## Styling

Styling is handled with TailwindCSS. Global theme values and design tokens are configured in:

```text
client/global.css
tailwind.config.ts
```

Reusable UI components are located in:

```text
client/components/ui/
```

## Deployment

Build the project before deployment:

```bash
npm run build
```

This repository is intended to be deployed as a frontend site. Netlify is the preferred deployment target for this project.

## Notes

- Keep new work focused on the frontend unless server-side logic is strictly necessary.
- Do not add API endpoints unless a feature requires private keys, database operations, or other logic that must remain on the server.
- Keep shared UI patterns consistent with the existing React, TailwindCSS, Radix UI, and Lucide setup.
