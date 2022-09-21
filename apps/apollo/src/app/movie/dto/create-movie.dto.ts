import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  name: string;
  releaseYear: number;
  summary: string;
  pgRating: string;
  length?: number;
  @IsNumber()
  @IsNotEmpty()
  budget: number;
  @IsNumber()
  @IsNotEmpty()
  revenue: number;
}
