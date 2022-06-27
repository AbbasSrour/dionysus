import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MovieServers } from "./MovieServers";
import { SeriesServers } from "./SeriesServers";

@Index("pk_servers", ["serverId"], { unique: true })
@Entity("servers", { schema: "dionysus" })
export class Servers {
  @PrimaryGeneratedColumn({ type: "bigint", name: "server_id" })
  serverId: string;

  @Column("character varying", {
    name: "server_name",
    nullable: true,
    length: 100,
  })
  serverName: string | null;

  @Column("character varying", {
    name: "server_url",
    nullable: true,
    length: 480,
  })
  serverUrl: string | null;

  @OneToMany(() => MovieServers, (movieServers) => movieServers.server)
  movieServers: MovieServers[];

  @OneToMany(() => SeriesServers, (seriesServers) => seriesServers.server)
  seriesServers: SeriesServers[];
}
