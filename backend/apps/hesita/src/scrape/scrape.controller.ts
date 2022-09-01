import { Controller, Get, Param } from '@nestjs/common';
import { ScrapeService } from './scrape.service';

@Controller('scrape')
export class ScrapeController {
  constructor(private readonly scrapeService: ScrapeService) {}

  @Get('/:query')
  async scrape(@Param('query') query: string) {
    const showList = this.scrapeService.searchImdb(query);
    const shows = Array();
    for (const showListKey in showList) {
      const membedUrl = await this.scrapeService.membedServer(showListKey);
      const imdbPage = await this.scrapeService.getImdbShowPage(showListKey);
      const tmdbId = await this.scrapeService.getTmdbId(showListKey);
      if (!membedUrl || !imdbPage) continue;
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
        images: await this.scrapeService.scrapeImages(imdbPage, tmdbId),
        videos: await this.scrapeService.scrapeVideos(tmdbId),
        actors: await this.scrapeService.scrapeActors(imdbPage),
        directors: await this.scrapeService.scrapeDirectors(imdbPage),
        genres: await this.scrapeService.scrapeGenres(imdbPage),
        languages: await this.scrapeService.scrapeLanguages(imdbPage),
        studios: await this.scrapeService.scrapeStudios(imdbPage),
        writers: await this.scrapeService.scrapeWriters(imdbPage),
      });
    }
    console.log(shows);
    return shows;
  }
}
