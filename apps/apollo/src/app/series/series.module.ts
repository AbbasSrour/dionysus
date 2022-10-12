import { Logger, Module } from '@nestjs/common';
import { SeriesService } from './series.service';
import { SeriesController } from './series.controller';
import { RmqModule } from '@dio/common';
import { HesitaConstant } from '../common/constants/hesita-proxy.constant';

@Module({
  imports: [
    RmqModule.register({
      name: HesitaConstant,
      queue: 'hesita',
    }),
  ],
  controllers: [SeriesController],
  providers: [SeriesService, Logger],
  exports: [SeriesService],
})
export class SeriesModule {}
