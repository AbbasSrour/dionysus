import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import MovieCast from "./movie-cast.entity";
import { SeriesCast } from "./series-cast.entity";

@Entity("actor", { schema: "dionysus" })
export default class Actor extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "actor_id" })
  actorId: number;

  @Column("character varying", {
    name: "first_name",
    length: 100,
  })
  firstName: string;

  @Column("character varying", {
    name: "last_name",
    length: 100,
  })
  lastName: string;

  @Column("character varying", {
    name: "image",
    nullable: true,
    length: 480,
  })
  image: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => MovieCast, (movieCast) => movieCast.actorId)
  movieCast: MovieCast[];

  @OneToMany(() => SeriesCast, (seriesCast) => seriesCast.actorId)
  seriesCast: SeriesCast[];
}
