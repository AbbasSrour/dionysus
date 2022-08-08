import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieStudioSchema, StudioSchema } from "../schemas/studio.schema";
import { createStudioHandler } from "../controllers/studio.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(StudioSchema), createStudioHandler);

Router.route("/movie").post(
  ApiCheck,
  Validate(MovieStudioSchema),
  createStudioHandler
);

export default Router;
