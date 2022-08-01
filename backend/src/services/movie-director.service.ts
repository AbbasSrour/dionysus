import { AppDataSource } from "../utils/data-source.util";
import MovieDirectors from "../entities/movie-directors.entity";
import { MovieDirectorInput } from "../schemas/movie-director.schema";
import Movie from "../entities/movie.entity";
import Director from "../entities/director.entity";

const movieDirectorRepo = AppDataSource.getRepository(MovieDirectors);

export const createMovieDirectorService = async (
  input: MovieDirectorInput
): Promise<MovieDirectors> => {
  const { movie, director } = input;
  const movieDirector = AppDataSource.manager.create(MovieDirectors, {
    movieId: AppDataSource.manager.create(Movie, movie),
    directorId: AppDataSource.manager.create(Director, director),
  });
  return (await AppDataSource.manager.save(movieDirector)) as MovieDirectors;
};
