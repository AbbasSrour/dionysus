import { object, string, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";

export const LanguageSchema = object({
  body: object({
    name: string({ required_error: "The language name is required" })
      .min(3, "The language name is too short")
      .max(20, "The language name is too long"),
  }),
});

export type LanguageInput = TypeOf<typeof LanguageSchema>["body"];

export const MovieLanguageSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    language: LanguageSchema.shape.body,
  }),
});
export type MovieLanguagesInput = TypeOf<typeof MovieLanguageSchema>["body"];
