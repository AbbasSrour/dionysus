export class InsertDto {
  type: string;

  name: string;
  releaseYear: number;
  summary: string;
  pgRating: string;
  length?: number;

  movie?: {
    budget: number;
    revenue: number;
    urls: Array<{
      serverName: string;
      url: string;
    }>;
  };

  series?: {
    avgEpisodeLength: number;
    type: string;
    episodes: Array<{
      season: number;
      number: number;
      name?: string;
      poster?: string;
      summary?: string;
      releaseYear?: number;
      length?: number;
      urls: Array<{
        name: string;
        url: string;
      }>;
    }>;
  };

  servers: Array<{
    name: string;
    url: string;
  }>;

  imdb: {
    imdbId: string;
    rating: number;
    voteCount: number;
  };

  images: Array<{
    url: string;
    type?: string;
    height?: number;
    width?: number;
    aspectRatio?: number;
    language?: string;
    isDefault?: boolean;
  }>;

  videos: Array<{
    url: string;
    site?: string;
    name?: string;
    quality?: number;
    type?: string;
    official?: boolean;
    language?: string;
    publishedAt?: string;
    isDefault?: boolean;
  }>;

  actors: Array<{
    name: string;
    image: string;
    role: string;
  }>;

  directors: Array<{
    name: string;
    image: string;
  }>;

  genres: Array<{ name: string }>;

  languages: Array<{ name: string }>;

  studios: Array<{
    name: string;
    image: string;
  }>;

  writers: Array<{
    name: string;
    image: string;
  }>;
}
