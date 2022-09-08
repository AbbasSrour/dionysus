import { Injectable } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { CreateGenreDto, CreateShowGenreDto } from './dto';
import { Genre, ShowGenre } from '@prisma/client-apollo';
import { UpdateGenreDto } from './dto/update-genre.dto';

@Injectable()
export class GenreService {
  constructor(private readonly client: PrismaService) {}

  async createGenre(genre: CreateGenreDto): Promise<Genre> {
    return this.client.genre.create({ data: genre });
  }

  async getGenres(): Promise<Array<Genre>> {
    return this.client.genre.findMany();
  }

  async getGenreById(genreId: number): Promise<Genre> {
    return this.client.genre.findUniqueOrThrow({ where: { genreId } });
  }

  async getGenreByName(genreName: string): Promise<Genre> {
    return this.client.genre.findUniqueOrThrow({ where: { name: genreName } });
  }

  async createShowGenre(input: CreateShowGenreDto): Promise<ShowGenre> {
    return this.client.showGenre.create({ data: input });
  }

  async getShowGenres(showId: number): Promise<Array<ShowGenre>> {
    return this.client.showGenre.findMany({ where: { showId: showId } });
  }

  async updateGenre(genreId: number, data: UpdateGenreDto) {
    return this.client.genre.update({
      where: { genreId },
      data,
    });
  }
}
