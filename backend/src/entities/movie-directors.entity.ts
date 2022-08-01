import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import Director from "./director.entity";
import Movie from "./movie.entity";

@Entity("movie_directors", { schema: "dionysus" })
@Unique("UNIQUE_DIRECTOR_ID_MOVIE_ID", ["directorId", "movieId"])
export default class MovieDirectors {
  @PrimaryGeneratedColumn()
  movieDirectorId: number;

  @ManyToOne(() => Director, (directors) => directors.movieDirectors, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "director_id", referencedColumnName: "directorId" }])
  directorId: Director;

  @ManyToOne(() => Movie, (movie) => movie.movieDirectors, {
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
