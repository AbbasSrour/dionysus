import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [DirectorService, PrismaService],
  controllers: [DirectorController],
})
export class DirectorModule {}
