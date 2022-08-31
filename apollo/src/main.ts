import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { PrismaService } from './common/prisma/prisma.service';
import { ValidationPipe } from '@nestjs/common';
import {
  PrismaConflictInterceptor,
  PrismaNotFoundInterceptor,
} from './common/interceptors';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: process.env.NODE_ENV === 'production',
    }),
  );

  // Interceptors
  app.useGlobalInterceptors(new PrismaConflictInterceptor());
  app.useGlobalInterceptors(new PrismaNotFoundInterceptor());

  // Services
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const config = app.get(ConfigService);

  // Documentation
  const swaggerConfig = new DocumentBuilder()
    .setTitle('Apollo')
    .setDescription('Apollo Rest API description')
    .setVersion('1.0')
    .addTag('apollo')
    .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.listen(config.get<number>('port', 3000), () => {
    console.info(
      `⚡️[server]: Server running at https://localhost:${config.get<number>(
        'port',
        3000,
      )}`,
    );
    console.info(
      `🌱[environment]: Server running on ${config.get(
        'environment',
      )} environment`,
    );
    // console.info(
    //   `🗄️[Database]: Psql db ${process.env.APOLLO_DB_NAME} running on port ${process.env.APOLLO_DB_PORT}`,
    // );
  });
}

bootstrap();
