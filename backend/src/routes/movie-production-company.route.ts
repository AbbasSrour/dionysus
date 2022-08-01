import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieProductionCompanySchema } from "../schemas/movie-production-company.schema";
import { createMovieProductionCompanyHandler } from "../controllers/movie-production-company.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(MovieProductionCompanySchema),
  createMovieProductionCompanyHandler
);

export default Router;
