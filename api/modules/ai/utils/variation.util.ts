import crypto from "crypto";

export function pickVariation(
  seed: string,
  variations: string[]
): string {
  const hash = crypto
    .createHash("sha256")
    .update(seed)
    .digest("hex");

  const index =
    parseInt(hash.slice(0, 8), 16) % variations.length;

  return variations[index];
}
