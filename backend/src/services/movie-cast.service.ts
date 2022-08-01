import MovieCast from "../entities/movie-cast.entity";
import { AppDataSource } from "../utils/data-source.util";
import { MovieCastInput } from "../schemas/movie-cast.schema";
import Actor from "../entities/actor.entity";
import Movie from "../entities/movie.entity";

const movieCastRepo = AppDataSource.getRepository(MovieCast);

export const createMovieCastService = async (
  input: MovieCastInput
): Promise<MovieCast> => {
  const { actor, role, movie } = input;
  const movieCast = AppDataSource.manager.create(MovieCast, {
    actorId: AppDataSource.manager.create(Actor, actor),
    movieId: AppDataSource.manager.create(Movie, movie),
    role,
  });
  return (await movieCastRepo.save(movieCast)) as MovieCast;
};
