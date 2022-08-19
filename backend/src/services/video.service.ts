import client from "../utils/prisma.util";
import { VideoInput } from "../schemas/video.schema";
import { Video } from "../../prisma/client";

export const createVideoService = async (input: VideoInput): Promise<Video> => {
  return client.video.create({ data: input });
};
