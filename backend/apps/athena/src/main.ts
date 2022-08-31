import { NestFactory } from '@nestjs/core';
import { AthenaModule } from './athena.module';

async function bootstrap() {
  const app = await NestFactory.create(AthenaModule);
  await app.listen(3000);
}

bootstrap();
