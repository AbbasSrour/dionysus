import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateVideoDto {
  @IsNotEmpty()
  @IsNumber()
  showId: number;

  @IsNotEmpty()
  @IsString()
  url: string;

  @IsString()
  @IsOptional()
  site?: string;

  @IsString()
  @IsOptional()
  name?: string;

  @IsNumber()
  @IsOptional()
  quality?: number;

  @IsString()
  @IsOptional()
  type?: string;

  @IsBoolean()
  @IsOptional()
  official?: boolean;

  @IsString()
  @IsOptional()
  language?: string;

  @IsString()
  @IsOptional()
  publishedAt?: string;

  @IsBoolean()
  @IsOptional()
  isDefault?: boolean = false;
}
