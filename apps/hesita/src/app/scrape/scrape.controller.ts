import { Controller, Get, Inject, Logger, Param } from '@nestjs/common';
import { ScrapeService } from './scrape.service';
import {
  ClientProxy,
  Ctx,
  EventPattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { APOLLOPROXY } from '../common/constants';
import { RmqService } from '@dio/common';
import { InsertDto } from './dto/insert.dto';

@Controller('scrape')
export class ScrapeController {
  constructor(
    private readonly scrapeService: ScrapeService,
    private readonly rmqService: RmqService,
    @Inject(APOLLOPROXY) private readonly apolloProxy: ClientProxy,
    private readonly logger: Logger,
  ) {}

  @Get('/:searchTerm')
  async testScrape(@Param('searchTerm') searchTerm: string) {
    const shows = this.ScrapeMethod(searchTerm);
    await this.apolloProxy.emit('insert', shows);
    return shows;
  }

  @EventPattern('scrape')
  async scrape(@Payload() payload: string, @Ctx() context: RmqContext) {
    const shows = this.ScrapeMethod(payload);
    await this.apolloProxy.emit('insert', shows);
    /* this.rmqService.ack(context); */
    return shows;
  }

  async ScrapeMethod(searchTerm: string) {
    const showList = await this.scrapeService.searchImdb(searchTerm);
    const shows = Array<InsertDto>();

    console.log(showList);

    for (const imdbId of showList) {
      const imdbPage = await this.scrapeService.getImdbShowPage(imdbId);
      if (!imdbPage) continue;

      const type = await this.scrapeService.scrapeType(imdbPage);
      if (!type) continue;

      let membed = null;
      if (type === 'Movie')
        membed = await this.scrapeService.getMembedUrl(imdbId);
      else membed = await this.scrapeService.seriesExist(imdbId);
      if (!membed) continue;

      const tmdbId = await this.scrapeService.getTmdbId(imdbId, type);
      if (!tmdbId) continue;

      const show: InsertDto = {
        name: '',
        releaseYear: 0,
        length: 0,
        pgRating: '',
        summary: '',
        type: '',
        movie: { budget: 0, revenue: 0, urls: undefined },
        series: { avgEpisodeLength: 0, episodes: undefined, type: '' },
        images: undefined,
        videos: undefined,
        imdb: { imdbId: '', rating: 0, voteCount: 0 },
        actors: undefined,
        directors: undefined,
        genres: undefined,
        languages: undefined,
        servers: undefined,
        studios: undefined,
        writers: undefined,
      };
    }
    return shows;
  }
}
