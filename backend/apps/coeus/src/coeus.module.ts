import { Module } from '@nestjs/common';
import { CoeusController } from './coeus.controller';
import { CoeusService } from './coeus.service';
import { SearchModule } from './search/search.module';

@Module({
  imports: [SearchModule],
  controllers: [CoeusController],
  providers: [CoeusService],
})
export class CoeusModule {}
