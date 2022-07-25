import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { DirectorSchema } from "../schemas/director.schema";
import { createDirectorHandler } from "../controllers/director.controller";

const Router = express.Router();

Router.route("/").post(
  ApiCheck,
  Validate(DirectorSchema),
  createDirectorHandler
);

export default Router;
