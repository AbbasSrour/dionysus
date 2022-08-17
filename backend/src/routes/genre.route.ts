import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { GenreSchema, ShowGenreSchema } from "../schemas/genre.schema";
import {
  createGenreHandler,
  createShowGenreHandler,
  getGenreByIdHandler,
  getGenreHandler,
} from "../controllers/genre.controller";

const Router = express.Router();

Router.route("/")
  .get(getGenreHandler)
  .post(ApiCheck, Validate(GenreSchema), createGenreHandler);

Router.route("/:id").get(getGenreByIdHandler);

Router.route("/show").post(
  ApiCheck,
  Validate(ShowGenreSchema),
  createShowGenreHandler
);

export default Router;
