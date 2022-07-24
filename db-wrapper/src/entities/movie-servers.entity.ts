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
import Movie from "./movie.entity";
import { Servers } from "./server.entity";

@Entity("movie_servers", { schema: "dionysus" })
@Unique("UNIQUE_MOVIE_ID_SERVER_ID", ["movieId", "serverId"])
export class MovieServers extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_servers_id" })
  MovieServersId: number;

  @ManyToOne(() => Movie, (movie) => movie.movieServers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movieId: Movie;

  @ManyToOne(() => Servers, (servers) => servers.movieServers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "server_id", referencedColumnName: "serverId" }])
  serverId: Servers;

  @Column("character varying", { name: "url", length: 480 })
  url: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
