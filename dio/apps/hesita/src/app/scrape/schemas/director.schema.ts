import { BaseSchema } from './base.schema';

export interface getDirectorInterface {
  name?: string;
  image?: string;
  id?: number;
}

export interface DirectorInput {
  name: string;
  image: string;
}

export interface DirectorSchema extends DirectorInput, BaseSchema {
  directorId: number;
}

export interface ShowDirectorInput {
  directorId: number;
  showId: number;
}

export interface ShowDirectorSchema extends BaseSchema, ShowDirectorInput {}
