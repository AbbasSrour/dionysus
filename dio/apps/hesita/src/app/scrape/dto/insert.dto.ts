import { ShowInput } from '../schemas/show.schema';
import { ActorInput } from '../schemas/actor.schema';
import { DirectorInput } from '../schemas/director.schema';
import { GenreInput } from '../schemas/genre.schema';
import { ImdbInput } from '../schemas/imdb.schema';
import { LanguageInput } from '../schemas/language.schema';
import { EpisodeServerInput, MovieServerInput } from '../schemas/server.schema';
import { ImageInput } from '../schemas/image.schema';
import { VideoInput } from '../schemas/video.schema';
import { StudioInput } from '../schemas/studio.schema';
import { WriterInput } from '../schemas/writer.schema';
import { MovieInput } from '../schemas/movie.schema';

export class InsertDto implements ShowInput {
  name: string;
  type: string;
  releaseYear: number;
  length: number;
  pgRating: string;
  summary: string;
  movie?: MovieInput;
  //todo
  episodes?: Array<string>;
  imdb: ImdbInput;
  images: Array<ImageInput>;
  videos: Array<VideoInput>;
  cast: Array<ActorInput>;
  directors: Array<DirectorInput>;
  genres: Array<GenreInput>;
  languages: Array<LanguageInput>;
  studios: Array<StudioInput>;
  servers: MovieServerInput | Array<EpisodeServerInput>;
  writers: Array<WriterInput>;
}
