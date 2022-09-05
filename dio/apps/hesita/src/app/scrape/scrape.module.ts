import { Logger, Module } from '@nestjs/common';
import { ScrapeController } from './scrape.controller';
import { ScrapeService } from './scrape.service';
import { ServerModule } from '../server/server.module';
import { ImdbModule } from '../imdb/imdb.module';
import { TmdbModule } from '../tmdb/tmdb.module';
import { RmqModule } from '@dio/common';
import { ConfigService } from '@nestjs/config';
import { APOLLOPROXY } from '../common/constants';

const config = new ConfigService();

@Module({
  imports: [
    ServerModule,
    ImdbModule,
    TmdbModule,
    RmqModule.register({
      name: APOLLOPROXY,
      queue: 'apollo',
    }),
  ],
  controllers: [ScrapeController],
  providers: [ScrapeService, Logger],
})
export class ScrapeModule {}
