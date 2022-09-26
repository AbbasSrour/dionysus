import { BaseSchema } from './base.schema';

export interface StudioSchema extends BaseSchema {
  studioId: string;
  name: string;
  image: string;
}
