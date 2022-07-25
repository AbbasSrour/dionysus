import { AppDataSource } from "../utils/data-source.util";
import { MovieGenres } from "../entities/movie-genres.entity";
import { MovieGenreInput } from "../schemas/movie-genre.schema";
import Movie from "../entities/movie.entity";
import Genre from "../entities/genre.entity";

const movieGenreRepo = AppDataSource.getRepository(MovieGenres);

export const createMovieGenreService = async (input: MovieGenreInput): Promise<MovieGenres> => {
  const myInput = {
    movieId: AppDataSource.manager.create(Movie, input.movie),
    genreId: AppDataSource.manager.create(Genre, input.genre)
  }
  const movieGenre = AppDataSource.manager.create(MovieGenres, myInput);
  return await AppDataSource.manager.save(movieGenre) as MovieGenres;

}