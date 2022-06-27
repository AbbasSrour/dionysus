import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MovieCast } from "./MovieCast";
import { SeriesCast } from "./SeriesCast";

@Index("pk_actor", ["actorId"], { unique: true })
@Entity("actor", { schema: "dionysus" })
export class Actor {
  @PrimaryGeneratedColumn({ type: "bigint", name: "actor_id" })
  actorId: string;

  @Column("character varying", {
    name: "actor_first_name",
    nullable: true,
    length: 100,
  })
  actorFirstName: string | null;

  @Column("character varying", {
    name: "actor_last_name",
    nullable: true,
    length: 100,
  })
  actorLastName: string | null;

  @Column("character varying", {
    name: "actor_image",
    nullable: true,
    length: 480,
  })
  actorImage: string | null;

  @OneToMany(() => MovieCast, (movieCast) => movieCast.actor)
  movieCasts: MovieCast[];

  @OneToMany(() => SeriesCast, (seriesCast) => seriesCast.actor)
  seriesCasts: SeriesCast[];
}
