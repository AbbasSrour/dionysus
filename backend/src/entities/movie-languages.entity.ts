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
import Language from "./language.entity";

@Entity("movie_languages", { schema: "dionysus" })
@Unique("UNIQUE_LANGUAGE_ID_MOVIE_ID", ["languageId", "movieId"])
export default class MovieLanguages extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_language_id" })
  movieLanguagesId: number;

  @ManyToOne(() => Movie, (movie) => movie.movieLanguages, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movieId: Movie;

  @ManyToOne(() => Language, (language) => language.movieLanguages, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "language_id", referencedColumnName: "languageId" }])
  languageId: Language;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
