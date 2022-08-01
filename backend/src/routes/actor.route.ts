import express from "express";
import { ApiCheck } from "../middleware/api.middleware";
import { Validate } from "../middleware/validate.middleware";
import { ActorSchema } from "../schemas/actor.schema";
import { createActorHandler } from "../controllers/actor.controller";

const Router = express.Router();

Router.route("/").post(ApiCheck, Validate(ActorSchema), createActorHandler);

export default Router;
