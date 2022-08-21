import {ShowWriterInput, WriterInput} from "../schemas/writer.schema";
import {ShowWriter, Writer} from "../../prisma/client";
import client from "../utils/prisma.util";

export const createWriterService = async (
  input: WriterInput
): Promise<Writer> => {
  return client.writer.create({data: input});
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
    where: {name_image: {name, image}},
  });
};

export const createShowWriterService = async (
  input: ShowWriterInput
): Promise<ShowWriter> => {
  const {showId, writerId} = input;
  return client.showWriter.create({data: input});
};
