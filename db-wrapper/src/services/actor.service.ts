import { AppDataSource } from "../utils/data-source.util";
import Actor from "../entities/actor.entity";
import { ActorInput } from "../schemas/actor.schema";

const actorRepo = AppDataSource.getRepository(Actor);

export const createActorService = async (input: ActorInput): Promise<Actor> => {
  const actor = AppDataSource.manager.create(Actor, input);
  return (await AppDataSource.manager.save(actor)) as Actor;
};
