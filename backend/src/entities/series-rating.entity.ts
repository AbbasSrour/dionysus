import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { Series } from "./series.entity";
import { Users } from "./users.entity";

@Entity("series_rating", { schema: "dionysus" })
@Unique("UNIQUE_SERIES_ID_USER_ID", ["seriesId", "userId"])
export class SeriesRating extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_rating_id" })
  seriesRatingId: number;

  @ManyToOne(() => Series, (series) => series.seriesRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  seriesId: Series;

  @ManyToOne(() => Users, (users) => users.seriesRatings, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  userId: Users;

  @Column("integer", { name: "rating" })
  rating: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
