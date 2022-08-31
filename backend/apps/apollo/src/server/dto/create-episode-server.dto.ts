import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateEpisodeServerDto {
  @IsNumber()
  @IsNotEmpty()
  episodeId: number;

  @IsNumber()
  @IsNotEmpty()
  serverId: number;

  @IsString()
  @IsNotEmpty()
  @Min(3)
  url: string;
}
