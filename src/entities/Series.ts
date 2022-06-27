import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Episode } from "./Episode";
import { Season } from "./Season";
import { SeriesCast } from "./SeriesCast";
import { SeriesDirectors } from "./SeriesDirectors";
import { SeriesGenres } from "./SeriesGenres";
import { SeriesProductionCompany } from "./SeriesProductionCompany";
import { SeriesRating } from "./SeriesRating";
import { SeriesWriters } from "./SeriesWriters";

@Index(
  "series_series_name_series_release_year_key",
  ["releaseDate", "seriesName"],
  { unique: true }
)
@Index("pk_series", ["seriesId"], { unique: true })
@Entity("series", { schema: "dionysus" })
export class Series {
  @PrimaryGeneratedColumn({ type: "bigint", name: "series_id" })
  seriesId: string;

  @Column("character varying", {
    name: "series_name",
    unique: true,
    length: 100,
  })
  seriesName: string;

  @Column("integer", { name: "release_date", nullable: true, unique: true })
  releaseDate: number | null;

  @Column("character varying", {
    name: "series_wallpaper",
    nullable: true,
    length: 480,
  })
  seriesWallpaper: string | null;

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

  @OneToMany(() => Episode, (episode) => episode.series)
  episodes: Episode[];

  @OneToMany(() => Season, (season) => season.series)
  seasons: Season[];

  @OneToMany(() => SeriesCast, (seriesCast) => seriesCast.series)
  seriesCasts: SeriesCast[];

  @OneToMany(() => SeriesDirectors, (seriesDirectors) => seriesDirectors.series)
  seriesDirectors: SeriesDirectors[];

  @OneToMany(() => SeriesGenres, (seriesGenres) => seriesGenres.series)
  seriesGenres: SeriesGenres[];

  @OneToMany(
    () => SeriesProductionCompany,
    (seriesProductionCompany) => seriesProductionCompany.series
  )
  seriesProductionCompanies: SeriesProductionCompany[];

  @OneToMany(() => SeriesRating, (seriesRating) => seriesRating.series)
  seriesRatings: SeriesRating[];

  @OneToMany(() => SeriesWriters, (seriesWriters) => seriesWriters.series)
  seriesWriters: SeriesWriters[];
}
