import { Module } from '@nestjs/common';
import { CustomLoggerService } from '@app/common/logger/Logger.service';

@Module({
  imports: [],
  providers: [CustomLoggerService],
  exports: [CustomLoggerService],
})
export class LoggerModule {}
