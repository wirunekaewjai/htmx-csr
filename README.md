try to intercept htmx request to handle on client-side

# demo
https://htmx-csr.fly.dev

- albums page is supported to render on client-side and server-side.
- counter button will +/- on client-side and store value in querystring

## dev command
- bun install
- bun run dev

## release command
- bun run build
- bun start

## "views" folder
- used by cli (read all files and generate to src/client/views/*.tsx and src/server/views/*.rs)
- stricted tsx (no import, no export, just interfaces, args and jsx)
