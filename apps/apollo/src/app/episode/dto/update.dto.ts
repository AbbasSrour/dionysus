import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateEpisodeDto {
  @IsNotEmpty()
  @IsNumber()
  showId?: number;

  @IsNotEmpty()
  @IsNumber()
  season?: number;

  @IsNotEmpty()
  @IsNumber()
  number?: number;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  poster?: string;

  @IsString()
  @IsOptional()
  summary?: string;

  @IsNotEmpty()
  @IsNumber()
  releaseYear?: number;

  @IsNotEmpty()
  @IsNumber()
  length?: number;
}
