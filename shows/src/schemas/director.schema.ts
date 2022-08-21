import {number, object, string, TypeOf} from "zod";

export const DirectorSchema = object({
  body: object({
    name: string({ required_error: "The director name must be included" })
      .min(3, "The name must be larger than 3 characters")
      .max(30, "The name must be shorter than 30 characters"),
    image: string().optional(),
  }),
});

export type DirectorInput = TypeOf<typeof DirectorSchema>["body"];

export const ShowDirectorSchema = object({
  body: object({
    showId: number(),
    directorId: number(),
  }),
});
export type ShowDirectorInput = TypeOf<typeof ShowDirectorSchema>["body"];
