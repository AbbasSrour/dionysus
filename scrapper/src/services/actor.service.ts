import { ActorInput } from "../schemas/actor.schema";
import { env } from "../utils/validate-env.util";
import got from "got";

export const createActorService = async (input: ActorInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/actors`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return JSON.parse(response.body).data.actor;
};
