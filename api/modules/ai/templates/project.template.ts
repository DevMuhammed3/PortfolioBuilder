import { AITone } from "../ai.types";
import { pickVariation } from "../utils/variation.util";

interface ProjectPayload {
  title: string;
  techStack: string[];
  impact?: string;
  challenges?: string;
}

type TemplateStrategy = (data: ProjectPayload) => string;

const strategies: Record<AITone, TemplateStrategy> = {
  professional: (data) => {
    const intro = pickVariation(
      data.title,
      [
        `Built ${data.title}`,
        `Developed ${data.title}`,
        `Engineered ${data.title}`,
        `Implemented ${data.title}`,
      ]
    );

    return `
${intro} using ${data.techStack.join(", ")}, ensuring reliability and maintainable architecture.
${data.impact ? `Achieved ${data.impact}.` : ""}
    `;
  },

  technical: (data) => {
    const intro = pickVariation(
      data.title,
      [
        `Architected and implemented ${data.title}`,
        `Designed and developed ${data.title}`,
        `Engineered a scalable ${data.title}`,
      ]
    );

    return `
${intro} leveraging ${data.techStack.join(", ")}.
Focused on performance optimization and clean architecture principles.
${data.challenges ? `Resolved technical challenges including ${data.challenges}.` : ""}
${data.impact ? `Delivered measurable outcomes such as ${data.impact}.` : ""}
    `;
  },

  confident: (data) => {
    const intro = pickVariation(
      data.title,
      [
        `Successfully built ${data.title}`,
        `Delivered ${data.title}`,
        `Led development of ${data.title}`,
      ]
    );

    return `
${intro} using ${data.techStack.join(", ")}.
Overcame engineering obstacles and delivered strong business value.
${data.impact ? `Resulted in ${data.impact}.` : ""}
    `;
  },
};

export function projectTemplate(
  data: ProjectPayload,
  tone: AITone = "professional"
): string {
  const strategy = strategies[tone] || strategies.professional;
  return strategy(data).trim();
}
