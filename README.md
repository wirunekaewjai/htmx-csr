try to intercept htmx request to handle client-side routing

# demo
https://htmx-csr.fly.dev

- albums page is supported to render on client-side and server-side.
- counter button will +/- on client-side and store value in querystring

## dev command
bun install
bun run dev

## release command
bun run build
bun start