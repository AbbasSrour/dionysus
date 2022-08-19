import { ImageInput, ImageSchema } from "../schemas/image.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createImageService = async (
  input: ImageInput
): Promise<ImageSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/images`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.image;
};
