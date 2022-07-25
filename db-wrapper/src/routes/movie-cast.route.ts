import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieCastSchema } from "../schemas/movie-cast.schema";
import { createMovieCastHandler } from "../controllers/movie-cast.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(MovieCastSchema),
  createMovieCastHandler
);

export default Router;
