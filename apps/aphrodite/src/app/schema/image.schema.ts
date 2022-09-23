export interface ImageSchema {
  showId: number;
  url: string;
  type?: string;
  height?: number;
  width?: number;
  aspectRatio?: number;
  language?: string;
  isDefault?: boolean;
}
