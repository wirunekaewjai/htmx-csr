export function suspense(fragment: string, loading: string) {
  return (
    <div
      hx-get={fragment}
      hx-trigger="load"
      hx-swap="outerHTML"
    >
      {loading}
    </div>
  );
}