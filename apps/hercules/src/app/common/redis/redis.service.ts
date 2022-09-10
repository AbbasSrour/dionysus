import { Inject, Injectable } from '@nestjs/common';
import {
  RedisClientType,
  RedisFunctions,
  RedisModules,
  RedisScripts,
} from 'redis';
import { REDIS_CONSTANT } from '@dio/common';

@Injectable()
export class RedisService {
  client: RedisClientType<RedisModules, RedisFunctions, RedisScripts> =
    this.redisClient;

  constructor(
    @Inject(REDIS_CONSTANT) private readonly redisClient: RedisClientType
  ) {}
}
