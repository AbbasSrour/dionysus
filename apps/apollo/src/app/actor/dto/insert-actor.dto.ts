import { CreateActorDto } from './create-actor.dto';

export class InsertActorDto extends CreateActorDto {
  role: string;
}
