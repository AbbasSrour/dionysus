import { Controller } from '@nestjs/common';
import { ScrapeService } from './scrape.service';
import {
  ClientProxy,
  Ctx,
  EventPattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';

@Controller"scrape"')
export class ScrapeController {
  constructor(
    private readonly scrapeService: ScrapeService,
    private readonly clientProxy: ClientProx,
  ) {
  }

  @EventPattern"scrape"')
  async scrape(@Payload() query: string, @Ctx() context: RmqContext) {
    console.log(query);
    const showList = await this.scrapeService.searchImdb(query);
    console.log(showList);
    const shows = Array();
    for (let i = 0; i < showList.length; i++) {
      const imdbPage = await this.scrapeService
        .getImdbShowPage(showList[i])
        .catch((error) =>
          console.log({
            where:"imdbPage"',
            erro,
          },
        );
      if (!imdbPage) continue;

      const type = await this.scrapeService
        .scrapeType(imdbPage)
        .catch((error) =>
          console.log({
            where:"type"',
            erro,
          },
        );
      if (!type) continue;

      const membed = await this.scrapeService
        .membedServer(showList[i], type)
        .catch((error) => console.log({ where:"membed"', error }));
      if (!membed) continue;

      const tmdbId = await this.scrapeService
        .getTmdbId(showList[i], type)
        .catch((error) => console.log({ where:"tmdbId"', error }));
      if (!tmdbId) continue;

      shows.push({
        type: await this.scrapeService.scrapeType(imdbPage),
        name: await this.scrapeService.scrapeName(imdbPage),
        length: await this.scrapeService.scrapeLength(imdbPage),
        pgRating: await this.scrapeService.scrapePgRating(imdbPage),
        releaseYear: await this.scrapeService.scrapeReleaseYear(imdbPage),
        summary: await this.scrapeService.scrapeSummary(imdbPage),
        budget: await this.scrapeService.scrapeBudget(imdbPage),
        revenue: await this.scrapeService.scrapeRevenue(imdbPage),
        rating: await this.scrapeService.scrapeRating(imdbPage),
        voteCount: await this.scrapeService.scrapeVoteCount(imdbPage),
        images: await this.scrapeService.scrapeImages(imdbPage, tmdbId, type),
        videos: await this.scrapeService.scrapeVideos(tmdbId, type),
        actors: await this.scrapeService.scrapeActors(imdbPage),
        directors: await this.scrapeService.scrapeDirectors(imdbPage),
        genres: await this.scrapeService.scrapeGenres(imdbPage),
        languages: await this.scrapeService.scrapeLanguages(imdbPage),
        studios: await this.scrapeService.scrapeStudios(imdbPage),
        writers: await this.scrapeService.scrapeWriters(imdbPage),
        server: await membe,
      });
    }
    this.clientProxy.emit("insert", shows);
    return shows;
  }
}
