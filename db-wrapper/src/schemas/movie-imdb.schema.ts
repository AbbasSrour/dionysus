import { object, TypeOf } from "zod";
import { ImdbSchema } from "./imdb.schema";
import { MovieSchema } from "./movie.schema";

export const MovieImdbSchema = object({
  body: object({
    imdb: ImdbSchema.shape.body,
    movie: MovieSchema.shape.body,
  }),
});

export type MovieImdbInput = TypeOf<typeof MovieImdbSchema>["body"];
