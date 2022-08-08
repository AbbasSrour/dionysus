import { Language, MovieLanguage } from "../../prisma/client";
import { LanguageInput, MovieLanguagesInput } from "../schemas/language.schema";
import client from "../utils/prisma.util";

export const createLanguageService = async (
  input: LanguageInput
): Promise<Language> => {
  return await client.language.create({ data: input });
};

export const createMovieLanguageService = async (
  input: MovieLanguagesInput
): Promise<MovieLanguage> => {
  const { movie, language } = input;
  return await client.movieLanguage.create({ data: input });
};
