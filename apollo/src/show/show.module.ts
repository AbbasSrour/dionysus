import { Module } from '@nestjs/common';
import { ShowController } from './show.controller';
import { ShowService } from './show.service';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  controllers: [ShowController],
  providers: [ShowService, PrismaService],
  imports: [],
})
export class ShowModule {}
