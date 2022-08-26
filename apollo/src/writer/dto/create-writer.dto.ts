import { IsNotEmpty, IsOptional, IsString, Max, Min } from 'class-validator';

export class CreateWriterDto {
  @IsNotEmpty()
  @IsString()
  @Min(3)
  @Max(30)
  name: string;

  @IsString()
  @IsOptional()
  image?: string;
}
