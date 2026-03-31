export const SESSION_COOKIE = "lab_admin_session";

function getSecret(): string {
  return process.env.ADMIN_SECRET || "development-secret-change-me";
}

function toBase64Url(bytes: Uint8Array): string {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sign(username: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );

  const signature = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(username));
  return toBase64Url(new Uint8Array(signature));
}

export async function createSessionToken(username: string): Promise<string> {
  return `${username}.${await sign(username)}`;
}

export async function verifySessionToken(token?: string): Promise<boolean> {
  if (!token || !token.includes(".")) {
    return false;
  }

  const [username, signature] = token.split(".");
  if (!username || !signature) {
    return false;
  }

  const expected = await sign(username);
  return signature === expected;
}
