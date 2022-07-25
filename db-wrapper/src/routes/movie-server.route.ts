import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieServerSchema } from "../schemas/movie-server.schema";
import { createMovieServerHandler } from "../controllers/movie-server.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(MovieServerSchema),
  createMovieServerHandler
);

export default Router;
