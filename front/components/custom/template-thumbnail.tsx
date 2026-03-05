"use client";

import Image from "next/image";
import { Template } from "@/lib/services/templates-services";

export default function TemplateThumbnail({
  template,
}: {
  template: Template;
}) {
  return (
    <div className="aspect-video rounded-t-lg relative overflow-hidden">
      <Image
        src={`/templates/${template.slug}.png`}
        alt={template.title}
        fill
        className="object-cover"
      />
    </div>
  );
}
