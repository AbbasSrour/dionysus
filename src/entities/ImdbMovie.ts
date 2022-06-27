import { Column, Entity, Index, OneToMany } from "typeorm";
import { Movie } from "./Movie";

@Index("pk_imdb_movie", ["imdbId"], { unique: true })
@Entity("imdb_movie", { schema: "dionysus" })
export class ImdbMovie {
  @Column("character varying", { primary: true, name: "imdb_id", length: 100 })
  imdbId: string;

  @Column("real", { name: "rating", nullable: true, precision: 24 })
  rating: number | null;

  @Column("integer", { name: "vote", nullable: true })
  vote: number | null;

  @OneToMany(() => Movie, (movie) => movie.imdb)
  movies: Movie[];
}
