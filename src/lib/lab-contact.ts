const DEFAULT_LAB_EMAIL = "t-hase@u-fukui.ac.jp";
const DEFAULT_LAB_ADDRESS = "3-9-1 Bunkyo, Fukui, 910-0017";

const PLACEHOLDER_EMAILS = new Set(["contact@example.edu"]);
const PLACEHOLDER_ADDRESSES = new Set(["University campus address", "Your campus address"]);

function resolveContactValue(raw: string | undefined, placeholders: Set<string>, fallback: string): string {
  const value = raw?.trim();
  if (!value || placeholders.has(value)) {
    return fallback;
  }

  return value;
}

export function getLabContact() {
  return {
    email: resolveContactValue(process.env.NEXT_PUBLIC_LAB_EMAIL, PLACEHOLDER_EMAILS, DEFAULT_LAB_EMAIL),
    address: resolveContactValue(process.env.NEXT_PUBLIC_LAB_ADDRESS, PLACEHOLDER_ADDRESSES, DEFAULT_LAB_ADDRESS)
  };
}
