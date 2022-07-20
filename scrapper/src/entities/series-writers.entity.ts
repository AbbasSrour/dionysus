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
import { Series } from "./series.entity";
import { Writers } from "./writer.entity";

@Entity("series_writers", { schema: "dionysus" })
@Unique(["seriesId", "writerId"])
export class SeriesWriters extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_writers_id" })
  seriesWritersId: number;

  @ManyToOne(() => Writers, (writers) => writers.seriesWriters, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "writer_id", referencedColumnName: "writerId" }])
  writerId: Writers;

  @ManyToOne(() => Series, (series) => series.seriesWriters, {
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
