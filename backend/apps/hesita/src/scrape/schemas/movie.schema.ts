import { BaseSchema } from './base.schema';

export interface GetMovieInterface {
  showId?: number;
  movieId?: number;
}

export interface MovieInput {
  length: number;
  showId: number;
}

export interface MovieSchema extends MovieInput, BaseSchema {
  movieId: number;
}
