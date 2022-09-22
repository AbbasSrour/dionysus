import { Injectable, Logger } from '@nestjs/common';
import { ImdbService } from '../imdb/imdb.service';
import * as cheerio from 'cheerio';
import { TmdbService } from '../tmdb/tmbd.service';
import { ServerService } from '../server/server.service';
import { ConfigService } from '@nestjs/config';
import {
  ActorType,
  DirectorType,
  EpisodeType,
  GenreType,
  ImageType,
  ImdbType,
  LanguageType,
  MovieType,
  SeriesType,
  ShowType,
  StudioType,
  VideoType,
  WriterType,
} from './type/insert.types';

@Injectable()
export class ScrapeService {
  constructor(
    private readonly logger: Logger,
    private imdbService: ImdbService,
    private tmdbService: TmdbService,
    private serverService: ServerService,
    private config: ConfigService,
  ) {}

  async searchImdb(query: string): Promise<string[]> {
    return await this.imdbService.searchImdb(query);
  }

  async getImdbShowPage(imdbId: string): Promise<cheerio.CheerioAPI | void> {
    return await this.imdbService
      .getShowPage(imdbId)
      .catch((error) => console.log({ where: 'imdbPage', error }));
  }

  async getTmdbId(imdbId: string, type: string): Promise<number | void> {
    return await this.tmdbService
      .getTmdbIdUsingImdbId(imdbId, type)
      .catch((error) => console.log({ where: 'tmdbId', error }));
  }

  async scrapeType(imdbPage: cheerio.CheerioAPI): Promise<string | void> {
    return await this.imdbService
      .getType(imdbPage)
      .catch((error) => console.log({ where: 'type', error }));
  }

  async getMembedServer() {
    return this.serverService.membedServer();
  }

  async showExists(imdbId: string, type: string): Promise<boolean> {
    return await this.serverService.membedShowExists(imdbId, type);
  }

  async getMovie(
    showPage: cheerio.CheerioAPI,
    type: string,
    imdbId: string,
  ): Promise<ShowType> {
    const name = await this.imdbService.MoviePage.getName(showPage);
    const summary = await this.imdbService.MoviePage.getSummary(showPage);
    const releaseYear = await this.imdbService.MoviePage.getReleaseYear(showPage);
    const pgRating = await this.imdbService.MoviePage.getPGRating(showPage);
    const length = await this.imdbService.MoviePage.getLength(showPage);

    const movie: MovieType = {
      budget: await this.imdbService.MoviePage.getBudget(showPage),
      revenue: await this.imdbService.MoviePage.getRevenue(showPage),
      urls: [
        {
          serverName: 'membed',
          url: await this.serverService.membedMovieServer(imdbId),
        },
      ],
    };

    return {
      type,
      name,
      releaseYear,
      length,
      summary,
      pgRating,
      movie,
    };
  }

  async getSeries(
    showPage: cheerio.CheerioAPI,
    type: string,
    imdbId: string,
  ): Promise<ShowType> {
    const name = await this.imdbService.SeriesPage.getName(showPage);
    const summary = await this.imdbService.SeriesPage.getSummary(showPage);
    const releaseYear = await this.imdbService.SeriesPage.getReleaseYear(showPage);
    const pgRating = await this.imdbService.SeriesPage.getPGRating(showPage);
    const length = await this.imdbService.SeriesPage.getLength(showPage);

    const series: SeriesType = {
      avgEpisodeLength: 0,
      type,
      episodes: await this.getEpisodes(imdbId),
    };

    return {
      type,
      name,
      releaseYear,
      length,
      summary,
      pgRating,
      series,
    };
  }

  async getEpisodes(imdbId: string): Promise<Array<EpisodeType>> {
    const episodes = new Array<EpisodeType>();
    let seasonPage = await this.imdbService.getSeasonPage(imdbId, 1);
    const numberOfSeasons = await this.imdbService.SeasonPage.getNumberOfSeasons(
      seasonPage,
    );

    for (let season = 1, noError = true; season <= numberOfSeasons && noError; season++) {
      try {
        if (season > 1) seasonPage = await this.imdbService.getSeasonPage(imdbId, season);

        const numberOfEpisodes = await this.imdbService.SeasonPage.getNumberOfEpisodes(
          seasonPage,
        );

        for (let episode = 1; episode < numberOfEpisodes; episode++) {
          const episodeData: EpisodeType = {
            name: await this.imdbService.SeasonPage.getEpisodeName(seasonPage, episode),
            number: episode,
            season: season,
            releaseDate: await this.imdbService.SeasonPage.getEpisodeReleaseDate(
              seasonPage,
              episode,
            ),
            length: 0,
            poster: await this.imdbService.SeasonPage.getEpisodePoster(
              seasonPage,
              episode,
            ),
            summary: await this.imdbService.SeasonPage.getEpisodeSummery(
              seasonPage,
              episode,
            ),
            urls: [
              {
                serverName: 'membed',
                url: await this.serverService.membedSeriesServer(imdbId, season, episode),
              },
            ],
          };

          episodes.push(episodeData);
        }
      } catch (error) {
        noError = false;
      }
    }
    return episodes;
  }

  async scrapeImdb(showPage: cheerio.CheerioAPI, imdbId: string): Promise<ImdbType> {
    return {
      imdbId,
      rating: await this.imdbService.MoviePage.getRating(showPage),
      voteCount: await this.imdbService.MoviePage.getVoteCount(showPage),
    };
  }

  async scrapeImages(
    imdbPage: cheerio.CheerioAPI,
    tmdbId: number,
    type: string,
  ): Promise<Array<ImageType>> {
    const imdbPosterLink = await this.imdbService.MoviePage.getPoster(imdbPage);
    const tmdbImages = await this.tmdbService.scrapeImagesFromTmdb(tmdbId, type);
    const images = Array<ImageType>();
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
        url: `${this.config.get<string>('tmdb.address')}/original/${image.file_path}`,
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
        url: `${this.config.get<string>('tmdb.address')}/original/${image.file_path}`,
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
        url: `${this.config.get<string>('tmdb.address')}/original/${image.file_path}`,
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

  async scrapeVideos(tmdbId: number, type: string): Promise<Array<VideoType>> {
    let path: string;
    const videos = [];
    const tmdbVideos = await this.tmdbService.scrapeVideosFromTmdb(tmdbId, type);
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

  async scrapeActors(imdbPage: cheerio.CheerioAPI): Promise<Array<ActorType>> {
    return await this.imdbService.MoviePage.getActors(imdbPage);
  }

  async scrapeDirectors(
    imdbPage: cheerio.CheerioAPI,
    type: string,
    imdbId: string,
  ): Promise<Array<DirectorType>> {
    if (type === 'Movie') return await this.imdbService.MoviePage.getDirectors(imdbPage);
    else
      return await this.imdbService.FullCastPage.getDirectors(
        await this.imdbService.getFullCastPage(imdbId),
      );
  }

  async scrapeGenres(imdbPage: cheerio.CheerioAPI): Promise<Array<GenreType>> {
    return await this.imdbService.MoviePage.getGenres(imdbPage);
  }

  async scrapeLanguages(imdbPage: cheerio.CheerioAPI): Promise<Array<LanguageType>> {
    return await this.imdbService.MoviePage.getLanguages(imdbPage);
  }

  async scrapeStudios(imdbPage: cheerio.CheerioAPI): Promise<Array<StudioType>> {
    return await this.imdbService.MoviePage.getStudios(imdbPage);
  }

  async scrapeWriters(imdbPage: cheerio.CheerioAPI): Promise<Array<WriterType>> {
    return await this.imdbService.MoviePage.getWriters(imdbPage);
  }
}
