import { Logger } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { RedisClientType } from "redis";
import { RedisCoreModule } from "@app/common/redis/redis-core.module";

//TODO remove inject config
export const RedisModuleConfig = RedisCoreModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (config: ConfigService) => {
    const logger = new Logger('RedisModule');
    return {
      connectionOptions: {
        url: `redis://${config.get<string>('redis.host')}:${config.get<string>(
          'redis.port',
        )}`,
      },
      onClientReady: (client: RedisClientType) => {
        logger.log('Redis client ready');

        client.on('error', (err) => {
          logger.error('Redis Client Error: ', err);
        });

        client.on('connect', () => {
          logger.log(`Connected to redis on ${client.options?.url}`);
        });
      },
    };
  },
  inject: [ConfigService],
});
