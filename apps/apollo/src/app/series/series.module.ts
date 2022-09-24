import { Logger, Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';

@Module({
  imports: [],
  controllers: [SeriesController],
  providers: [SeriesService, Logger],
  exports: [SeriesService],
})
export class SeriesModule {}
