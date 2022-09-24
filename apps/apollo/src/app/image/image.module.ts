import { Logger, Module } from '@nestjs/common';
import { ImageService } from './image.service';
import { ImageController } from './image.controller';

@Module({
  imports: [],
  exports: [ImageService],
  controllers: [ImageController],
  providers: [ImageService, Logger],
})
export class ImageModule {}
