import { NextResponse } from "next/server";
import { projectTemplate } from "@/modules/ai/templates/project.template";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!body.title || !body.techStack) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const content = projectTemplate(body, body.tone);

    return NextResponse.json({
      content,
      version: "deterministic-v2",
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
