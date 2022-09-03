import { NestFactory } from '@nestjs/core';
import { HesitaModule } from './hesita.module';
import { ConfigService } from '@nestjs/config';
import { RmqService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(HesitaModule);

  // Middleware
  // app.use(cookieParser());

  //Services
  const config = app.get(ConfigService);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(
    rmqService.getOptions('hesita', config.getOrThrow('rmqUrl')),
  );

  // Pipes
  // app.useGlobalPipes(
  //   new ValidationPipe({
  //     whitelist: true,
  //     transform: true,
  //     forbidNonWhitelisted: true,
  //     disableErrorMessages: config.get<string>('environment') === 'production',
  //   }),
  // );

  // Interceptors
  // app.useGlobalInterceptors(new PrismaConflictInterceptor());
  // app.useGlobalInterceptors(new PrismaNotFoundInterceptor());

  // Documentation
  // const swaggerConfig = new DocumentBuilder()
  //   .setTitle('Hesita')
  //   .setDescription('Hesita Rest API description')
  //   .setVersion('1.0')
  //   .addTag('hesita')
  //   .build();
  // const document = SwaggerModule.createDocument(app, swaggerConfig);
  // SwaggerModule.setup('docs', app, document);

  await app.startAllMicroservices();

  await app.listen(config.getOrThrow<number>('port'), () => {
    console.info(
      `⚡️[Hesita]: Hesita running at https://localhost:${config.get<number>(
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
