import { Controller, Inject, Logger } from '@nestjs/common';
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
    private readonly logger: Logger
  ) {}

  @EventPattern('scrape')
  async scrape(@Payload() payload: string, @Ctx() context: RmqContext) {
    const showList = await this.scrapeService.searchImdb(payload);
    const shows = Array<InsertDto>();

    console.log(showList);

    for (let i = 0; i < showList.length; i++) {
      const imdbPage = await this.scrapeService
        .getImdbShowPage(showList[i])
        .catch((error) =>
          console.log({
            where: 'imdbPage',
            error,
          })
        );
      if (!imdbPage) continue;

      const type = await this.scrapeService
        .scrapeType(imdbPage)
        .catch((error) =>
          console.log({
            where: 'type',
            error,
          })
        );
      if (!type) continue;

      const membed = await this.scrapeService
        .membedServer(showList[i], type)
        .catch((error) => console.log({ where: 'membed', error }));
      if (!membed) continue;

      const tmdbId = await this.scrapeService
        .getTmdbId(showList[i], type)
        .catch((error) => console.log({ where: 'tmdbId', error }));
      if (!tmdbId) continue;

      const entry: InsertDto = {
        name: await this.scrapeService.scrapeName(imdbPage),
        type: await this.scrapeService.scrapeType(imdbPage),
        releaseYear: await this.scrapeService.scrapeReleaseYear(imdbPage),
        length: await this.scrapeService.scrapeLength(imdbPage),
        pgRating: await this.scrapeService.scrapePgRating(imdbPage),
        summary: await this.scrapeService.scrapeSummary(imdbPage),
        imdb: {
          imdbId: showList[i],
          rating: await this.scrapeService.scrapeRating(imdbPage),
          voteCount: await this.scrapeService.scrapeVoteCount(imdbPage),
        },
        images: await this.scrapeService.scrapeImages(imdbPage, tmdbId, type),
        videos: await this.scrapeService.scrapeVideos(tmdbId, type),
        cast: await this.scrapeService.scrapeActors(imdbPage),
        directors: await this.scrapeService.scrapeDirectors(imdbPage),
        genres: await this.scrapeService.scrapeGenres(imdbPage),
        languages: await this.scrapeService.scrapeLanguages(imdbPage),
        studios: await this.scrapeService.scrapeStudios(imdbPage),
        servers: membed,
        writers: await this.scrapeService.scrapeWriters(imdbPage),
      };

      if (type === 'Movie')
        entry.movie = {
          budget: await this.scrapeService.scrapeBudget(imdbPage),
          revenue: await this.scrapeService.scrapeRevenue(imdbPage),
        };
      shows.push(entry);
    }
    await this.apolloProxy.emit('insert', shows);
    /* this.rmqService.ack(context); */

    return shows;
  }
}
