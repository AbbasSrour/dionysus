import client from "../utils/prisma.util";
import { ImageInput } from "../schemas/image.schema";
import { Image } from "../../prisma/client";

export const createImageService = async (input: ImageInput): Promise<Image> => {
  const image = client.image.create({ data: input });
  return image;
};
