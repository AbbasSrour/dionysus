import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Season } from "./Season";
import { Series } from "./Series";
import { SeriesHistory } from "./SeriesHistory";
import { SeriesServers } from "./SeriesServers";

@Index("pk_episode", ["episodeId"], { unique: true })
@Index(
  "episode_episode_number_season_id_series_id_key",
  ["episodeNumber", "seasonId", "seriesId"],
  { unique: true }
)
@Entity("episode", { schema: "dionysus" })
export class Episode {
  @PrimaryGeneratedColumn({ type: "bigint", name: "episode_id" })
  episodeId: string;

  @PrimaryGeneratedColumn({ type: "bigint", name: "series_id", unique: true })
  seriesId: string;

  @PrimaryGeneratedColumn({ type: "bigint", name: "season_id", unique: true })
  seasonId: string;

  @Column("integer", { name: "episode_number", unique: true })
  episodeNumber: number;

  @Column("character varying", {
    name: "episode_name",
    nullable: true,
    length: 100,
  })
  episodeName: string | null;

  @Column("character varying", {
    name: "episode_wallpaper",
    nullable: true,
    length: 480,
  })
  episodeWallpaper: string | null;

  @Column("character varying", { name: "summery", nullable: true, length: 480 })
  summery: string | null;

  @Column("integer", { name: "release_date", nullable: true })
  releaseDate: number | null;

  @Column("integer", { name: "episode_length", nullable: true })
  episodeLength: number | null;

  @ManyToOne(() => Season, (season) => season.episodes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "season_id", referencedColumnName: "seasonId" }])
  season: Season;

  @ManyToOne(() => Series, (series) => series.episodes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  series: Series;

  @OneToMany(() => SeriesHistory, (seriesHistory) => seriesHistory.episode)
  seriesHistories: SeriesHistory[];

  @OneToMany(() => SeriesServers, (seriesServers) => seriesServers.episode)
  seriesServers: SeriesServers[];
}
