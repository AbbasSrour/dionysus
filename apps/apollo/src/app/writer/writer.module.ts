import { Logger, Module } from '@nestjs/common';
import { WriterService } from './writer.service';
import { WriterController } from './writer.controller';

@Module({
  imports: [],
  exports: [WriterService],
  providers: [WriterService, Logger],
  controllers: [WriterController],
})
export class WriterModule {}
