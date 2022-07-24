import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import Movie from "./movie.entity";
import Imdb from "./imdb.entity";

@Entity("movie_imdb", { schema: "dionysus" })
@Unique("UNIQUE_MOVIE_ID_IMDB_ID", ["imdbId", "movieId"])
export default class MovieImdb {
  @PrimaryGeneratedColumn({ name: "movie_imdb_id" })
  movieImdbId: number;

  @ManyToOne(() => Movie, (movie) => movie.movieId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movieId: Movie;

  @ManyToOne(() => Imdb, (imdb) => imdb.imdbId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "imdb_id", referencedColumnName: "imdbId" }])
  imdbId: Imdb;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
