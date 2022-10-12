import { Imdb, Image, Video, Genre } from '@prisma/client-apollo';

export class SeriesPojo {
  seriesId: number;
  showId: number;
  name: string;
  releaseYear: number;
  summary: string;
  pgRating: string;
  length: number;
  avgEpisodeLength: number;
  type: string;

  logo: Image;
  poster: Image;
  backdrop: Image;
  trailer: Video;

  genres: Array<{ genre: Genre }>;
  Imdb: Imdb;
}
