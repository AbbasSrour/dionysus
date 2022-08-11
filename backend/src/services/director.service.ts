import { DirectorInput, MovieDirectorInput } from "../schemas/director.schema";
import client from "../utils/prisma.util";
import { Director, MovieDirector } from "../../prisma/client";

export const createDirectorService = async (
  input: DirectorInput
): Promise<Director> => {
  return client.director.create({ data: { ...input } });
};

export const getDirectorByIdService = async (
  id: number
): Promise<Director | null> => {
  return client.director.findUniqueOrThrow({ where: { directorId: id } });
};

export const getDirectorByNameAndImageService = async (
  name: string,
  image: string
) => {
  return client.director.findUniqueOrThrow({
    where: { name_image: { name, image } },
  });
};

export const createMovieDirectorService = async (
  input: MovieDirectorInput
): Promise<MovieDirector> => {
  const { movieId, directorId } = input;
  return client.movieDirector.create({ data: input });
};
