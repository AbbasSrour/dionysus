import { BaseSchema } from "./base.schema";
import { Api } from "../api/ApiConfig";

export interface GenreInput {
  name?: string;
}

export interface GenreSchema extends GenreInput, BaseSchema {
  genreId?: number;
}

export class Genre implements GenreSchema {
  object: string = "/genres";
  api = new Api();

  name?: string;
  genreId?: number;

  constructor() {
  }

  init = (input: GenreSchema) => {
    this.name = input.name;
    this.genreId = input.genreId;
  };

  getShowGenres = async (id: string) => {
    const path = `${this.object}/show/${id}`;
    const response: { showGenres: Array<ShowGenreSchema> } = (
      await this.api.get(path)
    ).showGenres;
    return response;
  };
}

export interface ShowGenreInput {
  genreId: number;
  showId: number;
}

export interface ShowGenreSchema extends BaseSchema, ShowGenreInput {
}
