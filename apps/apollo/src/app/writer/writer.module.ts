import { Logger, Module } from '@nestjs/common';
import { WriterService } from './writer.service';
import { WriterController } from './writer.controller';

@Module({
  providers: [WriterService, Logger],
  controllers: [WriterController],
})
export class WriterModule {}
