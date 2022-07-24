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
import Movie from "./movie.entity";

@Entity("movie_cast", { schema: "dionysus" })
@Unique(["actorId", "movieId", "role"])
export default class MovieCast extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_cast_id" })
  movieCastId: number;

  @ManyToOne(() => Movie, (movie) => movie.movieCast, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movieId: Movie;

  @ManyToOne(() => Actor, (actor) => actor.movieCast, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "actor_id", referencedColumnName: "actorId" }])
  actorId: Actor;

  @Column("character varying", {
    name: "role",
    nullable: true,
    length: 100,
  })
  role: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
