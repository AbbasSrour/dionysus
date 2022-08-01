import { object, TypeOf } from "zod";
import { ImdbSchema } from "./imdb.schema";
import { MovieSchema } from "./movie.schema";
import Imdb from "../entities/imdb.entity";
import Movie from "../entities/movie.entity";

export const MovieImdbSchema = object({
  body: object({
    imdb: ImdbSchema.shape.body,
    movie: MovieSchema.shape.body,
  }),
});

export type MovieImdbInput = TypeOf<typeof MovieImdbSchema>["body"];
