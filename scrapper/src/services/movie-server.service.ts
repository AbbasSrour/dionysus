import { MovieServerInput } from "../schemas/movie-server.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createMovieServerService = async (input: MovieServerInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/movie-servers`, {
    json: {
      apikey: env.API_KEY,
      movie: input.movie,
      server: input.server,
      url: input.url,
    },
  });
  return await JSON.parse(response.body).data.movieServer;
};
