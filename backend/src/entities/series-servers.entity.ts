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
import { Episode } from "./episode.entity";
import { Server } from "./server.entity";

@Entity("series_servers", { schema: "dionysus" })
@Unique("UNIQUE_EPISODE_ID_SERVER_ID", ["episodeId", "serverId"])
export class SeriesServers extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_server_id" })
  seriesServerId: number;

  @ManyToOne(() => Episode, (episode) => episode.seriesServers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "episode_id", referencedColumnName: "episodeId" }])
  episodeId: Episode;

  @ManyToOne(() => Server, (servers) => servers.seriesServers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "server_id", referencedColumnName: "serverId" }])
  serverId: Server;

  @Column("character varying", { name: "url", length: 480 })
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
