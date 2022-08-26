import { Movie } from "../../prisma/client";
import { MovieInput } from "../schemas/movie.schema";
import client from "../utils/prisma.util";

export const createMovieService = async (input: MovieInput): Promise<Movie> => {
  return client.movie.create({ data: input });
};
