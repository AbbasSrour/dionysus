import { Inject, MiddlewareConsumer, Module } from '@nestjs/common';
import { RedisClientType } from 'redis';
import * as RedisStore from 'connect-redis';
import * as session from 'express-session';
import * as passport from 'passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientProxyFactory, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RedisModule } from './common/redis/redis.module';
import { REDIS } from './common/redis/redis.constant';
import configuration from './common/config/configuration';
import { validateEnv } from './common/config/validate-env';
import { RmqModule } from './common/rmq/rmq.module';

@Module({
  imports: [
    AuthModule,
    UserModule,
    RedisModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration],
      cache: true,
      validationSchema: validateEnv,
      validationOptions: {
        allowUnknown: true,
        abortEarly: false,
      },
      expandVariables: true,
    }),
    {
      provide: 'MAILER_SERVICE',
      useFactory: (configService: ConfigService) =>
        ClientProxyFactory.create({
          transport: Transport.RMQ,
          options: {
            urls: [configService.get<string>('RABBIT_MQ_URL')],
            queue: configService.get<string>('RABBIT_MQ_DEFAULT_QUEUE'),
            noAck: false,
            queueOptions: {
              durable: true,
            },
          },
        }),
    },
    RmqModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(@Inject(REDIS) private readonly redis: RedisClientType) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(
        session({
          store: new (RedisStore(session))({
            // Todo recheck on this in the future, the problem is that types are not yet updated
            // @ts-ignore
            client: this.redis,
            logErrors: true,
          }),
          saveUninitialized: false,
          secret: process.env.REDIS_STORE_SECRET || '',
          resave: false,
          cookie: {
            sameSite: true,
            httpOnly: false,
            maxAge: 60000,
          },
        }),
        passport.initialize(),
        passport.session(),
      )
      .forRoutes('*');
  }
}
