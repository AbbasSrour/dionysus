import { object, TypeOf } from "zod";
import { MovieSchema } from "./movie.schema";
import { ProductionCompanySchema } from "./production-company.schema";

export const MovieProductionCompanySchema = object({
  body: object({
    movie: MovieSchema.shape.body,
    productionCompany: ProductionCompanySchema.shape.body,
  }),
});

export type MovieProductionCompanyInput = TypeOf<
  typeof MovieProductionCompanySchema
>["body"];
