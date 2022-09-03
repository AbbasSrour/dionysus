import { Module } from '@nestjs/common';
import { ImdbModule } from './imdb/imdb.module';
import { TmdbModule } from './tmdb/tmdb.module';
import { ServerModule } from './server/server.module';
import { ScrapeModule } from './scrape/scrape.module';
import { HesitaService } from './hesita.service';
import { HesitaController } from './hesita.controller';
import { ConfigModule } from '@nestjs/config';
import { configuration, validateEnv } from './common/config';

@Module({
  imports: [
    ImdbModule,
    TmdbModule,
    ServerModule,
    ScrapeModule,
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
  ],
  controllers: [HesitaController],
  providers: [HesitaService],
})
export class HesitaModule {}
