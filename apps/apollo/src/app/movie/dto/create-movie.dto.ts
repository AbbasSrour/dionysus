import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateMovieDto {
  @IsNumber()
  @IsNotEmpty()
  showId: number;

  @IsNumber()
  @IsNotEmpty()
  budget: number;

  @IsNumber()
  @IsNotEmpty()
  revenue: number;
}
