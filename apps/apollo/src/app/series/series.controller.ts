import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesEntity } from './series.entity';
import { CreateSeriesDto } from './dto';
import { SeriesPojo } from './pojo/series.pojo';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  async getSeries(@Query('page') page = 1, @Query('genreId') genreId?: number) {
    return this.seriesService.getSeriesArr(page, genreId);
  }

  @Post()
  async createSeries(@Body() body: CreateSeriesDto): Promise<SeriesEntity> {
    return this.seriesService.createSeries(body);
  }

  @Get('top')
  async getTopSeries(@Query('page') page = 1): Promise<Array<SeriesPojo>> {
    return await this.seriesService.getTop(page);
  }

  @Get('trending')
  async getTrending(@Query('page') page = 1): Promise<Array<SeriesPojo>> {
    return await this.seriesService.getTrending();
  }

  @Get('/:id')
  async getSeriesById(@Param('id') id: number): Promise<SeriesEntity> {
    return this.seriesService.getSeries(id);
  }
}
