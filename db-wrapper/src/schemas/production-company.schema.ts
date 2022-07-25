import { object, string, TypeOf } from "zod";

export const ProductionCompanySchema = object({
  body: object({
    name: string({
      required_error: "The name of the production company is required",
    })
      .min(3, "The name is too short")
      .max(40, "The name is too long"),
    image: string(),
  }),
});

export type ProductionCompanyInput = TypeOf<
  typeof ProductionCompanySchema
>["body"];
