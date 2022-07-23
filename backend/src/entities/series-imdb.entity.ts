import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Series } from "./series.entity";
import Imdb from "./imdb.entity";

@Entity("series_imdb", { schema: "dionysus" })
export default class SeriesImdb extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_imdb_id" })
  seriesImdbId: number;

  @ManyToOne(() => Series, (series) => series.seriesId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  seriesId: Series;

  @ManyToOne(() => Imdb, (imdb) => imdb.imdbId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "imdb_id", referencedColumnName: "imdbId" }])
  imdbId: Imdb;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
