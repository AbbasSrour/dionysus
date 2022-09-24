import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesEntity } from './series.entity';
import { CreateSeriesDto } from './dto';

@Controller('series')
export class SeriesController {
  constructor(private readonly seriesService: SeriesService) {}

  @Get()
  async getSeries(@Query('page') page: number) {
    return this.seriesService.getSerieses(page);
  }

  @Post()
  async createSeries(@Body() body: CreateSeriesDto): Promise<SeriesEntity> {
    return this.seriesService.createSeries(body);
  }

  @Get('/:id')
  async getSeriesById(@Param('id') id: number): Promise<SeriesEntity> {
    return this.seriesService.getSeriesById(id);
  }
}
