import { number, object, string, TypeOf } from "zod";

export const DirectorSchema = object({
  body: object({
    name: string({ required_error: "The director name must be included" })
      .min(3, "The name must be larger than 3 characters")
      .max(30, "The name must be shorter than 30 characters"),
    image: string(),
  }),
});

export type DirectorInput = TypeOf<typeof DirectorSchema>["body"];

export const MovieDirectorSchema = object({
  body: object({
    movieId: number(),
    directorId: number(),
  }),
});
export type MovieDirectorInput = TypeOf<typeof MovieDirectorSchema>["body"];
