import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {ConfigService} from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);

  await app.listen(config.get('PORT') || '3000', () => {
    console.info(
      `⚡️[server]: Server running at https://localhost:${config.get('PORT')}`,
    );
    console.info(
      `🌱[environment]: Server running on ${config.get(
        'NODE_ENV',
      )} environment`,
    );
    // console.info(
    //   `🗄️[Database]: Psql db ${env.PSQL_DB_NAME} running on port ${env.PSQL_DB_PORT}`,
    // );
  });
}

bootstrap();
