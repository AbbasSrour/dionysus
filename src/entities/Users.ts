import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GenreRating } from "./GenreRating";
import { MovieHistory } from "./MovieHistory";
import { MovieRating } from "./MovieRating";
import { SeriesHistory } from "./SeriesHistory";
import { SeriesRating } from "./SeriesRating";

@Index("users_user_email_key", ["userEmail"], { unique: true })
@Index("pk_users", ["userId"], { unique: true })
@Entity("users", { schema: "dionysus" })
export class Users {
  @PrimaryGeneratedColumn({ type: "bigint", name: "user_id" })
  userId: string;

  @Column("character varying", {
    name: "user_name",
    nullable: true,
    length: 100,
  })
  userName: string | null;

  @Column("character varying", {
    name: "user_email",
    nullable: true,
    unique: true,
    length: 480,
  })
  userEmail: string | null;

  @Column("character varying", {
    name: "user_password",
    nullable: true,
    length: 480,
  })
  userPassword: string | null;

  @OneToMany(() => GenreRating, (genreRating) => genreRating.user)
  genreRatings: GenreRating[];

  @OneToMany(() => MovieHistory, (movieHistory) => movieHistory.user)
  movieHistories: MovieHistory[];

  @OneToMany(() => MovieRating, (movieRating) => movieRating.user)
  movieRatings: MovieRating[];

  @OneToMany(() => SeriesHistory, (seriesHistory) => seriesHistory.user)
  seriesHistories: SeriesHistory[];

  @OneToMany(() => SeriesRating, (seriesRating) => seriesRating.user)
  seriesRatings: SeriesRating[];
}
