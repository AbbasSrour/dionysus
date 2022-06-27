import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { ProductionCompany } from "./ProductionCompany";
import { Series } from "./Series";

@Entity("series_production_company", { schema: "dionysus" })
export class SeriesProductionCompany {
  @ManyToOne(
    () => ProductionCompany,
    (productionCompany) => productionCompany.seriesProductionCompanies,
    { onDelete: "CASCADE", onUpdate: "CASCADE" }
  )
  @JoinColumn([
    {
      name: "production_company_id",
      referencedColumnName: "productionCompanyId",
    },
  ])
  productionCompany: ProductionCompany;

  @ManyToOne(() => Series, (series) => series.seriesProductionCompanies, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn([{ name: "series_id", referencedColumnName: "seriesId" }])
  series: Series;
}
