import {
  GetWriterInterface,
  ShowWriterInput,
  ShowWriterSchema,
  WriterInput,
  WriterSchema,
} from "../schemas/writer.schema";
import { env } from "../utils/validate-env.util";
import got from "got";
import LocalError from "../errors/local.error";

export const createWriterService = async (
  input: WriterInput
): Promise<WriterSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/writers`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.writer;
};

export const getWriterService = async (
  data: GetWriterInterface
): Promise<WriterSchema> => {
  const { id, image, name } = data;
  let response;
  if (id)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/writers`, {
      searchParams: { id },
    });
  else if (name && image)
    response = await got.get(`${env.DB_WRAPPER}/api/v1/writers`, {
      searchParams: { name, image },
    });
  // TODO Standardize the error
  else throw new LocalError(5000, "Wrong inserted data");
  return await JSON.parse(response.body).data.writer;
};

export const createShowWriterService = async (
  input: ShowWriterInput
): Promise<ShowWriterSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/writers/show`, {
    json: {
      apikey: env.API_KEY,
      showId: input.showId,
      writerId: input.writerId,
    },
  });
  return await JSON.parse(response.body).data.movieWriter;
};
