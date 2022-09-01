import { BaseSchema } from './base.schema';

export interface ImdbInput {
  imdbId: string;
  showId: number;
  rating: number;
  voteCount: number;
}

export interface ImdbSchema extends ImdbInput, BaseSchema {}
