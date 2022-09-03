import { Module } from '@nestjs/common';
import { ScrapeController } from './scrape.controller';
import { ScrapeService } from './scrape.service';
import { ServerModule } from '../server/server.module';
import { ImdbModule } from '../imdb/imdb.module';
import { TmdbModule } from '../tmdb/tmdb.module';
import { RmqModule } from '@app/common';
import { ConfigService } from '@nestjs/config';

const config = new ConfigService();

@Module({
  imports: [
    ServerModule,
    ImdbModule,
    TmdbModule,
    RmqModule.register({
      name: 'APOLLO',
      queue: 'apollo',
      url: config.getOrThrow<string>('rmqUrl'),
    }),
  ],
  controllers: [ScrapeController],
  providers: [ScrapeService],
})
export class ScrapeModule {}
