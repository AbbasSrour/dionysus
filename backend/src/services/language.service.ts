import { Language, MovieLanguage } from "../../prisma/client";
import { LanguageInput, MovieLanguagesInput } from "../schemas/language.schema";
import client from "../utils/prisma.util";

export const createLanguageService = async (
  input: LanguageInput
): Promise<Language> => {
  return client.language.create({ data: input });
};

export const getLanguageByIdService = async (id: number) => {
  return client.language.findUniqueOrThrow({ where: { languageId: id } });
};

export const getLanguageByNameService = async (name: string) => {
  return client.language.findUniqueOrThrow({ where: { name } });
};

export const createMovieLanguageService = async (
  input: MovieLanguagesInput
): Promise<MovieLanguage> => {
  const { movieId, languageId } = input;
  return client.movieLanguage.create({ data: input });
};

export const getMovieLanguageService = async (
  movieId: number,
  languageId: number
): Promise<MovieLanguage | null> => {
  return client.movieLanguage.findUniqueOrThrow({
    where: { movieId_languageId: { movieId: movieId, languageId: languageId } },
  });
};
