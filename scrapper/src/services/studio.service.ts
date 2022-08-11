import { MovieStudioInput, StudioInput } from "../schemas/studio.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createStudioService = async (input: StudioInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/studios`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  // @ts-ignore
  return await JSON.parse(response.body).data.studio;
};

interface GetSudioInterface {
  name?: string;
  id?: number;
}

export const getSudioService = async (data: GetSudioInterface) => {
  const { id, name } = data;
  let response;
  if (id)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/studios`, {
      searchParams: { id },
    });
  else if (name)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/studios`, {
      searchParams: { name },
    });
  else throw Error;
  return await JSON.parse(response.body).data.studio;
};

export const createMovieStudioService = async (input: MovieStudioInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/studios/movie`, {
    json: {
      apikey: env.API_KEY,
      movieId: input.movieId,
      studioId: input.studioId,
    },
  });
  return await JSON.parse(response.body).data.movieStudio;
};
