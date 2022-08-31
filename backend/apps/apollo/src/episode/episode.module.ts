import { Module } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [EpisodeService, PrismaService],
  controllers: [EpisodeController],
})
export class EpisodeModule {}
