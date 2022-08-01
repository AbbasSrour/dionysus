import { WriterInput } from "../schemas/writer.schema";
import { env } from "../utils/validate-env.util";
import got from "got";

export const createWriterService = async (input: WriterInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/writers`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return JSON.parse(response.body).data.writer;
};
