export function html(slots?: {
  head?: string;
  body?: string;
}) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" sizes="any" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/assets/style.css" />

        {slots?.head}

        <script defer src="https://unpkg.com/htmx.org@1.9.12/dist/htmx.min.js"></script>
        <script defer src="https://unpkg.com/htmx.org@1.9.12/dist/ext/head-support.js"></script>
        <script defer type="module" src="/assets/app.js"></script>
      </head>
      <body hx-boost="true" hx-ext="head-support">
        {slots?.body}
      </body>
    </html>
  );
}