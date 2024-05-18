export async function sha256(input: BufferSource) {
  const hashBuffer = await crypto.subtle.digest("SHA-256", input);

  // Convert ArrayBuffer to hex string
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  return hashHex;
}