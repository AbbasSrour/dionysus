import { Logger, Module } from '@nestjs/common';
import { ServerService } from './server.service';
import { ServerController } from './server.controller';

@Module({
  imports: [],
  exports: [ServerService],
  providers: [ServerService, Logger],
  controllers: [ServerController],
})
export class ServerModule {}
