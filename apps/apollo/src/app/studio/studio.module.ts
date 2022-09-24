import { Logger, Module } from '@nestjs/common';
import { StudioService } from './studio.service';
import { StudioController } from './studio.controller';

@Module({
  imports: [],
  exports: [StudioService],
  providers: [StudioService, Logger],
  controllers: [StudioController],
})
export class StudioModule {}
