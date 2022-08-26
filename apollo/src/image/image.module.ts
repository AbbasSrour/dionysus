import { Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';
import { PrismaService } from '../common/prisma/prisma.service';

@Module({
  providers: [ImageService, PrismaService],
  controllers: [ImageController],
  imports: [],
})
export class ImageModule {}
