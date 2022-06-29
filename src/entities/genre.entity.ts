import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { GenreRating } from "./genre-rating.entity";
import { MovieGenres } from "./movie-genres.entity";
import { SeriesGenres } from "./series-genres.entity";

@Entity("genre", { schema: "dionysus" })
export default class Genre extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "genre_id" })
  genre_id: number;

  @Column("character varying", {
    name: "genre_name",
    unique: true,
    length: 100,
  })
  genreName: string;

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
