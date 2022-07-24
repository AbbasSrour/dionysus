import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from "typeorm";
import { MovieProductionCompany } from "./movie-production-company.entity";
import { SeriesProductionCompany } from "./series-production-company.entity";

@Entity("production_company", { schema: "dionysus" })
@Unique("UNIQUE_PRODUCTION_COMPANY_NAME", ["name"])
export class ProductionCompany extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "production_company_id" })
  productionCompanyId: number;

  @Column("character varying", { name: "name", length: 100 })
  name: string;

  @Column("character varying", { name: "image", nullable: true, length: 480 })
  image: string | null;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @OneToMany(
    () => MovieProductionCompany,
    (movieProductionCompany) => movieProductionCompany.productionCompanyId
  )
  movieProductionCompany: MovieProductionCompany[];

  @OneToMany(
    () => SeriesProductionCompany,
    (seriesProductionCompany) => seriesProductionCompany.productionCompanyId
  )
  seriesProductionCompany: SeriesProductionCompany[];
}
