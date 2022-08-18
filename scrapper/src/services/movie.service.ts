import {
  GetMovieInterface,
  MovieInput,
  MovieSchema,
} from "../schemas/movie.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createMovieService = async (
  input: MovieInput
): Promise<MovieSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/movies`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.movie;
};

export const getMovieService = async (
  input: GetMovieInterface
): Promise<MovieSchema> => {
  const { movieId, showId } = input;
  let response;
  if (movieId)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/movies`, {
      searchParams: { movieId },
    });
  else if (showId)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/movies`, {
      searchParams: { showId },
    });
  else throw Error;
  return await JSON.parse(response.body).data.movie;
};
