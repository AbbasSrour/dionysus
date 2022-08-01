import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieImdbSchema } from "../schemas/movie-imdb.schema";
import { createMovieImdbHandler } from "../controllers/movie-imdb.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(MovieImdbSchema),
  createMovieImdbHandler
);

export default Router;
