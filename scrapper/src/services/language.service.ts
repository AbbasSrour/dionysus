import { LanguageInput } from "../schemas/language.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createLanguageSerivce = async (input: LanguageInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/languages`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return JSON.parse(response.body).data.language;
};
