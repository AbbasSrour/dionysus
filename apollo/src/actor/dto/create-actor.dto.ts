import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActorDto {
  @IsString()
  @IsNotEmpty()
  image: string;
  @IsString()
  @IsNotEmpty()
  name: string;
}
