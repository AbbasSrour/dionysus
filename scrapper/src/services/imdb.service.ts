import { ImdbInput } from "../schemas/imdb.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createImdbService = async (input: ImdbInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/imdb`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return JSON.parse(response.body).data.imdb;
};
