import Movie from "../entities/movie.entity";
import { AppDataSource } from "../utils/data-source.util";
import { MovieInput } from "../schemas/movie.schema";

const MovieRepo = AppDataSource.getRepository(Movie);

export const createMovieService = async (input: MovieInput): Promise<Movie> => {
  const movie = AppDataSource.manager.create(Movie, input);
  return (await AppDataSource.manager.save(movie)) as Movie;
};

export const searchMovies = async (
  name: string
): Promise<Array<Movie> | null> => {
  return await MovieRepo.createQueryBuilder("movie")
    .where("movie.name like :name", { name: `%${name}%` })
    .getMany();
};
