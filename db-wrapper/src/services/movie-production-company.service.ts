import { AppDataSource } from "../utils/data-source.util";
import { MovieProductionCompany } from "../entities/movie-production-company.entity";
import { MovieProductionCompanyInput } from "../schemas/movie-production-company.schema";
import Movie from "../entities/movie.entity";
import { ProductionCompany } from "../entities/production-company.entity";

const movieProductionCompanyRepo = AppDataSource.getRepository(
  MovieProductionCompany
);

export const createMovieProductionCompanyService = async (
  input: MovieProductionCompanyInput
): Promise<MovieProductionCompany> => {
  const myInput = {
    movieId: AppDataSource.manager.create(Movie, input.movie),
    productionCompanyId: AppDataSource.manager.create(
      ProductionCompany,
      input.productionCompany
    ),
  };
  const movieProductionCompany = AppDataSource.manager.create(
    MovieProductionCompany,
    myInput
  );
  return (await AppDataSource.manager.save(
    movieProductionCompany
  )) as MovieProductionCompany;
};
