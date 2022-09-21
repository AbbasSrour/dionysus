import { Logger, Module } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';

@Module({
  imports: [],
  exports: [],
  providers: [EpisodeService, Logger],
  controllers: [EpisodeController],
})
export class EpisodeModule {}
