import { AppDataSource } from "../utils/data-source.util";
import MovieImdb from "../entities/movie-imdb.entity";
import { MovieImdbInput } from "../schemas/movie-imdb.schema";
import Movie from "../entities/movie.entity";
import Imdb from "../entities/imdb.entity";

const movieImdbRepo = AppDataSource.getRepository(MovieImdb);

export const createMovieImdbService = async (
  input: MovieImdbInput
): Promise<MovieImdb> => {
  const { movie, imdb } = input;
  const movieImdb = AppDataSource.manager.create(MovieImdb, {
    movieId: AppDataSource.manager.create(Movie, movie),
    imdbId: AppDataSource.manager.create(Imdb, imdb),
  });
  return (await AppDataSource.manager.save(movieImdb)) as MovieImdb;
};
