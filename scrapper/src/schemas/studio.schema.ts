import { number, object, string, TypeOf } from "zod";

export const StudioSchema = object({
  body: object({
    name: string({
      required_error: "The name of the production company is required",
    })
      .min(3, "The name is too short")
      .max(40, "The name is too long"),
    image: string(),
  }),
});

export type StudioInput = TypeOf<typeof StudioSchema>["body"];

export const MovieStudioSchema = object({
  body: object({
    movieId: number(),
    studioId: number(),
  }),
});
export type MovieStudioInput = TypeOf<typeof MovieStudioSchema>["body"];
