import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { MovieProductionCompany } from "./MovieProductionCompany";
import { SeriesProductionCompany } from "./SeriesProductionCompany";

@Index("pk_production_company", ["productionCompanyId"], { unique: true })
@Entity("production_company", { schema: "dionysus" })
export class ProductionCompany {
  @PrimaryGeneratedColumn({ type: "bigint", name: "production_company_id" })
  productionCompanyId: string;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("character varying", { name: "image", nullable: true, length: 480 })
  image: string | null;

  @OneToMany(
    () => MovieProductionCompany,
    (movieProductionCompany) => movieProductionCompany.productionCompany
  )
  movieProductionCompanies: MovieProductionCompany[];

  @OneToMany(
    () => SeriesProductionCompany,
    (seriesProductionCompany) => seriesProductionCompany.productionCompany
  )
  seriesProductionCompanies: SeriesProductionCompany[];
}
