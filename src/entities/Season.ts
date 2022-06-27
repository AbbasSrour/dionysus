import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Episode } from "./Episode";
import { Series } from "./Series";

@Index("pk_season", ["seasonId"], { unique: true })
@Index("season_season_number_series_id_key", ["seasonNumber", "seriesId"], {
  unique: true,
})
@Entity("season", { schema: "dionysus" })
export class Season {
  @PrimaryGeneratedColumn({ type: "bigint", name: "season_id" })
  seasonId: string;

  @PrimaryGeneratedColumn({ type: "bigint", name: "series_id", unique: true })
  seriesId: string;

  @Column("integer", { name: "season_number", unique: true })
  seasonNumber: number;

  @Column("character varying", { name: "summery", nullable: true, length: 480 })
  summery: string | null;

  @Column("character varying", {
    name: "season_wallpaper",
    nullable: true,
    length: 480,
  })
  seasonWallpaper: string | null;

  @Column("character varying", { name: "trailer", nullable: true, length: 480 })
  trailer: string | null;

  @OneToMany(() => Episode, (episode) => episode.season)
  episodes: Episode[];

  @ManyToOne(() => Series, (series) => series.seasons, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  series: Series;
}
