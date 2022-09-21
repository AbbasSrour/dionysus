import { Logger, Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';

@Module({
  imports: [],
  providers: [MovieService, Logger],
  controllers: [MovieController],
  exports: [],
})
export class MovieModule {}
