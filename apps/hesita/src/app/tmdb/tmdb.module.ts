import { Logger, Module } from '@nestjs/common';
import { TmdbService } from './tmbd.service';

@Module({
  providers: [TmdbService, Logger],
  exports: [TmdbService],
})
export class TmdbModule {}
