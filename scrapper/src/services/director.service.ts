import { DirectorInput, MovieDirectorInput } from "../schemas/director.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createDirectorService = async (input: DirectorInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/directors`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.director;
};

interface getDirectorInterface {
  name?: string;
  image?: string;
  id?: number;
}

export const getDirectorService = async (data: getDirectorInterface) => {
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
  else return Error;
  return await JSON.parse(response.body).data.director;
};

export const createMovieDirector = async (input: MovieDirectorInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/directors/movie`, {
    json: {
      apikey: env.API_KEY,
      movieId: input.movieId,
      directorId: input.directorId,
    },
  });
  return JSON.parse(response.body).data.director;
};
