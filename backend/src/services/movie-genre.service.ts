import { AppDataSource } from "../utils/data-source.util";
import { MovieGenres } from "../entities/movie-genres.entity";
import { MovieGenreInput } from "../schemas/movie-genre.schema";
import Genre from "../entities/genre.entity";
import Movie from "../entities/movie.entity";

const movieGenreRepo = AppDataSource.getRepository(MovieGenres);

export const createMovieGenreService = async (
  input: MovieGenreInput
): Promise<MovieGenres> => {
  const { movie, genre } = input;
  const movieGenre = AppDataSource.manager.create(MovieGenres, {
    movieId: AppDataSource.manager.create(Movie, movie),
    genreId: AppDataSource.manager.create(Genre, genre),
  });
  return (await AppDataSource.manager.save(movieGenre)) as MovieGenres;
};
