import { Module } from '@nestjs/common';
import { CoeusController } from './coeus.controller';
import { CoeusService } from './coeus.service';
import configuration from './common/config/configuration';
import { validateEnv } from './common/config/validate-env';
import { SearchModule } from './search/search.module';
import { ConfigModule } from '@nestjs/config';

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
