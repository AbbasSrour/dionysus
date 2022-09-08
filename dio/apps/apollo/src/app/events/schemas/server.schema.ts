export interface ServerInput {
  name: string;
  url: string;
}

export interface MovieServerInput extends ServerInput {
  movieUrl: string;
}

export interface EpisodeServerInput extends ServerInput {
  episodeUrls: Array<{
    episodeUrl: string;
    episodeNum: number;
    seasonNum: number;
  }>;
}
