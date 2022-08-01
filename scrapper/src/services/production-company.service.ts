import { ProductionCompanyInput } from "../schemas/production-company.schema";
import got from "got";
import { env } from "../utils/validate-env.util";

export const createProductionCompanyService = async (
  input: ProductionCompanyInput
) => {
  const response = await got.post(
    `${env.DB_WRAPPER}/api/v1/production-companies`,
    {
      json: {
        apikey: env.API_KEY,
        ...input,
      },
    }
  );
  // @ts-ignore
  return JSON.parse(response.body).data.productionCompany;
};
