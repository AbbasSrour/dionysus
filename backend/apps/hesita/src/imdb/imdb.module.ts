import { Module } from '@nestjs/common';
import { ImdbService } from './imdb.service';

@Module({
  providers: [ImdbService],
})
export class ImdbModule {}
