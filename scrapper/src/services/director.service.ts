import { DirectorInput } from "../schemas/director.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createDirectorService = async (input: DirectorInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/directors`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return JSON.parse(response.body).data.director;
};
