import { object, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";
import { LanguageSchema } from "./language.schema";
import Movie from "../entities/movie.entity";
import Language from "../entities/language.entity";

export const MovieLanguagesSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    language: LanguageSchema.shape.body,
  }),
});

export type MovieLanguagesInput = TypeOf<typeof MovieLanguagesSchema>["body"];