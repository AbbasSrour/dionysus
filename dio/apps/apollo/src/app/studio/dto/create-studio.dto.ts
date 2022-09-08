import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateStudioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(40)
  name: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
