// import { number, object, string, TypeOf } from "zod";
//
// export const LanguageSchema = object({
//   body: object({
//     name: string({ required_error: "The language name is required" })
//       .min(3, "The language name is too short")
//       .max(20, "The language name is too long"),
//   }),
// });
//
// export type LanguageInput = TypeOf<typeof LanguageSchema>["body"];
//
// export const MovieLanguageSchema = object({
//   body: object({
//     movieId: number(),
//     languageId: number(),
//   }),
// });
// export type MovieLanguagesInput = TypeOf<typeof MovieLanguageSchema>["body"];

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
