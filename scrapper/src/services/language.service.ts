import {
  LanguageInput,
  LanguageSchema,
  ShowLanguageInput,
} from "../schemas/language.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createLanguageService = async (
  input: LanguageInput
): Promise<LanguageSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/languages`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.language;
};

export const getLanguageService = async (
  name?: string,
  id?: number
): Promise<LanguageSchema> => {
  let response;
  if (id)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/languages`, {
      searchParams: { id },
    });
  else if (name)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/languages`, {
      searchParams: { name },
    });
  else throw Error;
  return await JSON.parse(response.body).data.language;
};

export const createShowLanguageService = async (
  input: ShowLanguageInput
): Promise<LanguageSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/languages/show`, {
    json: {
      apikey: env.API_KEY,
      showId: input.showId,
      languageId: input.languageId,
    },
  });
  return await JSON.parse(response.body).data.movieLanguage;
};
