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
import Director from "./director.entity";
import { Series } from "./series.entity";

@Entity("series_directors", { schema: "dionysus" })
@Unique("UNIQUE_SERIES_ID_DIRECTOR_ID", ["seriesId", "directorId"])
export class SeriesDirectors extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_director_id" })
  seriesDirectorId: number;

  @ManyToOne(() => Director, (directors) => directors.seriesDirectors, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "director_id", referencedColumnName: "directorId" }])
  directorId: Director;

  @ManyToOne(() => Series, (series) => series.seriesDirectors, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  seriesId: Series;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
