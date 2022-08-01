import { ServerInput } from "../schemas/server.schema";
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
