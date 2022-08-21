import {ImdbInput} from "../schemas/imdb.schema";
import client from "../utils/prisma.util";
import {Imdb} from "../../prisma/client";

export const createImdbService = async (input: ImdbInput): Promise<Imdb> => {
  return client.imdb.create({data: input});
};

export const getImdbByIdService = async (
  imdbId: string
): Promise<Imdb | null> => {
  return client.imdb.findUniqueOrThrow({where: {imdbId}});
};
