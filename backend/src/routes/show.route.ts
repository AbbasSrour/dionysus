import express from "express";
import {
  createShowHandler,
  getShowByIdHandler,
  getShowHandler,
} from "../controllers/show.controller";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { ShowSchema } from "../schemas/show.schema";

const Router = express.Router();

Router.route("/")
  .get(getShowHandler)
  .post(ApiCheck, Validate(ShowSchema), createShowHandler);

Router.route("/:id").get(getShowByIdHandler);

export default Router;
