import { LanguageInput, MovieLanguagesInput } from "../schemas/language.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createLanguageService = async (input: LanguageInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/languages`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.language;
};

export const getLanguageByNameService = async (name: string) => {
  const response = await got.get(
    `${env.DB_WRAPPER}/api/v1/languages?name=${name}`
  );
  return await JSON.parse(response.body).data.language;
};

export const createMovieLanguageService = async (
  input: MovieLanguagesInput
) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/languages/movie`, {
    json: {
      apikey: env.API_KEY,
      movieId: input.movieId,
      languageId: input.languageId,
    },
  });
  return await JSON.parse(response.body).data.movieLanguage;
};
