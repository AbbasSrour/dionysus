import { MovieServerInput, ServerInput } from "../schemas/server.schema";
import { MovieServer, Server } from "../../prisma/client";
import client from "../utils/prisma.util";

export const createServerService = async (
  input: ServerInput
): Promise<Server> => {
  return await client.server.create({ data: input });
};

export const getServerByIdService = async (
  serverId: number
): Promise<Server | null> => {
  return client.server.findUnique({
    where: {
      serverId,
    },
  });
};

export const createMovieServerService = async (
  input: MovieServerInput
): Promise<MovieServer> => {
  const { movie, server, url } = input;
  return await client.movieServer.create({ data: input });
};
