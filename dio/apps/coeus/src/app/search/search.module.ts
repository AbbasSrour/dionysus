import { Logger, Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchController } from './search.controller';
import { RmqModule } from '@dio/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    RmqModule.register({
      name: 'HESITA',
      queue: 'hesita',
    }),
    ElasticsearchModule.register({
      node: 'http://zeus:9200',
    }),
  ],
  controllers: [SearchController],
  providers: [SearchService, Logger],
})
export class SearchModule { }
