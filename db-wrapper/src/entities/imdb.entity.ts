import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import MovieImdb from "./movie-imdb.entity";
import SeriesImdb from "./series-imdb.entity";

@Entity("imdb", { schema: "dionysus" })
export default class Imdb extends BaseEntity {
  @PrimaryColumn("character varying", { name: "imdb_id" })
  imdbId: string;

  @Column("real", { name: "rating", nullable: true })
  rating: number | null;

  @Column("integer", { name: "vote", nullable: true })
  voteCount: number | null;

  @OneToMany(() => MovieImdb, (movieImdb) => movieImdb.imdbId)
  movieImdb: MovieImdb[];

  @OneToMany(() => SeriesImdb, (seriesImdb) => seriesImdb.imdbId)
  seriesImdb: SeriesImdb[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
