import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import {
  CreateGenreDto,
  CreateShowGenreDto,
  InsertGenreDto,
  UpdateGenreDto,
} from './dto';
import { Genre, ShowGenre } from '@prisma/client-apollo';

@Injectable()
export class GenreService {
  constructor(private readonly client: PrismaService, private readonly logger: Logger) {}

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

  async getShowGenres(showId: number): Promise<Array<Genre>> {
    return this.client.genre.findMany({
      where: {
        ShowGenre: {
          some: {
            showId,
          },
        },
      },
    });
  }

  async updateGenre(genreId: number, data: UpdateGenreDto) {
    return this.client.genre.update({
      where: { genreId },
      data,
    });
  }

  async deleteShowGenre(genreId: number, showId: number): Promise<ShowGenre> {
    return this.client.showGenre.delete({
      where: {
        showId_genreId: {
          genreId,
          showId,
        },
      },
    });
  }

  async insertGenres(showId: number, data: Array<InsertGenreDto>) {
    // BUG: Idk what will happen if their exists two genres with the same name for the same show
    const genres = await this.getShowGenres(showId).catch((error) =>
      this.logger.error(error),
    );

    if (genres && genres.length > 0) {
      // check and remove old genres from show genre list
      genres.forEach((genre) => {
        let deleteGenre = true;
        let index: number;
        data.forEach((scrapedGenre, i) => {
          if (scrapedGenre.name === genre.name) {
            deleteGenre = false;
            index = i;
          }
        });
        if (deleteGenre) {
          this.deleteShowGenre(genre.genreId, showId);
          genres.splice(index, 1);
        }
      });

      // Add new genres
      for (const scrapedGenre of data) {
        let createGenre = true;
        for (const genre of genres) {
          if (scrapedGenre.name === genre.name) createGenre = false;
        }
        if (createGenre) {
          await this.createGenre(scrapedGenre).then(
            (genre) =>
              this.createShowGenre({
                showId,
                genreId: genre.genreId,
              }),
            (error) => this.logger.error(error),
          );
        }
      }

      return;
    }

    data.forEach((scrapedGenre) => {
      this.createGenre(scrapedGenre)
        .then(
          (genre) =>
            this.createShowGenre({
              genreId: genre.genreId,
              showId,
            }),
          () => {
            this.getGenreByName(scrapedGenre.name)
              .then((genre) =>
                this.createShowGenre({
                  genreId: genre.genreId,
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
