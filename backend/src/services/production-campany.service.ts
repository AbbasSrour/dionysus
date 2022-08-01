import { AppDataSource } from "../utils/data-source.util";
import { ProductionCompany } from "../entities/production-company.entity";
import { ProductionCompanyInput } from "../schemas/production-company.schema";

const productionCompanyRepo = AppDataSource.getRepository(ProductionCompany);

export const createProductionCompanyService = async (
  input: ProductionCompanyInput
): Promise<ProductionCompany> => {
  const productionCompany = AppDataSource.manager.create(
    ProductionCompany,
    input
  );
  return await AppDataSource.manager.save(productionCompany);
};
