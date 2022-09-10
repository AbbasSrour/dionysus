import { BaseSchema } from "./base.schema";

export interface ServerInput {
  name: string;
  url: string;
}

export interface ServerSchema extends ServerInput, BaseSchema {
  serverId: number;
}

export interface MovieServerInput {
  serverId: number;
  movieId: number;
  url: string;
}

export interface MovieServerSchema extends BaseSchema, MovieServerInput {}
