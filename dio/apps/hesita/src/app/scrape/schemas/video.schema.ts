import { BaseSchema } from './base.schema';

export interface VideoInput {
  showId: number;
  url: string;
  site: string;
  name: string;
  quality: number;
  type: string;
  official: boolean;
  language: string;
  publishedAt: string;
  isDefault: boolean;
}

export interface VideoSchema extends VideoInput, BaseSchema {
  videoId: number;
}
