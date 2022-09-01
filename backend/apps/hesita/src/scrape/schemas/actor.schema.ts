import { BaseSchema } from './base.schema';

export interface getActorInterface {
  name?: string;
  image?: string;
  id?: number;
}

export interface ActorInput {
  name: string;
  image: string;
}

export interface ActorSchema extends ActorInput, BaseSchema {
  actorId: number;
}

export interface ShowCastInput {
  actorId: number;
  showId: number;
  role: string;
}

export interface ShowCastSchema extends BaseSchema, ShowCastInput {}
