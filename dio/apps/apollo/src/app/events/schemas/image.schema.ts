export interface ImageInput {
  url: string;
  type: string;
  height?: number | null;
  width?: number | null;
  aspectRatio?: number | null;
  language?: string | null;
  isDefault: boolean;
}
