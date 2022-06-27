import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Actor } from "./Actor";
import { Movie } from "./Movie";

@Index("unique_role", ["actorId", "actorRole", "movieId"], { unique: true })
@Entity("movie_cast", { schema: "dionysus" })
export class MovieCast {
  @PrimaryGeneratedColumn({ type: "bigint", name: "actor_id", unique: true })
  actorId: string;

  @PrimaryGeneratedColumn({ type: "bigint", name: "movie_id", unique: true })
  movieId: string;

  @Column("character varying", {
    name: "actor_role",
    nullable: true,
    unique: true,
    length: 100,
  })
  actorRole: string | null;

  @ManyToOne(() => Actor, (actor) => actor.movieCasts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "actor_id", referencedColumnName: "actorId" }])
  actor: Actor;

  @ManyToOne(() => Movie, (movie) => movie.movieCasts, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movie;
}
