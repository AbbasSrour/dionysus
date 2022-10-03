import { ImageSchema } from './image.schema';
import { VideoSchema } from './video.schema';

export interface MovieSchema {
  showId: number;
  name: string;
  releaseYear: number;
  summary: string;
  pgRating: number;

  backdrop?: ImageSchema;
  poster?: ImageSchema;
  logo?: ImageSchema;
  trailer?: VideoSchema;

  imdb: {
    rating: number;
    voteCount: number;
  };

  budget?: number;
  revenue?: number;
}
