import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { Movie } from "./Movie";
import { ProductionCompany } from "./ProductionCompany";

@Entity("movie_production_company", { schema: "dionysus" })
export class MovieProductionCompany {
  @ManyToOne(() => Movie, (movie) => movie.movieProductionCompanies, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movie: Movie;

  @ManyToOne(
    () => ProductionCompany,
    (productionCompany) => productionCompany.movieProductionCompanies,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "production_company_id",
      referencedColumnName: "productionCompanyId",
    },
  ])
  productionCompany: ProductionCompany;
}
