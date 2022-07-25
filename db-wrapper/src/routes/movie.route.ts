import express from "express";
import { Validate } from "../middleware/validate.middleware";
import { MovieSchema } from "../schemas/movie.schema";
import { ApiCheck } from "../middleware/api.middleware";
import { createMovieHandler } from "../controllers/movie.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(MovieSchema), createMovieHandler);

export default Router;
