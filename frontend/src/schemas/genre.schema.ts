import { BaseSchema } from "./base.schema";

export interface GenreInput {
  name: string;
}

export interface GenreSchema extends GenreInput, BaseSchema {
  genreId: number;
}

export interface ShowGenreInput {
  genreId: number;
  showId: number;
}

export interface GenreShowSchema extends BaseSchema, ShowGenreInput {}
