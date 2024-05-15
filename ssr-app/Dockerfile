# Build stage
FROM oven/bun AS builder

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

# Run stage
FROM oven/bun AS runner

WORKDIR /app

COPY --from=builder /app/dist /app

ENTRYPOINT [ "bun", "app.js" ]