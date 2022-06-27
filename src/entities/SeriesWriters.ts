import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Series } from "./Series";
import { Writers } from "./Writers";

@Entity("series_writers", { schema: "dionysus" })
export class SeriesWriters {
  @ManyToOne(() => Series, (series) => series.seriesWriters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  series: Series;

  @ManyToOne(() => Writers, (writers) => writers.seriesWriters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "writer_id", referencedColumnName: "writerId" }])
  writer: Writers;
}
