import {
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Genre } from "./Genre";
import { Series } from "./Series";

@Index("series_genres_genre_id_series_id_key", ["genreId", "seriesId"], {
  unique: true,
})
@Entity("series_genres", { schema: "dionysus" })
export class SeriesGenres {
  @PrimaryGeneratedColumn({ type: "bigint", name: "genre_id", unique: true })
  genreId: string;

  @PrimaryGeneratedColumn({ type: "bigint", name: "series_id", unique: true })
  seriesId: string;

  @ManyToOne(() => Genre, (genre) => genre.seriesGenres, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "genre_id", referencedColumnName: "genreId" }])
  genre: Genre;

  @ManyToOne(() => Series, (series) => series.seriesGenres, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  series: Series;
}
