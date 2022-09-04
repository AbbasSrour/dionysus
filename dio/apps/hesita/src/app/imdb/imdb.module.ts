import { Module } from '@nestjs/common';
import { ImdbService } from './imdb.service';

@Module({
  providers: [ImdbService],
  exports: [ImdbService],
})
export class ImdbModule {}
