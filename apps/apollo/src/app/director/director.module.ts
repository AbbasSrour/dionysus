import { Logger, Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';

@Module({
  imports: [],
  exports: [],
  controllers: [DirectorController],
  providers: [DirectorService, Logger],
})
export class DirectorModule {}
