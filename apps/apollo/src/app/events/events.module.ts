import { Logger, Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { RmqService } from '@dio/common';
import { ActorModule } from '../actor/actor.module';
import { ImageModule } from '../image/image.module';
import { DirectorModule } from '../director/director.module';
import { EpisodeModule } from '../episode/episode.module';
import { GenreModule } from '../genre/genre.module';
import { ImdbModule } from '../imdb/imdb.module';
import { LanguageModule } from '../language/language.module';
import { MovieModule } from '../movie/movie.module';
import { SeriesModule } from '../series/series.module';
import { ServerModule } from '../server/server.module';
import { StudioModule } from '../studio/studio.module';
import { VideoModule } from '../video/video.module';
import { WriterModule } from '../writer/writer.module';

@Module({
  imports: [
    ActorModule,
    DirectorModule,
    EpisodeModule,
    GenreModule,
    ImageModule,
    ImdbModule,
    LanguageModule,
    MovieModule,
    SeriesModule,
    ServerModule,
    StudioModule,
    VideoModule,
    WriterModule,
  ],
  controllers: [EventsController],
  providers: [EventsService, RmqService, Logger],
})
export class EventsModule {}
