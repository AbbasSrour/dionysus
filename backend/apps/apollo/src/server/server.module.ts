import { Module } from '@nestjs/common';
import { ServerService } from './server.service';
import { ServerController } from './server.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [ServerService, PrismaService],
  controllers: [ServerController],
  imports: [],
})
export class ServerModule {}
