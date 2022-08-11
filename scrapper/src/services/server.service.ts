import { MovieServerInput, ServerInput } from "../schemas/server.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createServerService = async (input: ServerInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/servers`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.server;
};

export const getServerService = async (name: string) => {
  const response = await got.get(
    `${env.DB_WRAPPER}/api/v1/servers?name=${name}`
  );
  return await JSON.parse(response.body).data.server;
};

export const createMovieServerService = async (input: MovieServerInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/servers/movie`, {
    json: {
      apikey: env.API_KEY,
      movieId: input.movieId,
      serverId: input.serverId,
      url: input.url,
    },
  });
  return await JSON.parse(response.body).data.movieServer;
};
