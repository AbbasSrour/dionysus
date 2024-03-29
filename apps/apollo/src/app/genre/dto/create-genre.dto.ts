import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @MinLength(3)
  @MaxLength(20)
  name: string;
}
