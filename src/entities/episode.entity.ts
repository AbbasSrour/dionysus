import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Season } from "./season.entity";
import { SeriesHistory } from "./series-history.entity";
import { SeriesServers } from "./series-servers.entity";
import { Series } from "./series.entity";

@Entity("episode", { schema: "dionysus" })
@Unique(["number", "seasonId", "seriesId"])
export class Episode extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "episode_id" })
  episodeId: number;

  @ManyToOne(() => Season, (season) => season.episodes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "season_id", referencedColumnName: "seasonId" }])
  seasonId: Season;

  @ManyToOne(() => Series, (series) => series.episodes, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  seriesId: Series;

  @Column("integer", { name: "number" })
  number: number;

  @Column("character varying", {
    name: "name",
    nullable: true,
    length: 100,
  })
  name: string | null;

  @Column("character varying", {
    name: "wallpaper",
    nullable: true,
    length: 480,
  })
  wallpaper: string | null;

  @Column("character varying", {
    name: "summery",
    nullable: true,
    length: 480,
  })
  summery: string | null;

  @Column("integer", { name: "release_date", nullable: true })
  releaseDate: number | null;

  @Column("integer", { name: "episode_length", nullable: true })
  episodeLength: number | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => SeriesHistory, (seriesHistory) => seriesHistory.episodeId)
  seriesHistory: SeriesHistory[];

  @OneToMany(() => SeriesServers, (seriesServers) => seriesServers.episodeId)
  seriesServers: SeriesServers[];
}
