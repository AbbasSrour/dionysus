import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Episode } from "./episode.entity";
import Imdb from "./imdb.entity";
import { Season } from "./season.entity";
import { SeriesCast } from "./series-cast.entity";
import { SeriesDirectors } from "./series-directors.entity";
import { SeriesGenres } from "./series-genres.entity";
import { SeriesProductionCompany } from "./series-production-company.entity";
import { SeriesRating } from "./series-rating.entity";
import { SeriesWriters } from "./series-writers.entity";

@Entity("series", { schema: "dionysus" })
@Unique(["imdbId"])
@Unique(["name", "releaseYear"])
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
    name: "wallpaper",
    nullable: true,
    length: 480,
  })
  wallpaper: string | null;

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
}
