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
import Language from "./language.entity";

@Entity("series_languages", { schema: "dionysus" })
@Unique("UNIQUE_LANGUAGE_ID_SERIES_ID", ["languageId", "seriesId"])
export default class SeriesLanguages extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_languages_id" })
  seriesLanguagesId: number;

  @ManyToOne(() => Series, (seriesLanguages) => seriesLanguages.seriesId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "serie_id", referencedColumnName: "seriesId" }])
  seriesId: Series;

  @ManyToOne(() => Language, (seriesLanguages) => seriesLanguages.languageId, {
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "language_id", referencedColumnName: "languageId" }])
  languageId: Language;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}