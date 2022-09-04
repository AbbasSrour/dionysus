import {
  DynamicModule,
  FactoryProvider,
  Module,
  ModuleMetadata,
} from '@nestjs/common';
import {
  createClient,
  RedisClientOptions,
  RedisClientType,
  RedisFunctions,
  RedisModules,
  RedisScripts,
} from 'redis';

export const REDIS_CONSTANT = 'REDIS';

type RedisModuleOptions = {
  connectionOptions: RedisClientOptions;
  onClientReady: (
    client: RedisClientType<RedisModules, RedisFunctions, RedisScripts>
  ) => void;
};

type RedisAsyncModuleOptions = {
  useFactory: (
    ...args: any[]
  ) => Promise<RedisModuleOptions> | RedisModuleOptions;
} & Pick<ModuleMetadata, 'imports'> &
  Pick<FactoryProvider, 'inject'>;

@Module({
  providers: [],
})
export class RedisCoreModule {
  static async registerAsync({
    useFactory,
    imports,
    inject,
  }: RedisAsyncModuleOptions): Promise<DynamicModule> {
    const redisProvider = {
      provide: REDIS_CONSTANT,
      useFactory: async (...args: any) => {
        const { connectionOptions, onClientReady } = await useFactory(...args);
        const client = await createClient(connectionOptions);
        await client.connect();

        onClientReady(client);
        return client;
      },
      inject,
    };
    return {
      module: RedisCoreModule,
      imports,
      providers: [redisProvider],
      exports: [redisProvider],
    };
  }
}
