import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../common/prisma';
import { SeriesEntity } from './series.entity';
import { CreateSeriesDto } from './dto';

@Injectable()
export class SeriesService {
  constructor(
    private readonly client: PrismaService,
    private readonly logger: Logger,
  ) {}

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

  async createSeries(input: CreateSeriesDto) {
    const { name, releaseYear, summary, pgRating, length, ...seriesInput } =
      input;
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
}
