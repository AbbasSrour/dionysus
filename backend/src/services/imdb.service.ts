import { ImdbInput } from "../schemas/imdb.schema";
import client from "../utils/prisma.util";
import { Imdb } from "../../prisma/client";

export const createImdbService = async (input: ImdbInput): Promise<Imdb> => {
  return await client.imdb.create({ data: input });
};

export const getImdbByIdService = async (
  imdbId: string
): Promise<Imdb | null> => {
  return await client.imdb.findUnique({ where: { imdbId } });
};
