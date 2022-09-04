import { Module } from '@nestjs/common';
import { CustomLoggerService } from './Logger.service';

@Module({
  imports: [],
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class LoggerModule {}
