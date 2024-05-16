FROM oven/bun

WORKDIR /app

COPY . .

RUN bun install
RUN bun run build

ENTRYPOINT [ "bun", "start" ]