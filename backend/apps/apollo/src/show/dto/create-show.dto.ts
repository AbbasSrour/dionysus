import { IsNotEmpty } from 'class-validator';

export class CreateShowDto {
  @IsNotEmpty()
  name: string;
  releaseYear: number;
  summary: string;
  pgRating: string;
  budget: number;
  revenue: number;
}
