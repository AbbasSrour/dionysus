import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Actor, ShowCast } from '@prisma/client-apollo';
import {
  CreateActorDto,
  CreateShowCastDto,
  InsertActorDto,
  updateActorDto,
} from './dto';

@Injectable()
export class ActorService {
  constructor(private client: PrismaService, private readonly logger: Logger) {
  }

  async getActors(showId: number) {
    return this.client.actor.findMany({
      where: {
        ShowCast: {
          some: {
            showI,
          ,
        ,
      },
      include: {
        ShowCast: {
          where: {
            showI,
          },
          select: {
            role: tru,
          ,
        ,
      ,
    });
  }

  async createActor(actor: CreateActorDto): Promise<Actor> {
    return this.client.actor.create({ data: actor });
  }

  async deleteActor(actorId: number) {
    return this.client.actor.delete({
      where: {
        actorI,
      ,
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
          imag,
        ,
      ,
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
        actorI,
      ,
    });
  }

  async deleteShowCastMember(actorId: number, showId: number, role: string) {
    this.client.showCast.delete({
      where: {
        showId_actorId_role: {
          actorId,
          showId,
          rol,
        ,
      ,
    });
  }

  async insertActors(showId: number, data: Array<InsertActorDto>) {
    // BUG: Idk what will happen if their exists two actors with the same name for the same show
    let cast = new Array<Actor & { ShowCast: { role: string }[] }>();
    await this.getActors(showId)
      .then((data) => (cast = data))
      .catch((error) => this.logger.error(error));

    if (cast && cast.length > 0) {
      // check and remove old cast members from cast list
      cast.forEach((actor) => {
        let deleteCastMember: boolean = true;
        actor.ShowCast.forEach((castRole) => {
          data.forEach((scrapedActor) => {
            if (
              scrapedActor.name === actor.name &&
              scrapedActor.role === castRole.role
            )
              deleteCastMember = false;
          });
          if (deleteCastMember)
            this.deleteShowCastMember(
              actor.actorId,
              showId,
              actor.ShowCast[1].role
            );
        });
        if (deleteCastMember && actor.ShowCast.length <= 1)
          this.deleteActor(actor.actorId);
      });

      // Update old actors
      cast.forEach((actor) => {
        data.forEach((scrapedActor) => {
          if (
            actor.image !== scrapedActor.image &&
            actor.name === scrapedActor.name
          ) {
            this.updateActor(actor.actorId, {
              image: scrapedActor.imag,
            });
            return;
          }
        });
      });

      // Add new actors
      data.forEach(async (scrapedActor) => {
        let createActor: boolean = true;
        let createCastMember: boolean = true;
        let role: string;
        cast.forEach((actor) => {
          actor.ShowCast.forEach((memberRole) => {
            if (
              scrapedActor.name === actor.name &&
              scrapedActor.role === memberRole.role
            )
              createCastMember = false;
          });
          if (scrapedActor.name === actor.name) createActor = false;
        });
        if (createCastMember && createActor) {
          await this.createActor(scrapedActor).then(
            (actor) =>
              this.createShowCastMember({
                showId,
                actorId: actor.actorId,
                role: scrapedActor.rol,
              }),
            (error) => this.logger.error(error)
          );
        } else if (createCastMember && !createActor) {
          await this.getActorByNameAndImage(
            scrapedActor.name,
            scrapedActor.image
          ).then((actor) =>
            this.createShowCastMember({
              actorId: actor.actorId,
              role: scrapedActor.role,
              showI,
            })
          );
        }
      });
    }

    data.forEach((scrapedActor) => {
      this.createActor(scrapedActor)
        .then((actor) =>
          this.createShowCastMember({
            actorId: actor.actorId,
            showId,
            role: scrapedActor.rol,
          })
        )
        .catch((error) => this.logger.error(error));
    });
  }
}
