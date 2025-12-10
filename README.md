# Nodebase

An open-source, self-hostable automation platform inspired by N8N and Zapier. Built on [TanStack Start](https://tanstack.com/start) with a focus on modern software engineering practices, this project provides a solid foundation for creating powerful workflows.

## Tech Stack

- **Framework**: [TanStack Start](https://tanstack.com/start)
- **Backend**: [tRPC](https://trpc.io/), [Better Auth](https://better-auth.dev/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **UI**: [React](https://react.dev/), [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **Tooling**: [TypeScript](https://www.typescriptlang.org/), [Biome](https://biomejs.dev/) for formatting and linting

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/)
- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1.  **Install dependencies:**
    ```bash
    bun install
    ```

2.  **Set up environment variables:**

    Copy the `.env.example` file to a new `.env` file and update the `DATABASE_URL` with your PostgreSQL connection string.
    ```bash
    cp .env.example .env
    ```

3.  **Run database migrations:**
    ```bash
    bun run db:migrate:dev
    ```

4.  **Run the development server:**
    ```bash
    bun run dev
    ```

The application will be available at `http://localhost:3000`.

## Available Scripts

- `bun run dev`: Starts the development server.
- `bun run build`: Builds the application for production.
- `bun run start`: Starts the production server.
- `bun run test`: Runs tests with Vitest.
- `bun run lint`: Lints the codebase with Biome.
- `bun run db:studio`: Opens Prisma Studio to view and manage your data.
- `bun run db:seed`: Seeds the database with initial data.