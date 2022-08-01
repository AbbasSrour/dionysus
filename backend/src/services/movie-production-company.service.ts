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
  const { movie, productionCompany } = input;
  const movieProductionCompany = AppDataSource.manager.create(
    MovieProductionCompany,
    {
      movieId: AppDataSource.manager.create(Movie, movie),
      productionCompanyId: AppDataSource.manager.create(
        ProductionCompany,
        productionCompany
      ),
    }
  );
  return (await AppDataSource.manager.save(
    movieProductionCompany
  )) as MovieProductionCompany;
};
