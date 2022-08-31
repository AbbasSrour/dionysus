import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShowStudioDto {
  @IsNumber()
  @IsNotEmpty()
  showId: number;

  @IsNumber()
  @IsNotEmpty()
  studioId: number;
}
