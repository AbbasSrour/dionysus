import express from "express";
import { Validate } from "../middleware/validate.middleware";
import { MovieServerSchema } from "../schemas/movie-server.schema";
import { createMovieServerHandler } from "../controllers/movie-server.controller";
import { ApiCheck } from "../middleware/api.middleware";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(MovieServerSchema),
  createMovieServerHandler
);

export default Router;
