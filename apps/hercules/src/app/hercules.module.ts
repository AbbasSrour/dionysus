import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './common/prisma';

import { HerculesController } from './hercules.controller';
import { HerculesService } from './hercules.service';
import { configuration } from './common/config';
import { AuthModule } from './auth';
import { RmqModule } from '@dio/common';
import { UserModule } from './user';

@Module({
  imports: [
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration],
      cache: true,
      // todo fix the environment variables
      // validationSchema: validateEnv,
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
    }),
  ],
  controllers: [HerculesController],
  providers: [HerculesService],
})
export class HerculesModule {}
