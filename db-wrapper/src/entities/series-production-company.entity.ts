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
import { ProductionCompany } from "./production-company.entity";
import { Series } from "./series.entity";

@Entity("series_production_company", { schema: "dionysus" })
@Unique("UNIQUE_SERIES_ID_PRODUCTION_COMPANY_ID", [
  "seriesId",
  "productionCompanyId",
])
export class SeriesProductionCompany extends BaseEntity {
  @PrimaryGeneratedColumn({ name: "series_production_company_id" })
  SeriesProductionCompanyId: number;

  @ManyToOne(
    () => ProductionCompany,
    (productionCompany) => productionCompany.seriesProductionCompany,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "production_company_id",
      referencedColumnName: "productionCompanyId",
    },
  ])
  productionCompanyId: ProductionCompany;

  @ManyToOne(() => Series, (series) => series.seriesProductionCompany, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  seriesId: Series;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
