import { Module } from '@nestjs/common';
import { WriterService } from './writer.service';
import { WriterController } from './writer.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [WriterService, PrismaService],
  controllers: [WriterController],
  imports: [],
})
export class WriterModule {}
