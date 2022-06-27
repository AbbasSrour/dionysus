import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ImdbMovie } from "./ImdbMovie";
import { MovieCast } from "./MovieCast";
import { MovieDirectors } from "./MovieDirectors";
import { MovieGenres } from "./MovieGenres";
import { MovieHistory } from "./MovieHistory";
import { MovieProductionCompany } from "./MovieProductionCompany";
import { MovieRating } from "./MovieRating";
import { MovieServers } from "./MovieServers";
import { MovieWriters } from "./MovieWriters";

@Index("pk_movie", ["movieId"], { unique: true })
@Index(
  "movie_movie_name_movie_release_year_key",
  ["movieName", "movieReleaseDate"],
  { unique: true }
)
@Entity("movie", { schema: "dionysus" })
export class Movie {
  @PrimaryGeneratedColumn({ type: "bigint", name: "movie_id" })
  movieId: string;

  @Column("character varying", {
    name: "movie_name",
    nullable: true,
    unique: true,
    length: 100,
  })
  movieName: string | null;

  @Column("character varying", {
    name: "movie_wallpaper",
    nullable: true,
    length: 480,
  })
  movieWallpaper: string | null;

  @Column("integer", {
    name: "movie_release_date",
    nullable: true,
    unique: true,
  })
  movieReleaseDate: number | null;

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

  @Column("integer", { name: "movie_length", nullable: true })
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

  @ManyToOne(() => ImdbMovie, (imdbMovie) => imdbMovie.movies, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "imdb_id", referencedColumnName: "imdbId" }])
  imdb: ImdbMovie;

  @OneToMany(() => MovieCast, (movieCast) => movieCast.movie)
  movieCasts: MovieCast[];

  @OneToMany(() => MovieDirectors, (movieDirectors) => movieDirectors.movie)
  movieDirectors: MovieDirectors[];

  @OneToMany(() => MovieGenres, (movieGenres) => movieGenres.movie)
  movieGenres: MovieGenres[];

  @OneToMany(() => MovieHistory, (movieHistory) => movieHistory.movie)
  movieHistories: MovieHistory[];

  @OneToMany(
    () => MovieProductionCompany,
    (movieProductionCompany) => movieProductionCompany.movie
  )
  movieProductionCompanies: MovieProductionCompany[];

  @OneToMany(() => MovieRating, (movieRating) => movieRating.movie)
  movieRatings: MovieRating[];

  @OneToMany(() => MovieServers, (movieServers) => movieServers.movie)
  movieServers: MovieServers[];

  @OneToMany(() => MovieWriters, (movieWriters) => movieWriters.movie)
  movieWriters: MovieWriters[];
}
