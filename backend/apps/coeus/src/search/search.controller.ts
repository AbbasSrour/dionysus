import { Controller, Get, Param } from '@nestjs/common';

@Controller('search')
export class SearchController {
  @Get(':query')
  async Search(@Param('query') query: string) {
    // const check = await ElasticClient.search({
    //   index: "SearchTerms",
    //   query: {
    //     match: { searchTerm: searchTerm },
    //   },
    // });
    // if (check) {
    // Search elastic search for the movie and return it
    // } else {
    // await ElasticClient.index({
    //   index: "SearchTerms",
    //   document: {
    //     searchTerm: searchTerm,
    //   },
    // });
  }
}
