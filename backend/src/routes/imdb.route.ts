import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { createImdbHandler } from "../controllers/imdb.controller";
import { ImdbSchema } from "../schemas/imdb.schema";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(ImdbSchema), createImdbHandler);

export default Router;
