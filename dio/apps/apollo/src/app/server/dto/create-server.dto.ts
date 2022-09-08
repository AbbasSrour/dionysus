import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateServerDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  url: string;
}
