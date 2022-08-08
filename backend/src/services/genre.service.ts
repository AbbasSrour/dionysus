import { GenreInput, MovieGenreInput } from "../schemas/genre.schema";
import { Genre, MovieGenre } from "../../prisma/client";
import client from "../utils/prisma.util";

export const createGenreService = async (input: GenreInput): Promise<Genre> => {
  return await client.genre.create({ data: input });
};

export const getGenreByIdService = async (
  genreId: number
): Promise<Genre | null> => {
  return await client.genre.findUnique({ where: { genreId } });
};

export const createMovieGenreService = async (
  input: MovieGenreInput
): Promise<MovieGenre> => {
  const { movie, genre } = input;
  return await client.movieGenre.create({ data: input });
};
