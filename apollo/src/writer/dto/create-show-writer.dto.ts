import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateShowWriterDto {
  @IsNumber()
  @IsNotEmpty()
  showId: number;

  @IsNumber()
  @IsNotEmpty()
  writerId: number;
}
