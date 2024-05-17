// AUTO GENERATED @ 2024-05-17T16:46:47.978Z
export interface DocProps {
  content: string;
  title: string;
}

export function doc(props: DocProps) {
  return `<html lang="en"><head><meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><link rel="icon" sizes="any" type="image/x-icon" href="/favicon.ico" /><link rel="stylesheet" href="/assets/style.css" /><title>${props.title}</title><script defer src="https://unpkg.com/htmx.org@1.9.12/dist/htmx.min.js"></script><script defer type="module" src="/assets/app.js"></script></head><body>${props.content}</body></html>`;
}