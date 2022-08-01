import { MovieProductionCompanyInput } from "../schemas/movie-production-company.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createMovieProductionCompanyService = async (
  input: MovieProductionCompanyInput
) => {
  const response = await got.post(
    `${env.DB_WRAPPER}/api/v1/movie-production-company`,
    {
      json: {
        apikey: env.API_KEY,
        movie: input.movie,
        productionCompany: input.productionCompany,
      },
    }
  );
  return JSON.parse(response.body).data.movieProductionCompany;
};
