import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { ProductionCompanySchema } from "../schemas/production-company.schema";
import { createProductionCompanyHandler } from "../controllers/production-company.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(ProductionCompanySchema),
  createProductionCompanyHandler
);

export default Router;
