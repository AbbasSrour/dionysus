import { Logger, Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';

@Module({
  imports: [],
  exports: [VideoService],
  providers: [VideoService, Logger],
  controllers: [VideoController],
})
export class VideoModule {}
