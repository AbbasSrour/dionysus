import { object, string, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";

export const MovieServerSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    server: MovieSchema.shape.body,
    url: string({ required_error: "Movie Url is required" }),
  }),
});

export type MovieServerInput = TypeOf<typeof MovieServerSchema>["body"];
