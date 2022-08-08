import { object, string, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";

export const ServerSchema = object({
  body: object({
    name: string({ required_error: "Name of the server is required" })
      .min(3, "Server name is too short")
      .max(30, "Server length is too long"),
    url: string({ required_error: "Server url is required" }).min(
      3,
      "Server url is to short"
    ),
  }),
});

export type ServerInput = TypeOf<typeof ServerSchema>["body"];

export const MovieServerSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    server: ServerSchema.shape.body,
    url: string({ required_error: "Movie Url is required" }),
  }),
});
export type MovieServerInput = TypeOf<typeof MovieServerSchema>["body"];
