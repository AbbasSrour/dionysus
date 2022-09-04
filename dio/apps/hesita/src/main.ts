import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { HesitaModule } from './app/hesita.module';
import { ConfigService } from '@nestjs/config';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { RmqService } from '@dio/common';

async function bootstrap() {
  const app = await NestFactory.create(HesitaModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Middleware
  app.use(cookieParser());

  //Services
  const config = app.get(ConfigService);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(
    rmqService.getOptions('hesita', config.get('rmqUrl'))
  );

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: config.get<string>('environment') === 'production',
    })
  );

  // Interceptors
  // app.useGlobalInterceptors(new PrismaConflictInterceptor());
  // app.useGlobalInterceptors(new PrismaNotFoundInterceptor());

  // Documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Hercules')
    .setDescription('Hesita API description')
    .setVersion('1.0')
    .addTag('hercules')
    .build();
  const options: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  const document = SwaggerModule.createDocument(app, swaggerConfig, options);
  SwaggerModule.setup('docs', app, document);

  await app.startAllMicroservices();

  await app.listen(config.getOrThrow('port'));
  Logger.log(
    `🚀 Application is running on: http://localhost:${config.getOrThrow(
      'port'
    )}/${globalPrefix}`
  );
  Logger.log(
    `⚡️[server]: Server running at https://localhost:${config.get<number>(
      'port'
    )}`
  );
  Logger.log(
    `🌱[environment]: Server running on ${config.get(
      'environment'
    )} environment`
  );
  Logger.log(
    `🗄️[Database]: Psql db ${process.env.APOLLO_DB_NAME} running on port ${process.env.APOLLO_DB_PORT}`
  );
}

bootstrap();
