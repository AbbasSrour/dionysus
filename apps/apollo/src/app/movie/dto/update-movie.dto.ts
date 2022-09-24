export class UpdateMovieDto {
  movieId: number;

  name?: string;

  releaseYear?: number;

  summary?: string;

  pgRating?: string;

  length?: number;

  budget?: number;

  revenue?: number;
}
