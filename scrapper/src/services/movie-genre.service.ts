import { MovieGenreInput } from "../schemas/movie-genre.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createMovieGenreService = async (input: MovieGenreInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/movie-genres`, {
    json: {
      apikey: env.API_KEY,
      movie: input.movie,
      genre: input.genre,
    },
  });
  return await JSON.parse(response.body).data.movieGenre;
};
