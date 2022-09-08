import { Module } from '@nestjs/common';
import { WriterService } from './writer.service';
import { WriterController } from './writer.controller';

@Module({
  providers: [WriterService],
  controllers: [WriterController],
})
export class WriterModule {}
