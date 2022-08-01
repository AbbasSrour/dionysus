import { object, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";
import { WriterSchema } from "./writer.schema";

export const MovieWriterSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    writer: WriterSchema.shape.body,
  }),
});

export type MovieWriterInput = TypeOf<typeof MovieWriterSchema>["body"];
