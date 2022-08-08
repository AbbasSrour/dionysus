import { object, string, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";

export const ActorSchema = object({
  body: object({
    name: string({ required_error: "Actor name is required" }),
    image: string().optional(),
  }),
});

export type ActorInput = TypeOf<typeof ActorSchema>["body"];

export const MovieCastSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    actor: ActorSchema.shape.body,
    role: string({ required_error: "Role is required" })
      .min(2, "Role name is too short")
      .max(30, "Role is too long"),
  }),
});
export type MovieCastInput = TypeOf<typeof MovieCastSchema>["body"];
