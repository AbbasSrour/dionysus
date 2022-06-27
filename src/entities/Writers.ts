import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MovieWriters } from "./MovieWriters";
import { SeriesWriters } from "./SeriesWriters";

@Index("pk_writers", ["writerId"], { unique: true })
@Entity("writers", { schema: "dionysus" })
export class Writers {
  @PrimaryGeneratedColumn({ type: "bigint", name: "writer_id" })
  writerId: string;

  @Column("character varying", { name: "writer_first_name", length: 100 })
  writerFirstName: string;

  @Column("character varying", { name: "writer_last_name", length: 100 })
  writerLastName: string;

  @Column("character varying", {
    name: "writer_image",
    nullable: true,
    length: 480,
  })
  writerImage: string | null;

  @OneToMany(() => MovieWriters, (movieWriters) => movieWriters.writer)
  movieWriters: MovieWriters[];

  @OneToMany(() => SeriesWriters, (seriesWriters) => seriesWriters.writer)
  seriesWriters: SeriesWriters[];
}
