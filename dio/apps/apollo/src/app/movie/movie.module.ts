import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [MovieService, PrismaService],
  controllers: [MovieController],
  imports: [],
})
export class MovieModule {}
