import got from "got";
import { env } from "./validate-env.util";

export const getTmdbIdUsingImdbId = async (imdbId: string) => {
  const show = await got.get(`${env.TD_ADDRESS}/find/${imdbId}`, {
    searchParams: { api_key: env.API_KEY_TD, external_source: "imdb_id" },
    headers: {
      "Content-Type": "application/json",
    },
  });
  return await JSON.parse(show.body).movie_results[0].id;
};
