import { Module } from '@nestjs/common';
import { ApolloController } from './apollo.controller';
import { ApolloService } from './apollo.service';
import { ActorModule } from './actor/actor.module';
import { DirectorModule } from './director/director.module';
import { EpisodeModule } from './episode/episode.module';
import { GenreModule } from './genre/genre.module';
import { ImageModule } from './image/image.module';
import { ImdbModule } from './imdb/imdb.module';
import { LanguageModule } from './language/language.module';
import { MovieModule } from './movie/movie.module';
import { ServerModule } from './server/server.module';
import { ShowModule } from './show/show.module';
import { StudioModule } from './studio/studio.module';
import { VideoModule } from './video/video.module';
import { WriterModule } from './writer/writer.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config/configuration';
import { validateEnv } from './common/config/validate-env';
import { PrismaModule } from './common/prisma';

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
    ShowModule,
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
  ],
  controllers: [ApolloController],
  providers: [ApolloService],
})
export class ApolloModule {}
