import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { GenreRating } from "./GenreRating";
import { MovieGenres } from "./MovieGenres";
import { SeriesGenres } from "./SeriesGenres";

@Index("pk_genre", ["genreId"], { unique: true })
@Index("unique_genre_name", ["genreName"], { unique: true })
@Entity("genre", { schema: "dionysus" })
export class Genre {
  @PrimaryGeneratedColumn({ type: "bigint", name: "genre_id" })
  genreId: string;

  @Column("character varying", {
    name: "genre_name",
    nullable: true,
    unique: true,
    length: 100,
  })
  genreName: string | null;

  @OneToMany(() => GenreRating, (genreRating) => genreRating.genre)
  genreRatings: GenreRating[];

  @OneToMany(() => MovieGenres, (movieGenres) => movieGenres.genre)
  movieGenres: MovieGenres[];

  @OneToMany(() => SeriesGenres, (seriesGenres) => seriesGenres.genre)
  seriesGenres: SeriesGenres[];
}
