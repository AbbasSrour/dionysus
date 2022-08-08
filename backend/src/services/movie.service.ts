import { Movie } from "../../prisma/client";
import { MovieInput } from "../schemas/movie.schema";
import client from "../utils/prisma.util";

export const createMovieService = async (input: MovieInput): Promise<Movie> => {
  return client.movie.create({ data: input });
};

export const getMoviesByName = async (
  name: string
): Promise<Array<Movie> | null> => {
  return client.movie.findMany({
    where: {
      name: {
        contains: name,
      },
    },
  });
};
