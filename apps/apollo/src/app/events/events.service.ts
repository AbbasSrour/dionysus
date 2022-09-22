import { Injectable, Logger } from '@nestjs/common';
import { InsertDto } from './dto/insert.dto';
import { MovieService } from '../movie/movie.service';
import { SeriesService } from '../series/series.service';
import { ImdbService } from '../imdb/imdb.service';
import { EpisodeService } from '../episode/episode.service';
import { ServerService } from '../server/server.service';
import { MovieEntity } from '../movie/movie.entity';
import { SeriesEntity } from '../series/series.entity';
import { ImageService } from '../image/image.service';
import { VideoService } from '../video/video.service';
import { ActorService } from '../actor/actor.service';
import { DirectorService } from '../director/director.service';
import { GenreService } from '../genre/genre.service';
import { LanguageService } from '../language/language.service';
import { StudioService } from '../studio/studio.service';
import { WriterService } from '../writer/writer.service';
import { ShowType } from './type/insert.types';

@Injectable()
export class EventsService {
  constructor(
    private readonly logger: Logger,
    private readonly movieService: MovieService,
    private readonly seriesService: SeriesService,
    private readonly imdbService: ImdbService,
    private readonly episodeService: EpisodeService,
    private readonly serverService: ServerService,
    private readonly imageService: ImageService,
    private readonly videoService: VideoService,
    private readonly actorService: ActorService,
    private readonly directorService: DirectorService,
    private readonly genreService: GenreService,
    private readonly languageService: LanguageService,
    private readonly studioService: StudioService,
    private readonly writerService: WriterService,
  ) {}

  async insert(payload: InsertDto) {
    const showData: ShowType = {
      length: payload.show.length,
      name: payload.show.name,
      pgRating: payload.show.pgRating,
      releaseYear: payload.show.releaseYear,
      summary: payload.show.summary,
      type: payload.show.type,
    };

    const server = await this.serverService.insertServer(payload.servers[0]);
    const { serverId } = server;

    let show: MovieEntity | SeriesEntity;

    if (showData.type === 'Movie') {
      const movie = payload.show.movie;
      const input = { ...showData, ...movie };
      const { urls } = movie;
      show = await this.movieService.insertMovie(input);
      const { movieId } = show;
      await this.serverService.insertMovieServer({ serverId, movieId, url: urls[0].url });
    } else {
      const series = payload.show.series;
      const { episodes, ...seriesData } = series;
      const input = { ...showData, ...seriesData };
      show = await this.seriesService.insertSeries(input);
      const { seriesId } = show;
      for (const episodeData of episodes) {
        const { urls, ...input } = episodeData;
        const url = urls[0].url;
        const episode = await this.episodeService.insertEpisode({
          ...input,
          seriesId,
        });
        const { episodeId } = episode;
        const episodeServer = await this.serverService.insertEpisodeServer({
          serverId,
          episodeId,
          url,
        });
      }
    }

    const { showId } = show;

    const imdb = await this.imdbService.insertImdb({
      ...payload.imdb,
      showId: show.showId,
    });

    for (const image of payload.images) {
      await this.imageService.insertImage({ ...image, showId });
    }
    for (const video of payload.videos) {
      await this.videoService.insertVideo({ ...video, showId });
    }
    await this.actorService.insertActors(showId, payload.actors);
    await this.directorService.insertDirectors(showId, payload.directors);
    await this.genreService.insertGenres(showId, payload.genres);
    await this.studioService.insertStudios(showId, payload.studios);
    await this.languageService.insertLanguages(showId, payload.languages);
    await this.writerService.insertWriters(showId, payload.writers);
  }
}
