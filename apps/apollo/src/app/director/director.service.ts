import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Director, ShowDirector } from '@prisma/client-apollo';
import {
  CreateDirectorDto,
  CreateShowDrirectorDto,
  InsertDirectorDto,
  UpdateDirectorDto,
} from './dto';

@Injectable()
export class DirectorService {
  constructor(
    private readonly client: PrismaService,
    private readonly logger: Logger,
  ) {}

  async getDirectors() {
    return this.client.director.findMany();
  }

  async getShowDirectors(showId: number): Promise<Array<Director>> {
    return this.client.director.findMany({
      where: {
        ShowDirector: {
          some: {
            showId,
          },
        },
      },
    });
  }

  async createDirector(input: CreateDirectorDto): Promise<Director> {
    return this.client.director.create({ data: input });
  }

  async getDirector(id: number): Promise<Director> {
    return this.client.director.findUniqueOrThrow({
      where: { directorId: id },
    });
  }

  async findDirector(name: string, image: string): Promise<Director> {
    return this.client.director.findUniqueOrThrow({
      where: {
        name_image: {
          name,
          image,
        },
      },
    });
  }

  async updateDirector(id: number, data: UpdateDirectorDto) {
    return this.client.director.update({
      where: {
        directorId: id,
      },
      data,
    });
  }

  async deleteDirector(directorId: number) {
    return this.client.director.delete({
      where: {
        directorId,
      },
    });
  }

  async getShowDirector(directorId: number, showId: number) {
    return this.client.showDirector.findUniqueOrThrow({
      where: {
        showId_directorId: {
          showId,
          directorId,
        },
      },
    });
  }

  async createShowDirector(
    input: CreateShowDrirectorDto,
  ): Promise<ShowDirector> {
    return this.client.showDirector.create({ data: input });
  }

  async deleteShowDirector(directorId: number, showId: number) {
    return this.client.showDirector.delete({
      where: {
        showId_directorId: {
          directorId,
          showId,
        },
      },
    });
  }

  async insertDirectors(showId: number, data: Array<InsertDirectorDto>) {
    // BUG: Idk what will happen if their exists two directors with the same name for the same show
    const directors = await this.getShowDirectors(showId).catch((error) =>
      this.logger.error(error),
    );

    if (directors && directors.length > 0) {
      // check and remove old directors from show director list
      directors.forEach((director) => {
        let deleteDirector = true;
        let index: number;
        data.forEach((scrapedDirector, i) => {
          if (scrapedDirector.name === director.name) {
            deleteDirector = false;
            index = i;
          }
        });
        if (deleteDirector) {
          this.deleteShowDirector(director.directorId, showId);
          directors.splice(index, 1);
        }
      });

      // Add new directors
      for (const scrapedDirector of data) {
        let createDirector = true;
        for (const director of directors) {
          if (scrapedDirector.name === director.name) createDirector = false;
        }
        if (createDirector) {
          await this.createDirector(scrapedDirector).then(
            (director) =>
              this.createShowDirector({
                showId,
                directorId: director.directorId,
              }),
            (error) => this.logger.error(error),
          );
        }
      }

      // Update old directors
      directors.forEach((director) => {
        data.forEach((scrapedDirector) => {
          if (
            director.image !== scrapedDirector.image &&
            director.name === scrapedDirector.name
          ) {
            this.updateDirector(director.directorId, {
              image: scrapedDirector.image,
            });
            return;
          }
        });
      });
    }

    data.forEach((scrapedDirector) => {
      this.createDirector(scrapedDirector)
        .then(
          (director) =>
            this.createShowDirector({
              directorId: director.directorId,
              showId,
            }),
          () => {
            this.findDirector(scrapedDirector.name, scrapedDirector.image)
              .then((director) =>
                this.createShowDirector({
                  directorId: director.directorId,
                  showId,
                }),
              )
              .catch((error) => this.logger.error(error));
          },
        )
        .catch((error) => this.logger.error(error));
    });
  }
}
