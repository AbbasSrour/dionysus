import { ImdbInput, ImdbSchema } from "../schemas/imdb.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createImdbService = async (
  input: ImdbInput
): Promise<ImdbSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/imdb`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.imdb;
};

export const getImdbService = async (id: string): Promise<ImdbSchema> => {
  const response = await got.get(`${env.DB_WRAPPER}/api/v1/imdb`, {
    searchParams: { id },
  });
  return await JSON.parse(response.body).data.imdb;
};
