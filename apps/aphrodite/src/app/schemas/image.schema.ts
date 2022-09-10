import { BaseSchema } from "./base.schema";

export interface ImageInput {
  imageId?: number;
  showId?: number;
  url?: string;
  type?: string;
  height?: number;
  width?: number;
  aspectRatio?: number;
  language?: string;
  isDefault?: boolean;
}

export interface ImageSchema extends BaseSchema, ImageInput {}

export class ImageEntity implements ImageSchema {
  imageId?: number;
  showId?: number;
  url?: string;
  type?: string;
  height?: number;
  width?: number;
  aspectRatio?: number;
  language?: string;
  isDefault?: boolean;
}
