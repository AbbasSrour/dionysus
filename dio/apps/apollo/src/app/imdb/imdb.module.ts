import { Module } from '@nestjs/common';
import { ImdbService } from './imdb.service';
import { ImdbController } from './imdb.controller';

@Module({
  providers: [ImdbService],
  controllers: [ImdbController],
})
export class ImdbModule {}
