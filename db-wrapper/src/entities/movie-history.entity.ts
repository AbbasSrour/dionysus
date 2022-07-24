import {
  JoinColumn,
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import Movie from "./movie.entity";
import { Users } from "./users.entity";

@Entity("movie_history", { schema: "dionysus" })
@Unique(["movieId", "userId"])
export class MovieHistory extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_history_id" })
  movieHistoryId: number;

  @ManyToOne(() => Movie, (movie) => movie.movieHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movieId: Movie;

  @ManyToOne(() => Users, (users) => users.movieHistory, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  userId: Users;

  @Column("date", {
    name: "watch_date",
    default: () => "CURRENT_DATE",
  })
  watchDate: string;

  @Column("time without time zone", {
    name: "watch_time",
    default: () => "CURRENT_TIME",
  })
  watchTime: string;

  @Column("integer", { name: "minutes_watched", nullable: true })
  minutesWatched: number | null;
}
