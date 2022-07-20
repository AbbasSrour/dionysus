import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import Actor from "./actor.entity";
import { Series } from "./series.entity";

@Entity("series_cast", { schema: "dionysus" })
@Unique(["actorId", "seriesId", "role"])
export class SeriesCast extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_cast_id" })
  seriesCastId: number;

  @ManyToOne(() => Series, (series) => series.seriesCast, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  seriesId: Series;

  @ManyToOne(() => Actor, (actor) => actor.seriesCast, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "actor_id", referencedColumnName: "actorId" }])
  actorId: Actor;

  @Column("character varying", {
    name: "actor_role",
    nullable: true,
    length: 100,
  })
  role: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
