import { ImageSchema } from './image.schema';
import { VideoSchema } from './video.schema';
import { GenreSchema } from './genre.schema';

export interface SeriesSchema {
  showId: number;
  name: string;
  releaseYear: number;
  summary: string;
  pgRating: number;

  aveEpisodeLength: number;
  type: string;

  backdrop?: ImageSchema;
  poster?: ImageSchema;
  logo?: ImageSchema;
  trailer?: VideoSchema;

  Imdb: {
    rating: number;
    voteCount: number;
  };

  genres: Array<{ genre: GenreSchema }>;
}
