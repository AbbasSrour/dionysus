import { Module } from '@nestjs/common';
import { ImdbService } from './imdb.service';
import { ImdbController } from './imdb.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [ImdbService, PrismaService],
  controllers: [ImdbController],
  imports: [],
})
export class ImdbModule {}
