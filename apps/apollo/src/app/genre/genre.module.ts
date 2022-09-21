import { Logger, Module } from '@nestjs/common';
import { GenreController } from './genre.controller';
import { GenreService } from './genre.service';

@Module({
  imports: [],
  exports: [],
  controllers: [GenreController],
  providers: [GenreService, Logger],
})
export class GenreModule {}
