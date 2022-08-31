import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { Image, Show } from '../../prisma/client';
import { CreateShowDto } from './dto';

@Injectable()
export class ShowService {
  constructor(private client: PrismaService) {}

  async getAllShows(): Promise<Array<Show>> {
    return this.client.show.findMany();
  }

  async createShowService(input: CreateShowDto): Promise<Show> {
    return this.client.show.create({ data: input });
  }

  async getShowByIdService(id: number): Promise<Show> {
    return this.client.show.findUniqueOrThrow({ where: { showId: id } });
  }

  async getShowByNameReleaseYearService(
    name: string,
    releaseYear: number,
  ): Promise<Show> {
    return this.client.show.findUniqueOrThrow({
      where: { name_releaseYear: { name, releaseYear } },
    });
  }

  async getShowByImdbIdService(imdbId: string): Promise<Show> {
    const show = await this.client.imdb.findUniqueOrThrow({
      where: { imdbId },
    });
    return this.client.show.findUniqueOrThrow({
      where: { showId: show.showId },
    });
  }

  async searchShowByNameService(name: string): Promise<Array<Show> | null> {
    return this.client.show.findMany({
      where: {
        name: {
          contains: name,
        },
      },
    });
  }

  async getPopularShowService(): Promise<Array<Show>> {
    // TODO currently returns random, find a way to implement this!!!
    const randomIntFromInterval = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const count = await this.client.show.count();
    const showId = randomIntFromInterval(1, count);

    const shows = Array<Show>();
    shows.push(await this.client.show.findUniqueOrThrow({ where: { showId } }));
    return shows;
  }

  async getImages(
    showId: number,
    type?: string,
    isDefault?: boolean,
  ): Promise<Array<Image>> {
    return this.client.image.findMany({
      where: {
        showId,
        type: type,
        isDefault: isDefault,
      },
    });
  }
}
