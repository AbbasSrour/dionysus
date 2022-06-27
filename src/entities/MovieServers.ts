import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movie } from "./Movie";
import { Servers } from "./Servers";

@Entity("movie_servers", { schema: "dionysus" })
export class MovieServers {
  @Column("character varying", { name: "url", length: 480 })
  url: string;

  @ManyToOne(() => Movie, (movie) => movie.movieServers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movie;

  @ManyToOne(() => Servers, (servers) => servers.movieServers, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "server_id", referencedColumnName: "serverId" }])
  server: Servers;
}
