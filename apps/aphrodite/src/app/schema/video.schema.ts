export interface VideoSchema {
  showId: number;
  url: string;
  site?: string;
  name?: string;
  quality?: number;
  type?: string;
  official?: boolean;
  language?: string;
  publishedAt?: string;
  isDefault?: boolean;
}
