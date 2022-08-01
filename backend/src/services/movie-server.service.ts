import { AppDataSource } from "../utils/data-source.util";
import { MovieServers } from "../entities/movie-servers.entity";
import { MovieServerInput } from "../schemas/movie-server.schema";
import Movie from "../entities/movie.entity";
import { Server } from "../entities/server.entity";

const movieServerRepo = AppDataSource.getRepository(MovieServers);

export const createMovieServerService = async (
  input: MovieServerInput
): Promise<MovieServers> => {
  const { movie, server, url } = input;
  const movieServer = AppDataSource.manager.create(MovieServers, {
    movieId: AppDataSource.manager.create(Movie, movie),
    serverId: AppDataSource.manager.create(Server, server),
    url,
  });
  return (await AppDataSource.manager.save(movieServer)) as MovieServers;
};
