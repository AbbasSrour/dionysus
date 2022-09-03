import { Controller, Get, Inject, Param } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ElasticsearchService } from '@nestjs/elasticsearch';

@Controller('search')
export class SearchController {
  constructor(
    @Inject('HESITA') private readonly hesitaProxy: ClientProxy,
    private readonly ElasticClient: ElasticsearchService,
  ) {}

  @Get(':query')
  async Search(@Param('query') query: string) {
    const check = await this.ElasticClient.search({
      index: 'SearchTerms',
      query: {
        match: { searchTerm: query },
      },
    });

    if (check) {
      const shows = await this.ElasticClient.search({
        index: 'Shows',
        query: {
          match: { name: query },
        },
      });
      return shows;
    } else {
      await this.ElasticClient.index({
        index: 'SearchTerms',
        document: {
          searchTerm: query,
        },
      });
      this.hesitaProxy.emit('scrape', query);
      const shows = await this.ElasticClient.search({
        index: 'Shows',
        query: {
          match: { name: query },
        },
      });
      return shows;
    }
  }
}
