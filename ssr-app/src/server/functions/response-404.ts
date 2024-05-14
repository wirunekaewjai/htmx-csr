export function response404() {
  return new Response(null, {
    status: 404,
  });
}