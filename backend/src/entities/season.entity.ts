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
@Unique(["seriesId", "number"])
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

  @Column("character varying", { name: "summery", nullable: true, length: 480 })
  summery: string | null;

  @Column("character varying", {
    name: "wallpaper",
    nullable: true,
    length: 480,
  })
  wallpaper: string | null;

  @Column("character varying", { name: "trailer", nullable: true, length: 480 })
  trailer: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => Episode, (episode) => episode.seasonId)
  episodes: Episode[];
}
