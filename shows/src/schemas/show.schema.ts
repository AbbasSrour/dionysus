import {number, object, string, TypeOf} from "zod";

export const ShowSchema = object({
  body: object({
    name: string({
      required_error: "Movie name is required",
    }),
    releaseYear: number({
      required_error: "The year the movie was released in is required",
    }),
    summary: string(),
    pgRating: string(),
    budget: number(),
    revenue: number(),
  }),
});

export type ShowInput = TypeOf<typeof ShowSchema>["body"];
