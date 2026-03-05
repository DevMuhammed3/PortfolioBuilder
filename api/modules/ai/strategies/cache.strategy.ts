import { getDb } from "@/lib/mongo";
import { createHash } from "../utils/hash.util";

export async function getCachedAIResult(
  userId: string,
  type: string,
  payload: unknown
) {
  const db = await getDb();
  const hash = createHash(payload);

  return db.collection("ai_cache").findOne({
    userId,
    type,
    hash,
  });
}

export async function saveAIResultToCache(
  userId: string,
  type: string,
  payload: unknown,
  content: string
) {
  const db = await getDb();
  const hash = createHash(payload);

  await db.collection("ai_cache").insertOne({
    userId,
    type,
    hash,
    content,
    createdAt: new Date(),
  });
}
