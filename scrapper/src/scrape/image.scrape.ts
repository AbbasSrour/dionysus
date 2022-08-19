import got from "got";
import { env } from "../utils/validate-env.util";
import { getTmdbIdUsingImdbId } from "../utils/tmdb.util";

interface tmdbImageObject {
  aspect_ratio: number | null;
  height: number | null;
  iso_639_1: string | null;
  file_path: string | null;
  vote_average: number | null;
  vote_count: number | null;
  width: number | null;
}

interface tmdbImageResponse {
  id: number;
  backdrops: Array<tmdbImageObject>;
  logos: Array<tmdbImageObject>;
  posters: Array<tmdbImageObject>;
}

export const scrapePosterFromImdb = async (
  $: cheerio.Root
): Promise<string> => {
  let poster;
  // TODO Fix This
  // @ts-ignore
  poster = await $('div[data-testid="hero-media__poster"] > div')
    .find("img")
    .attr("srcset")
    .split("w,")[2]
    .replace(/\s\d{3}[w]/g, "")
    .replace(/^\s/, "");
  return poster;
};

export const scrapeImagesFromTmdb = async (
  imdbId: string
): Promise<tmdbImageResponse> => {
  const tmdbId = await getTmdbIdUsingImdbId(imdbId);
  const show = await got.get(`${env.TD_ADDRESS}/movie/${tmdbId}/images`, {
    searchParams: {
      api_key: env.API_KEY_TD,
      include_image_language: "en,null",
    },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await JSON.parse(show.body);
};
