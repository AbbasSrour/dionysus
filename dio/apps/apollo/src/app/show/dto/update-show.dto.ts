import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateShowDto {
  @IsNotEmpty()
  @IsOptional()
  name?: string;

  @IsNotEmpty()
  @IsOptional()
  releaseYear?: number;

  @IsNotEmpty()
  @IsOptional()
  summary?: string;

  @IsNotEmpty()
  @IsOptional()
  pgRating?: string;

  @IsNotEmpty()
  @IsOptional()
  length?: number;

  @IsNotEmpty()
  @IsOptional()
  type?: string;
}
