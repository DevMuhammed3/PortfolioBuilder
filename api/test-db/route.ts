import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongo";

export async function GET() {
  const db = await getDb();
  const collections = await db.listCollections().toArray();

  return NextResponse.json({
    success: true,
    collections,
  });
}
