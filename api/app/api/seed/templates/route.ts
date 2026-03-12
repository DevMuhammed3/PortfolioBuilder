import { NextResponse } from "next/server";
import connectDB from "@/lib/database";
import Template from "@/models/Template";

const SEED_TEMPLATES = [
  {
    title: "modern professional",
    slug: "modern-professional",
    description: "a clean and modern portfolio template perfect for professionals and engineers",
    font: "Inter",
    primaryColor: "#2563eb",
    secondaryColor: "#1e40af",
    premium: false,
    tags: ["modern", "professional", "clean"],
    thumbnail: "https://placehold.co/600x400?text=Modern+Professional",
    status: "active",
  },
  {
    title: "creative split",
    slug: "creative-split",
    description: "a vibrant and creative portfolio template for designers and artists",
    font: "Poppins",
    primaryColor: "#f59e0b",
    secondaryColor: "#d97706",
    premium: false,
    tags: ["creative", "design", "vibrant"],
    thumbnail: "https://placehold.co/600x400?text=Creative+Split",
    status: "active",
  },
  {
    title: "minimalist",
    slug: "minimalist",
    description: "a simple and elegant minimalist portfolio template for architects and senior devs",
    font: "Playfair Display",
    primaryColor: "#000000",
    secondaryColor: "#666666",
    premium: true,
    tags: ["minimalist", "elegant", "simple"],
    thumbnail: "https://placehold.co/600x400?text=Minimalist",
    status: "active",
  },
  {
    title: "bento developer",
    slug: "bento-developer",
    description: "a sleek dark mode bento grid style portfolio template for tech developers",
    font: "Menlo",
    primaryColor: "#10b981",
    secondaryColor: "#059669",
    premium: false,
    tags: ["tech", "developer", "coding", "bento", "darkmode"],
    thumbnail: "https://placehold.co/600x400?text=Bento+Developer",
    status: "active",
  },
];

export async function GET() {
  try {
    await connectDB();

    const results = [];
    for (const t of SEED_TEMPLATES) {
      const doc = await Template.findOneAndUpdate(
        { slug: t.slug },
        { $set: t },
        { upsert: true, new: true, runValidators: true }
      );
      results.push(doc);
    }

    return NextResponse.json({
      success: true,
      message: `Upserted ${results.length} templates successfully`,
      count: results.length,
    });
  } catch (error) {
    console.error("Error seeding templates:", error);
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Failed to seed templates",
      },
      { status: 500 }
    );
  }
}

