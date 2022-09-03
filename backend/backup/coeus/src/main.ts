import { RmqService } from '@app/common';
import { NestFactory } from '@nestjs/core';
import { CoeusModule } from './coeus.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(CoeusModule);

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
    }),
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
