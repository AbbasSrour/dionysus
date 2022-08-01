import { number, object, string, TypeOf } from "zod";

export const MovieSchema = object({
  body: object({
    name: string({
      required_error: "Movie name is required",
    }),
    releaseYear: number({
      required_error: "The year the movie was released in is required",
    }),
    poster: string(),
    movieLength: number(),
    cover: string(),
    summary: string(),
    pgRating: string(),
    budget: number(),
    revenue: number(),
    trailer: string(),
  }),
});

export type MovieInput = TypeOf<typeof MovieSchema>["body"];
