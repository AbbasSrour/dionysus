import { ActorInput, MovieCastInput } from "../schemas/actor.schema";
import client from "../utils/prisma.util";
import { Actor, MovieCast } from "../../prisma/client";

export const createActorService = async (input: ActorInput): Promise<Actor> => {
  return client.actor.create({
    data: { ...input },
  });
};

export const getActorByIdService = async (
  id: number
): Promise<Actor | null> => {
  return client.actor.findUnique({
    where: {
      actorId: id,
    },
  });
};

export const createMovieCastService = async (
  input: MovieCastInput
): Promise<MovieCast> => {
  const { actor, role, movie } = input;
  return client.movieCast.create({
    data: {
      ...input,
    },
  });
};
