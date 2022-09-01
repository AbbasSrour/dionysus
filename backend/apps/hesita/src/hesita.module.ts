import { Module } from '@nestjs/common';
import { HesitaController } from './hesita.controller';
import { HesitaService } from './hesita.service';
import { ImdbModule } from './imdb/imdb.module';
import { TmdbModule } from './tmdb/tmdb.module';
import { ServerModule } from './server/server.module';

@Module({
  imports: [ImdbModule, TmdbModule, ServerModule],
  controllers: [HesitaController],
  providers: [HesitaService],
})
export class HesitaModule {}
