import { MovieCastInput } from "../schemas/movie-cast.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createMovieCastService = async (input: MovieCastInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/movie-cast`, {
    json: {
      apikey: env.API_KEY,
      movie: input.movie,
      actor: input.actor,
      role: input.role,
    },
  });
  return JSON.parse(response.body).data.movieCast;
};
