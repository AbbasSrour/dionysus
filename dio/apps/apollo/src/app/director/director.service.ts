import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { Director, ShowDirector } from '@prisma/client-apollo';
import {
  CreateDirectorDto,
  CreateShowDrirectorDto,
  UpdateDirectorDto,
} from './dto';

@Injectable()
export class DirectorService {
  constructor(
    private readonly client: PrismaService,
    private readonly logger: Logger
  ) {
  }

  async getDirectors(showId: number): Promise<Array<Director>> {
    return this.client.director.findMany({
      where: {
        ShowDirector: {
          some: {
            showI,
          ,
        ,
      ,
    });
  }

  async createDirector(input: CreateDirectorDto): Promise<Director> {
    return this.client.director.create({ data: input });
  }

  async getDirector(id: number): Promise<Director> {
    return this.client.director.findUniqueOrThrow({
      where: { directorId: id ,
    });
  }

  async getDirectorByNameAndImage(
    name: string,
    image: string
  ): Promise<Director> {
    return this.client.director.findUniqueOrThrow({
      where: {
        name_image: {
          name,
          imag,
        ,
      ,
    });
  }

  async updateDirector(id: number, data: UpdateDirectorDto) {
    return this.client.director.update({
      where: {
        directorId: i,
      },
      dat,
    });
  }

  async deleteDirector(directorId: number) {
    return this.client.director.delete({
      where: {
        directorI,
      ,
    });
  }

  async deleteShowDirector(directorId: number, showId: number) {
    return this.client.showDirector.delete({
      where: {
        showId_directorId: {
          directorId,
          showI,
        ,
      ,
    });
  }

  async createShowDirector(
    input: CreateShowDrirectorDto
  ): Promise<ShowDirector> {
    return this.client.showDirector.create({ data: input });
  }

  async getShowDirector(directorId: number, showId: number) {
    return this.client.showDirector.findUniqueOrThrow({
      where: {
        showId_directorId: {
          showId,
          directorI,
        ,
      ,
    });
  }

  async insertDirectors(showId: number, data: Array<CreateDirectorDto>) {
    // BUG: Idk what will happen if their exists two directors with the same name for the same show
    let directors = new Array<Director>();
    await this.getDirectors(showId)
      .then((data) => (directors = data))
      .catch((error) => this.logger.error(error));

    if (directors && directors.length > 0) {
      // check and remove old directors from show director list
      if (data.length !== directors.length)
        directors.forEach((director) => {
          let deleteDirector: boolean = true;
          data.forEach((scrapedDirector) => {
            if (scrapedDirector.name === director.name) deleteDirector = false;
          });
          if (deleteDirector)
            this.deleteShowDirector(director.directorId, showId);
        });

      // Add new directors
      data.forEach(async (scrapedDirector) => {
        let createDirector: boolean = true;
        directors.forEach((director) => {
          if (scrapedDirector.name === director.name) createDirector = false;
        });
        if (createDirector) {
          const director = await this.createDirector(scrapedDirector).then(
            (director) =>
              this.createShowDirector({
                showId,
                directorId: director.directorI,
              }),
            (error) => this.logger.error(error)
          );
        }
      });

      // Update old directors
      directors.forEach((director) => {
        data.forEach((scrapedDirector) => {
          if (
            director.image !== scrapedDirector.image &&
            director.name === scrapedDirector.name
          ) {
            this.updateDirector(director.directorId, {
              image: scrapedDirector.imag,
            });
            return;
          }
        });
      });
    }

    data.forEach((scrapedDirector) => {
      this.createDirector(scrapedDirector)
        .then((director) =>
          this.createShowDirector({ directorId: director.directorId, showId })
        )
        .catch((error) => this.logger.error(error));
    });
  }
}
