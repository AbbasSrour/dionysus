import { object, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";
import { WriterSchema } from "./writer.schema";
import Movie from "../entities/movie.entity";
import { Writer } from "../entities/writer.entity";

export const MovieWriterSchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    writer: WriterSchema.shape.body,
  }),
});

export type MovieWriterInput = TypeOf<typeof MovieWriterSchema>["body"];

export type CreateMovieWriterInput = {
  movie: Movie;
  writer: Writer;
};
