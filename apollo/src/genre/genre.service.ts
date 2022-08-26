import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma/prisma.service';
import { CreateGenreDto, CreateShowGenreDto } from './dto';
import { Genre, ShowGenre } from '../../prisma/client';

@Injectable()
export class GenreService {
  constructor(private readonly client: PrismaService) {}

  async createGenreService(genre: CreateGenreDto): Promise<Genre> {
    return this.client.genre.create({ data: genre });
  }

  async getGenresService(): Promise<Array<Genre>> {
    return this.client.genre.findMany();
  }

  async getGenreByIdService(genreId: number): Promise<Genre> {
    return this.client.genre.findUniqueOrThrow({ where: { genreId } });
  }

  async getGenreByNameService(genreName: string): Promise<Genre> {
    return this.client.genre.findUniqueOrThrow({ where: { name: genreName } });
  }

  async createShowGenreService(input: CreateShowGenreDto): Promise<ShowGenre> {
    return this.client.showGenre.create({ data: input });
  }

  async getShowGenresService(showId: number): Promise<Array<ShowGenre>> {
    return this.client.showGenre.findMany({ where: { showId: showId } });
  }
}
