import { BaseSchema } from "./base.schema";

export interface GetStudioInterface {
  name?: string;
  id?: number;
}

export interface StudioInput {
  name: string;
  image: string;
}

export interface StudioSchema extends StudioInput, BaseSchema {
  studioId: number;
}

export interface ShowStudioInput {
  studioId: number;
  showId: number;

}

export interface ShowStudioSchema extends BaseSchema, ShowStudioInput {
}
