## 🎲 Prerequisites

You must have installed:

- Nodejs and Pnpm
- Docker and docker compose

## ⬇ Getting started

1. Clone the repository and enter into it;
2. Create a postgres instance with docker compose;
3. Execute the migration scripts;
4. Install the server dependencies;
5. Run the server.

```bash
# (1)
git clone https://github.com/kauefraga/crud-koa

# (2)
docker-compose up -d # Remember: inside the root folder

# (3)
pnpm migrations && NODE_ENV=development pnpm tsx src/infra/migrations/insert-some-people.ts

# (4)
pnpm i --frozen-lockfile

# (5)
pnpm dev
```

## 🔐 Environment Variables

- `PORT`: the http server port number. Default: 3333.
- `DATABASE_URL`: the database connection string.

## 🐳 Postgres Database

We are using Docker compose with the [bitnami/postgres](https://hub.docker.com/r/bitnami/postgresql) image.

## 🛠 Dependencies

Listing the used tools and the reason i chose them.

- [Typescript](https://www.typescriptlang.org) - The used programming language. It is a superset of Javascript and has a couple of useful features such as types.
- [Tsx](http://npm.im/tsx) - Node.js enhanced with esbuild to run TypeScript & ESM files.
- [Tsup](http://npm.im/tsup) - Bundle your TypeScript library with no config, powered by esbuild.
- [Koa](http://npm.im/koa) - Next generation web framework for Node.js.
- [Ava](http://npm.im/ava) - Tiny test runner.
- [Postgres](http://npm.im/postgres) - A Postgres client for Node.js.
- [Pino](https://github.com/pinojs/pino/blob/HEAD/docs/web.md#koa) - Very low overhead Node.js logger.
- [Xo](https://npm.im/xo) - JavaScript/TypeScript linter (ESLint wrapper) with great defaults.
