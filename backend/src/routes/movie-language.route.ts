import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieLanguagesSchema } from "../schemas/movie-langauges.schema";
import { createMovieLanguageHandler } from "../controllers/movie-language.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(MovieLanguagesSchema),
  createMovieLanguageHandler
);

export default Router;
