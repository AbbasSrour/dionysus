import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MovieDirectors } from "./MovieDirectors";
import { SeriesDirectors } from "./SeriesDirectors";

@Index("pk_directors", ["directorId"], { unique: true })
@Entity("directors", { schema: "dionysus" })
export class Directors {
  @Column("character varying", { name: "director_first_name", length: 100 })
  directorFirstName: string;

  @Column("character varying", {
    name: "director_last_name",
    nullable: true,
    length: 100,
  })
  directorLastName: string | null;

  @Column("character varying", {
    name: "director_image",
    nullable: true,
    length: 480,
  })
  directorImage: string | null;

  @PrimaryGeneratedColumn({ type: "bigint", name: "director_id" })
  directorId: string;

  @OneToMany(() => MovieDirectors, (movieDirectors) => movieDirectors.director)
  movieDirectors: MovieDirectors[];

  @OneToMany(
    () => SeriesDirectors,
    (seriesDirectors) => seriesDirectors.director
  )
  seriesDirectors: SeriesDirectors[];
}
