import mongoose from "mongoose";

export async function GET() {
  if (!mongoose.connection.readyState) {
    await mongoose.connect(process.env.MONGODB_URI!);
  }

  return new Response(
    JSON.stringify({
      status: "connected",
      db: mongoose.connection.name,
    }),
    { status: 200 }
  );
}
