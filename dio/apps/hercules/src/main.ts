import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { HerculesModule } from './app/hercules.module';
import cookieParser from 'cookie-parser';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { loggerConfig, RmqService } from '@dio/common';
import { PrismaService } from './app/common/prisma';
import { utilities, WinstonModule } from 'nest-winston';
import winston = require('winston');
import LokiTransport from 'winston-loki';

async function bootstrap() {
  const app = await NestFactory.create(HerculesModule, {
    logger: WinstonModule.createLogger(loggerConfig('hercules')),
  });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Middleware
  app.use(cookieParser());

  //Services
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const config = app.get(ConfigService);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(
    rmqService.getOptions('hercules', config.get('rmqUrl'))
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
    .setDescription('Hercules Rest API description')
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
