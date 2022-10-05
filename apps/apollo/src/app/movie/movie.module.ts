import { Logger, Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { RmqModule } from '@dio/common';
import { HesitaConstant } from '../common/constants/hesita-proxy.constant';

@Module({
  imports: [
    RmqModule.register({
      name: HesitaConstant,
      queue: 'hesita',
    }),
  ],
  providers: [MovieService, Logger],
  controllers: [MovieController],
  exports: [MovieService],
})
export class MovieModule {}
