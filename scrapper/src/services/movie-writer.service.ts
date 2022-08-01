import { MovieWriterInput } from "../schemas/movie-writer.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createMovieWriterService = async (input: MovieWriterInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/movie-writers`, {
    json: {
      apikey: env.API_KEY,
      movie: input.movie,
      writer: input.writer,
    },
  });
  return await JSON.parse(response.body).data.movieWriter;
};
