import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieStudioSchema, StudioSchema } from "../schemas/studio.schema";
import {
  createMovieStudioHandler,
  createStudioHandler,
  getStudioByIdHandler,
  getStudioHandler,
} from "../controllers/studio.controller";

const Router = express.Router();

Router.route("/")
  .get(getStudioHandler)
  .post(ApiCheck, Validate(StudioSchema), createStudioHandler);

Router.route("/:id").get(getStudioByIdHandler);

Router.route("/movie").post(
  ApiCheck,
  Validate(MovieStudioSchema),
  createMovieStudioHandler
);

export default Router;
