import { Logger, Module } from '@nestjs/common';
import { ImdbService } from './imdb.service';
import { ImdbController } from './imdb.controller';

@Module({
  imports: [],
  exports: [ImdbService],
  controllers: [ImdbController],
  providers: [ImdbService, Logger],
})
export class ImdbModule {}
