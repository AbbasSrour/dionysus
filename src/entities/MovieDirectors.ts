import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movie } from "./Movie";
import { Directors } from "./Directors";

@Entity("movie_directors", { schema: "dionysus" })
export class MovieDirectors {
  @ManyToOne(() => Movie, (movie) => movie.movieDirectors, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movie;

  @ManyToOne(() => Directors, (directors) => directors.movieDirectors, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "director_id", referencedColumnName: "directorId" }])
  director: Directors;
}
