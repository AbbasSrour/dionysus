import { IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateStudioDto {
  @IsString()
  @IsNotEmpty()
  @Min(3)
  @Max(40)
  name: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
