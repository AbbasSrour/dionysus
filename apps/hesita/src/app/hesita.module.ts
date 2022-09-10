import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { HesitaController } from './hesita.controller';
import { HesitaService } from './hesita.service';
import { configuration, validateEnv } from './common/config';
import { RmqModule } from '@dio/common';
import { ScrapeModule } from './scrape/scrape.module';
import { ImdbModule } from './imdb/imdb.module';
import { ServerModule } from './server/server.module';
import { TmdbModule } from './tmdb/tmdb.module';

@Module({
  imports: [
    ImdbModule,
    ScrapeModule, 
    ServerModule,
    TmdbModule,
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
    RmqModule.register({
      name: 'APOLLO',
      queue: 'apollo',
    }),
  ],
  controllers: [HesitaController],
  providers: [HesitaService],
})
export class HesitaModule {}
