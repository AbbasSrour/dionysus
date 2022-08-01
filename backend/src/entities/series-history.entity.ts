import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from "typeorm";
import { Episode } from "./episode.entity";
import { Users } from "./users.entity";

@Entity("series_history", { schema: "dionysus" })
@Unique("UNIQUE_EPISODE_ID_USER_ID", ["episodeId", "userId"])
export class SeriesHistory extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_history_id" })
  seriesHistoryId: number;

  @ManyToOne(() => Users, (users) => users.seriesHistory, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  userId: Users;

  @ManyToOne(() => Episode, (episode) => episode.seriesHistory, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "episode_id", referencedColumnName: "episodeId" }])
  episodeId: Episode;

  @Column("integer", { name: "minutes_watched", nullable: true })
  minutesWatched: number | null;

  @Column("date", {
    name: "watch_date",
    default: () => "CURRENT_DATE",
  })
  watchDate: string;

  @Column("time without time zone", {
    name: "watch_time",
    default: () => "CURRENT_TIME",
  })
  watchTime: string;
}
