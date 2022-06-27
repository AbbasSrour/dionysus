import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Episode } from "./Episode";
import { Servers } from "./Servers";

@Entity("series_servers", { schema: "dionysus" })
export class SeriesServers {
  @Column("character varying", { name: "url", length: 480 })
  url: string;

  @ManyToOne(() => Episode, (episode) => episode.seriesServers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "episode_id", referencedColumnName: "episodeId" }])
  episode: Episode;

  @ManyToOne(() => Servers, (servers) => servers.seriesServers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "server_id", referencedColumnName: "serverId" }])
  server: Servers;
}
