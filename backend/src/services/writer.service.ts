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
  return client.writer.findUnique({
    where: {
      writerId,
    },
  });
};

export const createMovieWriterService = async (
  input: MovieWriterInput
): Promise<MovieWriter> => {
  const { movie, writer } = input;
  return client.movieWriter.create({ data: input });
};
