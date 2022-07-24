import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import Movie from "./movie.entity";
import { ProductionCompany } from "./production-company.entity";

@Entity("movie_production_company", { schema: "dionysus" })
@Unique(["movieId", "productionCompanyId"])
export class MovieProductionCompany extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "movie_production_company_id" })
  MovieProductionCompanyId: number;

  @ManyToOne(
    () => ProductionCompany,
    (productionCompany) => productionCompany.movieProductionCompany,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "production_company_id",
      referencedColumnName: "productionCompanyId",
    },
  ])
  productionCompanyId: ProductionCompany;

  @ManyToOne(() => Movie, (movie) => movie.movieProductionCompany, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "movie_id", referencedColumnName: "movieId" }])
  movieId: Movie;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
