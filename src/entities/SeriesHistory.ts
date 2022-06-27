import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Episode } from "./Episode";
import { Users } from "./Users";

@Entity("series_history", { schema: "dionysus" })
export class SeriesHistory {
  @Column("date", {
    name: "watch_date",
    nullable: true,
    default: () => "CURRENT_DATE",
  })
  watchDate: string | null;

  @Column("time without time zone", {
    name: "watch_time",
    nullable: true,
    default: () => "CURRENT_TIME",
  })
  watchTime: string | null;

  @Column("integer", { name: "minutes_watched", nullable: true })
  minutesWatched: number | null;

  @ManyToOne(() => Episode, (episode) => episode.seriesHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "episode_id", referencedColumnName: "episodeId" }])
  episode: Episode;

  @ManyToOne(() => Users, (users) => users.seriesHistories, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "user_id", referencedColumnName: "userId" }])
  user: Users;
}
