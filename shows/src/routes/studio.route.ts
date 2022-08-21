import express from "express";
import {ApiCheck} from "../middleware/api.middleware";
import {Validate} from "../middleware/validate.middleware";
import {ShowStudioSchema, StudioSchema} from "../schemas/studio.schema";
import {
  createShowStudioHandler,
  createStudioHandler,
  getStudioByIdHandler,
  getStudioHandler,
} from "../controllers/studio.controller";

const Router = express.Router();

Router.route("/")
  .get(getStudioHandler)
  .post(ApiCheck, Validate(StudioSchema), createStudioHandler);

Router.route("/:id").get(getStudioByIdHandler);

Router.route("/show").post(
  ApiCheck,
  Validate(ShowStudioSchema),
  createShowStudioHandler
);

export default Router;
