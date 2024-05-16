# Build stage 1
FROM rust:bookworm AS builder1

WORKDIR /app

COPY . .

RUN cargo build --release

# Build stage 2
FROM oven/bun as builder2

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

# Final run stage
FROM gcr.io/distroless/cc-debian12 AS runner

WORKDIR /app

COPY --from=builder1 /app/target/release/htmx-csr /app/htmx-csr
COPY --from=builder2 /app/assets /app/assets
COPY --from=builder2 /app/public /app/public

CMD ["/app/htmx-csr"]