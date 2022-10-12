import { Controller, Get, Inject, Logger, Param } from '@nestjs/common';
import { ScrapeService } from './scrape.service';
import {
  ClientProxy,
  Ctx,
  EventPattern,
  MessagePattern,
  Payload,
  RmqContext,
} from '@nestjs/microservices';
import { APOLLOPROXY } from '../common/constants';
import { RmqService } from '@dio/common';
import { InsertDto } from './dto/insert.dto';
import { lastValueFrom } from 'rxjs';

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
    this.rmqService.ack(context);
    return shows;
  }

  @MessagePattern('trending')
  async trendingMovies(@Payload() payload: string) {
    return await this.scrapeService.getTrending(payload);
  }

  async ScrapeMethod(searchTerm: string) {
    const showList = await this.scrapeService.searchImdb(searchTerm);
    console.log(searchTerm);
    console.log(showList);
    const shows = Array<InsertDto>();

    for (const imdbId of showList) {
      if (shows.length > 50) break;

      const exists = await lastValueFrom<boolean>(this.apolloProxy.send('check', imdbId));
      if (exists) {
        console.log(exists);
        break;
      }

      const showPage = await this.scrapeService.getImdbShowPage(imdbId);
      if (!showPage) continue;

      const type = await this.scrapeService.scrapeType(showPage);
      if (!type) continue;

      if (!(await this.scrapeService.showExists(imdbId, type))) continue;

      const tmdbId = await this.scrapeService.getTmdbId(imdbId, type);
      if (!tmdbId) continue;

      const show: InsertDto = {
        show:
          type === 'Movie'
            ? await this.scrapeService.getMovie(showPage, type, imdbId)
            : await this.scrapeService.getSeries(showPage, type, imdbId),
        servers: [await this.scrapeService.getMembedServer()],
        imdb: await this.scrapeService.scrapeImdb(showPage, imdbId),
        images: await this.scrapeService.scrapeImages(showPage, tmdbId, type),
        videos: await this.scrapeService.scrapeVideos(tmdbId, type),
        actors: await this.scrapeService.scrapeActors(showPage),
        directors: await this.scrapeService.scrapeDirectors(showPage, type, imdbId),
        genres: await this.scrapeService.scrapeGenres(showPage),
        languages: await this.scrapeService.scrapeLanguages(showPage),
        studios: await this.scrapeService.scrapeStudios(showPage),
        writers: await this.scrapeService.scrapeWriters(showPage),
      };

      (await this.scrapeService.scrapeSimilarShows(showPage)).forEach((id) => {
        let present = false;
        for (const imdbId of showList) {
          if (id === imdbId) {
            present = true;
            break;
          }
        }
        if (!present) showList.push(id);
      });

      console.log({
        inserted: imdbId,
        name: show.show.name,
      });
      this.apolloProxy.emit('insert', show);
      shows.push(show);
    }

    return shows;
  }
}
