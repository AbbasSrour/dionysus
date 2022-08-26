import {
  IsBoolean,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

const types = { poster: 'poster', logo: 'logo', backdrop: 'backdrop' };

export class CreateImageDto {
  @IsNumber()
  @IsNotEmpty()
  showId: number;

  @IsString()
  @IsNotEmpty()
  url: string;

  @IsString()
  @IsOptional()
  @IsEnum(types)
  type?: string;

  @IsNumber()
  @IsOptional()
  height?: number;

  @IsNumber()
  @IsOptional()
  width?: number;

  @IsNumber()
  @IsOptional()
  aspectRatio?: number;

  @IsString()
  @IsOptional()
  language?: string;

  @IsBoolean()
  @IsOptional()
  isDefault?: boolean;
}
