import { object, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";
import { DirectorSchema } from "./director.schema";

export const MovieDirectorSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    director: DirectorSchema.shape.body,
  }),
});

export type MovieDirectorInput = TypeOf<typeof MovieDirectorSchema>["body"];
