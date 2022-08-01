import { MovieLanguagesInput } from "../schemas/movie-langauges.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createMovieLanguageService = async (
  input: MovieLanguagesInput
) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/movie-languages`, {
    json: {
      apikey: env.API_KEY,
      movie: input.movie,
      language: input.language,
    },
  });
  return await JSON.parse(response.body).data.movieLanguage;
};
