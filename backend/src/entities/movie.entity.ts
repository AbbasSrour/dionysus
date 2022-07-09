import {
  JoinColumn,
  OneToMany,
  Column,
  Entity,
  OneToOne,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Unique,
} from "typeorm";
import Imdb from "./imdb.entity";
import MovieCast from "./movie-cast.entity";
import MovieDirectors from "./movie-directors.entity";
import { MovieGenres } from "./movie-genres.entity";
import { MovieHistory } from "./movie-history.entity";
import { MovieProductionCompany } from "./movie-production-company.entity";
import { MovieRating } from "./movie-rating.entity";
import { MovieServers } from "./movie-servers.entity";
import { MovieWriters } from "./movie-writters.entity";

@Entity("movie", { schema: "dionysus" })
@Unique(["name", "releaseYear"])
@Unique(["imdbId"])
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
    unique: true,
  })
  releaseYear: number | null;

  @Column("character varying", {
    name: "wallpaper",
    nullable: true,
    length: 480,
  })
  wallpaper: string;

  @OneToOne(() => Imdb, {
    onDelete: "RESTRICT",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "imdb_id", referencedColumnName: "imdbId" }])
  imdbId: Imdb;

  @Column("character varying", { name: "summery", nullable: true, length: 480 })
  summery: string | null;

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

  @Column("bigint", { name: "revenue", nullable: true })
  revenue: string | null;

  @Column("character varying", {
    name: "og_language",
    nullable: true,
    length: 20,
  })
  ogLanguage: string | null;

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
}
