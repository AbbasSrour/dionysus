import { Module } from '@nestjs/common';
import { StudioService } from './studio.service';
import { StudioController } from './studio.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [StudioService, PrismaService],
  controllers: [StudioController],
  imports: [],
})
export class StudioModule {}
