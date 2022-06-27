import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Series } from "./Series";
import { Directors } from "./Directors";

@Entity("series_directors", { schema: "dionysus" })
export class SeriesDirectors {
  @ManyToOne(() => Series, (series) => series.seriesDirectors, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  series: Series;

  @ManyToOne(() => Directors, (directors) => directors.seriesDirectors, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "director_id", referencedColumnName: "directorId" }])
  director: Directors;
}
