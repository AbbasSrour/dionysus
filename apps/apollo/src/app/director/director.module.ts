import { Logger, Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';

@Module({
  imports: [],
  providers: [DirectorService, Logger],
  controllers: [DirectorController],
  exports: [DirectorService],
})
export class DirectorModule {}
