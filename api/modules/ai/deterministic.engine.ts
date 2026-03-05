import { projectTemplate } from "./templates/project.template";

export class DeterministicTemplateEngine {

  generate(type: string, payload: any, tone?: string): string {

    switch (type) {
      case "project":
        return projectTemplate(payload, tone as any);

      default:
        throw new Error("Unsupported generation type");
    }
  }
}
