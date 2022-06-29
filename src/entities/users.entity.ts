import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { GenreRating } from "./genre-rating.entity";
import { MovieHistory } from "./movie-history.entity";
import { MovieRating } from "./movie-rating.entity";
import { SeriesHistory } from "./series-history.entity";
import { SeriesRating } from "./series-rating.entity";

@Entity("users", { schema: "dionysus" })
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "user_id" })
  userId: number;

  @Column("character varying", {
    name: "user_name",
    unique: true,
    length: 100,
  })
  userName: string;

  @Column("character varying", {
    name: "email",
    unique: true,
    length: 480,
  })
  email: string;

  @Column("character varying", {
    name: "user_password",
    nullable: true,
    length: 200,
  })
  password: string | null;

  @Column("character varying", {
    name: "first_name",
    length: 100,
  })
  firstName: string;

  @Column("character varying", {
    name: "first_name",
    length: 100,
  })
  lastName: string;

  @Column()
  age: number;

  @Column("character varying", {
    name: "image",
    default: "default.png",
    length: 280,
  })
  image: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => GenreRating, (genreRating) => genreRating.userId)
  genreRatings: GenreRating[];

  @OneToMany(() => MovieHistory, (movieHistory) => movieHistory.userId)
  movieHistory: MovieHistory[];

  @OneToMany(() => MovieRating, (movieRating) => movieRating.userId)
  movieRatings: MovieRating[];

  @OneToMany(() => SeriesHistory, (seriesHistory) => seriesHistory.userId)
  seriesHistory: SeriesHistory[];

  @OneToMany(() => SeriesRating, (seriesRating) => seriesRating.userId)
  seriesRatings: SeriesRating[];
}
