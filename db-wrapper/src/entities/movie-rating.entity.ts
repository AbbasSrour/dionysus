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
import Movie from "./movie.entity";
import { Users } from "./users.entity";

@Entity("movie_rating", { schema: "dionysus" })
@Unique("UNIQUE_USER_ID_MOVIE_ID", ["userId", "movieId"])
export class MovieRating extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_rating_id" })
  movieRatingsId: number;

  @ManyToOne(() => Users, (users) => users.movieRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  userId: Users;

  @ManyToOne(() => Movie, (movie) => movie.movieRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movieId: Movie;

  @Column("integer", { name: "rating" })
  rating: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
