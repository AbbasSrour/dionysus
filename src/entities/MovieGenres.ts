import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Genre } from "./Genre";
import { Movie } from "./Movie";

@Index("movie_genres_genre_id_movie_id_key", ["genreId", "movieId"], {
  unique: true,
})
@Entity("movie_genres", { schema: "dionysus" })
export class MovieGenres {
  @PrimaryGeneratedColumn({ type: "bigint", name: "genre_id", unique: true })
  genreId: string;

  @PrimaryGeneratedColumn({ type: "bigint", name: "movie_id", unique: true })
  movieId: string;

  @ManyToOne(() => Genre, (genre) => genre.movieGenres, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "genre_id", referencedColumnName: "genreId" }])
  genre: Genre;

  @ManyToOne(() => Movie, (movie) => movie.movieGenres, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movie;
}
