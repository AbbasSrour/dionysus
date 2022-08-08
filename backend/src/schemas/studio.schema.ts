import { object, string, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";

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
    movie: MovieSchema.shape.body,
    studio: StudioSchema.shape.body,
  }),
});
export type MovieStudioInput = TypeOf<typeof MovieStudioSchema>["body"];
