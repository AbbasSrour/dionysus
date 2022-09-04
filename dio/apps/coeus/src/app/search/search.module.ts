import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { RmqModule } from '@dio/common';

@Module({
  imports: [
    RmqModule.register({
      name: 'HESITA',
      queue: 'hesita',
    }),
  ],
  providers: [SearchService],
  controllers: [SearchController],
})
export class SearchModule {}
