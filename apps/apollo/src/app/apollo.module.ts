import { Logger, Module } from '@nestjs/common';

import { ApolloController } from './apollo.controller';
import { ApolloService } from './apollo.service';
import configuration from './common/config/configuration';
import { ConfigModule } from '@nestjs/config';
import { DirectorModule } from './director/director.module';
import { StudioModule } from './studio/studio.module';
import { validateEnv } from './common/config/validate-env';
import { PrismaModule } from './common/prisma';
import { ImageModule } from './image/image.module';
import { VideoModule } from './video/video.module';
import { ServerModule } from './server/server.module';
import { LanguageModule } from './language/language.module';
import { ActorModule } from './actor/actor.module';
import { MovieModule } from './movie/movie.module';
import { ImdbModule } from './imdb/imdb.module';
import { GenreModule } from './genre/genre.module';
import { WriterModule } from './writer/writer.module';
import { EpisodeModule } from './episode/episode.module';
import { EventsModule } from './events/events.module';
import { RmqService } from '@dio/common';

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
    ServerModule,
    StudioModule,
    VideoModule,
    WriterModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration],
      cache: true,
      validationSchema: validateEnv,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
      expandVariables: true,
    }),
    PrismaModule,
    EventsModule,
  ],
  controllers: [ApolloController],
  providers: [ApolloService, Logger, RmqService],
})
export class ApolloModule {}
