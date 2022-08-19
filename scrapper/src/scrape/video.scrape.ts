import { getTmdbIdUsingImdbId } from "../utils/tmdb.util";
import { env } from "../utils/validate-env.util";
import got from "got";

interface tmdbVideoResponse {
  id: number;
  results: Array<{
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
  }>;
}

export const scrapeVideosFromTmdb = async (
  imdbId: string
): Promise<tmdbVideoResponse> => {
  const tmdbId = await getTmdbIdUsingImdbId(imdbId);
  const videos = await got.get(`${env.TD_ADDRESS}/movie/${tmdbId}/videos`, {
    searchParams: {
      api_key: env.API_KEY_TD,
      include_video_language: "en,null",
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await JSON.parse(videos.body);
};
