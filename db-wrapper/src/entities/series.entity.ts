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
import { Episode } from "./episode.entity";
import { Season } from "./season.entity";
import { SeriesCast } from "./series-cast.entity";
import { SeriesDirectors } from "./series-directors.entity";
import { SeriesGenres } from "./series-genres.entity";
import { SeriesProductionCompany } from "./series-production-company.entity";
import { SeriesRating } from "./series-rating.entity";
import { SeriesWriters } from "./series-writers.entity";
import SeriesLanguages from "./series-languages.entity";
import SeriesImdb from "./series-imdb.entity";

@Entity("series", { schema: "dionysus" })
@Unique("UNIQUE_SERIES_NAME_RELEASE_YEAR", ["name", "releaseYear"])
export class Series extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_id" })
  seriesId: number;

  @Column("character varying", {
    name: "name",
    length: 100,
  })
  name: string;

  @Column("integer", { name: "release_Year" })
  releaseYear: number;

  @Column("character varying", {
    name: "poster",
    nullable: true,
    length: 480,
  })
  poster: string | null;

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

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Episode, (episode) => episode.seriesId)
  episodes: Episode[];

  @OneToMany(() => Season, (season) => season.seriesId)
  seasons: Season[];

  @OneToMany(() => SeriesCast, (seriesCast) => seriesCast.seriesId)
  seriesCast: SeriesCast[];

  @OneToMany(
    () => SeriesDirectors,
    (seriesDirectors) => seriesDirectors.seriesId
  )
  seriesDirectors: SeriesDirectors[];

  @OneToMany(() => SeriesGenres, (seriesGenres) => seriesGenres.seriesId)
  seriesGenres: SeriesGenres[];

  @OneToMany(
    () => SeriesProductionCompany,
    (seriesProductionCompany) => seriesProductionCompany.seriesId
  )
  seriesProductionCompany: SeriesProductionCompany[];

  @OneToMany(() => SeriesRating, (seriesRating) => seriesRating.seriesId)
  seriesRatings: SeriesRating[];

  @OneToMany(() => SeriesWriters, (seriesWriters) => seriesWriters.seriesId)
  seriesWriters: SeriesWriters[];

  @OneToMany(
    () => SeriesLanguages,
    (seriesLanguages) => seriesLanguages.seriesId
  )
  seriesLanguages: SeriesLanguages[];

  @OneToMany(() => SeriesImdb, (seriesImdb) => seriesImdb.seriesId)
  seriesImdb: SeriesImdb[];
}
