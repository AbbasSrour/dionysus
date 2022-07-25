import { AppDataSource } from "../utils/data-source.util";
import MovieImdb from "../entities/movie-imdb.entity";
import { MovieImdbInput } from "../schemas/movie-imdb.schema";
import Movie from "../entities/movie.entity";
import Imdb from "../entities/imdb.entity";

const movieImdbRepo = AppDataSource.getRepository(MovieImdb);

export const createMovieImdbService = async (
  input: MovieImdbInput
): Promise<MovieImdb> => {
  const myInput = {
    movieId: AppDataSource.manager.create(Movie, input.movie),
    imdbId: AppDataSource.manager.create(Imdb, input.imdb),
  };
  const movieImdb = AppDataSource.manager.create(MovieImdb, myInput);
  return (await AppDataSource.manager.save(movieImdb)) as MovieImdb;
};
