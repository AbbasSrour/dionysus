import { MovieStudioInput, StudioInput } from "../schemas/studio.schema";
import { MovieStudio, Studio } from "../../prisma/client";
import client from "../utils/prisma.util";

export const createStudioService = async (
  input: StudioInput
): Promise<Studio> => {
  return client.studio.create({ data: input });
};
export const createMovieStudioService = async (
  input: MovieStudioInput
): Promise<MovieStudio> => {
  const { movie, studio } = input;
  return await client.movieStudio.create({ data: input });
};
