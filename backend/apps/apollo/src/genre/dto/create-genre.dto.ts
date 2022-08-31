import { IsString, Max, Min } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @Min(3)
  @Max(20)
  name: string;
}
