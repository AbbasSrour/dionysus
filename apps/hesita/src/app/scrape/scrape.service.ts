import { Injectable } from '@nestjs/common';
import { ImdbService } from '../imdb/imdb.service';
import * as cheerio from 'cheerio';
import { TmdbService } from '../tmdb/tmbd.service';
import { ServerService } from '../server/server.service';
import { ImageInput } from './schemas/image.schema';
import { ConfigService } from '@nestjs/config';
import { VideoInput } from './schemas/video.schema';
import { ActorInput } from './schemas/actor.schema';
import { DirectorInput } from './schemas/director.schema';
import { GenreInput } from './schemas/genre.schema';
import { LanguageInput } from './schemas/language.schema';
import { StudioInput } from './schemas/studio.schema';
import { WriterInput } from './schemas/writer.schema';

@Injectable()
export class ScrapeService {
  constructor(
    private imdbService: ImdbService,
    private tmdbService: TmdbService,
    private serverService: ServerService,
    private config: ConfigService
  ) {}

  async searchImdb(query: string): Promise<string[]> {
    return await this.imdbService.searchImdb(query);
  }

  async getImdbShowPage(imdbId: string): Promise<cheerio.CheerioAPI> {
    return await this.imdbService.getShowPage(imdbId);
  }

  async getTmdbId(imdbId: string, type: string): Promise<number> {
    return await this.tmdbService.getTmdbIdUsingImdbId(imdbId, type);
  }

  async membedServer(imdbId: string, type: string) {
    return this.serverService.membedMovieServer(imdbId, type);
  }

  async scrapeType(imdbPage: cheerio.CheerioAPI): Promise<string> {
    return await this.imdbService.getType(imdbPage);
  }

  async scrapeName(imdbPage: cheerio.CheerioAPI): Promise<string> {
    return await this.imdbService.getName(imdbPage);
  }

  async scrapePgRating(imdbPage: cheerio.CheerioAPI): Promise<string> {
    return await this.imdbService.getPGRating(imdbPage);
  }

  async scrapeLength(imdbPage: cheerio.CheerioAPI): Promise<number> {
    return await this.imdbService.getLength(imdbPage);
  }

  async scrapeReleaseYear(imdbPage: cheerio.CheerioAPI): Promise<number> {
    return await this.imdbService.getReleaseYear(imdbPage);
  }

  async scrapeSummary(imdbPage: cheerio.CheerioAPI): Promise<string> {
    return await this.imdbService.getSummary(imdbPage);
  }

  async scrapeBudget(imdbPage: cheerio.CheerioAPI): Promise<number> {
    return await this.imdbService.getBudget(imdbPage);
  }

  async scrapeRevenue(imdbPage: cheerio.CheerioAPI): Promise<number> {
    return await this.imdbService.getRevenue(imdbPage);
  }

  async scrapeVoteCount(imdbPage: cheerio.CheerioAPI): Promise<number> {
    return await this.imdbService.getVoteCount(imdbPage);
  }

  async scrapeRating(imdbPage: cheerio.CheerioAPI): Promise<number> {
    return await this.imdbService.getRating(imdbPage);
  }

  async scrapeImages(
    imdbPage: cheerio.CheerioAPI,
    tmdbId: number,
    type: string
  ): Promise<Array<ImageInput>> {
    const imdbPosterLink = await this.imdbService.getPoster(imdbPage);
    const tmdbImages = await this.tmdbService.scrapeImagesFromTmdb(
      tmdbId,
      type
    );
    const images = Array<ImageInput>();
    images.push({
      url: imdbPosterLink,
      type: 'poster',
      width: null,
      height: null,
      aspectRatio: null,
      isDefault: true,
      language: 'en',
    });
    tmdbImages.backdrops.forEach((image) => {
      images.push({
        url: `${this.config.get<string>('tmdb.address')}/original/${
          image.file_path
        }`,
        type: 'backdrop',
        width: image.width,
        height: image.height,
        aspectRatio: image.aspect_ratio,
        isDefault: false,
        language: image.iso_639_1,
      });
    });
    tmdbImages.logos.forEach((image) => {
      images.push({
        url: `${this.config.get<string>('tmdb.address')}/original/${
          image.file_path
        }`,
        type: 'logo',
        width: image.width,
        height: image.height,
        aspectRatio: image.aspect_ratio,
        isDefault: false,
        language: image.iso_639_1,
      });
    });
    tmdbImages.posters.forEach((image) => {
      images.push({
        url: `${this.config.get<string>('tmdb.address')}/original/${
          image.file_path
        }`,
        type: 'poster',
        width: image.width,
        height: image.height,
        aspectRatio: image.aspect_ratio,
        isDefault: false,
        language: image.iso_639_1,
      });
    });
    return images;
  }

  async scrapeVideos(tmdbId: number, type: string): Promise<Array<VideoInput>> {
    let path: string;
    const videos = Array();
    const tmdbVideos = await this.tmdbService.scrapeVideosFromTmdb(
      tmdbId,
      type
    );
    tmdbVideos.results.forEach((video) => {
      if (video.site === 'YouTube') path = 'https://www.youtube.com/embed/';
      else path = 'https://www.themoviedb.org/video/play?key=';
      videos.push({
        isDefault: false,
        language: video.iso_639_1,
        name: video.name,
        official: video.official,
        publishedAt: video.published_at,
        quality: video.size,
        site: video.site,
        type: video.type,
        url: `${path}${video.key}`,
      });
    });
    return videos;
  }

  async scrapeActors(imdbPage: cheerio.CheerioAPI): Promise<Array<ActorInput>> {
    return await this.imdbService.getActors(imdbPage);
  }

  async scrapeDirectors(
    imdbPage: cheerio.CheerioAPI
  ): Promise<Array<DirectorInput>> {
    return await this.imdbService.getDirectors(imdbPage);
  }

  async scrapeGenres(imdbPage: cheerio.CheerioAPI): Promise<Array<GenreInput>> {
    return await this.imdbService.getGenres(imdbPage);
  }

  async scrapeLanguages(
    imdbPage: cheerio.CheerioAPI
  ): Promise<Array<LanguageInput>> {
    return await this.imdbService.getLanguages(imdbPage);
  }

  async scrapeStudios(
    imdbPage: cheerio.CheerioAPI
  ): Promise<Array<StudioInput>> {
    return await this.imdbService.getStudios(imdbPage);
  }

  async scrapeWriters(
    imdbPage: cheerio.CheerioAPI
  ): Promise<Array<WriterInput>> {
    return await this.imdbService.getWriters(imdbPage);
  }
}
