import { DirectorInput, MovieDirectorInput } from "../schemas/director.schema";
import client from "../utils/prisma.util";
import { Director, MovieDirector } from "../../prisma/client";

export const createDirectorService = async (
  input: DirectorInput
): Promise<Director> => {
  return await client.director.create({ data: { ...input } });
};

export const getDirectorByIdService = async (
  id: number
): Promise<Director | null> => {
  return await client.director.findUnique({ where: { directorId: id } });
};

export const createMovieDirectorService = async (
  input: MovieDirectorInput
): Promise<MovieDirector> => {
  const { movie, director } = input;
  return await client.movieDirector.create({ data: input });
};
