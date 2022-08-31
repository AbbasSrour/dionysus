import { Api } from "../api/ApiConfig";
import { BaseSchema } from "./base.schema";
import { ImageSchema } from "./image.schema";
import { Genre } from "./genre.schema";

export interface ShowInput {
  showId?: number;
  name?: string;
  releaseYear?: number;
  summary?: string;
  pgRating?: number;
  budget?: number;
  revenue?: number;
}

export interface ShowSchema extends ShowInput, BaseSchema {}

export class Show implements ShowSchema {
  object: string = "/shows";
  api = new Api();

  showId?: number;
  name?: string;
  releaseYear?: number;
  summary?: string;
  pgRating?: number;
  budget?: number;
  revenue?: number;

  backdrop?: string;
  poster?: string;
  logo?: string;

  constructor() {}

  async init(input: ShowInput) {
    const { showId, budget, pgRating, revenue, summary, releaseYear, name } =
      input;
    this.showId = showId;
    this.name = name;
    this.releaseYear = releaseYear;
    this.summary = summary;
    this.revenue = revenue;
    this.pgRating = pgRating;
    this.budget = budget;
  }

  async initWithId(id: number) {
    const path = `${this.object}/${id}`;
    const response: ShowSchema = (await this.api.get(path)).show;
    console.log(response);
    this.init(response);
    return response;
  }

  async initPopular(type: string) {
    const path = `${this.object}/popular`;
    const params = { type };
    const response: ShowSchema = (await this.api.get(path, params)).show;
    this.init(response);
    return response;
  }

  async addDefaultImage(imageType?: string) {
    const url = `${this.object}/${this.showId}/image/default`;
    const params = { imageType };
    const response: {
      poster: ImageSchema;
      backdrop: ImageSchema;
      logo: ImageSchema;
    } = (await this.api.get(url, params)).images;
    this.poster = response.poster.url;
    this.backdrop = response.backdrop.url;
    this.logo = response.logo.url;
    return response;
  }

  async getGenres() {
    const url = `${this.object}/${this.showId}/genres`;
    const response: Genre= (await this.api.get(url)).genres;

}
