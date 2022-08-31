import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [VideoService, PrismaService],
  controllers: [VideoController],
  imports: [],
})
export class VideoModule {}
