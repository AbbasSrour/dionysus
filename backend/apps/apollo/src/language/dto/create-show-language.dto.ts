import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShowLanguageDto {
  @IsNotEmpty()
  @IsNumber()
  showId: number;

  @IsNumber()
  @IsNotEmpty()
  languageId: number;
}
