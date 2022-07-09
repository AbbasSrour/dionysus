import Movie from "../entities/movie.entity";
import { AppDataSource } from "../utils/data-source.util"

const MovieRepo = AppDataSource.getRepository(Movie);

export const searchMovies = async (name: string): Promise<Array<Movie>|null > => {
  return await MovieRepo.createQueryBuilder("movie")
    .where("movie.name like :name", { name: `%${name}%` })
    .getMany();
};
