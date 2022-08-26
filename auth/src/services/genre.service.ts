import { GenreInput, ShowGenreInput } from "../schemas/genre.schema";
import { Genre, ShowGenre } from "../../prisma/client";
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

export const createShowGenreService = async (
  input: ShowGenreInput
): Promise<ShowGenre> => {
  const { showId, genreId } = input;
  return client.showGenre.create({ data: input });
};

export const getShowGenresService = async (
  showId: number
): Promise<Array<ShowGenre>> => {
  return client.showGenre.findMany({ where: { showId: showId } });
};
