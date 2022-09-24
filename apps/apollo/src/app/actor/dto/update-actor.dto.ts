import { IsNotEmpty, IsString } from 'class-validator';

export class updateActorDto {
  @IsString()
  @IsNotEmpty()
  image?: string;

  @IsString()
  @IsNotEmpty()
  name?: string;
}
