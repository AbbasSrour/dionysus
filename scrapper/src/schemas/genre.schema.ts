import { number, object, string, TypeOf } from "zod";

export const GenreSchema = object({
  body: object({
    name: string({ required_error: "The name of the genre is required" })
      .min(3, "The genre name is too short")
      .max(20, "The genre name is too long"),
  }),
});

export type GenreInput = TypeOf<typeof GenreSchema>["body"];

export const MovieGenreSchema = object({
  body: object({
    movieId: number(),
    genreId: number(),
  }),
});
export type MovieGenreInput = TypeOf<typeof MovieGenreSchema>["body"];
