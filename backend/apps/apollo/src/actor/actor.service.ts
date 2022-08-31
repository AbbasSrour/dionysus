import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Actor, ShowCast } from '@prisma/client-apollo';
import { CreateActorDto, CreateShowCastDto } from './dto';

@Injectable()
export class ActorService {
  constructor(private client: PrismaService) {}

  async getActors(): Promise<Array<Actor>> {
    return this.client.actor.findMany();
  }

  async createActor(actor: CreateActorDto): Promise<Actor> {
    return this.client.actor.create({ data: actor });
  }

  async getActor(id: number): Promise<Actor> {
    return this.client.actor.findUniqueOrThrow({ where: { actorId: id } });
  }

  async getActorByNameAndImage(name: string, image: string): Promise<Actor> {
    return this.client.actor.findUniqueOrThrow({
      where: {
        name_image: {
          name,
          image,
        },
      },
    });
  }

  async createShowCast(input: CreateShowCastDto): Promise<ShowCast> {
    return this.client.showCast.create({ data: input });
  }
}
