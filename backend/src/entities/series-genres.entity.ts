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
import Genre from "./genre.entity";
import { Series } from "./series.entity";

@Entity("series_genres", { schema: "dionysus" })
@Unique(["genreId", "seriesId"])
export class SeriesGenres extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_genres" })
  seriesGenreId: number;

  @ManyToOne(() => Genre, (genre) => genre.seriesGenres, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "genre_id", referencedColumnName: "genreId" }])
  genreId: Genre;

  @ManyToOne(() => Series, (series) => series.seriesGenres, {
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
