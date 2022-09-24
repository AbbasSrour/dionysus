import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Actor, ShowCast } from '@prisma/client-apollo';
import { CreateActorDto, CreateShowCastDto, InsertActorDto, updateActorDto } from './dto';

@Injectable()
export class ActorService {
  constructor(private client: PrismaService, private readonly logger: Logger) {}

  async getActors(showId: number): Promise<(Actor & { role: string })[]> {
    const actors = await this.client.actor.findMany({
      where: {
        ShowCast: {
          some: {
            showId,
          },
        },
      },
      include: {
        ShowCast: {
          where: {
            showId,
          },
          select: {
            role: true,
          },
        },
      },
    });
    const aux = Array<Actor & { role: string }>();
    actors.forEach((actor) => {
      actor.ShowCast.forEach((cast) => {
        aux.push({
          actorId: actor.actorId,
          name: actor.name,
          image: actor.image,
          role: cast.role,
          createdAt: actor.createdAt,
          updatedAt: actor.updatedAt,
        });
      });
    });

    return aux;
  }

  async createActor(actor: CreateActorDto): Promise<Actor> {
    return this.client.actor.create({ data: actor });
  }

  async deleteActor(actorId: number) {
    return this.client.actor.delete({
      where: {
        actorId,
      },
    });
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

  async updateActor(actorId: number, data: updateActorDto) {
    return this.client.actor.update({ where: { actorId }, data });
  }

  async createShowCastMember(input: CreateShowCastDto): Promise<ShowCast> {
    return this.client.showCast.create({ data: input });
  }

  async getShowCast(actorId: number, showId: number): Promise<ShowCast> {
    return this.client.showCast.findFirstOrThrow({
      where: {
        showId,
        actorId,
      },
    });
  }

  // todo
  // async updateShowCast(actorId: number, showId: number) {
  //   return this.client.showCast.update({
  //     where: {
  //       showId_actorId_role: {
  //         showId,
  //         actorId,
  //       },
  //     },
  //   });
  // }

  async deleteShowCastMember(actorId: number, showId: number, role: string) {
    this.client.showCast.delete({
      where: {
        showId_actorId_role: {
          actorId,
          showId,
          role,
        },
      },
    });
  }

  async insertActors(showId: number, data: Array<InsertActorDto>) {
    // BUG: Idk what will happen if their exists two actors with the same name for the same show
    const cast = await this.getActors(showId).catch((error) =>
      this.logger.error({ error, message: 'No cast' }),
    );

    if (cast && cast.length > 0) {
      // check and remove old cast members from cast list
      cast.forEach((actor) => {
        let deleteCastMember = true;
        data.forEach((scrapedActor) => {
          if (scrapedActor.name === actor.name && scrapedActor.role === actor.role)
            deleteCastMember = false;
          if (deleteCastMember)
            this.deleteShowCastMember(actor.actorId, showId, actor.role);
        });
      });

      // Update old actors and update roles
      //TODO Update roles
      cast.forEach((actor) => {
        data.forEach((scrapedActor) => {
          if (actor.image !== scrapedActor.image && actor.name === scrapedActor.name) {
            this.updateActor(actor.actorId, {
              image: scrapedActor.image,
            });
            // todo update actor role
            // .then((actor) => this.getShowCast(actor.actorId, showId)).then(()=>this.updateActor());
            return;
          }
        });
      });

      // Add new actors
      for (const scrapedActor of data) {
        let createActor = true;
        cast.forEach((actor) => {
          if (actor.role === scrapedActor.role && actor.name === scrapedActor.name)
            createActor = false;
        });
        const check = await this.getActorByNameAndImage(
          scrapedActor.name,
          scrapedActor.image,
        ).catch((error) => null);
        if (createActor && !check)
          await this.createActor(scrapedActor).then((actor) =>
            this.createShowCastMember({
              actorId: actor.actorId,
              role: scrapedActor.role,
              showId,
            }),
          );
      }

      return;
    }

    // If the show is created for the first time
    for (const scrapedActor of data) {
      const { name, role, image } = scrapedActor;
      await this.createActor({ name, image })
        .then(
          (actor) =>
            this.createShowCastMember({
              actorId: actor.actorId,
              showId,
              role: scrapedActor.role,
            }),
          (error) => {
            this.getActorByNameAndImage(scrapedActor.name, scrapedActor.image)
              .then((actor) =>
                this.createShowCastMember({
                  showId,
                  actorId: actor.actorId,
                  role: scrapedActor.role,
                }),
              )
              .catch((error) => this.logger.error(error));
          },
        )
        .catch((error) => this.logger.error(error));
    }
  }
}
