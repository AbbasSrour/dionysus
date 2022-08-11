import { MovieServerInput, ServerInput } from "../schemas/server.schema";
import { MovieServer, Server } from "../../prisma/client";
import client from "../utils/prisma.util";

export const createServerService = async (
  input: ServerInput
): Promise<Server> => {
  return client.server.create({ data: input });
};

export const getServerByIdService = async (
  serverId: number
): Promise<Server | null> => {
  return client.server.findUniqueOrThrow({
    where: {
      serverId,
    },
  });
};

export const getServerByNameService = async (
  serverName: string
): Promise<Server | null> => {
  return client.server.findUniqueOrThrow({ where: { name: serverName } });
};

export const createMovieServerService = async (
  input: MovieServerInput
): Promise<MovieServer> => {
  const { movieId, serverId, url } = input;
  return client.movieServer.create({ data: input });
};
