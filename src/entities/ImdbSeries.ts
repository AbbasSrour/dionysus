import { Column, Entity, Index } from "typeorm";

@Index("pk_imdb_series", ["imdbId"], { unique: true })
@Entity("imdb_series", { schema: "dionysus" })
export class ImdbSeries {
  @Column("character varying", { primary: true, name: "imdb_id", length: 100 })
  imdbId: string;

  @Column("real", { name: "rating", nullable: true, precision: 24 })
  rating: number | null;

  @Column("integer", { name: "vote", nullable: true })
  vote: number | null;
}
