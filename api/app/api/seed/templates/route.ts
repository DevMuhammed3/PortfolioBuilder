import { NextResponse } from "next/server";
import connectDB from "@/lib/database";
import Template from "@/models/Template";

export async function GET() {
  try {
    await connectDB();

    // Check if templates already exist
    const count = await Template.countDocuments();

    if (count === 0) {
      const templates = [
        {
          title: "Modern Professional",
          description: "A clean and modern portfolio template perfect for professionals",
          font: "Inter",
          primaryColor: "#2563eb",
          secondaryColor: "#1e40af",
          premium: false,
          tags: ["modern", "professional", "clean"],
          thumbnail: "https://via.placeholder.com/600x400?text=Modern+Professional",
          status: "active",
        },
        {
          title: "Creative Design",
          description: "A vibrant and creative portfolio template for designers and artists",
          font: "Poppins",
          primaryColor: "#f59e0b",
          secondaryColor: "#d97706",
          premium: true,
          tags: ["creative", "design", "vibrant"],
          thumbnail: "https://via.placeholder.com/600x400?text=Creative+Design",
          status: "active",
        },
        {
          title: "Minimalist",
          description: "A simple and elegant minimalist portfolio template",
          font: "Playfair Display",
          primaryColor: "#000000",
          secondaryColor: "#666666",
          premium: true,
          tags: ["minimalist", "elegant", "simple"],
          thumbnail: "https://via.placeholder.com/600x400?text=Minimalist",
          status: "inactive",
        },
        {
          title: "Tech Developer",
          description: "A sleek portfolio template designed for tech professionals and developers",
          font: "Courier New",
          primaryColor: "#10b981",
          secondaryColor: "#059669",
          premium: false,
          tags: ["tech", "developer", "coding"],
          thumbnail: "https://via.placeholder.com/600x400?text=Tech+Developer",
          status: "inactive",
        },
      ];

      const result = await Template.insertMany(templates);
      return NextResponse.json({
        success: true,
        message: `Inserted ${result.length} templates`,
        count: result.length,
      });
    }

    return NextResponse.json({
      success: true,
      message: `Templates already exist (${count} found)`,
      count,
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
