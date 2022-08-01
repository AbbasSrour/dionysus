import { GenreInput } from "../schemas/genre.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createGenreService = async (input: GenreInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/genres`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.genre;
};
