import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { ActorSchema } from "../schemas/actor.schema";
import { createImdbHandler } from "../controllers/imdb.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(ActorSchema), createImdbHandler);

export default Router;
