import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { CreateStudioDto, InsertStudioDto, UpdateStudioDto } from './dto';
import { CreateShowStudioDto } from './dto/create-show-studio.dto';
import { ShowStudio, Studio } from '@prisma/client-apollo';

@Injectable()
export class StudioService {
  constructor(
    private readonly client: PrismaService,
    private readonly logger: Logger
  ) {}

  async getStudios(): Promise<Array<Studio>> {
    return this.client.studio.findMany();
  }

  async createStudio(input: CreateStudioDto): Promise<Studio> {
    return this.client.studio.create({ data: input });
  }

  async getStudioById(id: number): Promise<Studio> {
    return this.client.studio.findUniqueOrThrow({ where: { studioId: id } });
  }

  async getStudioByName(name: string): Promise<Studio> {
    return this.client.studio.findUniqueOrThrow({ where: { name } });
  }

  async createShowStudio(data: CreateShowStudioDto): Promise<ShowStudio> {
    return this.client.showStudio.create({ data });
  }

  async updateStudio(studioId: number, data: UpdateStudioDto) {
    return this.client.studio.update({
      where: { studioId },
      data,
    });
  }

  async getShowStudios(showId: number): Promise<Array<Studio>> {
    return this.client.studio.findMany({
      where: {
        ShowStudio: {
          some: {
            showId,
          },
        },
      },
    });
  }

  async deleteShowStudio(
    studioId: number,
    showId: number
  ): Promise<ShowStudio> {
    return this.client.showStudio.delete({
      where: {
        showId_studioId: {
          studioId,
          showId,
        },
      },
    });
  }

  async insertStudios(showId: number, data: Array<InsertStudioDto>) {
    // BUG: Idk what will happen if their exists two studios with the same name for the same show
    const studios = await this.getShowStudios(showId).catch((error) =>
      this.logger.error(error)
    );

    if (studios && studios.length > 0) {
      // check and remove old studios from show studio list
      studios.forEach((studio) => {
        let deleteStudio: boolean = true;
        let index: number;
        data.forEach((scrapedStudio, i) => {
          if (scrapedStudio.name === studio.name) {
            deleteStudio = false;
            index = i;
          }
        });
        if (deleteStudio) {
          this.deleteShowStudio(studio.studioId, showId);
          studios.splice(index, 1);
        }
      });

      // Add new studios
      for (const scrapedStudio of data) {
        let createStudio: boolean = true;
        for (const studio of studios) {
          if (scrapedStudio.name === studio.name) createStudio = false;
        }
        if (createStudio) {
          const studio = await this.createStudio(scrapedStudio).then(
            (studio) =>
              this.createShowStudio({
                showId,
                studioId: studio.studioId,
              }),
            (error) => this.logger.error(error)
          );
        }
      }

      // Update old studios
      studios.forEach((studio) => {
        data.forEach((scrapedStudio) => {
          if (
            studio.image !== scrapedStudio.image &&
            studio.name === scrapedStudio.name
          ) {
            this.updateStudio(studio.studioId, {
              image: scrapedStudio.image,
            });
            return;
          }
        });
      });
    }

    data.forEach((scrapedStudio) => {
      this.createStudio(scrapedStudio)
        .then(
          (studio) =>
            this.createShowStudio({
              studioId: studio.studioId,
              showId,
            }),
          (error) => {
            this.getStudioByName(scrapedStudio.name)
              .then((studio) =>
                this.createShowStudio({
                  studioId: studio.studioId,
                  showId,
                })
              )
              .catch((error) => this.logger.error(error));
          }
        )
        .catch((error) => this.logger.error(error));
    });
  }
}
