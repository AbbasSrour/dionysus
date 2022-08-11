import { GenreInput, MovieGenreInput } from "../schemas/genre.schema";
import { Genre, MovieGenre } from "../../prisma/client";
import client from "../utils/prisma.util";

export const createGenreService = async (input: GenreInput): Promise<Genre> => {
  return client.genre.create({ data: input });
};

export const getGenreByIdService = async (
  genreId: number
): Promise<Genre | null> => {
  return client.genre.findUniqueOrThrow({ where: { genreId } });
};

export const getGenreByNameService = async (
  genreName: string
): Promise<Genre | null> => {
  return client.genre.findUniqueOrThrow({ where: { name: genreName } });
};

export const createMovieGenreService = async (
  input: MovieGenreInput
): Promise<MovieGenre> => {
  const { movieId, genreId } = input;
  return client.movieGenre.create({ data: input });
};
