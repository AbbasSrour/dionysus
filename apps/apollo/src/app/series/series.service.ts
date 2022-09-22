import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { SeriesEntity } from './series.entity';
import { CreateSeriesDto, UpdateSeriesDto } from './dto';
import { dateDifferenceUtil } from '../events/utilities/date-difference.util';

@Injectable()
export class SeriesService {
  constructor(private readonly client: PrismaService, private readonly logger: Logger) {}

  async getSerieses(page: number): Promise<Array<SeriesEntity>> {
    const take = page * 10;
    const seriesArr = new Array<SeriesEntity>();

    const data = await this.client.series.findMany({ take });
    for (const elem of data) {
      const show = await this.client.show.findUniqueOrThrow({
        where: { showId: elem.showId },
      });
      const entry = {
        ...show,
        ...elem,
      };
      const { createdAt, updatedAt, ...series } = entry;
      seriesArr.push(series);
    }
    return seriesArr;
  }

  async getSeriesById(seriesId: number): Promise<SeriesEntity> {
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
    const data = { ...show, ...series };

    const { createdAt, updatedAt, ...seriesEntity } = data;
    return seriesEntity;
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
    return await this.getSeriesById(show.showId);
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
