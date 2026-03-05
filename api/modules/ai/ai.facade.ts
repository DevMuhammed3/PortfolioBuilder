import { DeterministicTemplateEngine } from "./deterministic.engine";
import { AIGenerateRequest, AIGenerateResponse } from "./ai.types";
import {
  getCachedAIResult,
  saveAIResultToCache,
} from "./strategies/cache.strategy";

export class AIFacade {

  private engine = new DeterministicTemplateEngine();

  async generate<T>(
    request: AIGenerateRequest<T>
  ): Promise<AIGenerateResponse> {

    // 1️⃣ Check cache
    const cached = await getCachedAIResult(
      request.userId,
      request.type,
      request.payload
    );

    if (cached) {
      return {
        content: cached.content,
        version: "deterministic-v1",
        cached: true,
      };
    }

    // 2️⃣ Generate
    const content = this.engine.generate(
      request.type,
      request.payload,
      request.tone
    );

    // 3️⃣ Save cache
    await saveAIResultToCache(
      request.userId,
      request.type,
      request.payload,
      content
    );

    return {
      content,
      version: "deterministic-v1",
      cached: false,
    };
  }
}
