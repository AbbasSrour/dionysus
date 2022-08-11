import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import {
  DirectorSchema,
  MovieDirectorSchema,
} from "../schemas/director.schema";
import {
  createDirectorHandler,
  createMovieDirectorHandler,
  getDirectorByIdHandler,
  getDirectorHandler,
} from "../controllers/director.controller";

const Router = express.Router();

Router.route("/")
  .get(getDirectorHandler)
  .post(ApiCheck, Validate(DirectorSchema), createDirectorHandler);

Router.route("/:id").get(getDirectorByIdHandler);

Router.route("/movie").post(
  ApiCheck,
  Validate(MovieDirectorSchema),
  createMovieDirectorHandler
);

export default Router;
