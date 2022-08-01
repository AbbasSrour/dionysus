import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { GenreRating } from "./genre-rating.entity";
import { MovieGenres } from "./movie-genres.entity";
import { SeriesGenres } from "./series-genres.entity";

@Entity("genre", { schema: "dionysus" })
@Unique("UNIQUE_GENRE_NAME", ["name"])
export default class Genre extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "genre_id" })
  genreId: number;

  @Column("character varying", {
    name: "name",
    length: 100,
  })
  name: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => GenreRating, (genreRating) => genreRating.genreId)
  genreRatings: GenreRating[];

  @OneToMany(() => MovieGenres, (movieGenres) => movieGenres.genreId)
  movieGenres: MovieGenres[];

  @OneToMany(() => SeriesGenres, (seriesGenres) => seriesGenres.genreId)
  seriesGenres: SeriesGenres[];
}
