# Build stage
FROM node AS builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

# Run stage
FROM node:alpine AS runner

WORKDIR /app

COPY --from=builder /app/app /app

ENTRYPOINT [ "npx", "serve", "-s", "-p", "8080" ]