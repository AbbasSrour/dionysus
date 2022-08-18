import {
  GetStudioInterface,
  ShowStudioInput,
  StudioInput,
  StudioSchema,
} from "../schemas/studio.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createStudioService = async (
  input: StudioInput
): Promise<StudioSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/studios`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.studio;
};

export const getStudioService = async (
  data: GetStudioInterface
): Promise<StudioSchema> => {
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

export const createMovieStudioService = async (
  input: ShowStudioInput
): Promise<StudioSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/studios/show`, {
    json: {
      apikey: env.API_KEY,
      showId: input.showId,
      studioId: input.studioId,
    },
  });
  return await JSON.parse(response.body).data.movieStudio;
};
