import { NestFactory } from '@nestjs/core';
import { CoeusModule } from './coeus.module';

async function bootstrap() {
  const app = await NestFactory.create(CoeusModule);
  await app.listen(3000);
}

bootstrap();
