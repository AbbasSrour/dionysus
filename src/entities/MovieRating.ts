import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movie } from "./Movie";
import { Users } from "./Users";

@Entity("movie_rating", { schema: "dionysus" })
export class MovieRating {
  @Column("integer", { name: "rating", nullable: true })
  rating: number | null;

  @ManyToOne(() => Movie, (movie) => movie.movieRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movie;

  @ManyToOne(() => Users, (users) => users.movieRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
