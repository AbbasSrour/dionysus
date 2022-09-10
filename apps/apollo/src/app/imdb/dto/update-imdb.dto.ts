import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class UpdateImdbDto {
  @IsNumber()
  @IsNotEmpty()
  showId?: number;

  @IsNumber()
  @IsOptional()
  rating?: number;

  @IsNumber()
  @IsOptional()
  voteCount?: number;
}
