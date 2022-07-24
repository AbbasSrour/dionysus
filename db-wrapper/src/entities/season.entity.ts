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
import { Episode } from "./episode.entity";
import { Series } from "./series.entity";

@Entity("season", { schema: "dionysus" })
@Unique("UNIQUE_SEASON_NUMBER_SERIES_ID", ["seriesId", "number"])
export class Season extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "season_id" })
  seasonId: number;

  @Column("integer", { name: "number" })
  number: number;

  @ManyToOne(() => Series, (series) => series.seasons, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  seriesId: Series;

  @Column("character varying", { name: "summary", nullable: true, length: 480 })
  summary: string | null;

  @Column("character varying", {
    name: "poster",
    nullable: true,
    length: 480,
  })
  poster: string | null;

  @Column("character varying", { name: "trailer", nullable: true, length: 480 })
  trailer: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Episode, (episode) => episode.seasonId)
  episodes: Episode[];
}
