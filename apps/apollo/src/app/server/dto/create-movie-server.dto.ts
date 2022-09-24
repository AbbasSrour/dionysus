import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateMovieServerDto {
  @IsNumber()
  @IsNotEmpty()
  movieId: number;

  @IsNumber()
  @IsNotEmpty()
  serverId: number;

  @IsString()
  @IsNotEmpty()
  @Min(3)
  url: string;
}
