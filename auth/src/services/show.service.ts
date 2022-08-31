import { ShowInput } from "../schemas/show.schema";
import { Image, Show } from "../../prisma/client";
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

export const getShowByImdbIdShow = async (imdbId: string) => {
  const show = await client.imdb.findUniqueOrThrow({ where: { imdbId } });
  return client.show.findUniqueOrThrow({
    where: { showId: show.showId },
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

export const getPopularShowService = async (type: string): Promise<Show> => {
  // TODO currently returns random, find a way to implement this!!!
  const randomIntFromInterval = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const count = await client.show.count();
  const showId = randomIntFromInterval(1, count);
  return client.show.findUniqueOrThrow({ where: { showId } });
};

export const getShowDefaultPosterService = async (
  showId: number
): Promise<Image | null> => {
  //TODO this needs work
  return client.image.findFirst({
    where: {
      showId,
      type: "poster",
      // isDefault: true,
    },
  });
};

export const getShowDefaultBackdropService = async (
  showId: number
): Promise<Image | null> => {
  //TODO this needs work
  return client.image.findFirst({
    where: {
      showId,
      type: "backdrop",
      // isDefault: true,
    },
  });
};

export const getShowDefaultLogoService = async (
  showId: number
): Promise<Image | null> => {
  //TODO this needs work
  return client.image.findFirst({
    where: {
      showId,
      type: "logo",
      // isDefault: true,
    },
  });
};
