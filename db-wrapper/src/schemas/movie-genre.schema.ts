import { object, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";
import { GenreSchema } from "./genre.schema";

export const MovieGenreSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    genre: GenreSchema.shape.body,
  }),
});

export type MovieGenreInput = TypeOf<typeof MovieGenreSchema>["body"];
