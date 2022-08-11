import { MovieWriterInput, WriterInput } from "../schemas/writer.schema";
import { MovieWriter, Writer } from "../../prisma/client";
import client from "../utils/prisma.util";

export const createWriterService = async (
  input: WriterInput
): Promise<Writer> => {
  return client.writer.create({ data: input });
};

export const getWriterByIdService = async (
  writerId: number
): Promise<Writer | null> => {
  return client.writer.findUniqueOrThrow({
    where: {
      writerId,
    },
  });
};

export const getWriterByNameAndImageService = async (
  name: string,
  image: string
): Promise<Writer | null> => {
  return client.writer.findUniqueOrThrow({
    where: { name_image: { name, image } },
  });
};

export const createMovieWriterService = async (
  input: MovieWriterInput
): Promise<MovieWriter> => {
  const { movieId, writerId } = input;
  return client.movieWriter.create({ data: input });
};
