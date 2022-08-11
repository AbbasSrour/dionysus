import { ActorInput, MovieCastInput } from "../schemas/actor.schema";
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

interface getActorInterface {
  name?: string;
  image?: string;
  id?: number;
}

export const getActorService = async (data: getActorInterface) => {
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
  else throw Error;
  return await JSON.parse(response.body).data.actor;
};

export const createMovieCastService = async (input: MovieCastInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/actors/movie`, {
    json: {
      apikey: env.API_KEY,
      movieId: input.movieId,
      actorId: input.actorId,
      role: input.role,
    },
  });
  return JSON.parse(response.body).data.movieCast;
};
