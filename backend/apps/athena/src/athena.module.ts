import { Module } from '@nestjs/common';
import { AthenaController } from './athena.controller';
import { AthenaService } from './athena.service';

@Module({
  imports: [],
  controllers: [AthenaController],
  providers: [AthenaService],
})
export class AthenaModule {}
