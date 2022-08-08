import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { GenreSchema, MovieGenreSchema } from "../schemas/genre.schema";
import {
  createGenreHandler,
  createMovieGenreHandler,
} from "../controllers/genre.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(GenreSchema), createGenreHandler);

Router.route("/movie").post(
  ApiCheck,
  Validate(MovieGenreSchema),
  createMovieGenreHandler
);

export default Router;
