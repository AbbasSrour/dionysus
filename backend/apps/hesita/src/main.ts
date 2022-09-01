import { NestFactory } from '@nestjs/core';
import { HesitaModule } from './hesita.module';

async function bootstrap() {
  const app = await NestFactory.create(HesitaModule);
  await app.listen(3000);
}

bootstrap();
