import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { MovieServerSchema, ServerSchema } from "../schemas/server.schema";
import {
  createMovieServerHandler,
  createServerHandler,
} from "../controllers/server.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(ServerSchema), createServerHandler);

Router.route("/movie").post(
  ApiCheck,
  Validate(MovieServerSchema),
  createMovieServerHandler
);

export default Router;
