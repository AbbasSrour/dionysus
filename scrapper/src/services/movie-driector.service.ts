import { MovieDirectorInput } from "../schemas/movie-director.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createMovieDirectors = async (input: MovieDirectorInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/movie-directors`, {
    json: {
      apikey: env.API_KEY,
      movie: input.movie,
      director: input.director,
    },
  });
  return JSON.parse(response.body).data.director;
};
