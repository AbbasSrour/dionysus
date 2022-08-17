import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { DirectorSchema, ShowDirectorSchema } from "../schemas/director.schema";
import {
  createDirectorHandler,
  createShowDirectorHandler,
  getDirectorByIdHandler,
  getDirectorHandler,
} from "../controllers/director.controller";

const Router = express.Router();

Router.route("/")
  .get(getDirectorHandler)
  .post(ApiCheck, Validate(DirectorSchema), createDirectorHandler);

Router.route("/:id").get(getDirectorByIdHandler);

Router.route("/show").post(
  ApiCheck,
  Validate(ShowDirectorSchema),
  createShowDirectorHandler
);

export default Router;
