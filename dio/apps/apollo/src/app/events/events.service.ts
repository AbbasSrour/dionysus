import { Injectable, Logger } from '@nestjs/common';
import { ActorService } from '../actor/actor.service';
import { ShowService } from '../show/show.service';
import { CreateShowDto } from '../show/dto';
import { Show } from '@prisma/client-apollo';
import { dateDifferenceUtil } from './utilities/date-difference.util';
import { ImageService } from '../image/image.service';
import { VideoService } from '../video/video.service';
import { CreateVideoDto } from '../video/dto';
import { DirectorService } from '../director/director.service';
import { EpisodeService } from '../episode/episode.service';
import { CreateEpisodeDto } from '../episode/dto';
import { CreateGenreDto } from '../genre/dto';
import { GenreService } from '../genre/genre.service';
import { CreateImageDto } from '../image/dto';
import { CreateImdbDto } from '../imdb/dto';
import { ImdbService } from '../imdb/imdb.service';
import { CreateLanguageDto } from '../language/dto';
import { LanguageService } from '../language/language.service';
import { ServerService } from '../server/server.service';
import { CreateServerDto } from '../server/dto';
import { CreateStudioDto } from '../studio/dto';
import { StudioService } from '../studio/studio.service';
import { WriterService } from '../writer/writer.service';
import { CreateWriterDto } from '../writer/dto';

@Injectable()
export class EventsService {
  constructor(
    private readonly logger: Logger,
    private readonly showService: ShowService,
    private readonly imdbService: ImdbService,
    private readonly imageService: ImageService,
    private readonly videoService: VideoService,
    private readonly actorService: ActorService,
    private readonly directorService: DirectorService,
    private readonly episodeService: EpisodeService,
    private readonly genreService: GenreService,
    private readonly languageService: LanguageService,
    private readonly serverService: ServerService,
    private readonly studioService: StudioService,
    private readonly writerService: WriterService
  ) {}

  async insertShow(data: CreateShowDto): Promise<Show> {
    return await this.showService.createShowService(data).catch((error) => {
      this.logger.log(error);
      return this.showService
        .getShowByNameReleaseYearService(data.name, data.releaseYear)
        .then((show) => {
          if (
            show.createdAt !== show.updatedAt &&
            dateDifferenceUtil(show.createdAt) >= 15
          )
            return this.showService.updateShow(show.showId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }

  async insertEpisode(data: CreateEpisodeDto) {
    return await this.episodeService.createEpisode(data).catch((error) => {
      this.logger.log(error);
      return this.episodeService
        .getEpisode(data.number, data.season, data.showId)
        .then((episode) => {
          if (
            episode.createdAt !== episode.updatedAt &&
            dateDifferenceUtil(episode.createdAt) >= 15
          )
            return this.episodeService.updateEpisode(episode.episodeId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }

  async insertImdb(data: CreateImdbDto) {
    return await this.imdbService.createImdb(data).catch((error) => {
      this.logger.log(error);
      return this.imdbService
        .getImdbById(data.imdbId)
        .then((imdb) => {
          if (
            imdb.createdAt !== imdb.updatedAt &&
            dateDifferenceUtil(imdb.createdAt) >= 15
          )
            return this.imdbService.updateImdb(imdb.imdbId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }

  async insertImage(data: CreateImageDto) {
    return await this.imageService.createImageService(data).catch((error) => {
      this.logger.log(error);
      return this.imageService
        .getImageByUrlService(data.url)
        .then((image) => {
          if (
            image.createdAt !== image.updatedAt &&
            dateDifferenceUtil(image.createdAt) >= 15
          )
            return this.imageService.updateImageService(image.imageId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }

  async insertVideo(data: CreateVideoDto) {
    return await this.videoService.createVideoService(data).catch((error) => {
      this.logger.log(error);
      return this.videoService
        .getVideoByUrlService(data.url)
        .then((video) => {
          if (
            video.createdAt !== video.updatedAt &&
            dateDifferenceUtil(video.createdAt) >= 15
          )
            return this.videoService.updateVideoService(video.videoId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }

  async insertGenre(showId: number, data: CreateGenreDto) {
    return await this.genreService.createGenre(data).then(
      (genre) => {
        this.genreService
          .createShowGenre({ genreId: genre.genreId, showId })
          .then((showGenre) => {
            return { genre, showGenre };
          });
      },

      (error) => {
        this.logger.log(error);
        return this.genreService
          .getGenreByName(data.name)
          .then((genre) => {
            if (
              genre.createdAt !== genre.updatedAt &&
              dateDifferenceUtil(genre.createdAt) >= 15
            )
              return this.genreService.updateGenre(genre.genreId, data);
            return null;
          })
          .catch((error) => {
            this.logger.error(error);
            return null;
          });
      }
    );
  }

  async insertLanguage(data: CreateLanguageDto) {
    return await this.languageService.createLanguage(data).catch((error) => {
      this.logger.log(error);
      return this.languageService
        .getLanguageByName(data.name)
        .then((language) => {
          if (
            language.createdAt !== language.updatedAt &&
            dateDifferenceUtil(language.createdAt) >= 15
          )
            return this.languageService.updateLanguage(
              language.languageId,
              data
            );
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }

  async insertServer(data: CreateServerDto) {
    return await this.serverService.createServer(data).catch((error) => {
      this.logger.log(error);
      return this.serverService
        .getServerByName(data.name)
        .then((server) => {
          if (
            server.createdAt !== server.updatedAt &&
            dateDifferenceUtil(server.createdAt) >= 15
          )
            return this.serverService.updateServer(server.serverId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }

  async insertStudio(data: CreateStudioDto) {
    return await this.studioService.createStudio(data).catch((error) => {
      this.logger.log(error);
      return this.studioService
        .getStudioByName(data.name)
        .then((studio) => {
          if (
            studio.createdAt !== studio.updatedAt &&
            dateDifferenceUtil(studio.createdAt) >= 15
          )
            return this.studioService.updateStudio(studio.studioId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }

  async insertWriter(data: CreateWriterDto) {
    return await this.writerService.createWriter(data).catch((error) => {
      this.logger.log(error);
      return this.writerService
        .getWriterByNameAndImage(data.name, data.image)
        .then((writer) => {
          if (
            writer.createdAt !== writer.updatedAt &&
            dateDifferenceUtil(writer.createdAt) >= 15
          )
            return this.writerService.updateWriter(writer.writerId, data);
          return null;
        })
        .catch((error) => {
          this.logger.error(error);
          return null;
        });
    });
  }
}
