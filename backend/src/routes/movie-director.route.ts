import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieDirectorSchema } from "../schemas/movie-director.schema";
import { createMovieDirectorHandler } from "../controllers/movie-director.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(MovieDirectorSchema),
  createMovieDirectorHandler
);

export default Router;
