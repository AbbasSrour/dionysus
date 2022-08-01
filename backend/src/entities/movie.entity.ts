import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import MovieCast from "./movie-cast.entity";
import MovieDirectors from "./movie-directors.entity";
import { MovieGenres } from "./movie-genres.entity";
import { MovieHistory } from "./movie-history.entity";
import { MovieProductionCompany } from "./movie-production-company.entity";
import { MovieRating } from "./movie-rating.entity";
import { MovieServers } from "./movie-servers.entity";
import { MovieWriters } from "./movie-writters.entity";
import MovieLanguages from "./movie-languages.entity";
import MovieImdb from "./movie-imdb.entity";

@Entity("movie", { schema: "dionysus" })
@Unique("UNIQUE_MOVIE_NAME_RELEASE_YEAR", ["name", "releaseYear"])
export default class Movie extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_id" })
  movieId: number;

  @Column("character varying", {
    name: "name",
    length: 100,
  })
  name: string;

  @Column("integer", {
    name: "release_year",
    nullable: true,
  })
  releaseYear: number | null;

  @Column("character varying", {
    name: "poster",
    nullable: true,
    length: 480,
  })
  poster: string;

  @Column("character varying", {
    name: "cover",
    nullable: true,
    length: 480,
  })
  cover: string;

  @Column("character varying", { name: "summary", nullable: true, length: 480 })
  summary: string | null;

  @Column("character varying", { name: "trailer", nullable: true, length: 480 })
  trailer: string | null;

  @Column("character varying", {
    name: "pg_rating",
    nullable: true,
    length: 20,
  })
  pgRating: string | null;

  @Column("integer", { name: "length", nullable: true })
  movieLength: number | null;

  @Column("integer", { name: "budget", nullable: true })
  budget: number | null;

  @Column("integer", { name: "revenue", nullable: true })
  revenue: number | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => MovieCast, (movieCast) => movieCast.movieId)
  movieCast: MovieCast[];

  @OneToMany(() => MovieDirectors, (movieDirectors) => movieDirectors.movieId)
  movieDirectors: MovieDirectors[];

  @OneToMany(() => MovieGenres, (movieGenres) => movieGenres.movieId)
  movieGenres: MovieGenres[];

  @OneToMany(() => MovieHistory, (movieHistory) => movieHistory.movieId)
  movieHistories: MovieHistory[];

  @OneToMany(
    () => MovieProductionCompany,
    (movieProductionCompany) => movieProductionCompany.movieId
  )
  movieProductionCompany: MovieProductionCompany[];

  @OneToMany(() => MovieRating, (movieRating) => movieRating.movieId)
  movieRatings: MovieRating[];

  @OneToMany(() => MovieServers, (movieServers) => movieServers.movieId)
  movieServers: MovieServers[];

  @OneToMany(() => MovieWriters, (movieWriters) => movieWriters.movieId)
  movieWriters: MovieWriters[];

  @OneToMany(() => MovieLanguages, (movieLanguages) => movieLanguages.movieId)
  movieLanguages: MovieLanguages[];

  @OneToMany(() => MovieImdb, (movieImdb) => movieImdb.movieId)
  movieImdb: MovieImdb[];
}
