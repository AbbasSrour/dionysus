import { IsNotEmpty } from 'class-validator';

export class CreateSeriesDto {
  @IsNotEmpty()
  name: string;
  releaseYear: number;
  summary: string;
  pgRating: string;
  length?: number;

  avgEpisodeLength: number;
  type: string;
}
