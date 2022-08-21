import express from "express";
import {ApiCheck} from "../middleware/api.middleware";
import {Validate} from "../middleware/validate.middleware";
import {ActorSchema, ShowCastSchema} from "../schemas/actor.schema";
import {
  createActorHandler,
  createShowCastHandler,
  getActorByIdHandler,
  getActorHandler,
} from "../controllers/actor.controller";

const Router = express.Router();

Router.route("/")
  .get(getActorHandler)
  .post(ApiCheck, Validate(ActorSchema), createActorHandler);

Router.route("/:id").get(getActorByIdHandler);

Router.route("/show").post(
  ApiCheck,
  Validate(ShowCastSchema),
  createShowCastHandler
);

export default Router;
