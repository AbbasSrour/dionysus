import got from "got";
import { env } from "../utils/validate-env.util";
import { VideoInput, VideoSchema } from "../schemas/video.schema";

export const createVideoService = async (
  input: VideoInput
): Promise<VideoSchema> => {
  const response = await got.post(`${env.DB_WRAPPER}/api/v1/videos`, {
    json: {
      apikey: env.API_KEY,
      ...input,
    },
  });
  return await JSON.parse(response.body).data.video;
};
