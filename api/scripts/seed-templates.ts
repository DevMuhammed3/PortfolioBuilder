import connectDB from "@/lib/database";
import Template from "@/models/Template";

async function seedTemplates() {
  try {
    await connectDB();

    console.log("Cleaning existing templates...");
    await Template.deleteMany({});
    
    console.log("Seeding fresh set of 4 templates...");
    const templates = [
      {
        title: "Modern Professional",
        slug: "modern-professional",
        description: "A clean and modern portfolio template perfect for professionals and engineers",
        font: "Inter",
        primaryColor: "#2563eb",
        secondaryColor: "#1e40af",
        premium: false,
        tags: ["modern", "professional", "clean"],
        thumbnail: "/images/templates/modern-professional.png",
        status: "active",
      },
      {
        title: "Creative Split",
        slug: "creative-split",
        description: "A vibrant and creative portfolio template for designers and artists",
        font: "Poppins",
        primaryColor: "#f59e0b",
        secondaryColor: "#d97706",
        premium: false,
        tags: ["creative", "design", "vibrant"],
        thumbnail: "/images/templates/creative-split.png",
        status: "active",
      },
      {
        title: "Minimalist",
        slug: "minimalist",
        description: "A simple and elegant minimalist portfolio template for architects and senior devs",
        font: "Playfair Display",
        primaryColor: "#000000",
        secondaryColor: "#666666",
        premium: true,
        tags: ["minimalist", "elegant", "simple"],
        thumbnail: "/images/templates/minimalist.png",
        status: "active",
      },
      {
        title: "Bento Developer",
        slug: "bento-developer",
        description: "A sleek, dark mode bento grid style portfolio template for tech developers",
        font: "Menlo",
        primaryColor: "#10b981",
        secondaryColor: "#059669",
        premium: false,
        tags: ["tech", "developer", "coding", "bento", "darkmode"],
        thumbnail: "/images/templates/bento-developer.png",
        status: "active",
      },
    ];

    await Template.insertMany(templates);
    console.log("✅ Inserted 4 high-quality templates successfully");

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding templates:", error);
    process.exit(1);
  }
}

seedTemplates();
