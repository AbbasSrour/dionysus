import { MovieStudioInput, StudioInput } from "../schemas/studio.schema";
import { MovieStudio, Studio } from "../../prisma/client";
import client from "../utils/prisma.util";

export const createStudioService = async (
  input: StudioInput
): Promise<Studio> => {
  return client.studio.create({ data: input });
};

export const getStudioByIdService = async (
  id: number
): Promise<Studio | null> => {
  return client.studio.findUniqueOrThrow({ where: { studioId: id } });
};

export const getStudioByNameService = async (
  name: string
): Promise<Studio | null> => {
  return client.studio.findUniqueOrThrow({ where: { name } });
};

export const createMovieStudioService = async (
  input: MovieStudioInput
): Promise<MovieStudio> => {
  const { movieId, studioId } = input;
  return client.movieStudio.create({ data: input });
};
