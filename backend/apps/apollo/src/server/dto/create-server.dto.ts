import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateServerDto {
  @IsString()
  @IsNotEmpty()
  @Min(3)
  @Max(30)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Min(3)
  url: string;
}
