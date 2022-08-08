import { object, string, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";

export const WriterSchema = object({
  body: object({
    name: string({ required_error: "The name of the writer is required" })
      .min(3, "The writer name is too short")
      .max(30, "The writer name is too long"),
    image: string(),
  }),
});
export type WriterInput = TypeOf<typeof WriterSchema>["body"];

export const MovieWriterSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    writer: WriterSchema.shape.body,
  }),
});
export type MovieWriterInput = TypeOf<typeof MovieWriterSchema>["body"];
