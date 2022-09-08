import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateStudioDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(40)
  name: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
