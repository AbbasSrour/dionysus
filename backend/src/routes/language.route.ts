import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import {
  LanguageSchema,
  MovieLanguageSchema,
} from "../schemas/language.schema";
import {
  createLanguageHandler,
  createMovieLanguageHandler,
} from "../controllers/language.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(LanguageSchema),
  createLanguageHandler
);

Router.route("/movie").post(
  ApiCheck,
  Validate(MovieLanguageSchema),
  createMovieLanguageHandler
);

export default Router;
