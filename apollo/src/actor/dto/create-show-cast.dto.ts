import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateShowCastDto {
  @IsNumber()
  @IsNotEmpty()
  showId: number;
  @IsNumber()
  @IsNotEmpty()
  actorId: number;
  @IsString()
  @IsNotEmpty()
  role: string;
}
