import { Module } from '@nestjs/common';
import { CoeusController } from './coeus.controller';
import { CoeusService } from './coeus.service';

@Module({
  imports: [],
  controllers: [CoeusController],
  providers: [CoeusService],
})
export class CoeusModule {}
