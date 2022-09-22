export class UpdateSeriesDto {
  seriesId: number;
  name?: string;
  releaseYear?: number;
  summary?: string;
  pgRating?: string;
  length?: number;

  avgEpisodeLength?: number;
  type?: string;
}
