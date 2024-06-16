import { randomBytes } from "crypto";

const BASE_SAFE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!-_.'()";
const STRICT_ADDITIONS = "*/";

export type Options = Partial<{
  replacement: string;
  strict: boolean;
}>;

export function sanitize(key: string, options?: Options): string {
  if (typeof key !== "string") throw new Error("key must be a string");

  const replacement = options?.replacement ?? "";

  const safeChars = new Set(BASE_SAFE_CHARS + (options?.strict ? STRICT_ADDITIONS : ""));

  let sanitizedKey = "";

  // Start from index 1 if key starts with '/'
  let startIndex = key.startsWith("/") ? 1 : 0;

  for (let i = startIndex; i < key.length; i++) {
    const char = key[i] || "";
    sanitizedKey += safeChars.has(char) ? char : replacement;
  }

  return sanitizedKey || randomBytes(10).toString("hex");
}