import {
  ActorInput,
  ActorSchema,
  getActorInterface,
  ShowCastInput,
  ShowCastSchema,
} from "../schemas/actor.schema";
import { env } from "../utils/validate-env.util";
import got from "got";

export const createActorService = async (
  input: ActorInput
): Promise<ActorSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/actors`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.actor;
};

export const getActorService = async (
  data: getActorInterface
): Promise<ActorSchema> => {
  const { id, image, name } = data;
  let response;
  if (id)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/actors`, {
      searchParams: { id },
    });
  else if (image && name)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/actors`, {
      searchParams: { name, image },
    });
  // todo customize error
  else throw Error;
  return await JSON.parse(response.body).data.actor;
};

export const createShowCastService = async (
  input: ShowCastInput
): Promise<ShowCastSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/actors/show`, {
    json: {
      apikey: env.API_KEY,
      showId: input.showId,
      actorId: input.actorId,
      role: input.role,
    },
  });
  return JSON.parse(response.body).data.movieCast;
};
