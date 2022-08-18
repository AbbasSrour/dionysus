import {
  DirectorInput,
  DirectorSchema,
  getDirectorInterface,
  ShowDirectorInput,
} from "../schemas/director.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createDirectorService = async (
  input: DirectorInput
): Promise<DirectorSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/directors`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.director;
};

export const getDirectorService = async (
  data: getDirectorInterface
): Promise<DirectorSchema> => {
  const { name, image, id } = data;
  let response;
  if (id)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/directors`, {
      searchParams: {
        id,
      },
    });
  else if (image && name)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/directors`, {
      searchParams: {
        name,
        image,
      },
    });
  else throw Error;
  return await JSON.parse(response.body).data.director;
};

export const createMovieDirector = async (
  input: ShowDirectorInput
): Promise<DirectorSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/directors/show`, {
    json: {
      apikey: env.API_KEY,
      showId: input.showId,
      directorId: input.directorId,
    },
  });
  return await JSON.parse(response.body).data.director;
};
