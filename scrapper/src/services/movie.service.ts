import { MovieInput } from "../schemas/movie.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createMovieService = async (input: MovieInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/movies`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.movie;
};
