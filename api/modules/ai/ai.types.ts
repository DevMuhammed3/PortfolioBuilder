export type AIGenerationType =
  | "project"
  | "experience"
  | "profile";

export type AITone =
  | "professional"
  | "technical"
  | "confident";

export interface AIGenerateRequest<T> {
  userId: string;
  type: AIGenerationType;
  payload: T;
  tone?: AITone;
}

export interface AIGenerateResponse {
  content: string;
  version: string;
  cached: boolean;
}
