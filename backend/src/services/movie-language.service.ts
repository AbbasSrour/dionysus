import { AppDataSource } from "../utils/data-source.util";
import MovieLanguages from "../entities/movie-languages.entity";
import Movie from "../entities/movie.entity";
import Language from "../entities/language.entity";
import { MovieLanguagesInput } from "../schemas/movie-langauges.schema";

const movieLanguagesRepo = AppDataSource.getRepository(MovieLanguages);

export const createMovieLanguageService = async (
  input: MovieLanguagesInput
): Promise<MovieLanguages> => {
  const { movie, language } = input;
  const movieLanguage = AppDataSource.manager.create(MovieLanguages, {
    movieId: AppDataSource.manager.create(Movie, movie),
    languageId: AppDataSource.manager.create(Language, language),
  });
  return (await AppDataSource.manager.save(movieLanguage)) as MovieLanguages;
};
