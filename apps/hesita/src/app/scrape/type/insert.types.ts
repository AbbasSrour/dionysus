import { InsertDto } from '../dto/insert.dto';

export type ShowType = typeof InsertDto.prototype.show;
export type MovieType = typeof InsertDto.prototype.show.movie;
export type SeriesType = typeof InsertDto.prototype.show.series;
export type EpisodeType = typeof InsertDto.prototype.show.series.episodes[0];
export type ImageType = typeof InsertDto.prototype.images[0];
export type VideoType = typeof InsertDto.prototype.videos[0];
export type ActorType = typeof InsertDto.prototype.actors[0];
export type DirectorType = typeof InsertDto.prototype.directors[0];
export type GenreType = typeof InsertDto.prototype.genres[0];
export type LanguageType = typeof InsertDto.prototype.languages[0];
export type WriterType = typeof InsertDto.prototype.writers[0];
export type StudioType = typeof InsertDto.prototype.studios[0];
export type ImdbType = typeof InsertDto.prototype.imdb;
export type ServerType = typeof InsertDto.prototype.servers[0];
