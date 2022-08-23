import {Module} from '@nestjs/common';
import {ShowModule} from './show/show.module';
import {PrismaModule} from './prisma/prisma.module';
import {ConfigModule} from '@nestjs/config';
import configuration from './config/configuration';

@Module({
  imports: [
    ShowModule,
    PrismaModule,
    ConfigModule.forRoot({
      envFilePath: ['.env.development', '.env.production'],
      ignoreEnvFile: false,
      isGlobal: true,
      load: [configuration],
      cache: true,
      // validationSchema:
      // validationOptions: {
      //   allowUnknown: false,
      //   abortEarly: false,
      // },
      expandVariables: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
