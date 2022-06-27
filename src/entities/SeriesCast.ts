import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Actor } from "./Actor";
import { Series } from "./Series";

@Index(
  "series_cast_actor_id_actor_role_series_id_key",
  ["actorId", "actorRole", "seriesId"],
  { unique: true }
)
@Entity("series_cast", { schema: "dionysus" })
export class SeriesCast {
  @PrimaryGeneratedColumn({ type: "bigint", name: "actor_id", unique: true })
  actorId: string;

  @PrimaryGeneratedColumn({ type: "bigint", name: "series_id", unique: true })
  seriesId: string;

  @Column("character varying", {
    name: "actor_role",
    nullable: true,
    unique: true,
    length: 100,
  })
  actorRole: string | null;

  @ManyToOne(() => Actor, (actor) => actor.seriesCasts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "actor_id", referencedColumnName: "actorId" }])
  actor: Actor;

  @ManyToOne(() => Series, (series) => series.seriesCasts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  series: Series;
}
