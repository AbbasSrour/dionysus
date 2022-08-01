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
import Genre from "./genre.entity";
import Movie from "./movie.entity";

@Entity("movie_genres", { schema: "dionysus" })
@Unique("UNIQUE_MOVIE_ID_GENRE_ID", ["genreId", "movieId"])
export class MovieGenres extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_genre_id" })
  movieGenreId: number;

  @ManyToOne(() => Genre, (genre) => genre.movieGenres, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "genre_id", referencedColumnName: "genreId" }])
  genreId: Genre;

  @ManyToOne(() => Movie, (movie) => movie.movieGenres, {
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
