import MovieCast from "../entities/movie-cast.entity";
import { AppDataSource } from "../utils/data-source.util";
import { MovieCastInput } from "../schemas/movie-cast.schema";
import Movie from "../entities/movie.entity";
import Actor from "../entities/actor.entity";

const movieCastRepo = AppDataSource.getRepository(MovieCast);

export const createMovieCastService = async (
  input: MovieCastInput
): Promise<MovieCast> => {
  const myInput = {
    movieId: AppDataSource.manager.create(Movie, input.movie),
    actorId: AppDataSource.manager.create(Actor, input.actor),
    role: input.role,
  };
  const movieCast = AppDataSource.manager.create(MovieCast, myInput);
  return (await movieCastRepo.save(movieCast)) as MovieCast;
};
