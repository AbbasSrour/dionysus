import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieGenreSchema } from "../schemas/movie-genre.schema";
import { createMovieGenreHandler } from "../controllers/movie-genre.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(MovieGenreSchema),
  createMovieGenreHandler
);

export default Router;
