import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ApolloModule } from './app/apollo.module';
import {
  loggerConfig,
  PrismaConflictInterceptor,
  PrismaNotFoundInterceptor,
  RmqService,
} from '@dio/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaService } from './app/common/prisma';
import cookieParser from 'cookie-parser';
import {WinstonModule} from 'nest-winston'


async function bootstrap() {
  const app = await NestFactory.create(ApolloModule, {
    logger: WinstonModule.createLogger(loggerConfig('apollo')),
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
    rmqService.getOptions('apollo', config.getOrThrow('rmqUrl'))
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
  app.useGlobalInterceptors(new PrismaConflictInterceptor());
  app.useGlobalInterceptors(new PrismaNotFoundInterceptor());

  // Documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Apollo')
    .setDescription('Apollo Rest API description')
    .setVersion('1.0')
    .addTag('apollo')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.startAllMicroservices();

  await app.listen(config.getOrThrow<number>('port'));
  Logger.log(
    `🚀 Application is running on: http://localhost:${config.getOrThrow<number>(
      'port'
    )}/${globalPrefix}`
  );
  console.info(
    `⚡️[server]: Server running at https://localhost:${config.get<number>(
      'port'
    )}`
  );
  console.info(
    `🌱[environment]: Server running on ${config.get(
      'environment'
    )} environment`
  );
  console.info(
    `🗄️[Database]: Psql db ${process.env.APOLLO_DB_NAME} running on port ${process.env.APOLLO_DB_PORT}`
  );
}

bootstrap();
