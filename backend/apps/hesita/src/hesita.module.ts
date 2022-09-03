import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HesitaController } from './hesita.controller';
import { HesitaService } from './hesita.service';
import { configuration, validateEnv } from './common/config';
import { RmqModule } from '@app/common';

const config = new ConfigService();

@Module({
  imports: [
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
    RmqModule.register({
      name: 'APOLLO',
      queue: 'apollo',
      url: config.get('rmqUrl'),
    }),
  ],
  controllers: [HesitaController],
  providers: [HesitaService],
})
export class HesitaModule {}
