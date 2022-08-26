import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [ActorService, PrismaService],
  controllers: [ActorController],
})
export class ActorModule {}
