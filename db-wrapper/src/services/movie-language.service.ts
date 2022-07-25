import { AppDataSource } from "../utils/data-source.util";
import MovieLanguages from "../entities/movie-languages.entity";
import { MovieLanguagesInput } from "../schemas/movie-langauges.schema";
import Movie from "../entities/movie.entity";
import Language from "../entities/language.entity";

const movieLanguagesRepo = AppDataSource.getRepository(MovieLanguages);

export const createMovieLanguageService = async (
  input: MovieLanguagesInput
): Promise<MovieLanguages> => {
  const myInput = {
    movieId: AppDataSource.manager.create(Movie, input.movie),
    languageId: AppDataSource.manager.create(Language, input.language),
  };
  const movieLanguage = AppDataSource.manager.create(MovieLanguages, myInput);
  return (await AppDataSource.manager.save(movieLanguage)) as MovieLanguages;
};
