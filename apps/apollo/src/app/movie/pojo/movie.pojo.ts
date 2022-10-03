import { Image, Video } from '@prisma/client-apollo';

export class MoviePojo {
  movieId: number;
  showId: number;
  name: string;
  releaseYear: number;
  summary: string;
  pgRating: string;
  length: number;
  budget: number;
  revenue: number;

  logo: Image;
  poster: Image;
  backdrop: Image;
  trailer: Video;
}
