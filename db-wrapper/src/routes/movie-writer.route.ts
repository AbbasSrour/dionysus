import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieWriterSchema } from "../schemas/movie-writer.schema";
import { createMovieWriterHandler } from "../controllers/movie-writer.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(MovieWriterSchema),
  createMovieWriterHandler
);

export default Router;
