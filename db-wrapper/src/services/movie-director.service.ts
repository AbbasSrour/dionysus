import { AppDataSource } from "../utils/data-source.util";
import MovieDirectors from "../entities/movie-directors.entity";
import { MovieDirectorInput } from "../schemas/movie-director.schema";
import Movie from "../entities/movie.entity";
import Director from "../entities/director.entity";

const movieDirectorRepo = AppDataSource.getRepository(MovieDirectors);

type ms = typeof Movie;
type ds = typeof Director;
type mds = {
  movieId: Movie;
  directorId: Director;
};

export const createMovieDirectorService = async (
  input: MovieDirectorInput
): Promise<MovieDirectors> => {
  const myInput = {
    movieId: AppDataSource.manager.create(Movie, input.movie),
    directorId: AppDataSource.manager.create(Director, input.director),
  };
  const movieDirector = AppDataSource.manager.create(MovieDirectors, myInput);
  return (await AppDataSource.manager.save(movieDirector)) as MovieDirectors;
};
