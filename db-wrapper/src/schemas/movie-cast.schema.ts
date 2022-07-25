import { object, string, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";
import { ActorSchema } from "./actor.schema";

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
