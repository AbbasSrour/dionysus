import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowModule } from './show/show.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './common/config/configuration';
import { validateEnv } from './common/config/validate-env';
import { GenreModule } from './genre/genre.module';
import { ActorModule } from './actor/actor.module';
import { DirectorModule } from './director/director.module';
import { ImdbModule } from './imdb/imdb.module';
import { LanguageModule } from './language/language.module';
import { MovieModule } from './movie/movie.module';
import { ServerModule } from './server/server.module';
import { EpisodeModule } from './episode/episode.module';
import { StudioModule } from './studio/studio.module';
import { VideoModule } from './video/video.module';
import { WriterModule } from './writer/writer.module';
import { ImageModule } from './image/image.module';
import { PrismaService } from './common/prisma/prisma.service';

@Module({
  imports: [
    ShowModule,
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
    GenreModule,
    ActorModule,
    DirectorModule,
    ImageModule,
    ImdbModule,
    LanguageModule,
    MovieModule,
    ServerModule,
    EpisodeModule,
    StudioModule,
    VideoModule,
    WriterModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
