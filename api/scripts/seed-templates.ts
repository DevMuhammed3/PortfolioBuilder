import connectDB from "@/lib/database";
import Template from "@/models/Template";

async function seedTemplates() {
  try {
    await connectDB();

    // Check if templates already exist
    const count = await Template.countDocuments();
    console.log(`Found ${count} templates`);

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
          premium: false,
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
          status: "active",
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
          status: "active",
        },
      ];

      await Template.insertMany(templates);
      console.log("✅ Inserted 4 templates successfully");
    } else {
      console.log("✅ Templates already exist, skipping seeding");
    }

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding templates:", error);
    process.exit(1);
  }
}

seedTemplates();
