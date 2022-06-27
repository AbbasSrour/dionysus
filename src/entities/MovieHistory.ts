import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movie } from "./Movie";
import { Users } from "./Users";

@Entity("movie_history", { schema: "dionysus" })
export class MovieHistory {
  @Column("date", {
    name: "watch_date",
    nullable: true,
    default: () => "CURRENT_DATE",
  })
  watchDate: string | null;

  @Column("time without time zone", {
    name: "watch_time",
    nullable: true,
    default: () => "CURRENT_TIME",
  })
  watchTime: string | null;

  @Column("integer", { name: "minutes_watched", nullable: true })
  minutesWatched: number | null;

  @ManyToOne(() => Movie, (movie) => movie.movieHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movie;

  @ManyToOne(() => Users, (users) => users.movieHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
