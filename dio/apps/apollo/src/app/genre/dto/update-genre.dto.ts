import { IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateGenreDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;
}
