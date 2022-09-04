import { Module } from '@nestjs/common';
import { RedisService } from './redis.service';
import { RedisModuleConfig } from './redis.config';

@Module({
  imports: [RedisModuleConfig],
  providers: [RedisService],
  exports: [RedisService],
})
export class RedisModule {}
