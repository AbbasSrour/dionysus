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
  return client.actor.findUniqueOrThrow({
    where: {
      actorId: id,
    },
  });
};

export const getActorByNameAndImageService = async (
  name: string,
  image: string
): Promise<Actor | any> => {
  return client.actor.findUniqueOrThrow({
    where: { name_image: { name, image } },
  });
};

export const createMovieCastService = async (
  input: MovieCastInput
): Promise<MovieCast> => {
  const { actorId, role, movieId } = input;
  return client.movieCast.create({
    data: {
      actorId,
      movieId,
      role,
    },
  });
};
