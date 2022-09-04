import { BaseSchema } from './base.schema';

export interface GetWriterInterface {
  id?: number;
  name?: string;
  image?: string;
}

export interface WriterInput {
  name: string;
  image: string;
}

export interface WriterSchema extends WriterInput, BaseSchema {
  writerId: number;
}

export interface ShowWriterInput {
  writerId: number;
  showId: number;
}

export interface ShowWriterSchema extends BaseSchema, ShowWriterInput {}
