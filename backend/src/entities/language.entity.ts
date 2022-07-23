import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import MovieLanguages from "./movie-languages.entity";
import SeriesLanguages from "./series-languages.entity";

@Entity("language", { schema: "dionysus" })
export default class Language extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "language_id" })
  languageId: number;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @OneToMany(
    () => MovieLanguages,
    (movieLanguages) => movieLanguages.languageId
  )
  movieLanguages: MovieLanguages[];

  @OneToMany(
    () => SeriesLanguages,
    (seriesLanguages) => seriesLanguages.languageId
  )
  seriesLanguages: SeriesLanguages[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
