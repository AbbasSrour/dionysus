import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateImdbDto {
  @IsString()
  @IsNotEmpty()
  imdbId: string;

  @IsNumber()
  @IsNotEmpty()
  showId: number;

  @IsNumber()
  @IsOptional()
  rating?: number;

  @IsNumber()
  @IsOptional()
  voteCount?: number;
}
