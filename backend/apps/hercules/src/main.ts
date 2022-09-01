import { NestFactory } from '@nestjs/core';
import { HerculesModule } from './hercules.module';
import * as cookieParser from 'cookie-parser';
import { PrismaService } from './common/prisma';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(HerculesModule);

  // Middleware
  app.use(cookieParser());

  //Services
  const prismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);
  const config = app.get(ConfigService);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(
    rmqService.getOptions('hercules', config.get('rmqUrl')),
  );

  // Pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
      disableErrorMessages: config.get<string>('environment') === 'production',
    }),
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
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, document);

  await app.startAllMicroservices();

  await app.listen(config.getOrThrow<number>('port'), () => {
    console.info(
      `⚡️[server]: Server running at https://localhost:${config.get<number>(
        'port',
      )}`,
    );
    console.info(
      `🌱[environment]: Server running on ${config.get(
        'environment',
      )} environment`,
    );
    console.info(
      `🗄️[Database]: Psql db ${process.env.APOLLO_DB_NAME} running on port ${process.env.APOLLO_DB_PORT}`,
    );
  });
}

bootstrap();
