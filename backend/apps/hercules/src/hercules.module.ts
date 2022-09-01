import { Module } from '@nestjs/common';
import { HerculesController } from './hercules.controller';
import { HerculesService } from './hercules.service';
import { PrismaModule } from './common/prisma';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration, validateEnv } from './common/config';
import { AuthModule } from './auth';
import { UserModule } from './user';
import { RmqModule } from '../../../libs/common/src';

const config = new ConfigService();

@Module({
  imports: [
    PrismaModule,
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
    AuthModule,
    UserModule,
    RmqModule.register({
      name: 'APOLLO',
      queue: 'apollo',
      url: config.get('rmqUrl'),
    }),
  ],
  controllers: [HerculesController],
  providers: [HerculesService],
})
export class HerculesModule {}
