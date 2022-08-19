import { BaseSchema } from "./base.schema";

export interface LanguageInput {
  name: string;
}

export interface LanguageSchema extends LanguageInput, BaseSchema {
  languageId: number;
}

export interface ShowLanguageInput {
  languageId: number;
  showId: number;
}

export interface ShowLanguageSchema extends BaseSchema, ShowLanguageInput {}
