import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { CoeusModule } from './app/coeus.module';
import { ConfigService } from '@nestjs/config';
import { loggerConfig, RmqService } from '@dio/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import { WinstonModule } from 'nest-winston'

async function bootstrap() {
  const app = await NestFactory.create(CoeusModule, {
    logger: WinstonModule.createLogger(loggerConfig('coeus')),
  });
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  // Middleware
  app.use(cookieParser());

  //Services
  const config = app.get(ConfigService);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions('coeus', config.get('rmqUrl')));

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

  // Documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Hercules')
    .setDescription('Hercules Rest API description')
    .setVersion('1.0')
    .addTag('hercules')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  app.startAllMicroservices();
  await app.listen(config.getOrThrow<number>('port'));
  Logger.log(
    `🚀 Application is running on: http://localhost:${config.get(
      'port'
    )}/${globalPrefix}`
  );
}

bootstrap();
