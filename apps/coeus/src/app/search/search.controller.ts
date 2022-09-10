import {
  Controller,
  Get,
  Inject,
  InternalServerErrorException,
  Logger,
  NotFoundException,
  Param,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SearchService } from './search.service';

@Controller('search')
export class SearchController {
  constructor(
    @Inject('HESITA') private readonly hesitaProxy: ClientProxy,
    private readonly searchService: SearchService,
    private readonly logger: Logger
  ) {}

  @Get(':query')
  async Search(@Param('query') query: string) {
    // Check if the search term exists in the elasticsearch database
    const check = await this.searchService.searchElastic('search_terms', query);
    this.logger.log({
      check,
    });

    // if it exists return the shows
    if (check?.hits?.hits && check.hits.hits.length !== 0) {
      console.log('search term exists');
      const shows = await this.searchService.searchElastic('shows', query);
      //TODO Remome this, this is only for testing
      await this.searchService.deleteDocumentElastic(
        'search_terms',
        check.hits.hits[0]._id
      );
      if (!shows) throw new NotFoundException();
      console.log({ shows });
      return shows;
    }

    console.log("search term doesn't exist");
    // else add the search term to databse emit a message to the scraper and search the database
    // for shows that are present
    const searchTerm = await this.searchService.indexElastic('search_terms', {
      searchTerm: query,
    });

    if (!searchTerm) throw new InternalServerErrorException();

    this.hesitaProxy.emit('scrape', query);

    const shows = await this.searchService.searchElastic('shows', query);

    //TODO Remome this, this is only for testing
    await this.searchService.deleteDocumentElastic(
      'search_terms',
      searchTerm._id
    );

    if (!shows) throw new NotFoundException();

    return shows;
  }
}
