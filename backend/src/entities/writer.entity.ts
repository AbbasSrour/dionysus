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
import { MovieWriters } from "./movie-writters.entity";
import { SeriesWriters } from "./series-writers.entity";

@Entity("writer", { schema: "dionysus" })
@Unique("UNIQUE_WRITER_NAME_IMAGE", ["name", "image"])
export class Writer extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "writer_id" })
  writerId: number;

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

  @OneToMany(() => MovieWriters, (movieWriters) => movieWriters.writerId)
  movieWriters: MovieWriters[];

  @OneToMany(() => SeriesWriters, (seriesWriters) => seriesWriters.writerId)
  seriesWriters: SeriesWriters[];
}