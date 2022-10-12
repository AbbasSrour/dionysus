import { Inject, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { SeriesEntity } from './series.entity';
import { CreateSeriesDto, UpdateSeriesDto } from './dto';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';
import { Series, Show } from '@prisma/client-apollo';
import { SeriesPojo } from './pojo/series.pojo';
import { lastValueFrom } from 'rxjs';
import { HesitaConstant } from '../common/constants/hesita-proxy.constant';
import { ClientProxy } from '@nestjs/microservices';
import { MoviePojo } from '../movie/pojo/movie.pojo';

@Injectable()
export class SeriesService {
  constructor(
    private readonly client: PrismaService,
    private readonly logger: Logger,
    @Inject(HesitaConstant) private readonly hesitaProxy: ClientProxy,
  ) {}

  async getSeriesArr(page: number, genreId?: number): Promise<Array<SeriesPojo>> {
    const take = page * 10;
    const seriesArr = new Array<SeriesPojo>();
    let data;

    if (genreId)
      data = await this.client.series.findMany({
        take,
        where: {
          show: {
            ShowGenre: {
              some: {
                genreId,
              },
            },
          },
        },
      });
    else data = await this.client.series.findMany({ take });
    for (const elem of data) {
      const series = await this.getSeries(elem.seriesId);
      seriesArr.push(series);
    }
    return seriesArr;
  }

  async getSeries(seriesId: number): Promise<SeriesPojo> {
    const series = await this.client.series.findUniqueOrThrow({
      where: {
        seriesId,
      },
      select: {
        seriesId: true,
        showId: true,
        type: true,
        avgEpisodeLength: true,
      },
    });
    const show = await this.client.show.findUniqueOrThrow({
      where: {
        showId: series.showId,
      },
      include: {
        Imdb: true,
        ShowGenre: {
          select: {
            genre: true,
          },
        },
      },
    });

    const poster = this.client.image.findFirst({
      where: {
        isDefault: true,
        showId: show.showId,
        type: 'poster',
      },
      take: 1,
    });
    const backdrop = this.client.image.findFirst({
      where: {
        showId: show.showId,
        type: 'backdrop',
      },
      take: 1,
    });
    const logo = this.client.image.findFirst({
      where: {
        showId: show.showId,
        type: 'logo',
      },
      take: 1,
    });
    const trailer = this.client.video.findFirst({
      where: {
        showId: show.showId,
        type: 'Trailer',
      },
    });

    const data = await Promise.all([poster, backdrop, logo, trailer]);

    const seriesPojo = {
      ...show,
      ...series,
      poster: data[0],
      backdrop: data[1],
      logo: data[2],
      trailer: data[3],
    };

    const seriesData = { ...seriesPojo, genres: seriesPojo['ShowGenre'] };

    delete seriesData.ShowGenre;
    delete seriesData.createdAt;
    delete seriesData.updatedAt;
    return seriesData;
  }

  async findSeries(name: string, releaseYear: number): Promise<SeriesEntity> {
    const show = await this.client.show.findUniqueOrThrow({
      where: {
        name_releaseYear: {
          name,
          releaseYear,
        },
      },
    });
    return await this.getSeries(show.showId);
  }

  async getTop(page: number): Promise<Array<SeriesPojo>> {
    const take = page * 10;
    const ids = await this.client.series.findMany({
      select: {
        seriesId: true,
      },
      take,
      orderBy: [
        {
          show: {
            Imdb: {
              voteCount: 'desc',
            },
          },
        },
        {
          show: {
            Imdb: {
              rating: 'desc',
            },
          },
        },
      ],
    });
    const seriess = new Array<SeriesPojo>();
    for (const id of ids) {
      seriess.push(await this.getSeries(id.seriesId));
    }
    return seriess;
  }

  async getTrending() {
    const imdbIds: Array<string> = await lastValueFrom(
      this.hesitaProxy.send('trending', 'Series'),
    );
    const seriesArr = new Array<SeriesPojo>();
    for (const imdbId of imdbIds) {
      const series = await this.client.show.findFirst({
        where: {
          Imdb: {
            imdbId,
          },
        },
        include: {
          Series: {
            select: {
              seriesId: true,
            },
          },
        },
      });
      if (!series) continue;
      seriesArr.push(await this.getSeries(series.Series.seriesId));
    }
    return seriesArr;
  }

  async createSeries(input: CreateSeriesDto) {
    const { name, releaseYear, summary, pgRating, length, ...seriesInput } = input;
    const show = await this.client.show.create({
      data: {
        name,
        releaseYear,
        summary,
        pgRating,
        length,
      },
    });

    const series = await this.client.series.create({
      data: {
        showId: show.showId,
        ...seriesInput,
      },
    });

    const data = { ...show, ...series };
    const { createdAt, updatedAt, ...seriesEntity } = data;
    return seriesEntity;
  }

  async shouldUpdate(seriesId: number) {
    const series = await this.client.series.findUniqueOrThrow({
      where: {
        seriesId,
      },
    });
    const show = await this.client.show.findUniqueOrThrow({
      where: {
        showId: series.showId,
      },
    });

    return !(
      show.createdAt !== show.updatedAt &&
      dateDifferenceUtil(show.createdAt) >= 15 &&
      series.createdAt !== show.updatedAt &&
      dateDifferenceUtil(show.createdAt) >= 15
    );
  }

  async updateSeries(input: UpdateSeriesDto): Promise<SeriesEntity> {
    const { seriesId, avgEpisodeLength, type, ...rest } = input;
    const series = await this.client.series.update({
      where: {
        seriesId,
      },
      data: {
        avgEpisodeLength,
        type,
      },
    });
    const show = await this.client.show.update({
      where: {
        showId: series.showId,
      },
      data: {
        ...rest,
      },
    });
    const data = { ...show, ...series };
    const { createdAt, updatedAt, ...seriesEntity } = data;
    return seriesEntity;
  }

  async insertSeries(data: CreateSeriesDto): Promise<SeriesEntity> {
    return await this.createSeries(data).catch((error) => {
      this.logger.log(error);
      return this.findSeries(data.name, data.releaseYear)
        .then((series) => {
          if (this.shouldUpdate(series.seriesId))
            return this.updateSeries(data && { seriesId: series.seriesId });
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }
}
