import { Module } from '@nestjs/common';
import { TmdbService } from './tmbd.service';

@Module({
  providers: [TmdbService],
  exports: [TmdbService],
})
export class TmdbModule {}
