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
import { Writer } from "./writer.entity";

@Entity("movie_writers", { schema: "dionysus" })
@Unique("UNIQUE_MOVIE_ID_WRITER_ID", ["movieId", "writerId"])
export class MovieWriters extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_writer_id" })
  movieWriterId: number;

  @ManyToOne(() => Writer, (writers) => writers.movieWriters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "writer_id", referencedColumnName: "writerId" }])
  writerId: Writer;

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
