import {
  GetShowInterface,
  ShowInput,
  ShowSchema,
} from "../schemas/show.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createShowService = async (
  input: ShowInput
): Promise<ShowSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/shows`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.show;
};

export const getShowService = async (
  data: GetShowInterface
): Promise<ShowSchema> => {
  const { id, name, releaseYear } = data;
  let response;
  if (id)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/shows`, {
      searchParams: { id },
    });
  else if (name && releaseYear)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/shows`, {
      searchParams: { name, releaseYear },
    });
  // Todo customize error
  else throw Error;
  return await JSON.parse(response.body).data.show;
};
