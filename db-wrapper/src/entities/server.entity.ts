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

@Entity("servers", { schema: "dionysus" })
export class Servers extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "servers_id" })
  serverId: number;

  @Column("character varying", {
    name: "name",
    unique: true,
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
