import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import Movie from "./movie.entity";
import { Writers } from "./writer.entity";

@Entity("movie_writers", { schema: "dionysus" })
@Unique(["movieId", "writerId"])
export class MovieWriters extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_writer_id" })
  movieWriterId: number;

  @ManyToOne(() => Writers, (writers) => writers.movieWriters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "writer_id", referencedColumnName: "writerId" }])
  writerId: Writers;

  @ManyToOne(() => Movie, (movie) => movie.movieWriters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movieId: Movie;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
