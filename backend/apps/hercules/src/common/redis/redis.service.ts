import { Inject, Injectable } from '@nestjs/common';
import { REDIS_CONSTANT } from '@app/common/redis/redis-core.module';
import redis, { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  client: RedisClientType<
    redis.RedisModules,
    redis.RedisFunctions,
    redis.RedisScripts
  > = this.redisClient;

  constructor(
    @Inject(REDIS_CONSTANT) private readonly redisClient: RedisClientType,
  ) {}
}
