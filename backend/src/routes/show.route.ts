import express from "express";
import {
  createShowHandler,
  getPopularShowHandler,
  getShowByIdHandler,
  getShowDefaultImagesHandler,
  getShowGenresHandler,
  getShowHandler,
} from "../controllers/show.controller";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { ShowSchema } from "../schemas/show.schema";

const Router = express.Router();

Router.route("/")
  .get(getShowHandler)
  .post(ApiCheck, Validate(ShowSchema), createShowHandler);

Router.route("/popular").get(getPopularShowHandler);

Router.route("/:id").get(getShowByIdHandler);

// TODO change default to query
Router.route("/:id/image/default").get(getShowDefaultImagesHandler);

Router.route("/:id/genres").get(getShowGenresHandler);

export default Router;
