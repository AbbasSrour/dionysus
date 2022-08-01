import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { MovieServers } from "./movie-servers.entity";
import { SeriesServers } from "./series-servers.entity";

@Entity("server", { schema: "dionysus" })
@Unique("UNIQUE_SERVER_NAME", ["name"])
@Unique("UNIQUE_SERVER_URL", ["url"])
export class Server extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "servers_id" })
  serverId: number;

  @Column("character varying", {
    name: "name",
    length: 100,
  })
  name: string;

  @Column("character varying", {
    name: "url",
    length: 480,
  })
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(() => MovieServers, (movieServers) => movieServers.serverId)
  movieServers: MovieServers[];

  @OneToMany(() => SeriesServers, (seriesServers) => seriesServers.serverId)
  seriesServers: SeriesServers[];
}
