# Movie Library

A personal catalog for movies and television series. The project is organized as a
Spring Boot backend, a React frontend, and a PostgreSQL database. This first
increment provides the local development substrate; media persistence and user
workflows are added in the following increments.

## Prerequisites

- Java 21
- Gradle 8.14 or newer
- Node.js 20 or newer
- Docker with Docker Compose

## Start locally

1. Create local environment configuration (the committed defaults are safe for
   local development only):

   ```bash
   cp .env.example .env
   ```

2. Start PostgreSQL and wait for it to become healthy:

   ```bash
   docker compose up -d
   docker compose ps
   ```

3. In a second terminal, start the API:

   ```bash
   cd backend
   gradle bootRun
   ```

4. In a third terminal, install frontend dependencies and start Vite:

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

The application is available at <http://localhost:5173>. Vite proxies `/api` and
`/actuator` to the API at <http://localhost:8080>. The health endpoint is
<http://localhost:8080/actuator/health>, OpenAPI JSON is at
<http://localhost:8080/v3/api-docs>, and Swagger UI is at
<http://localhost:8080/swagger-ui.html>.

Flyway runs automatically when the backend starts. Hibernate validates the
Flyway-managed schema and never creates or updates tables.

## Configuration

Docker Compose reads `POSTGRES_DB`, `POSTGRES_USER`, `POSTGRES_PASSWORD`, and
`POSTGRES_PORT` from `.env`. The backend uses `DB_HOST`, `DB_PORT`, `DB_NAME`,
`DB_USER`, and `DB_PASSWORD`; each has a matching local default in
`application.yaml`. Override these environment variables for a non-default
database. Do not use the local password outside a private development machine.

## Checks

```bash
cd backend && gradle test build
cd frontend && npm install && npm run lint && npm test -- --run && npm run build
docker compose config --quiet
```

Stop the database with `docker compose down`. Add `--volumes` only when you
intentionally want to delete all local catalog data.
