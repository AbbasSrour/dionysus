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
import MovieDirectors from "./movie-directors.entity";
import { SeriesDirectors } from "./series-directors.entity";

@Entity("director", { schema: "dionysus" })
@Unique("UNIQUE_DIRECTOR_NAME_IMAGE", ["name", "image"])
export default class Director extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "director_id" })
  directorId: number;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("character varying", {
    name: "image",
    nullable: true,
    length: 480,
  })
  image: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => MovieDirectors,
    (movieDirectors) => movieDirectors.directorId
  )
  movieDirectors: MovieDirectors[];

  @OneToMany(
    () => SeriesDirectors,
    (seriesDirectors) => seriesDirectors.directorId
  )
  seriesDirectors: SeriesDirectors[];
}
