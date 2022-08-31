import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShowDrirectorDto {
  @IsNumber()
  @IsNotEmpty()
  directorId: number;
  @IsNumber()
  @IsNotEmpty()
  showId: number;
}
