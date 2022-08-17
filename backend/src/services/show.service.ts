import { ShowInput } from "../schemas/show.schema";
import { Show } from "../../prisma/client";
import client from "../utils/prisma.util";

export const createShowService = async (input: ShowInput): Promise<Show> => {
  return client.show.create({ data: input });
};

export const getShowByIdService = async (id: number): Promise<Show> => {
  return client.show.findUniqueOrThrow({ where: { showId: id } });
};

export const getShowByNameReleaseYearService = async (
  name: string,
  releaseYear: number
): Promise<Show> => {
  return client.show.findUniqueOrThrow({
    where: { name_releaseYear: { name, releaseYear } },
  });
};

export const searchShowByNameService = async (
  name: string
): Promise<Array<Show> | null> => {
  return client.show.findMany({
    where: {
      name: {
        contains: name,
      },
    },
  });
};
