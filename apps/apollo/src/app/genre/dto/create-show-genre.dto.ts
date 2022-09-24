import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShowGenreDto {
  @IsNumber()
  @IsNotEmpty()
  showId: number;
  @IsNumber()
  @IsNotEmpty()
  genreId: number;
}
