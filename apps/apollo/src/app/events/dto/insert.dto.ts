import { EpisodeServerInput, MovieServerInput } from '../schemas/server.schema';
import { CreateMovieDto } from '../../movie/dto';
import { CreateSeriesDto } from '../../series/dto';
import { CreateEpisodeDto } from '../../episode/dto';
import { CreateImdbDto } from '../../imdb/dto';
import { CreateImageDto } from '../../image/dto';
import { CreateVideoDto } from '../../video/dto';
import { CreateActorDto } from '../../actor/dto';
import { CreateDirectorDto } from '../../director/dto';
import { CreateGenreDto } from '../../genre/dto';
import { CreateLanguageDto } from '../../language/dto';
import { CreateStudioDto } from '../../studio/dto';
import { CreateWriterDto } from '../../writer/dto';

export class InsertDto {
  show: CreateMovieDto | CreateSeriesDto;
  episodes?: Array<CreateEpisodeDto>;
  imdb: CreateImdbDto;
  images: Array<CreateImageDto>;
  videos: Array<CreateVideoDto>;
  cast: Array<CreateActorDto & { role: string }>;
  directors: Array<CreateDirectorDto>;
  genres: Array<CreateGenreDto>;
  languages: Array<CreateLanguageDto>;
  studios: Array<CreateStudioDto>;
  servers: MovieServerInput | Array<EpisodeServerInput>;
  writers: Array<CreateWriterDto>;
}
