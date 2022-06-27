import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movie } from "./Movie";
import { Writers } from "./Writers";

@Entity("movie_writers", { schema: "dionysus" })
export class MovieWriters {
  @ManyToOne(() => Movie, (movie) => movie.movieWriters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movie;

  @ManyToOne(() => Writers, (writers) => writers.movieWriters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "writer_id", referencedColumnName: "writerId" }])
  writer: Writers;
}
