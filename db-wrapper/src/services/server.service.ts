import { AppDataSource } from "../utils/data-source.util";
import { ServerInput } from "../schemas/server.schema";
import { Server } from "../entities/server.entity";

const serverRepo = AppDataSource.getRepository(Server);

export const createServerService = async (
  input: ServerInput
): Promise<Server> => {
  const server = AppDataSource.manager.create(Server, input);
  return (await AppDataSource.manager.save(server)) as Server;
};
