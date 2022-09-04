import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { CoeusController } from './coeus.controller';
import { CoeusService } from './coeus.service';
import { SearchModule } from './search/search.module';
import configuration from './common/config/configuration';
import { validateEnv } from './common/config';

@Module({
  imports: [
    SearchModule,
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
  ],
  controllers: [CoeusController],
  providers: [CoeusService],
})
export class CoeusModule {}
