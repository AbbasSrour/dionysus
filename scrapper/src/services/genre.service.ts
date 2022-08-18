import {
  GenreInput,
  GenreSchema,
  ShowGenreInput,
} from "../schemas/genre.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createGenreService = async (
  input: GenreInput
): Promise<GenreSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/genres`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.genre;
};

interface GenreServiceInterface {
  id?: number;
  name?: string;
}

export const getGenreService = async (
  data: GenreServiceInterface
): Promise<GenreSchema> => {
  const { id, name } = data;
  let response;
  if (id)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/genres`, {
      searchParams: { id },
    });
  else if (name)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/genres`, {
      searchParams: { name },
    });
  else throw Error;
  return await JSON.parse(response.body).data.genre;
};

export const createMovieGenreService = async (input: ShowGenreInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/genres/show`, {
    json: {
      apikey: env.API_KEY,
      showId: input.showId,
      genreId: input.genreId,
    },
  });
  return await JSON.parse(response.body).data.movieGenre;
};
