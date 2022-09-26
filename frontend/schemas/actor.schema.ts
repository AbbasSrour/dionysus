import { BaseSchema } from './base.schema';

export default interface ActorSchema extends BaseSchema {
  actorId: string;
  name: string;
  image: string;
  role: string;
}
