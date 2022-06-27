import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Series } from "./Series";
import { Users } from "./Users";

@Entity("series_rating", { schema: "dionysus" })
export class SeriesRating {
  @Column("integer", { name: "rating", nullable: true })
  rating: number | null;

  @ManyToOne(() => Series, (series) => series.seriesRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  series: Series;

  @ManyToOne(() => Users, (users) => users.seriesRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
