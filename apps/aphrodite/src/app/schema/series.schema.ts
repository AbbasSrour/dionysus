import { ImageSchema } from './image.schema';
import { VideoSchema } from './video.schema';

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

  imdb: {
    rating: number;
    voteCount: number;
  };
}
