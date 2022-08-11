import { MovieWriterInput, WriterInput } from "../schemas/writer.schema";
import { env } from "../utils/validate-env.util";
import got from "got";
import LocalError from "../errors/local.error";

export const createWriterService = async (input: WriterInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/writers`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.writer;
};

interface GetWriterInterface {
  id?: number;
  name?: string;
  image?: string;
}

export const getWriterService = async (data: GetWriterInterface) => {
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
  else throw new LocalError(5000, "Wrong inserted data");
  return await JSON.parse(response.body).data.writer;
};

export const createMovieWriterService = async (input: MovieWriterInput) => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/writers/movie`, {
    json: {
      apikey: env.API_KEY,
      movieId: input.movieId,
      writerId: input.writerId,
    },
  });
  return await JSON.parse(response.body).data.movieWriter;
};
