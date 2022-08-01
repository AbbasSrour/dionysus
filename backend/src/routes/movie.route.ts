import express from "express";
import { Validate } from "../middleware/validate.middleware";
import { MovieSchema } from "../schemas/movie.schema";
import { createMovieHandler } from "../controllers/movie.controller";
import { ApiCheck } from "../middleware/api.middleware";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(MovieSchema), createMovieHandler);

export default Router;
