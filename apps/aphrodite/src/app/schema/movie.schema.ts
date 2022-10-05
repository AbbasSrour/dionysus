import { ImageSchema } from './image.schema';
import { VideoSchema } from './video.schema';
import { GenreSchema } from './genre.schema';

export interface MovieSchema {
  showId: number;
  name: string;
  releaseYear: number;
  summary: string;
  pgRating: number;
  length: number;

  budget?: number;
  revenue?: number;

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
